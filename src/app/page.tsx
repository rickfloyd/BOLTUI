'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';

export default function Page() {
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center">
            Welcome to AI Quantum Charts
          </h1>
          <p className="text-lg text-gray-300 text-center">Your next-generation market analysis dashboard.</p>
           <div className="view-switcher">
            <Link href="/hyper" className="view-button neon-cyan">
              Hyper
            </Link>
            <Link href="/simple-view" className="view-button neon-pink">
              Simple View
            </Link>
            <Link href="/custom-view" className="view-button neon-orange">
              Custom View
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
