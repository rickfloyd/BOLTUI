
'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ExchangeToken {
  name: string;
  symbol: string;
  providerHint: string;
}

const exchangeTokens: ExchangeToken[] = [
  { name: "Binance Coin", symbol: "BNB", providerHint: "Binance REST / account endpoints" },
  { name: "LEO Token", symbol: "LEO", providerHint: "Bitfinex REST" },
  { name: "Bitget Token", symbol: "BGB", providerHint: "Bitget REST" },
  { name: "OKB", symbol: "OKB", providerHint: "OKX REST" },
  { name: "Cronos", symbol: "CRO", providerHint: "Crypto.com REST" },
  { name: "KuCoin Token", symbol: "KCS", providerHint: "KuCoin REST" },
  { name: "GateToken", symbol: "GT", providerHint: "Gate.io REST" },
  { name: "FTX Token (FTT)", symbol: "FTT", providerHint: "FTX legacy REST (if available)" },
  { name: "CoinEx Token", symbol: "CET", providerHint: "CoinEx REST" },
  { name: "Huobi Token", symbol: "HT", providerHint: "Huobi REST" },
  { name: "OKT (OKChain)", symbol: "OKT", providerHint: "OKX/OKChain endpoints" },
  { name: "Bitrue Coin", symbol: "BTR", providerHint: "Bitrue REST" },
  { name: "Bitkub Coin", symbol: "KUB", providerHint: "Bitkub REST" },
  { name: "MEXC Token", symbol: "MX", providerHint: "MEXC REST" },
  { name: "WhiteBIT Coin", symbol: "WBT", providerHint: "WhiteBIT REST" },
  { name: "WazirX WRX", symbol: "WRX", providerHint: "WazirX REST" },
  { name: "Tokenize Xchange TKX", symbol: "TKX", providerHint: "Tokenize REST" },
  { name: "BitMart Token", symbol: "BMX", providerHint: "BitMart REST" },
  { name: "Bibox Token", symbol: "BIX", providerHint: "Bibox REST" },
  { name: "OKChain OKB variant", symbol: "OKB2", providerHint: "OKX ecosystem" },
  { name: "AscendEX Token", symbol: "ASD", providerHint: "AscendEX REST" },
  { name: "Hotbit Token", symbol: "HTB", providerHint: "Hotbit REST" },
  { name: "ProBit Token", symbol: "PROB", providerHint: "ProBit REST" },
  { name: "Bitso Token", symbol: "BITSO", providerHint: "Bitso REST" },
  { name: "Bibox Chain Token", symbol: "BCHT", providerHint: "Bibox chain APIs" },
  { name: "CoinEx Chain CET", symbol: "CETC", providerHint: "CoinEx Chain endpoints" },
  { name: "Gopax Token", symbol: "GPX", providerHint: "Gopax REST" },
  { name: "Bittrex Token (example)", symbol: "BTRX", providerHint: "Bittrex REST" },
  { name: "Poloniex Token (example)", symbol: "POLX", providerHint: "Poloniex REST" },
  { name: "GateChain Token", symbol: "GTN", providerHint: "GateChain endpoints" },
  { name: "MEXC Ecosystem Token", symbol: "MEXCET", providerHint: "MEXC REST" },
  { name: "Bitstamp Token (example)", symbol: "BST", providerHint: "Bitstamp REST" },
  { name: "CoinTiger Token", symbol: "CTT", providerHint: "CoinTiger REST" },
  { name: "BitFlyer Token (example)", symbol: "BFY", providerHint: "bitFlyer REST" },
  { name: "Crypto.com Token (CRO)", symbol: "CRO", providerHint: "Crypto.com REST" },
  { name: "CoinEx Token (alternate)", symbol: "CET2", providerHint: "CoinEx REST" },
  { name: "Bitbank Token (example)", symbol: "BBK", providerHint: "Bitbank REST" },
  { name: "Bithumb Token (example)", symbol: "BTH", providerHint: "Bithumb REST" },
  { name: "Upbit Token (example)", symbol: "UPT", providerHint: "Upbit REST" },
  { name: "Coinbase Exchange Token (example)", symbol: "COBX", providerHint: "Coinbase Pro REST" },
  { name: "Gemini Token (example)", symbol: "GMI", providerHint: "Gemini REST" },
  { name: "Kraken Token (example)", symbol: "KRK", providerHint: "Kraken REST" },
  { name: "OKX Ecosystem Token", symbol: "OKXET", providerHint: "OKX REST" },
  { name: "KuCoin Ecosystem Token (alt)", symbol: "KCS2", providerHint: "KuCoin REST" },
  { name: "Bitfinex LEO variant", symbol: "LEO2", providerHint: "Bitfinex REST" },
  { name: "Huobi Eco Chain HPT (example)", symbol: "HPT", providerHint: "Huobi ecosystem" },
  { name: "Bibox Token (alt)", symbol: "BIX2", providerHint: "Bibox REST" },
  { name: "CoinEx Global Token", symbol: "CETG", providerHint: "CoinEx REST" },
  { name: "Tokocrypto TKO (example)", symbol: "TKO", providerHint: "Tokocrypto REST" },
  { name: "Bitget Ecosystem Token", symbol: "BGB2", providerHint: "Bitget REST" },
  { name: "WhiteBit Ecosystem Token", symbol: "WBT2", providerHint: "WhiteBIT REST" },
  { name: "ZBG Token (example)", symbol: "ZBG", providerHint: "ZBG REST" },
  { name: "Bibox Chain BIXC", symbol: "BIXC", providerHint: "Bibox chain endpoints" },
  { name: "Mercatox Token (example)", symbol: "MCT", providerHint: "Mercatox REST" },
  { name: "BitMax Token (example)", symbol: "BTMX", providerHint: "BitMax REST" },
  { name: "Coinone Token (example)", symbol: "CONE", providerHint: "Coinone REST" },
  { name: "Paxful Token (example)", symbol: "PAXF", providerHint: "Paxful REST" },
  { name: "WOO Network (exchange integration)", symbol: "WOO", providerHint: "WOO X / REST" },
  { name: "Bilaxy Token (example)", symbol: "BIA", providerHint: "Bilaxy REST" },
  { name: "Hotbit Token (alt)", symbol: "HTB2", providerHint: "Hotbit REST" },
  { name: "Bitrue Token (alt)", symbol: "BTR2", providerHint: "Bitrue REST" },
  { name: "Korbit Token (example)", symbol: "KOR", providerHint: "Korbit REST" },
  { name: "CoinEx Token (regional)", symbol: "CETR", providerHint: "CoinEx REST" },
  { name: "BKEX Token (example)", symbol: "BKX", providerHint: "BKEX REST" },
  { name: "LBank Token (example)", symbol: "LBT", providerHint: "LBank REST" },
  { name: "CoinDCX Token (example)", symbol: "CDX", providerHint: "CoinDCX REST" },
  { name: "Bitbank Token (alt)", symbol: "BBT", providerHint: "Bitbank REST" },
  { name: "AscendEX Token (alt)", symbol: "ASD2", providerHint: "AscendEX REST" },
  { name: "Indodax Token (example)", symbol: "IDX", providerHint: "Indodax REST" },
  { name: "Tokocrypto Token (alt)", symbol: "TKO2", providerHint: "Tokocrypto REST" },
  { name: "HBTC Token (example)", symbol: "HBTC", providerHint: "HBTC REST" },
  { name: "OKX Token Variant", symbol: "OKXV", providerHint: "OKX REST" },
  { name: "Bitstamp Token (alt)", symbol: "BST2", providerHint: "Bitstamp REST" },
  { name: "GateToken (alt)", symbol: "GT2", providerHint: "Gate.io REST" },
  { name: "Kanga Exchange Token (example)", symbol: "KNGA", providerHint: "Kanga REST" },
  { name: "BTCEX Token (example)", symbol: "BTX", providerHint: "BTCEX REST" },
  { name: "ZBG Token (alt)", symbol: "ZBG2", providerHint: "ZBG REST" },
  { name: "BHEX Token (example)", symbol: "BHT", providerHint: "BHEX REST" },
  { name: "Coinsbit Token (example)", symbol: "CNB", providerHint: "Coinsbit REST" },
  { name: "OKCoin Token (example)", symbol: "OKC", providerHint: "OKCoin REST" },
  { name: "Simulated Exchange Token 1", symbol: "EXSIM1", providerHint: "Custom exchange REST" },
  { name: "Simulated Exchange Token 2", symbol: "EXSIM2", providerHint: "Custom exchange REST" },
  { name: "Simulated Exchange Token 3", symbol: "EXSIM3", providerHint: "Custom exchange REST" },
  { name: "Simulated Exchange Token 4", symbol: "EXSIM4", providerHint: "Custom exchange REST" },
];

export default function ExchangeTokensPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTokens = exchangeTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Exchange Tokens</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A list of tokens issued by cryptocurrency exchanges. These tokens often provide utility within their native platform, such as reduced trading fees, governance rights, or access to exclusive features.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search exchange tokens..."
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
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Provider Hint</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTokens.map((token, index) => (
                    <tr key={`${token.symbol}-${index}`} className="hover:bg-white/5">
                      <td className="neon-cyan">{token.name}</td>
                      <td className="neon-pink">{token.symbol.toUpperCase()}</td>
                      <td className="text-gray-400">{token.providerHint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredTokens.length === 0 && (
                <p className="text-center text-gray-400 py-8">No exchange tokens found matching your search.</p>
              )}
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

    