'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/header';
import { ArrowLeft } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';

const CurrencyChart = dynamic(() => import('@/components/chart/CurrencyChart'), { ssr: false });

const currencyIndexDetails: { [key: string]: { name: string; description: string } } = {
  DXY: { name: 'U.S. Dollar Index', description: 'Measures the value of the U.S. Dollar against a basket of foreign currencies.' },
  EXY: { name: 'Euro Index', description: 'Measures the value of the Euro against a basket of other major currencies.' },
  BXY: { name: 'British Pound Index', description: 'Measures the value of the British Pound against other major currencies.' },
  JXY: { name: 'Japanese Yen Index', description: 'Measures the value of the Japanese Yen against other major currencies.' },
  CXY: { name: 'Canadian Dollar Index', description: 'Measures the value of the Canadian Dollar against other major currencies.' },
  AXY: { name: 'Australian Dollar Index', description: 'Measures the value of the Australian Dollar against other major currencies.' },
};

const chartTypes = [
    "Line Chart",
    "Bar Chart (OHLC)",
    "Candlestick Chart (Japanese Candlesticks)",
    "Area Chart",
    "Heikin Ashi",
    "Renko",
    "Point & Figure (P&F)",
    "Kagi",
    "Line Break",
    "Range Bars",
    "Tick Chart",
    "Volume Chart",
    "Hollow Candles",
    "Scatter Plot",
    "Pie Chart",
    "Histogram",
    "Waterfall Chart",
    "Heatmap",
    "Bubble Chart",
    "Radar Chart (Spider Chart)",
    "Treemap",
    "Box Plot (Box & Whisker)",
]

export default function ChartPageClient({ index }: { index: string }) {
  const details = currencyIndexDetails[index.toUpperCase()] || { name: 'Unknown Index', description: 'No description available.' };
  const [chartType, setChartType] = useState('Line Chart');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <div className="center-content">
          <Link href="/" className="flex items-center gap-2 nav-item neon-cyan w-fit">
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <div className="info-banner">
            <h1 className="text-3xl font-bold neon-text">{details.name} ({index.toUpperCase()})</h1>
            <p className="text-lg mt-2 text-gray-300">{details.description}</p>
          </div>

          <div className="flex justify-between items-center w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-white border-cyan-400">Chart Style: {chartType}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black text-white border-cyan-400">
                <DropdownMenuLabel>Select Chart Style</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={chartType} onValueChange={setChartType}>
                  {chartTypes.map(type => (
                     <DropdownMenuRadioItem key={type} value={type} disabled={!['Line Chart', 'Bar Chart (OHLC)', 'Area Chart'].includes(type)}>
                        {type}
                     </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="w-1/3">
                 <Input
                    type="text"
                    placeholder="Search in chart..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 rounded-md bg-gray-800 border-cyan-400 text-white"
                />
            </div>
          </div>

          <div className="w-full h-[500px]">
            <CurrencyChart index={index} chartType={chartType} />
          </div>
        </div>
      </main>
    </>
  );
}