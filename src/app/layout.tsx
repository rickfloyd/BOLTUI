import type {Metadata} from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';

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
    <html lang="en" className={`dark h-full`}>
      <body className={`h-full antialiased`}>
        {children}
        <Script src="https://code.highcharts.com/dashboards/dashboards.js" />
      </body>
    </html>
  );
}
