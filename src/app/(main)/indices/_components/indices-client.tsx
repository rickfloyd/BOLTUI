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

const americasIndices = [
  { symbol: 'SPX', name: 'S&P 500' },
  { symbol: 'DJI', name: 'Dow Jones Industrial Average' },
  { symbol: 'IXIC', name: 'NASDAQ Composite' },
  { symbol: 'NDX', name: 'NASDAQ 100' },
  { symbol: 'RUT', name: 'Russell 2000' },
  { symbol: 'TSX', name: 'S&P/TSX Composite' },
  { symbol: 'IBOV', name: 'Bovespa Index' },
];

const europeIndices = [
  { symbol: 'UKX', name: 'FTSE 100' },
  { symbol: 'DAX', name: 'DAX' },
  { symbol: 'PX1', name: 'CAC 40' },
  { symbol: 'SX5E', name: 'Euro Stoxx 50' },
  { symbol: 'FTMIB', name: 'FTSE MIB' },
  { symbol: 'IBEX', name: 'IBEX 35' },
];

const asiaPacificIndices = [
  { symbol: 'NI225', name: 'Nikkei 225' },
  { symbol: '000001', name: 'SSE Composite' },
  { symbol: 'HSI', name: 'Hang Seng Index' },
  { symbol: 'KOSPI', name: 'KOSPI' },
  { symbol: 'XJO', name: 'S&P/ASX 200' },
  { symbol: 'NIFTY', name: 'NIFTY 50' },
  { symbol: 'SENSEX', name: 'SENSEX' },
];

const otherIndices = [
  { type: 'Sector Indices', examples: 'Technology (IXT), Financials (IXF), Energy (IXE)' },
  { type: 'Volatility Indices', examples: 'Cboe Volatility Index (VIX)' },
  { type: 'Currency Indices', examples: 'US Dollar Index (DXY)' },
];

export default function IndicesClient() {
  return (
    <div className="space-y-6">
      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Role of Indices on the Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Market indices are a cornerstone of financial analysis, and on this platform, they serve as high-level benchmarks for the performance and health of national economies, specific industrial sectors, and broader market sentiment. While indices themselves are simply calculated values and are not directly tradable, they form the basis for some of the most popular and liquid financial instruments in the world, including index futures, options, and ETFs. The platform provides a comprehensive catalog of global indices, allowing users to track market movements from a macro perspective.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Catalog of Major World Indices</CardTitle>
          <CardDescription>A representative sample of the most widely followed indices available.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Americas</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="text-muted-foreground font-bold">Symbol</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {americasIndices.map((index) => (
                  <TableRow key={index.symbol} className="border-border/20 hover:bg-accent/5">
                    <TableCell className="font-mono text-accent">{index.symbol}</TableCell>
                    <TableCell>{index.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Europe</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="text-muted-foreground font-bold">Symbol</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {europeIndices.map((index) => (
                  <TableRow key={index.symbol} className="border-border/20 hover:bg-accent/5">
                    <TableCell className="font-mono text-accent">{index.symbol}</TableCell>
                    <TableCell>{index.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Asia-Pacific</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="text-muted-foreground font-bold">Symbol</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {asiaPacificIndices.map((index) => (
                  <TableRow key={index.symbol} className="border-border/20 hover:bg-accent/5">
                    <TableCell className="font-mono text-accent">{index.symbol}</TableCell>
                    <TableCell>{index.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Other Index Types</CardTitle>
          <CardDescription>Specialized indices for nuanced market analysis.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="text-muted-foreground font-bold">Type</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Examples</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {otherIndices.map((index) => (
                  <TableRow key={index.type} className="border-border/20 hover:bg-accent/5">
                    <TableCell className="font-medium text-primary">{index.type}</TableCell>
                    <TableCell>{index.examples}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </CardContent>
      </Card>

    </div>
  );
}
