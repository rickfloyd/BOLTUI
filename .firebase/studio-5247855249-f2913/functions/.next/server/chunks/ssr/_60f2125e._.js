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
  99570,
  (a) => {
    "use strict";
    let b, c, d;
    var e = a.i(87924),
      f = a.i(72131);
    function g(a, b) {
      if ("function" == typeof a) return a(b);
      null != a && (a.current = b);
    }
    var h =
        (((d = f.forwardRef((a, b) => {
          let { children: c, ...d } = a;
          if (f.isValidElement(c)) {
            var e;
            let a,
              h,
              i =
                ((e = c),
                (h =
                  (a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get) &&
                  "isReactWarning" in a &&
                  a.isReactWarning)
                  ? e.ref
                  : (h =
                        (a = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                        "isReactWarning" in a &&
                        a.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref),
              j = (function (a, b) {
                let c = { ...b };
                for (let d in b) {
                  let e = a[d],
                    f = b[d];
                  /^on[A-Z]/.test(d)
                    ? e && f
                      ? (c[d] = (...a) => {
                          let b = f(...a);
                          return (e(...a), b);
                        })
                      : e && (c[d] = e)
                    : "style" === d
                      ? (c[d] = { ...e, ...f })
                      : "className" === d &&
                        (c[d] = [e, f].filter(Boolean).join(" "));
                }
                return { ...a, ...c };
              })(d, c.props);
            return (
              c.type !== f.Fragment &&
                (j.ref = b
                  ? (function (...a) {
                      return (b) => {
                        let c = !1,
                          d = a.map((a) => {
                            let d = g(a, b);
                            return (c || "function" != typeof d || (c = !0), d);
                          });
                        if (c)
                          return () => {
                            for (let b = 0; b < d.length; b++) {
                              let c = d[b];
                              "function" == typeof c ? c() : g(a[b], null);
                            }
                          };
                      };
                    })(b, i)
                  : i),
              f.cloneElement(c, j)
            );
          }
          return f.Children.count(c) > 1 ? f.Children.only(null) : null;
        })).displayName = "Slot.SlotClone"),
        (b = d),
        ((c = f.forwardRef((a, c) => {
          let { children: d, ...g } = a,
            h = f.Children.toArray(d),
            i = h.find(j);
          if (i) {
            let a = i.props.children,
              d = h.map((b) =>
                b !== i
                  ? b
                  : f.Children.count(a) > 1
                    ? f.Children.only(null)
                    : f.isValidElement(a)
                      ? a.props.children
                      : null,
              );
            return (0, e.jsx)(b, {
              ...g,
              ref: c,
              children: f.isValidElement(a)
                ? f.cloneElement(a, void 0, d)
                : null,
            });
          }
          return (0, e.jsx)(b, { ...g, ref: c, children: d });
        })).displayName = "Slot.Slot"),
        c),
      i = Symbol("radix.slottable");
    function j(a) {
      return (
        f.isValidElement(a) &&
        "function" == typeof a.type &&
        "__radixId" in a.type &&
        a.type.__radixId === i
      );
    }
    var k = a.i(187),
      l = a.i(68114);
    let m = (0, k.cva)(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground hover:bg-primary/90",
              destructive:
                "bg-destructive text-destructive-foreground hover:bg-destructive/90",
              outline:
                "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              secondary:
                "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-foreground",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-10 px-4 py-2",
              sm: "h-9 rounded-md px-3",
              lg: "h-11 rounded-md px-8",
              icon: "h-10 w-10",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        },
      ),
      n = f.forwardRef(
        ({ className: a, variant: b, size: c, asChild: d = !1, ...f }, g) =>
          (0, e.jsx)(d ? h : "button", {
            className: (0, l.cn)(m({ variant: b, size: c, className: a })),
            ref: g,
            ...f,
          }),
      );
    ((n.displayName = "Button"), a.s(["Button", () => n], 99570));
  },
  60072,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(99570);
    function f() {
      let [a, f] = (0, c.useState)([]),
        [g, h] = (0, c.useState)(null),
        [i, j] = (0, c.useState)(!1),
        [k, l] = (0, c.useState)(null),
        m = (a) => {
          switch ((j(!1), a.code)) {
            case 1:
              h(
                "Location access denied. Please enable location permissions in your browser.",
              );
              break;
            case 2:
              h("Location information is unavailable.");
              break;
            case 3:
              h("The location request timed out.");
              break;
            default:
              h("An unknown error occurred while getting your location.");
          }
        },
        n = async (a, b) => {
          try {
            let c = await fetch(`/api/places?lat=${a}&lon=${b}`);
            if (!c.ok) {
              let a = await c.json();
              throw Error(a.error || "Failed to fetch restaurant data.");
            }
            let d = await c.json();
            f(d.results);
          } catch (a) {
            h(a.message);
          } finally {
            j(!1);
          }
        };
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)(d.Header, {}),
          (0, b.jsx)("main", {
            className: "container mx-auto px-4 py-12 text-center",
            children: (0, b.jsxs)("div", {
              className:
                "relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-cyan-400/40 max-w-4xl mx-auto",
              children: [
                (0, b.jsx)("h1", {
                  className:
                    "text-4xl md:text-5xl font-extrabold mt-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]",
                  children: "🍔 Local Food Finder",
                }),
                (0, b.jsx)("p", {
                  className: "mt-4 text-lg text-gray-300 max-w-3xl mx-auto",
                  children:
                    "Click the button below to find restaurants near your current location.",
                }),
                (0, b.jsx)("div", {
                  className: "mt-8",
                  children: (0, b.jsx)(e.Button, {
                    onClick: () => {
                      navigator.geolocation
                        ? (j(!0),
                          h(null),
                          f([]),
                          navigator.geolocation.getCurrentPosition((a) => {
                            let { latitude: b, longitude: c } = a.coords;
                            (l({ lat: b, lon: c }), n(b, c));
                          }, m))
                        : h("Geolocation is not supported by your browser.");
                    },
                    disabled: i,
                    className:
                      "px-8 py-6 text-lg rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(255,0,255,0.5)]",
                    children: i ? "Searching..." : "Find Food Near Me",
                  }),
                }),
                (0, b.jsxs)("div", {
                  className: "mt-10 text-left",
                  children: [
                    i &&
                      k &&
                      (0, b.jsxs)("p", {
                        className: "text-cyan-400 text-center",
                        children: [
                          "📍 Your location: ",
                          k.lat.toFixed(4),
                          ", ",
                          k.lon.toFixed(4),
                          ". Searching for restaurants...",
                        ],
                      }),
                    g &&
                      (0, b.jsx)("p", {
                        className: "text-red-400 text-center text-xl",
                        children: g,
                      }),
                    a.length > 0 &&
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("h2", {
                            className:
                              "text-3xl font-bold mb-6 text-cyan-300 border-b-2 border-cyan-500/30 pb-3",
                            children: "Nearby Restaurants",
                          }),
                          (0, b.jsx)("ul", {
                            className: "space-y-6",
                            children: a.map((a, c) =>
                              (0, b.jsxs)(
                                "li",
                                {
                                  className:
                                    "p-4 rounded-lg bg-black/30 border border-pink-400/50",
                                  children: [
                                    (0, b.jsx)("strong", {
                                      className: "text-xl text-white block",
                                      children: a.name,
                                    }),
                                    (0, b.jsx)("p", {
                                      className: "text-gray-400",
                                      children:
                                        a.vicinity || "Location not available",
                                    }),
                                    (0, b.jsxs)("p", {
                                      className: "text-yellow-400",
                                      children: [
                                        "Rating: ",
                                        a.rating || "N/A",
                                        " ⭐",
                                      ],
                                    }),
                                  ],
                                },
                                c,
                              ),
                            ),
                          }),
                        ],
                      }),
                    !i &&
                      !g &&
                      0 === a.length &&
                      k &&
                      (0, b.jsx)("p", {
                        className: "text-gray-400 text-center text-xl",
                        children: "No restaurants found nearby.",
                      }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.s(["default", () => f]);
  },
];

//# sourceMappingURL=_60f2125e._.js.map
