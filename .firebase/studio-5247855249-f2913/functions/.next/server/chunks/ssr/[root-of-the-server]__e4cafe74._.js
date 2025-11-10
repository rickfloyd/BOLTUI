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
  1269,
  (a) => {
    "use strict";
    var b = a.i(717);
    let c = (...a) =>
      a
        .filter((a, b, c) => !!a && "" !== a.trim() && c.indexOf(a) === b)
        .join(" ")
        .trim();
    var d = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let e = (0, b.forwardRef)(
        (
          {
            color: a = "currentColor",
            size: e = 24,
            strokeWidth: f = 2,
            absoluteStrokeWidth: g,
            className: h = "",
            children: i,
            iconNode: j,
            ...k
          },
          l,
        ) =>
          (0, b.createElement)(
            "svg",
            {
              ref: l,
              ...d,
              width: e,
              height: e,
              stroke: a,
              strokeWidth: g ? (24 * Number(f)) / Number(e) : f,
              className: c("lucide", h),
              ...k,
            },
            [
              ...j.map(([a, c]) => (0, b.createElement)(a, c)),
              ...(Array.isArray(i) ? i : [i]),
            ],
          ),
      ),
      f = (a, d) => {
        let f = (0, b.forwardRef)(({ className: f, ...g }, h) =>
          (0, b.createElement)(e, {
            ref: h,
            iconNode: d,
            className: c(
              `lucide-${a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`,
              f,
            ),
            ...g,
          }),
        );
        return ((f.displayName = `${a}`), f);
      };
    a.s(["default", () => f], 1269);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4cafe74._.js.map
