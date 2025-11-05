'use client';

import Link from 'next/link';
import { HeaderDropdown } from './HeaderDropdown';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const politicalViewpointItems = [
    { name: 'Republican', subtext: 'Conservative market analysis' },
    { name: 'Democrat', subtext: 'Progressive economic insights', active: true },
    { name: 'Liberal', subtext: 'Social-focused market views' },
    { name: 'Independent', subtext: 'Unbiased market perspective' },
  ];
  const financialNewsItems = [
    { name: 'Market Overview', subtext: 'Top stories and analysis' },
    { name: 'Economic Indicators', subtext: 'Latest data releases' },
    { name: 'Corporate Earnings', subtext: 'Company performance reports' },
    { name: 'Global Markets', subtext: 'International news and trends' },
  ];
  const aiPlatformItems = [
    { name: 'AI Price Prediction Engine', subtext: 'Forecasting with machine learning' },
    { name: 'ML Pattern Recognition', subtext: 'Identify historical patterns' },
    { name: 'Sentiment Analysis AI', subtext: 'Gauge market mood from news & social' },
    { name: 'Smart Risk Management', subtext: 'AI-driven risk assessment' },
    { name: 'Automated Trading Signals', subtext: 'Real-time buy/sell alerts' },
    { name: 'Neural Networks & LSTM', subtext: 'Deep learning for market prediction' },
  ];
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');
  return (
    <header className="header-nav">
      <div className="header-top-layer">
        <nav className="main-nav">
          <Link href="#" className="nav-item impact-glow">
            Impact
          </Link>
          <Link href="#" className="nav-item neon-orange">
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
          <Link href="#" className="nav-item active-market">
            Markets
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
          <Link href="#" className="nav-item community-glow">
            Community
          </Link>
          <Link href="#" className="nav-item">
            LOGIN
          </Link>
          <Link href="#" className="nav-item">
            JOIN
          </Link>
        </div>
      </div>
      <div className="header-bottom-layer">
        <HeaderDropdown title="AI-Powered Trading Platform" items={aiPlatformItems} />
        <HeaderDropdown title="Financial News" items={financialNewsItems} />
        <HeaderDropdown title="Politics" items={politicalViewpointItems} />
      </div>
    </header>
  );
}
