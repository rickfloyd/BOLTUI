"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { daoTokens, DaoToken } from "@/data/dao-tokens";

export default function DaoTokensPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTokens = daoTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.chain.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">
            DAO Governance Tokens
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            These tokens represent governance rights in decentralized autonomous
            organizations (DAOs). They’re typically used for voting, proposals,
            and treasury control.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search DAO tokens..."
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
                    <th>Token Name</th>
                    <th>Symbol</th>
                    <th>Contract Address</th>
                    <th>Chain</th>
                    <th>API</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTokens.map((token, index) => (
                    <tr
                      key={`${token.symbol}-${index}`}
                      className="hover:bg-white/5"
                    >
                      <td className="neon-cyan">{token.name}</td>
                      <td className="neon-pink">{token.symbol}</td>
                      <td className="text-gray-400 font-mono text-xs">
                        {token.contractAddress}
                      </td>
                      <td className="text-gray-300">{token.chain}</td>
                      <td>
                        <Link
                          href={token.apiEndpoint}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          CoinGecko <ExternalLink size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredTokens.length === 0 && (
                <p className="text-center text-gray-400 py-8">
                  No DAO tokens found matching your search.
                </p>
              )}
            </div>
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
