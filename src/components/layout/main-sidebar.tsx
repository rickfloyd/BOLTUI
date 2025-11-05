'use client';
import { useState } from 'react';

export function MainSidebar() {
  const [openMenu, setOpenMenu] = useState('platform');

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? '' : menuId);
  };

  return (
    <aside className="left-sidebar">
      <div className="sidebar-section">
        <div className="section-title neon-pink">
          <span className="dot-indicator"></span> Market Summary
        </div>
      </div>

      <div className="sidebar-section platform-section">
        <div
          className="section-title dropdown-toggle neon-blue"
          onClick={() => toggleMenu('platform')}
        >
          <span className="dot-indicator"></span> AI-Powered Trading Platform
        </div>
        <div id="trading-platform-menu" className={`dropdown-menu platform-menu ${openMenu === 'platform' ? 'open' : ''}`}>
          <div className="menu-item">AI Price Prediction Engine</div>
          <div className="menu-item">ML Pattern Recognition</div>
          <div className="menu-item">Sentiment Analysis AI</div>
          <div className="menu-item">Smart Risk Management</div>
          <div className="menu-item">Automated Trading Signals</div>
          <div className="menu-item">Neural Networks & LSTM</div>
          <div className="menu-item">Advanced Drawing Tools</div>
          <div className="menu-item">Real-Time Market Data</div>
          <div className="menu-item">Portfolio Management</div>
          <div className="menu-item">Custom Scripting Engine</div>
          <div className="revolutionary-text">Revolutionary AI Trading Platform!</div>
        </div>
      </div>
    </aside>
  );
}
