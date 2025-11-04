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

const cexData = [
  'Binance', 'Coinbase', 'Kraken', 'Bybit', 'OKX', 'Bitget', 'Bitstamp', 
  'Bittrex', 'Gemini', 'Bitfinex', 'Poloniex', 'HitBTC', 'HTX (formerly Huobi)', 'Deribit'
];

const dexData = {
  Arbitrum: [
    { name: 'Pancakeswap v3', prefix: 'PANCAKESWAP3ARBITRUM:' },
    { name: 'Ramses v2', prefix: 'RAMSES2:' },
    { name: 'Curve', prefix: 'CURVEARBITRUM' },
  ],
  Avalanche: [
    { name: 'Blackhole v3', prefix: 'BLACKHOLE3' },
    { name: 'LFJ V2.2', prefix: 'LFJ2DOT2:' },
    { name: 'Pharaoh', prefix: 'PHARAOH' },
  ],
  Base: [
    { name: 'Aerodrome', prefix: 'AERODROME:' },
    { name: 'Aerodrome SlipStream', prefix: 'AERODROMESLIPSTREAM:' },
    { name: 'Pancakeswap v3', prefix: 'PANCAKESWAP3BASE:' },
    { name: 'Uniswap v2', prefix: 'UNISWAPBASE' },
  ],
  Cronos: [
    { name: 'VVS v3', prefix: 'VVS3:' },
  ],
  Linea: [
    { name: 'Lynex', prefix: 'LYNEX:' },
    { name: 'Lynex v2', prefix: 'LYNEX2:' },
    { name: 'Pancakeswap v3', prefix: 'PANCAKESWAP3LINEA:' },
    { name: 'Nile', prefix: 'NILE:' },
    { name: 'Nile v1', prefix: 'NILE1:' },
  ],
  Mantle: [
    { name: 'Merchant Moe LB', prefix: 'MERCHANTMOELB:' },
    { name: 'Agni', prefix: 'AGNI' },
    { name: 'Cleopatra v2', prefix: 'CLEOPATRA2:' },
  ],
  Optimism: [
    { name: 'Velodrome v2', prefix: 'VELODROME2:' },
    { name: 'Velodrome SlipStream', prefix: 'VELODROMESLIPSTREAM:' },
  ],
  Pulsechain: [
    { name: 'PulseX v2', prefix: 'PULSEX2:' },
  ],
  Ronin: [
    { name: 'Katana v3', prefix: 'KATANA3:' },
  ],
  Solana: [
    { name: 'Meteora DYN', prefix: 'METEORADYN:' },
    { name: 'Meteora DLMM', prefix: 'METEORADLMM:' },
    { name: 'Raydium CLMM', prefix: 'RAYDIUMCLMM:' },
    { name: 'Raydium CPMM', prefix: 'RAYDIUMCPMM:' },
    { name: 'Sonic', prefix: 'SONIC' },
    { name: 'Shadow', prefix: 'SHADOW:' },
    { name: 'Wagmi', prefix: 'WAGMISONIC:' },
  ],
  Sui: [
    { name: 'Cetus', prefix: 'CETUS:' },
    { name: 'Turbos Finance', prefix: 'TURBOSFINANCE:' },
    { name: 'Bluefin', prefix: 'BLUEFIN:' },
  ],
  TRON: [
    { name: 'SunSwap v2', prefix: 'SUNSWAP2:' },
    { name: 'SunSwap v3', prefix: 'SUNSWAP3:' },
  ],
  zkSync: [
    { name: 'Pancakeswap v3', prefix: 'PANCAKESWAP3ZKSYNC:' },
    { name: 'SyncSwap', prefix: 'SYNCSWAP:' },
    { name: 'zkSwap', prefix: 'ZKSWAP:' },
    { name: 'SyncSwap v2', prefix: 'SYNCSWAP2:' },
  ]
};

export default function CryptoClient() {
  return (
    <div className="space-y-6">
      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Centralized Exchanges (CEXs)</CardTitle>
          <CardDescription>A list of major centralized exchanges providing spot and derivative data.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {cexData.map((cex) => (
              <div key={cex} className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-medium">
                {cex}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/80 backdrop-blur-sm border-border/20">
        <CardHeader>
          <CardTitle>Decentralized Exchanges (DEXs)</CardTitle>
          <CardDescription>A comprehensive list of supported DEXs, organized by their native blockchain.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(dexData).map(([blockchain, exchanges]) => (
              <AccordionItem value={blockchain} key={blockchain}>
                <AccordionTrigger className="text-lg font-semibold text-primary">{blockchain}</AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-border/30">
                          <TableHead className="text-muted-foreground font-bold">DEX Name</TableHead>
                          <TableHead className="text-right text-muted-foreground font-bold">Search Prefix</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {exchanges.map((exchange) => (
                          <TableRow key={exchange.prefix} className="border-border/20 hover:bg-accent/5">
                            <TableCell className="font-medium">{exchange.name}</TableCell>
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
    </div>
  );
}
