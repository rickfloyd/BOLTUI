import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Bot, DollarSign, BarChart } from 'lucide-react';

export default function DashboardPage() {
  const boxes = Array.from({ length: 20 });
  const rows = Array.from({ length: 4 });
  const boxesPerRow = 5;

  const happyColors = [
    'hsl(var(--accent))',      // Cyan
    'hsl(var(--chart-3))',     // Hot Pink
    'hsl(var(--chart-4))',     // Neon Orange
    'hsl(var(--chart-5))',     // Neon Green
    '#39FF14',                 // Neon Green
  ];

  return (
    <>
      <div className="flex-1 p-8 pt-6">
        <div className="space-y-6">
          {/* Stat cards below the main content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

          {/* 20 Individual Boxes grouped into rows */}
          <div className="flex flex-col space-y-12">
            {rows.map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-4">
                {boxes.slice(rowIndex * boxesPerRow, (rowIndex + 1) * boxesPerRow).map((_, boxIndex) => {
                  const boxNum = rowIndex * boxesPerRow + boxIndex;
                  const color = happyColors[boxNum % happyColors.length];
                  return (
                    <Card 
                      key={boxNum} 
                      className="h-40 transition-transform duration-300 ease-in-out hover:scale-105"
                      style={{
                        borderColor: color,
                        boxShadow: `0 0 8px ${color}, 0 0 12px ${color} inset`,
                      }}
                    >
                        <CardContent className="flex items-center justify-center h-full">
                            <p className="text-muted-foreground">Box {boxNum + 1}</p>
                        </CardContent>
                    </Card>
                  );
                })}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
