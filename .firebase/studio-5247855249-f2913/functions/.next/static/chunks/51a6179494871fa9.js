(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  37727,
  75254,
  (e) => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) =>
      e
        .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
        .join(" ")
        .trim();
    var n = {
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
    let o = (0, t.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: o = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: i,
            className: a = "",
            children: l,
            iconNode: u,
            ...c
          },
          d,
        ) =>
          (0, t.createElement)(
            "svg",
            {
              ref: d,
              ...n,
              width: o,
              height: o,
              stroke: e,
              strokeWidth: i ? (24 * Number(s)) / Number(o) : s,
              className: r("lucide", a),
              ...c,
            },
            [
              ...u.map(([e, r]) => (0, t.createElement)(e, r)),
              ...(Array.isArray(l) ? l : [l]),
            ],
          ),
      ),
      s = (e, n) => {
        let s = (0, t.forwardRef)(({ className: s, ...i }, a) =>
          (0, t.createElement)(o, {
            ref: a,
            iconNode: n,
            className: r(
              `lucide-${e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`,
              s,
            ),
            ...i,
          }),
        );
        return ((s.displayName = `${e}`), s);
      };
    e.s(["default", () => s], 75254);
    let i = s("X", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    e.s(["X", () => i], 37727);
  },
  7670,
  (e) => {
    "use strict";
    function t() {
      for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
        (e = arguments[r]) &&
          (t = (function e(t) {
            var r,
              n,
              o = "";
            if ("string" == typeof t || "number" == typeof t) o += t;
            else if ("object" == typeof t)
              if (Array.isArray(t)) {
                var s = t.length;
                for (r = 0; r < s; r++)
                  t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
              } else for (n in t) t[n] && (o && (o += " "), (o += n));
            return o;
          })(e)) &&
          (n && (n += " "), (n += t));
      return n;
    }
    e.s(["clsx", () => t, "default", 0, t]);
  },
  25913,
  (e) => {
    "use strict";
    var t = e.i(7670);
    let r = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
      n = t.clsx;
    e.s([
      "cva",
      0,
      (e, t) => (o) => {
        var s;
        if ((null == t ? void 0 : t.variants) == null)
          return n(
            e,
            null == o ? void 0 : o.class,
            null == o ? void 0 : o.className,
          );
        let { variants: i, defaultVariants: a } = t,
          l = Object.keys(i).map((e) => {
            let t = null == o ? void 0 : o[e],
              n = null == a ? void 0 : a[e];
            if (null === t) return null;
            let s = r(t) || r(n);
            return i[e][s];
          }),
          u =
            o &&
            Object.entries(o).reduce((e, t) => {
              let [r, n] = t;
              return (void 0 === n || (e[r] = n), e);
            }, {});
        return n(
          e,
          l,
          null == t || null == (s = t.compoundVariants)
            ? void 0
            : s.reduce((e, t) => {
                let { class: r, className: n, ...o } = t;
                return Object.entries(o).every((e) => {
                  let [t, r] = e;
                  return Array.isArray(r)
                    ? r.includes({ ...a, ...u }[t])
                    : { ...a, ...u }[t] === r;
                })
                  ? [...e, r, n]
                  : e;
              }, []),
          null == o ? void 0 : o.class,
          null == o ? void 0 : o.className,
        );
      },
    ]);
  },
  81140,
  (e) => {
    "use strict";
    function t(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
      return function (t) {
        if ((e?.(t), !1 === n || !t.defaultPrevented)) return r?.(t);
      };
    }
    e.s(["composeEventHandlers", () => t]);
  },
  20783,
  (e) => {
    "use strict";
    var t = e.i(71645);
    function r(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    function n(...e) {
      return (t) => {
        let n = !1,
          o = e.map((e) => {
            let o = r(e, t);
            return (n || "function" != typeof o || (n = !0), o);
          });
        if (n)
          return () => {
            for (let t = 0; t < o.length; t++) {
              let n = o[t];
              "function" == typeof n ? n() : r(e[t], null);
            }
          };
      };
    }
    function o(...e) {
      return t.useCallback(n(...e), e);
    }
    e.s(["composeRefs", () => n, "useComposedRefs", () => o]);
  },
  30030,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(43476);
    function n(e, o = []) {
      let s = [],
        i = () => {
          let r = s.map((e) => t.createContext(e));
          return function (n) {
            let o = n?.[e] || r;
            return t.useMemo(
              () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
              [n, o],
            );
          };
        };
      return (
        (i.scopeName = e),
        [
          function (n, o) {
            let i = t.createContext(o),
              a = s.length;
            s = [...s, o];
            let l = (n) => {
              let { scope: o, children: s, ...l } = n,
                u = o?.[e]?.[a] || i,
                c = t.useMemo(() => l, Object.values(l));
              return (0, r.jsx)(u.Provider, { value: c, children: s });
            };
            return (
              (l.displayName = n + "Provider"),
              [
                l,
                function (r, s) {
                  let l = s?.[e]?.[a] || i,
                    u = t.useContext(l);
                  if (u) return u;
                  if (void 0 !== o) return o;
                  throw Error(`\`${r}\` must be used within \`${n}\``);
                },
              ]
            );
          },
          (function (...e) {
            let r = e[0];
            if (1 === e.length) return r;
            let n = () => {
              let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
              return function (e) {
                let o = n.reduce((t, { useScope: r, scopeName: n }) => {
                  let o = r(e)[`__scope${n}`];
                  return { ...t, ...o };
                }, {});
                return t.useMemo(() => ({ [`__scope${r.scopeName}`]: o }), [o]);
              };
            };
            return ((n.scopeName = r.scopeName), n);
          })(i, ...o),
        ]
      );
    }
    e.s(["createContextScope", () => n]);
  },
  48425,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(74080),
      n = e.i(20783),
      o = e.i(43476),
      s = t.forwardRef((e, r) => {
        let { children: n, ...s } = e,
          a = t.Children.toArray(n),
          u = a.find(l);
        if (u) {
          let e = u.props.children,
            n = a.map((r) =>
              r !== u
                ? r
                : t.Children.count(e) > 1
                  ? t.Children.only(null)
                  : t.isValidElement(e)
                    ? e.props.children
                    : null,
            );
          return (0, o.jsx)(i, {
            ...s,
            ref: r,
            children: t.isValidElement(e) ? t.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, o.jsx)(i, { ...s, ref: r, children: n });
      });
    s.displayName = "Slot";
    var i = t.forwardRef((e, r) => {
      let { children: o, ...s } = e;
      if (t.isValidElement(o)) {
        var i;
        let e,
          a,
          l =
            ((i = o),
            (a =
              (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning)
              ? i.ref
              : (a =
                    (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? i.props.ref
                : i.props.ref || i.ref),
          u = (function (e, t) {
            let r = { ...t };
            for (let n in t) {
              let o = e[n],
                s = t[n];
              /^on[A-Z]/.test(n)
                ? o && s
                  ? (r[n] = (...e) => {
                      (s(...e), o(...e));
                    })
                  : o && (r[n] = o)
                : "style" === n
                  ? (r[n] = { ...o, ...s })
                  : "className" === n &&
                    (r[n] = [o, s].filter(Boolean).join(" "));
            }
            return { ...e, ...r };
          })(s, o.props);
        return (
          o.type !== t.Fragment && (u.ref = r ? (0, n.composeRefs)(r, l) : l),
          t.cloneElement(o, u)
        );
      }
      return t.Children.count(o) > 1 ? t.Children.only(null) : null;
    });
    i.displayName = "SlotClone";
    var a = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e });
    function l(e) {
      return t.isValidElement(e) && e.type === a;
    }
    var u = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ].reduce((e, r) => {
      let n = t.forwardRef((e, t) => {
        let { asChild: n, ...i } = e,
          a = n ? s : r;
        return (
          "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
          (0, o.jsx)(a, { ...i, ref: t })
        );
      });
      return ((n.displayName = `Primitive.${r}`), { ...e, [r]: n });
    }, {});
    function c(e, t) {
      e && r.flushSync(() => e.dispatchEvent(t));
    }
    e.s(["Primitive", () => u, "dispatchDiscreteCustomEvent", () => c], 48425);
  },
  30207,
  (e) => {
    "use strict";
    var t = e.i(71645);
    function r(e) {
      let r = t.useRef(e);
      return (
        t.useEffect(() => {
          r.current = e;
        }),
        t.useMemo(
          () =>
            (...e) =>
              r.current?.(...e),
          [],
        )
      );
    }
    e.s(["useCallbackRef", () => r]);
  },
  34620,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = globalThis?.document ? t.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", () => r]);
  },
  69340,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(30207);
    function n({ prop: e, defaultProp: n, onChange: o = () => {} }) {
      let [s, i] = (function ({ defaultProp: e, onChange: n }) {
          let o = t.useState(e),
            [s] = o,
            i = t.useRef(s),
            a = (0, r.useCallbackRef)(n);
          return (
            t.useEffect(() => {
              i.current !== s && (a(s), (i.current = s));
            }, [s, i, a]),
            o
          );
        })({ defaultProp: n, onChange: o }),
        a = void 0 !== e,
        l = a ? e : s,
        u = (0, r.useCallbackRef)(o);
      return [
        l,
        t.useCallback(
          (t) => {
            if (a) {
              let r = "function" == typeof t ? t(e) : t;
              r !== e && u(r);
            } else i(t);
          },
          [a, e, i, u],
        ),
      ];
    }
    e.s(["useControllableState", () => n]);
  },
  75830,
  26330,
  74606,
  (e) => {
    "use strict";
    var t,
      r = e.i(71645),
      n = e.i(30030),
      o = e.i(20783),
      s = e.i(43476),
      i = r.forwardRef((e, t) => {
        let { children: n, ...o } = e,
          i = r.Children.toArray(n),
          l = i.find(u);
        if (l) {
          let e = l.props.children,
            n = i.map((t) =>
              t !== l
                ? t
                : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                    ? e.props.children
                    : null,
            );
          return (0, s.jsx)(a, {
            ...o,
            ref: t,
            children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, s.jsx)(a, { ...o, ref: t, children: n });
      });
    i.displayName = "Slot";
    var a = r.forwardRef((e, t) => {
      let { children: n, ...s } = e;
      if (r.isValidElement(n)) {
        var i;
        let e,
          a,
          l =
            ((i = n),
            (a =
              (e = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning)
              ? i.ref
              : (a =
                    (e = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? i.props.ref
                : i.props.ref || i.ref),
          u = (function (e, t) {
            let r = { ...t };
            for (let n in t) {
              let o = e[n],
                s = t[n];
              /^on[A-Z]/.test(n)
                ? o && s
                  ? (r[n] = (...e) => {
                      (s(...e), o(...e));
                    })
                  : o && (r[n] = o)
                : "style" === n
                  ? (r[n] = { ...o, ...s })
                  : "className" === n &&
                    (r[n] = [o, s].filter(Boolean).join(" "));
            }
            return { ...e, ...r };
          })(s, n.props);
        return (
          n.type !== r.Fragment && (u.ref = t ? (0, o.composeRefs)(t, l) : l),
          r.cloneElement(n, u)
        );
      }
      return r.Children.count(n) > 1 ? r.Children.only(null) : null;
    });
    a.displayName = "SlotClone";
    var l = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
    function u(e) {
      return r.isValidElement(e) && e.type === l;
    }
    function c(e) {
      let t = e + "CollectionProvider",
        [a, l] = (0, n.createContextScope)(t),
        [u, c] = a(t, { collectionRef: { current: null }, itemMap: new Map() }),
        d = (e) => {
          let { scope: t, children: n } = e,
            o = r.default.useRef(null),
            i = r.default.useRef(new Map()).current;
          return (0, s.jsx)(u, {
            scope: t,
            itemMap: i,
            collectionRef: o,
            children: n,
          });
        };
      d.displayName = t;
      let f = e + "CollectionSlot",
        p = r.default.forwardRef((e, t) => {
          let { scope: r, children: n } = e,
            a = c(f, r),
            l = (0, o.useComposedRefs)(t, a.collectionRef);
          return (0, s.jsx)(i, { ref: l, children: n });
        });
      p.displayName = f;
      let m = e + "CollectionItemSlot",
        v = "data-radix-collection-item",
        y = r.default.forwardRef((e, t) => {
          let { scope: n, children: a, ...l } = e,
            u = r.default.useRef(null),
            d = (0, o.useComposedRefs)(t, u),
            f = c(m, n);
          return (
            r.default.useEffect(
              () => (
                f.itemMap.set(u, { ref: u, ...l }),
                () => void f.itemMap.delete(u)
              ),
            ),
            (0, s.jsx)(i, { ...{ [v]: "" }, ref: d, children: a })
          );
        });
      return (
        (y.displayName = m),
        [
          { Provider: d, Slot: p, ItemSlot: y },
          function (t) {
            let n = c(e + "CollectionConsumer", t);
            return r.default.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${v}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
              );
            }, [n.collectionRef, n.itemMap]);
          },
          l,
        ]
      );
    }
    e.s(["createCollection", () => c], 75830);
    var d = e.i(81140),
      f = e.i(48425),
      p = e.i(30207),
      m = "dismissableLayer.update",
      v = r.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      }),
      y = r.forwardRef((e, n) => {
        let {
            disableOutsidePointerEvents: i = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onInteractOutside: c,
            onDismiss: y,
            ...w
          } = e,
          g = r.useContext(v),
          [x, b] = r.useState(null),
          C = x?.ownerDocument ?? globalThis?.document,
          [, R] = r.useState({}),
          T = (0, o.useComposedRefs)(n, (e) => b(e)),
          N = Array.from(g.layers),
          [P] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
          j = N.indexOf(P),
          S = x ? N.indexOf(x) : -1,
          D = g.layersWithOutsidePointerEventsDisabled.size > 0,
          O = S >= j,
          L = (function (e, t = globalThis?.document) {
            let n = (0, p.useCallbackRef)(e),
              o = r.useRef(!1),
              s = r.useRef(() => {});
            return (
              r.useEffect(() => {
                let e = (e) => {
                    if (e.target && !o.current) {
                      let r = function () {
                          h("dismissableLayer.pointerDownOutside", n, o, {
                            discrete: !0,
                          });
                        },
                        o = { originalEvent: e };
                      "touch" === e.pointerType
                        ? (t.removeEventListener("click", s.current),
                          (s.current = r),
                          t.addEventListener("click", s.current, { once: !0 }))
                        : r();
                    } else t.removeEventListener("click", s.current);
                    o.current = !1;
                  },
                  r = window.setTimeout(() => {
                    t.addEventListener("pointerdown", e);
                  }, 0);
                return () => {
                  (window.clearTimeout(r),
                    t.removeEventListener("pointerdown", e),
                    t.removeEventListener("click", s.current));
                };
              }, [t, n]),
              { onPointerDownCapture: () => (o.current = !0) }
            );
          })((e) => {
            let t = e.target,
              r = [...g.branches].some((e) => e.contains(t));
            O && !r && (l?.(e), c?.(e), e.defaultPrevented || y?.());
          }, C),
          A = (function (e, t = globalThis?.document) {
            let n = (0, p.useCallbackRef)(e),
              o = r.useRef(!1);
            return (
              r.useEffect(() => {
                let e = (e) => {
                  e.target &&
                    !o.current &&
                    h(
                      "dismissableLayer.focusOutside",
                      n,
                      { originalEvent: e },
                      { discrete: !1 },
                    );
                };
                return (
                  t.addEventListener("focusin", e),
                  () => t.removeEventListener("focusin", e)
                );
              }, [t, n]),
              {
                onFocusCapture: () => (o.current = !0),
                onBlurCapture: () => (o.current = !1),
              }
            );
          })((e) => {
            let t = e.target;
            ![...g.branches].some((e) => e.contains(t)) &&
              (u?.(e), c?.(e), e.defaultPrevented || y?.());
          }, C);
        return (
          !(function (e, t = globalThis?.document) {
            let n = (0, p.useCallbackRef)(e);
            r.useEffect(() => {
              let e = (e) => {
                "Escape" === e.key && n(e);
              };
              return (
                t.addEventListener("keydown", e, { capture: !0 }),
                () => t.removeEventListener("keydown", e, { capture: !0 })
              );
            }, [n, t]);
          })((e) => {
            S === g.layers.size - 1 &&
              (a?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()));
          }, C),
          r.useEffect(() => {
            if (x)
              return (
                i &&
                  (0 === g.layersWithOutsidePointerEventsDisabled.size &&
                    ((t = C.body.style.pointerEvents),
                    (C.body.style.pointerEvents = "none")),
                  g.layersWithOutsidePointerEventsDisabled.add(x)),
                g.layers.add(x),
                E(),
                () => {
                  i &&
                    1 === g.layersWithOutsidePointerEventsDisabled.size &&
                    (C.body.style.pointerEvents = t);
                }
              );
          }, [x, C, i, g]),
          r.useEffect(
            () => () => {
              x &&
                (g.layers.delete(x),
                g.layersWithOutsidePointerEventsDisabled.delete(x),
                E());
            },
            [x, g],
          ),
          r.useEffect(() => {
            let e = () => R({});
            return (
              document.addEventListener(m, e),
              () => document.removeEventListener(m, e)
            );
          }, []),
          (0, s.jsx)(f.Primitive.div, {
            ...w,
            ref: T,
            style: {
              pointerEvents: D ? (O ? "auto" : "none") : void 0,
              ...e.style,
            },
            onFocusCapture: (0, d.composeEventHandlers)(
              e.onFocusCapture,
              A.onFocusCapture,
            ),
            onBlurCapture: (0, d.composeEventHandlers)(
              e.onBlurCapture,
              A.onBlurCapture,
            ),
            onPointerDownCapture: (0, d.composeEventHandlers)(
              e.onPointerDownCapture,
              L.onPointerDownCapture,
            ),
          })
        );
      });
    y.displayName = "DismissableLayer";
    var w = r.forwardRef((e, t) => {
      let n = r.useContext(v),
        i = r.useRef(null),
        a = (0, o.useComposedRefs)(t, i);
      return (
        r.useEffect(() => {
          let e = i.current;
          if (e)
            return (
              n.branches.add(e),
              () => {
                n.branches.delete(e);
              }
            );
        }, [n.branches]),
        (0, s.jsx)(f.Primitive.div, { ...e, ref: a })
      );
    });
    function E() {
      let e = new CustomEvent(m);
      document.dispatchEvent(e);
    }
    function h(e, t, r, { discrete: n }) {
      let o = r.originalEvent.target,
        s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
      (t && o.addEventListener(e, t, { once: !0 }),
        n ? (0, f.dispatchDiscreteCustomEvent)(o, s) : o.dispatchEvent(s));
    }
    ((w.displayName = "DismissableLayerBranch"),
      e.s(
        ["Branch", () => w, "DismissableLayer", () => y, "Root", () => y],
        26330,
      ));
    var g = e.i(74080),
      x = e.i(34620),
      b = r.forwardRef((e, t) => {
        let { container: n, ...o } = e,
          [i, a] = r.useState(!1);
        (0, x.useLayoutEffect)(() => a(!0), []);
        let l = n || (i && globalThis?.document?.body);
        return l
          ? g.default.createPortal(
              (0, s.jsx)(f.Primitive.div, { ...o, ref: t }),
              l,
            )
          : null;
      });
    ((b.displayName = "Portal"), e.s(["Portal", () => b], 74606));
  },
  59411,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(48425),
      n = e.i(43476),
      o = t.forwardRef((e, t) =>
        (0, n.jsx)(r.Primitive.span, {
          ...e,
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style,
          },
        }),
      );
    ((o.displayName = "VisuallyHidden"), e.s(["VisuallyHidden", () => o]));
  },
  96626,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(20783),
      n = e.i(34620),
      o = (e) => {
        var o;
        let i,
          a,
          { present: l, children: u } = e,
          c = (function (e) {
            var r, o;
            let [i, a] = t.useState(),
              l = t.useRef({}),
              u = t.useRef(e),
              c = t.useRef("none"),
              [d, f] =
                ((r = e ? "mounted" : "unmounted"),
                (o = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                t.useReducer((e, t) => o[e][t] ?? e, r));
            return (
              t.useEffect(() => {
                let e = s(l.current);
                c.current = "mounted" === d ? e : "none";
              }, [d]),
              (0, n.useLayoutEffect)(() => {
                let t = l.current,
                  r = u.current;
                if (r !== e) {
                  let n = c.current,
                    o = s(t);
                  (e
                    ? f("MOUNT")
                    : "none" === o || t?.display === "none"
                      ? f("UNMOUNT")
                      : r && n !== o
                        ? f("ANIMATION_OUT")
                        : f("UNMOUNT"),
                    (u.current = e));
                }
              }, [e, f]),
              (0, n.useLayoutEffect)(() => {
                if (i) {
                  let e,
                    t = i.ownerDocument.defaultView ?? window,
                    r = (r) => {
                      let n = s(l.current).includes(r.animationName);
                      if (
                        r.target === i &&
                        n &&
                        (f("ANIMATION_END"), !u.current)
                      ) {
                        let r = i.style.animationFillMode;
                        ((i.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === i.style.animationFillMode &&
                              (i.style.animationFillMode = r);
                          })));
                      }
                    },
                    n = (e) => {
                      e.target === i && (c.current = s(l.current));
                    };
                  return (
                    i.addEventListener("animationstart", n),
                    i.addEventListener("animationcancel", r),
                    i.addEventListener("animationend", r),
                    () => {
                      (t.clearTimeout(e),
                        i.removeEventListener("animationstart", n),
                        i.removeEventListener("animationcancel", r),
                        i.removeEventListener("animationend", r));
                    }
                  );
                }
                f("ANIMATION_END");
              }, [i, f]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(d),
                ref: t.useCallback((e) => {
                  (e && (l.current = getComputedStyle(e)), a(e));
                }, []),
              }
            );
          })(l),
          d =
            "function" == typeof u
              ? u({ present: c.isPresent })
              : t.Children.only(u),
          f = (0, r.useComposedRefs)(
            c.ref,
            ((o = d),
            (a =
              (i = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
              "isReactWarning" in i &&
              i.isReactWarning)
              ? o.ref
              : (a =
                    (i = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                    "isReactWarning" in i &&
                    i.isReactWarning)
                ? o.props.ref
                : o.props.ref || o.ref),
          );
        return "function" == typeof u || c.isPresent
          ? t.cloneElement(d, { ref: f })
          : null;
      };
    function s(e) {
      return e?.animationName || "none";
    }
    ((o.displayName = "Presence"), e.s(["Presence", () => o]));
  },
  77855,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(74080),
      o = e.i(81140),
      s = e.i(20783),
      i = e.i(75830),
      a = e.i(30030),
      l = e.i(26330),
      u = e.i(74606),
      c = e.i(96626),
      d = e.i(48425),
      f = e.i(30207),
      p = e.i(69340),
      m = e.i(34620),
      v = e.i(59411),
      y = "ToastProvider",
      [w, E, h] = (0, i.createCollection)("Toast"),
      [g, x] = (0, a.createContextScope)("Toast", [h]),
      [b, C] = g(y),
      R = (e) => {
        let {
            __scopeToast: n,
            label: o = "Notification",
            duration: s = 5e3,
            swipeDirection: i = "right",
            swipeThreshold: a = 50,
            children: l,
          } = e,
          [u, c] = r.useState(null),
          [d, f] = r.useState(0),
          p = r.useRef(!1),
          m = r.useRef(!1);
        return (
          o.trim() ||
            console.error(
              `Invalid prop \`label\` supplied to \`${y}\`. Expected non-empty \`string\`.`,
            ),
          (0, t.jsx)(w.Provider, {
            scope: n,
            children: (0, t.jsx)(b, {
              scope: n,
              label: o,
              duration: s,
              swipeDirection: i,
              swipeThreshold: a,
              toastCount: d,
              viewport: u,
              onViewportChange: c,
              onToastAdd: r.useCallback(() => f((e) => e + 1), []),
              onToastRemove: r.useCallback(() => f((e) => e - 1), []),
              isFocusedToastEscapeKeyDownRef: p,
              isClosePausedRef: m,
              children: l,
            }),
          })
        );
      };
    R.displayName = y;
    var T = "ToastViewport",
      N = ["F8"],
      P = "toast.viewportPause",
      j = "toast.viewportResume",
      S = r.forwardRef((e, n) => {
        let {
            __scopeToast: o,
            hotkey: i = N,
            label: a = "Notifications ({hotkey})",
            ...u
          } = e,
          c = C(T, o),
          f = E(o),
          p = r.useRef(null),
          m = r.useRef(null),
          v = r.useRef(null),
          y = r.useRef(null),
          h = (0, s.useComposedRefs)(n, y, c.onViewportChange),
          g = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          x = c.toastCount > 0;
        (r.useEffect(() => {
          let e = (e) => {
            0 !== i.length &&
              i.every((t) => e[t] || e.code === t) &&
              y.current?.focus();
          };
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [i]),
          r.useEffect(() => {
            let e = p.current,
              t = y.current;
            if (x && e && t) {
              let r = () => {
                  if (!c.isClosePausedRef.current) {
                    let e = new CustomEvent(P);
                    (t.dispatchEvent(e), (c.isClosePausedRef.current = !0));
                  }
                },
                n = () => {
                  if (c.isClosePausedRef.current) {
                    let e = new CustomEvent(j);
                    (t.dispatchEvent(e), (c.isClosePausedRef.current = !1));
                  }
                },
                o = (t) => {
                  e.contains(t.relatedTarget) || n();
                },
                s = () => {
                  e.contains(document.activeElement) || n();
                };
              return (
                e.addEventListener("focusin", r),
                e.addEventListener("focusout", o),
                e.addEventListener("pointermove", r),
                e.addEventListener("pointerleave", s),
                window.addEventListener("blur", r),
                window.addEventListener("focus", n),
                () => {
                  (e.removeEventListener("focusin", r),
                    e.removeEventListener("focusout", o),
                    e.removeEventListener("pointermove", r),
                    e.removeEventListener("pointerleave", s),
                    window.removeEventListener("blur", r),
                    window.removeEventListener("focus", n));
                }
              );
            }
          }, [x, c.isClosePausedRef]));
        let b = r.useCallback(
          ({ tabbingDirection: e }) => {
            let t = f().map((t) => {
              let r = t.ref.current,
                n = [
                  r,
                  ...(function (e) {
                    let t = [],
                      r = document.createTreeWalker(
                        e,
                        NodeFilter.SHOW_ELEMENT,
                        {
                          acceptNode: (e) => {
                            let t =
                              "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t
                              ? NodeFilter.FILTER_SKIP
                              : e.tabIndex >= 0
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_SKIP;
                          },
                        },
                      );
                    for (; r.nextNode(); ) t.push(r.currentNode);
                    return t;
                  })(r),
                ];
              return "forwards" === e ? n : n.reverse();
            });
            return ("forwards" === e ? t.reverse() : t).flat();
          },
          [f],
        );
        return (
          r.useEffect(() => {
            let e = y.current;
            if (e) {
              let t = (t) => {
                let r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  let r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void m.current?.focus();
                  let o = b({ tabbingDirection: n ? "backwards" : "forwards" }),
                    s = o.findIndex((e) => e === r);
                  z(o.slice(s + 1))
                    ? t.preventDefault()
                    : n
                      ? m.current?.focus()
                      : v.current?.focus();
                }
              };
              return (
                e.addEventListener("keydown", t),
                () => e.removeEventListener("keydown", t)
              );
            }
          }, [f, b]),
          (0, t.jsxs)(l.Branch, {
            ref: p,
            role: "region",
            "aria-label": a.replace("{hotkey}", g),
            tabIndex: -1,
            style: { pointerEvents: x ? void 0 : "none" },
            children: [
              x &&
                (0, t.jsx)(O, {
                  ref: m,
                  onFocusFromOutsideViewport: () => {
                    z(b({ tabbingDirection: "forwards" }));
                  },
                }),
              (0, t.jsx)(w.Slot, {
                scope: o,
                children: (0, t.jsx)(d.Primitive.ol, {
                  tabIndex: -1,
                  ...u,
                  ref: h,
                }),
              }),
              x &&
                (0, t.jsx)(O, {
                  ref: v,
                  onFocusFromOutsideViewport: () => {
                    z(b({ tabbingDirection: "backwards" }));
                  },
                }),
            ],
          })
        );
      });
    S.displayName = T;
    var D = "ToastFocusProxy",
      O = r.forwardRef((e, r) => {
        let { __scopeToast: n, onFocusFromOutsideViewport: o, ...s } = e,
          i = C(D, n);
        return (0, t.jsx)(v.VisuallyHidden, {
          "aria-hidden": !0,
          tabIndex: 0,
          ...s,
          ref: r,
          style: { position: "fixed" },
          onFocus: (e) => {
            let t = e.relatedTarget;
            i.viewport?.contains(t) || o();
          },
        });
      });
    O.displayName = D;
    var L = "Toast",
      A = r.forwardRef((e, r) => {
        let {
            forceMount: n,
            open: s,
            defaultOpen: i,
            onOpenChange: a,
            ...l
          } = e,
          [u = !0, d] = (0, p.useControllableState)({
            prop: s,
            defaultProp: i,
            onChange: a,
          });
        return (0, t.jsx)(c.Presence, {
          present: n || u,
          children: (0, t.jsx)(I, {
            open: u,
            ...l,
            ref: r,
            onClose: () => d(!1),
            onPause: (0, f.useCallbackRef)(e.onPause),
            onResume: (0, f.useCallbackRef)(e.onResume),
            onSwipeStart: (0, o.composeEventHandlers)(e.onSwipeStart, (e) => {
              e.currentTarget.setAttribute("data-swipe", "start");
            }),
            onSwipeMove: (0, o.composeEventHandlers)(e.onSwipeMove, (e) => {
              let { x: t, y: r } = e.detail.delta;
              (e.currentTarget.setAttribute("data-swipe", "move"),
                e.currentTarget.style.setProperty(
                  "--radix-toast-swipe-move-x",
                  `${t}px`,
                ),
                e.currentTarget.style.setProperty(
                  "--radix-toast-swipe-move-y",
                  `${r}px`,
                ));
            }),
            onSwipeCancel: (0, o.composeEventHandlers)(e.onSwipeCancel, (e) => {
              (e.currentTarget.setAttribute("data-swipe", "cancel"),
                e.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-x",
                ),
                e.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-y",
                ),
                e.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-end-x",
                ),
                e.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-end-y",
                ));
            }),
            onSwipeEnd: (0, o.composeEventHandlers)(e.onSwipeEnd, (e) => {
              let { x: t, y: r } = e.detail.delta;
              (e.currentTarget.setAttribute("data-swipe", "end"),
                e.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-x",
                ),
                e.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-y",
                ),
                e.currentTarget.style.setProperty(
                  "--radix-toast-swipe-end-x",
                  `${t}px`,
                ),
                e.currentTarget.style.setProperty(
                  "--radix-toast-swipe-end-y",
                  `${r}px`,
                ),
                d(!1));
            }),
          }),
        });
      });
    A.displayName = L;
    var [k, M] = g(L, { onClose() {} }),
      I = r.forwardRef((e, i) => {
        let {
            __scopeToast: a,
            type: u = "foreground",
            duration: c,
            open: p,
            onClose: m,
            onEscapeKeyDown: v,
            onPause: y,
            onResume: E,
            onSwipeStart: h,
            onSwipeMove: g,
            onSwipeCancel: x,
            onSwipeEnd: b,
            ...R
          } = e,
          T = C(L, a),
          [N, S] = r.useState(null),
          D = (0, s.useComposedRefs)(i, (e) => S(e)),
          O = r.useRef(null),
          A = r.useRef(null),
          M = c || T.duration,
          I = r.useRef(0),
          _ = r.useRef(M),
          W = r.useRef(0),
          { onToastAdd: V, onToastRemove: H } = T,
          U = (0, f.useCallbackRef)(() => {
            (N?.contains(document.activeElement) && T.viewport?.focus(), m());
          }),
          $ = r.useCallback(
            (e) => {
              e &&
                e !== 1 / 0 &&
                (window.clearTimeout(W.current),
                (I.current = new Date().getTime()),
                (W.current = window.setTimeout(U, e)));
            },
            [U],
          );
        (r.useEffect(() => {
          let e = T.viewport;
          if (e) {
            let t = () => {
                ($(_.current), E?.());
              },
              r = () => {
                let e = new Date().getTime() - I.current;
                ((_.current = _.current - e),
                  window.clearTimeout(W.current),
                  y?.());
              };
            return (
              e.addEventListener(P, r),
              e.addEventListener(j, t),
              () => {
                (e.removeEventListener(P, r), e.removeEventListener(j, t));
              }
            );
          }
        }, [T.viewport, M, y, E, $]),
          r.useEffect(() => {
            p && !T.isClosePausedRef.current && $(M);
          }, [p, M, T.isClosePausedRef, $]),
          r.useEffect(() => (V(), () => H()), [V, H]));
        let K = r.useMemo(
          () =>
            N
              ? (function e(t) {
                  let r = [];
                  return (
                    Array.from(t.childNodes).forEach((t) => {
                      var n;
                      if (
                        (t.nodeType === t.TEXT_NODE &&
                          t.textContent &&
                          r.push(t.textContent),
                        (n = t).nodeType === n.ELEMENT_NODE)
                      ) {
                        let n =
                            t.ariaHidden ||
                            t.hidden ||
                            "none" === t.style.display,
                          o = "" === t.dataset.radixToastAnnounceExclude;
                        if (!n)
                          if (o) {
                            let e = t.dataset.radixToastAnnounceAlt;
                            e && r.push(e);
                          } else r.push(...e(t));
                      }
                    }),
                    r
                  );
                })(N)
              : null,
          [N],
        );
        return T.viewport
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                K &&
                  (0, t.jsx)(F, {
                    __scopeToast: a,
                    role: "status",
                    "aria-live": "foreground" === u ? "assertive" : "polite",
                    "aria-atomic": !0,
                    children: K,
                  }),
                (0, t.jsx)(k, {
                  scope: a,
                  onClose: U,
                  children: n.createPortal(
                    (0, t.jsx)(w.ItemSlot, {
                      scope: a,
                      children: (0, t.jsx)(l.Root, {
                        asChild: !0,
                        onEscapeKeyDown: (0, o.composeEventHandlers)(v, () => {
                          (T.isFocusedToastEscapeKeyDownRef.current || U(),
                            (T.isFocusedToastEscapeKeyDownRef.current = !1));
                        }),
                        children: (0, t.jsx)(d.Primitive.li, {
                          role: "status",
                          "aria-live": "off",
                          "aria-atomic": !0,
                          tabIndex: 0,
                          "data-state": p ? "open" : "closed",
                          "data-swipe-direction": T.swipeDirection,
                          ...R,
                          ref: D,
                          style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style,
                          },
                          onKeyDown: (0, o.composeEventHandlers)(
                            e.onKeyDown,
                            (e) => {
                              "Escape" === e.key &&
                                (v?.(e.nativeEvent),
                                e.nativeEvent.defaultPrevented ||
                                  ((T.isFocusedToastEscapeKeyDownRef.current =
                                    !0),
                                  U()));
                            },
                          ),
                          onPointerDown: (0, o.composeEventHandlers)(
                            e.onPointerDown,
                            (e) => {
                              0 === e.button &&
                                (O.current = { x: e.clientX, y: e.clientY });
                            },
                          ),
                          onPointerMove: (0, o.composeEventHandlers)(
                            e.onPointerMove,
                            (e) => {
                              if (!O.current) return;
                              let t = e.clientX - O.current.x,
                                r = e.clientY - O.current.y,
                                n = !!A.current,
                                o = ["left", "right"].includes(
                                  T.swipeDirection,
                                ),
                                s = ["left", "up"].includes(T.swipeDirection)
                                  ? Math.min
                                  : Math.max,
                                i = o ? s(0, t) : 0,
                                a = o ? 0 : s(0, r),
                                l = "touch" === e.pointerType ? 10 : 2,
                                u = { x: i, y: a },
                                c = { originalEvent: e, delta: u };
                              n
                                ? ((A.current = u),
                                  B("toast.swipeMove", g, c, { discrete: !1 }))
                                : X(u, T.swipeDirection, l)
                                  ? ((A.current = u),
                                    B("toast.swipeStart", h, c, {
                                      discrete: !1,
                                    }),
                                    e.target.setPointerCapture(e.pointerId))
                                  : (Math.abs(t) > l || Math.abs(r) > l) &&
                                    (O.current = null);
                            },
                          ),
                          onPointerUp: (0, o.composeEventHandlers)(
                            e.onPointerUp,
                            (e) => {
                              let t = A.current,
                                r = e.target;
                              if (
                                (r.hasPointerCapture(e.pointerId) &&
                                  r.releasePointerCapture(e.pointerId),
                                (A.current = null),
                                (O.current = null),
                                t)
                              ) {
                                let r = e.currentTarget,
                                  n = { originalEvent: e, delta: t };
                                (X(t, T.swipeDirection, T.swipeThreshold)
                                  ? B("toast.swipeEnd", b, n, { discrete: !0 })
                                  : B("toast.swipeCancel", x, n, {
                                      discrete: !0,
                                    }),
                                  r.addEventListener(
                                    "click",
                                    (e) => e.preventDefault(),
                                    { once: !0 },
                                  ));
                              }
                            },
                          ),
                        }),
                      }),
                    }),
                    T.viewport,
                  ),
                }),
              ],
            })
          : null;
      }),
      F = (e) => {
        let { __scopeToast: n, children: o, ...s } = e,
          i = C(L, n),
          [a, l] = r.useState(!1),
          [c, d] = r.useState(!1);
        return (
          (function (e = () => {}) {
            let t = (0, f.useCallbackRef)(e);
            (0, m.useLayoutEffect)(() => {
              let e = 0,
                r = 0;
              return (
                (e = window.requestAnimationFrame(
                  () => (r = window.requestAnimationFrame(t)),
                )),
                () => {
                  (window.cancelAnimationFrame(e),
                    window.cancelAnimationFrame(r));
                }
              );
            }, [t]);
          })(() => l(!0)),
          r.useEffect(() => {
            let e = window.setTimeout(() => d(!0), 1e3);
            return () => window.clearTimeout(e);
          }, []),
          c
            ? null
            : (0, t.jsx)(u.Portal, {
                asChild: !0,
                children: (0, t.jsx)(v.VisuallyHidden, {
                  ...s,
                  children:
                    a &&
                    (0, t.jsxs)(t.Fragment, { children: [i.label, " ", o] }),
                }),
              })
        );
      },
      _ = r.forwardRef((e, r) => {
        let { __scopeToast: n, ...o } = e;
        return (0, t.jsx)(d.Primitive.div, { ...o, ref: r });
      });
    _.displayName = "ToastTitle";
    var W = r.forwardRef((e, r) => {
      let { __scopeToast: n, ...o } = e;
      return (0, t.jsx)(d.Primitive.div, { ...o, ref: r });
    });
    W.displayName = "ToastDescription";
    var V = "ToastAction",
      H = r.forwardRef((e, r) => {
        let { altText: n, ...o } = e;
        return n.trim()
          ? (0, t.jsx)(K, {
              altText: n,
              asChild: !0,
              children: (0, t.jsx)($, { ...o, ref: r }),
            })
          : (console.error(
              `Invalid prop \`altText\` supplied to \`${V}\`. Expected non-empty \`string\`.`,
            ),
            null);
      });
    H.displayName = V;
    var U = "ToastClose",
      $ = r.forwardRef((e, r) => {
        let { __scopeToast: n, ...s } = e,
          i = M(U, n);
        return (0, t.jsx)(K, {
          asChild: !0,
          children: (0, t.jsx)(d.Primitive.button, {
            type: "button",
            ...s,
            ref: r,
            onClick: (0, o.composeEventHandlers)(e.onClick, i.onClose),
          }),
        });
      });
    $.displayName = U;
    var K = r.forwardRef((e, r) => {
      let { __scopeToast: n, altText: o, ...s } = e;
      return (0, t.jsx)(d.Primitive.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...s,
        ref: r,
      });
    });
    function B(e, t, r, { discrete: n }) {
      let o = r.originalEvent.currentTarget,
        s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
      (t && o.addEventListener(e, t, { once: !0 }),
        n ? (0, d.dispatchDiscreteCustomEvent)(o, s) : o.dispatchEvent(s));
    }
    var X = (e, t, r = 0) => {
      let n = Math.abs(e.x),
        o = Math.abs(e.y),
        s = n > o;
      return "left" === t || "right" === t ? s && n > r : !s && o > r;
    };
    function z(e) {
      let t = document.activeElement;
      return e.some(
        (e) => e === t || (e.focus(), document.activeElement !== t),
      );
    }
    var q = e.i(25913),
      Z = e.i(37727),
      Y = e.i(75157);
    let G = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(S, {
        ref: n,
        className: (0, Y.cn)(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
          e,
        ),
        ...r,
      }),
    );
    G.displayName = S.displayName;
    let J = (0, q.cva)(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
          variants: {
            variant: {
              default: "border bg-background text-foreground",
              destructive:
                "destructive group border-destructive bg-destructive text-destructive-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        },
      ),
      Q = r.forwardRef(({ className: e, variant: r, ...n }, o) =>
        (0, t.jsx)(A, {
          ref: o,
          className: (0, Y.cn)(J({ variant: r }), e),
          ...n,
        }),
      );
    ((Q.displayName = A.displayName),
      (r.forwardRef(({ className: e, ...r }, n) =>
        (0, t.jsx)(H, {
          ref: n,
          className: (0, Y.cn)(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            e,
          ),
          ...r,
        }),
      ).displayName = H.displayName));
    let ee = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)($, {
        ref: n,
        className: (0, Y.cn)(
          "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
          e,
        ),
        "toast-close": "",
        ...r,
        children: (0, t.jsx)(Z.X, { className: "h-4 w-4" }),
      }),
    );
    ee.displayName = $.displayName;
    let et = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(_, {
        ref: n,
        className: (0, Y.cn)("text-sm font-semibold", e),
        ...r,
      }),
    );
    et.displayName = _.displayName;
    let er = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(W, {
        ref: n,
        className: (0, Y.cn)("text-sm opacity-90", e),
        ...r,
      }),
    );
    er.displayName = W.displayName;
    let en = 0,
      eo = new Map(),
      es = (e) => {
        if (eo.has(e)) return;
        let t = setTimeout(() => {
          (eo.delete(e), el({ type: "REMOVE_TOAST", toastId: e }));
        }, 1e6);
        eo.set(e, t);
      },
      ei = [],
      ea = { toasts: [] };
    function el(e) {
      ((ea = ((e, t) => {
        switch (t.type) {
          case "ADD_TOAST":
            return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
          case "UPDATE_TOAST":
            return {
              ...e,
              toasts: e.toasts.map((e) =>
                e.id === t.toast.id ? { ...e, ...t.toast } : e,
              ),
            };
          case "DISMISS_TOAST": {
            let { toastId: r } = t;
            return (
              r
                ? es(r)
                : e.toasts.forEach((e) => {
                    es(e.id);
                  }),
              {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === r || void 0 === r ? { ...e, open: !1 } : e,
                ),
              }
            );
          }
          case "REMOVE_TOAST":
            if (void 0 === t.toastId) return { ...e, toasts: [] };
            return { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
        }
      })(ea, e)),
        ei.forEach((e) => {
          e(ea);
        }));
    }
    function eu({ ...e }) {
      let t = (en = (en + 1) % Number.MAX_SAFE_INTEGER).toString(),
        r = () => el({ type: "DISMISS_TOAST", toastId: t });
      return (
        el({
          type: "ADD_TOAST",
          toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: (e) => {
              e || r();
            },
          },
        }),
        {
          id: t,
          dismiss: r,
          update: (e) => el({ type: "UPDATE_TOAST", toast: { ...e, id: t } }),
        }
      );
    }
    function ec() {
      let { toasts: e } = (function () {
        let [e, t] = r.useState(ea);
        return (
          r.useEffect(
            () => (
              ei.push(t),
              () => {
                let e = ei.indexOf(t);
                e > -1 && ei.splice(e, 1);
              }
            ),
            [e],
          ),
          {
            ...e,
            toast: eu,
            dismiss: (e) => el({ type: "DISMISS_TOAST", toastId: e }),
          }
        );
      })();
      return (0, t.jsxs)(R, {
        children: [
          e.map(function ({
            id: e,
            title: r,
            description: n,
            action: o,
            ...s
          }) {
            return (0, t.jsxs)(
              Q,
              {
                ...s,
                children: [
                  (0, t.jsxs)("div", {
                    className: "grid gap-1",
                    children: [
                      r && (0, t.jsx)(et, { children: r }),
                      n && (0, t.jsx)(er, { children: n }),
                    ],
                  }),
                  o,
                  (0, t.jsx)(ee, {}),
                ],
              },
              e,
            );
          }),
          (0, t.jsx)(G, {}),
        ],
      });
    }
    e.s(["Toaster", () => ec], 77855);
  },
]);
