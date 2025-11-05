'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
      <div className="logo">
        <Link href="/" className="text-xl font-bold neon-text">
          AI QUANTUM CHARTS
        </Link>
      </div>
      <nav className="flex items-center gap-6 text-sm">
        <Link href="/markets" className="text-gray-300 hover:text-cyan-400 transition-colors">Markets</Link>
        <Link href="/news" className="text-gray-300 hover:text-cyan-400 transition-colors">News</Link>
        <Link href="/screener" className="text-gray-300 hover:text-cyan-400 transition-colors">Screener</Link>
        <Link href="/community" className="text-gray-300 hover:text-cyan-400 transition-colors">Community</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">LOGIN</Link>
        <Link href="#" className="px-4 py-2 text-sm font-bold text-white bg-purple-600 rounded-md hover:bg-purple-500 transition-colors glow-on-hover">
          JOIN
        </Link>
      </div>
    </header>
  );
}
