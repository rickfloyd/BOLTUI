'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';

const shitcoins = [
  { coin: 'Brett', symbol: 'BRETT' },
  { coin: 'Pengu', symbol: 'PENGU' },
  { coin: 'Mog Coin', symbol: 'MOG' },
  { coin: 'Ponke', symbol: 'PONKE' },
  { coin: 'GigaChad', symbol: 'GIGA' },
  { coin: 'Fartcoin', symbol: 'FART' },
  { coin: 'Non-Playable Coin', symbol: 'NPC' },
  { coin: 'Snek', symbol: 'SNEK' },
  { coin: 'Baby Doge Coin', symbol: 'BABYDOGE' },
  { coin: 'Book of Meme', symbol: 'BOME' },
  { coin: 'Lovely Inu', symbol: 'LOVELY' },
  { coin: 'Volt Inu', symbol: 'VOLTX' },
  { coin: 'Kabosu', symbol: 'KABOSU' },
  { coin: 'Paw Protocol', symbol: 'PAW' },
  { coin: 'Milady Meme Coin', symbol: 'LADYS' },
  { coin: 'TurboToadToken', symbol: 'TURBO' },
  { coin: 'Kishu Inu', symbol: 'KISHU' },
  { coin: 'CateCoin', symbol: 'CATE' },
  { coin: 'Saitama', symbol: 'SAITAMA' },
  { coin: 'AIDOGE', symbol: 'AIDOGE' },
  { coin: 'PeepeCoin', symbol: 'PEEPE' },
  { coin: 'PEPENODE', symbol: 'PEPENODE' },
  { coin: 'BabyFloki', symbol: 'BABYFLOKI' },
  { coin: 'ElonDogeCorp', symbol: 'ELONDOGE' },
  { coin: 'Akita Inu', symbol: 'AKITA' },
  { coin: 'Troller Cat', symbol: 'TCAT' },
  { coin: 'Just a Chill Guy', symbol: 'CHILLGUY' },
  { coin: 'Moo Deng', symbol: 'MOODENG' },
  { coin: 'Simon’s Cat', symbol: 'CAT' },
  { coin: '$TRUMP', symbol: 'TRUMP' },
  { coin: '$MELANIA', symbol: 'MELANIA' },
  { coin: 'Little Pepe', symbol: 'LILPEPE' },
  { coin: 'Buddy', symbol: 'BUDDY' },
  { coin: 'Gigachad Inu', symbol: 'GCHAD' },
  { coin: 'Floki Shiba', symbol: 'FLOKISHIBA' },
  { coin: 'DogeCash', symbol: 'DOGECASH' },
  { coin: 'RichQuack', symbol: 'RICHQUACK' },
  { coin: 'Banano', symbol: 'BANANO' },
  { coin: 'Akamaru Inu', symbol: 'AKAMARU' },
  { coin: 'Dogira', symbol: 'DOGIRA' },
  { coin: 'Baby Shiba Inu', symbol: 'BABYSHIBA' },
  { coin: 'MoonDoge', symbol: 'MOONDOGE' },
  { coin: 'DogeLon Mars', symbol: 'DOGELON' },
  { coin: 'PopCatToken', symbol: 'POPCAT' },
  { coin: '$HAWK', symbol: 'HAWK' },
  { coin: 'SPX6900', symbol: 'SPX' },
  { coin: 'Act I: The AI Prophecy', symbol: 'ACT' },
  { coin: 'HypeToken', symbol: 'HYPE' },
  { coin: 'Hoge Finance', symbol: 'HOGE' },
  { coin: 'FluxMeme', symbol: 'FLUX' },
  { coin: 'ShinjaToken', symbol: 'SHINJA' },
  { coin: 'FlokiX', symbol: 'FLOKIX' },
  { coin: 'Santa Floki', symbol: 'SANTAFLOKI' },
  { coin: 'ShibaPuppy', symbol: 'SHIBAPUP' },
  { coin: 'PoodlChain', symbol: 'POODL' },
  { coin: 'ShibaPredator', symbol: 'SHIBAPRED' },
  { coin: 'Puppey', symbol: 'PUPPEY' },
  { coin: 'Mini Doge', symbol: 'MINIDOGE' },
  { coin: 'BabyPepe', symbol: 'BABYPEPE' },
  { coin: 'FEG Token', symbol: 'FEG' },
  { coin: 'Pink Doge', symbol: 'PINKDOGE' },
  { coin: 'Pomeranian', symbol: 'POMERANIAN' },
  { coin: 'Chiba Inu', symbol: 'CHIBA' },
  { coin: 'PunksToken', symbol: 'PUNKS' },
  { coin: 'Doggyarium', symbol: 'DOGGYARIUM' },
  { coin: 'Frog Token', symbol: 'FROG' },
  { coin: 'DogX', symbol: 'DOGX' },
  { coin: 'Moon Inu', symbol: 'MOONINU' },
  { coin: 'Toad Token', symbol: 'TOAD' },
  { coin: 'Dogwifhat', symbol: 'WIF' },
  { coin: 'Meow Token', symbol: 'MEOW' },
  { coin: 'Kitty Inu', symbol: 'KITTYINU' },
  { coin: 'Kiki Inu', symbol: 'KIKIINU' },
  { coin: 'Dogzilla', symbol: 'DOGZILLA' },
  { coin: 'Wojak Token', symbol: 'WOJAK' },
  { coin: 'Lolli Token', symbol: 'LOLLI' },
  { coin: 'Chuwa Inu', symbol: 'CHUWA' },
  { coin: 'Zishu Inu', symbol: 'ZISHU' },
  { coin: 'Dogo Token', symbol: 'DOGO' },
  { coin: 'Puppey2', symbol: 'PUPPEY2' },
  { coin: 'Dogey Token', symbol: 'DOGEY' },
  { coin: 'StaBull Token', symbol: 'STABULL' },
  { coin: 'Inu Aku', symbol: 'INUAKU' },
  { coin: 'Star Inu', symbol: 'STARINU' },
  { coin: 'Doge Gas', symbol: 'DOGEGAS' },
  { coin: 'Memezilla', symbol: 'MEMEZILLA' },
  { coin: 'Fish Inu', symbol: 'FISHINU' },
  { coin: 'Puffy Token', symbol: 'PUFFY' },
  { coin: 'Inu Safe', symbol: 'INUSAFU' },
  { coin: 'Doge Burn', symbol: 'DOGEBURN' },
  { coin: 'Happy Inu', symbol: 'HAPPYINU' },
  { coin: 'Doge Party', symbol: 'DOGEPARTY' },
  { coin: 'Inu Verse', symbol: 'INUVERSE' },
  { coin: 'Doge Verse', symbol: 'DOGEVERSE' },
  { coin: 'Bork Token', symbol: 'BORK' },
  { coin: 'Rug Hog', symbol: 'RUGHOG' },
  { coin: 'Moon ROI', symbol: 'MOONROI' },
  { coin: 'Boom Inu', symbol: 'BOOMINU' },
  { coin: 'Raketa Token', symbol: 'RAKETA' },
  { coin: 'Wolf Inu', symbol: 'WOLFINU' },
  { coin: 'PEPESHIBA', symbol: 'PEPESHIBA' },
  { coin: 'MOONRABBIT', symbol: 'MOONRABBIT' },
  { coin: 'DOGE ARMY', symbol: 'DOGEARMY' },
  { coin: 'SHIBA COSMOS', symbol: 'SHIBACOSMOS' },
  { coin: 'DOGE KILLER', symbol: 'DOGEKILLER' },
  { coin: 'PEPETRON', symbol: 'PEPETRON' },
  { coin: 'ELON RUGS', symbol: 'ELONRUGS' },
  { coin: 'BILLIONAIRE DOGE', symbol: 'BILLIONAIREDOGE' },
  { coin: 'DOGE CEO', symbol: 'DOGECEO' },
  { coin: 'BABY SHIBA ROCKET', symbol: 'BABYSHIBAROCKET' },
  { coin: 'PINK INU', symbol: 'PINKINU' },
  { coin: 'CAT GIRL', symbol: 'CATGIRL' },
  { coin: 'HUSKY INU', symbol: 'HUSKYINU' },
  { coin: 'SHIBA ELON', symbol: 'SHIBAELON' },
  { coin: 'TAMA DOGE', symbol: 'TAMADOGE' },
  { coin: 'KIBA INU', symbol: 'KIBAINU' },
  { coin: 'SHIBA DREAMS', symbol: 'SHIBADREAMS' },
  { coin: 'FLOKI ELON', symbol: 'FLOKIELON' },
  { coin: 'INFINITY DOGE', symbol: 'INFINITYDOGE' },
  { coin: 'DOGE KINGS', symbol: 'DOGEKINGS' },
  { coin: 'INUKONG', symbol: 'INUKONG' },
  { coin: 'DOGEMANIA', symbol: 'DOGEMANIA' },
  { coin: 'TITAN INU', symbol: 'TITANINU' },
  { coin: 'DOGE VERSE AI', symbol: 'DOGEVERSEAI' },
  { coin: 'INUBOT', symbol: 'INUBOT' },
  { coin: 'DOGE 2.0', symbol: 'DOGE2' },
  { coin: 'KING SHIBA', symbol: 'KINGSHIBA' },
  { coin: 'LADY DOGE', symbol: 'LADYDOGE' },
  { coin: 'ELON DOGE AI', symbol: 'ELONDOGEAI' },
  { coin: 'SHIBA ARMY', symbol: 'SHIBAARMY' },
  { coin: 'DOGE EMPIRE', symbol: 'DOGEEMPIRE' },
  { coin: 'INUMETAVERSE', symbol: 'INUMETAVERSE' },
  { coin: 'SHIBA LEGEND', symbol: 'SHIBALEGEND' },
  { coin: 'DOGE DEFI', symbol: 'DOGEDEFI' },
  { coin: 'SHIBA 2.0', symbol: 'SHIBA2' },
  { coin: 'FLOKI 2.0', symbol: 'FLOKI2' },
  { coin: 'DOGE REPUBLIC', symbol: 'DOGEREPUBLIC' },
  { coin: 'SPACE DOGE', symbol: 'SPACEDOGE' },
  { coin: 'SHIBA WORLD', symbol: 'SHIBAWORLD' },
  { coin: 'DOGE TOKEN AI', symbol: 'DOGETOKENAI' },
  { coin: 'INUPAY', symbol: 'INUPAY' },
  { coin: 'DOGE AI', symbol 'DOGEAI' },
  { coin: 'SHIBA BOTS', symbol: 'SHIBABOTS' },
  { coin: 'DOGE MACHINE', symbol: 'DOGEMACHINE' },
  { coin: 'DOGE PLANET', symbol: 'DOGEPLANET' },
  { coin: 'INUCASH', symbol: 'INUCASH' },
  { coin: 'DOGE CHAIN X', symbol: 'DOGECHAINX' },
  { coin: 'INUMARKET', symbol: 'INUMARKET' },
  { coin: 'DOGE FUND', symbol: 'DOGEFUND' },
  { coin: 'DOGE DAO', symbol: 'DOGEDAO' },
];

export default function ShitcoinsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCoins = shitcoins.filter(
    (coin) =>
      coin.coin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">“Shitcoins” / Unverified Community Tokens</h1>
          <p className="text-lg text-gray-300 text-center">
            A list of high-risk, speculative meme coins and unverified tokens. Invest with caution.
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
                    <th>Coin</th>
                    <th>Symbol</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.map((coin, index) => (
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

    