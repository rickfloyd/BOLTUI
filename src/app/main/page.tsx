'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';

const tokenCategories = [
  { name: 'Layer-1 Blockchains', description: 'Base networks like BTC, ETH, SOL.', color: 'glow-cyan' },
  { name: 'Layer-2 Scaling Solutions', description: 'Faster, cheaper add-on layers (ARB, OP, MATIC).', color: 'glow-orange' },
  { name: 'Smart-Contract Platforms', description: 'Support on-chain apps (ETH, AVAX, ADA).', color: 'glow-blue' },
  { name: 'Stablecoins', description: 'Fiat-pegged assets (USDT, USDC, DAI).', color: 'glow-gold' },
  { name: 'Wrapped Assets', description: 'Tokens backed by others (WBTC, WETH).', color: 'glow-pink' },
  { name: 'Exchange Tokens', description: 'Power trading platforms (BNB, OKB, HT).', color: 'glow-teal' },
  { name: 'Governance Tokens', description: 'DAO voting rights (COMP, MKR, AAVE).', color: 'glow-cyan' },
  { name: 'Utility Tokens', description: 'Access or pay for services (BAT, CHZ).', color: 'glow-orange' },
  { name: 'Privacy Coins', description: 'Hide sender and receiver data (XMR, ZEC).', color: 'glow-blue' },
  { name: 'Interoperability Tokens', description: 'Link different blockchains (DOT, ATOM).', color: 'glow-gold' },
  { name: 'DeFi Protocol Tokens', description: 'Drive DeFi platforms (CRV, SNX, AAVE).', color: 'glow-pink' },
  { name: 'Lending & Borrowing Tokens', description: 'Enable crypto loans (COMP, AAVE).', color: 'glow-teal' },
  { name: 'Yield-Farming Tokens', description: 'Earn rewards via liquidity (CAKE, FXS).', color: 'glow-cyan' },
  { name: 'Synthetic Asset Tokens', description: 'Mirror real-world prices (SXP, SNX).', color: 'glow-orange' },
  { name: 'Oracle Tokens', description: 'Deliver price and data feeds (LINK, BAND).', color: 'glow-blue' },
  { name: 'Gaming Tokens', description: 'Power play-to-earn games (AXS, GALA).', color: 'glow-gold' },
  { name: 'Metaverse Tokens', description: 'Virtual worlds & assets (MANA, SAND).', color: 'glow-pink' },
  { name: 'NFT Ecosystem Tokens', description: 'NFT markets & tools (APE, RARI).', color: 'glow-teal' },
  { name: 'Meme Coins', description: 'Hype-based community tokens (DOGE, SHIB, PEPE).', color: 'glow-cyan' },
  { name: 'Community / Social Tokens', description: 'Represent online groups or influencers.', color: 'glow-orange' },
  { name: 'Fan Tokens', description: 'Represent sports or entertainment fandoms (CHZ, PSG).', color: 'glow-blue' },
  { name: 'DAO Tokens', description: 'Enable decentralized governance (UNI, MKR).', color: 'glow-gold' },
  { name: 'Cross-Chain Bridge Tokens', description: 'Move assets between chains (MULTI, ANY).', color: 'glow-pink' },
  { name: 'Infrastructure / Data Tokens', description: 'Power AI, cloud, and analytics (RNDR, FIL, OCEAN).', color: 'glow-teal' },
  { name: 'Proof of Stake', description: 'Validators lock up tokens to secure the network.', color: 'glow-cyan' },
  { name: 'Proof of Work', description: 'Miners compete to solve puzzles to validate transactions.', color: 'glow-multi-color' },
  { name: 'FREE MINERS', description: 'Information on free mining opportunities.', color: 'glow-green' },
  { name: 'Shitcoins', description: 'Highly speculative and volatile tokens.', color: 'glow-orange' },
];

export default function MainPage() {
  const router = useRouter();

  const handleCardClick = (name: string) => {
    const routeName = name.toLowerCase().replace(/ /g, '-');
    if (routeName === 'shitcoins' || routeName === 'meme-coins') {
      router.push('/shitcoins');
    } else if (routeName === 'layer-1-blockchains') {
      router.push('/layer-1');
    } else if (routeName === 'proof-of-stake') {
      router.push('/proof-of-stake');
    } else if (routeName === 'proof-of-work') {
      router.push('/proof-of-work');
    }
     else {
      router.push(`/charts/${routeName}`);
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
            <Link href="/simple-view" className="view-button neon-pink">
              SIMPLE VIEW
            </Link>
            <Link href="/custom-view" className="view-button neon-orange">
              CUSTOM VIEW
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            {tokenCategories.map((item, index) => (
              <button
                key={index}
                className={`data-card ${item.color} flex flex-col justify-start text-left`}
                onClick={() => handleCardClick(item.name)}
              >
                <h3 className="card-title text-sm font-bold">{item.name}</h3>
                <p className="text-xs text-gray-400 mt-2">{item.description}</p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
