import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Bot, DollarSign, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChartingClient } from './charting/_components/charting-client';
import MarketsPage from './markets/page';

export default function DashboardPage() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Main content pushed to the right */}
          <div className="lg:col-span-4 lg:col-start-4">
             <MarketsPage />
          </div>
          <div className="lg:col-span-3 lg:col-start-1 lg:row-start-1">
             <ChartingClient />
          </div>
        </div>
        
        {/* Stat cards below the main content */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-6">
           <Card className="neon-box">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="neon-box">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                AI Signals
              </CardTitle>
              <Bot className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+23</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="neon-box">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Now
              </CardTitle>
              <Activity className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
           <Card className="neon-box">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Market Volume
              </CardTitle>
              <BarChart className="h-4 w-4 text-pink-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1.2T</div>
              <p className="text-xs text-muted-foreground">
                -5.2% from yesterday
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
