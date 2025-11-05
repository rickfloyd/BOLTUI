'use client';
import React from 'react';
import { cn } from '@/lib/utils';

const educationalItems = [
  { name: 'Republican', description: 'Conservative market analysis' },
  { name: 'Democrat', description: 'Progressive economic insights', active: true },
  { name: 'Liberal', description: 'Social-focused market views' },
  { name: 'Independent', description: 'Unbiased market perspective' },
];

const platformItems = [
  'AI Price Prediction Engine',
  'ML Pattern Recognition',
  'Sentiment Analysis AI',
  'Smart Risk Management',
  'Automated Trading Signals',
  'Neural Networks & LSTM',
  'Advanced Drawing Tools',
  'Real-Time Market Data',
  'Portfolio Management',
  'Custom Scripting Engine',
];

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
        <div className="section-title neon-pink">
          <span className="dot-indicator"></span> Market Summary
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
            <div key={item} className="menu-item">
              {item}
            </div>
          ))}
          <div className="menu-item revolutionary-text">
            Revolutionary AI Trading Platform!
          </div>
        </div>
      </div>
    </aside>
  );
}
