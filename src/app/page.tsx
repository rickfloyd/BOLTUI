'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <div className="view-switcher">
            <Link href="/" className="view-button active neon-cyan">HYPER</Link>
            <Link href="/simple-view" className="view-button neon-pink">SIMPLE VIEW</Link>
            <Link href="/custom-view" className="view-button neon-orange">CUSTOM VIEW</Link>
          </div>
          
          <div className="flex flex-col gap-4 mt-8">
            {/* Two full-width frames */}
            <div className="frame h-24"></div>
            <div className="frame h-24"></div>

            {/* Two pairs of half-width frames */}
            <div className="grid grid-cols-2 gap-4">
              <div className="frame h-32"></div>
              <div className="frame h-32"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="frame h-32"></div>
              <div className="frame h-32"></div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
