'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
}

export default function ShitcoinsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/coingecko/coins');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch coins.');
        }
        const data = await response.json();
        setCoins(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setCoins([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
    const intervalId = setInterval(fetchCoins, 60000); // Refresh every 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }
  
   const formatMarketCap = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', compactDisplay: 'long' }).format(value);
  }


  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">🔥 Top 50 Cryptocurrencies by Market Cap</h1>
          <p className="text-lg text-gray-300 text-center">
            A live, curated list of the top 50 coins from CoinGecko.
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
              {loading && coins.length === 0 && <p className="text-center text-lg text-gray-300 py-8">Loading top coins...</p>}
              {error && <p className="text-center text-lg text-red-400 py-8">{error}</p>}
              {!loading && !error && (
                <table className="info-table w-full">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Coin</th>
                      <th>Symbol</th>
                      <th>Price</th>
                      <th>Market Cap</th>
                      <th>View on CoinGecko</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCoins.map((coin) => (
                      <tr key={coin.id} className="hover:bg-white/5">
                        <td className="neon-orange">{coin.market_cap_rank}</td>
                        <td className="neon-cyan flex items-center gap-2">
                           <img src={coin.image} alt={`${coin.name} logo`} className="w-6 h-6 rounded-full" />
                          {coin.name}
                        </td>
                        <td className="neon-pink">{coin.symbol.toUpperCase()}</td>
                        <td className="neon-blue font-numeric">{formatCurrency(coin.current_price)}</td>
                        <td className="neon-gold font-numeric">{formatMarketCap(coin.market_cap)}</td>
                        <td>
                          <Link href={`https://www.coingecko.com/en/coins/${coin.id}`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
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
