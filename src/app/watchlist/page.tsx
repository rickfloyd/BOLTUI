
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import Image from 'next/image';
import { watchlistItems as initialWatchlistItems, WatchlistItemData } from '@/data/watchlist-items';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { MultiApiDocumentation } from '@/components/layout/MultiApiDocumentation';


interface LiveWatchlistItem extends WatchlistItemData {
  isLoading: boolean;
  current_price: number | null;
  price_change_percentage_24h: number | null;
}

const WatchlistCard = ({ item }: { item: LiveWatchlistItem }) => {
  const isPositive = item.price_change_percentage_24h !== null && item.price_change_percentage_24h >= 0;
  
  const formatPrice = (price: number | null) => {
    if (price === null) return 'N/A';
    if (price >= 1000) return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
    if (price >= 1) return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 4 }).format(price);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 6, maximumFractionDigits: 6 }).format(price);
  };

  const formatPercentage = (percentage: number | null | undefined) => {
    if (percentage === null || percentage === undefined) return 'N/A';
    return `${percentage.toFixed(2)}%`;
  }

  return (
    <div className="watchlist-card" data-symbol={item.symbol}>
      <div className="card-header">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={`${item.name} Logo`} className={`asset-logo ${item.symbol === 'TSLA' ? 'tesla-logo' : ''} ${item.symbol === 'AAPL' ? 'apple-logo' : ''}`} />
        ) : (
          <i className="fas fa-chart-area asset-logo-icon"></i>
        )}
        <div className="asset-info">
          <span className="asset-name">{item.name} ({item.symbol})</span>
          <span className="asset-price" data-price>
            {item.isLoading ? 'Loading...' : formatPrice(item.current_price)}
          </span>
        </div>
        <div className={`asset-change ${isPositive ? 'positive' : 'negative'}`}>
          <span data-change-percent>{formatPercentage(item.price_change_percentage_24h)}</span>
          <span className="mini-chart">
            <i className={`fas fa-chart-line ${!isPositive ? 'fa-flip-vertical' : ''}`}></i>
          </span>
        </div>
        <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};


export default function WatchlistPage() {
    const [watchlist, setWatchlist] = useState<LiveWatchlistItem[]>(
        initialWatchlistItems.map(item => ({ ...item, isLoading: true, current_price: null, price_change_percentage_24h: null }))
    );

    const fetchStockData = async (symbol: string) => {
        try {
            const response = await fetch(`/api/finnhub?symbol=${symbol.toUpperCase()}`);
            if (!response.ok) throw new Error('Stock data not available');
            const data = await response.json();
            return { current_price: data.c ?? null, price_change_percentage_24h: data.dp ?? null };
        } catch (error) {
            console.error(`Error fetching stock data for ${symbol}:`, error);
            return { current_price: null, price_change_percentage_24h: null };
        }
    };
    
    const fetchCryptoData = async (symbol: string) => {
        const coinIdMap: { [key: string]: string } = {
            'BTC': 'bitcoin',
            'ETH': 'ethereum',
            'DOGE': 'dogecoin',
        };
        const coinId = coinIdMap[symbol];
        if (!coinId) return { current_price: null, price_change_percentage_24h: null };

        try {
            const response = await fetch('/api/coingecko/coins');
            if (!response.ok) throw new Error('Crypto data fetch failed');
            const allCoins = await response.json();
            const coinData = allCoins.find((c: any) => c.id === coinId);

            if (coinData) {
                 return { current_price: coinData.current_price, price_change_percentage_24h: coinData.price_change_percentage_24h };
            }
            return { current_price: null, price_change_percentage_24h: null };
        } catch (error) {
            console.error(`Error fetching crypto data for ${symbol}:`, error);
            return { current_price: null, price_change_percentage_24h: null };
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
                    ...data,
                    isLoading: false,
                };
            })
        );

        setWatchlist(updatedList);
    };

    useEffect(() => {
        updateWatchlistData();
        const intervalId = setInterval(updateWatchlistData, 30000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="watchlist-body">
            <div className="container">
                 <div className="w-full mb-4">
                    <Link href="/main" className="text-cyan-400 hover:text-cyan-200 flex items-center gap-2">
                        <ArrowLeft size={16} />
                        Back to Main
                    </Link>
                </div>
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
                   {watchlist.map((item, index) => <WatchlistCard key={index} item={item} />)}
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

                 <MultiApiDocumentation />
            </div>
        </div>
    );
}
