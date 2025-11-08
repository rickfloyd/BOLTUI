
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
          <div className="flex justify-between items-center w-full">
            <Link href="/us-compliance" className="info-frame compliant">
              U.S. Compliant
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-bold neon-text">
                Welcome to AI Quantum Charts
              </h1>
              <p className="text-lg text-gray-300">Your next-generation market analysis dashboard.</p>
            </div>
            <Link href="/policies" className="info-frame policies">
              Policies
            </Link>
          </div>
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
            <Link href="/policies" className="view-button neon-blue">
              Policies
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
