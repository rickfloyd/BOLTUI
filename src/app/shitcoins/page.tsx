import { Header } from '@/components/layout/header';

const shitcoins = [
  { rank: 1, coin: 'Dogwifhat', symbol: 'WIF' },
  { rank: 2, coin: 'Book of Meme', symbol: 'BOME' },
  { rank: 3, coin: 'Lovely Inu', symbol: 'LOVELY' },
  { rank: 4, coin: 'Volt Inu', symbol: 'VOLT' },
  { rank: 5, coin: 'Kabosu', symbol: 'KABOSU' },
  { rank: 6, coin: 'Paw Protocol', symbol: 'PAW' },
  { rank: 7, coin: 'Baby Doge Coin', symbol: 'BABYDOGE' },
  { rank: 8, coin: 'Milady Meme Coin', symbol: 'LADYS' },
  { rank: 9, coin: 'TurboToadToken', symbol: 'TURBO' },
  { rank: 10, coin: 'Kishu Inu', symbol: 'KISHU' },
  { rank: 11, coin: 'CateCoin', symbol: 'CATE' },
  { rank: 12, coin: 'Saitama', symbol: 'SAITAMA' },
  { rank: 13, coin: 'HOGE Finance', symbol: 'HOGE' },
  { rank: 14, coin: 'AIDOGE', symbol: 'AIDOGE' },
  { rank: 15, coin: 'PeepeCoin', symbol: 'PEEPE' },
  { rank: 16, coin: 'PEPENODE', symbol: 'PEPENODE' },
  { rank: 17, coin: 'BabyFloki', symbol: 'BABYFLOKI' },
  { rank: 18, coin: 'ElonDogeCorp', symbol: 'ELONDOGE' },
  { rank: 19, coin: 'Shibatoken', symbol: 'SHIB' },
  { rank_20: 20, coin: 'Floki Inu', symbol: 'FLOKI' },
  { rank: 21, coin: 'SafeMoon', symbol: 'SAFEMOON' },
  { rank: 22, coin: 'ShibaPuppy', symbol: 'SHIBAPUP' },
  { rank: 23, coin: 'FlokiShiba', symbol: 'FLOKISHIBA' },
  { rank: 24, coin: 'DogeCash', symbol: 'DOGECASH' },
  { rank: 25, coin: 'AkitaInu', symbol: 'AKITA' },
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
                    <th>Symbol</th>
                  </tr>
                </thead>
                <tbody>
                  {shitcoins.map((coin, index) => (
                    <tr key={index} className="hover:bg-white/5">
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{coin.coin}</td>
                      <td className="neon-pink">{coin.symbol}</td>
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
