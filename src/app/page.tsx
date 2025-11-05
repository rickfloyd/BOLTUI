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

  const currencyIndexes = [
    { name: 'DXY', longName: 'U.S. Dollar', description: 'The official U.S. Dollar Index. It is the most common, measuring the USD against six major world currencies (EUR, JPY, GBP, CAD, SEK, CHF).' },
    { name: 'EXY', longName: 'Euro', description: 'Measures the value of the Euro.' },
    { name: 'BXY', longName: 'British Pound', description: 'Measures the value of the British Pound Sterling (GBP).' },
    { name: 'JXY', longName: 'Japanese Yen', description: 'Measures the value of the Japanese Yen (JPY).' },
    { name: 'CXY', longName: 'Canadian Dollar', description: 'Measures the value of the Canadian Dollar (CAD).' },
    { name: 'AXY', longName: 'Australian Dollar', description: 'Measures the value of the Australian Dollar (AUD).' },
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
          <div className="dxy-card neon-pink-border">
            <div className="dxy-grid">
              {currencyIndexes.map((index) => (
                <div className="currency-card" key={index.name}>
                  <div className="card-title">{index.name} {index.longName}</div>
                  <p className="card-description">{index.description}</p>
                </div>
              ))}
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
        </section>
      </main>
    </>
  );
}
