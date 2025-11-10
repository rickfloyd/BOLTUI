module.exports = [
  9270,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(42602).vendored.contexts.AppRouterContext;
  },
  38783,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient;
  },
  210,
  (a) => {
    "use strict";
    let b = (0, a.i(70106).default)("ArrowLeft", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]);
    a.s(["ArrowLeft", () => b], 210);
  },
  66718,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(68114);
    let e = c.forwardRef(({ className: a, type: c, ...e }, f) =>
      (0, b.jsx)("input", {
        type: c,
        className: (0, d.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          a,
        ),
        ref: f,
        ...e,
      }),
    );
    ((e.displayName = "Input"), a.s(["Input", () => e]));
  },
  11254,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(66718),
      f = a.i(38246),
      g = a.i(210);
    let h = [
        "btc",
        "doge",
        "ltc",
        "bch",
        "xmr",
        "zec",
        "etc",
        "dash",
        "kas",
        "dcr",
        "bdx",
        "cfx",
        "bsv",
        "dgb",
        "rvn",
        "ckb",
        "xvg",
        "qrl",
        "erg",
        "flux",
        "ethw",
        "zen",
        "sc",
        "sys",
        "firo",
        "nmc",
        "grs",
        "vtc",
        "beam",
        "bcn",
      ],
      i = new Map(
        [
          {
            symbol: "btc",
            ath_price_2025: "$104,412.00",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "doge",
            ath_price_2025: "$0.17",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "bch",
            ath_price_2025: "$493.67",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "zec",
            ath_price_2025: "$500.20",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "ltc",
            ath_price_2025: "$89.43",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "xmr",
            ath_price_2025: "$377.63",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "etc",
            ath_price_2025: "$14.72",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "dash",
            ath_price_2025: "$123.24",
            ath_date_2025: "Nov 2025",
          },
          { symbol: "kas", ath_price_2025: "$0.05", ath_date_2025: "Nov 2025" },
          {
            symbol: "dcr",
            ath_price_2025: "$46.49",
            ath_date_2025: "Nov 2025",
          },
          { symbol: "bdx", ath_price_2025: "$0.08", ath_date_2025: "Nov 2025" },
          { symbol: "cfx", ath_price_2025: "$0.09", ath_date_2025: "Nov 2025" },
          {
            symbol: "bsv",
            ath_price_2025: "$22.23",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "ckb",
            ath_price_2025: "$0.0031",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "sc",
            ath_price_2025: "$0.0018",
            ath_date_2025: "Nov 2025",
          },
          { symbol: "qrl", ath_price_2025: "$1.45", ath_date_2025: "Nov 2025" },
          {
            symbol: "ethw",
            ath_price_2025: "$0.7245",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "erg",
            ath_price_2025: "$0.6427",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "flux",
            ath_price_2025: "$0.0988",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "zen",
            ath_price_2025: "$18.82",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "dgb",
            ath_price_2025: "$0.0107",
            ath_date_2025: "Nov 2025",
          },
          {
            symbol: "rvn",
            ath_price_2025: "$0.0101",
            ath_date_2025: "Nov 2025",
          },
          { symbol: "nmc", ath_price_2025: "$1.25", ath_date_2025: "Nov 2025" },
          { symbol: "grs", ath_price_2025: "$0.20", ath_date_2025: "Nov 2025" },
          { symbol: "vtc", ath_price_2025: "$0.06", ath_date_2025: "Nov 2025" },
          {
            symbol: "beam",
            ath_price_2025: "$0.04",
            ath_date_2025: "Nov 2025",
          },
          { symbol: "bcn", ath_price_2025: "$0.00", ath_date_2025: "Nov 2025" },
        ].map((a) => [a.symbol.toLowerCase(), a]),
      );
    function j() {
      let [a, j] = (0, c.useState)(""),
        [k, l] = (0, c.useState)([]),
        [m, n] = (0, c.useState)(!0),
        [o, p] = (0, c.useState)(null);
      (0, c.useEffect)(() => {
        let a = async () => {
          try {
            n(!0);
            let a = await fetch("/api/coingecko/coins");
            if (!a.ok) {
              let b = await a.json();
              throw Error(b.error || "Failed to fetch Proof of Work coins.");
            }
            let b = (await a.json())
              .filter((a) => h.includes(a.symbol.toLowerCase()))
              .map((a) => {
                let b = i.get(a.symbol.toLowerCase());
                return {
                  ...a,
                  ath_price_2025: b?.ath_price_2025,
                  ath_date_2025: b?.ath_date_2025,
                };
              });
            (l(b), p(null));
          } catch (a) {
            (p(a.message), l([]));
          } finally {
            n(!1);
          }
        };
        a();
        let b = setInterval(a, 6e4);
        return () => clearInterval(b);
      }, []);
      let q = k.filter(
        (b) =>
          b.name.toLowerCase().includes(a.toLowerCase()) ||
          b.symbol.toLowerCase().includes(a.toLowerCase()),
      );
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)(d.Header, {}),
          (0, b.jsx)("main", {
            className: "dashboard-grid",
            children: (0, b.jsxs)("section", {
              className: "center-content",
              children: [
                (0, b.jsx)("h1", {
                  className: "text-3xl font-bold neon-text text-center mt-8",
                  children: "Proof of Work (PoW) Coins",
                }),
                (0, b.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "These blockchains use mining instead of staking to validate transactions. This list represents top PoW coins by market cap, with live market data and reported 2025 All-Time Highs.",
                }),
                (0, b.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, b.jsx)(e.Input, {
                    type: "text",
                    placeholder: "Search coins...",
                    value: a,
                    onChange: (a) => j(a.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, b.jsx)("div", {
                  className: "w-full overflow-x-auto mt-8",
                  children: (0, b.jsxs)("div", {
                    className: "info-table-card",
                    children: [
                      m &&
                        0 === k.length &&
                        (0, b.jsx)("p", {
                          className: "text-center text-lg text-gray-300 py-8",
                          children: "Loading PoW coins...",
                        }),
                      o &&
                        (0, b.jsx)("p", {
                          className: "text-center text-lg text-red-400 py-8",
                          children: o,
                        }),
                      !m &&
                        !o &&
                        (0, b.jsxs)("table", {
                          className: "info-table w-full",
                          children: [
                            (0, b.jsx)("thead", {
                              children: (0, b.jsxs)("tr", {
                                children: [
                                  (0, b.jsx)("th", { children: "Rank" }),
                                  (0, b.jsx)("th", { children: "Coin" }),
                                  (0, b.jsx)("th", { children: "Symbol" }),
                                  (0, b.jsx)("th", { children: "Price" }),
                                  (0, b.jsx)("th", { children: "Market Cap" }),
                                  (0, b.jsx)("th", {
                                    children: "2025 ATH Price",
                                  }),
                                  (0, b.jsx)("th", { children: "ATH Date" }),
                                  (0, b.jsx)("th", {
                                    children: "View on CoinGecko",
                                  }),
                                ],
                              }),
                            }),
                            (0, b.jsx)("tbody", {
                              children: q.map((a) => {
                                let c, d;
                                return (0, b.jsxs)(
                                  "tr",
                                  {
                                    className: "hover:bg-white/5",
                                    children: [
                                      (0, b.jsx)("td", {
                                        className: "neon-orange",
                                        children: a.market_cap_rank,
                                      }),
                                      (0, b.jsxs)("td", {
                                        className:
                                          "neon-cyan flex items-center gap-2",
                                        children: [
                                          (0, b.jsx)("img", {
                                            src: a.image,
                                            alt: `${a.name} logo`,
                                            className: "w-6 h-6 rounded-full",
                                          }),
                                          a.name,
                                        ],
                                      }),
                                      (0, b.jsx)("td", {
                                        className: "neon-pink",
                                        children: a.symbol.toUpperCase(),
                                      }),
                                      (0, b.jsx)("td", {
                                        className: "neon-blue font-numeric",
                                        children:
                                          ((c = a.current_price),
                                          new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                          }).format(c)),
                                      }),
                                      (0, b.jsx)("td", {
                                        className: "neon-gold font-numeric",
                                        children:
                                          ((d = a.market_cap),
                                          new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                            notation: "compact",
                                            compactDisplay: "long",
                                          }).format(d)),
                                      }),
                                      (0, b.jsx)("td", {
                                        className: "text-gray-300 font-numeric",
                                        children: a.ath_price_2025 || "N/A",
                                      }),
                                      (0, b.jsx)("td", {
                                        className: "text-gray-400",
                                        children: a.ath_date_2025 || "N/A",
                                      }),
                                      (0, b.jsx)("td", {
                                        children: (0, b.jsx)(f.default, {
                                          href: `https://www.coingecko.com/en/coins/${a.id}`,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "text-cyan-400 hover:underline",
                                          children: "View More",
                                        }),
                                      }),
                                    ],
                                  },
                                  a.id,
                                );
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, b.jsxs)(f.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, b.jsx)(g.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    a.s(["default", () => j], 11254);
  },
];

//# sourceMappingURL=_2b4ef03d._.js.map
