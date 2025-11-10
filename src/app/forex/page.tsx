'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ForexData {
  'Meta Data': {
    '2. From_Symbol': string;
    '3. To_Symbol': string;
  };
  'Time Series FX (1min)': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
    };
  };
}

interface DisplayData {
  pair: string;
  price: string;
  change: 'up' | 'down' | 'same';
  lastPrice: string | null;
}

const majorPairs = [
  'EURUSD', 'GBPUSD', 'USDJPY', 'USDCHF', 'AUDUSD', 'USDCAD', 'NZDUSD',
  'EURJPY', 'GBPJPY', 'EURGBP', 'AUDJPY', 'EURAUD', 'EURCHF', 'AUDNZD',
  'NZDJPY', 'GBPAUD', 'GBPCAD', 'EURNZD', 'AUDCAD', 'GBPCHF', 'AUDCHF'
];

export default function ForexPage() {
  const [data, setData] = useState<DisplayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const promises = majorPairs.map(async (pair) => {
          const from = pair.substring(0, 3);
          const to = pair.substring(3, 6);
          const response = await fetch(`/api/alphavantage-forex?from_symbol=${from}&to_symbol=${to}`);
          if (!response.ok) {
            // AlphaVantage free tier has a low rate limit, so errors are expected.
            console.warn(`Could not fetch data for ${pair}`);
            return null;
          }
          const jsonData: ForexData = await response.json();
          
          if (!jsonData['Time Series FX (1min)']) {
            console.warn(`No time series data for ${pair}. Response:`, jsonData);
            return null;
          }

          const timeSeries = jsonData['Time Series FX (1min)'];
          const latestTime = Object.keys(timeSeries)[0];
          const previousTime = Object.keys(timeSeries)[1];
          const latestPrice = parseFloat(timeSeries[latestTime]['4. close']);
          const previousPrice = previousTime ? parseFloat(timeSeries[previousTime]['4. close']) : latestPrice;

          return {
            pair: pair,
            price: latestPrice.toFixed(5),
            change: latestPrice > previousPrice ? 'up' : latestPrice < previousPrice ? 'down' : 'same',
            lastPrice: previousPrice.toFixed(5),
          };
        });

        const results = (await Promise.all(promises)).filter(result => result !== null) as DisplayData[];
        setData(prevData => {
            const dataMap = new Map(prevData.map(d => [d.pair, d]));
            results.forEach(res => {
                const oldData = dataMap.get(res.pair);
                if (oldData) {
                    const oldPrice = parseFloat(oldData.price);
                    const newPrice = parseFloat(res.price);
                    res.change = newPrice > oldPrice ? 'up' : newPrice < oldPrice ? 'down' : oldData.change;
                }
                dataMap.set(res.pair, res);
            });
            return Array.from(dataMap.values()).sort((a,b) => majorPairs.indexOf(a.pair) - majorPairs.indexOf(b.pair));
        });

      } catch (e: any) {
        setError('Failed to load Forex data. The API may be rate-limiting requests.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh every minute
    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Forex Dashboard</h1>
          <p className="text-lg text-gray-300 text-center">
            Live intraday data for major currency pairs from Alpha Vantage.
          </p>

          {loading && data.length === 0 && <p className="text-center text-cyan-400">Loading Forex data...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            {data.map(item => (
              <Card key={item.pair} className={`data-card glow-blue`}>
                <CardHeader>
                  <CardTitle className="text-xl text-center neon-text">{item.pair}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold font-numeric text-white flex items-center justify-center gap-2">
                    {item.price}
                    {item.change === 'up' && <ArrowUp className="w-5 h-5 text-green-400" />}
                    {item.change === 'down' && <ArrowDown className="w-5 h-5 text-red-400" />}
                  </p>
                </CardContent>
              </Card>
            ))}
             {(!loading && data.length < majorPairs.length) && (
                [...Array(majorPairs.length - data.length)].map((_, i) => (
                    <Card key={`loading-${i}`} className="data-card glow-blue animate-pulse">
                        <CardHeader>
                            <CardTitle className="text-xl text-center neon-text opacity-50">Loading...</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-2xl font-bold font-numeric text-white">...</p>
                        </CardContent>
                    </Card>
                ))
            )}
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">Data refreshes automatically. Due to API limitations, some pairs may load slower than others.</p>
        </section>
      </main>
      <Link href="/" className="fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2">
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </>
  );
}