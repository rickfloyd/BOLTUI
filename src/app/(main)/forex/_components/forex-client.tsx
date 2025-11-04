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

const dataProviders = ['ActivTrades', 'BlackBull Markets', 'Blueberry', 'OANDA', 'FOREX.com', 'FXCM'];

const majorPairs = [
  { pair: 'EUR/USD', name: 'Euro / US Dollar' },
  { pair: 'USD/JPY', name: 'US Dollar / Japanese Yen' },
  { pair: 'GBP/USD', name: 'British Pound / US Dollar' },
  { pair: 'USD/CHF', name: 'US Dollar / Swiss Franc' },
  { pair: 'AUD/USD', name: 'Australian Dollar / US Dollar' },
  { pair: 'USD/CAD', name: 'US Dollar / Canadian Dollar' },
  { pair: 'NZD/USD', name: 'New Zealand Dollar / US Dollar' },
];

const minorPairs = [
    { pair: 'EUR/GBP', name: 'Euro / British Pound' },
    { pair: 'EUR/JPY', name: 'Euro / Japanese Yen' },
    { pair: 'GBP/JPY', name: 'British Pound / Japanese Yen' },
    { pair: 'AUD/CAD', name: 'Australian Dollar / Canadian Dollar' },
    { pair: 'EUR/CHF', name: 'Euro / Swiss Franc' },
    { pair: 'NZD/JPY', name: 'New Zealand Dollar / Japanese Yen' },
];

const exoticPairs = [
    { pair: 'USD/TRY', name: 'US Dollar / Turkish Lira' },
    { pair: 'USD/MXN', name: 'US Dollar / Mexican Peso' },
    { pair: 'USD/ZAR', name: 'US Dollar / South African Rand' },
    { pair: 'USD/SGD', name: 'US Dollar / Singapore Dollar' },
    { pair: 'USD/CNY', name: 'US Dollar / Chinese Renminbi' },
    { pair: 'USD/INR', name: 'US Dollar / Indian Rupee' },
    { pair: 'USD/BRL', name: 'US Dollar / Brazilian Real' },
];


export default function ForexClient() {
  return (
    <div className="space-y-6">
      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>The Challenge of Sourcing Forex Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The foreign exchange market presents a unique challenge for data aggregation. Unlike equities or futures, which trade on centralized exchanges, the spot Forex market is a decentralized, Over-The-Counter (OTC) market. There is no single tape or central clearinghouse; instead, trading occurs through a global network of large banks (the interbank market) and liquidity providers. This means that there is no single "official" price for a currency pair at any given moment.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Direct Data Providers</CardTitle>
          <CardDescription>A list of direct sources for the "Currency" data category.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {dataProviders.map((provider) => (
              <div key={provider} className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-medium">
                {provider}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Classification of Currency Pairs</CardTitle>
          <CardDescription>Pairs are organized into tiers based on liquidity and trading volume.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="major">
              <AccordionTrigger className="text-lg font-semibold text-primary">Major Pairs</AccordionTrigger>
              <AccordionContent>
                 <p className="text-muted-foreground mb-4">The most heavily traded and liquid currency pairs. All major pairs include the US Dollar (USD).</p>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/30">
                      <TableHead className="text-muted-foreground font-bold">Pair</TableHead>
                      <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {majorPairs.map((pair) => (
                      <TableRow key={pair.pair} className="border-border/20 hover:bg-accent/5">
                        <TableCell className="font-mono text-foreground">{pair.pair}</TableCell>
                        <TableCell>{pair.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="minor">
              <AccordionTrigger className="text-lg font-semibold text-primary">Minor Pairs (Crosses)</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">Major currencies traded against each other, without involving the US Dollar.</p>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/30">
                      <TableHead className="text-muted-foreground font-bold">Pair</TableHead>
                      <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {minorPairs.map((pair) => (
                      <TableRow key={pair.pair} className="border-border/20 hover:bg-accent/5">
                        <TableCell className="font-mono text-foreground">{pair.pair}</TableCell>
                        <TableCell>{pair.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="exotic">
              <AccordionTrigger className="text-lg font-semibold text-primary">Exotic Pairs</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">A major currency traded against the currency of a smaller or emerging economy.</p>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/30">
                      <TableHead className="text-muted-foreground font-bold">Pair</TableHead>
                      <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exoticPairs.map((pair) => (
                      <TableRow key={pair.pair} className="border-border/20 hover:bg-accent/5">
                        <TableCell className="font-mono text-foreground">{pair.pair}</TableCell>
                        <TableCell>{pair.name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
