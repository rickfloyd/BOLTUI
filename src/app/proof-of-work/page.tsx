
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

const proofOfWorkCoins: Coin[] = [
    { name: 'Bitcoin', symbol: 'BTC' },
    { name: 'Dogecoin', symbol: 'DOGE' },
    { name: 'Bitcoin Cash', symbol: 'BCH' },
    { name: 'Litecoin', symbol: 'LTC' },
    { name: 'Zcash', symbol: 'ZEC' },
    { name: 'Monero', symbol: 'XMR' },
    { name: 'Ethereum Classic', symbol: 'ETC' },
    { name: 'Dash', symbol: 'DASH' },
    { name: 'Kaspa', symbol: 'KAS' },
    { name: 'Decred', symbol: 'DCR' },
    { name: 'Beldex', symbol: 'BDX' },
    { name: 'Conflux', symbol: 'CFX' },
    { name: 'Horizen', symbol: 'ZEN' },
    { name: 'DigiByte', symbol: 'DGB' },
    { name: 'Ravencoin', symbol: 'RVN' },
    { name: 'Nervos Network', symbol: 'CKB' },
    { name: 'Siacoin', symbol: 'SC' },
    { name: 'EthereumPoW', symbol: 'ETHW' },
    { name: 'Ergo', symbol: 'ERG' },
    { name: 'Flux', symbol: 'FLUX' },
    { name: 'Syscoin', symbol: 'SYS' },
    { name: 'Firo', symbol: 'FIRO' },
    { name: 'Quantum Resistant Ledger', symbol: 'QRL' },
    { name: 'Groestlcoin', symbol: 'GRS' },
    { name: 'Quai Network', symbol: 'QUAI' },
    { name: 'Hathor', symbol: 'HTR' },
    { name: 'Beam', symbol: 'BEAM' },
    { name: 'Namecoin', symbol: 'NMC' },
    { name: 'Counterparty', symbol: 'XCP' },
    { name: 'MonaCoin', symbol: 'MONA' },
    { name: 'Komodo', symbol: 'KMD' },
    { name: 'Bitcoin Diamond', symbol: 'BCD' },
    { name: 'Vertcoin', symbol: 'VTC' },
    { name: 'BitcoinZ', symbol: 'BTCZ' },
    { name: 'Bytecoin', symbol: 'BCN' },
    { name: 'Aeternity', symbol: 'AE' },
    { name: 'Bytom', symbol: 'BTM' },
    { name: 'DigitalNote', symbol: 'XDN' },
    { name: 'ZClassic', symbol: 'ZCL' },
    { name: 'Litecoin Cash', symbol: 'LCC' },
    { name: 'Primecoin', symbol: 'XPM' },
    { name: 'Feathercoin', symbol: 'FTC' },
    { name: 'AEON', symbol: 'AEON' },
    { name: 'Bismuth', symbol: 'BIS' },
    { name: 'MyriadCoin', symbol: 'XMY' },
    { name: 'PotCoin', symbol: 'POT' },
    { name: 'Anoncoin', symbol: 'ANC' },
    { name: 'NewYorkCoin', symbol: 'NYC' },
    { name: 'QuarkCoin', symbol: 'QRK' },
];

export default function ProofOfWorkPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = proofOfWorkCoins.filter(
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
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Proof of Work (PoW) Coins</h1>
          <p className="text-lg text-gray-300 text-center">
            A list of cryptocurrencies that use the Proof of Work consensus mechanism.
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
    </>
  );
}
