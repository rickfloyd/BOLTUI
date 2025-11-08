'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Layer2Coin {
  name: string;
  symbol: string;
  category: string; // e.g., Optimistic Rollup, ZK-Rollup
  mainnet: string; // The L1 it scales
}

const layer2Coins: Layer2Coin[] = [
  { name: 'Arbitrum', symbol: 'ARB', category: 'Optimistic Rollup', mainnet: 'Ethereum' },
  { name: 'Optimism', symbol: 'OP', category: 'Optimistic Rollup', mainnet: 'Ethereum' },
  { name: 'Polygon', symbol: 'MATIC', category: 'Sidechain / PoS', mainnet: 'Ethereum' },
  { name: 'Starknet', symbol: 'STRK', category: 'ZK-Rollup (Validity)', mainnet: 'Ethereum' },
  { name: 'zkSync', symbol: 'ZK', category: 'ZK-Rollup', mainnet: 'Ethereum' },
  { name: 'Stacks', symbol: 'STX', category: 'Bitcoin L2', mainnet: 'Bitcoin' },
  { name: 'Mantle', symbol: 'MNT', category: 'Optimistic Rollup', mainnet: 'Ethereum' },
  { name: 'Immutable X', symbol: 'IMX', category: 'ZK-Rollup (Gaming)', mainnet: 'Ethereum' },
  { name: 'dYdX', symbol: 'DYDX', category: 'App-Chain (Cosmos SDK)', mainnet: 'Ethereum' },
  { name: 'Loopring', symbol: 'LRC', category: 'ZK-Rollup (DEX)', mainnet: 'Ethereum' },
  { name: 'Metis', symbol: 'METIS', category: 'Optimistic Rollup', mainnet: 'Ethereum' },
  { name: 'Base', symbol: 'BASE', category: 'Optimistic Rollup', mainnet: 'Ethereum' },
  { name: 'Linea', symbol: 'N/A', category: 'ZK-Rollup', mainnet: 'Ethereum' },
  { name: 'Manta Pacific', symbol: 'MANTA', category: 'ZK-Rollup', mainnet: 'Ethereum' },
  { name: 'Scroll', symbol: 'N/A', category: 'ZK-Rollup', mainnet: 'Ethereum' },
  { name: 'Boba Network', symbol: 'BOBA', category: 'Optimistic Rollup', mainnet: 'Ethereum' },
];


export default function Layer2Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = layer2Coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <Link href="/main" className="flex items-center gap-2 nav-item neon-cyan w-fit">
            <ArrowLeft size={16} />
            Back to Crypto Classes
          </Link>
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Layer-2 Scaling Solutions</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Layer-2s are protocols built on top of Layer-1 blockchains (like Ethereum or Bitcoin) to provide faster transactions and lower fees. While the vast majority of L2s are in the Ethereum ecosystem, other chains have them too. This list covers the most prominent L2 projects.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search L2 solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white"
            />
          </div>
          <div className="w-full overflow-x-auto mt-8">
            <div className="info-table-card">
              <table className="info-table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Category</th>
                    <th>Scales</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.map((coin) => (
                    <tr key={coin.name} className="hover:bg-white/5">
                      <td className="neon-cyan">{coin.name}</td>
                      <td className="neon-pink">{coin.symbol}</td>
                      <td className="neon-blue">{coin.category}</td>
                      <td className="neon-gold">{coin.mainnet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
