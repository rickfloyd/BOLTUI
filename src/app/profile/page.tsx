'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function WatchlistPage() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="/styles/watchlist.css" />
      </Head>
      <div className="container">
        <header className="top-bar">
          <div className="logo">
            <i className="fas fa-chart-line"></i> AI Quantum Charts
          </div>
          <div className="menu-icon">
            <i className="fas fa-bars"></i>
          </div>
        </header>

        <nav className="nav-buttons">
          <button className="nav-button">Dashboard</button>
          <button className="nav-button">Simple View</button>
          <button className="nav-button">Custom View</button>
          <button className="nav-button active">Watchlist</button>
        </nav>

        <h1 className="page-title">My Watchlist Management</h1>

        <div className="watchlist-items">
          <div className="watchlist-card" data-symbol="BTC/USD">
            <div className="card-header">
              <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="Bitcoin Logo" className="asset-logo" />
              <div className="asset-info">
                <span className="asset-name">Bitcoin (BTC)</span>
                <span className="asset-price" data-price>Loading...</span>
              </div>
              <div className="asset-change positive">
                <span data-change-percent>N/A</span>
                <span className="mini-chart"><i className="fas fa-chart-line"></i></span>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="watchlist-card" data-symbol="NDAQ100">
            <div className="card-header">
              <i className="fas fa-chart-area asset-logo-icon"></i>
              <div className="asset-info">
                <span className="asset-name">Nasdaq 100</span>
                <span className="asset-price" data-price>Loading...</span>
              </div>
              <div className="asset-change positive">
                <span data-change-percent>N/A</span>
                <span className="mini-chart"><i className="fas fa-chart-line"></i></span>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="watchlist-card" data-symbol="DOGE/USD">
            <div className="card-header">
              <img src="https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547033830" alt="Dogecoin Logo" className="asset-logo" />
              <div className="asset-info">
                <span className="asset-name">Dogecoin (DOGE)</span>
                <span className="asset-price" data-price>Loading...</span>
              </div>
              <div className="asset-change negative">
                <span data-change-percent>N/A</span>
                <span className="mini-chart"><i className="fas fa-chart-line fa-flip-vertical"></i></span>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="watchlist-card" data-symbol="ETH/USD">
            <div className="card-header">
              <img src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628" alt="Ethereum Logo" className="asset-logo" />
              <div className="asset-info">
                <span className="asset-name">Ethereum (ETH)</span>
                <span className="asset-price" data-price>Loading...</span>
              </div>
              <div className="asset-change negative">
                <span data-change-percent>N/A</span>
                <span className="mini-chart"><i className="fas fa-chart-line fa-flip-vertical"></i></span>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="watchlist-card" data-symbol="TSLA">
            <div className="card-header">
              <img src="https://cdn.worldvectorlogo.com/logos/tesla-motors.svg" alt="Tesla Logo" className="asset-logo tesla-logo" />
              <div className="asset-info">
                <span className="asset-name">Tesla Inc.</span>
                <span className="asset-price" data-price>Loading...</span>
              </div>
              <div className="asset-change negative">
                <span data-change-percent>N/A</span>
                <span className="mini-chart"><i className="fas fa-chart-line fa-flip-vertical"></i></span>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>

          <div className="watchlist-card" data-symbol="AAPL">
            <div className="card-header">
              <img src="https://cdn-icons-png.flaticon.com/512/882/882731.png" alt="Apple Logo" className="asset-logo apple-logo" />
              <div className="asset-info">
                <span className="asset-name">Apple Inc.</span>
                <span className="asset-price" data-price>Loading...</span>
              </div>
              <div className="asset-change negative">
                <span data-change-percent>N/A</span>
                <span className="mini-chart"><i className="fas fa-chart-line fa-flip-vertical"></i></span>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="timeframe-selector">
          <button className="timeframe-button">1D</button>
          <button className="timeframe-button">5D</button>
          <button className="timeframe-button active">1M</button>
          <button className="timeframe-button">3M</button>
          <button className="timeframe-button">31Y</button>
          <button className="timeframe-button">ALL</button>
        </div>

        <button className="add-asset-button">Add New Asset</button>

        <footer className="bottom-nav">
        </footer>
      </div>
      <Script src="/scripts/watchlist.js" strategy="afterInteractive" />
    </>
  );
}
