import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Orbitron } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Quantum CyberVision',
  description: 'Next-generation financial and sports intelligence platform',
};

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} dark h-full`}>
      <body className={`h-full antialiased font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
