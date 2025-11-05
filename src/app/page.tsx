'use client';

import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';
import ClientWrapper from "@/components/ClientWrapper";

export default function Page() {
  const cardData = [
    { title: 'Nasdaq 100', border: 'neon-blue-border' },
    { title: 'Dow Jones', border: 'neon-orange-border' },
    { title: 'Russell 2000', border: 'neon-cyan-border' },
  ];

  const generateRandomData = () => {
    const price = (Math.random() * 500 + 100).toFixed(2);
    const change = (Math.random() * 5 - 2.5).toFixed(2);
    const isPositive = parseFloat(change) >= 0;
    return {
      price: `$${price}`,
      change: `${isPositive ? '+' : ''}${change}%`,
      changeClass: isPositive ? 'positive' : 'negative',
    };
  };

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <MainSidebar />
        <section className="center-content">
          <div className="info-banner">
            <p>
              90% of every payment directly funds educational programs for
              future traders
            </p>
            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-number">12,911</div>
                <div className="stat-label">Students Helped</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">156</div>
                <div className="stat-label">Free Courses</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">348</div>
                <div className="stat-label">Scholarships</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">28</div>
                <div className="stat-label">Free Tools</div>
              </div>
            </div>
          </div>

          <ClientWrapper>
            <div className="cards-column">
                {Array.from({ length: 25 }).map((_, index) => {
                const data = generateRandomData();
                const cardInfo = cardData[index % cardData.length];
                return (
                    <div className={`data-card ${cardInfo.border}`} key={index}>
                    <div className="card-header">
                        <span className="card-title">{cardInfo.title}</span>
                    </div>
                    <div className="card-data">
                        <span className="price">{data.price}</span>
                        <span className={`change ${data.changeClass}`}>{data.change}</span>
                    </div>
                    </div>
                );
                })}
            </div>
          </ClientWrapper>
          
          <div className="dxy-card neon-pink-border">
            <div className="dxy-title">DXY (US Dollar Index)</div>
            <div className="dxy-data">
              <span className="dxy-price">105.42</span>
              <span className="dxy-change negative">-0.38 (-0.36%)</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}