
'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface WrappedAsset {
  name: string;
  symbol: string;
  hostChain: string;
  contractPlaceholder: string;
}

interface AssetCategory {
  title: string;
  color: string;
  assets: WrappedAsset[];
}

const wrappedAssetsData: AssetCategory[] = [
  {
    title: 'Bitcoin-Backed',
    color: 'neon-orange',
    assets: [
      { name: 'Wrapped Bitcoin', symbol: 'WBTC', hostChain: 'Ethereum', contractPlaceholder: '0x2260...' },
      { name: 'renBTC', symbol: 'renBTC', hostChain: 'Ethereum', contractPlaceholder: '0xEB4C...' },
      { name: 'Huobi BTC', symbol: 'HBTC', hostChain: 'Ethereum', contractPlaceholder: '0x0316...' },
      { name: 'Bitcoin BEP2', symbol: 'BTCB', hostChain: 'BNB Chain', contractPlaceholder: 'N/A (BEP2)' },
      { name: 'tBTC v2', symbol: 'tBTC', hostChain: 'Ethereum', contractPlaceholder: '0x1808...' },
      { name: 'Interlay BTC', symbol: 'iBTC', hostChain: 'Polkadot', contractPlaceholder: 'Parachain Asset' },
      { name: 'pTokens BTC', symbol: 'pBTC', hostChain: 'Ethereum', contractPlaceholder: '0x5228...' },
      { name: 'BoringDAO BTC', symbol: 'oBTC', hostChain: 'Ethereum', contractPlaceholder: '0x8064...' },
      { name: 'Anyswap BTC', symbol: 'anyBTC', hostChain: 'Fantom', contractPlaceholder: '0x536e...' },
    ],
  },
  {
    title: 'Ether-Backed & Staked Ether',
    color: 'neon-blue',
    assets: [
      { name: 'Wrapped Ether', symbol: 'WETH', hostChain: 'Various L2s', contractPlaceholder: 'e.g., 0x7ceB... (Polygon)' },
      { name: 'Lido Staked Ether', symbol: 'stETH', hostChain: 'Ethereum', contractPlaceholder: '0xae7a...' },
      { name: 'Rocket Pool Ether', symbol: 'rETH', hostChain: 'Ethereum', contractPlaceholder: '0xae78...' },
      { name: 'Coinbase Wrapped Staked ETH', symbol: 'cbETH', hostChain: 'Ethereum', contractPlaceholder: '0xBe98...' },
      { name: 'Binance-Pegged ETH', symbol: 'ETH', hostChain: 'BNB Chain', contractPlaceholder: '0x2170...' },
      { name: 'Frax Ether', symbol: 'frxETH', hostChain: 'Ethereum', contractPlaceholder: '0x5E84...' },
      { name: 'Swell Ether', symbol: 'swETH', hostChain: 'Ethereum', contractPlaceholder: '0xf951...' },
      { name: 'Mantle Staked Ether', symbol: 'mETH', hostChain: 'Mantle', contractPlaceholder: '0xcDA8...' },
    ],
  },
  {
    title: 'Cross-Chain Asset Bridges',
    color: 'neon-cyan',
    assets: [
      { name: 'Portal Wrapped SOL (from Solana)', symbol: 'Wormhole SOL', hostChain: 'Ethereum', contractPlaceholder: '0x2Aa... ' },
      { name: 'Portal Wrapped AVAX (from Avalanche)', symbol: 'Wormhole AVAX', hostChain: 'Ethereum', contractPlaceholder: '0x85f1...' },
      { name: 'Polygon PoS-Pegged MATIC', symbol: 'MATIC', hostChain: 'Ethereum', contractPlaceholder: '0x7D1A...' },
      { name: 'LayerZero-Bridged USDC', symbol: 'lzUSDC', hostChain: 'Avalanche', contractPlaceholder: '0xB97E...' },
      { name: 'Celer-Bridged BUSD', symbol: 'ceBUSD', hostChain: 'Polygon', contractPlaceholder: '0x9C9e...' },
      { name: 'Anyswap-Bridged FTM', symbol: 'anyFTM', hostChain: 'Ethereum', contractPlaceholder: '0xfa1a...' },
      { name: 'Hop Protocol ETH', symbol: 'hETH', hostChain: 'Arbitrum/Optimism', contractPlaceholder: 'Varies' },
      { name: 'Across Protocol ETH', symbol: 'acETH', hostChain: 'Arbitrum/Optimism', contractPlaceholder: 'Varies' },
    ],
  },
  {
    title: 'Other Wrapped Assets',
    color: 'neon-pink',
    assets: [
      { name: 'Wrapped Filecoin', symbol: 'WFIL', hostChain: 'Ethereum', contractPlaceholder: '0x6e1A...' },
      { name: 'Wrapped LUNA (Wormhole)', symbol: 'LUNC', hostChain: 'Ethereum', contractPlaceholder: '0x156a...' },
      { name: 'Wrapped FTM (Multichain)', symbol: 'WFTM', hostChain: 'Fantom', contractPlaceholder: 'Native to Fantom' },
      { name: 'Wrapped BNB', symbol: 'WBNB', hostChain: 'BNB Chain', contractPlaceholder: 'Native to BNB Chain' },
      { name: 'Wrapped AVAX', symbol: 'WAVAX', hostChain: 'Avalanche', contractPlaceholder: 'Native to Avalanche' },
      { name: 'Wrapped NEAR', symbol: 'wNEAR', hostChain: 'Aurora', contractPlaceholder: '0xC42C...' },
      { name: 'Klima Staked Carbon', symbol: 'sKLIMA', hostChain: 'Polygon', contractPlaceholder: '0xb0C2...' },
      { name: 'Toucan Protocol Carbon', symbol: 'BCT', hostChain: 'Polygon', contractPlaceholder: '0x2F80...' },
    ],
  },
];

export default function WrappedAssetsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = wrappedAssetsData.map(category => {
    const filteredAssets = category.assets.filter(
        asset =>
            asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
            asset.hostChain.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, assets: filteredAssets };
  }).filter(category => category.assets.length > 0);
  
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Wrapped Assets Encyclopedia (Top 100)</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Wrapped assets are tokens that represent a cryptocurrency from another blockchain. They are pegged 1:1 to the original asset, enabling cross-chain interoperability and DeFi participation.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search all wrapped assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white"
            />
          </div>
          <div className="w-full space-y-12 mt-8">
            {filteredData.map(category => (
                <div key={category.title} className="info-table-card">
                    <h2 className={`text-2xl font-bold mb-4 ${category.color}`}>{category.title}</h2>
                    <div className="overflow-x-auto">
                        <table className="info-table w-full">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Host Chain</th>
                                <th>Contract Address (Placeholder)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {category.assets.map((asset) => (
                                <tr key={asset.name} className="hover:bg-white/5">
                                <td className='font-bold'>{asset.name}</td>
                                <td className='text-gray-300'>{asset.symbol}</td>
                                <td className='text-gray-300'>{asset.hostChain}</td>
                                <td className='text-gray-400 font-mono text-xs'>{asset.contractPlaceholder}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
            {filteredData.length === 0 && (
              <p className="text-center text-gray-400 mt-8">No wrapped assets found matching your search.</p>
            )}
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
