'use client';

import { cn } from '@/lib/utils';
import { useRealtimeData } from '@/hooks/use-realtime-data';

// Mock data to be used if Firebase data is not available
const mockData = {
    marketData: {
        NASDAQ: { price: 385.39, change: -0.30 },
        DOW: { price: 368.91, change: 1.38 },
        RUSSELL: { price: 200.89, change: -0.68 },
        DXY: { price: 105.42, change: -0.38, changePercent: -0.36 }
    },
    EducationStats: {
        students: 12911,
        courses: 156,
        scholarships: 348,
        freeTools: 28
    }
};


export default function Page() {
    // Use the custom hook to fetch data from Firebase Realtime Database
    const { data: realtimeData, loading, error } = useRealtimeData('/');

    // Use fetched data if available, otherwise fall back to mock data
    const data = realtimeData || mockData;

    const nasdaq = data.marketData?.NASDAQ || mockData.marketData.NASDAQ;
    const dow = data.marketData?.DOW || mockData.marketData.DOW;
    const russell = data.marketData?.RUSSELL || mockData.marketData.RUSSELL;
    const dxy = data.marketData?.DXY || mockData.marketData.DXY;
    const educationStats = data.EducationStats || mockData.EducationStats;

  return (
    <section className="center-content">
      <div className="info-banner">
        <p>90% of every payment directly funds educational programs for future traders</p>
        <div className="stats-row">
          <div className="stat-box">
            <div className="stat-number">{loading ? '...' : educationStats.students.toLocaleString()}</div>
            <div className="stat-label">Students Helped</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{loading ? '...' : educationStats.courses}</div>
            <div className="stat-label">Free Courses</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{loading ? '...' : educationStats.scholarships}</div>
            <div className="stat-label">Scholarships</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{loading ? '...' : educationStats.freeTools}</div>
            <div className="stat-label">Free Tools</div>
          </div>
        </div>
      </div>

      <div className="index-cards-row">
        <div className="data-card neon-blue-border">
          <div className="card-header">
            <span className="card-title">Nasdaq 100</span>
          </div>
          <div className="card-data">
            <span className="price">{loading ? '...' : `$${nasdaq.price.toFixed(2)}`}</span>
            <span className={cn('change', nasdaq.change > 0 ? 'positive' : 'negative')}>
              {loading ? '...' : `${nasdaq.change > 0 ? '+' : ''}${nasdaq.change.toFixed(2)}%`}
            </span>
          </div>
        </div>
        
        <div className="data-card neon-orange-border">
          <div className="card-header">
            <span className="card-title">Dow Jones</span>
          </div>
          <div className="card-data">
            <span className="price">{loading ? '...' : `$${dow.price.toFixed(2)}`}</span>
            <span className={cn('change', dow.change > 0 ? 'positive' : 'negative')}>
              {loading ? '...' : `${dow.change > 0 ? '+' : ''}${dow.change.toFixed(2)}%`}
            </span>
          </div>
        </div>

        <div className="data-card neon-cyan-border">
          <div className="card-header">
            <span className="card-title">Russell 2000</span>
          </div>
          <div className="card-data">
            <span className="price">{loading ? '...' : `$${russell.price.toFixed(2)}`}</span>
            <span className={cn('change', russell.change > 0 ? 'positive' : 'negative')}>
                {loading ? '...' : `${russell.change > 0 ? '+' : ''}${russell.change.toFixed(2)}%`}
            </span>
          </div>
        </div>
      </div>
      
      <div className="dxy-card">
         <div className="dxy-title">DXY (US Dollar Index)</div>
         <div className="dxy-data">
             <span className="dxy-price">{loading ? '...' : dxy.price.toFixed(2)}</span>
             <span className={cn('dxy-change', dxy.change > 0 ? 'positive' : 'negative')}>
                {loading ? '...' : `${dxy.change.toFixed(2)} (${dxy.changePercent.toFixed(2)}%)`}
             </span>
         </div>
      </div>
    </section>
  );
}
