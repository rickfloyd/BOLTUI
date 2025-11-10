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
                Welcome to Quantum CyberVision
              </h1>
              <p className="text-lg text-gray-300">Your next-generation market analysis dashboard.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/policies" className="info-frame policies">
                Policies
              </Link>
              <Link href="/compare-prices" className="info-frame policies">
                Compare Prices
              </Link>
            </div>
          </div>
           <div className="view-switcher">
            <Link href="/impact" className="view-button neon-cyan">
              Impact
            </Link>
            <Link href="/simple-view" className="view-button neon-pink active">
              Simple View
            </Link>
            <Link href="/wcag" className="view-button view-button-wcag">
              WCAG–W3C
            </Link>
            <Link href="/hyper" className="view-button view-button-hyper">
              HYPER VIEW
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
