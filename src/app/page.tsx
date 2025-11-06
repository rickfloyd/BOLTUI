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
        </section>
      </main>
    </>
  );
}
