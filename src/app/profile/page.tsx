
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';

const currencyIndexes = [
  { index: 'DXY', currency: 'U.S. Dollar', colorClass: 'neon-green' },
  { index: 'EXY', currency: 'Euro', colorClass: 'neon-blue' },
  { index: 'BXY', currency: 'British Pound', colorClass: 'neon-pink' },
  { index: 'JXY', currency: 'Japanese Yen', colorClass: 'neon-orange' },
  { index: 'CXY', currency: 'Canadian Dollar', colorClass: 'neon-cyan' },
  { index: 'AXY', currency: 'Australian Dollar', colorClass: 'neon-pink' },
];

export default function ProfilePage() {
  const router = useRouter();

  const handleRowClick = (index: string) => {
    router.push(`/charts/${index}`);
  };

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Personal Profile</h1>
          <p className="text-lg text-gray-300 text-center">Your personalized dashboard and settings.</p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="info-table-card">
              <h3 className="content-title">My Watched Indexes</h3>
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
