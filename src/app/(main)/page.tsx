import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Bot, DollarSign, BarChart } from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
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
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.2)]">
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
          <Card className="bg-card/80 backdrop-blur-sm border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_20px_#FF6600/0.2]">
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
