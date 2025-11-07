import { Header } from '@/components/layout/header';
import Link from 'next/link';

const shitcoins = [
  {
    rank: 1,
    coin: 'Dogecoin (DOGE)',
    exchanges: 'Major exchanges (e.g., large CEXes)',
    sourceUrl: 'https://cryptonews.com/cryptocurrency/best-shitcoins-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 2,
    coin: 'Shiba Inu (SHIB)',
    exchanges: 'Also listed on many major platforms',
    sourceUrl: 'https://cryptonews.com/cryptocurrency/best-shitcoins-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 3,
    coin: 'Pepe (PEPE)',
    exchanges: 'Major listing mentioned',
    sourceUrl: 'https://www.binance.com/en/square/post/8259998036434?utm_source=chatgpt.com',
  },
  {
    rank: 4,
    coin: 'Bonk (BONK)',
    exchanges: 'Listed on major exchanges like Coinbase, Binance',
    sourceUrl: 'https://99bitcoins.com/cryptocurrency/best-shitcoins-to-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 5,
    coin: 'Dogwifhat (WIF)',
    exchanges: 'Mentioned in “best” lists of such coins',
    sourceUrl: 'https://www.coinspeaker.com/guides/best-shitcoins-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 6,
    coin: 'Bitcoin Hyper (HYPER)',
    exchanges: 'Presale stage but identified as a high-risk pick',
    sourceUrl: 'https://cryptonews.com/cryptocurrency/best-shitcoins-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 7,
    coin: 'Maxi Doge (MAXI)',
    exchanges: 'Another speculative meme project',
    sourceUrl: 'https://cryptonews.com/cryptocurrency/best-shitcoins-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 8,
    coin: 'PEPENODE (PEPENODE)',
    exchanges: 'Presale type meme token with mining/gaming angle',
    sourceUrl: 'https://cryptonews.com/cryptocurrency/best-shitcoins-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 9,
    coin: 'Little Pepe (LILPEPE)',
    exchanges: 'Another high-risk meme layer-2 / token project',
    sourceUrl: 'https://cryptonews.com/cryptocurrency/best-shitcoins-buy/?utm_source=chatgpt.com',
  },
  {
    rank: 10,
    coin: 'BOOK OF MEME (BOME)',
    exchanges: 'Rapid meme coin, listed on platforms like MEXC',
    sourceUrl: 'https://99bitcoins.com/cryptocurrency/best-shitcoins-to-buy/?utm_source=chatgpt.com',
  },
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
                    <th>Exchange(s) / Where Listed</th>
                  </tr>
                </thead>
                <tbody>
                  {shitcoins.map((coin) => (
                    <tr key={coin.rank} className="hover:bg-white/5">
                      <td className="neon-orange">{coin.rank}</td>
                      <td className="neon-cyan">{coin.coin}</td>
                      <td>
                        <Link href={coin.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {coin.exchanges}
                        </Link>
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
