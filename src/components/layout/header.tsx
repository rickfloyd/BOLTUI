'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const toggleDropdown = (menuId: string) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  const toggleSubDropdown = (menuId: string) => {
    setActiveSubDropdown(activeSubDropdown === menuId ? null : menuId);
  };

  return (
    <header className="header-nav">
      <div className="logo">AI QUANTUM CHARTS</div>
      <nav>
        <div className="nav-item-wrapper">
          <a
            href="#"
            className="nav-item impact-glow"
            onClick={() => toggleDropdown('impact-menu')}
          >
            Impact
          </a>
          <div
            id="impact-menu"
            className={`header-dropdown-menu neon-cyan-border ${
              activeDropdown === 'impact-menu' ? 'visible' : ''
            }`}
          >
            <div className="menu-item">Our Mission</div>
            <div className="menu-item">Success Stories</div>
            <div className="menu-item">Community Projects</div>
          </div>
        </div>
        <Link href="#" className="nav-item">
          Sports Betting
        </Link>
        <Link href="#" className="nav-item">
          Sports
        </Link>
        <Link href="#" className="nav-item">
          World Sports
        </Link>
        <Link href="#" className="nav-item">
          Products
        </Link>
        <div className="nav-item-wrapper">
          <a
            href="#"
            className="nav-item active-market"
            onClick={() => toggleDropdown('markets-menu')}
          >
            Markets
          </a>
          <div
            id="markets-menu"
            className={`header-dropdown-menu neon-pink-border ${
              activeDropdown === 'markets-menu' ? 'visible' : ''
            }`}
          >
            <div className="menu-item">US Stocks</div>
            <div className="menu-item">International</div>
            <div className="menu-item-submenu-container">
              <a href="#" className="menu-item" onClick={() => toggleSubDropdown('crypto-menu')}>Crypto</a>
               <div id="crypto-menu" className={`header-submenu ${activeSubDropdown === 'crypto-menu' ? 'visible' : ''}`}>
                 <div className="menu-item">Bitcoin</div>
                 <div className="menu-item">Ethereum</div>
              </div>
            </div>
            <div className="menu-item">Forex</div>
          </div>
        </div>
        <Link href="#" className="nav-item">
          More
        </Link>
      </nav>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search markets..."
          className="search-input"
        />
      </div>
      <div className="nav-right">
        <Link href="#" className="nav-item">
          Stocks
        </Link>
        <Link href="#" className="nav-item">
          Commodities
        </Link>
        <div className="nav-item-wrapper">
          <a
            href="#"
            className="nav-item community-glow"
            onClick={() => toggleDropdown('community-menu')}
          >
            Community
          </a>
          <div
            id="community-menu"
            className={`header-dropdown-menu neon-pink-border ${
              activeDropdown === 'community-menu' ? 'visible' : ''
            }`}
          >
            <div className="menu-item">Forums</div>
            <div className="menu-item">Live Chat</div>
            <div className="menu-item">Leaderboards</div>
          </div>
        </div>
      </div>
    </header>
  );
}
