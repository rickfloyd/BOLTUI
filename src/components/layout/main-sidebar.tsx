'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const educationalItems = [
  { name: 'Republican', description: 'Conservative market analysis' },
  { name: 'Democrat', description: 'Progressive economic insights', active: true },
  { name: 'Liberal', description: 'Social-focused market views' },
  { name: 'Independent', description: 'Unbiased market perspective' },
];

const platformItems = [
  { name: 'AI Price Prediction Engine', href: '/ai-analysis'},
  { name: 'ML Pattern Recognition', href: '#'},
  { name: 'Sentiment Analysis AI', href: '#'},
  { name: 'Smart Risk Management', href: '#'},
  { name: 'Automated Trading Signals', href: '#'},
  { name: 'Neural Networks & LSTM', href: '#'},
  { name: 'Advanced Drawing Tools', href: '/charting'},
  { name: 'Real-Time Market Data', href: '/data-feeds'},
  { name: 'Portfolio Management', href: '#'},
  { name: 'Custom Scripting Engine', href: '#'},
];

const marketSummaryItems = [
    { name: 'Stocks', href: '/exchanges' },
    { name: 'Crypto', href: '/crypto' },
    { name: 'Forex', href: '/forex' },
    { name: 'Indices', href: '/indices' },
    { name: 'Bonds', href: '/bonds' },
    { name: 'Metals', href: '/metals' },
    { name: 'Financial Data', href: '/financial-data' },
    { name: 'Strategy', href: '/strategy' },
]

export function MainSidebar() {
  const [visibleMenu, setVisibleMenu] = React.useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setVisibleMenu(visibleMenu === menuId ? null : menuId);
  };
  
  return (
    <aside className="left-sidebar">
      <div className="sidebar-section">
        <div
          className="section-title dropdown-toggle neon-cyan"
          data-target="personalities-menu"
          onClick={() => toggleMenu('personalities-menu')}
        >
          <span className="dot-indicator"></span> Educational
        </div>
        <div
          id="personalities-menu"
          className={cn(
            'dropdown-menu',
            visibleMenu === 'personalities-menu' && 'visible'
          )}
        >
          {educationalItems.map((item) => (
            <div
              key={item.name}
              className={cn('menu-item', item.active && 'active-pink')}
            >
              {item.name}
              <span className="sub-text">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <div 
          className="section-title dropdown-toggle neon-pink"
          data-target="market-summary-menu"
          onClick={() => toggleMenu('market-summary-menu')}
        >
          <span className="dot-indicator"></span> Market Summary
        </div>
         <div
          id="market-summary-menu"
          className={cn(
            'dropdown-menu',
            visibleMenu === 'market-summary-menu' && 'visible'
          )}
          style={{top: '105px', borderColor: 'var(--neon-pink)', boxShadow: 'var(--shadow-pink)'}}
        >
          {marketSummaryItems.map((item) => (
            <Link href={item.href} key={item.name} className="menu-item">
                {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-section platform-section">
        <div
          className="section-title dropdown-toggle neon-blue"
          data-target="trading-platform-menu"
          onClick={() => toggleMenu('trading-platform-menu')}
        >
          <span className="dot-indicator"></span> AI-Powered Trading Platform
        </div>
        <div
          id="trading-platform-menu"
          className={cn(
            'dropdown-menu platform-menu',
            visibleMenu === 'trading-platform-menu' && 'visible'
          )}
        >
          {platformItems.map((item) => (
             <Link href={item.href} key={item.name} className="menu-item">
                {item.name}
            </Link>
          ))}
          <div className="menu-item revolutionary-text">
            Revolutionary AI Trading Platform!
          </div>
        </div>
      </div>
    </aside>
  );
}
