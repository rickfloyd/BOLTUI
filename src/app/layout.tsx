import type { Metadata } from 'next';
import { IBM_Plex_Sans, Cinzel } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
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
      <body className={`${ibmPlexSans.variable} ${cinzel.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
