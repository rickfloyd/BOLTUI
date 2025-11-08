'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Layer2Coin {
  name: string;
  symbol: string;
}

interface Layer2Category {
  title: string;
  color: string;
  coins: Layer2Coin[];
}

const layer2Data: Layer2Category[] = [
  {
    title: 'Bitcoin-Based Layer 2s',
    color: 'neon-orange',
    coins: [
      { name: 'Stacks', symbol: 'STX' },
      { name: 'Lightning Network', symbol: 'No native coin (BTC used)' },
      { name: 'Liquid Network', symbol: 'L-BTC' },
      { name: 'RSK', symbol: 'RBTC' },
      { name: 'Bitlayer', symbol: 'BTR' },
      { name: 'Omni Layer', symbol: 'USDT (Bitcoin version)' },
      { name: 'Rootstock Infrastructure Framework', symbol: 'RIF' },
      { name: 'Counterparty', symbol: 'XCP' },
      { name: 'RGB Protocol', symbol: 'No native coin' },
      { name: 'Sovryn', symbol: 'SOV' },
    ],
  },
  {
    title: 'Solana-Based Layer 2s',
    color: 'neon-cyan',
    coins: [
      { name: 'Neon EVM', symbol: 'NEON' },
      { name: 'Eclipse', symbol: 'No native coin yet' },
      { name: 'Nitro', symbol: 'No native coin yet' },
      { name: 'Solayer', symbol: 'TBA' },
      { name: 'Triton', symbol: 'TBA' },
    ],
  },
  {
    title: 'Cosmos-Based Layer 2s',
    color: 'neon-blue',
    coins: [
      { name: 'Celestia', symbol: 'TIA' },
      { name: 'Dymension', symbol: 'DYM' },
      { name: 'Saga', symbol: 'SAGA' },
      { name: 'Rollkit', symbol: 'No native coin' },
      { name: 'Archway', symbol: 'ARCH' },
    ],
  },
  {
    title: 'Polkadot-Based Layer 2s',
    color: 'neon-pink',
    coins: [
        { name: 'Moonbeam', symbol: 'GLMR' },
        { name: 'Astar', symbol: 'ASTR' },
        { name: 'Phala Network', symbol: 'PHA' },
        { name: 'Parallel Finance', symbol: 'PARA' },
        { name: 'Acala', symbol: 'ACA' },
    ],
  },
  {
    title: 'Avalanche-Based Layer 2s',
    color: 'neon-red',
    coins: [
        { name: 'Shrapnel', symbol: 'SHRAP' },
        { name: 'Dexalot', symbol: 'ALOT' },
        { name: 'Subnet-based L2s', symbol: 'Various tokens' },
        { name: 'Beam', symbol: 'BEAM' },
        { name: 'Landslide', symbol: 'LSD' },
    ],
  },
  {
    title: 'Cardano-Based Layer 2s',
    color: 'neon-blue',
    coins: [
        { name: 'Hydra', symbol: 'No native coin' },
        { name: 'Milkomeda C1', symbol: 'MilkADA' },
        { name: 'Orbis', symbol: 'TBA' },
        { name: 'Midnight', symbol: 'DUST' },
        { name: 'Paima Engine', symbol: 'No native coin' },
    ],
  },
    {
    title: 'XRP Ledger-Based Layer 2s',
    color: 'neon-cyan',
    coins: [
        { name: 'Evernode', symbol: 'EVR' },
        { name: 'Hooks', symbol: 'No native coin' },
        { name: 'Xahau', symbol: 'XAH' },
        { name: 'XRPL EVM', symbol: 'TBA' },
        { name: 'Coreum', symbol: 'CORE' },
    ],
  },
  {
    title: 'Algorand-Based Layer 2s',
    color: 'neon-teal',
    coins: [
        { name: 'Folks Finance', symbol: 'FOLKS' },
        { name: 'AlgoFi', symbol: 'ALGO (used natively)' },
        { name: 'Tinyman', symbol: 'TINY' },
        { name: 'Pact', symbol: 'PACT' },
        { name: 'HumbleSwap', symbol: 'HMBL' },
    ],
  },
  {
    title: 'Other Layer 1s with L2s',
    color: 'neon-gold',
    coins: [
        { name: 'Fuel Network (Modular L2)', symbol: 'FUEL' },
        { name: 'Brevis', symbol: 'TBA' },
        { name: 'Rome Protocol', symbol: 'TBA' },
        { name: 'Hana Network', symbol: 'HANA' },
        { name: 'Cysic', symbol: 'CYS' },
    ],
  },
];


export default function Layer2Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = layer2Data.map(category => {
    const filteredCoins = category.coins.filter(
        coin =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, coins: filteredCoins };
  }).filter(category => category.coins.length > 0);
  
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <Link href="/main" className="flex items-center gap-2 nav-item neon-cyan w-fit">
            <ArrowLeft size={16} />
            Back to Crypto Classes
          </Link>
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Layer-2 Scaling Solutions Encyclopedia</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A comprehensive, curated list of Layer-2 solutions across various blockchain ecosystems. Layer-2s are protocols built on top of base-layer blockchains (like Bitcoin or Ethereum) to provide faster transactions and lower fees.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search all L2 solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white"
            />
          </div>
          <div className="w-full space-y-12 mt-8">
            {filteredData.map(category => (
                <div key={category.title} className="info-table-card">
                    <h2 className={`text-2xl font-bold mb-4 ${category.color}`}>{category.title}</h2>
                    <table className="info-table w-full">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol / Token</th>
                        </tr>
                        </thead>
                        <tbody>
                        {category.coins.map((coin) => (
                            <tr key={coin.name} className="hover:bg-white/5">
                            <td className={`font-bold`}>{coin.name}</td>
                            <td className='text-gray-300'>{coin.symbol}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
