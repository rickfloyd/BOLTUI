1:"$Sreact.fragment"
3:I[45872,["/_next/static/chunks/2af5d5865e0554ce.js","/_next/static/chunks/51a6179494871fa9.js","/_next/static/chunks/83bfa553819560ab.js"],"Header"]
d:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/1a476e30dee46234.js"],"OutletBoundary"]
e:"$Sreact.suspense"
2:T7db,
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
      0:{"buildId":"I4FEFc1gKLv38C4sOSWoo","rsc":["$","$1","c",{"children":[[["$","style",null,{"children":"$2"}],["$","$L3",null,{}],["$","div",null,{"className":"data-providers-body","children":[["$","h1",null,{"children":"⚙️ Chart Data Provider APIs"}],["$","section",null,{"children":[["$","h2",null,{"children":"1. TwelveData"}],["$","p",null,{"children":["Your key: ",["$","span",null,{"className":"api-key","children":"6892d751d0104a789847f040c031053f"}]]}],["$","h3",null,{"children":"Best for:"}],["$","ul",null,{"children":[["$","li",null,{"children":"Candlestick / Heikin Ashi / Renko / Line / Range Bars / Volume Chart / Tick Chart"}],["$","li",null,{"children":"Pie, Scatter, Histogram, Box Plot (when you aggregate volume + price data)"}]]}],["$","h3",null,{"children":"Endpoints:"}],["$","pre",null,{"children":"https://api.twelvedata.com/time_series?symbol=BTC/USD&interval=1h&apikey=YOUR_KEY"}],["$","pre",null,{"children":"https://api.twelvedata.com/volume?symbol=BTC/USD&apikey=YOUR_KEY"}],["$","h3",null,{"children":"Notes:"}],["$","ul",null,{"children":[["$","li",null,{"children":"✅ Provides OHLCV (open, high, low, close, volume)"}],["$","li",null,{"children":"✅ Works for crypto, forex, and stocks"}],["$","li",null,{"children":"✅ Direct JSON ready for chart libraries"}]]}]]}],["$","section",null,{"children":[["$","h2",null,{"children":"2. Finnhub"}],["$","p",null,{"children":["Your key: ",["$","span",null,{"className":"api-key","children":"d3blnapr01qqg7bv52q0d3blnapr01qqg7bv52qg"}]]}],["$","h3",null,{"children":"Best for:"}],["$","ul",null,{"children":[["$","li",null,{"children":"Candlestick / Heikin Ashi / Tick / Range Bars / Volume"}],["$","li",null,{"children":"Real-time intraday feeds for streaming dashboards"}]]}],"$L4","$L5","$L6","$L7"]}],"$L8","$L9","$La"]}]],["$Lb"],"$Lc"]}],"loading":null,"isPartial":false}
4:["$","h3",null,{"children":"Endpoint:"}]
5:["$","pre",null,{"children":"https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=1&token=YOUR_KEY"}]
6:["$","h3",null,{"children":"Notes:"}]
7:["$","ul",null,{"children":[["$","li",null,{"children":"✅ Returns UNIX timestamp + OHLC + volume"}],["$","li",null,{"children":"✅ Low latency, good for live updates"}],["$","li",null,{"children":"✅ Pairs directly with lightweight-charts or Recharts"}]]}]
8:["$","section",null,{"children":[["$","h2",null,{"children":"3. Polygon.io"}],["$","p",null,{"children":["Your key: ",["$","span",null,{"className":"api-key","children":"csJh0LMTPUu_Ab2a0cH1C9hvJ62WpjmV"}]]}],["$","h3",null,{"children":"Best for:"}],["$","ul",null,{"children":[["$","li",null,{"children":"Line / Area / Volume / Scatter / Bubble / Heatmap / Box Plot / Radar Chart"}],["$","li",null,{"children":"Multi-asset tick-level data or aggregates"}]]}],["$","h3",null,{"children":"Endpoint:"}],["$","pre",null,{"children":"https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/hour/2025-11-01/2025-11-07?adjusted=true&sort=asc&limit=50000&apiKey=YOUR_KEY"}],["$","h3",null,{"children":"Notes:"}],["$","ul",null,{"children":[["$","li",null,{"children":"✅ Provides high-resolution aggregates (Open, High, Low, Close, Volume)"}],["$","li",null,{"children":"✅ Compatible with any chart that needs fine-grained ticks"}],["$","li",null,{"children":"✅ Has multiple asset classes (Crypto, Forex, Stocks)"}]]}]]}]
9:["$","section",null,{"children":[["$","h2",null,{"children":"🧠 Chart-Type Coverage Map"}],["$","table",null,{"children":[["$","thead",null,{"children":["$","tr",null,{"children":[["$","th",null,{"children":"Chart Type"}],["$","th",null,{"children":"TwelveData"}],["$","th",null,{"children":"Finnhub"}],["$","th",null,{"children":"Polygon.io"}]]}]}],["$","tbody",null,{"children":[["$","tr",null,{"children":[["$","td",null,{"children":"Area / Line"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Heikin Ashi"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Renko"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Range Bars"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Tick Chart"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Volume Chart"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Hollow Candles"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Scatter Plot"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Pie / Histogram / Heatmap"}],["$","td",null,{"children":"✅ (aggregate)"}],["$","td",null,{"children":"✅ (aggregate)"}],["$","td",null,{"children":"✅ (aggregate)"}]]}],["$","tr",null,{"children":[["$","td",null,{"children":"Bubble / Radar / Box Plot"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}],["$","td",null,{"className":"check","children":"✅"}]]}]]}]]}]]}]
a:["$","section",null,{"children":[["$","h2",null,{"children":"✅ Summary"}],["$","p",null,{"children":"You’re already fully covered to power all 20 chart types."}]]}]
b:["$","script","script-0",{"src":"/_next/static/chunks/83bfa553819560ab.js","async":true}]
c:["$","$Ld",null,{"children":["$","$e",null,{"name":"Next.MetadataOutlet","children":"$@f"}]}]
f:null
