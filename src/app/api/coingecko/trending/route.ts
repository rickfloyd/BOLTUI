
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.COINGECKO_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is not configured. Please set COINGECKO_API_KEY in your environment variables.' }, { status: 500 });
  }

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  try {
    const apiResponse = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'x-cg-demo-api-key': apiKey
      }
    });

    if (!apiResponse.ok) {
        const errorText = await apiResponse.text();
        console.error('CoinGecko API Error:', errorText);
        return NextResponse.json({ error: `CoinGecko API error: ${apiResponse.statusText}` }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch from CoinGecko API:', error);
    return NextResponse.json({ error: 'Failed to fetch trending coins data.' }, { status: 500 });
  }
}
