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
} from 'recharts';

interface ChartData {
  time: string;
  price: number;
}

const generateRandomData = (index: string): ChartData[] => {
  const data: ChartData[] = [];
  const now = new Date();
  let price = 100 + Math.random() * 20; // Starting price

  for (let i = 60; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000); // 1 minute intervals
    price += (Math.random() - 0.5) * 2;
    price = Math.max(price, 80); // Ensure price doesn't go too low
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: parseFloat(price.toFixed(2)),
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

const CurrencyChart = ({ index }: { index: string }) => {
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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
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
        <Line
          type="monotone"
          dataKey="price"
          stroke="hsl(var(--neon-cyan))"
          strokeWidth={2}
          activeDot={{ r: 8, fill: 'hsl(var(--primary-glow))' }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurrencyChart;
