
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

const smartContractPlatforms: Coin[] = [
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Solana', symbol: 'SOL' },
  { name: 'Cardano', symbol: 'ADA' },
  { name: 'Polkadot', symbol: 'DOT' },
  { name: 'Avalanche', symbol: 'AVAX' },
  { name: 'Binance Smart Chain (BNB Chain)', symbol: 'BNB' },
  { name: 'NEAR Protocol', symbol: 'NEAR' },
  { name: 'Algorand', symbol: 'ALGO' },
  { name: 'Tezos', symbol: 'XTZ' },
  { name: 'Cosmos', symbol: 'ATOM' },
  { name: 'Fantom', symbol: 'FTM' },
  { name: 'Flow', symbol: 'FLOW' },
  { name: 'Internet Computer', symbol: 'ICP' },
  { name: 'Elrond (MultiversX)', symbol: 'EGLD' },
  { name: 'Tron', symbol: 'TRX' },
  { name: 'EOS', symbol: 'EOS' },
  { name: 'Hedera Hashgraph', symbol: 'HBAR' },
  { name: 'Stacks', symbol: 'STX' },
  { name: 'Kusama', symbol: 'KSM' },
  { name: 'Zilliqa', symbol: 'ZIL' },
  { name: 'Harmony', symbol: 'ONE' },
  { name: 'Avalanche Subnets (example: C-Chain apps)', symbol: 'AVAX' },
  { name: 'Celo', symbol: 'CELO' },
  { name: 'Near Aurora (EVM on NEAR)', symbol: 'AURORA' },
  { name: 'Moonbeam (Polkadot parachain)', symbol: 'GLMR' },
  { name: 'Moonriver (Kusama)', symbol: 'MOVR' },
  { name: 'Injective', symbol: 'INJ' },
  { name: 'Optimism', symbol: 'OP' },
  { name: 'Arbitrum', symbol: 'ARB' },
  { name: 'Sui', symbol: 'SUI' },
  { name: 'Aptos', symbol: 'APT' },
  { name: 'Radix', symbol: 'XRD' },
  { name: 'Kadena', symbol: 'KDA' },
  { name: 'StarkNet', symbol: 'STRK' },
  { name: 'Conflux', symbol: 'CFX' },
  { name: 'Flow by Dapper Labs', symbol: 'FLOW' },
  { name: 'Ronin', symbol: 'RON' },
  { name: 'Tezos sidechains / Layered extensions', symbol: 'XTZ' },
  { name: 'Algorand AVM-based platforms', symbol: 'ALGO' },
  { name: 'Cardano Hydra-enabled apps', symbol: 'ADA' },
  { name: 'Oasis (ParaTimes with smart contracts)', symbol: 'ROSE' },
  { name: 'Klaytn', symbol: 'KLAY' },
  { name: 'Evmos (EVM on Cosmos)', symbol: 'EVMOS' },
  { name: 'Acala (Polkadot DeFi hub)', symbol: 'ACA' },
  { name: 'Astar Network', symbol: 'ASTR' },
  { name: 'Oasis ParaTimes (contract-capable runtimes)', symbol: 'ROSE' },
  { name: 'Celestia-connected rollups', symbol: 'TIA' },
  { name: 'Near-based rollup ecosystems', symbol: 'NEAR' },
  { name: 'Scroll (zkEVMs on other chains)', symbol: '(varies)' },
  { name: 'Mantle / other modular L2s', symbol: 'MNT' },
];

export default function SmartContractPlatformsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = smartContractPlatforms.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Smart-Contract Platforms</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A comprehensive list of platforms that enable the creation and execution of smart contracts, driving decentralized applications (dApps). This includes Layer-1 blockchains, parachains, sidechains, and rollup networks.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search platforms..."
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
                    <tr key={coin.name} className="hover:bg-white/5">
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
