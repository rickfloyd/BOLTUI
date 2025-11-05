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

  const allCards = Array(25).fill(null).map((_, i) => cardData[i % cardData.length]);
  
  // Remove the first Nasdaq card
  const nasdaqIndex = allCards.findIndex(card => card.title === 'Nasdaq 100');
  if (nasdaqIndex > -1) {
    allCards.splice(nasdaqIndex, 1);
  }

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
                {allCards.map((cardInfo, index) => {
                const data = generateRandomData();
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
        </section>
      </main>
    </>
  );
}
