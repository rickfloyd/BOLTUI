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

const metalsData = [
  { symbol: 'XAU/USD', name: 'Gold', description: 'Spot Gold vs US Dollar' },
  { symbol: 'XAG/USD', name: 'Silver', description: 'Spot Silver vs US Dollar' },
  { symbol: 'XPT/USD', name: 'Platinum', description: 'Spot Platinum vs US Dollar' },
  { symbol: 'XPD/USD', name: 'Palladium', description: 'Spot Palladium vs US Dollar' },
  { symbol: 'HG1!', name: 'Copper', description: 'High-Grade Copper Futures (COMEX)' },
];

export default function MetalsClient() {
  return (
    <div className="space-y-6">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Precious & Industrial Metals</CardTitle>
          <CardDescription>
            Real-time and historical data for key metals, serving as both safe-haven assets and industrial indicators.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="text-muted-foreground font-bold">Symbol</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metalsData.map((metal) => (
                  <TableRow key={metal.symbol} className="border-border/20 hover:bg-accent/5">
                    <TableCell className="font-mono text-accent">{metal.symbol}</TableCell>
                    <TableCell className="font-medium">{metal.name}</TableCell>
                    <TableCell>{metal.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
