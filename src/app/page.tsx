
'use client';

// A modern, responsive dashboard for financial data visualization.
// Features a grid of cards displaying various market indices.
export default function Page() {
  return (
    <div className="index-cards-container">

        <button className="card-as-button">
          <h3>Forex</h3>
          <div className="card-description">Currency Trading</div>
          <p className="positive">+0.25%</p>
          <span>Daily Change</span>
        </button>

        <button className="card-as-button">
          <h3>Stocks (Equity Market)</h3>
          <div className="card-description">Company Shares</div>
          <p className="negative">-1.12%</p>
          <span>Daily Change</span>
        </button>

        <button className="card-as-button">
          <h3>Commodities</h3>
          <div className="card-description">Physical Goods (Oil, Gold, etc.)</div>
          <p className="positive">+2.30%</p>
          <span>Daily Change</span>
        </button>

        <button className="card-as-button">
          <h3>Bonds (Fixed Income)</h3>
          <div className="card-description">Debt Securities</div>
          <p className="positive">+0.05%</p>
          <span>Daily Change</span>
        </button>

        <button className="card-as-button">
          <h3>Cryptocurrency</h3>
          <div className="card-description">Digital Assets</div>
          <p className="negative">-5.50%</p>
          <span>Daily Change</span>
        </button>
        
        <button className="card-as-button">
          <h3>Derivatives</h3>
          <div className="card-description">Contracts based on underlying assets</div>
          <p className="positive">+0.75%</p>
          <span>Daily Change</span>
        </button>
        
        <button className="card-as-button">
          <h3>Nasdaq 100</h3>
          <div className="card-description">US Tech & Growth Stocks</div>
          <p className="negative">-1.5%</p>
          <span>Daily Change</span>
        </button>

        <button className="card-as-button">
          <h3>Dow Jones (US30)</h3>
          <div className="card-description">30 Major US Industrial Stocks</div>
          <p className="positive">+0.4%</p>
          <span>Daily Change</span>
        </button>

        <button className="card-as-button">
          <h3>Russell 2000</h3>
          <div className="card-description">US Small-Cap Stocks</div>
          <p className="negative">-2.1%</p>
          <span>Daily Change</span>
        </button>
        
        <div className="index-card pink-border">
            <div className="currency-index-grid">
                <div className="currency-index-card">
                    <h4>DXY (US Dollar Index)</h4>
                    <p>Measures the value of the U.S. dollar against a basket of six major world currencies (EUR, JPY, GBP, CAD, SEK, CHF).</p>
                </div>
                <div className="currency-index-card">
                    <h4>JXY (Japanese Yen Index)</h4>
                    <p>Measures the value of the Japanese Yen against a basket of major currencies.</p>
                </div>
                <div className="currency-index-card">
                    <h4>AXY (Australian Dollar Index)</h4>
                    <p>Measures the value of the Australian dollar against a basket of major currencies.</p>
                </div>
                <div className="currency-index-card">
                    <h4>BXY (British Pound Index)</h4>
                    <p>Measures the value of the British Pound against a basket of major currencies.</p>
                </div>
                <div className="currency-index-card">
                    <h4>CXY (Canadian Dollar Index)</h4>
                    <p>Measures the value of the Canadian Dollar against a basket of major currencies.</p>
                </div>
                <div className="currency-index-card">
                    <h4>EXY</h4>
                    <p>Measures the value of the Euro against a basket of major currencies.</p>
                </div>
            </div>
        </div>

        <button className="card-as-button">
          <h3>S&P 500 (US500)</h3>
          <div className="card-description">500 Large US Companies</div>
          <p className="negative">-0.8%</p>
          <span>Daily Change</span>
        </button>

        <button className="card-as-button">
          <h3>Bitcoin (BTC)</h3>
          <div className="card-description">The original cryptocurrency</div>
          <p className="positive">+3.2%</p>
          <span>Daily Change</span>
        </button>
        
        <button className="card-as-button">
          <h3>Metals</h3>
          <div className="card-description">Precious and industrial metals</div>
          <p className="positive">+1.8%</p>
          <span>Daily Change</span>
        </button>
    </div>
  );
}
