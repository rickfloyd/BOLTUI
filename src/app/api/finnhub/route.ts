import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol') || 'BINANCE:BTCUSDT';
  const resolution = searchParams.get('interval') || '60'; // Finnhub uses resolution: 1, 5, 15, 30, 60, D, W, M
  const apiKey = process.env.FINNHUB_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key for Finnhub is not configured.' }, { status: 500 });
  }

  // Calculate from/to timestamps for the last ~300 periods
  const to = Math.floor(Date.now() / 1000);
  let from;
  switch (resolution) {
    case '1': from = to - 300 * 60; break;
    case '60': from = to - 300 * 60 * 60; break;
    case 'D': from = to - 300 * 24 * 60 * 60; break;
    default: from = to - 300 * 60 * 60; // Default to hourly
  }

  const url = `https://finnhub.io/api/v1/crypto/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error('Finnhub API Error:', errorText);
      return NextResponse.json({ error: `Finnhub API error: ${apiResponse.statusText}` }, { status: apiResponse.status });
    }
    const responseText = await apiResponse.text();
    if (!responseText) {
        return NextResponse.json({ error: 'Finnhub returned an empty response.' }, { status: 500 });
    }
    const data = JSON.parse(responseText);
    
    if (data.s !== 'ok') {
        return NextResponse.json({ error: 'Finnhub returned no data for the symbol.' }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch from Finnhub API:', error);
    return NextResponse.json({ error: 'Failed to fetch candle data from Finnhub.' }, { status: 500 });
  }
}
