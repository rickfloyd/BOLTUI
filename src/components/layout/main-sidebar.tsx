'use client';

import Link from 'next/link';

const navItems = [
  { href: '/markets', label: 'Markets Overview' },
  { href: '/forex', label: 'Forex' },
  { href: '/crypto', label: 'Crypto' },
  { href: '/indices', label: 'Indices' },
  { href: '/futures', label: 'Futures' },
  { href: '/metals', label: 'Metals' },
  { href: '/bonds', label: 'Bonds' },
  { href: '/economy', label: 'Economy' },
  { href: '/screener', label: 'Screener' },
  { href: '/news', label: 'News' },
  { href: '/education', label: 'Education' },
  { href: '/community', label: 'Community' },
  { href: '/sports', label: 'Sports' },
  { href: '/dex', label: 'DEX' },
];

export function MainSidebar() {
  return (
    <aside className="border-r border-purple-500/20 pr-4">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-purple-900/50 hover:text-cyan-300 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
