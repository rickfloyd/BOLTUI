'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import {
  ArrowUpRight,
  Bitcoin,
  Landmark,
  DollarSign,
  Gem,
  Hexagon,
} from 'lucide-react';

export default function HyperPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center">
            HYPER SYSTEM VISUAL
          </h1>
          <div className="view-switcher">
            <Link href="/hyper" className="view-button active neon-cyan">
              HYPER
            </Link>
            <Link href="/simple-view" className="view-button neon-pink">
              SIMPLE VIEW
            </Link>
            <Link href="/custom-view" className="view-button neon-orange">
              CUSTOM VIEW
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full">
            <div className="frame glow-cyan col-span-1 md:col-span-2 h-24"></div>
            <div className="frame glow-pink col-span-1 md:col-span-2 h-24"></div>
            <div className="frame glow-orange h-32"></div>
            <div className="frame glow-blue h-32"></div>
            <div className="frame glow-gold h-32"></div>
            <div className="frame glow-teal h-32"></div>
          </div>
        </section>
      </main>
    </>
  );
}
