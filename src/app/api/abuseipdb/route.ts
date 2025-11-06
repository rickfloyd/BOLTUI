
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const confidenceMinimum = searchParams.get('confidenceMinimum') || '90';
  const apiKey = process.env.ABUSEIPDB_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is not configured. Please set ABUSEIPDB_API_KEY in your environment variables.' }, { status: 500 });
  }

  const url = `https://api.abuseipdb.com/api/v2/blacklist?confidenceMinimum=${confidenceMinimum}`;

  try {
    const apiResponse = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Key': apiKey
      }
    });

    if (!apiResponse.ok) {
        const errorText = await apiResponse.text();
        console.error('AbuseIPDB API Error:', errorText);
        return NextResponse.json({ error: `AbuseIPDB API error: ${apiResponse.statusText}` }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch from AbuseIPDB API:', error);
    return NextResponse.json({ error: 'Failed to fetch blacklist data.' }, { status: 500 });
  }
}
