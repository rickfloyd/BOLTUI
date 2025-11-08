'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { gamingTokens } from '@/data/gaming-tokens';

export default function GamingTokensPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTokens = gamingTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Gaming &amp; GameFi Tokens</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A curated list of tokens from the gaming and GameFi ecosystems, including platform tokens, in-game currencies, and governance assets.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search gaming tokens..."
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
                  {filteredTokens.map((token, index) => (
                    <tr key={`${token.symbol}-${index}`} className="hover:bg-white/5">
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{token.name}</td>
                      <td className="neon-pink">{token.symbol.toUpperCase()}</td>
                      <td>
                        <Link href={token.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                          Visit <ExternalLink size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredTokens.length === 0 && (
                <p className="text-center text-gray-400 py-8">No gaming tokens found matching your search.</p>
              )}
            </div>
          </div>
          <div className="mt-8 text-gray-400 text-sm max-w-4xl mx-auto">
                <h3 className="font-bold text-lg text-white mb-2">Notes on the GameFi Ecosystem:</h3>
                <p>
                    The gaming ecosystem is broad and often includes repeated ecosystem tokens, marketplace tokens, in-game asset tokens, chain-native tokens (Ronin, WEMIX), and many project-specific utility tokens. This list includes many ecosystem variants, marketplace/infrastructure tokens, and legacy game tokens.
                </p>
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
