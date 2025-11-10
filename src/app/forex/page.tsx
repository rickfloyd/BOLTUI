'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface ForexPair {
  pair: string;
  rate: string;
  bid: string;
  ask: string;
  lastUpdate: string;
}

const topPairs = [
  { from: 'EUR', to: 'USD' },
  { from: 'GBP', to: 'USD' },
  { from: 'USD', to: 'JPY' },
  { from: 'AUD', to: 'USD' },
  { from: 'USD', to: 'CAD' },
  { from: 'USD', to: 'CHF' },
  { from: 'NZD', to: 'USD' },
  { from: 'EUR', to: 'GBP' },
  { from: 'EUR', to: 'JPY' },
  { from: 'GBP', to: 'JPY' },
];

const neonColors = [
  'glow-cyan',
  'glow-pink',
  'glow-orange',
  'glow-blue',
  'glow-green',
  'glow-gold',
  'glow-teal',
  'glow-purple',
  'glow-red',
  'glow-yellow',
];

export default function ForexPage() {
  const [forexData, setForexData] = useState<ForexPair[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPairs = async () => {
      setLoading(true);
      setError(null);
      try {
        const promises = topPairs.map(p =>
          fetch(`/api/alphavantage-forex?from_currency=${p.from}&to_currency=${p.to}`)
            .then(res => res.json())
        );
        const results = await Promise.all(promises);

        const validData = results.map((result, index) => {
          if (result.error || !result['Realtime Currency Exchange Rate']) {
            console.warn(`Could not fetch data for ${topPairs[index].from}/${topPairs[index].to}: ${result.error || 'Invalid data'}`);
            return null;
          }
          const rateInfo = result['Realtime Currency Exchange Rate'];
          return {
            pair: `${rateInfo['1. From_Currency Code']}/${rateInfo['3. To_Currency Code']}`,
            rate: parseFloat(rateInfo['5. Exchange Rate']).toFixed(5),
            bid: parseFloat(rateInfo['8. Bid Price']).toFixed(5),
            ask: parseFloat(rateInfo['9. Ask Price']).toFixed(5),
            lastUpdate: rateInfo['6. Last Refreshed'],
          };
        }).filter((item): item is ForexPair => item !== null);

        if (validData.length === 0 && results.some(r => r.error)) {
             const firstError = results.find(r => r.error)?.error || 'Multiple API failures.';
             if (firstError.includes('rate limit')) {
                throw new Error('API rate limit reached. Please wait a moment and try again.');
             }
             throw new Error(firstError);
        }

        setForexData(validData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPairs();
     const intervalId = setInterval(fetchAllPairs, 60000 * 2); // Refresh every 2 minutes
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <div className="center-content">
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="nav-item neon-pink flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold neon-text">
              QUANTUM CYBERVISION INSTANT FOREX
            </h1>
          </div>

          {loading && (
            <div className="text-center text-cyan-400 text-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto my-4"></div>
              Loading instant forex data...
            </div>
          )}
          {error && <p className="text-center text-red-400 text-lg">{error}</p>}
          
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {forexData.map((data, index) => (
                    <Card key={data.pair} className={`data-card ${neonColors[index % neonColors.length]}`}>
                        <CardHeader>
                            <CardTitle className="text-2xl text-center neon-text">
                                {data.pair}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-4xl font-bold font-numeric text-gray-200">
                                {data.rate}
                            </p>
                            <div className="flex justify-around mt-4 text-sm font-numeric">
                                <div>
                                    <p className="text-gray-400">BID</p>
                                    <p className="text-gray-300">{data.bid}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">ASK</p>
                                    <p className="text-gray-300">{data.ask}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
          )}

        </div>
      </main>
    </>
  );
}
