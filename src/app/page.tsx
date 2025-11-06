'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { TrendingUp, TrendingDown, BarChart, DollarSign, Landmark, Building, Briefcase, Activity, Waves, Mountain } from 'lucide-react';

const currencyIndexes = [
  { index: 'DXY', name: 'US Dollar Index', value: '105.42', change: '+0.15%', changeType: 'positive', colorClass: 'neon-green-border', icon: <DollarSign /> },
  { index: 'BTC', name: 'Bitcoin USD', value: '67,834.11', change: '-1.20%', changeType: 'negative', colorClass: 'neon-orange-border', icon: <TrendingUp /> },
  { index: 'ETH', name: 'Ethereum USD', value: '3,512.90', change: '-0.85%', changeType: 'negative', colorClass: 'neon-blue-border', icon: <TrendingUp /> },
  { index: 'XAU', name: 'Gold Spot', value: '2,320.50', change: '+0.40%', changeType: 'positive', colorClass: 'neon-orange-border', icon: <Mountain />},
  { index: 'SPX', name: 'S&P 500', value: '5,478.60', change: '+0.25%', changeType: 'positive', colorClass: 'neon-cyan-border', icon: <BarChart /> },
  { index: 'IXIC', name: 'NASDAQ Composite', value: '17,689.30', change: '-0.10%', changeType: 'negative', colorClass: 'neon-pink-border', icon: <Activity /> },
];

export default function Page() {
  const router = useRouter();

  const handleRowClick = (index: string) => {
    if (index === 'DXY' || index === 'EXY' || index === 'BXY' || index === 'JXY' || index === 'CXY' || index === 'AXY') {
      router.push(`/charts/${index}`);
    }
  };

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <div className="view-switcher">
            <Link href="/" className="view-button active neon-cyan">CHARTS</Link>
            <Link href="/simple-view" className="view-button neon-pink">SIMPLE VIEW</Link>
            <Link href="/custom-view" className="view-button neon-orange">CUSTOM VIEW</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {currencyIndexes.map(item => (
                <div key={item.index} className={`data-card ${item.colorClass} cursor-pointer`} onClick={() => handleRowClick(item.index)}>
                    <div className="card-header">
                        <div className="card-icon">{item.icon}</div>
                        <div className="card-title-group">
                            <div className="card-title">{item.name}</div>
                        </div>
                    </div>
                    <div className="card-data">
                        <div className="price">{item.value}</div>
                        <div className={`change ${item.changeType}`}>{item.change}</div>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
