'use client';

import Link from 'next/link';
import { HeaderDropdown } from './HeaderDropdown';

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


export function Header() {
  return (
    <header className="header-nav">
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
    </header>
  );
}
