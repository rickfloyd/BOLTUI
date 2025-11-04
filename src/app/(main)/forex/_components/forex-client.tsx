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
  { pair: 'EUR/USD', name: 'Euro / US Dollar', nickname: 'Fiber' },
  { pair: 'USD/JPY', name: 'US Dollar / Japanese Yen', nickname: 'Gopher' },
  { pair: 'GBP/USD', name: 'British Pound / US Dollar', nickname: 'Cable' },
  { pair: 'USD/CHF', name: 'US Dollar / Swiss Franc', nickname: 'Swissie' },
  { pair: 'AUD/USD', name: 'Australian Dollar / US Dollar', nickname: 'Aussie' },
  { pair: 'USD/CAD', name: 'US Dollar / Canadian Dollar', nickname: 'Loonie' },
  { pair: 'NZD/USD', name: 'New Zealand Dollar / US Dollar', nickname: 'Kiwi' },
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

const allPairs = [
  { pair: 'AED/AUD' }, { pair: 'AED/CAD' }, { pair: 'AED/CHF' }, { pair: 'AED/CNY' }, { pair: 'AED/EUR' },
  { pair: 'AED/GBP' }, { pair: 'AED/INR' }, { pair: 'AED/JPY' }, { pair: 'AED/NZD' }, { pair: 'AED/USD' },
  { pair: 'AUD/CAD' }, { pair: 'AUD/CHF' }, { pair: 'AUD/CNY' }, { pair: 'AUD/EUR' }, { pair: 'AUD/GBP' },
  { pair: 'AUD/HKD' }, { pair: 'AUD/INR' }, { pair: 'AUD/JPY' }, { pair: 'AUD/MXN' }, { pair: 'AUD/NOK' },
  { pair: 'AUD/NZD' }, { pair: 'AUD/PLN' }, { pair: 'AUD/SEK' }, { pair: 'AUD/SGD' }, { pair: 'AUD/USD' },
  { pair: 'AUD/ZAR' }, { pair: 'BGN/EUR' }, { pair: 'BRL/JPY' }, { pair: 'BRL/USD' }, { pair: 'CAD/CHF' },
  { pair: 'CAD/CNY' }, { pair: 'CAD/EUR' }, { pair: 'CAD/GBP' }, { pair: 'CAD/HKD' }, { pair: 'CAD/INR' },
  { pair: 'CAD/JPY' }, { pair: 'CAD/MXN' }, { pair: 'CAD/NOK' }, { pair: 'CAD/PLN' }, { pair: 'CAD/SEK' },
  { pair: 'CAD/SGD' }, { pair: 'CAD/TRY' }, { pair: 'CAD/USD' }, { pair: 'CAD/ZAR' }, { pair: 'CHF/CNY' },
  { pair: 'CHF/DKK' }, { pair: 'CHF/EUR' }, { pair: 'CHF/GBP' }, { pair: 'CHF/HKD' }, { pair: 'CHF/INR' },
  { pair: 'CHF/JPY' }, { pair: 'CHF/NOK' }, { pair: 'CHF/PLN' }, { pair: 'CHF/SEK' }, { pair: 'CHF/SGD' },
  { pair: 'CHF/TRY' }, { pair: 'CHF/USD' }, { pair: 'CHF/ZAR' }, { pair: 'CNH/JPY' }, { pair: 'CNH/USD' },
  { pair: 'CNY/CHF' }, { pair: 'CNY/EUR' }, { pair: 'CNY/GBP' }, { pair: 'CNY/JPY' }, { pair: 'CNY/USD' },
  { pair: 'CZK/EUR' }, { pair: 'DKK/EUR' }, { pair: 'DKK/GBP' }, { pair: 'DKK/JPY' }, { pair: 'DKK/USD' },
  { pair: 'EUR/AED' }, { pair: 'EUR/AUD' }, { pair: 'EUR/BGN' }, { pair: 'EUR/BRL' }, { pair: 'EUR/CAD' },
  { pair: 'EUR/CHF' }, { pair: 'EUR/CNH' }, { pair: 'EUR/CNY' }, { pair: 'EUR/CZK' }, { pair: 'EUR/DKK' },
  { pair: 'EUR/GBP' }, { pair: 'EUR/HKD' }, { pair: 'EUR/HUF' }, { pair: 'EUR/INR' }, { pair: 'EUR/JPY' },
  { pair: 'EUR/KRW' }, { pair: 'EUR/MXN' }, { pair: 'EUR/NOK' }, { pair: 'EUR/NZD' }, { pair: 'EUR/PLN' },
  { pair: 'EUR/RON' }, { pair: 'EUR/RUB' }, { pair: 'EUR/SEK' }, { pair: 'EUR/SGD' }, { pair: 'EUR/THB' },
  { pair: 'EUR/TRY' }, { pair: 'EUR/USD' }, { pair: 'EUR/ZAR' }, { pair: 'GBP/AED' }, { pair: 'GBP/AUD' },
  { pair: 'GBP/CAD' }, { pair: 'GBP/CHF' }, { pair: 'GBP/CNH' }, { pair: 'GBP/CNY' }, { pair: 'GBP/DKK' },
  { pair: 'GBP/EUR' }, { pair: 'GBP/HKD' }, { pair: 'GBP/INR' }, { pair: 'GBP/JPY' }, { pair: 'GBP/MXN' },
  { pair: 'GBP/NOK' }, { pair: 'GBP/NZD' }, { pair: 'GBP/PLN' }, { pair: 'GBP/SEK' }, { pair: 'GBP/SGD' },
  { pair: 'GBP/TRY' }, { pair: 'GBP/USD' }, { pair: 'GBP/ZAR' }, { pair: 'HKD/JPY' }, { pair: 'HKD/USD' },
  { pair: 'HUF/EUR' }, { pair: 'IDR/USD' }, { pair: 'ILS/USD' }, { pair: 'INR/AED' }, { pair: 'INR/CHF' },
  { pair: 'INR/EUR' }, { pair: 'INR/GBP' }, { pair: 'INR/JPY' }, { pair: 'INR/USD' }, { pair: 'ISK/EUR' },
  { pair: 'JPY/AED' }, { pair: 'JPY/AUD' }, { pair: 'JPY/BRL' }, { pair: 'JPY/CAD' }, { pair: 'JPY/CHF' },
  { pair: 'JPY/CNH' }, { pair: 'JPY/CNY' }, { pair: 'JPY/EUR' }, { pair: 'JPY/GBP' }, { pair: 'JPY/HKD' },
  { pair: 'JPY/INR' }, { pair: 'JPY/MXN' }, { pair: 'JPY/NOK' }, { pair: 'JPY/NZD' }, { pair: 'JPY/PLN' },
  { pair: 'JPY/RUB' }, { pair: 'JPY/SEK' }, { pair: 'JPY/SGD' }, { pair: 'JPY/THB' }, { pair: 'JPY/TRY' },
  { pair: 'JPY/USD' }, { pair: 'JPY/ZAR' }, { pair: 'KRW/EUR' }, { pair: 'KRW/USD' }, { pair: 'KWD/USD' },
  { pair: 'MXN/CAD' }, { pair: 'MXN/CHF' }, { pair: 'MXN/EUR' }, { pair: 'MXN/JPY' }, { pair: 'MXN/USD' },
  { pair: 'MYR/USD' }, { pair: 'NOK/CAD' }, { pair: 'NOK/CHF' }, { pair: 'NOK/DKK' }, { pair: 'NOK/EUR' },
  { pair: 'NOK/GBP' }, { pair: 'NOK/JPY' }, { pair: 'NOK/SEK' }, { pair: 'NOK/USD' }, { pair: 'NZD/AED' },
  { pair: 'NZD/CAD' }, { pair: 'NZD/CHF' }, { pair: 'NZD/CNY' }, { pair: 'NZD/EUR' }, { pair: 'NZD/GBP' },
  { pair: 'NZD/HKD' }, { pair: 'NZD/JPY' }, { pair: 'NZD/NOK' }, { pair: 'NZD/PLN' }, { pair: 'NZD/SEK' },
  { pair: 'NZD/SGD' }, { pair: 'NZD/USD' }, { pair: 'NZD/ZAR' }, { pair: 'PHP/USD' }, { pair: 'PLN/CAD' },
  { pair: 'PLN/CHF' }, { pair: 'PLN/DKK' }, { pair: 'PLN/EUR' }, { pair: 'PLN/GBP' }, { pair: 'PLN/JPY' },
  { pair: 'PLN/NOK' }, { pair: 'PLN/USD' }, { pair: 'QAR/USD' }, { pair: 'RON/EUR' }, { pair: 'RUB/EUR' },
  { pair: 'RUB/JPY' }, { pair: 'RUB/USD' }, { pair: 'SAR/USD' }, { pair: 'SEK/CAD' }, { pair: 'SEK/CHF' },
  { pair: 'SEK/DKK' }, { pair: 'SEK/EUR' }, { pair: 'SEK/GBP' }, { pair: 'SEK/JPY' }, { pair: 'SEK/NOK' },
  { pair: 'SEK/USD' }, { pair: 'SGD/CAD' }, { pair: 'SGD/CHF' }, { pair: 'SGD/CNH' }, { pair: 'SGD/EUR' },
  { pair: 'SGD/GBP' }, { pair: 'SGD/HKD' }, { pair: 'SGD/INR' }, { pair: 'SGD/JPY' }, { pair: 'SGD/MYR' },
  { pair: 'SGD/NOK' }, { pair: 'SGD/NZD' }, { pair: 'SGD/SEK' }, { pair: 'SGD/USD' }, { pair: 'SGD/ZAR' },
  { pair: 'THB/EUR' }, { pair: 'THB/JPY' }, { pair: 'THB/USD' }, { pair: 'TRY/CAD' }, { pair: 'TRY/CHF' },
  { pair: 'TRY/DKK' }, { pair: 'TRY/EUR' }, { pair: 'TRY/GBP' }, { pair: 'TRY/JPY' }, { pair: 'TRY/NOK' },
  { pair: 'TRY/PLN' }, { pair: 'TRY/SEK' }, { pair: 'TRY/USD' }, { pair: 'TWD/USD' }, { pair: 'USD/AED' },
  { pair: 'USD/ARS' }, { pair: 'USD/AUD' }, { pair: 'USD/BRL' }, { pair: 'USD/CAD' }, { pair: 'USD/CHF' },
  { pair: 'USD/CNH' }, { pair: 'USD/CNY' }, { pair: 'USD/CZK' }, { pair: 'USD/DKK' }, { pair: 'USD/EGP' },
  { pair: 'USD/EUR' }, { pair: 'USD/GBP' }, { pair: 'USD/HKD' }, { pair: 'USD/HUF' }, { pair: 'USD/IDR' },
  { pair: 'USD/ILS' }, { pair: 'USD/INR' }, { pair: 'USD/ISK' }, { pair: 'USD/JPY' }, { pair: 'USD/KRW' },
  { pair: 'USD/KWD' }, { pair: 'USD/MXN' }, { pair: 'USD/MYR' }, { pair: 'USD/NOK' }, { pair: 'USD/NZD' },
  { pair: 'USD/PLN' }, { pair: 'USD/PHP' }, { pair: 'USD/QAR' }, { pair: 'USD/RON' }, { pair: 'USD/RUB' },
  { pair: 'USD/SAR' }, { pair: 'USD/SEK' }, { pair: 'USD/SGD' }, { pair: 'USD/THB' }, { pair: 'USD/TRY' },
  { pair: 'USD/TWD' }, { pair: 'USD/ZAR' }, { pair: 'ZAR/AED' }, { pair: 'ZAR/AUD' }, { pair: 'ZAR/CAD' },
  { pair: 'ZAR/CHF' }, { pair: 'ZAR/CNY' }, { pair: 'ZAR/EUR' }, { pair: 'ZAR/GBP' }, { pair: 'ZAR/HKD' },
  { pair: 'ZAR/INR' }, { pair: 'ZAR/JPY' }, { pair: 'ZAR/MXN' }, { pair: 'ZAR/NOK' }, { pair: 'ZAR/NZD' },
  { pair: 'ZAR/PLN' }, { pair: 'ZAR/SEK' }, { pair: 'ZAR/SGD' }, { pair: 'ZAR/TRY' }, { pair: 'ZAR/USD' },
  { pair: 'ZAR/XAU' }, { pair: 'ZAR/XAG' }, { pair: 'XAU/USD' }, { pair: 'XAG/USD' }, { pair: 'BTC/USD' },
  { pair: 'ETH/USD' }, { pair: 'LTC/USD' }, { pair: 'DOGE/USD' }, { pair: 'XRP/USD' }, { pair: 'ADA/USD' },
];


