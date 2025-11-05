'use client';

import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';
import ClientWrapper from "@/components/ClientWrapper";

export default function Page() {
  const cardData = [
    { title: 'Forex', description: 'Currency Trading', border: 'neon-pink-border' },
    { title: 'Stocks (Equity Market)', description: 'Company Shares', border: 'neon-blue-border' },
    { title: 'Commodities', description: 'Physical Goods (Oil, Gold, etc.)', border: 'neon-pink-border' },
    { title: 'Bonds (Fixed Income)', description: 'Debt Securities', border: 'neon-blue-border' },
    { title: 'Cryptocurrency', description: 'Digital Assets', border: 'neon-pink-border' },
    { title: 'Derivatives', description: 'Contracts based on underlying assets', border: 'neon-blue-border' },
    { title: 'Nasdaq 100', description: 'US Tech & Growth Stocks', border: 'neon-pink-border' },
    { title: 'Dow Jones (US30)', description: '30 Major US Industrial Stocks', border: 'neon-blue-border' },
    { title: 'Russell 2000', description: 'US Small-Cap Stocks', border: 'neon-pink-border' },
    { title: 'DXY (US Dollar Index)', description: 'US Dollar Value vs. Basket of Currencies', border: 'neon-blue-border' },
    { title: 'S&P 500 (US500)', description: '500 Large US Companies', border: 'neon-pink-border' },
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
          <ClientWrapper>
            <div className="cards-column">
                {cardData.map((cardInfo, index) => {
                const data = generateRandomData();
                return (
                    <div className={`data-card ${cardInfo.border}`} key={index}>
                    <div className="card-header">
                        <span className="card-title">{cardInfo.title}</span>
                        <p className="card-description">{cardInfo.description}</p>
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
        </section>
      </main>
    </>
  );
}
