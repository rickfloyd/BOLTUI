import { Header } from '@/components/layout/header';

const shitcoins = [
  { rank: 1, coin: 'Dogecoin (DOGE)', exchanges: 'Binance, Coinbase, Kraken, KuCoin, Huobi' },
  { rank: 2, coin: 'Shiba Inu (SHIB)', exchanges: 'Binance, Coinbase, KuCoin, OKX, Bitget' },
  { rank: 3, coin: 'Pepe (PEPE)', exchanges: 'Binance, OKX, KuCoin, Gate.io, Uniswap' },
  { rank: 4, coin: 'Floki Inu (FLOKI)', exchanges: 'Binance, KuCoin, OKX, Gate.io' },
  { rank: 5, coin: 'Bonk (BONK)', exchanges: 'Coinbase, Binance, MEXC, Raydium (Solana)' },
  { rank: 6, coin: 'Dogwifhat (WIF)', exchanges: 'Binance, Coinbase, Bitget, Bybit' },
  { rank: 7, coin: 'Book of Meme (BOME)', exchanges: 'Binance, KuCoin, Gate.io, MEXC' },
  { rank: 8, coin: 'AIDOGE', exchanges: 'Gate.io, MEXC, Uniswap (Ethereum)' },
  { rank: 9, coin: 'Baby Doge Coin (BABYDOGE)', exchanges: 'OKX, Gate.io, PancakeSwap (BSC)' },
  { rank: 10, coin: 'HOGE Finance (HOGE)', exchanges: 'Uniswap, PancakeSwap, Gate.io' },
  { rank: 11, coin: 'Pitbull (PIT)', exchanges: 'PancakeSwap (BSC), Bitmart' },
  { rank: 12, coin: 'CateCoin (CATE)', exchanges: 'Gate.io, PancakeSwap' },
  { rank: 13, coin: 'Saitama (SAITAMA)', exchanges: 'LBank, BitMart, Uniswap' },
  { rank: 14, coin: 'Kishu Inu (KISHU)', exchanges: 'OKX, Gate.io, Uniswap' },
  { rank: 15, coin: 'Paw Protocol (PAW)', exchanges: 'Uniswap, BitMart' },
  { rank: 16, coin: 'Lovely Inu (LOVELY)', exchanges: 'MEXC, PancakeSwap' },
  { rank: 17, coin: 'Volt Inu (VOLT)', exchanges: 'Gate.io, Uniswap, BitMart' },
  { rank: 18, coin: 'Milady Meme Coin (LADYS)', exchanges: 'Binance, Uniswap' },
  { rank: 19, coin: 'TURBO (TurboToadToken)', exchanges: 'Gate.io, Uniswap' },
  { rank: 20, coin: 'Kabosu (KABOSU)', exchanges: 'Gate.io, MEXC, Uniswap' },
];

export default function ShitcoinsPage() {
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">“Shitcoins” / Unverified Community Tokens</h1>
          <p className="text-lg text-gray-300 text-center">
            A list of high-risk, speculative meme coins and unverified tokens. Invest with caution.
          </p>
          <div className="w-full overflow-x-auto mt-8">
            <div className="info-table-card">
              <table className="info-table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Exchange(s) / Platforms (where traded)</th>
                  </tr>
                </thead>
                <tbody>
                  {shitcoins.map((coin) => (
                    <tr key={coin.rank} className="hover:bg-white/5">
                      <td className="neon-orange">{coin.rank}</td>
                      <td className="neon-cyan">{coin.coin}</td>
                      <td>
                        {coin.exchanges}
                      </td>
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
