'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import {
  ArrowUpRight,
  Bitcoin,
  Landmark,
  DollarSign,
  Gem,
  Hexagon,
} from 'lucide-react';

const tokenCategories = [
  { name: 'Layer-1 Blockchains', color: 'glow-cyan' },
  { name: 'Layer-2 Scaling Solutions', color: 'glow-orange' },
  { name: 'Smart-Contract Platforms', color: 'glow-blue' },
  { name: 'Stablecoins', color: 'glow-gold' },
  { name: 'Wrapped Assets', color: 'glow-pink' },
  { name: 'Exchange Tokens', color: 'glow-teal' },
  { name: 'Governance Tokens', color: 'glow-cyan' },
  { name: 'Utility Tokens', color: 'glow-orange' },
  { name: 'Privacy Coins', color: 'glow-blue' },
  { name: 'Interoperability Tokens', color: 'glow-gold' },
  { name: 'DeFi Protocol Tokens', color: 'glow-pink' },
  { name: 'Lending & Borrowing Tokens', color: 'glow-teal' },
  { name: 'Yield-Farming Tokens', color: 'glow-cyan' },
  { name: 'Synthetic Asset Tokens', color: 'glow-orange' },
  { name: 'Oracle Tokens', color: 'glow-blue' },
  { name: 'Gaming Tokens', color: 'glow-gold' },
  { name: 'Metaverse Tokens', color: 'glow-pink' },
  { name: 'NFT Ecosystem Tokens', color: 'glow-teal' },
  { name: 'Meme Coins', color: 'glow-cyan' },
  { name: 'Community / Social Tokens', color: 'glow-orange' },
  { name: 'Fan Tokens', color: 'glow-blue' },
  { name: 'DAO Tokens', color: 'glow-gold' },
  { name: 'Cross-Chain Bridge Tokens', color: 'glow-pink' },
  { name: 'Infrastructure / Data Tokens', color: 'glow-teal' },
  { name: 'File-Storage Tokens', color: 'glow-cyan' },
  { name: 'Identity Tokens', color: 'glow-orange' },
  { name: 'Real-World-Asset (RWA) Tokens', color: 'glow-blue' },
  { name: 'Liquid-Staking Tokens', color: 'glow-gold' },
  { name: 'Derivative Tokens', color: 'glow-pink' },
  { name: 'Payment Tokens', color: 'glow-teal' },
  { name: 'AI / Machine-Learning Tokens', color: 'glow-cyan' },
  { name: 'Security Tokens', color: 'glow-orange' },
  { name: 'Green / Carbon Tokens', color: 'glow-blue' },
  { name: 'Insurance Tokens', color: 'glow-gold' },
  { name: 'Launchpad Tokens', color: 'glow-pink' },
  { name: 'Governance + Utility Hybrids', color: 'glow-teal' },
  { name: 'Gaming + DeFi Hybrids', color: 'glow-cyan' },
  { name: 'Metaverse + NFT Hybrids', color: 'glow-orange' },
  { name: 'Meme + Utility Hybrids', color: 'glow-blue' },
  { name: 'Oracle + AI Hybrids', color: 'glow-gold' },
  { name: 'Rebase Tokens', color: 'glow-pink' },
  { name: 'Deflationary Tokens', color: 'glow-teal' },
  { name: 'Dual-Token Ecosystems', color: 'glow-cyan' },
  { name: 'Cross-Collateral Tokens', color: 'glow-orange' },
  { name: 'Collateralized Stable Assets', color: 'glow-blue' },
  { name: 'Charity Tokens', color: 'glow-gold' },
  { name: 'Forked Chains / Legacy Assets', color: 'glow-pink' },
  { name: 'Testnet or DevNet Tokens', color: 'glow-teal' },
  { name: 'Wrapped Bridge Derivatives', color: 'glow-cyan' },
  { name: 'Shitcoins', color: 'glow-orange' },
];

export default function MainPage() {
  const router = useRouter();

  const handleCardClick = (index: string) => {
    if (index.toLowerCase() === 'shitcoins') {
      router.push('/shitcoins');
    } else {
      router.push(`/charts/${index.toLowerCase().replace(/ /g, '-')}`);
    }
  };

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center">
            CRYPTO CLASSES
          </h1>
          <div className="view-switcher">
            <Link href="/hyper" className="view-button neon-cyan">
              HYPER
            </Link>
            <Link href="/simple-view" className="view-button neon-pink">
              SIMPLE VIEW
            </Link>
            <Link href="/custom-view" className="view-button neon-orange">
              CUSTOM VIEW
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            {tokenCategories.map((item, index) => (
              <button
                key={index}
                className={`data-card ${item.color}`}
                onClick={() => handleCardClick(item.name)}
              >
                <h3 className="card-title text-sm">{item.name}</h3>
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
