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
  ohlc?: [number, number, number, number]; // Optional Open-High-Low-Close for relevant charts
}

const generateRandomData = (index: string): ChartData[] => {
  const data: ChartData[] = [];
  const now = new Date();
  let price = 100 + Math.random() * 20; // Starting price

  for (let i = 60; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000); // 1 minute intervals
    const open = price;
    const close = price + (Math.random() - 0.5) * 2;
    const high = Math.max(open, close) + Math.random();
    const low = Math.min(open, close) - Math.random();
    price = close;
    price = Math.max(price, 80); // Ensure price doesn't go too low
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: parseFloat(price.toFixed(2)),
      ohlc: [open, high, low, close]
    });
  }
  return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-gray-800/80 border border-cyan-500 rounded-md">
        <p className="label text-white">{`${label}`}</p>
        <p className="intro text-cyan-400">{`Price : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const CurrencyChart = ({ index, chartType }: { index: string, chartType: string }) => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    setData(generateRandomData(index));

    const interval = setInterval(() => {
      setData(prevData => {
        const newDataPoint = generateRandomData(index)[59]; // Get a new point
        const newDataSet = [...prevData.slice(1), newDataPoint];
        // Ensure time labels are updated correctly
        return newDataSet.map((point, i) => ({
            ...point,
            time: new Date(new Date().getTime() - (60-i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }))
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

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
    <ResponsiveContainer width="100%" height="100%">
      <ChartComponent
        {...chartProps}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis dataKey="time" stroke="#888" />
        <YAxis stroke="#888" domain={['dataMin - 5', 'dataMax + 5']} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {renderChart().props.children}
      </ChartComponent>
    </ResponsiveContainer>
  );
};

export default CurrencyChart;
