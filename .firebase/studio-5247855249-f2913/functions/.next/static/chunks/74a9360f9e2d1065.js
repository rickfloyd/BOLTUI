(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  90657,
  (e) => {
    "use strict";
    var r = e.i(43476),
      t = e.i(71645),
      n = e.i(22016),
      o = e.i(70703),
      a = e.i(45872),
      s = e.i(71689),
      i = e.i(81140),
      l = e.i(20783),
      d = e.i(30030),
      c = e.i(69340),
      u = e.i(48425),
      p = e.i(75830),
      f = e.i(86318),
      m = e.i(26330),
      h = e.i(3536),
      v = e.i(65491),
      x = e.i(10772),
      g = e.i(53660),
      w = e.i(74606),
      y = e.i(96626),
      b = e.i(30207),
      C = "rovingFocusGroup.onEntryFocus",
      j = { bubbles: !1, cancelable: !0 },
      R = "RovingFocusGroup",
      [E, D, M] = (0, p.createCollection)(R),
      [N, P] = (0, d.createContextScope)(R, [M]),
      [k, I] = N(R),
      S = t.forwardRef((e, t) =>
        (0, r.jsx)(E.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, r.jsx)(E.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, r.jsx)(_, { ...e, ref: t }),
          }),
        }),
      );
    S.displayName = R;
    var _ = t.forwardRef((e, n) => {
        let {
            __scopeRovingFocusGroup: o,
            orientation: a,
            loop: s = !1,
            dir: d,
            currentTabStopId: p,
            defaultCurrentTabStopId: m,
            onCurrentTabStopIdChange: h,
            onEntryFocus: v,
            preventScrollOnEntryFocus: x = !1,
            ...g
          } = e,
          w = t.useRef(null),
          y = (0, l.useComposedRefs)(n, w),
          R = (0, f.useDirection)(d),
          [E = null, M] = (0, c.useControllableState)({
            prop: p,
            defaultProp: m,
            onChange: h,
          }),
          [N, P] = t.useState(!1),
          I = (0, b.useCallbackRef)(v),
          S = D(o),
          _ = t.useRef(!1),
          [T, A] = t.useState(0);
        return (
          t.useEffect(() => {
            let e = w.current;
            if (e)
              return (
                e.addEventListener(C, I),
                () => e.removeEventListener(C, I)
              );
          }, [I]),
          (0, r.jsx)(k, {
            scope: o,
            orientation: a,
            dir: R,
            loop: s,
            currentTabStopId: E,
            onItemFocus: t.useCallback((e) => M(e), [M]),
            onItemShiftTab: t.useCallback(() => P(!0), []),
            onFocusableItemAdd: t.useCallback(() => A((e) => e + 1), []),
            onFocusableItemRemove: t.useCallback(() => A((e) => e - 1), []),
            children: (0, r.jsx)(u.Primitive.div, {
              tabIndex: N || 0 === T ? -1 : 0,
              "data-orientation": a,
              ...g,
              ref: y,
              style: { outline: "none", ...e.style },
              onMouseDown: (0, i.composeEventHandlers)(e.onMouseDown, () => {
                _.current = !0;
              }),
              onFocus: (0, i.composeEventHandlers)(e.onFocus, (e) => {
                let r = !_.current;
                if (e.target === e.currentTarget && r && !N) {
                  let r = new CustomEvent(C, j);
                  if ((e.currentTarget.dispatchEvent(r), !r.defaultPrevented)) {
                    let e = S().filter((e) => e.focusable);
                    H(
                      [e.find((e) => e.active), e.find((e) => e.id === E), ...e]
                        .filter(Boolean)
                        .map((e) => e.ref.current),
                      x,
                    );
                  }
                }
                _.current = !1;
              }),
              onBlur: (0, i.composeEventHandlers)(e.onBlur, () => P(!1)),
            }),
          })
        );
      }),
      T = "RovingFocusGroupItem",
      A = t.forwardRef((e, n) => {
        let {
            __scopeRovingFocusGroup: o,
            focusable: a = !0,
            active: s = !1,
            tabStopId: l,
            ...d
          } = e,
          c = (0, x.useId)(),
          p = l || c,
          f = I(T, o),
          m = f.currentTabStopId === p,
          h = D(o),
          { onFocusableItemAdd: v, onFocusableItemRemove: g } = f;
        return (
          t.useEffect(() => {
            if (a) return (v(), () => g());
          }, [a, v, g]),
          (0, r.jsx)(E.ItemSlot, {
            scope: o,
            id: p,
            focusable: a,
            active: s,
            children: (0, r.jsx)(u.Primitive.span, {
              tabIndex: m ? 0 : -1,
              "data-orientation": f.orientation,
              ...d,
              ref: n,
              onMouseDown: (0, i.composeEventHandlers)(e.onMouseDown, (e) => {
                a ? f.onItemFocus(p) : e.preventDefault();
              }),
              onFocus: (0, i.composeEventHandlers)(e.onFocus, () =>
                f.onItemFocus(p),
              ),
              onKeyDown: (0, i.composeEventHandlers)(e.onKeyDown, (e) => {
                if ("Tab" === e.key && e.shiftKey)
                  return void f.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                let r = (function (e, r, t) {
                  var n;
                  let o =
                    ((n = e.key),
                    "rtl" !== t
                      ? n
                      : "ArrowLeft" === n
                        ? "ArrowRight"
                        : "ArrowRight" === n
                          ? "ArrowLeft"
                          : n);
                  if (
                    !(
                      "vertical" === r &&
                      ["ArrowLeft", "ArrowRight"].includes(o)
                    ) &&
                    !(
                      "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o)
                    )
                  )
                    return F[o];
                })(e, f.orientation, f.dir);
                if (void 0 !== r) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  let o = h()
                    .filter((e) => e.focusable)
                    .map((e) => e.ref.current);
                  if ("last" === r) o.reverse();
                  else if ("prev" === r || "next" === r) {
                    var t, n;
                    "prev" === r && o.reverse();
                    let a = o.indexOf(e.currentTarget);
                    o = f.loop
                      ? ((t = o),
                        (n = a + 1),
                        t.map((e, r) => t[(n + r) % t.length]))
                      : o.slice(a + 1);
                  }
                  setTimeout(() => H(o));
                }
              }),
            }),
          })
        );
      });
    A.displayName = T;
    var F = {
      ArrowLeft: "prev",
      ArrowUp: "prev",
      ArrowRight: "next",
      ArrowDown: "next",
      PageUp: "first",
      Home: "first",
      PageDown: "last",
      End: "last",
    };
    function H(e, r = !1) {
      let t = document.activeElement;
      for (let n of e)
        if (
          n === t ||
          (n.focus({ preventScroll: r }), document.activeElement !== t)
        )
          return;
    }
    var O = t.forwardRef((e, n) => {
      let { children: o, ...a } = e,
        s = t.Children.toArray(o),
        i = s.find(B);
      if (i) {
        let e = i.props.children,
          o = s.map((r) =>
            r !== i
              ? r
              : t.Children.count(e) > 1
                ? t.Children.only(null)
                : t.isValidElement(e)
                  ? e.props.children
                  : null,
          );
        return (0, r.jsx)(L, {
          ...a,
          ref: n,
          children: t.isValidElement(e) ? t.cloneElement(e, void 0, o) : null,
        });
      }
      return (0, r.jsx)(L, { ...a, ref: n, children: o });
    });
    O.displayName = "Slot";
    var L = t.forwardRef((e, r) => {
      let { children: n, ...o } = e;
      if (t.isValidElement(n)) {
        var a;
        let e,
          s,
          i =
            ((a = n),
            (s =
              (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning)
              ? a.ref
              : (s =
                    (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? a.props.ref
                : a.props.ref || a.ref),
          d = (function (e, r) {
            let t = { ...r };
            for (let n in r) {
              let o = e[n],
                a = r[n];
              /^on[A-Z]/.test(n)
                ? o && a
                  ? (t[n] = (...e) => {
                      (a(...e), o(...e));
                    })
                  : o && (t[n] = o)
                : "style" === n
                  ? (t[n] = { ...o, ...a })
                  : "className" === n &&
                    (t[n] = [o, a].filter(Boolean).join(" "));
            }
            return { ...e, ...t };
          })(o, n.props);
        return (
          n.type !== t.Fragment && (d.ref = r ? (0, l.composeRefs)(r, i) : i),
          t.cloneElement(n, d)
        );
      }
      return t.Children.count(n) > 1 ? t.Children.only(null) : null;
    });
    L.displayName = "SlotClone";
    var K = ({ children: e }) => (0, r.jsx)(r.Fragment, { children: e });
    function B(e) {
      return t.isValidElement(e) && e.type === K;
    }
    var U = e.i(86312),
      G = e.i(85369),
      V = ["Enter", " "],
      X = ["ArrowUp", "PageDown", "End"],
      Y = ["ArrowDown", "PageUp", "Home", ...X],
      z = { ltr: [...V, "ArrowRight"], rtl: [...V, "ArrowLeft"] },
      W = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
      J = "Menu",
      [Z, q, Q] = (0, p.createCollection)(J),
      [$, ee] = (0, d.createContextScope)(J, [Q, g.createPopperScope, P]),
      er = (0, g.createPopperScope)(),
      et = P(),
      [en, eo] = $(J),
      [ea, es] = $(J),
      ei = (e) => {
        let {
            __scopeMenu: n,
            open: o = !1,
            children: a,
            dir: s,
            onOpenChange: i,
            modal: l = !0,
          } = e,
          d = er(n),
          [c, u] = t.useState(null),
          p = t.useRef(!1),
          m = (0, b.useCallbackRef)(i),
          h = (0, f.useDirection)(s);
        return (
          t.useEffect(() => {
            let e = () => {
                ((p.current = !0),
                  document.addEventListener("pointerdown", r, {
                    capture: !0,
                    once: !0,
                  }),
                  document.addEventListener("pointermove", r, {
                    capture: !0,
                    once: !0,
                  }));
              },
              r = () => (p.current = !1);
            return (
              document.addEventListener("keydown", e, { capture: !0 }),
              () => {
                (document.removeEventListener("keydown", e, { capture: !0 }),
                  document.removeEventListener("pointerdown", r, {
                    capture: !0,
                  }),
                  document.removeEventListener("pointermove", r, {
                    capture: !0,
                  }));
              }
            );
          }, []),
          (0, r.jsx)(g.Root, {
            ...d,
            children: (0, r.jsx)(en, {
              scope: n,
              open: o,
              onOpenChange: m,
              content: c,
              onContentChange: u,
              children: (0, r.jsx)(ea, {
                scope: n,
                onClose: t.useCallback(() => m(!1), [m]),
                isUsingKeyboardRef: p,
                dir: h,
                modal: l,
                children: a,
              }),
            }),
          })
        );
      };
    ei.displayName = J;
    var el = t.forwardRef((e, t) => {
      let { __scopeMenu: n, ...o } = e,
        a = er(n);
      return (0, r.jsx)(g.Anchor, { ...a, ...o, ref: t });
    });
    el.displayName = "MenuAnchor";
    var ed = "MenuPortal",
      [ec, eu] = $(ed, { forceMount: void 0 }),
      ep = (e) => {
        let { __scopeMenu: t, forceMount: n, children: o, container: a } = e,
          s = eo(ed, t);
        return (0, r.jsx)(ec, {
          scope: t,
          forceMount: n,
          children: (0, r.jsx)(y.Presence, {
            present: n || s.open,
            children: (0, r.jsx)(w.Portal, {
              asChild: !0,
              container: a,
              children: o,
            }),
          }),
        });
      };
    ep.displayName = ed;
    var ef = "MenuContent",
      [em, eh] = $(ef),
      ev = t.forwardRef((e, t) => {
        let n = eu(ef, e.__scopeMenu),
          { forceMount: o = n.forceMount, ...a } = e,
          s = eo(ef, e.__scopeMenu),
          i = es(ef, e.__scopeMenu);
        return (0, r.jsx)(Z.Provider, {
          scope: e.__scopeMenu,
          children: (0, r.jsx)(y.Presence, {
            present: o || s.open,
            children: (0, r.jsx)(Z.Slot, {
              scope: e.__scopeMenu,
              children: i.modal
                ? (0, r.jsx)(ex, { ...a, ref: t })
                : (0, r.jsx)(eg, { ...a, ref: t }),
            }),
          }),
        });
      }),
      ex = t.forwardRef((e, n) => {
        let o = eo(ef, e.__scopeMenu),
          a = t.useRef(null),
          s = (0, l.useComposedRefs)(n, a);
        return (
          t.useEffect(() => {
            let e = a.current;
            if (e) return (0, U.hideOthers)(e);
          }, []),
          (0, r.jsx)(ew, {
            ...e,
            ref: s,
            trapFocus: o.open,
            disableOutsidePointerEvents: o.open,
            disableOutsideScroll: !0,
            onFocusOutside: (0, i.composeEventHandlers)(
              e.onFocusOutside,
              (e) => e.preventDefault(),
              { checkForDefaultPrevented: !1 },
            ),
            onDismiss: () => o.onOpenChange(!1),
          })
        );
      }),
      eg = t.forwardRef((e, t) => {
        let n = eo(ef, e.__scopeMenu);
        return (0, r.jsx)(ew, {
          ...e,
          ref: t,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          disableOutsideScroll: !1,
          onDismiss: () => n.onOpenChange(!1),
        });
      }),
      ew = t.forwardRef((e, n) => {
        let {
            __scopeMenu: o,
            loop: a = !1,
            trapFocus: s,
            onOpenAutoFocus: d,
            onCloseAutoFocus: c,
            disableOutsidePointerEvents: u,
            onEntryFocus: p,
            onEscapeKeyDown: f,
            onPointerDownOutside: x,
            onFocusOutside: w,
            onInteractOutside: y,
            onDismiss: b,
            disableOutsideScroll: C,
            ...j
          } = e,
          R = eo(ef, o),
          E = es(ef, o),
          D = er(o),
          M = et(o),
          N = q(o),
          [P, k] = t.useState(null),
          I = t.useRef(null),
          _ = (0, l.useComposedRefs)(n, I, R.onContentChange),
          T = t.useRef(0),
          A = t.useRef(""),
          F = t.useRef(0),
          H = t.useRef(null),
          L = t.useRef("right"),
          K = t.useRef(0),
          B = C ? G.RemoveScroll : t.Fragment,
          U = C ? { as: O, allowPinchZoom: !0 } : void 0;
        (t.useEffect(() => () => window.clearTimeout(T.current), []),
          (0, h.useFocusGuards)());
        let V = t.useCallback((e) => {
          var r, t;
          return (
            L.current === H.current?.side &&
            ((r = e),
            !!(t = H.current?.area) &&
              (function (e, r) {
                let { x: t, y: n } = e,
                  o = !1;
                for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
                  let s = r[e].x,
                    i = r[e].y,
                    l = r[a].x,
                    d = r[a].y;
                  i > n != d > n &&
                    t < ((l - s) * (n - i)) / (d - i) + s &&
                    (o = !o);
                }
                return o;
              })({ x: r.clientX, y: r.clientY }, t))
          );
        }, []);
        return (0, r.jsx)(em, {
          scope: o,
          searchRef: A,
          onItemEnter: t.useCallback(
            (e) => {
              V(e) && e.preventDefault();
            },
            [V],
          ),
          onItemLeave: t.useCallback(
            (e) => {
              V(e) || (I.current?.focus(), k(null));
            },
            [V],
          ),
          onTriggerLeave: t.useCallback(
            (e) => {
              V(e) && e.preventDefault();
            },
            [V],
          ),
          pointerGraceTimerRef: F,
          onPointerGraceIntentChange: t.useCallback((e) => {
            H.current = e;
          }, []),
          children: (0, r.jsx)(B, {
            ...U,
            children: (0, r.jsx)(v.FocusScope, {
              asChild: !0,
              trapped: s,
              onMountAutoFocus: (0, i.composeEventHandlers)(d, (e) => {
                (e.preventDefault(), I.current?.focus({ preventScroll: !0 }));
              }),
              onUnmountAutoFocus: c,
              children: (0, r.jsx)(m.DismissableLayer, {
                asChild: !0,
                disableOutsidePointerEvents: u,
                onEscapeKeyDown: f,
                onPointerDownOutside: x,
                onFocusOutside: w,
                onInteractOutside: y,
                onDismiss: b,
                children: (0, r.jsx)(S, {
                  asChild: !0,
                  ...M,
                  dir: E.dir,
                  orientation: "vertical",
                  loop: a,
                  currentTabStopId: P,
                  onCurrentTabStopIdChange: k,
                  onEntryFocus: (0, i.composeEventHandlers)(p, (e) => {
                    E.isUsingKeyboardRef.current || e.preventDefault();
                  }),
                  preventScrollOnEntryFocus: !0,
                  children: (0, r.jsx)(g.Content, {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": eX(R.open),
                    "data-radix-menu-content": "",
                    dir: E.dir,
                    ...D,
                    ...j,
                    ref: _,
                    style: { outline: "none", ...j.style },
                    onKeyDown: (0, i.composeEventHandlers)(j.onKeyDown, (e) => {
                      let r =
                          e.target.closest("[data-radix-menu-content]") ===
                          e.currentTarget,
                        t = e.ctrlKey || e.altKey || e.metaKey,
                        n = 1 === e.key.length;
                      if (r) {
                        var o;
                        let r, a, s, i, l, d;
                        ("Tab" === e.key && e.preventDefault(),
                          !t &&
                            n &&
                            ((o = e.key),
                            (r = A.current + o),
                            (a = N().filter((e) => !e.disabled)),
                            (s = document.activeElement),
                            (i = a.find((e) => e.ref.current === s)?.textValue),
                            (l = (function (e, r, t) {
                              var n;
                              let o =
                                  r.length > 1 &&
                                  Array.from(r).every((e) => e === r[0])
                                    ? r[0]
                                    : r,
                                a = t ? e.indexOf(t) : -1,
                                s =
                                  ((n = Math.max(a, 0)),
                                  e.map((r, t) => e[(n + t) % e.length]));
                              1 === o.length && (s = s.filter((e) => e !== t));
                              let i = s.find((e) =>
                                e.toLowerCase().startsWith(o.toLowerCase()),
                              );
                              return i !== t ? i : void 0;
                            })(
                              a.map((e) => e.textValue),
                              r,
                              i,
                            )),
                            (d = a.find((e) => e.textValue === l)?.ref.current),
                            (function e(r) {
                              ((A.current = r),
                                window.clearTimeout(T.current),
                                "" !== r &&
                                  (T.current = window.setTimeout(
                                    () => e(""),
                                    1e3,
                                  )));
                            })(r),
                            d && setTimeout(() => d.focus())));
                      }
                      let a = I.current;
                      if (e.target !== a || !Y.includes(e.key)) return;
                      e.preventDefault();
                      let s = N()
                        .filter((e) => !e.disabled)
                        .map((e) => e.ref.current);
                      (X.includes(e.key) && s.reverse(),
                        (function (e) {
                          let r = document.activeElement;
                          for (let t of e)
                            if (
                              t === r ||
                              (t.focus(), document.activeElement !== r)
                            )
                              return;
                        })(s));
                    }),
                    onBlur: (0, i.composeEventHandlers)(e.onBlur, (e) => {
                      e.currentTarget.contains(e.target) ||
                        (window.clearTimeout(T.current), (A.current = ""));
                    }),
                    onPointerMove: (0, i.composeEventHandlers)(
                      e.onPointerMove,
                      eW((e) => {
                        let r = e.target,
                          t = K.current !== e.clientX;
                        e.currentTarget.contains(r) &&
                          t &&
                          ((L.current =
                            e.clientX > K.current ? "right" : "left"),
                          (K.current = e.clientX));
                      }),
                    ),
                  }),
                }),
              }),
            }),
          }),
        });
      });
    ev.displayName = ef;
    var ey = t.forwardRef((e, t) => {
      let { __scopeMenu: n, ...o } = e;
      return (0, r.jsx)(u.Primitive.div, { role: "group", ...o, ref: t });
    });
    ey.displayName = "MenuGroup";
    var eb = t.forwardRef((e, t) => {
      let { __scopeMenu: n, ...o } = e;
      return (0, r.jsx)(u.Primitive.div, { ...o, ref: t });
    });
    eb.displayName = "MenuLabel";
    var eC = "MenuItem",
      ej = "menu.itemSelect",
      eR = t.forwardRef((e, n) => {
        let { disabled: o = !1, onSelect: a, ...s } = e,
          d = t.useRef(null),
          c = es(eC, e.__scopeMenu),
          p = eh(eC, e.__scopeMenu),
          f = (0, l.useComposedRefs)(n, d),
          m = t.useRef(!1);
        return (0, r.jsx)(eE, {
          ...s,
          ref: f,
          disabled: o,
          onClick: (0, i.composeEventHandlers)(e.onClick, () => {
            let e = d.current;
            if (!o && e) {
              let r = new CustomEvent(ej, { bubbles: !0, cancelable: !0 });
              (e.addEventListener(ej, (e) => a?.(e), { once: !0 }),
                (0, u.dispatchDiscreteCustomEvent)(e, r),
                r.defaultPrevented ? (m.current = !1) : c.onClose());
            }
          }),
          onPointerDown: (r) => {
            (e.onPointerDown?.(r), (m.current = !0));
          },
          onPointerUp: (0, i.composeEventHandlers)(e.onPointerUp, (e) => {
            m.current || e.currentTarget?.click();
          }),
          onKeyDown: (0, i.composeEventHandlers)(e.onKeyDown, (e) => {
            let r = "" !== p.searchRef.current;
            o ||
              (r && " " === e.key) ||
              (V.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault()));
          }),
        });
      });
    eR.displayName = eC;
    var eE = t.forwardRef((e, n) => {
        let { __scopeMenu: o, disabled: a = !1, textValue: s, ...d } = e,
          c = eh(eC, o),
          p = et(o),
          f = t.useRef(null),
          m = (0, l.useComposedRefs)(n, f),
          [h, v] = t.useState(!1),
          [x, g] = t.useState("");
        return (
          t.useEffect(() => {
            let e = f.current;
            e && g((e.textContent ?? "").trim());
          }, [d.children]),
          (0, r.jsx)(Z.ItemSlot, {
            scope: o,
            disabled: a,
            textValue: s ?? x,
            children: (0, r.jsx)(A, {
              asChild: !0,
              ...p,
              focusable: !a,
              children: (0, r.jsx)(u.Primitive.div, {
                role: "menuitem",
                "data-highlighted": h ? "" : void 0,
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                ...d,
                ref: m,
                onPointerMove: (0, i.composeEventHandlers)(
                  e.onPointerMove,
                  eW((e) => {
                    a
                      ? c.onItemLeave(e)
                      : (c.onItemEnter(e),
                        e.defaultPrevented ||
                          e.currentTarget.focus({ preventScroll: !0 }));
                  }),
                ),
                onPointerLeave: (0, i.composeEventHandlers)(
                  e.onPointerLeave,
                  eW((e) => c.onItemLeave(e)),
                ),
                onFocus: (0, i.composeEventHandlers)(e.onFocus, () => v(!0)),
                onBlur: (0, i.composeEventHandlers)(e.onBlur, () => v(!1)),
              }),
            }),
          })
        );
      }),
      eD = t.forwardRef((e, t) => {
        let { checked: n = !1, onCheckedChange: o, ...a } = e;
        return (0, r.jsx)(eT, {
          scope: e.__scopeMenu,
          checked: n,
          children: (0, r.jsx)(eR, {
            role: "menuitemcheckbox",
            "aria-checked": eY(n) ? "mixed" : n,
            ...a,
            ref: t,
            "data-state": ez(n),
            onSelect: (0, i.composeEventHandlers)(
              a.onSelect,
              () => o?.(!!eY(n) || !n),
              { checkForDefaultPrevented: !1 },
            ),
          }),
        });
      });
    eD.displayName = "MenuCheckboxItem";
    var eM = "MenuRadioGroup",
      [eN, eP] = $(eM, { value: void 0, onValueChange: () => {} }),
      ek = t.forwardRef((e, t) => {
        let { value: n, onValueChange: o, ...a } = e,
          s = (0, b.useCallbackRef)(o);
        return (0, r.jsx)(eN, {
          scope: e.__scopeMenu,
          value: n,
          onValueChange: s,
          children: (0, r.jsx)(ey, { ...a, ref: t }),
        });
      });
    ek.displayName = eM;
    var eI = "MenuRadioItem",
      eS = t.forwardRef((e, t) => {
        let { value: n, ...o } = e,
          a = eP(eI, e.__scopeMenu),
          s = n === a.value;
        return (0, r.jsx)(eT, {
          scope: e.__scopeMenu,
          checked: s,
          children: (0, r.jsx)(eR, {
            role: "menuitemradio",
            "aria-checked": s,
            ...o,
            ref: t,
            "data-state": ez(s),
            onSelect: (0, i.composeEventHandlers)(
              o.onSelect,
              () => a.onValueChange?.(n),
              { checkForDefaultPrevented: !1 },
            ),
          }),
        });
      });
    eS.displayName = eI;
    var e_ = "MenuItemIndicator",
      [eT, eA] = $(e_, { checked: !1 }),
      eF = t.forwardRef((e, t) => {
        let { __scopeMenu: n, forceMount: o, ...a } = e,
          s = eA(e_, n);
        return (0, r.jsx)(y.Presence, {
          present: o || eY(s.checked) || !0 === s.checked,
          children: (0, r.jsx)(u.Primitive.span, {
            ...a,
            ref: t,
            "data-state": ez(s.checked),
          }),
        });
      });
    eF.displayName = e_;
    var eH = t.forwardRef((e, t) => {
      let { __scopeMenu: n, ...o } = e;
      return (0, r.jsx)(u.Primitive.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t,
      });
    });
    eH.displayName = "MenuSeparator";
    var eO = t.forwardRef((e, t) => {
      let { __scopeMenu: n, ...o } = e,
        a = er(n);
      return (0, r.jsx)(g.Arrow, { ...a, ...o, ref: t });
    });
    eO.displayName = "MenuArrow";
    var [eL, eK] = $("MenuSub"),
      eB = "MenuSubTrigger",
      eU = t.forwardRef((e, n) => {
        let o = eo(eB, e.__scopeMenu),
          a = es(eB, e.__scopeMenu),
          s = eK(eB, e.__scopeMenu),
          d = eh(eB, e.__scopeMenu),
          c = t.useRef(null),
          { pointerGraceTimerRef: u, onPointerGraceIntentChange: p } = d,
          f = { __scopeMenu: e.__scopeMenu },
          m = t.useCallback(() => {
            (c.current && window.clearTimeout(c.current), (c.current = null));
          }, []);
        return (
          t.useEffect(() => m, [m]),
          t.useEffect(() => {
            let e = u.current;
            return () => {
              (window.clearTimeout(e), p(null));
            };
          }, [u, p]),
          (0, r.jsx)(el, {
            asChild: !0,
            ...f,
            children: (0, r.jsx)(eE, {
              id: s.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": o.open,
              "aria-controls": s.contentId,
              "data-state": eX(o.open),
              ...e,
              ref: (0, l.composeRefs)(n, s.onTriggerChange),
              onClick: (r) => {
                (e.onClick?.(r),
                  e.disabled ||
                    r.defaultPrevented ||
                    (r.currentTarget.focus(), o.open || o.onOpenChange(!0)));
              },
              onPointerMove: (0, i.composeEventHandlers)(
                e.onPointerMove,
                eW((r) => {
                  (d.onItemEnter(r),
                    !r.defaultPrevented &&
                      (e.disabled ||
                        o.open ||
                        c.current ||
                        (d.onPointerGraceIntentChange(null),
                        (c.current = window.setTimeout(() => {
                          (o.onOpenChange(!0), m());
                        }, 100)))));
                }),
              ),
              onPointerLeave: (0, i.composeEventHandlers)(
                e.onPointerLeave,
                eW((e) => {
                  m();
                  let r = o.content?.getBoundingClientRect();
                  if (r) {
                    let t = o.content?.dataset.side,
                      n = "right" === t,
                      a = r[n ? "left" : "right"],
                      s = r[n ? "right" : "left"];
                    (d.onPointerGraceIntentChange({
                      area: [
                        { x: e.clientX + (n ? -5 : 5), y: e.clientY },
                        { x: a, y: r.top },
                        { x: s, y: r.top },
                        { x: s, y: r.bottom },
                        { x: a, y: r.bottom },
                      ],
                      side: t,
                    }),
                      window.clearTimeout(u.current),
                      (u.current = window.setTimeout(
                        () => d.onPointerGraceIntentChange(null),
                        300,
                      )));
                  } else {
                    if ((d.onTriggerLeave(e), e.defaultPrevented)) return;
                    d.onPointerGraceIntentChange(null);
                  }
                }),
              ),
              onKeyDown: (0, i.composeEventHandlers)(e.onKeyDown, (r) => {
                let t = "" !== d.searchRef.current;
                e.disabled ||
                  (t && " " === r.key) ||
                  (z[a.dir].includes(r.key) &&
                    (o.onOpenChange(!0),
                    o.content?.focus(),
                    r.preventDefault()));
              }),
            }),
          })
        );
      });
    eU.displayName = eB;
    var eG = "MenuSubContent",
      eV = t.forwardRef((e, n) => {
        let o = eu(ef, e.__scopeMenu),
          { forceMount: a = o.forceMount, ...s } = e,
          d = eo(ef, e.__scopeMenu),
          c = es(ef, e.__scopeMenu),
          u = eK(eG, e.__scopeMenu),
          p = t.useRef(null),
          f = (0, l.useComposedRefs)(n, p);
        return (0, r.jsx)(Z.Provider, {
          scope: e.__scopeMenu,
          children: (0, r.jsx)(y.Presence, {
            present: a || d.open,
            children: (0, r.jsx)(Z.Slot, {
              scope: e.__scopeMenu,
              children: (0, r.jsx)(ew, {
                id: u.contentId,
                "aria-labelledby": u.triggerId,
                ...s,
                ref: f,
                align: "start",
                side: "rtl" === c.dir ? "left" : "right",
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: (e) => {
                  (c.isUsingKeyboardRef.current && p.current?.focus(),
                    e.preventDefault());
                },
                onCloseAutoFocus: (e) => e.preventDefault(),
                onFocusOutside: (0, i.composeEventHandlers)(
                  e.onFocusOutside,
                  (e) => {
                    e.target !== u.trigger && d.onOpenChange(!1);
                  },
                ),
                onEscapeKeyDown: (0, i.composeEventHandlers)(
                  e.onEscapeKeyDown,
                  (e) => {
                    (c.onClose(), e.preventDefault());
                  },
                ),
                onKeyDown: (0, i.composeEventHandlers)(e.onKeyDown, (e) => {
                  let r = e.currentTarget.contains(e.target),
                    t = W[c.dir].includes(e.key);
                  r &&
                    t &&
                    (d.onOpenChange(!1),
                    u.trigger?.focus(),
                    e.preventDefault());
                }),
              }),
            }),
          }),
        });
      });
    function eX(e) {
      return e ? "open" : "closed";
    }
    function eY(e) {
      return "indeterminate" === e;
    }
    function ez(e) {
      return eY(e) ? "indeterminate" : e ? "checked" : "unchecked";
    }
    function eW(e) {
      return (r) => ("mouse" === r.pointerType ? e(r) : void 0);
    }
    eV.displayName = eG;
    var eJ = "DropdownMenu",
      [eZ, eq] = (0, d.createContextScope)(eJ, [ee]),
      eQ = ee(),
      [e$, e0] = eZ(eJ),
      e1 = (e) => {
        let {
            __scopeDropdownMenu: n,
            children: o,
            dir: a,
            open: s,
            defaultOpen: i,
            onOpenChange: l,
            modal: d = !0,
          } = e,
          u = eQ(n),
          p = t.useRef(null),
          [f = !1, m] = (0, c.useControllableState)({
            prop: s,
            defaultProp: i,
            onChange: l,
          });
        return (0, r.jsx)(e$, {
          scope: n,
          triggerId: (0, x.useId)(),
          triggerRef: p,
          contentId: (0, x.useId)(),
          open: f,
          onOpenChange: m,
          onOpenToggle: t.useCallback(() => m((e) => !e), [m]),
          modal: d,
          children: (0, r.jsx)(ei, {
            ...u,
            open: f,
            onOpenChange: m,
            dir: a,
            modal: d,
            children: o,
          }),
        });
      };
    e1.displayName = eJ;
    var e5 = "DropdownMenuTrigger",
      e2 = t.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, disabled: o = !1, ...a } = e,
          s = e0(e5, n),
          d = eQ(n);
        return (0, r.jsx)(el, {
          asChild: !0,
          ...d,
          children: (0, r.jsx)(u.Primitive.button, {
            type: "button",
            id: s.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": s.open,
            "aria-controls": s.open ? s.contentId : void 0,
            "data-state": s.open ? "open" : "closed",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            ...a,
            ref: (0, l.composeRefs)(t, s.triggerRef),
            onPointerDown: (0, i.composeEventHandlers)(e.onPointerDown, (e) => {
              !o &&
                0 === e.button &&
                !1 === e.ctrlKey &&
                (s.onOpenToggle(), s.open || e.preventDefault());
            }),
            onKeyDown: (0, i.composeEventHandlers)(e.onKeyDown, (e) => {
              !o &&
                (["Enter", " "].includes(e.key) && s.onOpenToggle(),
                "ArrowDown" === e.key && s.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(e.key) &&
                  e.preventDefault());
            }),
          }),
        });
      });
    e2.displayName = e5;
    var e3 = (e) => {
      let { __scopeDropdownMenu: t, ...n } = e,
        o = eQ(t);
      return (0, r.jsx)(ep, { ...o, ...n });
    };
    e3.displayName = "DropdownMenuPortal";
    var e6 = "DropdownMenuContent",
      e4 = t.forwardRef((e, n) => {
        let { __scopeDropdownMenu: o, ...a } = e,
          s = e0(e6, o),
          l = eQ(o),
          d = t.useRef(!1);
        return (0, r.jsx)(ev, {
          id: s.contentId,
          "aria-labelledby": s.triggerId,
          ...l,
          ...a,
          ref: n,
          onCloseAutoFocus: (0, i.composeEventHandlers)(
            e.onCloseAutoFocus,
            (e) => {
              (d.current || s.triggerRef.current?.focus(),
                (d.current = !1),
                e.preventDefault());
            },
          ),
          onInteractOutside: (0, i.composeEventHandlers)(
            e.onInteractOutside,
            (e) => {
              let r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey,
                n = 2 === r.button || t;
              (!s.modal || n) && (d.current = !0);
            },
          ),
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
    ((e4.displayName = e6),
      (t.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...o } = e,
          a = eQ(n);
        return (0, r.jsx)(ey, { ...a, ...o, ref: t });
      }).displayName = "DropdownMenuGroup"));
    var e8 = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eb, { ...a, ...o, ref: t });
    });
    e8.displayName = "DropdownMenuLabel";
    var e7 = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eR, { ...a, ...o, ref: t });
    });
    e7.displayName = "DropdownMenuItem";
    var e9 = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eD, { ...a, ...o, ref: t });
    });
    e9.displayName = "DropdownMenuCheckboxItem";
    var re = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(ek, { ...a, ...o, ref: t });
    });
    re.displayName = "DropdownMenuRadioGroup";
    var rr = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eS, { ...a, ...o, ref: t });
    });
    rr.displayName = "DropdownMenuRadioItem";
    var rt = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eF, { ...a, ...o, ref: t });
    });
    rt.displayName = "DropdownMenuItemIndicator";
    var rn = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eH, { ...a, ...o, ref: t });
    });
    ((rn.displayName = "DropdownMenuSeparator"),
      (t.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...o } = e,
          a = eQ(n);
        return (0, r.jsx)(eO, { ...a, ...o, ref: t });
      }).displayName = "DropdownMenuArrow"));
    var ro = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eU, { ...a, ...o, ref: t });
    });
    ro.displayName = "DropdownMenuSubTrigger";
    var ra = t.forwardRef((e, t) => {
      let { __scopeDropdownMenu: n, ...o } = e,
        a = eQ(n);
      return (0, r.jsx)(eV, {
        ...a,
        ...o,
        ref: t,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width":
            "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height":
            "var(--radix-popper-anchor-height)",
        },
      });
    });
    ra.displayName = "DropdownMenuSubContent";
    var rs = e.i(43531),
      ri = e.i(75254);
    let rl = (0, ri.default)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]),
      rd = (0, ri.default)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    var rc = e.i(75157);
    ((t.forwardRef(({ className: e, inset: t, children: n, ...o }, a) =>
      (0, r.jsxs)(ro, {
        ref: a,
        className: (0, rc.cn)(
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
          t && "pl-8",
          e,
        ),
        ...o,
        children: [n, (0, r.jsx)(rl, { className: "ml-auto h-4 w-4" })],
      }),
    ).displayName = ro.displayName),
      (t.forwardRef(({ className: e, ...t }, n) =>
        (0, r.jsx)(ra, {
          ref: n,
          className: (0, rc.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e,
          ),
          ...t,
        }),
      ).displayName = ra.displayName));
    let ru = t.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) =>
      (0, r.jsx)(e3, {
        children: (0, r.jsx)(e4, {
          ref: o,
          sideOffset: t,
          className: (0, rc.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e,
          ),
          ...n,
        }),
      }),
    );
    ((ru.displayName = e4.displayName),
      (t.forwardRef(({ className: e, inset: t, ...n }, o) =>
        (0, r.jsx)(e7, {
          ref: o,
          className: (0, rc.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            t && "pl-8",
            e,
          ),
          ...n,
        }),
      ).displayName = e7.displayName),
      (t.forwardRef(({ className: e, children: t, checked: n, ...o }, a) =>
        (0, r.jsxs)(e9, {
          ref: a,
          className: (0, rc.cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            e,
          ),
          checked: n,
          ...o,
          children: [
            (0, r.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, r.jsx)(rt, {
                children: (0, r.jsx)(rs.Check, { className: "h-4 w-4" }),
              }),
            }),
            t,
          ],
        }),
      ).displayName = e9.displayName));
    let rp = t.forwardRef(({ className: e, children: t, ...n }, o) =>
      (0, r.jsxs)(rr, {
        ref: o,
        className: (0, rc.cn)(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          e,
        ),
        ...n,
        children: [
          (0, r.jsx)("span", {
            className:
              "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
            children: (0, r.jsx)(rt, {
              children: (0, r.jsx)(rd, { className: "h-2 w-2 fill-current" }),
            }),
          }),
          t,
        ],
      }),
    );
    rp.displayName = rr.displayName;
    let rf = t.forwardRef(({ className: e, inset: t, ...n }, o) =>
      (0, r.jsx)(e8, {
        ref: o,
        className: (0, rc.cn)(
          "px-2 py-1.5 text-sm font-semibold",
          t && "pl-8",
          e,
        ),
        ...n,
      }),
    );
    rf.displayName = e8.displayName;
    let rm = t.forwardRef(({ className: e, ...t }, n) =>
      (0, r.jsx)(rn, {
        ref: n,
        className: (0, rc.cn)("-mx-1 my-1 h-px bg-muted", e),
        ...t,
      }),
    );
    rm.displayName = rn.displayName;
    var rh = e.i(19455),
      rv = e.i(93479);
    let rx = (0, o.default)(() => e.A(11698), {
        loadableGenerated: { modules: [26084] },
        ssr: !1,
      }),
      rg = {
        DXY: {
          name: "U.S. Dollar Index",
          description:
            "Measures the value of the U.S. Dollar against a basket of foreign currencies.",
        },
        EXY: {
          name: "Euro Index",
          description:
            "Measures the value of the Euro against a basket of other major currencies.",
        },
        BXY: {
          name: "British Pound Index",
          description:
            "Measures the value of the British Pound against other major currencies.",
        },
        JXY: {
          name: "Japanese Yen Index",
          description:
            "Measures the value of the Japanese Yen against other major currencies.",
        },
        CXY: {
          name: "Canadian Dollar Index",
          description:
            "Measures the value of the Canadian Dollar against other major currencies.",
        },
        AXY: {
          name: "Australian Dollar Index",
          description:
            "Measures the value of the Australian Dollar against other major currencies.",
        },
      },
      rw = [
        "Line Chart",
        "Bar Chart (OHLC)",
        "Candlestick Chart (Japanese Candlesticks)",
        "Area Chart",
        "Heikin Ashi",
        "Renko",
        "Point & Figure (P&F)",
        "Kagi",
        "Line Break",
        "Range Bars",
        "Tick Chart",
        "Volume Chart",
        "Hollow Candles",
        "Scatter Plot",
        "Pie Chart",
        "Histogram",
        "Waterfall Chart",
        "Heatmap",
        "Bubble Chart",
        "Radar Chart (Spider Chart)",
        "Treemap",
        "Box Plot (Box & Whisker)",
      ];
    function ry({ index: e }) {
      let o = rg[e.toUpperCase()] || {
          name: "Unknown Index",
          description: "No description available.",
        },
        [i, l] = (0, t.useState)("Line Chart"),
        [d, c] = (0, t.useState)("");
      return (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(a.Header, {}),
          (0, r.jsx)("main", {
            className: "dashboard-grid",
            children: (0, r.jsxs)("div", {
              className: "center-content",
              children: [
                (0, r.jsxs)("div", {
                  className: "info-banner",
                  children: [
                    (0, r.jsxs)("h1", {
                      className: "text-3xl font-bold neon-text",
                      children: [o.name, " (", e.toUpperCase(), ")"],
                    }),
                    (0, r.jsx)("p", {
                      className: "text-lg mt-2 text-gray-300",
                      children: o.description,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex justify-between items-center w-full",
                  children: [
                    (0, r.jsxs)(e1, {
                      children: [
                        (0, r.jsx)(e2, {
                          asChild: !0,
                          children: (0, r.jsxs)(rh.Button, {
                            variant: "outline",
                            className: "text-white border-cyan-400",
                            children: ["Chart Style: ", i],
                          }),
                        }),
                        (0, r.jsxs)(ru, {
                          className: "w-56 bg-black text-white border-cyan-400",
                          children: [
                            (0, r.jsx)(rf, { children: "Select Chart Style" }),
                            (0, r.jsx)(rm, {}),
                            (0, r.jsx)(re, {
                              value: i,
                              onValueChange: l,
                              children: rw.map((e) =>
                                (0, r.jsx)(
                                  rp,
                                  {
                                    value: e,
                                    disabled: ![
                                      "Line Chart",
                                      "Bar Chart (OHLC)",
                                      "Area Chart",
                                    ].includes(e),
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "w-1/3",
                      children: (0, r.jsx)(rv.Input, {
                        type: "text",
                        placeholder: "Search in chart...",
                        value: d,
                        onChange: (e) => c(e.target.value),
                        className:
                          "p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "w-full h-[500px]",
                  children: (0, r.jsx)(rx, { index: e, chartType: i }),
                }),
              ],
            }),
          }),
          (0, r.jsxs)(n.default, {
            href: "/profile",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, r.jsx)(s.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => ry], 90657);
  },
]);
