"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { memeCoins } from "@/data/meme-coins";

export default function ShitcoinsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoins = memeCoins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">
            🔥 Top 100 Meme Coins
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A curated list of 100 meme-themed tokens. This ecosystem is
            extremely large and fast-moving. Always verify contract addresses
            and official project links before transacting.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search meme coins..."
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
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoins.map((coin, index) => (
                    <tr
                      key={`${coin.symbol}-${index}`}
                      className="hover:bg-white/5"
                    >
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{coin.name}</td>
                      <td className="neon-pink">{coin.symbol.toUpperCase()}</td>
                      <td>
                        <Link
                          href={coin.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          Visit <ExternalLink size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredCoins.length === 0 && (
                <p className="text-center text-gray-400 py-8">
                  No meme coins found matching your search.
                </p>
              )}
            </div>
          </div>
          <div className="mt-8 text-gray-400 text-sm max-w-4xl mx-auto">
            <h3 className="font-bold text-lg text-white mb-2">
              Note on Meme Coins:
            </h3>
            <p>
              The meme coin ecosystem is extremely large and fast-moving. For
              some smaller or very new tokens there may be multiple community
              pages, and some projects intentionally use social channels
              (Telegram/Discord/Twitter) rather than a central website. Several
              entries are community-driven projects with variable permanence;
              always verify contract addresses and official project links before
              interacting or transacting.
            </p>
          </div>
        </section>
      </main>
      <Link
        href="/main"
        className="fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back
      </Link>
    </>
  );
}
