import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Orbitron } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Quantum CyberVision',
  description: 'Next-generation financial and sports intelligence platform',
};

const orbitron = Orbitron({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${orbitron.className} h-full antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
