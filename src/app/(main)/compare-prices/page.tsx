import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';


const pricingData = [
  {
    plan: 'Basic',
    price: 'Free',
    features: [
      { name: 'Indicators per Chart', other: '2', yours: '4' },
      { name: 'Charts in one Layout', other: '1', yours: '2' },
      { name: 'Server-Side Alerts', other: '3', yours: '6' },
      { name: 'Ads', other: <XCircle className="mx-auto h-5 w-5 text-destructive/80" />, yours: <span className="flex items-center justify-center gap-1 text-accent"><CheckCircle2 className="h-5 w-5"/> No Ads. Ever.</span> },
    ],
  },
  {
    plan: 'Essential',
    price: '$7.48 / mo',
    features: [
      { name: 'Indicators per Chart', other: '5', yours: '10' },
      { name: 'Charts in one Layout', other: '2', yours: '4' },
      { name: 'Server-Side Alerts', other: '20', yours: '40' },
      { name: 'Historical Data', other: '10k bars', yours: '20k bars' },
    ],
  },
  {
    plan: 'Plus',
    price: '$14.98 / mo',
    features: [
      { name: 'Indicators per Chart', other: '10', yours: '20' },
      { name: 'Charts in one Layout', other: '4', yours: '8' },
      { name: 'Server-Side Alerts', other: '100', yours: '200' },
      { name: 'Historical Data', other: '10k bars', yours: '20k bars' },
    ],
  },
  {
    plan: 'Premium',
    price: '$29.98 / mo',
    features: [
      { name: 'Indicators per Chart', other: '25', yours: '50' },
      { name: 'Charts in one Layout', other: '8', yours: '16' },
      { name: 'Server-Side Alerts', other: '400', yours: '800' },
      { name: 'Historical Data', other: '20k bars', yours: '40k bars' },
    ],
  },
  {
    plan: 'Ultimate',
    price: '$119.98 / mo',
    features: [
      { name: 'Indicators per Chart', other: '50', yours: '100' },
      { name: 'Charts in one Layout', other: '16', yours: '32' },
      { name: 'Server-Side Alerts', other: '1,000', yours: '2,000' },
      { name: 'Historical Data', other: '40k bars', yours: '80k bars' },
    ],
  },
];

export default function ComparePricesPage() {
  return (
    <div className="flex-1 p-4 md:p-8 space-y-6">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Compare Prices</CardTitle>
          <CardDescription>
            This is the page for comparing prices across different assets and
            exchanges.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Price comparison functionality will be implemented here. It's
            important to ensure that any comparative advertising is truthful and
            non-deceptive.
          </p>
          <Button asChild variant="outline">
            <Link
              href="https://www.ftc.gov/legal-library/browse/statement-policy-regarding-comparative-advertising#:~:text=Comparative%20advertising%2C%20when%20truthful%20and,lower%20prices%20in%20the%20marketplace."
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              FTC Policy on Comparative Advertising
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="neon-box">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold neon-text text-primary">
            Get Double the Value. Not Double the Price.
          </CardTitle>
          <CardDescription className="text-center text-lg text-muted-foreground">
            Our plans offer twice the features for 50% less.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="w-[150px] text-muted-foreground font-bold">Plan Tier</TableHead>
                  <TableHead className="w-[180px] text-muted-foreground font-bold">Your Price (50% OFF)</TableHead>
                  <TableHead className="text-muted-foreground font-bold">Feature</TableHead>
                  <TableHead className="text-center text-muted-foreground font-bold">"The Other Guys" Limit</TableHead>
                  <TableHead className="text-center text-accent font-bold">Your "Double Value" Limit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((plan, planIndex) => (
                  <React.Fragment key={plan.plan}>
                    {plan.features.map((feature, featureIndex) => (
                      <TableRow key={`${plan.plan}-${feature.name}`} className="border-border/20 hover:bg-accent/5">
                        {featureIndex === 0 && (
                          <TableCell
                            rowSpan={plan.features.length}
                            className="font-bold text-lg text-primary align-top border-r border-border/20"
                          >
                            {plan.plan}
                          </TableCell>
                        )}
                        {featureIndex === 0 && (
                          <TableCell
                            rowSpan={plan.features.length}
                            className="font-mono text-foreground align-top border-r border-border/20"
                          >
                            <div className='flex flex-col items-start'>
                              <span>{plan.price}</span>
                              {plan.price !== 'Free' && (
                                  <Button size="sm" className="mt-2 w-full btn-accent">Select Plan</Button>
                              )}
                            </div>
                          </TableCell>
                        )}
                        <TableCell className="font-medium">{feature.name}</TableCell>
                        <TableCell className="text-center text-muted-foreground font-mono">{feature.other}</TableCell>
                        <TableCell className="text-center text-accent font-bold font-mono">{feature.yours}</TableCell>
                      </TableRow>
                    ))}
                    {planIndex < pricingData.length - 1 && (
                       <TableRow className="border-t-2 border-primary/30 h-4 bg-transparent hover:bg-transparent">
                          <TableCell colSpan={5} className="p-0"></TableCell>
                       </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Card className="neon-box border-destructive/50">
        <CardContent className="p-6">
          <p className="text-sm text-destructive text-center">
            Comparison based on standard monthly prices and features publicly listed by the leading competitor in the online charting industry as of November 2025. Prices and features are subject to change. (BUT OURS WONT)
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
