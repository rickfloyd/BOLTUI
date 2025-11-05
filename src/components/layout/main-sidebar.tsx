'use client';

import { useState } from 'react';

export function MainSidebar() {
  const [personalitiesMenuOpen, setPersonalitiesMenuOpen] = useState(false);
  const [tradingPlatformMenuOpen, setTradingPlatformMenuOpen] = useState(false);

  return (
    <aside className="left-sidebar">
      <div className="sidebar-section">
        <div
          className="section-title dropdown-toggle neon-cyan"
          onClick={() => setPersonalitiesMenuOpen(!personalitiesMenuOpen)}
        >
          <span className="dot-indicator"></span> Educational
        </div>
        {personalitiesMenuOpen && (
          <div id="personalities-menu" className="dropdown-menu">
            <div className="menu-item">
              Republican <span className="sub-text">Conservative market analysis</span>
            </div>
            <div className="menu-item active-pink">
              Democrat <span className="sub-text">Progressive economic insights</span>
            </div>
            <div className="menu-item">
              Liberal <span className="sub-text">Social-focused market views</span>
            </div>
            <div className="menu-item">
              Independent <span className="sub-text">Unbiased market perspective</span>
            </div>
          </div>
        )}
      </div>

      <div className="sidebar-section">
        <div className="section-title neon-pink">
          <span className="dot-indicator"></span> Market Summary
        </div>
      </div>

      <div className="sidebar-section platform-section">
        <div
          className="section-title dropdown-toggle neon-blue"
          onClick={() => setTradingPlatformMenuOpen(!tradingPlatformMenuOpen)}
        >
          <span className="dot-indicator"></span> AI-Powered Trading Platform
        </div>
        {tradingPlatformMenuOpen && (
          <div id="trading-platform-menu" className="dropdown-menu platform-menu">
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
            <div className="menu-item revolutionary-text">
              Revolutionary AI Trading Platform!
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}