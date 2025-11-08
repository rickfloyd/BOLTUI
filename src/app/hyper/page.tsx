'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const CurrencyChart = dynamic(() => import('@/components/chart/CurrencyChart'), { ssr: false });

type ChartData = {
  time: string;
  price: number;
};

type ProviderResult = {
  data: ChartData[];
  source: string;
};

const symbols = [
  { value: 'BTC/USD', label: 'Bitcoin (BTC/USD)' },
  { value: 'ETH/USD', label: 'Ethereum (ETH/USD)' },
  { value: 'SOL/USD', label: 'Solana (SOL/USD)' },
  { value: 'DXY', label: 'US Dollar Index (DXY)' },
  { value: 'EXY', label: 'Euro Index (EXY)' },
];

const intervals = [
  { value: '1min', label: '1 Minute' },
  { value: '5min', label: '5 Minutes' },
  { value: '1h', label: '1 Hour' },
  { value: '1day', label: '1 Day' },
];

export default function HyperPage() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<string | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState('BTC/USD');
  const [selectedInterval, setSelectedInterval] = useState('1h');

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setData([]);
    setDataSource(null);

    const providers = [
        { name: 'Finnhub', apiUrl: '/api/finnhub', symbol: 'BINANCE:BTCUSDT', interval: '60' },
        { name: 'TwelveData', apiUrl: '/api/twelvedata', symbol: 'BTC/USD', interval: '1h' },
        { name: 'Polygon', apiUrl: '/api/polygon', symbol: 'X:BTCUSD', interval: 'hour' },
    ];

    const fetchFromProvider = (provider: typeof providers[0]) => {
      const url = `${provider.apiUrl}?symbol=${provider.symbol}&interval=${provider.interval}`;
      return fetch(url)
        .then(res => {
          if (!res.ok) throw new Error(`Provider ${provider.name} failed`);
          return res.json();
        })
        .then(apiData => {
            if(apiData.error) throw new Error(apiData.error);
            // Use the bridge's normalization logic to format data
            const normalizer = (d: any, p: string) => {
                if (p === 'Finnhub') return d.t ? d.t.map((ts: number, i: number) => ({ time: new Date(ts * 1000).toISOString(), close: d.c[i] })) : [];
                if (p === 'TwelveData') return d.values ? d.values.map((v: any) => ({ time: v.datetime, close: parseFloat(v.close) })).reverse() : [];
                if (p === 'Polygon') return d.results ? d.results.map((r: any) => ({ time: new Date(r.t).toISOString(), close: r.c })) : [];
                return [];
            }
            const formattedData = normalizer(apiData, provider.name).map((v: any) => ({
                time: new Date(v.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                price: v.close
            }));

            if(formattedData.length === 0) throw new Error(`No data from ${provider.name}`);

          return { data: formattedData, source: provider.name };
        });
    };

    try {
        const firstSuccess = await Promise.race(providers.map(fetchFromProvider));
        setData(firstSuccess.data);
        setDataSource(firstSuccess.source);
    } catch (e: any) {
        setError(`All data providers failed. Last error: ${e.message}`);
    } finally {
        setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [selectedSymbol, selectedInterval]);

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <div className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center">Hyper Dashboard</h1>
          <p className="text-lg text-gray-300 text-center">
            Real-time charts powered by the fastest available data provider.
          </p>

          <Card className="data-card glow-multi-color">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="neon-text">Market View</CardTitle>
                <div className="flex gap-4">
                    <Select value={selectedSymbol} onValueChange={setSelectedSymbol}>
                        <SelectTrigger className="w-[180px] bg-gray-800 border-cyan-400 text-white"><SelectValue/></SelectTrigger>
                        <SelectContent className="bg-black text-white border-cyan-400">{symbols.map(s=><SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}</SelectContent>
                    </Select>
                     <Select value={selectedInterval} onValueChange={setSelectedInterval}>
                        <SelectTrigger className="w-[180px] bg-gray-800 border-cyan-400 text-white"><SelectValue/></SelectTrigger>
                        <SelectContent className="bg-black text-white border-cyan-400">{intervals.map(i=><SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}</SelectContent>
                    </Select>
                    <Button onClick={fetchData} disabled={loading}>{loading ? 'Loading...' : 'Force Refresh'}</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="w-full h-[500px] mt-4">
                    {error && (
                        <Alert variant="destructive" className="h-full flex flex-col justify-center items-center">
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Data Fetching Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {!error && data.length > 0 && (
                        <>
                         <CurrencyChart index={selectedSymbol} chartType='Line Chart' />
                         {dataSource && <p className="text-xs text-center text-gray-500 mt-2">Data served from: {dataSource}</p>}
                        </>
                    )}
                     {!error && loading && (
                        <div className="flex items-center justify-center h-full text-cyan-400 text-lg">Racing data providers...</div>
                    )}
                </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
