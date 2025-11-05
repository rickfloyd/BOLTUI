"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Settings, Maximize, BarChart2, CandlestickChart, Sliders, StopCircle } from 'lucide-react';

const IndexCard = ({ title, price, change, changeType, borderColor }: { title: string; price: string; change: string; changeType: 'positive' | 'negative', borderColor: string }) => {
  return (
    <div className={`data-card ${borderColor} p-4 rounded-lg bg-card/80 flex-1`}>
      <div className="card-header flex justify-between items-center">
        <span className="card-title text-sm font-semibold">{title}</span>
        <Settings className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="card-data mt-2">
        <span className="price text-2xl font-bold">{price}</span>
        <span className={`change ${changeType === 'positive' ? 'text-green-400' : 'text-red-400'} block text-sm`}>
          {change}
        </span>
      </div>
    </div>
  );
};


export default function Page() {
  return (
    <section className="center-content p-4 md:p-6 space-y-6">
      <div className="info-banner bg-card/80 p-4 rounded-lg neon-pink-border text-center">
        <p className="text-muted-foreground mb-4">90% of every payment directly funds educational programs for future traders</p>
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat-box">
            <div className="stat-number text-2xl font-bold text-foreground">12,911</div>
            <div className="stat-label text-sm text-muted-foreground">Students Helped</div>
          </div>
          <div className="stat-box">
            <div className="stat-number text-2xl font-bold text-foreground">156</div>
            <div className="stat-label text-sm text-muted-foreground">Free Courses</div>
          </div>
          <div className="stat-box">
            <div className="stat-number text-2xl font-bold text-foreground">348</div>
            <div className="stat-label text-sm text-muted-foreground">Scholarships</div>
          </div>
          <div className="stat-box">
            <div className="stat-number text-2xl font-bold text-foreground">28</div>
            <div className="stat-label text-sm text-muted-foreground">Free Tools</div>
          </div>
        </div>
      </div>

      <div className="index-cards-row flex flex-col md:flex-row gap-4">
        <IndexCard title="Nasdaq 100" price="$385.39" change="-0.30%" changeType="negative" borderColor="neon-cyan-border" />
        <IndexCard title="Dow Jones" price="$368.91" change="+1.38%" changeType="positive" borderColor="neon-orange-border" />
        <IndexCard title="Russell 2000" price="$200.89" change="-0.68%" changeType="negative" borderColor="neon-cyan-border" />
      </div>

       <Tabs defaultValue="stocks" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-card/80">
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="spreads">Spreads</TabsTrigger>
          <TabsTrigger value="float">Float</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="futures">Futures</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="dxy-card neon-pink-border p-4 rounded-lg bg-card/80">
        <div className="dxy-title text-lg font-semibold text-foreground">DXY (US Dollar Index)</div>
        <div className="dxy-data flex items-baseline gap-4 mt-2">
          <span className="dxy-price text-4xl font-bold">105.42</span>
          <span className="dxy-change text-red-400 text-lg">-0.38 (-0.36%)</span>
        </div>
      </div>
      
      <div className="chart-controls flex justify-between items-center p-2 bg-card/80 rounded-lg">
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
