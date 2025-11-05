import { BarChart2, Settings } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function IndexCard({
  title,
  price,
  change,
  changeType,
  borderColorClass,
  icon: Icon
}: {
  title: string;
  price: string;
  change: string;
  changeType: 'positive' | 'negative';
  borderColorClass: string;
  icon: React.ElementType;
}) {
  return (
    <div className={`data-card ${borderColorClass}`}>
      <div className="card-header flex justify-between items-center">
        <span className="card-title">{title}</span>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="card-data">
        <span className="price">{price}</span>
        <span className={`change ${changeType}`}>{change}</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <section className="center-content">
      <div className="info-banner">
        <div className="flex justify-between items-center">
            <p>90% of every payment directly funds educational programs for future traders</p>
            <div className="text-sm cursor-pointer text-muted-foreground hover:text-white">
                Where Your Payment Goes ▼
            </div>
        </div>
        <div className="stats-row">
            <div className="stat-box">
                <div className="stat-number">12,911</div>
                <div className="stat-label">Students Helped</div>
            </div>
            <div className="stat-box">
                <div className="stat-number">156</div>
                <div className="stat-label">Free Courses</div>
            </div>
            <div className="stat-box">
                <div className="stat-number">348</div>
                <div className="stat-label">Scholarships</div>
            </div>
            <div className="stat-box">
                <div className="stat-number">28</div>
                <div className="stat-label">Free Tools</div>
            </div>
        </div>
      </div>
      
      <Tabs defaultValue="stocks" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="spreads">Spreads</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="futures">Futures</TabsTrigger>
          <TabsTrigger value="economy">Economy</TabsTrigger>
          <TabsTrigger value="options">Options</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="index-cards-row">
        <IndexCard
          title="Nasdaq 100"
          price="$385.39"
          change="-0.30%"
          changeType="negative"
          borderColorClass="neon-blue-border"
          icon={BarChart2}
        />
        <IndexCard
          title="Dow Jones"
          price="$368.91"
          change="+1.38%"
          changeType="positive"
          borderColorClass="neon-orange-border"
          icon={BarChart2}
        />
        <IndexCard
          title="Russell 2000"
          price="$200.89"
          change="-0.68%"
          changeType="negative"
          borderColorClass="neon-cyan-border"
          icon={BarChart2}
        />
      </div>
      
      <div className="dxy-card neon-pink-border">
            <div className="dxy-title">DXY (US Dollar Index)</div>
            <div className="dxy-data">
                <span className="dxy-price">105.42</span>
                <span className="dxy-change negative">-0.38 (-0.36%)</span>
            </div>
      </div>

    </section>
  );
}
