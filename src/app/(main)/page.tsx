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
  icon,
}: {
  title: string;
  price: string;
  change: string;
  changeType: 'positive' | 'negative';
  borderColorClass: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={`data-card ${borderColorClass}`}>
      <div className="card-header flex justify-between items-center">
        <span className="card-title">{title}</span>
        {icon}
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
    <section className="center-content space-y-4">
      <div className="info-banner">
        <p>90% of every payment directly funds educational programs for future traders</p>
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

      <div className="index-cards-row">
        <IndexCard
          title="Nasdaq 100"
          price="$385.39"
          change="-0.30%"
          changeType="negative"
          borderColorClass="neon-blue-border"
          icon={<BarChart2 className="h-5 w-5 text-neon-blue" />}
        />
        <IndexCard
          title="Dow Jones"
          price="$368.91"
          change="+1.38%"
          changeType="positive"
          borderColorClass="neon-orange-border"
          icon={<BarChart2 className="h-5 w-5 text-neon-orange" />}
        />
        <IndexCard
          title="Russell 2000"
          price="$200.89"
          change="-0.68%"
          changeType="negative"
          borderColorClass="neon-cyan-border"
          icon={<BarChart2 className="h-5 w-5 text-neon-cyan" />}
        />
      </div>

      <div className="dxy-card">
        <div className="dxy-title">DXY (US Dollar Index)</div>
        <div className="dxy-data">
          <span className="dxy-price">105.42</span>
          <span className="dxy-change negative">-0.38 (-0.36%)</span>
        </div>
      </div>
    </section>
  );
}
