'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

const Dropdown = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center">
        {title} <ChevronDown className="h-4 w-4 ml-1" />
      </button>
      {isOpen && (
        <div className="header-dropdown">
          {children}
        </div>
      )}
    </div>
  );
};

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-purple-500/30 shadow-lg shadow-purple-500/10 h-20">
      <div className="logo">
        <Link href="/" className="text-2xl font-bold neon-text">
          MARKET TERMINAL
        </Link>
      </div>
      <nav className="flex items-center gap-2 text-sm">
        <Dropdown title="Impact">
            <Link href="#" className="header-dropdown-item">ESG</Link>
            <Link href="#" className="header-dropdown-item">DEI</Link>
        </Dropdown>
        <Dropdown title="Markets">
          <Link href="#" className="header-dropdown-item">Forex</Link>
           <Dropdown title="Crypto">
              <Link href="#" className="header-dropdown-item">Bitcoin</Link>
              <Link href="#" className="header-dropdown-item">Ethereum</Link>
           </Dropdown>
          <Link href="#" className="header-dropdown-item">Stocks</Link>
          <Link href="#" className="header-dropdown-item">Commodities</Link>
        </Dropdown>
        <NavLink href="/news">News</NavLink>
        <NavLink href="/screener">Screener</NavLink>
        <Dropdown title="Community">
            <Link href="#" className="header-dropdown-item">Forum</Link>
            <Link href="#" className="header-dropdown-item">Social</Link>
        </Dropdown>
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
