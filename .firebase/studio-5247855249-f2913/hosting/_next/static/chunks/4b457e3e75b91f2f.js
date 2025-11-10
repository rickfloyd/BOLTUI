(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return u;
      },
      urlQueryToSearchParams: function () {
        return i;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function u(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
            ? e.push(n)
            : (t[r] = [e, n]);
      }
      return t;
    }
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function i(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return i;
      },
      formatWithValidation: function () {
        return s;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(90809)._(e.r(98183)),
      a = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        i = e.hash || "",
        l = e.query || "",
        s = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (s = t + e.host)
          : r &&
            ((s = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (s += ":" + e.port)),
        l && "object" == typeof l && (l = String(u.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== s)
          ? ((s = "//" + (s || "")), o && "/" !== o[0] && (o = "/" + o))
          : s || (s = ""),
        i && "#" !== i[0] && (i = "#" + i),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${s}${o}${c}${i}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function s(e) {
      return i(e);
    }
  },
  18581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(71645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = u(e, n)), t && (o.current = u(t, n)));
        },
        [e, t],
      );
    }
    function u(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18967,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return b;
      },
      MiddlewareNotFoundError: function () {
        return _;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return m;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return y;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return u;
      },
      execOnce: function () {
        return a;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return s;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return P;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => i.test(e);
    function s() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = s();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let y = "undefined" != typeof performance,
      g =
        y &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class b extends Error {}
    class m extends Error {}
    class x extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class v extends Error {
      constructor(e, t) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class _ extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function P(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    let n = e.r(18967),
      o = e.r(52817);
    function u(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  22016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return b;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(90809),
      a = e.r(43476),
      i = u._(e.r(71645)),
      l = e.r(95057),
      s = e.r(8372),
      c = e.r(18581),
      f = e.r(18967),
      d = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      h = e.r(73668),
      y = e.r(65165);
    function g(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function b(t) {
      var r;
      let n,
        o,
        u,
        [l, b] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS),
        x = (0, i.useRef)(null),
        {
          href: v,
          as: _,
          children: P,
          prefetch: j = null,
          passHref: O,
          replace: E,
          shallow: N,
          scroll: S,
          onClick: w,
          onMouseEnter: T,
          onTouchStart: C,
          legacyBehavior: k = !1,
          onNavigate: R,
          ref: L,
          unstable_dynamicOnHover: A,
          ...M
        } = t;
      ((n = P),
        k &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, a.jsx)("a", { children: n })));
      let U = i.default.useContext(s.AppRouterContext),
        I = !1 !== j,
        $ =
          !1 !== j
            ? null === (r = j) || "auto" === r
              ? y.FetchStrategy.PPR
              : y.FetchStrategy.Full
            : y.FetchStrategy.PPR,
        { href: F, as: B } = i.default.useMemo(() => {
          let e = g(v);
          return { href: e, as: _ ? g(_) : e };
        }, [v, _]);
      if (k) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        o = i.default.Children.only(n);
      }
      let D = k ? o && "object" == typeof o && o.ref : L,
        K = i.default.useCallback(
          (e) => (
            null !== U &&
              (x.current = (0, p.mountLinkInstance)(e, F, U, $, I, b)),
            () => {
              (x.current &&
                ((0, p.unmountLinkForCurrentNavigation)(x.current),
                (x.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [I, F, U, $, b],
        ),
        z = {
          ref: (0, c.useMergedRef)(K, D),
          onClick(t) {
            (k || "function" != typeof w || w(t),
              k &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !U ||
                t.defaultPrevented ||
                (function (t, r, n, o, u, a, l) {
                  if ("undefined" != typeof window) {
                    let s,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((s = t.currentTarget.getAttribute("target")) &&
                          "_self" !== s) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      u && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(99781);
                    i.default.startTransition(() => {
                      f(n || r, u ? "replace" : "push", a ?? !0, o.current);
                    });
                  }
                })(t, F, B, x, E, S, R));
          },
          onMouseEnter(e) {
            (k || "function" != typeof T || T(e),
              k &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              U && I && (0, p.onNavigationIntent)(e.currentTarget, !0 === A));
          },
          onTouchStart: function (e) {
            (k || "function" != typeof C || C(e),
              k &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              U && I && (0, p.onNavigationIntent)(e.currentTarget, !0 === A));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(B)
          ? (z.href = B)
          : (k && !O && ("a" !== o.type || "href" in o.props)) ||
            (z.href = (0, d.addBasePath)(B)),
        (u = k
          ? i.default.cloneElement(o, z)
          : (0, a.jsx)("a", { ...M, ...z, children: n })),
        (0, a.jsx)(m.Provider, { value: l, children: u })
      );
    }
    e.r(84508);
    let m = (0, i.createContext)(p.IDLE_LINK_STATUS),
      x = () => (0, i.useContext)(m);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  57774,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(22016);
    function n() {
      return (0, t.jsxs)("main", {
        className:
          "min-h-screen flex flex-col items-center justify-center bg-black text-center text-white",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-cyan-900 opacity-70 blur-3xl animate-pulse",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative z-10 p-10 rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.4)] backdrop-blur-md border border-cyan-400/40",
            children: [
              (0, t.jsx)("h1", {
                className:
                  "text-5xl font-extrabold mb-6 text-pink-400 drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]",
                children: "Create Your Account",
              }),
              (0, t.jsxs)("form", {
                className: "flex flex-col gap-4 w-80 mx-auto text-left",
                children: [
                  (0, t.jsx)("input", {
                    type: "text",
                    placeholder: "Full Name",
                    className:
                      "p-3 rounded bg-black/50 border border-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  }),
                  (0, t.jsx)("input", {
                    type: "email",
                    placeholder: "Email",
                    className:
                      "p-3 rounded bg-black/50 border border-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  }),
                  (0, t.jsx)("input", {
                    type: "password",
                    placeholder: "Password",
                    className:
                      "p-3 rounded bg-black/50 border border-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",
                  }),
                  (0, t.jsx)("button", {
                    type: "submit",
                    className:
                      "mt-4 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.5)]",
                    children: "Sign Up",
                  }),
                ],
              }),
              (0, t.jsxs)("p", {
                className: "mt-6 text-gray-400",
                children: [
                  "Already registered?",
                  " ",
                  (0, t.jsx)(r.default, {
                    href: "/login",
                    className: "text-cyan-400 hover:underline",
                    children: "Log In",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    e.s(["default", () => n]);
  },
]);
