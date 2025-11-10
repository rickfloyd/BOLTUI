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
  40777,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(38246),
      d = a.i(18894);
    function e() {
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)(d.Header, {}),
          (0, b.jsx)("main", {
            className: "dashboard-grid",
            children: (0, b.jsxs)("section", {
              className: "center-content",
              children: [
                (0, b.jsxs)("div", {
                  className: "flex justify-between items-center w-full",
                  children: [
                    (0, b.jsx)(c.default, {
                      href: "/us-compliance",
                      className: "info-frame compliant",
                      children: "U.S. Compliant",
                    }),
                    (0, b.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, b.jsx)("h1", {
                          className: "text-3xl font-bold neon-text",
                          children: "Welcome to Quantum CyberVision",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-lg text-gray-300",
                          children:
                            "Your next-generation market analysis dashboard.",
                        }),
                      ],
                    }),
                    (0, b.jsxs)("div", {
                      className: "flex gap-4",
                      children: [
                        (0, b.jsx)(c.default, {
                          href: "/policies",
                          className: "info-frame policies",
                          children: "Policies",
                        }),
                        (0, b.jsx)(c.default, {
                          href: "/compare-prices",
                          className: "info-frame policies",
                          children: "Compare Prices",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "view-switcher",
                  children: [
                    (0, b.jsx)(c.default, {
                      href: "/impact",
                      className: "view-button neon-cyan",
                      children: "Impact",
                    }),
                    (0, b.jsx)(c.default, {
                      href: "/simple-view",
                      className: "view-button neon-pink",
                      children: "Simple View",
                    }),
                    (0, b.jsx)(c.default, {
                      href: "/hyper",
                      className: "view-button view-button-hyper",
                      children: "HYPER VIEW",
                    }),
                    (0, b.jsx)(c.default, {
                      href: "/custom-view",
                      className: "view-button neon-orange",
                      children: "Custom View",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.s(["default", () => e]);
  },
];

//# sourceMappingURL=_866b4c13._.js.map
