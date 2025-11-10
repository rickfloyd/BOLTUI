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
  16014,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(66718),
      f = a.i(38246),
      g = a.i(210);
    let h = [
      {
        title: "Bitcoin-Based Layer 2s",
        color: "neon-orange",
        coins: [
          { name: "Stacks", symbol: "STX" },
          { name: "Lightning Network", symbol: "No native coin (BTC used)" },
          { name: "Liquid Network", symbol: "L-BTC" },
          { name: "RSK", symbol: "RBTC" },
          { name: "Bitlayer", symbol: "BTR" },
          { name: "Omni Layer", symbol: "USDT (Bitcoin version)" },
          { name: "Rootstock Infrastructure Framework", symbol: "RIF" },
          { name: "Counterparty", symbol: "XCP" },
          { name: "RGB Protocol", symbol: "No native coin" },
          { name: "Sovryn", symbol: "SOV" },
        ],
      },
      {
        title: "Solana-Based Layer 2s",
        color: "neon-cyan",
        coins: [
          { name: "Neon EVM", symbol: "NEON" },
          { name: "Eclipse", symbol: "No native coin yet" },
          { name: "Nitro", symbol: "No native coin yet" },
          { name: "Solayer", symbol: "TBA" },
          { name: "Triton", symbol: "TBA" },
        ],
      },
      {
        title: "Cosmos-Based Layer 2s",
        color: "neon-blue",
        coins: [
          { name: "Celestia", symbol: "TIA" },
          { name: "Dymension", symbol: "DYM" },
          { name: "Saga", symbol: "SAGA" },
          { name: "Rollkit", symbol: "No native coin" },
          { name: "Archway", symbol: "ARCH" },
        ],
      },
      {
        title: "Polkadot-Based Layer 2s",
        color: "neon-pink",
        coins: [
          { name: "Moonbeam", symbol: "GLMR" },
          { name: "Astar", symbol: "ASTR" },
          { name: "Phala Network", symbol: "PHA" },
          { name: "Parallel Finance", symbol: "PARA" },
          { name: "Acala", symbol: "ACA" },
        ],
      },
      {
        title: "Avalanche-Based Layer 2s",
        color: "neon-red",
        coins: [
          { name: "Shrapnel", symbol: "SHRAP" },
          { name: "Dexalot", symbol: "ALOT" },
          { name: "Subnet-based L2s", symbol: "Various tokens" },
          { name: "Beam", symbol: "BEAM" },
          { name: "Landslide", symbol: "LSD" },
        ],
      },
      {
        title: "Cardano-Based Layer 2s",
        color: "neon-blue",
        coins: [
          { name: "Hydra", symbol: "No native coin" },
          { name: "Milkomeda C1", symbol: "MilkADA" },
          { name: "Orbis", symbol: "TBA" },
          { name: "Midnight", symbol: "DUST" },
          { name: "Paima Engine", symbol: "No native coin" },
        ],
      },
      {
        title: "XRP Ledger-Based Layer 2s",
        color: "neon-cyan",
        coins: [
          { name: "Evernode", symbol: "EVR" },
          { name: "Hooks", symbol: "No native coin" },
          { name: "Xahau", symbol: "XAH" },
          { name: "XRPL EVM", symbol: "TBA" },
          { name: "Coreum", symbol: "CORE" },
        ],
      },
      {
        title: "Algorand-Based Layer 2s",
        color: "neon-teal",
        coins: [
          { name: "Folks Finance", symbol: "FOLKS" },
          { name: "AlgoFi", symbol: "ALGO (used natively)" },
          { name: "Tinyman", symbol: "TINY" },
          { name: "Pact", symbol: "PACT" },
          { name: "HumbleSwap", symbol: "HMBL" },
        ],
      },
      {
        title: "Other Layer 1s with L2s",
        color: "neon-gold",
        coins: [
          { name: "Fuel Network (Modular L2)", symbol: "FUEL" },
          { name: "Brevis", symbol: "TBA" },
          { name: "Rome Protocol", symbol: "TBA" },
          { name: "Hana Network", symbol: "HANA" },
          { name: "Cysic", symbol: "CYS" },
        ],
      },
    ];
    function i() {
      let [a, i] = (0, c.useState)(""),
        j = h
          .map((b) => {
            let c = b.coins.filter(
              (b) =>
                b.name.toLowerCase().includes(a.toLowerCase()) ||
                b.symbol.toLowerCase().includes(a.toLowerCase()),
            );
            return { ...b, coins: c };
          })
          .filter((a) => a.coins.length > 0);
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
                  children: "Layer-2 Scaling Solutions Encyclopedia",
                }),
                (0, b.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "A comprehensive, curated list of Layer-2 solutions across various blockchain ecosystems. Layer-2s are protocols built on top of base-layer blockchains (like Bitcoin or Ethereum) to provide faster transactions and lower fees.",
                }),
                (0, b.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, b.jsx)(e.Input, {
                    type: "text",
                    placeholder: "Search all L2 solutions...",
                    value: a,
                    onChange: (a) => i(a.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, b.jsx)("div", {
                  className: "w-full space-y-12 mt-8",
                  children: j.map((a) =>
                    (0, b.jsxs)(
                      "div",
                      {
                        className: "info-table-card",
                        children: [
                          (0, b.jsx)("h2", {
                            className: `text-2xl font-bold mb-4 ${a.color}`,
                            children: a.title,
                          }),
                          (0, b.jsxs)("table", {
                            className: "info-table w-full",
                            children: [
                              (0, b.jsx)("thead", {
                                children: (0, b.jsxs)("tr", {
                                  children: [
                                    (0, b.jsx)("th", { children: "Name" }),
                                    (0, b.jsx)("th", {
                                      children: "Symbol / Token",
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)("tbody", {
                                children: a.coins.map((a) =>
                                  (0, b.jsxs)(
                                    "tr",
                                    {
                                      className: "hover:bg-white/5",
                                      children: [
                                        (0, b.jsx)("td", {
                                          className: "font-bold",
                                          children: a.name,
                                        }),
                                        (0, b.jsx)("td", {
                                          className: "text-gray-300",
                                          children: a.symbol,
                                        }),
                                      ],
                                    },
                                    a.name,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      a.title,
                    ),
                  ),
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

//# sourceMappingURL=_66e3b7e0._.js.map
