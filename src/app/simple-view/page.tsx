'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ExchangeRateData {
  base: string;
  exchange_rates: {
    [key: string]: number;
  };
}

export default function SimpleViewPage() {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://exchange-rates.abstractapi.com/v1/live/?api_key=93e9e4333edd4c83a4c3beae80e26221&base=USD&target=EUR');
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rate data.');
        }
        const data = await response.json();
        setExchangeRate(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setExchangeRate(null);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <div className="view-switcher">
            <Link href="/" className="view-button neon-cyan">Charts</Link>
            <Link href="/simple-view" className="view-button active neon-pink">Simple View</Link>
            <Link href="/wcag" className="view-button view-button-wcag">
              WCAG–W3C
            </Link>
            <Link href="/custom-view" className="view-button neon-orange">Custom View</Link>
          </div>

          <h1 className="text-3xl font-bold neon-text text-center mt-8">Simple View</h1>
          <p className="text-lg text-gray-300 text-center">Live foreign exchange rates.</p>

          <div className="mt-8 max-w-md mx-auto">
            <Card className="data-card cyan-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-center neon-cyan-text">
                  USD to EUR Exchange Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {loading && <p className="text-lg text-gray-300">Loading rate...</p>}
                {error && <p className="text-lg text-red-400">{error}</p>}
                {exchangeRate && exchangeRate.exchange_rates && (
                  <div>
                    <p className="text-5xl font-bold font-numeric text-white">
                      {exchangeRate.exchange_rates.EUR.toFixed(4)}
                    </p>
                    <p className="text-lg text-gray-400 mt-2">
                      1 {exchangeRate.base} = {exchangeRate.exchange_rates.EUR.toFixed(4)} EUR
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
