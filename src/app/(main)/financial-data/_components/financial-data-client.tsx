'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const dataCategories = [
    {
        title: 'Core Market Data',
        description: 'Real-time and historical price data for equities, forex, and cryptocurrencies. This is the foundation of all technical analysis.',
        providers: ['Finnhub', 'TwelveData', 'Polygon.io']
    },
    {
        title: 'Economic Indicators',
        description: 'Macroeconomic data such as inflation rates (CPI), employment figures, and central bank interest rates. Essential for fundamental analysis and understanding market trends.',
        providers: ['FRED (Federal Reserve Economic Data)']
    },
    {
        title: 'Alternative Data',
        description: 'Non-traditional data sources that can provide unique insights, including satellite imagery, shipping logistics, and corporate flight data.',
        providers: ['Not yet integrated']
    },
    {
        title: 'News & Sentiment Analysis',
        description: 'Real-time news feeds and AI-powered sentiment analysis to gauge market mood and reaction to events.',
        providers: ['NewsData.io']
    },
];

export default function FinancialDataClient() {
  return (
    <div className="space-y-6">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>The Bedrock of Intelligence: Financial Data</CardTitle>
          <CardDescription>An overview of the diverse data categories that power the Quantum Charts platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Accurate, timely, and comprehensive data is the lifeblood of any serious financial analysis platform. Our system integrates a wide array of data types, from core market prices to esoteric alternative data, to provide a multi-dimensional view of the markets. Each data category is sourced from best-in-class providers to ensure reliability and depth.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {dataCategories.map((category) => (
            <Card key={category.title} className="neon-box">
                <CardHeader>
                    <CardTitle className="text-primary">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Primary Data Providers:</h4>
                    <div className="space-y-2">
                        {category.providers.map(provider => (
                             <div key={provider} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-accent" />
                                <span className="text-foreground">{provider}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
