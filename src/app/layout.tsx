import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Quantum CyberVision',
  description: 'Next-generation financial and sports intelligence platform',
};

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} dark h-full`}>
      <body className={`h-full antialiased font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
