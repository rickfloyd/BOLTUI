
'use client';

import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { ArrowLeft } from 'lucide-react';

export default function ForexPage() {
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Forex Dashboard</h1>
          <p className="text-lg text-gray-300 text-center">
            Welcome to the Forex section. Content coming soon.
          </p>
        </section>
      </main>
      <Link href="/" className="fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2">
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </>
  );
}
