
import { Header } from '@/components/layout/header';

export default function BinanceSchemaPage() {
  return (
    <>
      <style>{`
        .binance-schema-body {
          background-color: #000;
          color: #e5e5e5;
          font-family: 'Courier New', monospace;
          padding: 30px;
        }

        .binance-schema-body h1, .binance-schema-body h2, .binance-schema-body h3 {
          text-shadow: 0 0 15px #00e5ff;
          color: #00e5ff;
        }

        .binance-schema-body h1 {
          font-size: 2.4rem;
          text-align: center;
          margin-bottom: 40px;
        }

        .binance-schema-body section {
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 5px solid #ff0077;
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 0 25px rgba(255, 0, 120, 0.2);
          margin-bottom: 40px;
          padding: 25px;
          border-radius: 12px;
        }

        .binance-schema-body .endpoint {
          color: #00e5ff;
          font-weight: bold;
        }

        .binance-schema-body .category {
          color: #ff5500;
          text-transform: uppercase;
          font-weight: bold;
        }

        .binance-schema-body code, .binance-schema-body pre {
          background: rgba(20, 20, 20, 0.9);
          color: #00ffcc;
          border-radius: 8px;
          padding: 10px;
          display: block;
          overflow-x: auto;
          border: 1px solid #222;
          box-shadow: 0 0 12px rgba(0,255,204,0.15);
        }

        .binance-schema-body a {
          color: #00e5ff;
          text-decoration: none;
        }
        .binance-schema-body a:hover {
          color: #ff0077;
        }

        .binance-schema-body .glow {
          animation: flicker 2s infinite;
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow: 0 0 8px #00e5ff, 0 0 15px #00e5ff, 0 0 30px #00e5ff;
          }
          20%, 24%, 55% {
            text-shadow: none;
          }
        }
      `}</style>
      <Header />
      <div className="binance-schema-body">
        <h1 className="glow">⚡ Binance API Schema — AI Quantum Charts</h1>

        <section>
          <h2>🛡️ Compliance</h2>
          <p>Binance Product Terms of Use:</p>
          <ul>
            <li><a href="https://www.binance.com/en/terms" target="_blank" rel="noopener noreferrer">English Version</a></li>
            <li><a href="https://www.binance.com/zh-CN/terms" target="_blank" rel="noopener noreferrer">Chinese Version</a></li>
          </ul>
        </section>

        <section>
          <h2>🔗 FIX API (Institutional Access)</h2>
          <p className="category">Endpoints</p>
          <ul>
            <li><span className="endpoint">Order Entry:</span> tcp+tls://fix-oe.binance.com:9000</li>
            <li><span className="endpoint">Drop Copy:</span> tcp+tls://fix-dc.binance.com:9000</li>
            <li><span className="endpoint">Market Data:</span> tcp+tls://fix-md.binance.com:9000</li>
          </ul>
          <p>Encryption: <b>TLS + Ed25519 keys</b></p>
          <p>Permitted Keys: FIX_API, FIX_API_READ_ONLY</p>
          <pre>{`{
  "RateLimit": "10,000 per 10s (Order Entry)",
  "Connections": "10 max per account",
  "Mode": "UNORDERED or SEQUENTIAL"
}`}</pre>
        </section>

        <section>
          <h2>🌐 WebSocket Streams</h2>
          <p className="category">Public Streams</p>
          <ul>
            <li><span className="endpoint">Ticker:</span> wss://stream.binance.com/ws/&lt;symbol&gt;@ticker</li>
            <li><span className="endpoint">Candlesticks:</span> wss://stream.binance.com/ws/&lt;symbol&gt;@kline_1m</li>
            <li><span className="endpoint">Trades:</span> wss://stream.binance.com/ws/&lt;symbol&gt;@aggTrade</li>
          </ul>
          <p className="category">Private Streams</p>
          <ul>
            <li><span className="endpoint">User Data:</span> wss://stream.binance.com/ws/&lt;listenKey&gt;</li>
            <li>Events: executionReport, balanceUpdate, outboundAccountPosition</li>
          </ul>
        </section>

        <section>
          <h2>🧩 REST Endpoints</h2>
          <pre>{`{
  "base_url": "https://api.binance.com",
  "endpoints": {
    "exchange_info": "/api/v3/exchangeInfo",
    "order": "/api/v3/order",
    "account": "/api/v3/account",
    "user_stream": "/api/v3/userDataStream"
  }
}`}</pre>
        </section>

        <section>
          <h2>⚙️ Filters</h2>
          <pre>{`{
  "PRICE_FILTER": {"minPrice":"0.00000100","maxPrice":"100000.00000000"},
  "LOT_SIZE": {"minQty":"0.00100000","maxQty":"100000.00000000"},
  "PERCENT_PRICE": {"multiplierUp":"1.3","multiplierDown":"0.7"},
  "MIN_NOTIONAL": {"minNotional":"10.0"}
}`}</pre>
        </section>

        <section>
          <h2>🔠 Enums & Order Status</h2>
          <pre>{`{
  "OrderStatus": ["NEW","FILLED","CANCELED","EXPIRED"],
  "OrderType": ["LIMIT","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],
  "Permissions": ["SPOT","MARGIN","LEVERAGED"]
}`}</pre>
        </section>

        <section>
          <h2>🚨 Error Codes</h2>
          <pre>{`{
  "-1007": "Timeout waiting for backend response",
  "-2010": "Invalid order or filter violation",
  "-2011": "Order canceled",
  "-1021": "Timestamp outside recvWindow",
  "-1116": "Invalid order type",
  "-1121": "Invalid symbol"
}`}</pre>
        </section>

        <section>
          <h2>⚡ Example Integration</h2>
          <pre>{`import schema from "./config/binance-api-schema.json";
console.log(schema.fix_api.order_entry_endpoint);`}</pre>
        </section>

        <footer style={{textAlign:'center',color:'#00e5ff',marginTop:'40px'}}>
          Quantum Charts © 2025 — All rights reserved.
        </footer>
      </div>
    </>
  );
}
