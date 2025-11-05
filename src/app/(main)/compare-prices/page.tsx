import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function ComparePricesPage() {
  return (
    <div className="flex-1 p-4 md:p-8">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Compare Prices</CardTitle>
          <CardDescription>
            This is the page for comparing prices across different assets and exchanges.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Price comparison functionality will be implemented here. It's important to ensure that any comparative advertising is truthful and non-deceptive.
          </p>
          <Button asChild variant="outline">
            <Link href="https://www.ftc.gov/legal-library/browse/statement-policy-regarding-comparative-advertising#:~:text=Comparative%20advertising%2C%20when%20truthful%20and,lower%20prices%20in%20the%20marketplace." target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                FTC Policy on Comparative Advertising
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
