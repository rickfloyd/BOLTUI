'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const strategicThemes = [
    {
      title: 'Universal Data Abstraction',
      description: "The platform's most powerful feature is its rigid EXCHANGE:TICKER symbology, which functions as a universal translator for global market data. This abstraction layer standardizes thousands of disparate data streams into a single, coherent, and easily navigable system, dramatically lowering the barrier to entry for global multi-asset analysis."
    },
    {
      title: 'Curated, Professional-Grade Data',
      description: 'In traditional markets like futures and equities, the platform demonstrates a clear strategy of prioritizing quality and liquidity over sheer quantity. By focusing on the world\'s most liquid exchanges and sourcing index data from official providers, the platform ensures the data is reliable and relevant for professional analysis.'
    },
    {
        title: 'Deep Integration with Modern Finance',
        description: "The platform's rapid and structured expansion into the world of Decentralized Finance (DeFi) is a key differentiator. By organizing DEX data by blockchain and providing specialized screeners, the platform shows a native understanding of the on-chain ecosystem and is strategically positioning itself as the premier analytical front-end for this new financial frontier."
    },
    {
        title: 'A Modular, Scalable Architecture',
        description: 'The clear separation between data ingestion (Datafeed API) and trade execution (Broker API) allows the platform to scale its offerings in parallel. It can expand its data coverage and its network of integrated brokers independently, creating a flexible and powerful ecosystem without bearing the regulatory burden of becoming a direct broker-dealer in every jurisdiction.'
    }
];

export default function StrategyClient() {
  return (
    <div className="space-y-6">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Key Strategic Themes</CardTitle>
          <CardDescription>The core pillars that define the platform's market position and value proposition.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {strategicThemes.map((theme) => (
            <div key={theme.title} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                    <h3 className="font-semibold text-foreground">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.description}</p>
                </div>
            </div>
          ))}
        </CardContent>
      </Card>

       <Card className="neon-box border-primary/80">
        <CardHeader>
          <CardTitle className="text-primary">Final Expert Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The platform has evolved far beyond its origins as a simple charting tool. It is now a comprehensive data terminal and analytical ecosystem that successfully serves a uniquely broad audience. For retail participants, it democratizes access to a scope and quality of global financial information that was once the exclusive domain of institutional investors. For those same institutional users, it provides the data integrity, professional-grade tools, and specialized feeds required for rigorous analysis. The platform's core strength lies not in any single feature, but in the seamless integration of a vast and fragmented global data landscape into a single, powerful, and analyzable whole. This makes the platform an indispensable tool for modern multi-asset market analysis in an increasingly interconnected world.
          </p>
        </CardContent>
      </Card>

    </div>
  );
}
