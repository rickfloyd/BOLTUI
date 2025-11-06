'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { TrendingUp, TrendingDown, DollarSign, BarChart, Zap, Globe } from 'lucide-react';

const stats = [
  { label: 'Students Helped', value: '12,911' },
  { label: 'Free Courses', value: '156' },
  { label: 'Countries', value: '348' },
  { label: 'Free Tools', value: '28' },
];

const marketSummary = [
  { 
    title: 'Nasdaq 100', 
    price: '$385.01', 
    change: '-0.88%', 
    isPositive: false,
    glowClass: 'cyan-glow',
    icon: <TrendingUp size={24} className="text-cyan-400" />
  },
  { 
    title: 'Dow Jones', 
    price: '$368.91', 
    change: '+1.23%', 
    isPositive: true,
    glowClass: 'orange-glow',
    icon: <BarChart size={24} className="text-orange-400" />
  },
  { 
    title: 'Russell 2000', 
    price: '$197.32', 
    change: '-0.27%', 
    isPositive: false,
    glowClass: 'blue-glow',
    icon: <TrendingDown size={24} className="text-blue-400" />
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <div className="info-banner">
            <h3 className="info-banner-title">
                <span className="dot-indicator"></span>
                Educational Impact Transparency
            </h3>
            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <p className="stat-number">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="content-title">Market Summary ></h2>
          
          <div className="index-cards-row">
            {marketSummary.map((item) => (
                <div className={`data-card ${item.glowClass}`} key={item.title}>
                    <div className="card-header">
                        <div className="card-icon">
                            {item.icon}
                        </div>
                        <div className="card-title-group">
                            <span className="card-title">{item.title}</span>
                        </div>
                    </div>
                    <div className="card-data">
                        <span className="price">{item.price}</span>
                        <span className={`change ${item.isPositive ? 'positive' : 'negative'}`}>{item.change}</span>
                    </div>
                </div>
            ))}
          </div>

          <div className="dxy-card">
             <div className="dxy-header">
                <h3 className="dxy-title">DXY (US Dollar Index)</h3>
                <span className={`change negative`}>-0.38 (-0.36%)</span>
             </div>
             <p className="dxy-value">105.42</p>
          </div>

        </section>
      </main>
    </>
  );
}
