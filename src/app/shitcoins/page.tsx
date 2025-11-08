'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  };
}

export default function ShitcoinsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [coins, setCoins] = useState<TrendingCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/coingecko/trending');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch trending coins.');
        }
        const data = await response.json();
        setCoins(data.coins);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setCoins([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">🔥 Top Trending "Community" Tokens</h1>
          <p className="text-lg text-gray-300 text-center">
            A live, curated list of the top-trending coins on CoinGecko. Invest with caution.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search coins..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white"
            />
          </div>
          <div className="w-full overflow-x-auto mt-8">
            <div className="info-table-card">
              {loading && <p className="text-center text-lg text-gray-300 py-8">Loading trending coins...</p>}
              {error && <p className="text-center text-lg text-red-400 py-8">{error}</p>}
              {!loading && !error && (
                <table className="info-table w-full">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Coin</th>
                      <th>Symbol</th>
                      <th>Market Cap Rank</th>
                      <th>View on CoinGecko</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCoins.map((coin, index) => (
                      <tr key={coin.item.id} className="hover:bg-white/5">
                        <td className="neon-orange">{index + 1}</td>
                        <td className="neon-cyan flex items-center gap-2">
                           <img src={coin.item.thumb} alt={`${coin.item.name} logo`} className="w-6 h-6 rounded-full" />
                          {coin.item.name}
                        </td>
                        <td className="neon-pink">{coin.item.symbol}</td>
                        <td className="neon-blue">{coin.item.market_cap_rank}</td>
                        <td>
                          <Link href={`https://www.coingecko.com/en/coins/${coin.item.id}`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                            View More
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
