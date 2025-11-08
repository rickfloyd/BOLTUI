
'use client';

import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from 'recharts';

interface ChartData {
  time: string;
  price: number;
  ohlc?: [number, number, number, number];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const price = payload[0].value;
    if (typeof price !== 'number') return null;
    return (
      <div className="p-2 bg-gray-800/80 border border-cyan-500 rounded-md">
        <p className="label text-white">{`${label}`}</p>
        <p className="intro text-cyan-400 font-numeric">{`Price : ${price.toFixed(4)}`}</p>
      </div>
    );
  }

  return null;
};

const CurrencyChart = ({ index, chartType, initialData }: { index: string, chartType: string, initialData?: any[] }) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<string | null>(null);

  const formatData = (apiData: any) => {
      if (!apiData || !apiData.data || apiData.data.length === 0) {
        throw new Error('No time series data available for this symbol from any provider.');
      }
      const formatted: ChartData[] = apiData.data.map((v: any) => ({
        time: new Date(v.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        price: Number(v.close),
        ohlc: [Number(v.open), Number(v.high), Number(v.low), Number(v.close)] as [number, number, number, number],
      }));
      setData(formatted);
      setDataSource(apiData.source);
  }

  useEffect(() => {
    if (initialData) {
        const formatted = initialData.map((v: any) => ({
            time: new Date(v.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            price: Number(v.close),
            ohlc: [Number(v.open), Number(v.high), Number(v.low), Number(v.close)] as [number, number, number, number]
        }));
        setData(formatted);
        return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/bridge?symbol=${index}&interval=1h`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch chart data from bridge.');
        }
        const apiData = await response.json();
        formatData(apiData);
      } catch (err: any) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000 * 5); // Refresh every 5 minutes
    return () => clearInterval(intervalId);
  }, [index, initialData]);

  if (loading) {
    return <div className="flex items-center justify-center h-full text-cyan-400">Loading chart data...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-full text-red-400 p-4 text-center">{error}</div>;
  }
  
  if (data.length === 0) {
     return <div className="flex items-center justify-center h-full text-gray-400">No data available for this chart.</div>;
  }

  const renderChart = () => {
    switch(chartType) {
        case 'Bar Chart (OHLC)':
            return (
                <BarChart data={data}>
                    <Bar dataKey="price" fill="hsl(var(--neon-cyan))" />
                </BarChart>
            );
        case 'Area Chart':
            return (
                <AreaChart data={data}>
                     <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--neon-cyan))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--neon-cyan))" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="price" stroke="hsl(var(--neon-cyan))" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            )
        case 'Line Chart':
        default:
            return (
                 <LineChart data={data}>
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="hsl(var(--neon-cyan))"
                        strokeWidth={2}
                        activeDot={{ r: 8, fill: 'hsl(var(--primary-glow))' }}
                        dot={false}
                    />
                </LineChart>
            )
    }
  }
  
  const ChartComponent = renderChart().type;
  const chartProps = renderChart().props;

  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
      <ChartComponent
        {...chartProps}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 20, // Increased bottom margin for label
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="time" stroke="#888" tick={{fontFamily: 'var(--font-cinzel)'}} />
        <YAxis 
            stroke="#888" 
            domain={['dataMin - 0.005', 'dataMax + 0.005']} 
            tick={{fontFamily: 'var(--font-cinzel)'}}
            tickFormatter={(value) => typeof value === 'number' ? value.toFixed(4) : value}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {renderChart().props.children}
      </ChartComponent>
    </ResponsiveContainer>
     {dataSource && <p className="text-xs text-center text-gray-500 mt-1">Data provided by {dataSource}</p>}
    </>
  );
};

export default CurrencyChart;
