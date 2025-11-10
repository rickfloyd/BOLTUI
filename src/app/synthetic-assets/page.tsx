"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { syntheticAssets, SyntheticAsset } from "@/data/synthetic-assets";

export default function SyntheticAssetsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAssets = syntheticAssets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.issuer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">
            Synthetic Asset Tokens
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A curated list of synthetic assets, protocols, and governance
            tokens. Synthetics mirror the value of other assets, enabling
            exposure without ownership.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search synthetic assets..."
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
                    <th>Issuer / Protocol</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssets.map((asset, index) => (
                    <tr
                      key={`${asset.symbol}-${index}`}
                      className="hover:bg-white/5"
                    >
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{asset.name}</td>
                      <td className="neon-pink">{asset.symbol}</td>
                      <td className="text-gray-400">{asset.issuer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredAssets.length === 0 && (
                <p className="text-center text-gray-400 py-8">
                  No synthetic assets found matching your search.
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
