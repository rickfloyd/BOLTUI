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
  52495,
  (a) => {
    "use strict";
    let b = (0, a.i(70106).default)("ExternalLink", [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "M10 14 21 3", key: "gplh6r" }],
      [
        "path",
        {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          key: "a6xqqp",
        },
      ],
    ]);
    a.s(["ExternalLink", () => b], 52495);
  },
  31198,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(66718),
      f = a.i(38246),
      g = a.i(210),
      h = a.i(52495);
    let i = [
      {
        name: "Aragon",
        symbol: "ANT",
        contractAddress: "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
        chain: "Ethereum",
        coinGeckoId: "aragon",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/aragon",
      },
      {
        name: "API3",
        symbol: "API3",
        contractAddress: "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
        chain: "Ethereum",
        coinGeckoId: "api3",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/api3",
      },
      {
        name: "DAO Maker",
        symbol: "DAO",
        contractAddress: "0x0f51bb10119727a7e5ea3538074fb341f56b09ad",
        chain: "Ethereum",
        coinGeckoId: "dao-maker",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/dao-maker",
      },
      {
        name: "BitDAO",
        symbol: "BIT",
        contractAddress: "0x1a4da80967373fd929961e976b4b53ceec063a15",
        chain: "Ethereum",
        coinGeckoId: "bitdao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/bitdao",
      },
      {
        name: "MetisDAO",
        symbol: "METIS",
        contractAddress: "0xdeaDDe1127c0A5cF7e5F65cBfA0A3c6e5B7C1cB3",
        chain: "Ethereum",
        coinGeckoId: "metis-token",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/metis-token",
      },
      {
        name: "Olympus DAO",
        symbol: "OHM",
        contractAddress: "0x64aa3364F17FfF3a2d7A7D6cC9cB2A1cF8C3e3f0",
        chain: "Ethereum",
        coinGeckoId: "olympus",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/olympus",
      },
      {
        name: "Maker",
        symbol: "MKR",
        contractAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
        chain: "Ethereum",
        coinGeckoId: "maker",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/maker",
      },
      {
        name: "Compound",
        symbol: "COMP",
        contractAddress: "0xc00e94cb662c3520282e6f5717214004a7f26888",
        chain: "Ethereum",
        coinGeckoId: "compound-governance-token",
        apiEndpoint:
          "https://api.coingecko.com/api/v3/coins/compound-governance-token",
      },
      {
        name: "Aave",
        symbol: "AAVE",
        contractAddress: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
        chain: "Ethereum",
        coinGeckoId: "aave",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/aave",
      },
      {
        name: "Curve DAO Token",
        symbol: "CRV",
        contractAddress: "0xd533a949740bb3306d119cc777fa900ba034cd52",
        chain: "Ethereum",
        coinGeckoId: "curve-dao-token",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/curve-dao-token",
      },
      {
        name: "Synthetix",
        symbol: "SNX",
        contractAddress: "0xc011a72400e58ecd99ee497cf89e3775d4bd732f",
        chain: "Ethereum",
        coinGeckoId: "synthetix-network-token",
        apiEndpoint:
          "https://api.coingecko.com/api/v3/coins/synthetix-network-token",
      },
      {
        name: "Yearn Finance",
        symbol: "YFI",
        contractAddress: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
        chain: "Ethereum",
        coinGeckoId: "yearn-finance",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/yearn-finance",
      },
      {
        name: "Badger DAO",
        symbol: "BADGER",
        contractAddress: "0x3472a5a71965499acd81997a54bba8d852c6e53d",
        chain: "Ethereum",
        coinGeckoId: "badger-dao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/badger-dao",
      },
      {
        name: "Gitcoin",
        symbol: "GTC",
        contractAddress: "0xDe30DaD76F5fA5A6f8fB7e8eA7f8fB7e8eA7f8fB",
        chain: "Ethereum",
        coinGeckoId: "gitcoin",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/gitcoin",
      },
      {
        name: "ConstitutionDAO",
        symbol: "PEOPLE",
        contractAddress: "0x7a58c0be72be218b41c608b7fe7c5bb630736c71",
        chain: "Ethereum",
        coinGeckoId: "constitutiondao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/constitutiondao",
      },
      {
        name: "Mantra DAO",
        symbol: "OM",
        contractAddress: "0x82f0b8b456c1a451378467398982d4834b6829c1",
        chain: "Ethereum",
        coinGeckoId: "mantra-dao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/mantra-dao",
      },
      {
        name: "dYdX",
        symbol: "DYDX",
        contractAddress: "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
        chain: "Ethereum",
        coinGeckoId: "dydx",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/dydx",
      },
      {
        name: "Gnosis",
        symbol: "GNO",
        contractAddress: "0x6810e776880c02933d47db1b9fc05908e5386b96",
        chain: "Ethereum",
        coinGeckoId: "gnosis",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/gnosis",
      },
      {
        name: "BarnBridge",
        symbol: "BOND",
        contractAddress: "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
        chain: "Ethereum",
        coinGeckoId: "barnbridge",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/barnbridge",
      },
      {
        name: "Index Coop",
        symbol: "INDEX",
        contractAddress: "0x0954906da0Bf32d5479e25f46056d22f08464cab",
        chain: "Ethereum",
        coinGeckoId: "index-cooperative",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/index-cooperative",
      },
    ];
    function j() {
      let [a, j] = (0, c.useState)(""),
        k = i.filter(
          (b) =>
            b.name.toLowerCase().includes(a.toLowerCase()) ||
            b.symbol.toLowerCase().includes(a.toLowerCase()) ||
            b.chain.toLowerCase().includes(a.toLowerCase()),
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
                  children: "DAO Governance Tokens",
                }),
                (0, b.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "These tokens represent governance rights in decentralized autonomous organizations (DAOs). They’re typically used for voting, proposals, and treasury control.",
                }),
                (0, b.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, b.jsx)(e.Input, {
                    type: "text",
                    placeholder: "Search DAO tokens...",
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
                      (0, b.jsxs)("table", {
                        className: "info-table w-full",
                        children: [
                          (0, b.jsx)("thead", {
                            children: (0, b.jsxs)("tr", {
                              children: [
                                (0, b.jsx)("th", { children: "Token Name" }),
                                (0, b.jsx)("th", { children: "Symbol" }),
                                (0, b.jsx)("th", {
                                  children: "Contract Address",
                                }),
                                (0, b.jsx)("th", { children: "Chain" }),
                                (0, b.jsx)("th", { children: "API" }),
                              ],
                            }),
                          }),
                          (0, b.jsx)("tbody", {
                            children: k.map((a, c) =>
                              (0, b.jsxs)(
                                "tr",
                                {
                                  className: "hover:bg-white/5",
                                  children: [
                                    (0, b.jsx)("td", {
                                      className: "neon-cyan",
                                      children: a.name,
                                    }),
                                    (0, b.jsx)("td", {
                                      className: "neon-pink",
                                      children: a.symbol,
                                    }),
                                    (0, b.jsx)("td", {
                                      className:
                                        "text-gray-400 font-mono text-xs",
                                      children: a.contractAddress,
                                    }),
                                    (0, b.jsx)("td", {
                                      className: "text-gray-300",
                                      children: a.chain,
                                    }),
                                    (0, b.jsx)("td", {
                                      children: (0, b.jsxs)(f.default, {
                                        href: a.apiEndpoint,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "text-cyan-400 hover:underline flex items-center gap-1",
                                        children: [
                                          "CoinGecko ",
                                          (0, b.jsx)(h.ExternalLink, {
                                            size: 14,
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                `${a.symbol}-${c}`,
                              ),
                            ),
                          }),
                        ],
                      }),
                      0 === k.length &&
                        (0, b.jsx)("p", {
                          className: "text-center text-gray-400 py-8",
                          children: "No DAO tokens found matching your search.",
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
    a.s(["default", () => j], 31198);
  },
];

//# sourceMappingURL=_4ad9ec14._.js.map
