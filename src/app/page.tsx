'use client';

import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';
import ClientWrapper from "@/components/ClientWrapper";
import React from 'react';

type CardData = {
  title: string;
  description: string;
  border: string;
};

type GeneratedData = {
  price: string;
  change: string;
  changeClass: string;
};

const initialCardData: CardData[] = [
    { title: 'Forex', description: 'Currency Trading', border: 'neon-pink-border' },
    { title: 'Stocks (Equity Market)', description: 'Company Shares', border: 'neon-green-border' },
    { title: 'Commodities', description: 'Physical Goods (Oil, Gold, etc.)', border: 'neon-pink-border' },
    { title: 'Bonds (Fixed Income)', description: 'Debt Securities', border: 'neon-blue-border' },
    { title: 'Cryptocurrency', description: 'Digital Assets', border: 'neon-orange-border' },
    { title: 'Derivatives', description: 'Contracts based on underlying assets', border: 'neon-blue-border' },
    { title: 'Nasdaq 100', description: 'US Tech & Growth Stocks', border: 'neon-pink-border' },
    { title: 'Dow Jones (US30)', description: '30 Major US Industrial Stocks', border: 'neon-blue-border' },
    { title: 'Russell 2000', description: 'US Small-Cap Stocks', border: 'neon-orange-border' },
    { title: 'DXY (US Dollar Index)', description: 'US Dollar Value vs. Basket of Currencies', border: 'neon-green-border' },
    { title: 'S&P 500 (US500)', description: '500 Large US Companies', border: 'neon-pink-border' },
    { title: 'VIX', description: 'Market Volatility Index', border: 'neon-orange-border' },
    { title: 'FTSE 100', description: 'UK 100 Index', border: 'neon-green-border' },
    { title: 'DAX 30', description: 'Germany 30 Index', border: 'neon-blue-border' },
    { title: 'Nikkei 225', description: 'Japan 225 Index', border: 'neon-pink-border' },
];

const generateRandomData = (): GeneratedData => {
    const price = (Math.random() * 500 + 100).toFixed(2);
    const change = (Math.random() * 5 - 2.5).toFixed(2);
    const isPositive = parseFloat(change) >= 0;
    return {
      price: `$${price}`,
      change: `${isPositive ? '+' : ''}${change}%`,
      changeClass: isPositive ? 'positive' : 'negative',
    };
};


export default function Page() {
    const [cardData, setCardData] = React.useState<(CardData & GeneratedData)[]>([]);

    React.useEffect(() => {
        // Generate data on the client side to avoid hydration mismatch
        const data = initialCardData.map(card => ({
            ...card,
            ...generateRandomData(),
        }));
        setCardData(data);
    }, []);


  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <MainSidebar />
        <section className="center-content">
          <ClientWrapper>
            <div className="cards-column">
                {cardData.map((cardInfo, index) => {
                  return (
                      <div className={`data-card ${cardInfo.border}`} key={index}>
                      <div className="card-header">
                          <span className="card-title">{cardInfo.title}</span>
                          <p className="card-description">{cardInfo.description}</p>
                      </div>
                      <div className="card-data">
                          <span className="price">{cardInfo.price}</span>
                          <span className={`change ${cardInfo.changeClass}`}>{cardInfo.change}</span>
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

    