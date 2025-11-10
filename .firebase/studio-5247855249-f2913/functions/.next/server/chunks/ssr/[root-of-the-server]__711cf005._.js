module.exports = [
  10555,
  (a) => {
    a.v({
      className: "ibm_plex_sans_95c0f32e-module__y9P6Ea__className",
      variable: "ibm_plex_sans_95c0f32e-module__y9P6Ea__variable",
    });
  },
  61318,
  (a) => {
    a.v({
      className: "cinzel_1d341ded-module__wqg8Oa__className",
      variable: "cinzel_1d341ded-module__wqg8Oa__variable",
    });
  },
  4849,
  (a) => {
    "use strict";
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/ui/toaster.tsx <module evaluation>",
      "Toaster",
    );
    a.s(["Toaster", 0, b]);
  },
  42432,
  (a) => {
    "use strict";
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/ui/toaster.tsx",
      "Toaster",
    );
    a.s(["Toaster", 0, b]);
  },
  48450,
  (a) => {
    "use strict";
    a.i(4849);
    var b = a.i(42432);
    a.n(b);
  },
  27572,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(10555);
    let d = {
      className: c.default.className,
      style: {
        fontFamily: "'IBM Plex Sans', 'IBM Plex Sans Fallback'",
        fontStyle: "normal",
      },
    };
    null != c.default.variable && (d.variable = c.default.variable);
    var e = a.i(61318);
    let f = {
      className: e.default.className,
      style: { fontFamily: "'Cinzel', 'Cinzel Fallback'", fontStyle: "normal" },
    };
    null != e.default.variable && (f.variable = e.default.variable);
    var g = a.i(48450);
    function h({ children: a }) {
      return (0, b.jsxs)("html", {
        lang: "en",
        children: [
          (0, b.jsx)("head", {
            children: (0, b.jsx)("link", {
              rel: "stylesheet",
              href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
            }),
          }),
          (0, b.jsxs)("body", {
            className: `${d.variable} ${f.variable} font-sans font-bold`,
            children: [a, (0, b.jsx)(g.Toaster, {})],
          }),
        ],
      });
    }
    a.s(
      [
        "default",
        () => h,
        "metadata",
        0,
        {
          title: "Quantum CyberVision Dashboard",
          description: "A next-generation market analysis dashboard.",
        },
      ],
      27572,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__711cf005._.js.map
