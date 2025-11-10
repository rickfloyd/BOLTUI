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
  91119,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(68114);
    let e = c.forwardRef(({ className: a, ...c }, e) =>
      (0, b.jsx)("div", {
        ref: e,
        className: (0, d.cn)(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          a,
        ),
        ...c,
      }),
    );
    e.displayName = "Card";
    let f = c.forwardRef(({ className: a, ...c }, e) =>
      (0, b.jsx)("div", {
        ref: e,
        className: (0, d.cn)("flex flex-col space-y-1.5 p-6", a),
        ...c,
      }),
    );
    f.displayName = "CardHeader";
    let g = c.forwardRef(({ className: a, ...c }, e) =>
      (0, b.jsx)("h3", {
        ref: e,
        className: (0, d.cn)(
          "text-2xl font-semibold leading-none tracking-tight",
          a,
        ),
        ...c,
      }),
    );
    ((g.displayName = "CardTitle"),
      (c.forwardRef(({ className: a, ...c }, e) =>
        (0, b.jsx)("p", {
          ref: e,
          className: (0, d.cn)("text-sm text-muted-foreground", a),
          ...c,
        }),
      ).displayName = "CardDescription"));
    let h = c.forwardRef(({ className: a, ...c }, e) =>
      (0, b.jsx)("div", { ref: e, className: (0, d.cn)("p-6 pt-0", a), ...c }),
    );
    ((h.displayName = "CardContent"),
      (c.forwardRef(({ className: a, ...c }, e) =>
        (0, b.jsx)("div", {
          ref: e,
          className: (0, d.cn)("flex items-center p-6 pt-0", a),
          ...c,
        }),
      ).displayName = "CardFooter"),
      a.s([
        "Card",
        () => e,
        "CardContent",
        () => h,
        "CardHeader",
        () => f,
        "CardTitle",
        () => g,
      ]));
  },
  64308,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(38246),
      e = a.i(18894),
      f = a.i(91119);
    function g() {
      let [a, g] = (0, c.useState)(null),
        [h, i] = (0, c.useState)(!0),
        [j, k] = (0, c.useState)(null);
      return (
        (0, c.useEffect)(() => {
          (async () => {
            try {
              i(!0);
              let a = await fetch(
                "https://exchange-rates.abstractapi.com/v1/live/?api_key=93e9e4333edd4c83a4c3beae80e26221&base=USD&target=EUR",
              );
              if (!a.ok) throw Error("Failed to fetch exchange rate data.");
              let b = await a.json();
              (g(b), k(null));
            } catch (a) {
              (k(a.message), g(null));
            } finally {
              i(!1);
            }
          })();
        }, []),
        (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(e.Header, {}),
            (0, b.jsx)("main", {
              className: "dashboard-grid",
              children: (0, b.jsxs)("section", {
                className: "center-content",
                children: [
                  (0, b.jsxs)("div", {
                    className: "view-switcher",
                    children: [
                      (0, b.jsx)(d.default, {
                        href: "/",
                        className: "view-button neon-cyan",
                        children: "Charts",
                      }),
                      (0, b.jsx)(d.default, {
                        href: "/simple-view",
                        className: "view-button active neon-pink",
                        children: "Simple View",
                      }),
                      (0, b.jsx)(d.default, {
                        href: "/custom-view",
                        className: "view-button neon-orange",
                        children: "Custom View",
                      }),
                    ],
                  }),
                  (0, b.jsx)("h1", {
                    className: "text-3xl font-bold neon-text text-center mt-8",
                    children: "Simple View",
                  }),
                  (0, b.jsx)("p", {
                    className: "text-lg text-gray-300 text-center",
                    children: "Live foreign exchange rates.",
                  }),
                  (0, b.jsx)("div", {
                    className: "mt-8 max-w-md mx-auto",
                    children: (0, b.jsxs)(f.Card, {
                      className: "data-card cyan-glow",
                      children: [
                        (0, b.jsx)(f.CardHeader, {
                          children: (0, b.jsx)(f.CardTitle, {
                            className: "text-2xl text-center neon-cyan-text",
                            children: "USD to EUR Exchange Rate",
                          }),
                        }),
                        (0, b.jsxs)(f.CardContent, {
                          className: "text-center",
                          children: [
                            h &&
                              (0, b.jsx)("p", {
                                className: "text-lg text-gray-300",
                                children: "Loading rate...",
                              }),
                            j &&
                              (0, b.jsx)("p", {
                                className: "text-lg text-red-400",
                                children: j,
                              }),
                            a &&
                              a.exchange_rates &&
                              (0, b.jsxs)("div", {
                                children: [
                                  (0, b.jsx)("p", {
                                    className:
                                      "text-5xl font-bold font-numeric text-white",
                                    children: a.exchange_rates.EUR.toFixed(4),
                                  }),
                                  (0, b.jsxs)("p", {
                                    className: "text-lg text-gray-400 mt-2",
                                    children: [
                                      "1 ",
                                      a.base,
                                      " = ",
                                      a.exchange_rates.EUR.toFixed(4),
                                      " EUR",
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    a.s(["default", () => g]);
  },
];

//# sourceMappingURL=_f21baa66._.js.map
