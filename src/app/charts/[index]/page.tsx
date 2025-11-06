'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import CurrencyChart from '@/components/chart/CurrencyChart';
import { ArrowLeft } from 'lucide-react';

const currencyIndexDetails: { [key: string]: { name: string; description: string } } = {
  DXY: { name: 'U.S. Dollar Index', description: 'Measures the value of the U.S. Dollar against a basket of foreign currencies.' },
  EXY: { name: 'Euro Index', description: 'Measures the value of the Euro against a basket of other major currencies.' },
  BXY: { name: 'British Pound Index', description: 'Measures the value of the British Pound against other major currencies.' },
  JXY: { name: 'Japanese Yen Index', description: 'Measures the value of the Japanese Yen against other major currencies.' },
  CXY: { name: 'Canadian Dollar Index', description: 'Measures the value of the Canadian Dollar against other major currencies.' },
  AXY: { name: 'Australian Dollar Index', description: 'Measures the value of the Australian Dollar against other major currencies.' },
};

function ChartPageContent({ params }: { params: { index: string } }) {
  const { index } = params;
  const details = currencyIndexDetails[index.toUpperCase()] || { name: 'Unknown Index', description: 'No description available.' };

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <div className="center-content">
          <Link href="/" className="flex items-center gap-2 nav-item neon-cyan w-fit">
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <div className="info-banner">
            <h1 className="text-3xl font-bold neon-text">{details.name} ({index.toUpperCase()})</h1>
            <p className="text-lg mt-2 text-gray-300">{details.description}</p>
          </div>

          <div className="w-full h-[500px]">
            <CurrencyChart index={index} />
          </div>
        </div>
      </main>
    </>
  );
}


export default function ChartPage({ params }: { params: { index: string } }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ChartPageContent params={params} />
        </Suspense>
    )
}
