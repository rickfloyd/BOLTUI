
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { watchlistItems as initialWatchlistItems, WatchlistItemData } from '@/data/watchlist-items';
import { Switch } from '@/components/ui/switch';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';

interface LiveWatchlistItem extends WatchlistItemData {
  isLoading: boolean;
}

const WatchlistCard = ({ item }: { item: LiveWatchlistItem }) => {
  const isPositive = item.change ? parseFloat(item.change) >= 0 : false;
  const glowStyle = { '--glow-hsl': `var(--neon-${item.color})` } as React.CSSProperties;

  const formatPrice = (priceStr: string) => {
    const price = parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
    if (isNaN(price)) return priceStr; // Return original string if not a number
    if (price >= 1000) return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
    if (price >= 1) return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 4 }).format(price);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 6, maximumFractionDigits: 6 }).format(price);
  };

  return (
    <div className="watchlist-card" style={glowStyle}>
      <div className="watchlist-card-header">
        <div
          className="watchlist-card-icon"
          style={{ backgroundColor: `hsla(var(--neon-${item.color}), 0.2)`, border: `1px solid hsl(var(--neon-${item.color}))` }}
        >
          {item.icon}
        </div>
        <Switch defaultChecked={true} />
      </div>
      <div className="watchlist-card-info">
        <div className="watchlist-card-name">{item.name} ({item.symbol})</div>
        {item.isLoading ? (
            <div className="text-gray-400">Loading...</div>
        ) : (
            <>
                <div className="watchlist-card-price">{formatPrice(item.price)}</div>
                <div className={`watchlist-card-change ${isPositive ? 'change-positive' : 'change-negative'}`}>
                    <span>{item.change}</span>
                    {item.change && (isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />)}
                </div>
            </>
        )}
      </div>
    </div>
  );
};


export default function WatchlistPage() {
    const [watchlist, setWatchlist] = useState<LiveWatchlistItem[]>(
        initialWatchlistItems.map(item => ({ ...item, isLoading: true }))
    );

    const fetchStockData = async (symbol: string) => {
        try {
            // Note: The free Finnhub plan might not support all symbols.
            // Using a generic API route for stocks.
            const response = await fetch(`/api/finnhub?symbol=${symbol.toUpperCase()}`);
            if (!response.ok) throw new Error('Stock data not available');
            const data = await response.json();
            return { price: data.c ?? 0, change: data.dp ?? 0 };
        } catch (error) {
            console.error(`Error fetching stock data for ${symbol}:`, error);
            return { price: 'N/A', change: 'N/A' };
        }
    };
    
    const fetchCryptoData = async (symbol: string) => {
        const coinIdMap: { [key: string]: string } = {
            'BTC': 'bitcoin',
            'ETH': 'ethereum',
            'DOGE': 'dogecoin',
        };
        const coinId = coinIdMap[symbol];
        if (!coinId) return { price: 'N/A', change: 'N/A' };

        try {
            const response = await fetch('/api/coingecko/coins');
            if (!response.ok) throw new Error('Crypto data fetch failed');
            const allCoins = await response.json();
            const coinData = allCoins.find((c: any) => c.id === coinId);

            if (coinData) {
                 return { price: coinData.current_price, change: coinData.price_change_percentage_24h };
            }
            return { price: 'N/A', change: 'N/A' };
        } catch (error) {
            console.error(`Error fetching crypto data for ${symbol}:`, error);
            return { price: 'N/A', change: 'N/A' };
        }
    };


    const updateWatchlistData = async () => {
        setWatchlist(prev => prev.map(item => ({ ...item, isLoading: true })));

        const updatedList = await Promise.all(
            initialWatchlistItems.map(async (item) => {
                let data;
                const isCrypto = ['BTC', 'ETH', 'DOGE'].includes(item.symbol);
                if (isCrypto) {
                    data = await fetchCryptoData(item.symbol);
                } else {
                    data = await fetchStockData(item.symbol);
                }

                return {
                    ...item,
                    price: `$${data.price}`,
                    change: `${typeof data.change === 'number' ? data.change.toFixed(2) : 'N/A'}%`,
                    isLoading: false,
                };
            })
        );

        setWatchlist(updatedList);
    };

    useEffect(() => {
        updateWatchlistData();
        const intervalId = setInterval(updateWatchlistData, 30000); // Update every 30 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

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
                    {watchlist.map((item, index) => (
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

                <button className="add-asset-btn" onClick={() => alert('This feature is coming soon!')}>
                    Add New Asset
                </button>
            </div>
        </>
    );
}
