'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const dataSources = {
    Equities: [
        { provider: 'Finnhub', coverage: 'Global', notes: 'Primary source for real-time and historical stock data.' },
        { provider: 'Polygon.io', coverage: 'US Markets', notes: 'Secondary source, provides additional depth.' },
    ],
    Forex: [
        { provider: 'OANDA', coverage: 'Global', notes: 'Tier 1 liquidity, provides deep FX book data.' },
        { provider: 'FOREX.com', coverage: 'Global', notes: 'Comprehensive currency pair coverage.' },
    ],
    Crypto: [
        { provider: 'Binance', coverage: 'Global', notes: 'Spot and derivatives data from the world\'s largest CEX.' },
        { provider: 'Coinbase', coverage: 'Global', notes: 'Reliable data for major crypto assets.' },
        { provider: 'Various DEXs', coverage: 'On-chain', notes: 'Direct on-chain data for DeFi markets via subgraph indexing.' },
    ]
};

export default function DataFeedsClient() {
  return (
    <div className="space-y-6">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Data Feed Architecture</CardTitle>
          <CardDescription>An overview of the real-time data sources powering the platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The platform aggregates data from multiple high-quality sources to provide a comprehensive and redundant view of the market. Data is normalized into a consistent format, allowing for seamless analysis across different asset classes and providers.
          </p>
        </CardContent>
      </Card>

      {Object.entries(dataSources).map(([assetClass, sources]) => (
        <Card key={assetClass} className="neon-box">
          <CardHeader>
            <CardTitle className="text-primary">{assetClass}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="text-muted-foreground font-bold">Provider</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Coverage</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sources.map((source) => (
                  <TableRow key={source.provider} className="border-border/20 hover:bg-accent/5">
                    <TableCell className="font-medium">{source.provider}</TableCell>
                    <TableCell>{source.coverage}</TableCell>
                    <TableCell className="text-muted-foreground">{source.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
