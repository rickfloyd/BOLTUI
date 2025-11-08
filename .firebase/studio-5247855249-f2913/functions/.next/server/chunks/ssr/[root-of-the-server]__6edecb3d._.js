module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},50645,a=>{a.n(a.i(27572))},43619,a=>{a.n(a.i(79962))},13718,a=>{a.n(a.i(85523))},18198,a=>{a.n(a.i(45518))},62212,a=>{a.n(a.i(66114))},90392,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/layout/header.tsx <module evaluation>","Header");a.s(["Header",0,b])},32323,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/components/layout/header.tsx","Header");a.s(["Header",0,b])},33952,a=>{"use strict";a.i(90392);var b=a.i(32323);a.n(b)},46843,a=>{"use strict";var b=a.i(7997),c=a.i(33952);function d(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)(c.Header,{}),(0,b.jsxs)("div",{className:"data-providers-body",children:[(0,b.jsx)("h1",{children:"⚙️ Chart Data Provider APIs"}),(0,b.jsxs)("section",{children:[(0,b.jsx)("h2",{children:"1. TwelveData"}),(0,b.jsxs)("p",{children:["Your key: ",(0,b.jsx)("span",{className:"api-key",children:"6892d751d0104a789847f040c031053f"})]}),(0,b.jsx)("h3",{children:"Best for:"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"Candlestick / Heikin Ashi / Renko / Line / Range Bars / Volume Chart / Tick Chart"}),(0,b.jsx)("li",{children:"Pie, Scatter, Histogram, Box Plot (when you aggregate volume + price data)"})]}),(0,b.jsx)("h3",{children:"Endpoints:"}),(0,b.jsx)("pre",{children:"https://api.twelvedata.com/time_series?symbol=BTC/USD&interval=1h&apikey=YOUR_KEY"}),(0,b.jsx)("pre",{children:"https://api.twelvedata.com/volume?symbol=BTC/USD&apikey=YOUR_KEY"}),(0,b.jsx)("h3",{children:"Notes:"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"✅ Provides OHLCV (open, high, low, close, volume)"}),(0,b.jsx)("li",{children:"✅ Works for crypto, forex, and stocks"}),(0,b.jsx)("li",{children:"✅ Direct JSON ready for chart libraries"})]})]}),(0,b.jsxs)("section",{children:[(0,b.jsx)("h2",{children:"2. Finnhub"}),(0,b.jsxs)("p",{children:["Your key: ",(0,b.jsx)("span",{className:"api-key",children:"d3blnapr01qqg7bv52q0d3blnapr01qqg7bv52qg"})]}),(0,b.jsx)("h3",{children:"Best for:"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"Candlestick / Heikin Ashi / Tick / Range Bars / Volume"}),(0,b.jsx)("li",{children:"Real-time intraday feeds for streaming dashboards"})]}),(0,b.jsx)("h3",{children:"Endpoint:"}),(0,b.jsx)("pre",{children:"https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=1&token=YOUR_KEY"}),(0,b.jsx)("h3",{children:"Notes:"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"✅ Returns UNIX timestamp + OHLC + volume"}),(0,b.jsx)("li",{children:"✅ Low latency, good for live updates"}),(0,b.jsx)("li",{children:"✅ Pairs directly with lightweight-charts or Recharts"})]})]}),(0,b.jsxs)("section",{children:[(0,b.jsx)("h2",{children:"3. Polygon.io"}),(0,b.jsxs)("p",{children:["Your key: ",(0,b.jsx)("span",{className:"api-key",children:"csJh0LMTPUu_Ab2a0cH1C9hvJ62WpjmV"})]}),(0,b.jsx)("h3",{children:"Best for:"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"Line / Area / Volume / Scatter / Bubble / Heatmap / Box Plot / Radar Chart"}),(0,b.jsx)("li",{children:"Multi-asset tick-level data or aggregates"})]}),(0,b.jsx)("h3",{children:"Endpoint:"}),(0,b.jsx)("pre",{children:"https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/hour/2025-11-01/2025-11-07?adjusted=true&sort=asc&limit=50000&apiKey=YOUR_KEY"}),(0,b.jsx)("h3",{children:"Notes:"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:"✅ Provides high-resolution aggregates (Open, High, Low, Close, Volume)"}),(0,b.jsx)("li",{children:"✅ Compatible with any chart that needs fine-grained ticks"}),(0,b.jsx)("li",{children:"✅ Has multiple asset classes (Crypto, Forex, Stocks)"})]})]}),(0,b.jsxs)("section",{children:[(0,b.jsx)("h2",{children:"🧠 Chart-Type Coverage Map"}),(0,b.jsxs)("table",{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{children:"Chart Type"}),(0,b.jsx)("th",{children:"TwelveData"}),(0,b.jsx)("th",{children:"Finnhub"}),(0,b.jsx)("th",{children:"Polygon.io"})]})}),(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Area / Line"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Heikin Ashi"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Renko"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Range Bars"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Tick Chart"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Volume Chart"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Hollow Candles"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Scatter Plot"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Pie / Histogram / Heatmap"}),(0,b.jsx)("td",{children:"✅ (aggregate)"}),(0,b.jsx)("td",{children:"✅ (aggregate)"}),(0,b.jsx)("td",{children:"✅ (aggregate)"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"Bubble / Radar / Box Plot"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"}),(0,b.jsx)("td",{className:"check",children:"✅"})]})]})]})]}),(0,b.jsxs)("section",{children:[(0,b.jsx)("h2",{children:"✅ Summary"}),(0,b.jsx)("p",{children:"You’re already fully covered to power all 20 chart types."})]})]})]})}a.s(["default",()=>d])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__6edecb3d._.js.map