export default function ForexClient() {
  return (
    <div className="space-y-6">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>The Challenge of Sourcing Forex Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#ff6600]">
            The foreign exchange market presents a unique challenge for data aggregation. Unlike equities or futures, which trade on centralized exchanges, the spot Forex market is a decentralized, Over-The-Counter (OTC) market. There is no single tape or central clearinghouse; instead, trading occurs through a global network of large banks (the interbank market) and liquidity providers. This means that there is no single "official" price for a currency pair at any given moment.
          </p>
        </CardContent>
      </Card>

      <Card className="neon-box">
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

      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Classification of Currency Pairs</CardTitle>
          <CardDescription>Pairs are organized into tiers based on liquidity and trading volume.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" defaultValue="all-pairs">
            <AccordionItem value="major">
              <AccordionTrigger className="text-lg font-semibold text-primary">Major Pairs</AccordionTrigger>
              <AccordionContent>
                 <p className="text-muted-foreground mb-4">The most heavily traded and liquid currency pairs. All major pairs include the US Dollar (USD).</p>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/30">
                      <TableHead className="text-muted-foreground font-bold">Pair</TableHead>
                      <TableHead className="text-muted-foreground font-bold">Name</TableHead>
                      <TableHead className="text-muted-foreground font-bold">Nickname</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {majorPairs.map((pair) => (
                      <TableRow key={pair.pair} className="border-border/20 hover:bg-accent/5">
                        <TableCell className="font-mono text-foreground">{pair.pair}</TableCell>
                        <TableCell>{pair.name}</TableCell>
                        <TableCell>{pair.nickname}</TableCell>
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
             <AccordionItem value="all-pairs">
              <AccordionTrigger className="text-lg font-semibold text-primary">All Available Pairs</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">A comprehensive list of all available trading pairs.</p>
                <div className="max-h-[600px] overflow-y-auto">
                    <Table>
                    <TableHeader>
                        <TableRow className="border-border/30 sticky top-0 bg-card">
                        <TableHead className="text-muted-foreground font-bold">#</TableHead>
                        <TableHead className="text-muted-foreground font-bold">Pair</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allPairs.map((pair, index) => (
                        <TableRow key={pair.pair} className="border-border/20 hover:bg-accent/5">
                            <TableCell className="text-muted-foreground">{index + 1}</TableCell>
                            <TableCell className="font-mono text-foreground">{pair.pair}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
