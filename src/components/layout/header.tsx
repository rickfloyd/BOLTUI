'use client';

import Link from 'next/link';
import { HeaderDropdown } from './HeaderDropdown';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const communityFeaturesItems = [
    { name: 'AI Price Prediction Engine', subtext: 'Forecasting with machine learning' },
    { name: 'ML Pattern Recognition', subtext: 'Identify historical patterns' },
    { name: 'Sentiment Analysis AI', subtext: 'Gauge market mood from news & social' },
    { name: 'Smart Risk Management', subtext: 'AI-driven risk assessment' },
    { name: 'Automated Trading Signals', subtext: 'Real-time buy/sell alerts' },
    { name: 'Neural Networks & LSTM', subtext: 'Deep learning for market prediction' },
];

const sportsItems = [
    { name: 'Markets', subtext: 'Global financial markets', active: true },
    { name: 'World Sports', subtext: 'International sports coverage' },
];

const tradersProfileItems = [
  { name: 'Personal Account', subtext: 'Manage your personal trading profile' },
  { name: 'Business Account', subtext: 'Manage your business trading profile' },
  { name: 'VIP', subtext: 'Access exclusive VIP features' },
];

function DesktopHeader() {
  return (
    <>
      <div className="header-top-layer">
        <div className="header-title neon-text">AI Quantum Charts</div>
        <div className="nav-right">
           <Link href="#" className="nav-item neon-pink">
            Compare Prices
          </Link>
           <Link href="#" className="nav-item neon-pink">
            Policies
          </Link>
           <Link href="/join" className="nav-item neon-pink">
            Join
          </Link>
        </div>
      </div>
      <div className="header-middle-layer">
        <nav className="main-nav">
          <Link href="#" className="nav-item neon-cyan">
            Impact
          </Link>
           <Link href="#" className="nav-item neon-orange">
            Stocks
          </Link>
          <HeaderDropdown title="Community Features" items={communityFeaturesItems} titleClassName="neon-blue" />
          <HeaderDropdown title="Traders Profile" items={tradersProfileItems} titleClassName="neon-pink" />
          <Link href="#" className="nav-item neon-orange">
            Guilty Pleasures
          </Link>
          <Link href="#" className="nav-item neon-green">
            Products
          </Link>
        </nav>
      </div>
      <div className="header-bottom-layer">
        <nav className="main-nav">
          <Link href="#" className="nav-item neon-orange">
            Sports Betting
          </Link>
          <HeaderDropdown title="Sports" items={sportsItems} titleClassName="neon-blue" />
          <Link href="#" className="nav-item neon-cyan">
            Political Views
          </Link>
        </nav>
      </div>
    </>
  )
}

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="header-top-layer">
        <div className="header-title neon-text">AI Quantum Charts</div>
        <button onClick={toggleMenu} className="mobile-menu-button">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <Link href="#" className="nav-item neon-cyan">Impact</Link>
            <Link href="#" className="nav-item neon-orange">Stocks</Link>
            <HeaderDropdown title="Community Features" items={communityFeaturesItems} titleClassName="neon-blue" />
            <HeaderDropdown title="Traders Profile" items={tradersProfileItems} titleClassName="neon-pink" />
            <Link href="#" className="nav-item neon-orange">Guilty Pleasures</Link>
            <Link href="#" className="nav-item neon-green">Products</Link>
            <Link href="#" className="nav-item neon-orange">Sports Betting</Link>
            <HeaderDropdown title="Sports" items={sportsItems} titleClassName="neon-blue" />
            <Link href="#" className="nav-item neon-cyan">Political Views</Link>
            <div className="mobile-menu-separator" />
            <Link href="#" className="nav-item neon-pink">Compare Prices</Link>
            <Link href="#" className="nav-item neon-pink">Policies</Link>
            <Link href="/join" className="nav-item neon-pink">Join</Link>
          </nav>
        </div>
      )}
    </>
  );
}


export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="header-nav">
      {isMobile === undefined ? (
        <div className="header-top-layer">
          <div className="header-title neon-text">AI Quantum Charts</div>
        </div>
      ) : isMobile ? (
        <MobileHeader />
      ) : (
        <DesktopHeader />
      )}
    </header>
  );
}
