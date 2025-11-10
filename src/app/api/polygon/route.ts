import { NextResponse } from "next/server";
import { format, subDays } from "date-fns";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol") || "X:BTCUSD";
  const interval = searchParams.get("interval") || "hour"; // Polygon uses: minute, hour, day, week, month, quarter, year
  const apiKey = process.env.POLYGON_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key for Polygon.io is not configured." },
      { status: 500 },
    );
  }

  const today = new Date();
  const fromDate = format(subDays(today, 30), "yyyy-MM-dd"); // Fetch last 30 days of data
  const toDate = format(today, "yyyy-MM-dd");

  const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/${interval}/${fromDate}/${toDate}?adjusted=true&sort=asc&limit=500&apiKey=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("Polygon.io API Error:", errorText);
      return NextResponse.json(
        { error: `Polygon.io API error: ${apiResponse.statusText}` },
        { status: apiResponse.status },
      );
    }
    const data = await apiResponse.json();
    if (data.resultsCount === 0) {
      return NextResponse.json(
        { error: "Polygon.io returned no results for the symbol." },
        { status: 404 },
      );
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch from Polygon.io API:", error);
    return NextResponse.json(
      { error: "Failed to fetch aggregates data from Polygon.io." },
      { status: 500 },
    );
  }
}
