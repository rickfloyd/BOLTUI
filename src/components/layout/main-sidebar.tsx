'use client';
import { useState } from 'react';

export function MainSidebar() {
  const [openMenu, setOpenMenu] = useState('ai-platform');

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? '' : menuId);
  };
  
  const aiPlatformItems = [
    { name: 'AI Price Prediction Engine', subtext: 'Forecasting with machine learning' },
    { name: 'ML Pattern Recognition', subtext: 'Identify historical patterns' },
    { name: 'Sentiment Analysis AI', subtext: 'Gauge market mood from news & social' },
    { name: 'Smart Risk Management', subtext: 'AI-driven risk assessment' },
    { name: 'Automated Trading Signals', subtext: 'Real-time buy/sell alerts' },
    { name: 'Neural Networks & LSTM', subtext: 'Deep learning for market prediction' },
  ];

  return (
    <aside className="left-sidebar">
      <div className="sidebar-section">
        <h3 className="section-title neon-pink" onClick={() => toggleMenu('ai-platform')}>
          <span className="dot-indicator"></span>
          AI-Powered Trading Platform
        </h3>
        <div className={`dropdown-menu platform-menu ${openMenu === 'ai-platform' ? 'open' : ''}`}>
          {aiPlatformItems.map((item, index) => (
            <div key={index} className="menu-item">
              {item.name}
              <span className="sub-text">{item.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
