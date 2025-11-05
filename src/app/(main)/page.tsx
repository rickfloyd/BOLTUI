"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Settings, Maximize, BarChart2, CandlestickChart, Sliders, StopCircle } from 'lucide-react';
import Link from "next/link";

const markets = [
    { name: "The Foreign Exchange (Forex) Market", href: "/forex" },
    { name: "The Bond Market (Debt/Credit Market)", href: "/bonds" },
    { name: "The Stock Market (Equity Market)", href: "/exchanges" },
    { name: "New York Stock Exchange (NYSE)", href: "/exchanges" },
    { name: "Nasdaq", href: "/exchanges" },
    { name: "The Commodities Market", href: "/markets" },
    { name: "The Cryptocurrency Market", href: "/crypto" },
    { name: "Euronext", href: "/exchanges" },
    { name: "Shanghai Stock Exchange (SSE)", href: "/exchanges" },
    { name: "Tokyo Stock Exchange (JPX)", href: "/exchanges" },
    { name: "National Stock Exchange of India (NSE)", href: "/exchanges" },
];


const IndexCard = ({ title, price, change, changeType, borderColor }: { title: string; price: string; change: string; changeType: 'positive' | 'negative', borderColor: string }) => {
  return (
    <div className={`data-card ${borderColor} p-4 rounded-lg flex-1`}>
      <div className="card-header flex justify-between items-center">
        <span className="card-title text-sm font-semibold">{title}</span>
        <Settings className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="card-data mt-2">
        <span className="price text-2xl font-bold">{price}</span>
        <span className={`change ${changeType === 'positive' ? 'positive' : 'negative'} block text-sm`}>
          {change}
        </span>
      </div>
    </div>
  );
};


export default function Page() {
  return (
    <section className="center-content p-4 md:p-6 space-y-4">
      <div className="info-banner">
        <p className="text-center mb-4">90% of every payment directly funds educational programs for future traders</p>
        <div className="stats-row">
          <div className="stat-box">
            <div className="stat-number">12,911</div>
            <div className="stat-label">Students Helped</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">156</div>
            <div className="stat-label">Free Courses</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">348</div>
            <div className="stat-label">Scholarships</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">28</div>
            <div className="stat-label">Free Tools</div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="stocks" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="spreads">Spreads</TabsTrigger>
          <TabsTrigger value="float">Float</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="futures">Futures</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="index-cards-row">
        <IndexCard title="Nasdaq 100" price="$385.39" change="-0.30%" changeType="negative" borderColor="neon-blue-border" />
        <IndexCard title="Dow Jones" price="$368.91" change="+1.38%" changeType="positive" borderColor="neon-orange-border" />
        <IndexCard title="Russell 2000" price="$200.89" change="-0.68%" changeType="negative" borderColor="neon-cyan-border" />
      </div>
      
      <div className="dxy-card">
        <div className="dxy-title">DXY (US Dollar Index)</div>
        <div className="dxy-data">
          <span className="dxy-price">105.42</span>
          <span className="dxy-change negative">-0.38 (-0.36%)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {markets.map((market) => (
          <Link href={market.href} key={market.name}>
            <Card className="neon-box h-full flex items-center justify-center p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-0">
                  <p className="text-lg font-semibold">{market.name}</p>
                </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="chart-controls flex justify-between items-center p-2 rounded-lg mt-6">
        <div className="flex gap-2">
            <Button variant="ghost" size="sm">4h</Button>
            <Button variant="ghost" size="sm" className="bg-accent/20 text-accent">1D</Button>
            <Button variant="ghost" size="sm">W</Button>
            <Button variant="ghost" size="sm">M</Button>
        </div>
        <div className="flex gap-2">
            <Button variant="ghost" size="icon"><BarChart2 /></Button>
            <Button variant="ghost" size="icon"><CandlestickChart /></Button>
            <Button variant="ghost" size="icon"><Sliders /></Button>
        </div>
        <div className="flex gap-2">
             <Button variant="ghost" size="icon"><Settings /></Button>
             <Button variant="ghost" size="icon"><Maximize /></Button>
             <Button className="bg-primary text-primary-foreground"><StopCircle className="mr-2"/> STOP</Button>
        </div>
      </div>

    </section>
  );
}
