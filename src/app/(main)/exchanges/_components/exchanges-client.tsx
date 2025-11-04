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

const tickerModifiers = [
    { letter: "A", meaning: "Class A shares (e.g., BRK.A)" },
    { letter: "B", meaning: "Class B shares (e.g., BRK.B)" },
    { letter: "C", meaning: "Issuer Qualification Exception when the company does not meet all the exchange’s listing requirements, but can remain listed on the exchange for a short period." },
    { letter: "D", meaning: "New issue of existing stock" },
    { letter: "E", meaning: "Delinquent or missed one or more SEC-required filings (may also be denoted by .LF)" },
    { letter: "F", meaning: "Foreign issue" },
    { letter: "G", meaning: "First convertible bond" },
    { letter: "H", meaning: "Second convertible bond" },
    { letter: "I", meaning: "Third convertible bond" },
    { letter: "J", meaning: "Voting share" },
    { letter: "K", meaning: "Non-voting share" },
    { letter: "L", meaning: "Miscellaneous (foreign preferred, third-class of warrants, preferred when-issued, and fifth-class preferred shares)" },
    { letter: "M", meaning: "Fourth-class preferred shares" },
    { letter: "N", meaning: "Third-class preferred shares" },
    { letter: "O", meaning: "Second-class preferred shares" },
    { letter: "P", meaning: "First-class preferred shares" },
    { letter: "Q", meaning: "In bankruptcy proceedings" },
    { letter: "R", meaning: "Rights" },
    { letter: "S", meaning: "Shares of beneficial interest" },
    { letter: "T", meaning: "With warrants or with rights" },
    { letter: "U", meaning: "Units" },
    { letter: "V", meaning: "When-issued and when-distributed. These shares are about to go through a corporate action plan that has already been announced, such as a stock split." },
    { letter: "W", meaning: "Warrants" },
    { letter: "X", meaning: "Mutual funds" },
    { letter: "Y", meaning: "American Depositary Receipt (ADR)" },
    { letter: "Z", meaning: "Miscellaneous situations (same as the letter L)" },
    { letter: "OB", meaning: "Over-the-counter bulletin board" },
    { letter: "PK", meaning: "Pink sheets stock" },
    { letter: "SC", meaning: "Nasdaq Small-Cap" },
    { letter: "NM", meaning: "Nasdaq National Market" }
];


export default function ExchangesClient() {
  return (
    <div className="space-y-6">
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
      
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>What Is a Stock Ticker Symbol?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>Stock symbols are a shorthand way of describing a company's stock on an exchange. They're also referred to as ticker symbols. They can include up to five characters. Stocks listed on the New York Stock Exchange (NYSE) can have four or fewer letters. Nasdaq-listed securities can have up to five characters. There's no significant difference between those that have three letters and those that have four or five.</p>
          <ul className="list-disc list-inside space-y-2">
              <li>A stock symbol is an arrangement of characters, usually letters, that represent publicly traded securities on an exchange.</li>
              <li>A company selects an available symbol for its shares when it issues securities to the public marketplace.</li>
              <li>The symbol is often related to the company name.</li>
              <li>Investors and traders use the symbol to place trade orders.</li>
              <li>Additional letters denote additional characteristics such as share class or trading restrictions, when they're added to stock symbols.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="neon-box">
        <CardHeader>
          <CardTitle>History of Ticker Symbols</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p>Ticker symbols were created to streamline the process of hundreds of trades being made by the minute. Floor traders had to communicate the stock price of a traded company by writing or shouting out the name of the company when modern stock exchanges came into being in the 1800s. This process was time-consuming and held up the information queue as the number of publicly traded companies increased from dozens to hundreds. They were unable to keep up with frequently changing prices, especially after the stock-quoting ticker tape machine was introduced in 1867.</p>
            <p>The ticker symbol was invented by Edward Calahan, a telegraph operator who worked for the New York Stock Exchange (NYSE). Calahan developed the ticker symbol in 1867 as a way to quickly and accurately transmit stock prices over telegraph lines. The first ticker symbol was used by the New York Stock Exchange on Nov. 15, 1867, to identify the shares of the Union Pacific Railroad Company. The ticker symbol consisted of two letters (UP) followed by a number representing the number of shares being traded.</p>
            <p>To be more efficient in relaying price changes on company stock to investors, company names were shortened to one to five alpha symbols. Today, stock tickers still exist, but digital displays have replaced paper ticker tape.</p>
        </CardContent>
      </Card>
      
      <Card className="neon-box">
          <CardHeader>
              <CardTitle>Types of Ticker Symbols</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
                <div>
                    <h3 className="font-semibold text-foreground mb-1">Preferred Shares</h3>
                    <p>A company will have the class added to its suffix if it has more than one class of shares trading in the market. The letters "PR" and the letter denoting the class will typically be added if it's a preferred stock. A fictional preferred stock called Cory's Tequila Corporate Preferred A-shares would have a symbol such as CTC.PR.A. Sources can quote preferred shares in slightly different ways.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-1">Share Voting Class</h3>
                    <p>Some stock symbols indicate whether the shares of a company have voting rights, especially if the company has more than one class of shares trading in the market. Alphabet Inc., formerly Google, has two classes of shares trading on the Nasdaq with stock symbols GOOG and GOOGL. Common shareholders of GOOG have no voting rights because GOOG shares are Class C shares. GOOGL shares are Class A shares and have one vote each. Berkshire Hathaway has two classes of shares trading on the NYSE: Class A and Class B. Class A shares are listed with the stock symbol BRK.A and Class B shares trade with the symbol BRK.B. Class B shares have lower voting rights than Class A.</p>
                </div>
          </CardContent>
      </Card>
      
      <Card className="neon-box">
          <CardHeader>
              <CardTitle>Stock Ticker Modifiers</CardTitle>
              <CardDescription>A fifth letter is added to stocks that are delinquent in certain exchange requirements on the Nasdaq.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/30">
                      <TableHead className="text-muted-foreground font-bold">Letter/Modifier</TableHead>
                      <TableHead className="text-muted-foreground font-bold">Meaning</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tickerModifiers.map((mod) => (
                      <TableRow key={mod.letter} className="border-border/20 hover:bg-accent/5">
                        <TableCell className="font-mono text-accent">{mod.letter}</TableCell>
                        <TableCell>{mod.meaning}</TableCell>
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
