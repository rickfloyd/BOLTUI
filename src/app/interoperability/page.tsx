'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { interoperabilityTokens, InteroperabilityToken } from '@/data/interoperability-tokens';

export default function InteroperabilityTokensPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTokens = interoperabilityTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Interoperability & Cross-Chain Tokens</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A curated list of projects, protocols, and infrastructure tokens focused on connecting different blockchain ecosystems, enabling assets and data to move between them.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search interoperability tokens..."
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
                    <th>Symbol / Ticker</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTokens.map((token, index) => (
                    <tr key={`${token.symbol}-${index}`} className="hover:bg-white/5">
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{token.name}</td>
                      <td className="neon-pink">{token.symbol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredTokens.length === 0 && (
                <p className="text-center text-gray-400 py-8">No interoperability tokens found matching your search.</p>
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
