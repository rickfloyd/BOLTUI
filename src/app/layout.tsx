import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'AI Quantum Charts Dashboard',
  description: 'A next-generation market analysis dashboard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        {children}
      </body>
    </html>
  );
}
