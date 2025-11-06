'use client';

import Link from 'next/link';
import { HeaderDropdown } from './HeaderDropdown';

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
  const guiltyPleasureItems = [
    { name: 'Celebrity Gossip', subtext: 'Latest news from Hollywood' },
    { name: 'Reality TV Buzz', subtext: 'What\'s happening on your favorite shows' },
    { name: 'Viral Memes', subtext: 'The funniest content on the web' },
    { name: 'Binge-Worthy Shows', subtext: 'Recommendations for your next marathon' },
  ];
  return (
    <header className="header-nav">
      <div className="header-top-layer">
        <div className="header-title neon-text">AI Quantum Charts</div>
        <nav className="main-nav">
          <Link href="#" className="nav-item neon-pink">
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
          <Link href="#" className="nav-item neon-orange">
            Products
          </Link>
          <Link href="#" className="nav-item neon-blue active-market">
            Markets
          </Link>
        </nav>
        <div className="nav-right">
          <Link href="#" className="nav-item neon-pink">
            Community
          </Link>
          <Link href="#" className="nav-item neon-pink">
            LOGIN
          </Link>
          <Link href="/join" className="nav-item neon-orange">
            JOIN
          </Link>
        </div>
      </div>
      <div className="header-bottom-layer">
        <Link href="#" className="nav-item neon-pink">
            FIRST 1000 MEMBERS FREE
        </Link>
        <HeaderDropdown title="Financial News" items={financialNewsItems} titleClassName="neon-orange" />
        <HeaderDropdown title="Politics" items={politicalViewpointItems} titleClassName="neon-blue"/>
        <HeaderDropdown title="Guilty Pleasures" items={guiltyPleasureItems} titleClassName="neon-pink" />
      </div>
    </header>
  );
}

    