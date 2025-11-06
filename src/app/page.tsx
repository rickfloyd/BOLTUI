
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { TrendingUp, TrendingDown, BarChart } from 'lucide-react';

const marketSummary = [
  {
    title: 'Nasdaq 100',
    price: '$385.01',
    change: '-0.88%',
    isPositive: false,
    glowClass: 'cyan-glow',
    icon: <TrendingUp size={24} className="text-cyan-400" />,
  },
  {
    title: 'Dow Jones',
    price: '$368.91',
    change: '+1.23%',
    isPositive: true,
    glowClass: 'orange-glow',
    icon: <BarChart size={24} className="text-orange-400" />,
  },
  {
    title: 'Russell 2000',
    price: '$197.32',
    change: '-0.27%',
    isPositive: false,
    glowClass: 'blue-glow',
    icon: <TrendingDown size={24} className="text-blue-400" />,
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

          <div className="index-cards-row">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="dxy-card">
              <div className="dxy-header">
                <h3 className="dxy-title">DXY (US Dollar Index)</h3>
                <span className={`change negative font-numeric`}>-0.38 (-0.36%)</span>
              </div>
              <p className="dxy-value font-numeric">105.42</p>
            </div>

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
