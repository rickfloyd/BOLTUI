import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const interval = searchParams.get("interval") || "1min";

  const apiKey = process.env.TWELVEDATA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "API key is not configured. Please set TWELVEDATA_API_KEY in your environment variables.",
      },
      { status: 500 },
    );
  }

  if (!symbol) {
    return NextResponse.json(
      { error: "Symbol parameter is required." },
      { status: 400 },
    );
  }

  const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${apiKey}&outputsize=60`;

  try {
    const apiResponse = await fetch(url);

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("Twelve Data API Error:", errorText);
      return NextResponse.json(
        { error: `Twelve Data API error: ${apiResponse.statusText}` },
        { status: apiResponse.status },
      );
    }

    const data = await apiResponse.json();

    if (data.status === "error") {
      return NextResponse.json({ error: data.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch from Twelve Data API:", error);
    return NextResponse.json(
      { error: "Failed to fetch time series data." },
      { status: 500 },
    );
  }
}
