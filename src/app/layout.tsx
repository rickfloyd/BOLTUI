import type { Metadata } from 'next';
import { IBM_Plex_Sans, Orbitron } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
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
      <body
        className={`${ibmPlexSans.variable} ${orbitron.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
