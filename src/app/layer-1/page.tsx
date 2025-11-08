'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Coin {
  name: string;
  symbol: string;
}

const layer1Coins: Coin[] = [
  { name: 'Bitcoin', symbol: 'BTC' },
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Solana', symbol: 'SOL' },
  { name: 'Cardano', symbol: 'ADA' },
  { name: 'Avalanche', symbol: 'AVAX' },
  { name: 'Polkadot', symbol: 'DOT' },
  { name: 'Near Protocol', symbol: 'NEAR' },
  { name: 'Cosmos', symbol: 'ATOM' },
  { name: 'Algorand', symbol: 'ALGO' },
  { name: 'Tezos', symbol: 'XTZ' },
  { name: 'Stellar', symbol: 'XLM' },
  { name: 'Flow', symbol: 'FLOW' },
  { name: 'Hedera Hashgraph', symbol: 'HBAR' },
  { name: 'Internet Computer', symbol: 'ICP' },
  { name: 'Aptos', symbol: 'APT' },
  { name: 'Sui', symbol: 'SUI' },
  { name: 'Sei Network', symbol: 'SEI' },
  { name: 'Celo', symbol: 'CELO' },
  { name: 'Kava', symbol: 'KAVA' },
  { name: 'Elrond (MultiversX)', symbol: 'EGLD' },
  { name: 'Tron', symbol: 'TRX' },
  { name: 'EOS', symbol: 'EOS' },
  { name: 'Harmony', symbol: 'ONE' },
  { name: 'Zilliqa', symbol: 'ZIL' },
  { name: 'VeChain', symbol: 'VET' },
  { name: 'Waves', symbol: 'WAVES' },
  { name: 'Mina Protocol', symbol: 'MINA' },
  { name: 'Oasis Network', symbol: 'ROSE' },
  { name: 'Kadena', symbol: 'KDA' },
  { name: 'ICON', symbol: 'ICX' },
  { name: 'Ontology', symbol: 'ONT' },
  { name: 'NEM', symbol: 'XEM' },
  { name: 'BitTorrent Chain', symbol: 'BTT' },
  { name: 'Chiliz', symbol: 'CHZ' },
  { name: 'Akash Network', symbol: 'AKT' },
  { name: 'Render Network', symbol: 'RNDR' },
  { name: 'Energy Web Chain', symbol: 'EWT' },
  { name: 'Conflux', symbol: 'CFX' },
  { name: 'Nervos Network', symbol: 'CKB' },
  { name: 'XDC Network', symbol: 'XDC' },
  { name: 'Telos', symbol: 'TLOS' },
  { name: 'Radix', symbol: 'XRD' },
  { name: 'Coreum', symbol: 'CORE' },
  { name: 'Shardeum', symbol: 'SHM' },
  { name: 'Casper Network', symbol: 'CSPR' },
  { name: 'IOTA', symbol: 'IOTA' },
  { name: 'Fantom', symbol: 'FTM' },
  { name: 'Terra 2.0', symbol: 'LUNA' },
  { name: 'SafeCoin', symbol: 'SAFE' },
  { name: 'Bitgert', symbol: 'BRISE' },
];

export default function Layer1Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = layer1Coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Layer 1 Blockchains and Their Coins (2025)</h1>
          <p className="text-lg text-gray-300 text-center">
            A curated list of Layer 1 blockchain platforms and their native coins.
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
              <table className="info-table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Platform</th>
                    <th>Symbol</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.map((coin, index) => (
                    <tr key={coin.symbol} className="hover:bg-white/5">
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{coin.name}</td>
                      <td className="neon-pink">{coin.symbol.toUpperCase()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Link href="/main" className="fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2">
        <ArrowLeft size={16} />
        Back
      </Link>
    </>
  );
}
