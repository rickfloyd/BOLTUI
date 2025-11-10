import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from_currency = searchParams.get("from_currency");
  const to_currency = searchParams.get("to_currency");
  const apiKey = process.env.ALPHAVANTAGE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key for Alpha Vantage is not configured." },
      { status: 500 },
    );
  }

  if (!from_currency || !to_currency) {
    return NextResponse.json(
      { error: "from_currency and to_currency parameters are required." },
      { status: 400 },
    );
  }

  const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from_currency}&to_currency=${to_currency}&apikey=${apiKey}`;

  try {
    const apiResponse = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("Alpha Vantage API Error:", errorText);
      return NextResponse.json(
        { error: `Alpha Vantage API error: ${apiResponse.statusText}` },
        { status: apiResponse.status },
      );
    }

    const data = await apiResponse.json();

    // Check for Alpha Vantage's specific error message in the response
    if (data["Error Message"]) {
      return NextResponse.json(
        { error: `Alpha Vantage: ${data["Error Message"]}` },
        { status: 400 },
      );
    }
    // Check for rate limit note
    if (data["Note"]) {
      return NextResponse.json(
        { error: `Alpha Vantage: ${data["Note"]}` },
        { status: 429 },
      );
    }

    if (!data["Realtime Currency Exchange Rate"]) {
      return NextResponse.json(
        { error: "Invalid response structure from Alpha Vantage." },
        { status: 500 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch from Alpha Vantage API:", error);
    return NextResponse.json(
      { error: "Failed to fetch forex data from Alpha Vantage." },
      { status: 500 },
    );
  }
}
