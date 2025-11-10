import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const apiKey = process.env.FINNHUB_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key for Finnhub is not configured." },
      { status: 500 },
    );
  }

  if (!symbol) {
    return NextResponse.json(
      { error: "Symbol parameter is required." },
      { status: 400 },
    );
  }

  // Use the /quote endpoint for real-time stock prices
  const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("Finnhub API Error:", errorText);
      return NextResponse.json(
        { error: `Finnhub API error: ${apiResponse.statusText}` },
        { status: apiResponse.status },
      );
    }

    const responseText = await apiResponse.text();
    if (!responseText) {
      return NextResponse.json(
        { error: "Finnhub returned an empty response." },
        { status: 500 },
      );
    }

    const data = JSON.parse(responseText);

    // The quote endpoint returns { c: 123, dp: 1.2, ... }. If 'c' (current price) is 0, it often means the symbol is not found or data is unavailable.
    if (data.c === 0 && data.dp === 0) {
      return NextResponse.json(
        { error: "Finnhub returned no data for the symbol." },
        { status: 404 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch from Finnhub API:", error);
    return NextResponse.json(
      { error: "Failed to fetch quote data from Finnhub." },
      { status: 500 },
    );
  }
}
