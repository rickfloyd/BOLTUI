'use server';
import { NextResponse } from 'next/server';

// --- Normalization Functions ---
// These functions transform data from different providers into a consistent format.

const normalizeTwelveData = (data: any) => {
  if (!data.values) return [];
  return data.values.map((v: any) => ({
    time: v.datetime,
    open: parseFloat(v.open),
    high: parseFloat(v.high),
    low: parseFloat(v.low),
    close: parseFloat(v.close),
    volume: v.volume !== undefined ? parseFloat(v.volume) : null,
  })).reverse(); // Reverse because TwelveData returns newest first
};

const normalizeFinnhub = (data: any) => {
  if (!data.t) return [];
  return data.t.map((timestamp: number, i: number) => ({
    time: new Date(timestamp * 1000).toISOString(),
    open: data.o[i],
    high: data.h[i],
    low: data.l[i],
    close: data.c[i],
    volume: data.v[i],
  }));
};

const normalizePolygon = (data: any) => {
    if (!data.results) return [];
    return data.results.map((r: any) => ({
        time: new Date(r.t).toISOString(),
        open: r.o,
        high: r.h,
        low: r.l,
        close: r.c,
        volume: r.v,
    }));
};

const normalizeMarketStack = (data: any) => {
    if (!data.data) return [];
    return data.data.map((d: any) => ({
        time: d.date,
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close,
        volume: d.volume,
    })).reverse(); // Often EOD data is newest first
};

// --- Fetcher Function ---
// A generic function to fetch and process data from a single provider.

const fetchDataFromApi = async (apiUrl: string, normalizer: (data: any) => any[], providerName: string, symbol: string, interval: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const url = new URL(`${baseUrl}${apiUrl}`);
    url.searchParams.set('symbol', symbol);
    url.searchParams.set('interval', interval);

    const response = await fetch(url.toString(), { cache: 'no-store' }); // Disable caching for fresh data

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Failed to fetch from ${providerName}: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const data = await response.json();
    if(data.error) {
        throw new Error(`${providerName} API error: ${data.error}`);
    }

    const normalizedData = normalizer(data);
    if (normalizedData.length === 0) {
      throw new Error(`${providerName} returned no data.`);
    }

    return { data: normalizedData, source: providerName };
  } catch (error: any) {
    console.warn(`Could not fetch from ${providerName}:`, error.message);
    // Re-throw a standardized error object for the Promise.allSettled logic
    throw { provider: providerName, reason: error.message };
  }
};


// --- Main Bridge Handler ---
// This function fetches data from multiple providers in parallel and returns the first successful response.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol') || 'BTC/USD';
  const interval = searchParams.get('interval') || '1h';

  // --- Provider Configuration ---
  // Maps generic parameters to provider-specific requirements.

  const getProviderConfigs = (symbol: string, interval: string) => {
      let finnhubSymbol = 'BINANCE:BTCUSDT', finnhubInterval = '60';
      if (symbol === 'ETH/USD') finnhubSymbol = 'BINANCE:ETHUSDT';
      if (interval === '1min') finnhubInterval = '1'; else if (interval === '1day') finnhubInterval = 'D';

      let polygonSymbol = 'X:BTCUSD', polygonInterval = 'hour';
      if (symbol === 'ETH/USD') polygonSymbol = 'X:ETHUSD';
      if(interval === '1min') polygonInterval = 'minute'; else if(interval === '1day') polygonInterval = 'day';

      let marketStackSymbol = 'BTCUSD', marketStackInterval = '1hour';
      if (symbol === 'ETH/USD') marketStackSymbol = 'ETHUSD';
      if (interval === '1min') marketStackInterval = '1min'; else if (interval === '1day') marketStackInterval = '24hour';

      return [
        { name: 'MarketStack', apiUrl: '/api/marketstack', normalizer: normalizeMarketStack, symbol: marketStackSymbol, interval: marketStackInterval },
        { name: 'Finnhub', apiUrl: '/api/finnhub', normalizer: normalizeFinnhub, symbol: finnhubSymbol, interval: finnhubInterval },
        { name: 'TwelveData', apiUrl: '/api/twelvedata', normalizer: normalizeTwelveData, symbol: symbol, interval: interval },
        { name: 'Polygon', apiUrl: '/api/polygon', normalizer: normalizePolygon, symbol: polygonSymbol, interval: polygonInterval },
      ];
  };

  const providers = getProviderConfigs(symbol, interval);

  // --- Parallel Fetching ---
  // Request data from all providers simultaneously.

  const promises = providers.map(p =>
    fetchDataFromApi(p.apiUrl, p.normalizer, p.name, p.symbol, p.interval)
  );

  const results = await Promise.allSettled(promises);

  // --- Response Handling ---
  // Find the first successful result and return it.

  for (const result of results) {
    if (result.status === 'fulfilled') {
      console.log(`Successfully fetched data from ${result.value.source}`);
      return NextResponse.json(result.value); // Return the first valid data
    }
  }

  // If all providers fail, collect the errors and return a single failure response.
  const errors = results
    .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
    .map(r => r.reason);

  console.error("All data providers failed:", errors);
  return NextResponse.json({
    error: 'All data providers failed to return data.',
    details: errors
  }, { status: 502 }); // 502 Bad Gateway is appropriate here
}
