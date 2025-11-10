'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ExchangeRateData {
  'Realtime Currency Exchange Rate': {
    '1. From_Currency Code': string;
    '2. From_Currency Name': string;
    '3. To_Currency Code': string;
    '4. To_Currency Name': string;
    '5. Exchange Rate': string;
    '6. Last Refreshed': string;
    '7. Time Zone': string;
    '8. Bid Price': string;
    '9. Ask Price': string;
  };
}

interface DisplayData {
  pair: string;
  rate: string;
  bid: string;
  ask: string;
  change: 'up' | 'down' | 'same';
  lastRate: string | null;
}

const top10Pairs = [
  { from: 'EUR', to: 'USD' }, // #1
  { from: 'GBP', to: 'USD' }, // #2
  { from: 'USD', to: 'JPY' }, // #3
  { from: 'AUD', to: 'USD' }, // #4
  { from: 'USD', to: 'CAD' }, // #5
  { from: 'USD', to: 'CHF' }, // #6
  { from: 'NZD', to: 'USD' }, // #7
  { from: 'EUR', to: 'GBP' }, // #8
  { from: 'EUR', to: 'JPY' }, // #9
  { from: 'GBP', to: 'JPY' }, // #10
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
        const promises = top10Pairs.map(async (pair) => {
          // Add a small delay between requests to avoid hitting rate limits
          await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
          const response = await fetch(`/api/alphavantage-forex?from_currency=${pair.from}&to_currency=${pair.to}`);
          if (!response.ok) {
            console.warn(`Could not fetch data for ${pair.from}/${pair.to}`);
            return null;
          }
          const jsonData: ExchangeRateData = await response.json();
          
          const rateInfo = jsonData['Realtime Currency Exchange Rate'];
          if (!rateInfo) {
            console.warn(`No exchange rate data for ${pair.from}/${pair.to}. Response:`, jsonData);
            return null;
          }

          const currentRate = parseFloat(rateInfo['5. Exchange Rate']);

          return {
            pair: `${pair.from}/${pair.to}`,
            rate: currentRate.toFixed(5),
            bid: parseFloat(rateInfo['8. Bid Price']).toFixed(5),
            ask: parseFloat(rateInfo['9. Ask Price']).toFixed(5),
            change: 'same' as 'same', // Will be updated on subsequent fetches
            lastRate: currentRate.toFixed(5),
          };
        });

        const results = (await Promise.all(promises)).filter(result => result !== null) as DisplayData[];
        
        setData(prevData => {
            const dataMap = new Map(prevData.map(d => [d.pair, d]));
            results.forEach(res => {
                const oldData = dataMap.get(res.pair);
                if (oldData && oldData.lastRate) {
                    const oldRate = parseFloat(oldData.lastRate);
                    const newRate = parseFloat(res.rate);
                    res.change = newRate > oldRate ? 'up' : newRate < oldRate ? 'down' : oldData.change;
                }
                dataMap.set(res.pair, res);
            });
            const sortedData = Array.from(dataMap.values()).sort((a, b) => {
                const aIndex = top10Pairs.findIndex(p => `${p.from}/${p.to}` === a.pair);
                const bIndex = top10Pairs.findIndex(p => `${p.from}/${p.to}` === b.pair);
                return aIndex - bIndex;
            });
            return sortedData;
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
          <h1 className="text-3xl font-bold neon-text text-center mt-8">🌌 QUANTUM CYBERVISION INSTANT FOREX 🌌</h1>
          
          {loading && data.length === 0 && <p className="text-center text-cyan-400 mt-4">Loading Forex data...</p>}
          {error && <p className="text-center text-red-500 mt-4">{error}</p>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {data.map(item => (
              <Card key={item.pair} className={`data-card glow-blue`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-center neon-text">{item.pair}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-3xl font-bold font-numeric text-gray-200 flex items-center justify-center gap-2">
                    {item.rate}
                    {item.change === 'up' && <ArrowUp className="w-6 h-6 text-green-400" />}
                    {item.change === 'down' && <ArrowDown className="w-6 h-6 text-red-400" />}
                  </p>
                  <div className="flex justify-around text-sm text-gray-400 font-numeric">
                    <span>Bid: {item.bid}</span>
                    <span>Ask: {item.ask}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
             {loading && (
                [...Array(top10Pairs.length - data.length)].map((_, i) => (
                    <Card key={`loading-${i}`} className="data-card glow-blue animate-pulse">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center neon-text opacity-50">Loading...</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-3xl font-bold font-numeric text-white">...</p>
                             <div className="flex justify-around text-sm text-gray-400">
                                <span>Bid: ...</span>
                                <span>Ask: ...</span>
                            </div>
                        </CardContent>
                    </Card>
                ))
            )}
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">Data from Alpha Vantage. Refreshes automatically. Due to API limitations, some pairs may load slower than others.</p>
        </section>
      </main>
      <Link href="/" className="fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2">
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </>
  );
}
