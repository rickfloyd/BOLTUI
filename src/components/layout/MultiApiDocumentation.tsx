
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MultiApiDocumentation() {
  const dataFlowImage = PlaceHolderImages.find(p => p.id === 'data-flow-diagram');

  return (
    <div className="mt-12 p-8 rounded-lg bg-black/50 border-2 border-cyan-500/50 shadow-[0_0_25px_rgba(0,255,255,0.3)] w-full text-gray-300">
      <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-center">Multi-API Stock Price Implementation</h2>
      
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-pink-400 mb-4">Overview</h3>
        <p>The system now uses four different data sources to fetch stock prices throughout the trading day:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
          <li><strong>Alpha Vantage</strong> - Morning prices (9:00 AM EST / Market Open)</li>
          <li><strong>Marketstack</strong> - Midday prices (12:00 PM EST)</li>
          <li><strong>Polygon.io</strong> - Afternoon prices (3:00 PM EST)</li>
          <li><strong>Averaged Data</strong> - Market close (4:00 PM EST) - averages data from all three APIs</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-pink-400 mb-4">Data Flow</h3>
        {dataFlowImage && (
            <div className="relative my-4 flex justify-center items-center p-4 bg-gray-900/50 rounded-lg">
                <Image
                    src={dataFlowImage.imageUrl}
                    alt={dataFlowImage.description}
                    width={600}
                    height={400}
                    data-ai-hint={dataFlowImage.imageHint}
                    className="opacity-90 rounded-md"
                />
            </div>
        )}
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-pink-400 mb-4">Database Schema</h3>
        <p>Updated `stock_prices` Table:</p>
        <pre className="bg-gray-900/70 p-4 rounded-lg mt-2 border border-cyan-400/30 overflow-x-auto text-sm">
          <code>
{`CREATE TABLE stock_prices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticker TEXT NOT NULL,
  company_name TEXT NOT NULL,
  price DECIMAL(12, 4) NOT NULL,
  change DECIMAL(12, 4),
  change_percent DECIMAL(8, 4),
  volume BIGINT,
  market_cap BIGINT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT  -- NEW: alphavantage, marketstack, polygon, or averaged
);`}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-pink-400 mb-4">API Endpoints</h3>
        <p>A cron job at `GET /api/cron/fetch-rss` handles daily fetching, and the `GET /api/stocks` endpoint allows filtering by source.</p>
        <pre className="bg-gray-900/70 p-4 rounded-lg mt-2 border border-cyan-400/30 overflow-x-auto text-sm">
            <code>
{`# Get all averaged (market close) prices for AAPL
curl "https://.../api/stocks?ticker=AAPL&source=averaged"

# Get midday prices from Marketstack
curl "https://.../api/stocks?source=marketstack"
`}
            </code>
        </pre>
      </section>

       <section className="mb-8">
        <h3 className="text-2xl font-bold text-pink-400 mb-4">How Data Averaging Works</h3>
        <p>At 4:00 PM EST (market close), the system fetches from all APIs in parallel, groups data by ticker, and calculates the average price, change, and change percentage, storing the result with `source="averaged"`.</p>
        <pre className="bg-gray-900/70 p-4 rounded-lg mt-2 border border-cyan-400/30 overflow-x-auto text-sm">
            <code>
{`// Example Input
Alpha Vantage: { price: 195.50, change: -2.10 }
Marketstack:   { price: 195.45, change: -2.15 }
Polygon:       { price: 195.48, change: -2.12 }

// Averaged Output
{
  price: 195.4767,
  change: -2.1233,
  source: "averaged"
}`}
            </code>
        </pre>
      </section>
    </div>
  );
}
