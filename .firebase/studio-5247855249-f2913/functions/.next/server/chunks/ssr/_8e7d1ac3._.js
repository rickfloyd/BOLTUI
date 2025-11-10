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
  92352,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(18894);
    let d = (0, a.i(70106).default)("CircleCheckBig", [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
    ]);
    var e = a.i(38246);
    function f() {
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)(c.Header, {}),
          (0, b.jsx)("main", {
            className: "container mx-auto px-4 py-12",
            children: (0, b.jsxs)("div", {
              className: "center-content max-w-4xl mx-auto",
              children: [
                (0, b.jsx)("h1", {
                  className:
                    "text-3xl md:text-4xl font-bold neon-text text-center mb-6",
                  children: "🤖 Coin & Token Validator",
                }),
                (0, b.jsx)("p", {
                  className: "text-lg text-gray-300 text-center mb-12",
                  children:
                    "This tool programmatically validates on-chain data and metadata for crypto assets. It runs weekly to ensure the information across the platform remains accurate and up-to-date.",
                }),
                (0, b.jsxs)("section", {
                  className:
                    "p-8 rounded-lg bg-black/50 border-2 border-cyan-500/50 shadow-[0_0_25px_rgba(0,255,255,0.3)] w-full",
                  children: [
                    (0, b.jsx)("h2", {
                      className:
                        "text-2xl font-bold text-cyan-300 mb-6 text-center",
                      children: "Validator Checklist",
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6",
                      children: [
                        "Consensus type (PoW, PoS, hybrid)",
                        "Hash algorithm",
                        "Mining status",
                        "Canonical metadata (symbol, name, CoinGecko ID)",
                        "Smart contract code (for EVM tokens)",
                        "ERC standard detection (e.g., ERC-20, ERC-721)",
                        "Proxy contract detection",
                        "Upgradeable contract detection",
                        "Fallback logic for missing metadata",
                      ].map((a, c) =>
                        (0, b.jsxs)(
                          "div",
                          {
                            className: "flex items-center gap-3",
                            children: [
                              (0, b.jsx)(d, {
                                className:
                                  "h-6 w-6 text-green-400 flex-shrink-0",
                              }),
                              (0, b.jsx)("span", {
                                className: "text-gray-200 text-lg",
                                children: a,
                              }),
                            ],
                          },
                          c,
                        ),
                      ),
                    }),
                    (0, b.jsxs)("div", {
                      className: "mt-8 text-center text-gray-400 text-sm",
                      children: [
                        (0, b.jsx)("p", {
                          children:
                            "Validation scripts use a combination of CoinGecko and Etherscan APIs to pull and verify data.",
                        }),
                        (0, b.jsx)("p", {
                          children:
                            "This process helps maintain data integrity and provides deeper insights into each asset.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("section", {
                  className: "mt-12 w-full",
                  children: [
                    (0, b.jsx)("h2", {
                      className:
                        "text-2xl font-bold text-pink-300 mb-4 text-center",
                      children: "Developer Tooling",
                    }),
                    (0, b.jsxs)("p", {
                      className: "text-center text-gray-300 mb-4",
                      children: [
                        "A script is available in the ",
                        (0, b.jsx)("code", {
                          className: "bg-gray-800 p-1 rounded-md text-cyan-400",
                          children: "/tools",
                        }),
                        " directory to perform these checks.",
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "bg-gray-900/70 p-6 rounded-lg border border-pink-400/30",
                      children: [
                        (0, b.jsx)("h3", {
                          className: "text-xl font-semibold text-white mb-2",
                          children: "/tools/validate-coingecko-ids.js",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-gray-400",
                          children:
                            "This Node.js script takes a list of tokens and uses the CoinGecko API to verify their canonical ID, symbol, and name, providing suggestions for any mismatches. It serves as the foundation for the automated weekly validation process.",
                        }),
                        (0, b.jsx)(e.default, {
                          href: "#",
                          className:
                            "text-cyan-400 hover:underline mt-4 inline-block",
                          children: "View Script (TBD)",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.s(["default", () => f], 92352);
  },
];

//# sourceMappingURL=_8e7d1ac3._.js.map
