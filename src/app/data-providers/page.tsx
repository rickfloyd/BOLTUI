
import { Header } from '@/components/layout/header';

export default function DataProvidersPage() {
  return (
    <>
      <style>{`
        .data-providers-body {
          background-color: #000;
          color: #e5e5e5;
          font-family: 'Courier New', monospace;
          padding: 30px;
        }
        .data-providers-body h1, .data-providers-body h2, .data-providers-body h3 {
          color: hsl(var(--neon-cyan));
          text-shadow: 0 0 15px hsl(var(--neon-cyan));
        }
        .data-providers-body h1 {
          font-size: 2.4rem;
          text-align: center;
          margin-bottom: 40px;
        }
        .data-providers-body section {
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 5px solid hsl(var(--neon-pink));
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 0 25px hsla(var(--neon-pink), 0.2);
          margin-bottom: 40px;
          padding: 25px;
          border-radius: 12px;
        }
        .data-providers-body .api-key {
          color: hsl(var(--neon-orange));
          font-weight: bold;
        }
        .data-providers-body pre {
          background: rgba(20, 20, 20, 0.9);
          color: #00ffcc;
          border-radius: 8px;
          padding: 15px;
          display: block;
          overflow-x: auto;
          border: 1px solid #222;
          box-shadow: 0 0 12px rgba(0,255,204,0.15);
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .data-providers-body table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .data-providers-body th, .data-providers-body td {
            border: 1px solid hsla(var(--neon-cyan), 0.3);
            padding: 12px;
            text-align: left;
        }
        .data-providers-body th {
            background-color: hsla(var(--neon-cyan), 0.1);
            color: hsl(var(--neon-cyan));
        }
        .data-providers-body td {
            color: #ccc;
        }
        .data-providers-body .check {
            color: hsl(var(--neon-green));
            font-weight: bold;
        }
      `}</style>
      <Header />
      <div className="data-providers-body">
        <h1>⚙️ Chart Data Provider APIs</h1>

        <section>
          <h2>1. TwelveData</h2>
          <p>Your key: <span className="api-key">6892d751d0104a789847f040c031053f</span></p>
          <h3>Best for:</h3>
          <ul>
            <li>Candlestick / Heikin Ashi / Renko / Line / Range Bars / Volume Chart / Tick Chart</li>
            <li>Pie, Scatter, Histogram, Box Plot (when you aggregate volume + price data)</li>
          </ul>
          <h3>Endpoints:</h3>
          <pre>https://api.twelvedata.com/time_series?symbol=BTC/USD&amp;interval=1h&amp;apikey=YOUR_KEY</pre>
          <pre>https://api.twelvedata.com/volume?symbol=BTC/USD&amp;apikey=YOUR_KEY</pre>
          <h3>Notes:</h3>
          <ul>
            <li>✅ Provides OHLCV (open, high, low, close, volume)</li>
            <li>✅ Works for crypto, forex, and stocks</li>
            <li>✅ Direct JSON ready for chart libraries</li>
          </ul>
        </section>

        <section>
          <h2>2. Finnhub</h2>
          <p>Your key: <span className="api-key">d3blnapr01qqg7bv52q0d3blnapr01qqg7bv52qg</span></p>
          <h3>Best for:</h3>
          <ul>
            <li>Candlestick / Heikin Ashi / Tick / Range Bars / Volume</li>
            <li>Real-time intraday feeds for streaming dashboards</li>
          </ul>
          <h3>Endpoint:</h3>
          <pre>https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&amp;resolution=1&amp;token=YOUR_KEY</pre>
          <h3>Notes:</h3>
          <ul>
            <li>✅ Returns UNIX timestamp + OHLC + volume</li>
            <li>✅ Low latency, good for live updates</li>
            <li>✅ Pairs directly with lightweight-charts or Recharts</li>
          </ul>
        </section>

        <section>
          <h2>3. Polygon.io</h2>
          <p>Your key: <span className="api-key">csJh0LMTPUu_Ab2a0cH1C9hvJ62WpjmV</span></p>
          <h3>Best for:</h3>
          <ul>
            <li>Line / Area / Volume / Scatter / Bubble / Heatmap / Box Plot / Radar Chart</li>
            <li>Multi-asset tick-level data or aggregates</li>
          </ul>
          <h3>Endpoint:</h3>
          <pre>https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/hour/2025-11-01/2025-11-07?adjusted=true&amp;sort=asc&amp;limit=50000&amp;apiKey=YOUR_KEY</pre>
          <h3>Notes:</h3>
          <ul>
            <li>✅ Provides high-resolution aggregates (Open, High, Low, Close, Volume)</li>
            <li>✅ Compatible with any chart that needs fine-grained ticks</li>
            <li>✅ Has multiple asset classes (Crypto, Forex, Stocks)</li>
          </ul>
        </section>

        <section>
          <h2>🧠 Chart-Type Coverage Map</h2>
          <table>
            <thead>
              <tr>
                <th>Chart Type</th>
                <th>TwelveData</th>
                <th>Finnhub</th>
                <th>Polygon.io</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Area / Line</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
              <tr>
                <td>Heikin Ashi</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
              <tr>
                <td>Renko</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
              <tr>
                <td>Range Bars</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
              <tr>
                <td>Tick Chart</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
              <tr>
                <td>Volume Chart</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
               <tr>
                <td>Hollow Candles</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
               <tr>
                <td>Scatter Plot</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
              <tr>
                <td>Pie / Histogram / Heatmap</td>
                <td>✅ (aggregate)</td>
                <td>✅ (aggregate)</td>
                <td>✅ (aggregate)</td>
              </tr>
              <tr>
                <td>Bubble / Radar / Box Plot</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
                <td className="check">✅</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>✅ Summary</h2>
          <p>You’re already fully covered to power all 20 chart types.</p>
        </section>

      </div>
    </>
  );
}
