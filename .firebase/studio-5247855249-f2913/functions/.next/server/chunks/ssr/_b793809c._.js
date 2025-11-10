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
  88873,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(66718),
      f = a.i(38246),
      g = a.i(210);
    let h = [
      { name: "Bitcoin", symbol: "BTC" },
      { name: "Ethereum", symbol: "ETH" },
      { name: "Solana", symbol: "SOL" },
      { name: "Cardano", symbol: "ADA" },
      { name: "Avalanche", symbol: "AVAX" },
      { name: "Polkadot", symbol: "DOT" },
      { name: "Near Protocol", symbol: "NEAR" },
      { name: "Cosmos", symbol: "ATOM" },
      { name: "Algorand", symbol: "ALGO" },
      { name: "Tezos", symbol: "XTZ" },
      { name: "Stellar", symbol: "XLM" },
      { name: "Flow", symbol: "FLOW" },
      { name: "Hedera Hashgraph", symbol: "HBAR" },
      { name: "Internet Computer", symbol: "ICP" },
      { name: "Aptos", symbol: "APT" },
      { name: "Sui", symbol: "SUI" },
      { name: "Sei Network", symbol: "SEI" },
      { name: "Celo", symbol: "CELO" },
      { name: "Kava", symbol: "KAVA" },
      { name: "Elrond (MultiversX)", symbol: "EGLD" },
      { name: "Tron", symbol: "TRX" },
      { name: "EOS", symbol: "EOS" },
      { name: "Harmony", symbol: "ONE" },
      { name: "Zilliqa", symbol: "ZIL" },
      { name: "VeChain", symbol: "VET" },
      { name: "Waves", symbol: "WAVES" },
      { name: "Mina Protocol", symbol: "MINA" },
      { name: "Oasis Network", symbol: "ROSE" },
      { name: "Kadena", symbol: "KDA" },
      { name: "ICON", symbol: "ICX" },
      { name: "Ontology", symbol: "ONT" },
      { name: "NEM", symbol: "XEM" },
      { name: "BitTorrent Chain", symbol: "BTT" },
      { name: "Chiliz", symbol: "CHZ" },
      { name: "Akash Network", symbol: "AKT" },
      { name: "Render Network", symbol: "RNDR" },
      { name: "Energy Web Chain", symbol: "EWT" },
      { name: "Conflux", symbol: "CFX" },
      { name: "Nervos Network", symbol: "CKB" },
      { name: "XDC Network", symbol: "XDC" },
      { name: "Telos", symbol: "TLOS" },
      { name: "Radix", symbol: "XRD" },
      { name: "Coreum", symbol: "CORE" },
      { name: "Shardeum", symbol: "SHM" },
      { name: "Casper Network", symbol: "CSPR" },
      { name: "IOTA", symbol: "IOTA" },
      { name: "Fantom", symbol: "FTM" },
      { name: "Terra 2.0", symbol: "LUNA" },
      { name: "SafeCoin", symbol: "SAFE" },
      { name: "Bitgert", symbol: "BRISE" },
    ];
    function i() {
      let [a, i] = (0, c.useState)(""),
        j = h.filter(
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
                  children: "Layer 1 Blockchains and Their Coins (2025)",
                }),
                (0, b.jsx)("p", {
                  className: "text-lg text-gray-300 text-center",
                  children:
                    "A curated list of Layer 1 blockchain platforms and their native coins.",
                }),
                (0, b.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, b.jsx)(e.Input, {
                    type: "text",
                    placeholder: "Search coins...",
                    value: a,
                    onChange: (a) => i(a.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, b.jsx)("div", {
                  className: "w-full overflow-x-auto mt-8",
                  children: (0, b.jsx)("div", {
                    className: "info-table-card",
                    children: (0, b.jsxs)("table", {
                      className: "info-table w-full",
                      children: [
                        (0, b.jsx)("thead", {
                          children: (0, b.jsxs)("tr", {
                            children: [
                              (0, b.jsx)("th", { children: "#" }),
                              (0, b.jsx)("th", { children: "Platform" }),
                              (0, b.jsx)("th", { children: "Symbol" }),
                            ],
                          }),
                        }),
                        (0, b.jsx)("tbody", {
                          children: j.map((a, c) =>
                            (0, b.jsxs)(
                              "tr",
                              {
                                className: "hover:bg-white/5",
                                children: [
                                  (0, b.jsx)("td", {
                                    className: "neon-orange",
                                    children: c + 1,
                                  }),
                                  (0, b.jsx)("td", {
                                    className: "neon-cyan",
                                    children: a.name,
                                  }),
                                  (0, b.jsx)("td", {
                                    className: "neon-pink",
                                    children: a.symbol.toUpperCase(),
                                  }),
                                ],
                              },
                              a.symbol,
                            ),
                          ),
                        }),
                      ],
                    }),
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
    a.s(["default", () => i]);
  },
];

//# sourceMappingURL=_b793809c._.js.map
