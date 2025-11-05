import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
      <body className={openSans.className}>
        <FirebaseClientProvider>{children}</FirebaseClientProvider>
      </body>
    </html>
  );
}
