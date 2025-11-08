'use client';

import React, { useState, useEffect } from 'react';
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
  { name: 'Governance Tokens', description: 'DAO voting rights (COMP, MKR, AAVE).', color: 'glow-cyan', route: '/dao-tokens' },
  { name: 'Utility Tokens', description: 'Access or pay for services (BAT, CHZ).', color: 'glow-orange', route: '/utility-tokens' },
  { name: 'Privacy Coins', description: 'Hide sender and receiver data (XMR, ZEC).', color: 'glow-blue', route: '/privacy-coins' },
  { name: 'Interoperability Tokens', description: 'Link different blockchains (DOT, ATOM).', color: 'glow-gold', route: '/interoperability' },
  { name: 'DeFi Protocol Tokens', description: 'Drive DeFi platforms (CRV, SNX, AAVE).', color: 'glow-pink', route: '/defi-protocols' },
  { name: 'Lending & Borrowing Tokens', description: 'Enable crypto loans (COMP, AAVE).', color: 'glow-teal' },
  { name: 'Yield-Farming Tokens', description: 'Earn rewards via liquidity (CAKE, FXS).', color: 'glow-cyan', route: '/yield-farming' },
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
  { name: 'Infrastructure / Data Tokens', description: 'Power AI, cloud, and analytics (RNDR, FIL, OCEAN).', color: 'glow-teal', route: '/utility-tokens' },
  { name: 'Proof of Stake', description: 'Validators lock up tokens to secure the network.', color: 'glow-cyan', className: 'font-cinzel', route: '/proof-of-stake' },
  { name: 'Proof of Work', description: 'Miners use computational power to solve puzzles and secure the network.', color: 'glow-pink', className: 'font-cinzel', route: '/proof-of-work' },
  { name: 'FREE MINERS', description: 'Information on free mining opportunities.', color: 'glow-teal', className: 'font-cinzel', route: '/free-miners' },
  { name: 'Shitcoins', description: 'Highly speculative and volatile tokens.', color: 'glow-orange', route: '/shitcoins' },
  { name: 'Coin Validator', description: 'Verify on-chain data and metadata.', color: 'glow-multi-color', route: '/coin-validator' },
  { name: 'CANDL', description: 'Bright orange and pink fluid card.', color: 'glow-orange-pink', route: '#', className: 'text-black' },
];

const potentialFeaturedTokens = [
    { id: 'chainlink', symbol: 'LINK', name: 'Chainlink' },
    { id: 'the-graph', symbol: 'GRT', name: 'The Graph' },
    { id: 'render-token', symbol: 'RNDR', name: 'Render Token' },
    { id: 'bittensor', symbol: 'TAO', name: 'Bittensor' },
    { id: 'kaspa', symbol: 'KAS', name: 'Kaspa'},
    { id: 'hamster', symbol: 'HAM', name: 'Hamster'},
    { id: 'pepe', symbol: 'PEPE', name: 'Pepe'}
];

const formatCurrency = (value: number | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

const formatLargeNumber = (value: number | null | undefined) => {
    if (value === null || value === undefined) return 'N/A';
    return new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'long' }).format(value);
};

export default function MainPage() {
  const router = useRouter();
  const [featuredToken, setFeaturedToken] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedToken = async () => {
      try {
        setLoading(true);
        const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 48));
        const tokenInfo = potentialFeaturedTokens[dayIndex % potentialFeaturedTokens.length];

        const response = await fetch(`/api/coingecko/coins`);
        if (!response.ok) {
            throw new Error('Failed to fetch token list from API.');
        }
        const allCoins = await response.json();
        
        const tokenData = allCoins.find((coin: any) => coin.id === tokenInfo.id);

        if(tokenData) {
            setFeaturedToken(tokenData);
        } else {
             // Fallback to Hamster if the selected token isn't in the top 50
            const hamsterData = allCoins.find((coin: any) => coin.id === 'hamster');
            setFeaturedToken(hamsterData);
        }

      } catch (error) {
        console.error("Failed to fetch featured token:", error);
        setFeaturedToken(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedToken();
  }, []);

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
                className={`data-card ${item.color} ${item.className || 'font-cinzel'} flex flex-col justify-start text-left`}
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
                    <CardTitle className="text-2xl neon-text">
                        {loading ? 'Loading Featured Token...' : `Featured Token: ${featuredToken?.name || 'N/A'} (${featuredToken?.symbol?.toUpperCase() || 'N/A'})`}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-center text-gray-400">Fetching latest data...</div>
                    ) : featuredToken ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <table className="info-table w-full">
                                    <tbody>
                                        <tr><td className="neon-cyan">Symbol</td><td className="text-gray-300">{featuredToken.symbol.toUpperCase()}</td></tr>
                                        <tr><td className="neon-cyan">Price</td><td className="text-gray-300 font-numeric">{formatCurrency(featuredToken.current_price)}</td></tr>
                                        <tr><td className="neon-cyan">Market Cap</td><td className="text-gray-300 font-numeric">{formatCurrency(featuredToken.market_cap)}</td></tr>
                                        <tr><td className="neon-cyan">Market Cap Rank</td><td className="text-gray-300 font-numeric">#{featuredToken.market_cap_rank}</td></tr>
                                        <tr><td className="neon-cyan">Circulating Supply</td><td className="text-gray-300 font-numeric">{formatLargeNumber(featuredToken.circulating_supply)}</td></tr>
                                        <tr><td className="neon-cyan">Max Supply</td><td className="text-gray-300 font-numeric">{formatLargeNumber(featuredToken.max_supply) || 'N/A'}</td></tr>
                                        <tr><td className="neon-cyan">CoinGecko</td><td><a href={`https://www.coingecko.com/en/coins/${featuredToken.id}`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">✅ View on CoinGecko</a></td></tr>
                                        <tr><td className="neon-cyan">CoinMarketCap</td><td><a href={`https://coinmarketcap.com/currencies/${featuredToken.id}/`} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">✅ View on CMC</a></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold neon-pink mb-4">🔍 Key Notes</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>This token is selected from a curated list and rotates every 48 hours.</li>
                                    <li>Market data is live from the CoinGecko API.</li>
                                    <li>Always do your own research (DYOR) before making any investment decisions.</li>
                                    <li>This is not financial advice.</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                         <div className="text-center text-red-400">Could not load featured token data.</div>
                    )}
                </CardContent>
            </Card>
          </div>

        </section>
      </main>
    </>
  );
}
