import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol") || "BTCUSD";
  const interval = searchParams.get("interval") || "1hour"; // e.g., 1min, 5min, 10min, 15min, 30min, 1hour, 3hour, 6hour, 12hour, 24hour
  const apiKey = process.env.MARKETSTACK_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key for MarketStack is not configured." },
      { status: 500 },
    );
  }

  // MarketStack has different endpoints for intraday and EOD
  let url;
  if (interval.includes("min") || interval.includes("hour")) {
    // Intraday endpoint
    url = `http://api.marketstack.com/v1/intraday?access_key=${apiKey}&symbols=${symbol}&interval=${interval}&limit=100`;
  } else {
    // End-of-day (EOD) endpoint
    url = `http://api.marketstack.com/v1/eod?access_key=${apiKey}&symbols=${symbol}&limit=100`;
  }

  try {
    const apiResponse = await fetch(url);
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("MarketStack API Error:", errorText);
      return NextResponse.json(
        { error: `MarketStack API error: ${apiResponse.statusText}` },
        { status: apiResponse.status },
      );
    }
    const data = await apiResponse.json();
    if (!data.data || data.data.length === 0) {
      return NextResponse.json(
        { error: "MarketStack returned no data for the symbol." },
        { status: 404 },
      );
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch from MarketStack API:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from MarketStack." },
      { status: 500 },
    );
  }
}
