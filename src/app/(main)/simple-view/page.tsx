import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function SimpleViewPage() {
  return (
    <div className="flex-1 p-4 md:p-8">
      <Card className="neon-box">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Simple View</CardTitle>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This is the simple view page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
