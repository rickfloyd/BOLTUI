'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { TrendingUp, TrendingDown, BarChart, DollarSign, Landmark, Building, Briefcase, Activity, Waves, Mountain } from 'lucide-react';

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
            <Link href="/" className="view-button active neon-cyan">CHARTS</Link>
            <Link href="/simple-view" className="view-button neon-pink">SIMPLE VIEW</Link>
            <Link href="/custom-view" className="view-button neon-orange">CUSTOM VIEW</Link>
          </div>
        </section>
      </main>
    </>
  );
}
