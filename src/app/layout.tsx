import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';

const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Quantum Charts — Pro Market Terminal',
  description: 'A next-generation trading dashboard with AI-powered insights.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <Header />
        <main className="dashboard-grid">
          <MainSidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
