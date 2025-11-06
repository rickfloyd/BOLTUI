
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { TrendingUp, TrendingDown, BarChart, DollarSign, Landmark, Building, Briefcase, Activity, Waves, Mountain } from 'lucide-react';

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
  {
    title: 'Dow Jones',
    price: '39,150.33',
    change: '+0.1%',
    isPositive: true,
    glowClass: 'blue-glow',
    icon: <Landmark size={24} className="text-blue-400" />,
  },
  {
    title: 'Russell 2000',
    price: '2,022.03',
    change: '-0.2%',
    isPositive: false,
    glowClass: 'orange-glow',
    icon: <Building size={24} className="text-orange-400" />,
  },
  {
    title: 'NVIDIA (NVDA)',
    price: '126.57',
    change: '-3.22%',
    isPositive: false,
    glowClass: 'green-glow',
    icon: <Briefcase size={24} className="text-green-400" />,
  },
  {
    title: 'Apple (AAPL)',
    price: '208.14',
    change: '+0.31%',
    isPositive: true,
    glowClass: 'gray-glow',
    icon: <Activity size={24} className="text-gray-400" />,
  },
  {
    title: 'S&P 500',
    price: '5,464.62',
    change: '+0.39%',
    isPositive: true,
    glowClass: 'cyan-glow',
    icon: <TrendingUp size={24} className="text-cyan-400" />,
  },
  {
    title: 'Gold (XAU/USD)',
    price: '2,321.50',
    change: '-0.45%',
    isPositive: false,
    glowClass: 'yellow-glow',
    icon: <TrendingDown size={24} className="text-yellow-400" />,
  },
  {
    title: 'Japan 225 (NI225)',
    price: '38,596.47',
    change: '-0.15%',
    isPositive: false,
    glowClass: 'red-glow',
    icon: <Mountain size={24} className="text-red-400" />,
  },
  {
    title: 'DAX (Germany)',
    price: '18,155.30',
    change: '+0.20%',
    isPositive: true,
    glowClass: 'blue-glow',
    icon: <BarChart size={24} className="text-blue-400" />,
  },
    {
    title: 'FTSE 100 (UK)',
    price: '8,237.72',
    change: '-0.41%',
    isPositive: false,
    glowClass: 'pink-glow',
    icon: <Waves size={24} className="text-pink-400" />,
  },
  {
    title: 'Microsoft (MSFT)',
    price: '450.60',
    change: '+0.8%',
    isPositive: true,
    glowClass: 'cyan-glow',
    icon: <TrendingUp size={24} className="text-cyan-400" />,
  }
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
