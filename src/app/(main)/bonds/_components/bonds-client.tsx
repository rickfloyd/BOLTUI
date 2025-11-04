'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const bondData = {
  Americas: [
    { country: 'United States', maturities: '1M, 3M, 6M, 1Y, 2Y, 3Y, 5Y, 7Y, 10Y, 20Y, 30Y' },
    { country: 'Canada', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'Brazil', maturities: '2Y, 5Y, 10Y' },
    { country: 'Mexico', maturities: '2Y, 5Y, 10Y, 30Y' },
  ],
  Europe: [
    { country: 'European Union', maturities: '10Y' },
    { country: 'Germany', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'United Kingdom', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'France', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'Italy', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'Russia', maturities: '2Y, 5Y, 10Y, 20Y' },
  ],
  'Asia-Pacific': [
    { country: 'Japan', maturities: '2Y, 5Y, 10Y, 20Y, 30Y' },
    { country: 'China', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'India', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'Australia', maturities: '2Y, 5Y, 10Y, 30Y' },
    { country: 'South Korea', maturities: '3Y, 5Y, 10Y' },
    { country: 'Indonesia', maturities: '2Y, 5Y, 10Y, 30Y' },
  ],
};

const economicIndicators = [
  { symbol: 'USINTR', description: 'United States Interest Rate' },
  { symbol: 'CPI', description: 'Consumer Price Index for various countries' },
  { symbol: 'M2', description: 'Money Supply data for various economies' },
];

export default function BondsClient() {
  return (
    <div className="space-y-6">
      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Focus on Sovereign Debt and Macro Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The platform's implementation of fixed-income data is strategically focused on its utility as a tool for macroeconomic analysis rather than for the trading of individual bond instruments. The platform's primary offering in this asset class is comprehensive data on the yields of government bonds from major and emerging economies across various maturities. This approach is highly valuable because government bond yields are a critical barometer of economic health, inflation expectations, and anticipated central bank policy. Traders and analysts across all asset classes—equities, currencies, and commodities—rely on this data to inform their top-down market views.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Government Bond Yield Data</CardTitle>
          <CardDescription>A list of countries with available bond yield data, organized by region.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="Americas" className="w-full">
            {Object.entries(bondData).map(([region, bonds]) => (
              <AccordionItem value={region} key={region}>
                <AccordionTrigger className="text-lg font-semibold text-primary">{region}</AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-border/30">
                          <TableHead className="text-muted-foreground font-bold">Country / Entity</TableHead>
                          <TableHead className="text-right text-muted-foreground font-bold">Available Maturities</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bonds.map((bond) => (
                          <TableRow key={bond.country} className="border-border/20 hover:bg-accent/5">
                            <TableCell className="font-medium">{bond.country}</TableCell>
                            <TableCell className="text-right font-mono text-muted-foreground">{bond.maturities}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      
      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Economic Data as Chartable Symbols</CardTitle>
          <CardDescription>Key economic indicators are rendered as searchable and chartable symbols, allowing for direct overlay on price charts.</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/30">
                    <TableHead className="text-muted-foreground font-bold">Symbol</TableHead>
                    <TableHead className="text-muted-foreground font-bold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {economicIndicators.map((indicator) => (
                    <TableRow key={indicator.symbol} className="border-border/20 hover:bg-accent/5">
                      <TableCell className="font-mono text-accent">{indicator.symbol}</TableCell>
                      <TableCell>{indicator.description}</TableCell>
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
