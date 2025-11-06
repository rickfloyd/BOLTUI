'use client';

import Link from 'next/link';
import { HeaderDropdown } from './HeaderDropdown';

const aiPlatformItems = [
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


export function Header() {
  return (
    <header className="header-nav">
      <div className="header-top-layer">
        <div className="header-title neon-text">AI Quantum Charts</div>
        <nav className="main-nav">
          <HeaderDropdown title="Personalities" items={aiPlatformItems} titleClassName="neon-pink" />
          <Link href="#" className="nav-item neon-cyan">
            Impact
          </Link>
          <Link href="#" className="nav-item neon-orange">
            Sports Betting
          </Link>
          <HeaderDropdown title="Sports" items={sportsItems} titleClassName="neon-blue" />
          <Link href="#" className="nav-item neon-green">
            Products
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
