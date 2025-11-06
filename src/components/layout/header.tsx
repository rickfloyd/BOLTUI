'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="header-nav">
      <div className="header-top-layer">
        <div className="header-title neon-text">AI Quantum Charts</div>
        <nav className="main-nav">
          <Link href="#" className="nav-item neon-pink">
            Personalities
          </Link>
          <Link href="#" className="nav-item neon-cyan">
            Impact
          </Link>
          <Link href="#" className="nav-item neon-orange">
            Sports Betting
          </Link>
          <Link href="#" className="nav-item neon-blue">
            Sports
          </Link>
          <Link href="#" className="nav-item neon-pink">
            World Sports
          </Link>
          <Link href="#" className="nav-item neon-green">
            Products
          </Link>
          <Link href="#" className="nav-item neon-cyan active-market">
            Markets
          </Link>
        </nav>
        <div className="nav-right">
          <Link href="#" className="nav-item neon-orange">
            Stocks
          </Link>
          <Link href="#" className="nav-item neon-blue">
            Community
          </Link>
          <Link href="/join" className="nav-item neon-pink">
            Join
          </Link>
        </div>
      </div>
    </header>
  );
}
