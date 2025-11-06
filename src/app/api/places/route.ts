
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
  }

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is not configured. Please set GOOGLE_MAPS_API_KEY in your environment variables.' }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=2500&type=restaurant&key=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();

    if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
      console.error('Google Places API Error:', data);
      return NextResponse.json({ error: data.error_message || 'An error occurred with the Google Places API.' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch from Google Places API:', error);
    return NextResponse.json({ error: 'Failed to fetch restaurant data.' }, { status: 500 });
  }
}
