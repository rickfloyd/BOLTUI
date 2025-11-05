import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Market Terminal',
  description: 'A next-generation market analysis dashboard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="dashboard-grid">
          <MainSidebar />
          <div className="center-content">{children}</div>
        </main>
      </body>
    </html>
  );
}
