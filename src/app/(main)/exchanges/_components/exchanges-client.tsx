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

const exchangesData = {
  'North America': [
    { country: 'United States', name: 'New York Stock Exchange', prefix: 'NYSE' },
    { country: 'United States', name: 'NASDAQ Stock Market', prefix: 'NASDAQ' },
    { country: 'United States', name: 'NYSE Arca', prefix: 'ARCA' },
    { country: 'United States', name: 'OTC Markets', prefix: 'OTC' },
    { country: 'Canada', name: 'Toronto Stock Exchange', prefix: 'TSX' },
  ],
  'Europe': [
    { country: 'United Kingdom', name: 'London Stock Exchange', prefix: 'LSE' },
    { country: 'Pan-European', name: 'Euronext (Amsterdam, Brussels, Paris, etc.)', prefix: 'EURONEXT' },
    { country: 'Germany', name: 'Deutsche Börse (Xetra)', prefix: 'XETR' },
    { country: 'Germany', name: 'Frankfurt Stock Exchange (FWB)', prefix: 'FWB' },
    { country: 'Switzerland', name: 'SIX Swiss Exchange', prefix: 'SIX' },
    { country: 'Italy', name: 'Borsa Italiana', prefix: 'MIL' },
    { country: 'Spain', name: 'Bolsa de Madrid', prefix: 'BME' },
    { country: 'Sweden', name: 'Nasdaq Stockholm', prefix: 'OMXSTO' },
    { country: 'Denmark', name: 'Nasdaq Copenhagen', prefix: 'OMX' },
    { country: 'Finland', name: 'Nasdaq Helsinki', prefix: 'OMXH' },
    { country: 'Turkey', name: 'Borsa Istanbul', prefix: 'BIST' },
  ],
  'Asia-Pacific': [
    { country: 'Japan', name: 'Tokyo Stock Exchange / Japan Exchange Group', prefix: 'TSE' },
    { country: 'China', name: 'Shanghai Stock Exchange', prefix: 'SSE' },
    { country: 'China', name: 'Shenzhen Stock Exchange', prefix: 'SZSE' },
    { country: 'Hong Kong', name: 'Hong Kong Stock Exchange', prefix: 'HKEX' },
    { country: 'India', name: 'National Stock Exchange of India', prefix: 'NSE' },
    { country: 'India', name: 'Bombay Stock Exchange', prefix: 'BSE' },
    { country: 'Australia', name: 'Australian Securities Exchange', prefix: 'ASX' },
    { country: 'South Korea', name: 'Korea Exchange', prefix: 'KRX' },
    { country: 'Taiwan', name: 'Taiwan Stock Exchange', prefix: 'TWSE' },
    { country: 'Singapore', name: 'Singapore Exchange', prefix: 'SGX' },
    { country: 'Malaysia', name: 'Bursa Malaysia', prefix: 'MYX' },
    { country: 'Thailand', name: 'Stock Exchange of Thailand', prefix: 'SET' },
    { country: 'Indonesia', name: 'Indonesia Stock Exchange', prefix: 'IDX' },
  ],
  'Other Regions': [
    { country: 'South Africa', name: 'Johannesburg Stock Exchange', prefix: 'JSE' },
    { country: 'Saudi Arabia', name: 'Saudi Exchange (Tadawul)', prefix: 'TADAWUL' },
    { country: 'Brazil', name: 'B3 (Brasil, Bolsa, Balcão)', prefix: 'B3' },
    { country: 'Nigeria', name: 'Nigerian Stock Exchange', prefix: 'NGSE' },
    { country: 'Pakistan', name: 'Pakistan Stock Exchange', prefix: 'PSX3' },
  ],
};

export default function ExchangesClient() {
  return (
    <Card className="neon-box">
      <CardHeader>
        <CardTitle>Supported Stock Exchanges</CardTitle>
        <CardDescription>A comprehensive list of major stock exchanges available on the platform.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="North America" className="w-full">
          {Object.entries(exchangesData).map(([region, exchanges]) => (
            <AccordionItem value={region} key={region}>
              <AccordionTrigger className="text-lg font-semibold text-primary">{region}</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border/30">
                        <TableHead className="text-muted-foreground font-bold">Country</TableHead>
                        <TableHead className="text-muted-foreground font-bold">Exchange Name</TableHead>
                        <TableHead className="text-right text-muted-foreground font-bold">Platform Prefix</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {exchanges.map((exchange) => (
                        <TableRow key={exchange.prefix} className="border-border/20 hover:bg-accent/5">
                          <TableCell className="font-medium">{exchange.country}</TableCell>
                          <TableCell>{exchange.name}</TableCell>
                          <TableCell className="text-right font-mono text-muted-foreground">{exchange.prefix}</TableCell>
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
  );
}
