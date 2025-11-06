
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { TrendingUp, TrendingDown, BarChart, DollarSign } from 'lucide-react';

const marketSummary = [
  {
    title: 'Nasdaq 100',
    price: '19,659.80',
    change: '+0.5%',
    isPositive: true,
    glowClass: 'cyan-glow',
    icon: <TrendingUp size={24} className="text-cyan-400" />,
  },
  {
    title: 'Bitcoin (BTC)',
    price: '61,744.50',
    change: '-2.1%',
    isPositive: false,
    glowClass: 'orange-glow',
    icon: <TrendingDown size={24} className="text-orange-400" />,
  },
  {
    title: 'AUS200',
    price: '7,789.60',
    change: '+0.3%',
    isPositive: true,
    glowClass: 'blue-glow',
    icon: <BarChart size={24} className="text-blue-400" />,
  },
  {
    title: 'US Dollar (DXY)',
    price: '105.42',
    change: '-0.36%',
    isPositive: false,
    glowClass: 'pink-glow',
    icon: <DollarSign size={24} className="text-pink-400" />,
  },
];

const currencyIndexes = [
  { index: 'DXY', currency: 'U.S. Dollar', colorClass: 'neon-green' },
  { index: 'EXY', currency: 'Euro', colorClass: 'neon-blue' },
  { index: 'BXY', currency: 'British Pound', colorClass: 'neon-pink' },
  { index: 'JXY', currency: 'Japanese Yen', colorClass: 'neon-orange' },
  { index: 'CXY', currency: 'Canadian Dollar', colorClass: 'neon-cyan' },
  { index: 'AXY', currency: 'Australian Dollar', colorClass: 'neon-pink' },
];

export default function Page() {
  const router = useRouter();

  const handleRowClick = (index: string) => {
    router.push(`/charts/${index}`);
  };

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <div className="view-switcher">
            <Link href="/" className="view-button active neon-cyan">Charts</Link>
            <Link href="/simple-view" className="view-button neon-pink">Simple View</Link>
            <Link href="/custom-view" className="view-button neon-orange">Custom View</Link>
          </div>

          <h2 className="content-title">Market Summary &gt;</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketSummary.map(item => (
              <div className={`data-card ${item.glowClass}`} key={item.title}>
                <div className="card-header">
                  <div className="card-icon">{item.icon}</div>
                  <div className="card-title-group">
                    <span className="card-title">{item.title}</span>
                  </div>
                </div>
                <div className="card-data">
                  <span className="price font-numeric">{item.price}</span>
                  <span
                    className={`change font-numeric ${
                      item.isPositive ? 'positive' : 'negative'
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="info-table-card">
              <h3 className="content-title">Major Currency Indexes</h3>
              <table className="info-table">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Currency Tracked</th>
                  </tr>
                </thead>
                <tbody>
                  {currencyIndexes.map(c => (
                    <tr
                      key={c.index}
                      onClick={() => handleRowClick(c.index)}
                      className="cursor-pointer hover:bg-white/5"
                    >
                      <td><span className={c.colorClass}>{c.index}</span></td>
                      <td><span className={c.colorClass}>{c.currency}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
