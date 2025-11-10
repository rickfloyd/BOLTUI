'use client';

import { Header } from '@/components/layout/header';
import { watchlistItems, WatchlistItemData } from '@/data/watchlist-items';
import { Switch } from '@/components/ui/switch';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';

const WatchlistCard = ({ item }: { item: WatchlistItemData }) => {
  const isPositive = item.change.startsWith('+');
  const glowStyle = { '--glow-hsl': `var(--neon-${item.color})` } as React.CSSProperties;

  return (
    <div className="watchlist-card" style={glowStyle}>
      <div className="watchlist-card-header">
        <div 
          className="watchlist-card-icon"
          style={{ backgroundColor: `hsla(var(--neon-${item.color}), 0.2)`, border: `1px solid hsl(var(--neon-${item.color}))`}}
        >
          {item.icon}
        </div>
        <Switch defaultChecked={true} />
      </div>
      <div className="watchlist-card-info">
        <div className="watchlist-card-name">{item.name} ({item.symbol})</div>
        <div className="watchlist-card-price">{item.price}</div>
        <div className={`watchlist-card-change ${isPositive ? 'change-positive' : 'change-negative'}`}>
          <span>{item.change}</span>
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        </div>
      </div>
    </div>
  );
};


export default function WatchlistPage() {
  return (
    <>
      <Header />
      <div className="watchlist-container">
        <div className="view-switcher">
            <Link href="/" className="view-button neon-cyan">Dashboard</Link>
            <Link href="/simple-view" className="view-button neon-pink">Simple View</Link>
            <Link href="/custom-view" className="view-button neon-orange">Custom View</Link>
            <Link href="/watchlist" className="view-button active neon-green">Watchlist</Link>
        </div>

        <h1 className="watchlist-title mt-8">My Watchlist Management</h1>

        <div className="watchlist-grid">
          {watchlistItems.map((item, index) => (
            <WatchlistCard key={index} item={item} />
          ))}
        </div>

        <div className="timeframe-selector">
          <span className="timeframe-label">Timeframe Selector</span>
          <button className="timeframe-btn">1D</button>
          <button className="timeframe-btn active">1M</button>
          <button className="timeframe-btn">3M</button>
          <button className="timeframe-btn">31Y</button>
          <button className="timeframe-btn">ALL</button>
        </div>

        <button className="add-asset-btn">
          Add New Asset
        </button>
      </div>
    </>
  );
}
