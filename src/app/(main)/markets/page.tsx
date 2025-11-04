import { Header } from '@/components/layout/header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const marketData = [
  { pair: 'EUR/USD', price: '1.0712', change: '+0.12%', trend: 'up', type: 'FX' },
  { pair: 'BTC/USD', price: '67,450.50', change: '-1.56%', trend: 'down', type: 'Crypto' },
  { pair: 'XAU/USD', price: '2,330.75', change: '+0.80%', trend: 'up', type: 'Metals' },
  { pair: 'SPX', price: '5,354.03', change: '+0.25%', trend: 'up', type: 'Indices' },
  { pair: 'GBP/JPY', price: '197.88', change: '-0.05%', trend: 'down', type: 'FX' },
  { pair: 'ETH/USD', price: '3,510.20', change: '-2.10%', trend: 'down', type: 'Crypto' },
  { pair: 'WTI Crude', price: '78.50', change: '+1.50%', trend: 'up', type: 'Commodities' },
];

export default function MarketsPage() {
  return (
    <>
      <Header pageTitle="Markets Dashboard" />
      <div className="flex-1 p-8 pt-6">
        <div className="bg-card/80 backdrop-blur-sm border border-border/20 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30">
                <TableHead className="text-muted-foreground font-bold">Asset</TableHead>
                <TableHead className="text-muted-foreground font-bold">Type</TableHead>
                <TableHead className="text-right text-muted-foreground font-bold">Price</TableHead>
                <TableHead className="text-right text-muted-foreground font-bold">Change (24h)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketData.map((item) => (
                <TableRow key={item.pair} className="border-border/20 hover:bg-accent/5">
                  <TableCell className="font-medium text-foreground">{item.pair}</TableCell>
                  <TableCell><Badge variant={item.type === 'Crypto' ? 'default' : 'secondary'} className={item.type === 'FX' ? 'bg-primary/50' : item.type === 'Metals' ? 'bg-orange-500/50' : item.type === 'Indices' ? 'bg-accent/50' : ''}>{item.type}</Badge></TableCell>
                  <TableCell className="text-right font-mono">{item.price}</TableCell>
                  <TableCell className={`text-right font-mono flex justify-end items-center gap-2 ${item.trend === 'up' ? 'text-accent' : 'text-pink-500'}`}>
                    {item.change}
                    {item.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
