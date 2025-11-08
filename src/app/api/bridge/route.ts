'use server';
import { NextResponse } from 'next/server';

// Normalization Functions
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
}


// Fetcher function for a specific API
const fetchDataFromApi = async (apiUrl: string, normalizer: (data: any) => any[], providerName: string, symbol: string, interval: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const url = new URL(`${baseUrl}${apiUrl}`);
    url.searchParams.set('symbol', symbol);
    url.searchParams.set('interval', interval);

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${providerName}`);
    }
    const data = await response.json();
    if(data.error) {
        throw new Error(`${providerName} API error: ${data.error}`);
    }
    return normalizer(data);
  } catch (error) {
    console.warn(`Could not fetch from ${providerName}:`, error);
    return null; // Return null on failure to allow fallback
  }
};

// Main Bridge Handler
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol') || 'BTC/USD';
  const interval = searchParams.get('interval') || '1h';

  const providers = [
    { name: 'MarketStack', apiUrl: '/api/marketstack', normalizer: normalizeMarketStack, symbol: 'BTCUSD', interval: '1hour' },
    { name: 'Finnhub', apiUrl: '/api/finnhub', normalizer: normalizeFinnhub, symbol: 'BINANCE:BTCUSDT', interval: '60' },
    { name: 'TwelveData', apiUrl: '/api/twelvedata', normalizer: normalizeTwelveData, symbol: 'BTC/USD', interval: '1h' },
    { name: 'Polygon', apiUrl: '/api/polygon', normalizer: normalizePolygon, symbol: 'X:BTCUSD', interval: 'hour' },
  ];

  for (const provider of providers) {
    // Adjust symbol and interval for each provider for this demo
    let providerSymbol = symbol;
    let providerInterval = interval;
    if (provider.name === 'Finnhub') {
        providerSymbol = 'BINANCE:BTCUSDT';
        if (interval === '1min') providerInterval = '1';
        else if (interval === '1h') providerInterval = '60';
        else providerInterval = 'D';
    } else if(provider.name === 'Polygon'){
        providerSymbol = 'X:BTCUSD';
        if(interval === '1min') providerInterval = 'minute';
        else if(interval === '1h') providerInterval = 'hour';
        else providerInterval = 'day';
    } else if (provider.name === 'MarketStack') {
        providerSymbol = 'BTCUSD';
        if (interval === '1min') providerInterval = '1min';
        else if (interval === '1h') providerInterval = '1hour';
        else providerInterval = '24hour';
    }

    const data = await fetchDataFromApi(provider.apiUrl, provider.normalizer, provider.name, providerSymbol, providerInterval);
    if (data && data.length > 0) {
      console.log(`Successfully fetched data from ${provider.name}`);
      return NextResponse.json({ data, source: provider.name });
    }
  }

  // If all providers fail
  return NextResponse.json({ error: 'All data providers failed to return data.' }, { status: 500 });
}
