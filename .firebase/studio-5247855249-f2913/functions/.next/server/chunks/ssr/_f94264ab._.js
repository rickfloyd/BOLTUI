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
  3688,
  (a) => {
    "use strict";
    var b = a.i(72131),
      c = a.i(72752);
    function d(a) {
      let [d, e] = b.useState(void 0);
      return (
        (0, c.useLayoutEffect)(() => {
          if (a) {
            e({ width: a.offsetWidth, height: a.offsetHeight });
            let b = new ResizeObserver((b) => {
              let c, d;
              if (!Array.isArray(b) || !b.length) return;
              let f = b[0];
              if ("borderBoxSize" in f) {
                let a = f.borderBoxSize,
                  b = Array.isArray(a) ? a[0] : a;
                ((c = b.inlineSize), (d = b.blockSize));
              } else ((c = a.offsetWidth), (d = a.offsetHeight));
              e({ width: c, height: d });
            });
            return (b.observe(a, { box: "border-box" }), () => b.unobserve(a));
          }
          e(void 0);
        }, [a]),
        d
      );
    }
    a.s(["useSize", () => d]);
  },
  77994,
  (a) => {
    "use strict";
    var b = a.i(72131);
    function c(a) {
      let c = b.useRef({ value: a, previous: a });
      return b.useMemo(
        () => (
          c.current.value !== a &&
            ((c.current.previous = c.current.value), (c.current.value = a)),
          c.current.previous
        ),
        [a],
      );
    }
    a.s(["usePrevious", () => c]);
  },
  70430,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(30553),
      e = c.forwardRef((a, c) =>
        (0, b.jsx)(d.Primitive.label, {
          ...a,
          ref: c,
          onMouseDown: (b) => {
            b.target.closest("button, input, select, textarea") ||
              (a.onMouseDown?.(b),
              !b.defaultPrevented && b.detail > 1 && b.preventDefault());
          },
        }),
      );
    e.displayName = "Label";
    var f = a.i(187),
      g = a.i(68114);
    let h = (0, f.cva)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      ),
      i = c.forwardRef(({ className: a, ...c }, d) =>
        (0, b.jsx)(e, { ref: d, className: (0, g.cn)(h(), a), ...c }),
      );
    ((i.displayName = e.displayName), a.s(["Label", () => i], 70430));
  },
  58805,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(99570),
      f = a.i(7554),
      g = a.i(70121),
      h = a.i(50104),
      i = a.i(25152),
      j = a.i(77994),
      k = a.i(3688),
      l = a.i(30553),
      m = "Switch",
      [n, o] = (0, h.createContextScope)(m),
      [p, q] = n(m),
      r = c.forwardRef((a, d) => {
        let {
            __scopeSwitch: e,
            name: h,
            checked: j,
            defaultChecked: k,
            required: m,
            disabled: n,
            value: o = "on",
            onCheckedChange: q,
            form: r,
            ...s
          } = a,
          [t, w] = c.useState(null),
          x = (0, g.useComposedRefs)(d, (a) => w(a)),
          y = c.useRef(!1),
          z = !t || r || !!t.closest("form"),
          [A = !1, B] = (0, i.useControllableState)({
            prop: j,
            defaultProp: k,
            onChange: q,
          });
        return (0, b.jsxs)(p, {
          scope: e,
          checked: A,
          disabled: n,
          children: [
            (0, b.jsx)(l.Primitive.button, {
              type: "button",
              role: "switch",
              "aria-checked": A,
              "aria-required": m,
              "data-state": v(A),
              "data-disabled": n ? "" : void 0,
              disabled: n,
              value: o,
              ...s,
              ref: x,
              onClick: (0, f.composeEventHandlers)(a.onClick, (a) => {
                (B((a) => !a),
                  z &&
                    ((y.current = a.isPropagationStopped()),
                    y.current || a.stopPropagation()));
              }),
            }),
            z &&
              (0, b.jsx)(u, {
                control: t,
                bubbles: !y.current,
                name: h,
                value: o,
                checked: A,
                required: m,
                disabled: n,
                form: r,
                style: { transform: "translateX(-100%)" },
              }),
          ],
        });
      });
    r.displayName = m;
    var s = "SwitchThumb",
      t = c.forwardRef((a, c) => {
        let { __scopeSwitch: d, ...e } = a,
          f = q(s, d);
        return (0, b.jsx)(l.Primitive.span, {
          "data-state": v(f.checked),
          "data-disabled": f.disabled ? "" : void 0,
          ...e,
          ref: c,
        });
      });
    t.displayName = s;
    var u = (a) => {
      let { control: d, checked: e, bubbles: f = !0, ...g } = a,
        h = c.useRef(null),
        i = (0, j.usePrevious)(e),
        l = (0, k.useSize)(d);
      return (
        c.useEffect(() => {
          let a = h.current,
            b = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "checked",
            ).set;
          if (i !== e && b) {
            let c = new Event("click", { bubbles: f });
            (b.call(a, e), a.dispatchEvent(c));
          }
        }, [i, e, f]),
        (0, b.jsx)("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: e,
          ...g,
          tabIndex: -1,
          ref: h,
          style: {
            ...a.style,
            ...l,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    };
    function v(a) {
      return a ? "checked" : "unchecked";
    }
    var w = a.i(68114);
    let x = c.forwardRef(({ className: a, ...c }, d) =>
      (0, b.jsx)(r, {
        className: (0, w.cn)(
          "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          a,
        ),
        ...c,
        ref: d,
        children: (0, b.jsx)(t, {
          className: (0, w.cn)(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          ),
        }),
      }),
    );
    x.displayName = r.displayName;
    var y = a.i(70430),
      z = a.i(66718);
    function A() {
      let [a, f] = (0, c.useState)("Connection status will appear here."),
        [g, h] = (0, c.useState)(!1),
        [i, j] = (0, c.useState)(!1),
        k = (0, c.useRef)(null);
      async function l() {
        try {
          f("🔍 Scanning for nearby Bluetooth devices...");
          let a = await navigator.bluetooth.requestDevice({
            acceptAllDevices: !0,
            optionalServices: [
              "battery_service",
              "device_information",
              "generic_access",
            ],
          });
          h(!0);
          let b = `✅ Connected to: <b>${a.name || "Unknown Device"}</b><br />ID: ${a.id}`;
          if (
            (f(b),
            i &&
              (localStorage.setItem("trustedDeviceId", a.id),
              (b += `<br />💾 This device is now trusted for auto-pairing.`),
              f(b)),
            (b +=
              '<br /><span style="color:#ff007f;">Attempting to access device info...</span>'),
            f(b),
            !a.gatt)
          )
            return void f("GATT server not found on this device.");
          let c = await a.gatt.connect();
          try {
            let a = await c.getPrimaryService("battery_service"),
              d = await a.getCharacteristic("battery_level"),
              e = (await d.readValue()).getUint8(0);
            ((b += `<br />🔋 Battery: <span class="font-numeric">${e}%</span>`),
              f(b));
          } catch {
            ((b += "<br />🔋 Battery info not available."), f(b));
          }
          try {
            let a = await c.getPrimaryService("device_information"),
              d = await a.getCharacteristic("manufacturer_name_string"),
              e = await d.readValue(),
              g = new TextDecoder().decode(e);
            ((b += `<br />🏭 Manufacturer: ${g}`), f(b));
          } catch {
            ((b += "<br />ℹ️ Device info unavailable."), f(b));
          }
        } catch (a) {
          (console.error(a), h(!1), f(`❌ Error: ${a.message}`));
        }
      }
      return (
        (0, c.useEffect)(() => {
          ((k.current = new Audio(
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          )),
            (k.current.volume = 0.5));
          let a = localStorage.getItem("trustedDeviceId");
          return (
            "true" === localStorage.getItem("autoPairEnabled") &&
              (j(!0), a && console.log("Auto-pair is enabled for device:", a)),
            () => {
              k.current?.pause();
            }
          );
        }, []),
        (0, b.jsxs)(b.Fragment, {
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
                    children: "🔊 Bluetooth Audio Connector",
                  }),
                  (0, b.jsx)("p", {
                    className: "mt-4 text-lg text-gray-300 max-w-3xl mx-auto",
                    children:
                      "Connect to a device, then use the playback controls. Enable auto-pair to remember a trusted device.",
                  }),
                  (0, b.jsxs)("div", {
                    className:
                      "mt-8 flex flex-col sm:flex-row items-center justify-center gap-6",
                    children: [
                      (0, b.jsx)(e.Button, {
                        onClick: l,
                        className:
                          "px-8 py-6 text-lg rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(255,0,255,0.5)]",
                        children: "🔗 Connect Bluetooth",
                      }),
                      (0, b.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          (0, b.jsx)(x, {
                            id: "autoPairToggle",
                            checked: i,
                            onCheckedChange: (a) => {
                              (j(a),
                                localStorage.setItem(
                                  "autoPairEnabled",
                                  String(a),
                                ),
                                a
                                  ? f(
                                      "Auto-pairing enabled. Connect to a device to set it as trusted.",
                                    )
                                  : (localStorage.removeItem("trustedDeviceId"),
                                    f(
                                      "Auto-pairing disabled and trusted device cleared.",
                                    )));
                            },
                          }),
                          (0, b.jsx)(y.Label, {
                            htmlFor: "autoPairToggle",
                            className: "text-cyan-400",
                            children: "Auto-Pair Trusted Device",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.jsx)("div", {
                    className:
                      "mt-10 p-6 rounded-lg bg-black/50 border border-pink-400/50 text-left text-lg text-cyan-400 min-h-[100px]",
                    dangerouslySetInnerHTML: { __html: a },
                  }),
                  g &&
                    (0, b.jsxs)("div", {
                      className:
                        "mt-8 p-6 rounded-lg bg-black/50 border border-cyan-400/50",
                      children: [
                        (0, b.jsx)("h3", {
                          className: "text-2xl font-bold text-cyan-300 mb-4",
                          children: "Playback Controls",
                        }),
                        (0, b.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row items-center justify-center gap-4",
                          children: [
                            (0, b.jsx)(e.Button, {
                              onClick: () => {
                                k.current &&
                                  (k.current.paused
                                    ? k.current.play()
                                    : k.current.pause());
                              },
                              children: "▶️ Play / Pause",
                            }),
                            (0, b.jsx)(e.Button, {
                              onClick: () => {
                                k.current &&
                                  ((k.current.src =
                                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"),
                                  k.current.play());
                              },
                              children: "⏭ Next",
                            }),
                            (0, b.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, b.jsx)(y.Label, {
                                  htmlFor: "volume",
                                  children: "Volume:",
                                }),
                                (0, b.jsx)(z.Input, {
                                  id: "volume",
                                  type: "range",
                                  min: "0",
                                  max: "1",
                                  step: "0.05",
                                  defaultValue: "0.5",
                                  onChange: (a) => {
                                    k.current &&
                                      (k.current.volume = parseFloat(
                                        a.target.value,
                                      ));
                                  },
                                  className: "w-48",
                                }),
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
        })
      );
    }
    a.s(["default", () => A], 58805);
  },
];

//# sourceMappingURL=_f94264ab._.js.map
