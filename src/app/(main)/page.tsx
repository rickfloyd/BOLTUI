import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Bot, DollarSign, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DashboardPage() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className={cn("bg-card/80 backdrop-blur-sm transition-all duration-300 neon-box")}>
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
          <Card className={cn("bg-card/80 backdrop-blur-sm transition-all duration-300 neon-box")}>
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
          <Card className={cn("bg-card/80 backdrop-blur-sm transition-all duration-300 neon-box")}>
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
        </div>
      </div>
    </>
  );
}
