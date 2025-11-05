'use client';

import { BarChart, Bitcoin, CandlestickChart, Info } from 'lucide-react';

export default function Page() {
  return (
    <section className="center-content">
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
        <div className="data-card neon-blue-border">
          <div className="card-header">
            <span className="card-title">Nasdaq 100</span>
          </div>
          <div className="card-data">
            <span className="price">$385.39</span>
            <span className="change negative">-0.30%</span>
          </div>
        </div>

        <div className="data-card neon-orange-border">
          <div className="card-header">
            <span className="card-title">Dow Jones</span>
          </div>
          <div className="card-data">
            <span className="price">$368.91</span>
            <span className="change positive">+1.38%</span>
          </div>
        </div>

        <div className="data-card neon-cyan-border">
          <div className="card-header">
            <span className="card-title">Russell 2000</span>
          </div>
          <div className="card-data">
            <span className="price">$200.89</span>
            <span className="change negative">-0.68%</span>
          </div>
        </div>
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