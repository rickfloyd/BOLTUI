
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tokenCategories = [
  { name: 'Layer-1 Blockchains', description: 'Base networks like BTC, ETH, SOL.', color: 'glow-cyan', route: '/layer-1' },
  { name: 'Layer-2 Scaling Solutions', description: 'Faster, cheaper add-on layers (ARB, OP, MATIC).', color: 'glow-orange', route: '/layer-2' },
  { name: 'Smart-Contract Platforms', description: 'Support on-chain apps (ETH, AVAX, ADA).', color: 'glow-blue', route: '/smart-contract-platforms' },
  { name: 'Stablecoins', description: 'Fiat-pegged assets (USDT, USDC, DAI).', color: 'glow-gold', route: '/stablecoins' },
  { name: 'Wrapped Assets', description: 'Tokens backed by others (WBTC, WETH).', color: 'glow-pink', route: '/wrapped-assets' },
  { name: 'Exchange Tokens', description: 'Power trading platforms (BNB, OKB, HT).', color: 'glow-teal', route: '/exchange-tokens' },
  { name: 'Governance Tokens', description: 'DAO voting rights (COMP, MKR, AAVE).', color: 'glow-cyan' },
  { name: 'Utility Tokens', description: 'Access or pay for services (BAT, CHZ).', color: 'glow-orange', route: '/utility-tokens' },
  { name: 'Privacy Coins', description: 'Hide sender and receiver data (XMR, ZEC).', color: 'glow-blue', route: '/privacy-coins' },
  { name: 'Interoperability Tokens', description: 'Link different blockchains (DOT, ATOM).', color: 'glow-gold', route: '/interoperability' },
  { name: 'DeFi Protocol Tokens', description: 'Drive DeFi platforms (CRV, SNX, AAVE).', color: 'glow-pink', route: '/defi-protocols' },
  { name: 'Lending & Borrowing Tokens', description: 'Enable crypto loans (COMP, AAVE).', color: 'glow-teal' },
  { name: 'Yield-Farming Tokens', description: 'Earn rewards via liquidity (CAKE, FXS).', color: 'glow-cyan' },
  { name: 'Synthetic Asset Tokens', description: 'Mirror real-world prices (SXP, SNX).', color: 'glow-orange', route: '/synthetic-assets' },
  { name: 'Oracle Tokens', description: 'Deliver price and data feeds (LINK, BAND).', color: 'glow-blue', route: '/oracles' },
  { name: 'Gaming Tokens', description: 'Power play-to-earn games (AXS, GALA).', color: 'glow-gold', route: '/gaming' },
  { name: 'Metaverse Tokens', description: 'Virtual worlds & assets (MANA, SAND).', color: 'glow-pink', route: '/metaverse' },
  { name: 'NFT Ecosystem Tokens', description: 'NFT markets & tools (APE, RARI).', color: 'glow-teal', route: '/metaverse' },
  { name: 'Meme Coins', description: 'Hype-based community tokens (DOGE, SHIB, PEPE).', color: 'glow-cyan', route: '/shitcoins' },
  { name: 'Community / Social Tokens', description: 'Represent online groups or influencers.', color: 'glow-orange', route: '/social-tokens' },
  { name: 'Fan Tokens', description: 'Represent sports or entertainment fandoms (CHZ, PSG).', color: 'glow-blue' },
  { name: 'DAO Tokens', description: 'Enable decentralized governance (UNI, MKR).', color: 'glow-gold', route: '/dao-tokens' },
  { name: 'Cross-Chain Bridge Tokens', description: 'Move assets between chains (MULTI, ANY).', color: 'glow-pink', route: '/interoperability' },
  { name: 'Infrastructure / Data Tokens', description: 'Power AI, cloud, and analytics (RNDR, FIL, OCEAN).', color: 'glow-teal' },
  { name: 'Proof of Stake', description: 'Validators lock up tokens to secure the network.', color: 'glow-cyan', className: 'font-cinzel', route: '/proof-of-stake' },
  { name: 'Proof of Work', description: 'Miners use computational power to solve puzzles and secure the network.', color: 'glow-pink', className: 'font-cinzel', route: '/proof-of-work' },
  { name: 'FREE MINERS', description: 'Information on free mining opportunities.', color: 'glow-teal', className: 'font-cinzel', route: '/free-miners' },
  { name: 'Shitcoins', description: 'Highly speculative and volatile tokens.', color: 'glow-orange', route: '/shitcoins' },
  { name: 'CANDL', description: 'Bright orange and pink fluid card.', color: 'glow-orange-pink', route: '#', className: 'text-black' },
];

export default function MainPage() {
  const router = useRouter();

  const handleCardClick = (item: typeof tokenCategories[0]) => {
    if (item.route) {
      router.push(item.route);
    } else {
      const routeName = item.name.toLowerCase().replace(/ /g, '-');
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
                className={`data-card ${item.color} ${item.className || ''} flex flex-col justify-start text-left`}
                onClick={() => handleCardClick(item)}
              >
                <h3 className="card-title text-sm font-bold">{item.name}</h3>
                {item.description && <p className="text-xs text-gray-400 mt-2">{item.description}</p>}
              </button>
            ))}
          </div>
          
          <div className="mt-12">
            <Card className="info-table-card">
                <CardHeader>
                    <CardTitle className="text-2xl neon-text">🐹 Featured Token: Hamster (HAM)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                             <table className="info-table w-full">
                                <tbody>
                                    <tr><td className="neon-cyan">Symbol</td><td className="text-gray-300">HAM</td></tr>
                                    <tr><td className="neon-cyan">Chain</td><td className="text-gray-300">Binance Smart Chain (BEP-20)</td></tr>
                                    <tr><td className="neon-cyan">Contract Address</td><td className="text-gray-300 font-mono text-xs">0x50e932f39fbbac3ff4c1c89d3e3f4e3f3f3f3f3f</td></tr>
                                    <tr><td className="neon-cyan">CoinGecko Listing</td><td><a href="https://www.coingecko.com/en/coins/hamster" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">✅ View on CoinGecko</a></td></tr>
                                    <tr><td className="neon-cyan">CoinMarketCap</td><td><a href="https://coinmarketcap.com/currencies/hamster/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">✅ View on CMC</a></td></tr>
                                    <tr><td className="neon-cyan">Telegram Presence</td><td className="text-gray-300">Community-run groups, but *not a Telegram-native token*</td></tr>
                                    <tr><td className="neon-cyan">Use Case</td><td className="text-gray-300">Meme token with community-driven goals and speculative trading</td></tr>
                                    <tr><td className="neon-cyan">Market Cap</td><td className="text-gray-300">~$660K</td></tr>
                                    <tr><td className="neon-cyan">Circulating Supply</td><td className="text-gray-300">~2.38 quadrillion HAM</td></tr>
                                    <tr><td className="neon-cyan">Max Supply</td><td className="text-gray-300">10 quadrillion HAM</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold neon-pink mb-4">🔍 Key Notes</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Hamster is a **meme token**, not a DAO governance token.</li>
                                <li>It is **not integrated with Telegram MiniApps** like TONxDAO or Notcoin.</li>
                                <li>It has **no verified DAO structure** or on-chain governance.</li>
                                <li>It is **listed and tradable** on several centralized and decentralized exchanges.</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>

        </section>
      </main>
    </>
  );
}
