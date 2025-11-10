"use client";

import { Header } from "@/components/layout/header";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CoinValidatorPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="center-content max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold neon-text text-center mb-6">
            🤖 Coin & Token Validator
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12">
            This tool programmatically validates on-chain data and metadata for
            crypto assets. It runs weekly to ensure the information across the
            platform remains accurate and up-to-date.
          </p>

          <section className="p-8 rounded-lg bg-black/50 border-2 border-cyan-500/50 shadow-[0_0_25px_rgba(0,255,255,0.3)] w-full">
            <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
              Validator Checklist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Consensus type (PoW, PoS, hybrid)",
                "Hash algorithm",
                "Mining status",
                "Canonical metadata (symbol, name, CoinGecko ID)",
                "Smart contract code (for EVM tokens)",
                "ERC standard detection (e.g., ERC-20, ERC-721)",
                "Proxy contract detection",
                "Upgradeable contract detection",
                "Fallback logic for missing metadata",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>
                Validation scripts use a combination of CoinGecko and Etherscan
                APIs to pull and verify data.
              </p>
              <p>
                This process helps maintain data integrity and provides deeper
                insights into each asset.
              </p>
            </div>
          </section>

          <section className="mt-12 w-full">
            <h2 className="text-2xl font-bold text-pink-300 mb-4 text-center">
              Developer Tooling
            </h2>
            <p className="text-center text-gray-300 mb-4">
              A script is available in the{" "}
              <code className="bg-gray-800 p-1 rounded-md text-cyan-400">
                /tools
              </code>{" "}
              directory to perform these checks.
            </p>
            <div className="bg-gray-900/70 p-6 rounded-lg border border-pink-400/30">
              <h3 className="text-xl font-semibold text-white mb-2">
                /tools/validate-coingecko-ids.js
              </h3>
              <p className="text-gray-400">
                This Node.js script takes a list of tokens and uses the
                CoinGecko API to verify their canonical ID, symbol, and name,
                providing suggestions for any mismatches. It serves as the
                foundation for the automated weekly validation process.
              </p>
              <Link
                href="#"
                className="text-cyan-400 hover:underline mt-4 inline-block"
              >
                View Script (TBD)
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
