(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  19455,
  (e) => {
    "use strict";
    let t, r, n;
    var o = e.i(43476),
      l = e.i(71645);
    function i(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    var a =
        (((n = l.forwardRef((e, t) => {
          let { children: r, ...n } = e;
          if (l.isValidElement(r)) {
            var o;
            let e,
              a,
              s =
                ((o = r),
                (a =
                  (e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning)
                  ? o.ref
                  : (a =
                        (e = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? o.props.ref
                    : o.props.ref || o.ref),
              d = (function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let o = e[n],
                    l = t[n];
                  /^on[A-Z]/.test(n)
                    ? o && l
                      ? (r[n] = (...e) => {
                          let t = l(...e);
                          return (o(...e), t);
                        })
                      : o && (r[n] = o)
                    : "style" === n
                      ? (r[n] = { ...o, ...l })
                      : "className" === n &&
                        (r[n] = [o, l].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props);
            return (
              r.type !== l.Fragment &&
                (d.ref = t
                  ? (function (...e) {
                      return (t) => {
                        let r = !1,
                          n = e.map((e) => {
                            let n = i(e, t);
                            return (r || "function" != typeof n || (r = !0), n);
                          });
                        if (r)
                          return () => {
                            for (let t = 0; t < n.length; t++) {
                              let r = n[t];
                              "function" == typeof r ? r() : i(e[t], null);
                            }
                          };
                      };
                    })(t, s)
                  : s),
              l.cloneElement(r, d)
            );
          }
          return l.Children.count(r) > 1 ? l.Children.only(null) : null;
        })).displayName = "Slot.SlotClone"),
        (t = n),
        ((r = l.forwardRef((e, r) => {
          let { children: n, ...i } = e,
            a = l.Children.toArray(n),
            s = a.find(d);
          if (s) {
            let e = s.props.children,
              n = a.map((t) =>
                t !== s
                  ? t
                  : l.Children.count(e) > 1
                    ? l.Children.only(null)
                    : l.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, o.jsx)(t, {
              ...i,
              ref: r,
              children: l.isValidElement(e)
                ? l.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, o.jsx)(t, { ...i, ref: r, children: n });
        })).displayName = "Slot.Slot"),
        r),
      s = Symbol("radix.slottable");
    function d(e) {
      return (
        l.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === s
      );
    }
    var u = e.i(25913),
      c = e.i(75157);
    let p = (0, u.cva)(
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
      f = l.forwardRef(
        ({ className: e, variant: t, size: r, asChild: n = !1, ...l }, i) =>
          (0, o.jsx)(n ? a : "button", {
            className: (0, c.cn)(p({ variant: t, size: r, className: e })),
            ref: i,
            ...l,
          }),
      );
    ((f.displayName = "Button"), e.s(["Button", () => f], 19455));
  },
  35804,
  (e) => {
    "use strict";
    var t = e.i(71645),
      r = e.i(34620);
    function n(e) {
      let [n, o] = t.useState(void 0);
      return (
        (0, r.useLayoutEffect)(() => {
          if (e) {
            o({ width: e.offsetWidth, height: e.offsetHeight });
            let t = new ResizeObserver((t) => {
              let r, n;
              if (!Array.isArray(t) || !t.length) return;
              let l = t[0];
              if ("borderBoxSize" in l) {
                let e = l.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                ((r = t.inlineSize), (n = t.blockSize));
              } else ((r = e.offsetWidth), (n = e.offsetHeight));
              o({ width: r, height: n });
            });
            return (t.observe(e, { box: "border-box" }), () => t.unobserve(e));
          }
          o(void 0);
        }, [e]),
        n
      );
    }
    e.s(["useSize", () => n]);
  },
  99682,
  (e) => {
    "use strict";
    var t = e.i(71645);
    function r(e) {
      let r = t.useRef({ value: e, previous: e });
      return t.useMemo(
        () => (
          r.current.value !== e &&
            ((r.current.previous = r.current.value), (r.current.value = e)),
          r.current.previous
        ),
        [e],
      );
    }
    e.s(["usePrevious", () => r]);
  },
  67489,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(74080);
    function o(e, [t, r]) {
      return Math.min(r, Math.max(t, e));
    }
    var l = e.i(81140),
      i = e.i(75830),
      a = e.i(20783),
      s = e.i(30030),
      d = e.i(86318),
      u = e.i(26330),
      c = e.i(3536),
      p = e.i(65491),
      f = e.i(10772),
      m = e.i(53660),
      v = e.i(74606),
      h = e.i(48425),
      g = r.forwardRef((e, n) => {
        let { children: o, ...l } = e,
          i = r.Children.toArray(o),
          a = i.find(w);
        if (a) {
          let e = a.props.children,
            o = i.map((t) =>
              t !== a
                ? t
                : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                    ? e.props.children
                    : null,
            );
          return (0, t.jsx)(y, {
            ...l,
            ref: n,
            children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null,
          });
        }
        return (0, t.jsx)(y, { ...l, ref: n, children: o });
      });
    g.displayName = "Slot";
    var y = r.forwardRef((e, t) => {
      let { children: n, ...o } = e;
      if (r.isValidElement(n)) {
        var l;
        let e,
          i,
          s =
            ((l = n),
            (i =
              (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning)
              ? l.ref
              : (i =
                    (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? l.props.ref
                : l.props.ref || l.ref),
          d = (function (e, t) {
            let r = { ...t };
            for (let n in t) {
              let o = e[n],
                l = t[n];
              /^on[A-Z]/.test(n)
                ? o && l
                  ? (r[n] = (...e) => {
                      (l(...e), o(...e));
                    })
                  : o && (r[n] = o)
                : "style" === n
                  ? (r[n] = { ...o, ...l })
                  : "className" === n &&
                    (r[n] = [o, l].filter(Boolean).join(" "));
            }
            return { ...e, ...r };
          })(o, n.props);
        return (
          n.type !== r.Fragment && (d.ref = t ? (0, a.composeRefs)(t, s) : s),
          r.cloneElement(n, d)
        );
      }
      return r.Children.count(n) > 1 ? r.Children.only(null) : null;
    });
    y.displayName = "SlotClone";
    var x = ({ children: e }) => (0, t.jsx)(t.Fragment, { children: e });
    function w(e) {
      return r.isValidElement(e) && e.type === x;
    }
    var b = e.i(30207),
      S = e.i(69340),
      C = e.i(34620),
      j = e.i(99682),
      R = e.i(59411),
      E = e.i(86312),
      P = e.i(85369),
      N = [" ", "Enter", "ArrowUp", "ArrowDown"],
      T = [" ", "Enter"],
      k = "Select",
      [I, H, D] = (0, i.createCollection)(k),
      [L, A] = (0, s.createContextScope)(k, [D, m.createPopperScope]),
      M = (0, m.createPopperScope)(),
      [V, B] = L(k),
      [O, _] = L(k),
      W = (e) => {
        let {
            __scopeSelect: n,
            children: o,
            open: l,
            defaultOpen: i,
            onOpenChange: a,
            value: s,
            defaultValue: u,
            onValueChange: c,
            dir: p,
            name: v,
            autoComplete: h,
            disabled: g,
            required: y,
            form: x,
          } = e,
          w = M(n),
          [b, C] = r.useState(null),
          [j, R] = r.useState(null),
          [E, P] = r.useState(!1),
          N = (0, d.useDirection)(p),
          [T = !1, k] = (0, S.useControllableState)({
            prop: l,
            defaultProp: i,
            onChange: a,
          }),
          [H, D] = (0, S.useControllableState)({
            prop: s,
            defaultProp: u,
            onChange: c,
          }),
          L = r.useRef(null),
          A = !b || x || !!b.closest("form"),
          [B, _] = r.useState(new Set()),
          W = Array.from(B)
            .map((e) => e.props.value)
            .join(";");
        return (0, t.jsx)(m.Root, {
          ...w,
          children: (0, t.jsxs)(V, {
            required: y,
            scope: n,
            trigger: b,
            onTriggerChange: C,
            valueNode: j,
            onValueNodeChange: R,
            valueNodeHasChildren: E,
            onValueNodeHasChildrenChange: P,
            contentId: (0, f.useId)(),
            value: H,
            onValueChange: D,
            open: T,
            onOpenChange: k,
            dir: N,
            triggerPointerDownPosRef: L,
            disabled: g,
            children: [
              (0, t.jsx)(I.Provider, {
                scope: n,
                children: (0, t.jsx)(O, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: r.useCallback((e) => {
                    _((t) => new Set(t).add(e));
                  }, []),
                  onNativeOptionRemove: r.useCallback((e) => {
                    _((t) => {
                      let r = new Set(t);
                      return (r.delete(e), r);
                    });
                  }, []),
                  children: o,
                }),
              }),
              A
                ? (0, t.jsxs)(
                    ej,
                    {
                      "aria-hidden": !0,
                      required: y,
                      tabIndex: -1,
                      name: v,
                      autoComplete: h,
                      value: H,
                      onChange: (e) => D(e.target.value),
                      disabled: g,
                      form: x,
                      children: [
                        void 0 === H
                          ? (0, t.jsx)("option", { value: "" })
                          : null,
                        Array.from(B),
                      ],
                    },
                    W,
                  )
                : null,
            ],
          }),
        });
      };
    W.displayName = k;
    var z = "SelectTrigger",
      F = r.forwardRef((e, n) => {
        let { __scopeSelect: o, disabled: i = !1, ...s } = e,
          d = M(o),
          u = B(z, o),
          c = u.disabled || i,
          p = (0, a.useComposedRefs)(n, u.onTriggerChange),
          f = H(o),
          v = r.useRef("touch"),
          [g, y, x] = eR((e) => {
            let t = f().filter((e) => !e.disabled),
              r = t.find((e) => e.value === u.value),
              n = eE(t, e, r);
            void 0 !== n && u.onValueChange(n.value);
          }),
          w = (e) => {
            (c || (u.onOpenChange(!0), x()),
              e &&
                (u.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY),
                }));
          };
        return (0, t.jsx)(m.Anchor, {
          asChild: !0,
          ...d,
          children: (0, t.jsx)(h.Primitive.button, {
            type: "button",
            role: "combobox",
            "aria-controls": u.contentId,
            "aria-expanded": u.open,
            "aria-required": u.required,
            "aria-autocomplete": "none",
            dir: u.dir,
            "data-state": u.open ? "open" : "closed",
            disabled: c,
            "data-disabled": c ? "" : void 0,
            "data-placeholder": eC(u.value) ? "" : void 0,
            ...s,
            ref: p,
            onClick: (0, l.composeEventHandlers)(s.onClick, (e) => {
              (e.currentTarget.focus(), "mouse" !== v.current && w(e));
            }),
            onPointerDown: (0, l.composeEventHandlers)(s.onPointerDown, (e) => {
              v.current = e.pointerType;
              let t = e.target;
              (t.hasPointerCapture(e.pointerId) &&
                t.releasePointerCapture(e.pointerId),
                0 === e.button &&
                  !1 === e.ctrlKey &&
                  "mouse" === e.pointerType &&
                  (w(e), e.preventDefault()));
            }),
            onKeyDown: (0, l.composeEventHandlers)(s.onKeyDown, (e) => {
              let t = "" !== g.current;
              (e.ctrlKey ||
                e.altKey ||
                e.metaKey ||
                1 !== e.key.length ||
                y(e.key),
                (!t || " " !== e.key) &&
                  N.includes(e.key) &&
                  (w(), e.preventDefault()));
            }),
          }),
        });
      });
    F.displayName = z;
    var K = "SelectValue",
      U = r.forwardRef((e, r) => {
        let {
            __scopeSelect: n,
            className: o,
            style: l,
            children: i,
            placeholder: s = "",
            ...d
          } = e,
          u = B(K, n),
          { onValueNodeHasChildrenChange: c } = u,
          p = void 0 !== i,
          f = (0, a.useComposedRefs)(r, u.onValueNodeChange);
        return (
          (0, C.useLayoutEffect)(() => {
            c(p);
          }, [c, p]),
          (0, t.jsx)(h.Primitive.span, {
            ...d,
            ref: f,
            style: { pointerEvents: "none" },
            children: eC(u.value) ? (0, t.jsx)(t.Fragment, { children: s }) : i,
          })
        );
      });
    U.displayName = K;
    var q = r.forwardRef((e, r) => {
      let { __scopeSelect: n, children: o, ...l } = e;
      return (0, t.jsx)(h.Primitive.span, {
        "aria-hidden": !0,
        ...l,
        ref: r,
        children: o || "▼",
      });
    });
    q.displayName = "SelectIcon";
    var Z = (e) => (0, t.jsx)(v.Portal, { asChild: !0, ...e });
    Z.displayName = "SelectPortal";
    var G = "SelectContent",
      X = r.forwardRef((e, o) => {
        let l = B(G, e.__scopeSelect),
          [i, a] = r.useState();
        return ((0, C.useLayoutEffect)(() => {
          a(new DocumentFragment());
        }, []),
        l.open)
          ? (0, t.jsx)(Q, { ...e, ref: o })
          : i
            ? n.createPortal(
                (0, t.jsx)(Y, {
                  scope: e.__scopeSelect,
                  children: (0, t.jsx)(I.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, t.jsx)("div", { children: e.children }),
                  }),
                }),
                i,
              )
            : null;
      });
    X.displayName = G;
    var [Y, J] = L(G),
      Q = r.forwardRef((e, n) => {
        let {
            __scopeSelect: o,
            position: i = "item-aligned",
            onCloseAutoFocus: s,
            onEscapeKeyDown: d,
            onPointerDownOutside: f,
            side: m,
            sideOffset: v,
            align: h,
            alignOffset: y,
            arrowPadding: x,
            collisionBoundary: w,
            collisionPadding: b,
            sticky: S,
            hideWhenDetached: C,
            avoidCollisions: j,
            ...R
          } = e,
          N = B(G, o),
          [T, k] = r.useState(null),
          [I, D] = r.useState(null),
          L = (0, a.useComposedRefs)(n, (e) => k(e)),
          [A, M] = r.useState(null),
          [V, O] = r.useState(null),
          _ = H(o),
          [W, z] = r.useState(!1),
          F = r.useRef(!1);
        (r.useEffect(() => {
          if (T) return (0, E.hideOthers)(T);
        }, [T]),
          (0, c.useFocusGuards)());
        let K = r.useCallback(
            (e) => {
              let [t, ...r] = _().map((e) => e.ref.current),
                [n] = r.slice(-1),
                o = document.activeElement;
              for (let r of e)
                if (
                  r === o ||
                  (r?.scrollIntoView({ block: "nearest" }),
                  r === t && I && (I.scrollTop = 0),
                  r === n && I && (I.scrollTop = I.scrollHeight),
                  r?.focus(),
                  document.activeElement !== o)
                )
                  return;
            },
            [_, I],
          ),
          U = r.useCallback(() => K([A, T]), [K, A, T]);
        r.useEffect(() => {
          W && U();
        }, [W, U]);
        let { onOpenChange: q, triggerPointerDownPosRef: Z } = N;
        (r.useEffect(() => {
          if (T) {
            let e = { x: 0, y: 0 },
              t = (t) => {
                e = {
                  x: Math.abs(Math.round(t.pageX) - (Z.current?.x ?? 0)),
                  y: Math.abs(Math.round(t.pageY) - (Z.current?.y ?? 0)),
                };
              },
              r = (r) => {
                (e.x <= 10 && e.y <= 10
                  ? r.preventDefault()
                  : T.contains(r.target) || q(!1),
                  document.removeEventListener("pointermove", t),
                  (Z.current = null));
              };
            return (
              null !== Z.current &&
                (document.addEventListener("pointermove", t),
                document.addEventListener("pointerup", r, {
                  capture: !0,
                  once: !0,
                })),
              () => {
                (document.removeEventListener("pointermove", t),
                  document.removeEventListener("pointerup", r, {
                    capture: !0,
                  }));
              }
            );
          }
        }, [T, q, Z]),
          r.useEffect(() => {
            let e = () => q(!1);
            return (
              window.addEventListener("blur", e),
              window.addEventListener("resize", e),
              () => {
                (window.removeEventListener("blur", e),
                  window.removeEventListener("resize", e));
              }
            );
          }, [q]));
        let [X, J] = eR((e) => {
            let t = _().filter((e) => !e.disabled),
              r = t.find((e) => e.ref.current === document.activeElement),
              n = eE(t, e, r);
            n && setTimeout(() => n.ref.current.focus());
          }),
          Q = r.useCallback(
            (e, t, r) => {
              let n = !F.current && !r;
              ((void 0 !== N.value && N.value === t) || n) &&
                (M(e), n && (F.current = !0));
            },
            [N.value],
          ),
          et = r.useCallback(() => T?.focus(), [T]),
          er = r.useCallback(
            (e, t, r) => {
              let n = !F.current && !r;
              ((void 0 !== N.value && N.value === t) || n) && O(e);
            },
            [N.value],
          ),
          en = "popper" === i ? ee : $,
          eo =
            en === ee
              ? {
                  side: m,
                  sideOffset: v,
                  align: h,
                  alignOffset: y,
                  arrowPadding: x,
                  collisionBoundary: w,
                  collisionPadding: b,
                  sticky: S,
                  hideWhenDetached: C,
                  avoidCollisions: j,
                }
              : {};
        return (0, t.jsx)(Y, {
          scope: o,
          content: T,
          viewport: I,
          onViewportChange: D,
          itemRefCallback: Q,
          selectedItem: A,
          onItemLeave: et,
          itemTextRefCallback: er,
          focusSelectedItem: U,
          selectedItemText: V,
          position: i,
          isPositioned: W,
          searchRef: X,
          children: (0, t.jsx)(P.RemoveScroll, {
            as: g,
            allowPinchZoom: !0,
            children: (0, t.jsx)(p.FocusScope, {
              asChild: !0,
              trapped: N.open,
              onMountAutoFocus: (e) => {
                e.preventDefault();
              },
              onUnmountAutoFocus: (0, l.composeEventHandlers)(s, (e) => {
                (N.trigger?.focus({ preventScroll: !0 }), e.preventDefault());
              }),
              children: (0, t.jsx)(u.DismissableLayer, {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: () => N.onOpenChange(!1),
                children: (0, t.jsx)(en, {
                  role: "listbox",
                  id: N.contentId,
                  "data-state": N.open ? "open" : "closed",
                  dir: N.dir,
                  onContextMenu: (e) => e.preventDefault(),
                  ...R,
                  ...eo,
                  onPlaced: () => z(!0),
                  ref: L,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...R.style,
                  },
                  onKeyDown: (0, l.composeEventHandlers)(R.onKeyDown, (e) => {
                    let t = e.ctrlKey || e.altKey || e.metaKey;
                    if (
                      ("Tab" === e.key && e.preventDefault(),
                      t || 1 !== e.key.length || J(e.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                    ) {
                      let t = _()
                        .filter((e) => !e.disabled)
                        .map((e) => e.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(e.key) &&
                          (t = t.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(e.key))
                      ) {
                        let r = e.target,
                          n = t.indexOf(r);
                        t = t.slice(n + 1);
                      }
                      (setTimeout(() => K(t)), e.preventDefault());
                    }
                  }),
                }),
              }),
            }),
          }),
        });
      });
    Q.displayName = "SelectContentImpl";
    var $ = r.forwardRef((e, n) => {
      let { __scopeSelect: l, onPlaced: i, ...s } = e,
        d = B(G, l),
        u = J(G, l),
        [c, p] = r.useState(null),
        [f, m] = r.useState(null),
        v = (0, a.useComposedRefs)(n, (e) => m(e)),
        g = H(l),
        y = r.useRef(!1),
        x = r.useRef(!0),
        {
          viewport: w,
          selectedItem: b,
          selectedItemText: S,
          focusSelectedItem: j,
        } = u,
        R = r.useCallback(() => {
          if (d.trigger && d.valueNode && c && f && w && b && S) {
            let e = d.trigger.getBoundingClientRect(),
              t = f.getBoundingClientRect(),
              r = d.valueNode.getBoundingClientRect(),
              n = S.getBoundingClientRect();
            if ("rtl" !== d.dir) {
              let l = n.left - t.left,
                i = r.left - l,
                a = e.left - i,
                s = e.width + a,
                d = Math.max(s, t.width),
                u = o(i, [10, Math.max(10, window.innerWidth - 10 - d)]);
              ((c.style.minWidth = s + "px"), (c.style.left = u + "px"));
            } else {
              let l = t.right - n.right,
                i = window.innerWidth - r.right - l,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                d = Math.max(s, t.width),
                u = o(i, [10, Math.max(10, window.innerWidth - 10 - d)]);
              ((c.style.minWidth = s + "px"), (c.style.right = u + "px"));
            }
            let l = g(),
              a = window.innerHeight - 20,
              s = w.scrollHeight,
              u = window.getComputedStyle(f),
              p = parseInt(u.borderTopWidth, 10),
              m = parseInt(u.paddingTop, 10),
              v = parseInt(u.borderBottomWidth, 10),
              h = p + m + s + parseInt(u.paddingBottom, 10) + v,
              x = Math.min(5 * b.offsetHeight, h),
              C = window.getComputedStyle(w),
              j = parseInt(C.paddingTop, 10),
              R = parseInt(C.paddingBottom, 10),
              E = e.top + e.height / 2 - 10,
              P = b.offsetHeight / 2,
              N = p + m + (b.offsetTop + P);
            if (N <= E) {
              let e = l.length > 0 && b === l[l.length - 1].ref.current;
              c.style.bottom = "0px";
              let t = Math.max(
                a - E,
                P +
                  (e ? R : 0) +
                  (f.clientHeight - w.offsetTop - w.offsetHeight) +
                  v,
              );
              c.style.height = N + t + "px";
            } else {
              let e = l.length > 0 && b === l[0].ref.current;
              c.style.top = "0px";
              let t = Math.max(E, p + w.offsetTop + (e ? j : 0) + P);
              ((c.style.height = t + (h - N) + "px"),
                (w.scrollTop = N - E + w.offsetTop));
            }
            ((c.style.margin = "10px 0"),
              (c.style.minHeight = x + "px"),
              (c.style.maxHeight = a + "px"),
              i?.(),
              requestAnimationFrame(() => (y.current = !0)));
          }
        }, [g, d.trigger, d.valueNode, c, f, w, b, S, d.dir, i]);
      (0, C.useLayoutEffect)(() => R(), [R]);
      let [E, P] = r.useState();
      (0, C.useLayoutEffect)(() => {
        f && P(window.getComputedStyle(f).zIndex);
      }, [f]);
      let N = r.useCallback(
        (e) => {
          e && !0 === x.current && (R(), j?.(), (x.current = !1));
        },
        [R, j],
      );
      return (0, t.jsx)(et, {
        scope: l,
        contentWrapper: c,
        shouldExpandOnScrollRef: y,
        onScrollButtonChange: N,
        children: (0, t.jsx)("div", {
          ref: p,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E,
          },
          children: (0, t.jsx)(h.Primitive.div, {
            ...s,
            ref: v,
            style: { boxSizing: "border-box", maxHeight: "100%", ...s.style },
          }),
        }),
      });
    });
    $.displayName = "SelectItemAlignedPosition";
    var ee = r.forwardRef((e, r) => {
      let {
          __scopeSelect: n,
          align: o = "start",
          collisionPadding: l = 10,
          ...i
        } = e,
        a = M(n);
      return (0, t.jsx)(m.Content, {
        ...a,
        ...i,
        ref: r,
        align: o,
        collisionPadding: l,
        style: {
          boxSizing: "border-box",
          ...i.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      });
    });
    ee.displayName = "SelectPopperPosition";
    var [et, er] = L(G, {}),
      en = "SelectViewport",
      eo = r.forwardRef((e, n) => {
        let { __scopeSelect: o, nonce: i, ...s } = e,
          d = J(en, o),
          u = er(en, o),
          c = (0, a.useComposedRefs)(n, d.onViewportChange),
          p = r.useRef(0);
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
              },
              nonce: i,
            }),
            (0, t.jsx)(I.Slot, {
              scope: o,
              children: (0, t.jsx)(h.Primitive.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...s,
                ref: c,
                style: {
                  position: "relative",
                  flex: 1,
                  overflow: "hidden auto",
                  ...s.style,
                },
                onScroll: (0, l.composeEventHandlers)(s.onScroll, (e) => {
                  let t = e.currentTarget,
                    { contentWrapper: r, shouldExpandOnScrollRef: n } = u;
                  if (n?.current && r) {
                    let e = Math.abs(p.current - t.scrollTop);
                    if (e > 0) {
                      let n = window.innerHeight - 20,
                        o = Math.max(
                          parseFloat(r.style.minHeight),
                          parseFloat(r.style.height),
                        );
                      if (o < n) {
                        let l = o + e,
                          i = Math.min(n, l),
                          a = l - i;
                        ((r.style.height = i + "px"),
                          "0px" === r.style.bottom &&
                            ((t.scrollTop = a > 0 ? a : 0),
                            (r.style.justifyContent = "flex-end")));
                      }
                    }
                  }
                  p.current = t.scrollTop;
                }),
              }),
            }),
          ],
        });
      });
    eo.displayName = en;
    var el = "SelectGroup",
      [ei, ea] = L(el);
    r.forwardRef((e, r) => {
      let { __scopeSelect: n, ...o } = e,
        l = (0, f.useId)();
      return (0, t.jsx)(ei, {
        scope: n,
        id: l,
        children: (0, t.jsx)(h.Primitive.div, {
          role: "group",
          "aria-labelledby": l,
          ...o,
          ref: r,
        }),
      });
    }).displayName = el;
    var es = "SelectLabel",
      ed = r.forwardRef((e, r) => {
        let { __scopeSelect: n, ...o } = e,
          l = ea(es, n);
        return (0, t.jsx)(h.Primitive.div, { id: l.id, ...o, ref: r });
      });
    ed.displayName = es;
    var eu = "SelectItem",
      [ec, ep] = L(eu),
      ef = r.forwardRef((e, n) => {
        let {
            __scopeSelect: o,
            value: i,
            disabled: s = !1,
            textValue: d,
            ...u
          } = e,
          c = B(eu, o),
          p = J(eu, o),
          m = c.value === i,
          [v, g] = r.useState(d ?? ""),
          [y, x] = r.useState(!1),
          w = (0, a.useComposedRefs)(n, (e) => p.itemRefCallback?.(e, i, s)),
          b = (0, f.useId)(),
          S = r.useRef("touch"),
          C = () => {
            s || (c.onValueChange(i), c.onOpenChange(!1));
          };
        if ("" === i)
          throw Error(
            "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
          );
        return (0, t.jsx)(ec, {
          scope: o,
          value: i,
          disabled: s,
          textId: b,
          isSelected: m,
          onItemTextChange: r.useCallback((e) => {
            g((t) => t || (e?.textContent ?? "").trim());
          }, []),
          children: (0, t.jsx)(I.ItemSlot, {
            scope: o,
            value: i,
            disabled: s,
            textValue: v,
            children: (0, t.jsx)(h.Primitive.div, {
              role: "option",
              "aria-labelledby": b,
              "data-highlighted": y ? "" : void 0,
              "aria-selected": m && y,
              "data-state": m ? "checked" : "unchecked",
              "aria-disabled": s || void 0,
              "data-disabled": s ? "" : void 0,
              tabIndex: s ? void 0 : -1,
              ...u,
              ref: w,
              onFocus: (0, l.composeEventHandlers)(u.onFocus, () => x(!0)),
              onBlur: (0, l.composeEventHandlers)(u.onBlur, () => x(!1)),
              onClick: (0, l.composeEventHandlers)(u.onClick, () => {
                "mouse" !== S.current && C();
              }),
              onPointerUp: (0, l.composeEventHandlers)(u.onPointerUp, () => {
                "mouse" === S.current && C();
              }),
              onPointerDown: (0, l.composeEventHandlers)(
                u.onPointerDown,
                (e) => {
                  S.current = e.pointerType;
                },
              ),
              onPointerMove: (0, l.composeEventHandlers)(
                u.onPointerMove,
                (e) => {
                  ((S.current = e.pointerType),
                    s
                      ? p.onItemLeave?.()
                      : "mouse" === S.current &&
                        e.currentTarget.focus({ preventScroll: !0 }));
                },
              ),
              onPointerLeave: (0, l.composeEventHandlers)(
                u.onPointerLeave,
                (e) => {
                  e.currentTarget === document.activeElement &&
                    p.onItemLeave?.();
                },
              ),
              onKeyDown: (0, l.composeEventHandlers)(u.onKeyDown, (e) => {
                (p.searchRef?.current === "" || " " !== e.key) &&
                  (T.includes(e.key) && C(),
                  " " === e.key && e.preventDefault());
              }),
            }),
          }),
        });
      });
    ef.displayName = eu;
    var em = "SelectItemText",
      ev = r.forwardRef((e, o) => {
        let { __scopeSelect: l, className: i, style: s, ...d } = e,
          u = B(em, l),
          c = J(em, l),
          p = ep(em, l),
          f = _(em, l),
          [m, v] = r.useState(null),
          g = (0, a.useComposedRefs)(
            o,
            (e) => v(e),
            p.onItemTextChange,
            (e) => c.itemTextRefCallback?.(e, p.value, p.disabled),
          ),
          y = m?.textContent,
          x = r.useMemo(
            () =>
              (0, t.jsx)(
                "option",
                { value: p.value, disabled: p.disabled, children: y },
                p.value,
              ),
            [p.disabled, p.value, y],
          ),
          { onNativeOptionAdd: w, onNativeOptionRemove: b } = f;
        return (
          (0, C.useLayoutEffect)(() => (w(x), () => b(x)), [w, b, x]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(h.Primitive.span, { id: p.textId, ...d, ref: g }),
              p.isSelected && u.valueNode && !u.valueNodeHasChildren
                ? n.createPortal(d.children, u.valueNode)
                : null,
            ],
          })
        );
      });
    ev.displayName = em;
    var eh = "SelectItemIndicator",
      eg = r.forwardRef((e, r) => {
        let { __scopeSelect: n, ...o } = e;
        return ep(eh, n).isSelected
          ? (0, t.jsx)(h.Primitive.span, { "aria-hidden": !0, ...o, ref: r })
          : null;
      });
    eg.displayName = eh;
    var ey = "SelectScrollUpButton";
    r.forwardRef((e, n) => {
      let o = J(ey, e.__scopeSelect),
        l = er(ey, e.__scopeSelect),
        [i, s] = r.useState(!1),
        d = (0, a.useComposedRefs)(n, l.onScrollButtonChange);
      return (
        (0, C.useLayoutEffect)(() => {
          if (o.viewport && o.isPositioned) {
            let e = function () {
                s(t.scrollTop > 0);
              },
              t = o.viewport;
            return (
              e(),
              t.addEventListener("scroll", e),
              () => t.removeEventListener("scroll", e)
            );
          }
        }, [o.viewport, o.isPositioned]),
        i
          ? (0, t.jsx)(ew, {
              ...e,
              ref: d,
              onAutoScroll: () => {
                let { viewport: e, selectedItem: t } = o;
                e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
              },
            })
          : null
      );
    }).displayName = ey;
    var ex = "SelectScrollDownButton";
    r.forwardRef((e, n) => {
      let o = J(ex, e.__scopeSelect),
        l = er(ex, e.__scopeSelect),
        [i, s] = r.useState(!1),
        d = (0, a.useComposedRefs)(n, l.onScrollButtonChange);
      return (
        (0, C.useLayoutEffect)(() => {
          if (o.viewport && o.isPositioned) {
            let e = function () {
                let e = t.scrollHeight - t.clientHeight;
                s(Math.ceil(t.scrollTop) < e);
              },
              t = o.viewport;
            return (
              e(),
              t.addEventListener("scroll", e),
              () => t.removeEventListener("scroll", e)
            );
          }
        }, [o.viewport, o.isPositioned]),
        i
          ? (0, t.jsx)(ew, {
              ...e,
              ref: d,
              onAutoScroll: () => {
                let { viewport: e, selectedItem: t } = o;
                e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
              },
            })
          : null
      );
    }).displayName = ex;
    var ew = r.forwardRef((e, n) => {
        let { __scopeSelect: o, onAutoScroll: i, ...a } = e,
          s = J("SelectScrollButton", o),
          d = r.useRef(null),
          u = H(o),
          c = r.useCallback(() => {
            null !== d.current &&
              (window.clearInterval(d.current), (d.current = null));
          }, []);
        return (
          r.useEffect(() => () => c(), [c]),
          (0, C.useLayoutEffect)(() => {
            let e = u().find((e) => e.ref.current === document.activeElement);
            e?.ref.current?.scrollIntoView({ block: "nearest" });
          }, [u]),
          (0, t.jsx)(h.Primitive.div, {
            "aria-hidden": !0,
            ...a,
            ref: n,
            style: { flexShrink: 0, ...a.style },
            onPointerDown: (0, l.composeEventHandlers)(a.onPointerDown, () => {
              null === d.current && (d.current = window.setInterval(i, 50));
            }),
            onPointerMove: (0, l.composeEventHandlers)(a.onPointerMove, () => {
              (s.onItemLeave?.(),
                null === d.current && (d.current = window.setInterval(i, 50)));
            }),
            onPointerLeave: (0, l.composeEventHandlers)(
              a.onPointerLeave,
              () => {
                c();
              },
            ),
          })
        );
      }),
      eb = r.forwardRef((e, r) => {
        let { __scopeSelect: n, ...o } = e;
        return (0, t.jsx)(h.Primitive.div, { "aria-hidden": !0, ...o, ref: r });
      });
    eb.displayName = "SelectSeparator";
    var eS = "SelectArrow";
    function eC(e) {
      return "" === e || void 0 === e;
    }
    r.forwardRef((e, r) => {
      let { __scopeSelect: n, ...o } = e,
        l = M(n),
        i = B(eS, n),
        a = J(eS, n);
      return i.open && "popper" === a.position
        ? (0, t.jsx)(m.Arrow, { ...l, ...o, ref: r })
        : null;
    }).displayName = eS;
    var ej = r.forwardRef((e, n) => {
      let { value: o, ...l } = e,
        i = r.useRef(null),
        s = (0, a.useComposedRefs)(n, i),
        d = (0, j.usePrevious)(o);
      return (
        r.useEffect(() => {
          let e = i.current,
            t = Object.getOwnPropertyDescriptor(
              window.HTMLSelectElement.prototype,
              "value",
            ).set;
          if (d !== o && t) {
            let r = new Event("change", { bubbles: !0 });
            (t.call(e, o), e.dispatchEvent(r));
          }
        }, [d, o]),
        (0, t.jsx)(R.VisuallyHidden, {
          asChild: !0,
          children: (0, t.jsx)("select", { ...l, ref: s, defaultValue: o }),
        })
      );
    });
    function eR(e) {
      let t = (0, b.useCallbackRef)(e),
        n = r.useRef(""),
        o = r.useRef(0),
        l = r.useCallback(
          (e) => {
            let r = n.current + e;
            (t(r),
              (function e(t) {
                ((n.current = t),
                  window.clearTimeout(o.current),
                  "" !== t &&
                    (o.current = window.setTimeout(() => e(""), 1e3)));
              })(r));
          },
          [t],
        ),
        i = r.useCallback(() => {
          ((n.current = ""), window.clearTimeout(o.current));
        }, []);
      return (
        r.useEffect(() => () => window.clearTimeout(o.current), []),
        [n, l, i]
      );
    }
    function eE(e, t, r) {
      var n, o;
      let l = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
        i = r ? e.indexOf(r) : -1,
        a =
          ((n = e),
          (o = Math.max(i, 0)),
          n.map((e, t) => n[(o + t) % n.length]));
      1 === l.length && (a = a.filter((e) => e !== r));
      let s = a.find((e) =>
        e.textValue.toLowerCase().startsWith(l.toLowerCase()),
      );
      return s !== r ? s : void 0;
    }
    ej.displayName = "BubbleSelect";
    var eP = e.i(43531);
    let eN = (0, e.i(75254).default)("ChevronDown", [
      ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
    ]);
    var eT = e.i(75157);
    let ek = r.forwardRef(({ className: e, children: r, ...n }, o) =>
      (0, t.jsxs)(F, {
        ref: o,
        className: (0, eT.cn)(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ...n,
        children: [
          r,
          (0, t.jsx)(q, {
            asChild: !0,
            children: (0, t.jsx)(eN, { className: "h-4 w-4 opacity-50" }),
          }),
        ],
      }),
    );
    ek.displayName = F.displayName;
    let eI = r.forwardRef(
      ({ className: e, children: r, position: n = "popper", ...o }, l) =>
        (0, t.jsx)(Z, {
          children: (0, t.jsx)(X, {
            ref: l,
            className: (0, eT.cn)(
              "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === n &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              e,
            ),
            position: n,
            ...o,
            children: (0, t.jsx)(eo, {
              className: (0, eT.cn)(
                "p-1",
                "popper" === n &&
                  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
              ),
              children: r,
            }),
          }),
        }),
    );
    ((eI.displayName = X.displayName),
      (r.forwardRef(({ className: e, ...r }, n) =>
        (0, t.jsx)(ed, {
          ref: n,
          className: (0, eT.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
          ...r,
        }),
      ).displayName = ed.displayName));
    let eH = r.forwardRef(({ className: e, children: r, ...n }, o) =>
      (0, t.jsxs)(ef, {
        ref: o,
        className: (0, eT.cn)(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          e,
        ),
        ...n,
        children: [
          (0, t.jsx)("span", {
            className:
              "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
            children: (0, t.jsx)(eg, {
              children: (0, t.jsx)(eP.Check, { className: "h-4 w-4" }),
            }),
          }),
          (0, t.jsx)(ev, { children: r }),
        ],
      }),
    );
    ((eH.displayName = ef.displayName),
      (r.forwardRef(({ className: e, ...r }, n) =>
        (0, t.jsx)(eb, {
          ref: n,
          className: (0, eT.cn)("-mx-1 my-1 h-px bg-muted", e),
          ...r,
        }),
      ).displayName = eb.displayName),
      e.s(
        [
          "Select",
          () => W,
          "SelectContent",
          () => eI,
          "SelectItem",
          () => eH,
          "SelectTrigger",
          () => ek,
          "SelectValue",
          () => U,
        ],
        67489,
      ));
  },
]);
