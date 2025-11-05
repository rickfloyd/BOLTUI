import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
        <CardContent>
          <p className="text-muted-foreground">
            Price comparison functionality will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
