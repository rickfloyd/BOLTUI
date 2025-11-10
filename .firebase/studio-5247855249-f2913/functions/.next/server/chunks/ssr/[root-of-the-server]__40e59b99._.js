module.exports = [
  93695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  50645,
  (a) => {
    a.n(a.i(27572));
  },
  43619,
  (a) => {
    a.n(a.i(79962));
  },
  13718,
  (a) => {
    a.n(a.i(85523));
  },
  18198,
  (a) => {
    a.n(a.i(45518));
  },
  62212,
  (a) => {
    a.n(a.i(66114));
  },
  90392,
  (a) => {
    "use strict";
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/layout/header.tsx <module evaluation>",
      "Header",
    );
    a.s(["Header", 0, b]);
  },
  32323,
  (a) => {
    "use strict";
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/layout/header.tsx",
      "Header",
    );
    a.s(["Header", 0, b]);
  },
  33952,
  (a) => {
    "use strict";
    a.i(90392);
    var b = a.i(32323);
    a.n(b);
  },
  16110,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(33952);
    function d() {
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)("style", {
            children: `
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
      `,
          }),
          (0, b.jsx)(c.Header, {}),
          (0, b.jsxs)("div", {
            className: "binance-schema-body",
            children: [
              (0, b.jsx)("h1", {
                className: "glow",
                children: "⚡ Binance API Schema — AI Quantum Charts",
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", { children: "🛡️ Compliance" }),
                  (0, b.jsx)("p", {
                    children: "Binance Product Terms of Use:",
                  }),
                  (0, b.jsxs)("ul", {
                    children: [
                      (0, b.jsx)("li", {
                        children: (0, b.jsx)("a", {
                          href: "https://www.binance.com/en/terms",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "English Version",
                        }),
                      }),
                      (0, b.jsx)("li", {
                        children: (0, b.jsx)("a", {
                          href: "https://www.binance.com/zh-CN/terms",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "Chinese Version",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", {
                    children: "🔗 FIX API (Institutional Access)",
                  }),
                  (0, b.jsx)("p", {
                    className: "category",
                    children: "Endpoints",
                  }),
                  (0, b.jsxs)("ul", {
                    children: [
                      (0, b.jsxs)("li", {
                        children: [
                          (0, b.jsx)("span", {
                            className: "endpoint",
                            children: "Order Entry:",
                          }),
                          " tcp+tls://fix-oe.binance.com:9000",
                        ],
                      }),
                      (0, b.jsxs)("li", {
                        children: [
                          (0, b.jsx)("span", {
                            className: "endpoint",
                            children: "Drop Copy:",
                          }),
                          " tcp+tls://fix-dc.binance.com:9000",
                        ],
                      }),
                      (0, b.jsxs)("li", {
                        children: [
                          (0, b.jsx)("span", {
                            className: "endpoint",
                            children: "Market Data:",
                          }),
                          " tcp+tls://fix-md.binance.com:9000",
                        ],
                      }),
                    ],
                  }),
                  (0, b.jsxs)("p", {
                    children: [
                      "Encryption: ",
                      (0, b.jsx)("b", { children: "TLS + Ed25519 keys" }),
                    ],
                  }),
                  (0, b.jsx)("p", {
                    children: "Permitted Keys: FIX_API, FIX_API_READ_ONLY",
                  }),
                  (0, b.jsx)("pre", {
                    children: `{
  "RateLimit": "10,000 per 10s (Order Entry)",
  "Connections": "10 max per account",
  "Mode": "UNORDERED or SEQUENTIAL"
}`,
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", { children: "🌐 WebSocket Streams" }),
                  (0, b.jsx)("p", {
                    className: "category",
                    children: "Public Streams",
                  }),
                  (0, b.jsxs)("ul", {
                    children: [
                      (0, b.jsxs)("li", {
                        children: [
                          (0, b.jsx)("span", {
                            className: "endpoint",
                            children: "Ticker:",
                          }),
                          " wss://stream.binance.com/ws/<symbol>@ticker",
                        ],
                      }),
                      (0, b.jsxs)("li", {
                        children: [
                          (0, b.jsx)("span", {
                            className: "endpoint",
                            children: "Candlesticks:",
                          }),
                          " wss://stream.binance.com/ws/<symbol>@kline_1m",
                        ],
                      }),
                      (0, b.jsxs)("li", {
                        children: [
                          (0, b.jsx)("span", {
                            className: "endpoint",
                            children: "Trades:",
                          }),
                          " wss://stream.binance.com/ws/<symbol>@aggTrade",
                        ],
                      }),
                    ],
                  }),
                  (0, b.jsx)("p", {
                    className: "category",
                    children: "Private Streams",
                  }),
                  (0, b.jsxs)("ul", {
                    children: [
                      (0, b.jsxs)("li", {
                        children: [
                          (0, b.jsx)("span", {
                            className: "endpoint",
                            children: "User Data:",
                          }),
                          " wss://stream.binance.com/ws/<listenKey>",
                        ],
                      }),
                      (0, b.jsx)("li", {
                        children:
                          "Events: executionReport, balanceUpdate, outboundAccountPosition",
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", { children: "🧩 REST Endpoints" }),
                  (0, b.jsx)("pre", {
                    children: `{
  "base_url": "https://api.binance.com",
  "endpoints": {
    "exchange_info": "/api/v3/exchangeInfo",
    "order": "/api/v3/order",
    "account": "/api/v3/account",
    "user_stream": "/api/v3/userDataStream"
  }
}`,
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", { children: "⚙️ Filters" }),
                  (0, b.jsx)("pre", {
                    children: `{
  "PRICE_FILTER": {"minPrice":"0.00000100","maxPrice":"100000.00000000"},
  "LOT_SIZE": {"minQty":"0.00100000","maxQty":"100000.00000000"},
  "PERCENT_PRICE": {"multiplierUp":"1.3","multiplierDown":"0.7"},
  "MIN_NOTIONAL": {"minNotional":"10.0"}
}`,
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", { children: "🔠 Enums & Order Status" }),
                  (0, b.jsx)("pre", {
                    children: `{
  "OrderStatus": ["NEW","FILLED","CANCELED","EXPIRED"],
  "OrderType": ["LIMIT","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],
  "Permissions": ["SPOT","MARGIN","LEVERAGED"]
}`,
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", { children: "🚨 Error Codes" }),
                  (0, b.jsx)("pre", {
                    children: `{
  "-1007": "Timeout waiting for backend response",
  "-2010": "Invalid order or filter violation",
  "-2011": "Order canceled",
  "-1021": "Timestamp outside recvWindow",
  "-1116": "Invalid order type",
  "-1121": "Invalid symbol"
}`,
                  }),
                ],
              }),
              (0, b.jsxs)("section", {
                children: [
                  (0, b.jsx)("h2", { children: "⚡ Example Integration" }),
                  (0, b.jsx)("pre", {
                    children: `import schema from "./config/binance-api-schema.json";
console.log(schema.fix_api.order_entry_endpoint);`,
                  }),
                ],
              }),
              (0, b.jsx)("footer", {
                style: {
                  textAlign: "center",
                  color: "#00e5ff",
                  marginTop: "40px",
                },
                children: "Quantum Charts © 2025 — All rights reserved.",
              }),
            ],
          }),
        ],
      });
    }
    a.s(["default", () => d]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40e59b99._.js.map
