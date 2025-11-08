1:"$Sreact.fragment"
3:I[45872,["/_next/static/chunks/2af5d5865e0554ce.js","/_next/static/chunks/51a6179494871fa9.js","/_next/static/chunks/83bfa553819560ab.js"],"Header"]
11:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/1a476e30dee46234.js"],"OutletBoundary"]
12:"$Sreact.suspense"
2:T77b,
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
      0:{"buildId":"I4FEFc1gKLv38C4sOSWoo","rsc":["$","$1","c",{"children":[[["$","style",null,{"children":"$2"}],["$","$L3",null,{}],["$","div",null,{"className":"binance-schema-body","children":[["$","h1",null,{"className":"glow","children":"⚡ Binance API Schema — AI Quantum Charts"}],["$","section",null,{"children":[["$","h2",null,{"children":"🛡️ Compliance"}],["$","p",null,{"children":"Binance Product Terms of Use:"}],["$","ul",null,{"children":[["$","li",null,{"children":["$","a",null,{"href":"https://www.binance.com/en/terms","target":"_blank","rel":"noopener noreferrer","children":"English Version"}]}],["$","li",null,{"children":["$","a",null,{"href":"https://www.binance.com/zh-CN/terms","target":"_blank","rel":"noopener noreferrer","children":"Chinese Version"}]}]]}]]}],["$","section",null,{"children":[["$","h2",null,{"children":"🔗 FIX API (Institutional Access)"}],["$","p",null,{"className":"category","children":"Endpoints"}],["$","ul",null,{"children":[["$","li",null,{"children":[["$","span",null,{"className":"endpoint","children":"Order Entry:"}]," tcp+tls://fix-oe.binance.com:9000"]}],["$","li",null,{"children":[["$","span",null,{"className":"endpoint","children":"Drop Copy:"}]," tcp+tls://fix-dc.binance.com:9000"]}],["$","li",null,{"children":[["$","span",null,{"className":"endpoint","children":"Market Data:"}]," tcp+tls://fix-md.binance.com:9000"]}]]}],["$","p",null,{"children":["Encryption: ",["$","b",null,{"children":"TLS + Ed25519 keys"}]]}],["$","p",null,{"children":"Permitted Keys: FIX_API, FIX_API_READ_ONLY"}],["$","pre",null,{"children":"{\n  \"RateLimit\": \"10,000 per 10s (Order Entry)\",\n  \"Connections\": \"10 max per account\",\n  \"Mode\": \"UNORDERED or SEQUENTIAL\"\n}"}]]}],["$","section",null,{"children":[["$","h2",null,{"children":"🌐 WebSocket Streams"}],["$","p",null,{"className":"category","children":"Public Streams"}],["$","ul",null,{"children":["$L4","$L5","$L6"]}],"$L7","$L8"]}],"$L9","$La","$Lb","$Lc","$Ld","$Le"]}]],["$Lf"],"$L10"]}],"loading":null,"isPartial":false}
4:["$","li",null,{"children":[["$","span",null,{"className":"endpoint","children":"Ticker:"}]," wss://stream.binance.com/ws/<symbol>@ticker"]}]
5:["$","li",null,{"children":[["$","span",null,{"className":"endpoint","children":"Candlesticks:"}]," wss://stream.binance.com/ws/<symbol>@kline_1m"]}]
6:["$","li",null,{"children":[["$","span",null,{"className":"endpoint","children":"Trades:"}]," wss://stream.binance.com/ws/<symbol>@aggTrade"]}]
7:["$","p",null,{"className":"category","children":"Private Streams"}]
8:["$","ul",null,{"children":[["$","li",null,{"children":[["$","span",null,{"className":"endpoint","children":"User Data:"}]," wss://stream.binance.com/ws/<listenKey>"]}],["$","li",null,{"children":"Events: executionReport, balanceUpdate, outboundAccountPosition"}]]}]
9:["$","section",null,{"children":[["$","h2",null,{"children":"🧩 REST Endpoints"}],["$","pre",null,{"children":"{\n  \"base_url\": \"https://api.binance.com\",\n  \"endpoints\": {\n    \"exchange_info\": \"/api/v3/exchangeInfo\",\n    \"order\": \"/api/v3/order\",\n    \"account\": \"/api/v3/account\",\n    \"user_stream\": \"/api/v3/userDataStream\"\n  }\n}"}]]}]
a:["$","section",null,{"children":[["$","h2",null,{"children":"⚙️ Filters"}],["$","pre",null,{"children":"{\n  \"PRICE_FILTER\": {\"minPrice\":\"0.00000100\",\"maxPrice\":\"100000.00000000\"},\n  \"LOT_SIZE\": {\"minQty\":\"0.00100000\",\"maxQty\":\"100000.00000000\"},\n  \"PERCENT_PRICE\": {\"multiplierUp\":\"1.3\",\"multiplierDown\":\"0.7\"},\n  \"MIN_NOTIONAL\": {\"minNotional\":\"10.0\"}\n}"}]]}]
b:["$","section",null,{"children":[["$","h2",null,{"children":"🔠 Enums & Order Status"}],["$","pre",null,{"children":"{\n  \"OrderStatus\": [\"NEW\",\"FILLED\",\"CANCELED\",\"EXPIRED\"],\n  \"OrderType\": [\"LIMIT\",\"MARKET\",\"STOP_LOSS_LIMIT\",\"TAKE_PROFIT_LIMIT\"],\n  \"Permissions\": [\"SPOT\",\"MARGIN\",\"LEVERAGED\"]\n}"}]]}]
c:["$","section",null,{"children":[["$","h2",null,{"children":"🚨 Error Codes"}],["$","pre",null,{"children":"{\n  \"-1007\": \"Timeout waiting for backend response\",\n  \"-2010\": \"Invalid order or filter violation\",\n  \"-2011\": \"Order canceled\",\n  \"-1021\": \"Timestamp outside recvWindow\",\n  \"-1116\": \"Invalid order type\",\n  \"-1121\": \"Invalid symbol\"\n}"}]]}]
d:["$","section",null,{"children":[["$","h2",null,{"children":"⚡ Example Integration"}],["$","pre",null,{"children":"import schema from \"./config/binance-api-schema.json\";\nconsole.log(schema.fix_api.order_entry_endpoint);"}]]}]
e:["$","footer",null,{"style":{"textAlign":"center","color":"#00e5ff","marginTop":"40px"},"children":"Quantum Charts © 2025 — All rights reserved."}]
f:["$","script","script-0",{"src":"/_next/static/chunks/83bfa553819560ab.js","async":true}]
10:["$","$L11",null,{"children":["$","$12",null,{"name":"Next.MetadataOutlet","children":"$@13"}]}]
13:null
