"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { oracleTokens, OracleToken } from "@/data/oracle-tokens";

export default function OraclesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTokens = oracleTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">
            Oracle Tokens
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A curated list of projects and tokens that provide oracle services,
            delivering real-world data to blockchain smart contracts.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search oracle tokens..."
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
                  {filteredTokens.map((token, index) => (
                    <tr
                      key={`${token.symbol}-${index}`}
                      className="hover:bg-white/5"
                    >
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{token.name}</td>
                      <td className="neon-pink">{token.symbol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredTokens.length === 0 && (
                <p className="text-center text-gray-400 py-8">
                  No oracle tokens found matching your search.
                </p>
              )}
            </div>
          </div>
          <div className="mt-8 text-gray-400 text-sm max-w-4xl mx-auto">
            <h3 className="font-bold text-lg text-white mb-2">
              Notes on the Oracle Ecosystem:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The oracle ecosystem includes three categories:{" "}
                <strong>(A) native oracle tokens</strong> (Chainlink, Pyth,
                Band, API3, Tellor, DIA, Switchboard),{" "}
                <strong>(B) data-aggregation and middleware projects</strong>{" "}
                that provide oracle-like services (RedStone, Supra, RedStone
                Streams, Umbrella, Witnet), and{" "}
                <strong>(C) on-chain systems or protocols</strong> that embed
                oracle functionality or use oracle tokens for staking and
                validation (iExec, Phala, Kylin, Razor).
              </li>
              <li>
                Several projects have multiple tokens, ecosystem variants, or no
                single canonical token (some oracle services are protocols
                without a utility token). Coin tickers and token names can
                change, new oracle projects appear, and some legacy or
                specialized oracle tokens are region- or chain-specific.
              </li>
            </ul>
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
