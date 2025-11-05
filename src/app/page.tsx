'use client';

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
        <button className="data-card neon-blue-border">
          <div className="card-header">
            <span className="card-title">Nasdaq 100</span>
            <div className="card-description">US Tech & Growth Stocks</div>
          </div>
          <div className="card-data">
            <span className="price">$385.39</span>
            <span className="change negative">-0.30%</span>
          </div>
        </button>

        <button className="data-card neon-orange-border">
          <div className="card-header">
            <span className="card-title">Dow Jones</span>
             <div className="card-description">30 Major US Industrial Stocks</div>
          </div>
          <div className="card-data">
            <span className="price">$368.91</span>
            <span className="change positive">+1.38%</span>
          </div>
        </button>

        <button className="data-card neon-cyan-border">
          <div className="card-header">
            <span className="card-title">Russell 2000</span>
            <div className="card-description">US Small-Cap Stocks</div>
          </div>
          <div className="card-data">
            <span className="price">$200.89</span>
            <span className="change negative">-0.68%</span>
          </div>
        </button>
      </div>

      <div className="index-cards-row">
        <button className="data-card neon-pink-border">
          <div className="card-header">
            <span className="card-title">Bitcoin (BTC)</span>
            <div className="card-description">Digital Assets</div>
          </div>
          <div className="card-data">
            <span className="price">$68,420.10</span>
            <span className="change positive">+2.5%</span>
          </div>
        </button>

        <button className="data-card neon-cyan-border">
          <div className="card-header">
            <span className="card-title">Ethereum (ETH)</span>
            <div className="card-description">Digital Assets</div>
          </div>
          <div className="card-data">
            <span className="price">$3,550.75</span>
            <span className="change negative">-1.2%</span>
          </div>
        </button>

        <button className="data-card neon-blue-border">
          <div className="card-header">
            <span className="card-title">Crude Oil (WTI)</span>
            <div className="card-description">Physical Goods</div>
          </div>
          <div className="card-data">
            <span className="price">$78.50</span>
            <span className="change positive">+0.85%</span>
          </div>
        </button>
      </div>

      <div className="index-cards-row">
        <button className="data-card neon-orange-border">
          <div className="card-header">
            <span className="card-title">Gold (XAU)</span>
            <div className="card-description">Physical Goods</div>
          </div>
          <div className="card-data">
            <span className="price">$2,345.60</span>
            <span className="change positive">+0.55%</span>
          </div>
        </button>

        <button className="data-card neon-pink-border">
          <div className="card-header">
            <span className="card-title">Silver (XAG)</span>
            <div className="card-description">Physical Goods</div>
          </div>
          <div className="card-data">
            <span className="price">$29.80</span>
            <span className="change negative">-0.15%</span>
          </div>
        </button>

        <button className="data-card neon-cyan-border">
          <div className="card-header">
            <span className="card-title">NVIDIA (NVDA)</span>
            <div className="card-description">Company Shares</div>
          </div>
          <div className="card-data">
            <span className="price">$125.90</span>
            <span className="change positive">+3.1%</span>
          </div>
        </button>
      </div>
      
      <div className="index-cards-row">
        <button className="data-card neon-blue-border">
          <div className="card-header">
            <span className="card-title">Tesla (TSLA)</span>
            <div className="card-description">Company Shares</div>
          </div>
          <div className="card-data">
            <span className="price">$182.45</span>
            <span className="change negative">-2.4%</span>
          </div>
        </button>

        <button className="data-card neon-orange-border">
          <div className="card-header">
            <span className="card-title">EUR/USD</span>
            <div className="card-description">Currency Trading</div>
          </div>
          <div className="card-data">
            <span className="price">1.0712</span>
            <span className="change positive">+0.09%</span>
          </div>
        </button>

        <button className="data-card neon-pink-border">
          <div className="card-header">
            <span className="card-title">USD/JPY</span>
            <div className="card-description">Currency Trading</div>
          </div>
          <div className="card-data">
            <span className="price">157.40</span>
            <span className="change negative">-0.21%</span>
          </div>
        </button>
      </div>

      <div className="index-cards-row">
        <button className="data-card neon-cyan-border">
          <div className="card-header">
            <span className="card-title">S&P 500</span>
            <div className="card-description">500 Large US Companies</div>
          </div>
          <div className="card-data">
            <span className="price">$5,470.30</span>
            <span className="change positive">+0.77%</span>
          </div>
        </button>

        <button className="data-card neon-blue-border">
          <div className="card-header">
            <span className="card-title">Apple (AAPL)</span>
            <div className="card-description">Company Shares</div>
          </div>
          <div className="card-data">
            <span className="price">$214.29</span>
            <span className="change negative">-0.82%</span>
          </div>
        </button>

        <button className="data-card neon-orange-border">
          <div className="card-header">
            <span className="card-title">Natural Gas</span>
            <div className="card-description">Physical Goods</div>
          </div>
          <div className="card-data">
            <span className="price">$2.91</span>
            <span className="change positive">+1.5%</span>
          </div>
        </button>
      </div>

      <div className="dxy-card neon-pink-border">
        <div className="dxy-title">DXY (US Dollar Index)</div>
        <div className="card-description" style={{color: 'white', paddingBottom: '10px'}}>US Dollar Value vs. Basket of Currencies</div>
        <div className="dxy-data">
          <span className="dxy-price">105.42</span>
          <span className="dxy-change negative">-0.38 (-0.36%)</span>
        </div>
      </div>
    </section>
  );
}
