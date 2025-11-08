'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Stablecoin {
  name: string;
  symbol: string;
}

const stablecoins: Stablecoin[] = [
  { name: "Tether", symbol: "USDT" },
  { name: "USD Coin", symbol: "USDC" },
  { name: "Dai", symbol: "DAI" },
  { name: "TrueUSD", symbol: "TUSD" },
  { name: "Pax Dollar", symbol: "USDP" },
  { name: "Binance USD", symbol: "BUSD" },
  { name: "USDD", symbol: "USDD" },
  { name: "First Digital USD", symbol: "FDUSD" },
  { name: "PayPal USD", symbol: "PYUSD" },
  { name: "Ethena USDe", symbol: "USDe" },
  { name: "World Liberty USD (USD1)", symbol: "USD1" },
  { name: "Neutrino USD", symbol: "USDN" },
  { name: "sUSD (Synthetix)", symbol: "SUSD" },
  { name: "mUSD (mStable)", symbol: "MUSD" },
  { name: "Stably USD", symbol: "USDS" },
  { name: "Fei USD", symbol: "FEI" },
  { name: "TerraUSD Classic", symbol: "USTC" },
  { name: "Reserve Rights USD", symbol: "RSV" },
  { name: "Tether EURt", symbol: "EURt" },
  { name: "USDX (Kava)", symbol: "USDX" },
  { name: "TrueAUD", symbol: "TAUD" },
  { name: "sEUR", symbol: "SEUR" },
  { name: "USDK", symbol: "USDK" },
  { name: "QCAD Stablecoin", symbol: "QCAD" },
  { name: "XSGD", symbol: "XSGD" },
  { name: "TrueGBP", symbol: "TGBP" },
  { name: "Terra Classic USD (deprecated)", symbol: "UST" },
  { name: "Stasis EURS", symbol: "EURS" },
  { name: "Hedera USD (example)", symbol: "HUSD" },
  { name: "mStable USD", symbol: "mUSD" },
  { name: "Algorithmic USDX (example)", symbol: "USDXA" },
  { name: "TrueBRL", symbol: "TBRL" },
  { name: "Celo Dollar", symbol: "cUSD" },
  { name: "FRAX (fractional algorithmic)", symbol: "FRAX" },
  { name: "sAUD", symbol: "SAUD" },
  { name: "VGX Stable (example)", symbol: "VGXUSD" },
  { name: "Carbon USD (example)", symbol: "CUSD" },
  { name: "Tether GBPt", symbol: "GBPt" },
  { name: "TrueHKD", symbol: "THKD" },
  { name: "NUVEI USD (example)", symbol: "NUUSD" },
  { name: "sJPY", symbol: "SJPy" },
  { name: "TerraUSD v2 variants (example)", symbol: "TUSD2" },
  { name: "USDJ", symbol: "USDJ" },
  { name: "Liquity LUSD (pegged)", symbol: "LUSD" },
  { name: "mStable EUR", symbol: "mEUR" },
  { name: "Wrapped USD (wUSD)", symbol: "WUSD" },
  { name: "USDe (another issuer)", symbol: "USDE2" },
  { name: "Alchemix USD", symbol: "ALUSD" },
  { name: "NUSD (example)", symbol: "NUSD" },
  { name: "OKB Stable USD (example)", symbol: "OKUSD" },
  { name: "Gate USD (example)", symbol: "GTUSD" },
  { name: "Tether TRX-USDT", symbol: "TRX-USDT" },
  { name: "sGBP", symbol: "SGBP" },
  { name: "Reserve (RSV variant)", symbol: "RSV2" },
  { name: "sKRW", symbol: "SKRW" },
  { name: "BitUSD (BitShares)", symbol: "BITUSD" },
  { name: "NuBits (legacy)", symbol: "USNBT" },
  { name: "USDH (Hedera example)", symbol: "USDH" },
  { name: "sKRW2", symbol: "SKRW2" },
  { name: "XEUR (example)", symbol: "XEUR" },
  { name: "TrueCHF", symbol: "TCHF" },
  { name: "sCHF", symbol: "SCHF" },
  { name: "eUSD (example)", symbol: "EUSD" },
  { name: "USDQ (Q DAO)", symbol: "USDQ" },
  { name: "sCAD", symbol: "SCAD" },
  { name: "sAUD2", symbol: "SAUD2" },
  { name: "sEUR2", symbol: "SEUR2" },
  { name: "sUSD2", symbol: "SUSD2" },
  { name: "USDSB (example bank-backed)", symbol: "USDSB" },
  { name: "XSGD2", symbol: "XSGD2" },
  { name: "TrueINR (example)", symbol: "TINR" },
  { name: "sINR", symbol: "SINR" },
  { name: "USDS (example)", symbol: "USDS2" },
  { name: "StableUSD (example)", symbol: "STUSD" },
  { name: "Wrapped Fiat USD (example)", symbol: "WFUSD" },
  { name: "USDG (example)", symbol: "USDG" },
  { name: "sNZD", symbol: "SNZD" },
  { name: "sSEK", symbol: "SSEK" },
  { name: "sNOK", symbol: "SNOK" },
  { name: "sDKK", symbol: "SDKK" },
  { name: "sPLN", symbol: "SPLN" },
  { name: "PAX Gold (stable-like commodity)", symbol: "PAXG" },
  { name: "sMXN", symbol: "SMXN" },
  { name: "TerraKRW (example)", symbol: "KRT" },
  { name: "sTRY", symbol: "STRY" },
  { name: "sZAR", symbol: "SZAR" },
  { name: "sHKD", symbol: "SHKD" },
  { name: "sAED", symbol: "SAED" },
  { name: "BasketStable (example)", symbol: "BUSDx" },
  { name: "sILS", symbol: "SILS" },
  { name: "Anchor USD (example)", symbol: "ANUSD" },
  { name: "sPHP", symbol: "SPHP" },
  { name: "sTHB", symbol: "STHB" },
  { name: "sIDR", symbol: "SIDR" },
  { name: "sVND", symbol: "SVND" },
  { name: "sBDT", symbol: "SBDT" },
  { name: "sPKR", symbol: "SPKR" }
];


export default function StablecoinsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = stablecoins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Top 100 Stablecoins</h1>
          <p className="text-lg text-gray-300 text-center">
            A comprehensive list of stablecoins, which are cryptocurrencies designed to minimize price volatility.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search stablecoins..."
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
                    <th>Name</th>
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
