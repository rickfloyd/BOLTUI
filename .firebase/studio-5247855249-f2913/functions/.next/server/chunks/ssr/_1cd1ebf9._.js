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
  63073,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(66718),
      f = a.i(38246),
      g = a.i(210);
    function h() {
      let [a, h] = (0, c.useState)(""),
        [i, j] = (0, c.useState)([]),
        [k, l] = (0, c.useState)(!0),
        [m, n] = (0, c.useState)(null);
      (0, c.useEffect)(() => {
        let a = async () => {
          try {
            l(!0);
            let a = await fetch("/api/coingecko/coins");
            if (!a.ok) {
              let b = await a.json();
              throw Error(b.error || "Failed to fetch Proof of Stake coins.");
            }
            let b = await a.json();
            (j(b), n(null));
          } catch (a) {
            (n(a.message), j([]));
          } finally {
            l(!1);
          }
        };
        a();
        let b = setInterval(a, 6e4);
        return () => clearInterval(b);
      }, []);
      let o = i.filter(
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
                  children: "Proof of Stake (PoS) Coins",
                }),
                (0, b.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "These blockchains use staking instead of mining to validate transactions, making them more energy-efficient and scalable. This list represents top coins by market cap, many of which use a Proof of Stake consensus mechanism.",
                }),
                (0, b.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, b.jsx)(e.Input, {
                    type: "text",
                    placeholder: "Search coins...",
                    value: a,
                    onChange: (a) => h(a.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, b.jsx)("div", {
                  className: "w-full overflow-x-auto mt-8",
                  children: (0, b.jsxs)("div", {
                    className: "info-table-card",
                    children: [
                      k &&
                        0 === i.length &&
                        (0, b.jsx)("p", {
                          className: "text-center text-lg text-gray-300 py-8",
                          children: "Loading PoS coins...",
                        }),
                      m &&
                        (0, b.jsx)("p", {
                          className: "text-center text-lg text-red-400 py-8",
                          children: m,
                        }),
                      !k &&
                        !m &&
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
                                    children: "View on CoinGecko",
                                  }),
                                ],
                              }),
                            }),
                            (0, b.jsx)("tbody", {
                              children: o.map((a) => {
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
    a.s(["default", () => h]);
  },
];

//# sourceMappingURL=_1cd1ebf9._.js.map
