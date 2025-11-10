(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      r = e.i(75157);
    let a = n.forwardRef(({ className: e, type: n, ...a }, i) =>
      (0, t.jsx)("input", {
        type: n,
        className: (0, r.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: i,
        ...a,
      }),
    );
    ((a.displayName = "Input"), e.s(["Input", () => a]));
  },
  33525,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "warnOnce", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = (e) => {};
  },
  98183,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return o;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    function i(e) {
      let t = {};
      for (let [n, r] of e.entries()) {
        let e = t[n];
        void 0 === e
          ? (t[n] = r)
          : Array.isArray(e)
            ? e.push(r)
            : (t[n] = [e, r]);
      }
      return t;
    }
    function s(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function o(e) {
      let t = new URLSearchParams();
      for (let [n, r] of Object.entries(e))
        if (Array.isArray(r)) for (let e of r) t.append(n, s(e));
        else t.set(n, s(r));
      return t;
    }
    function l(e, ...t) {
      for (let n of t) {
        for (let t of n.keys()) e.delete(t);
        for (let [t, r] of n.entries()) e.append(t, r);
      }
      return e;
    }
  },
  95057,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      formatUrl: function () {
        return o;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = e.r(90809)._(e.r(98183)),
      s = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: n } = e,
        r = e.protocol || "",
        a = e.pathname || "",
        o = e.hash || "",
        l = e.query || "",
        u = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : n &&
            ((u = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || "";
      return (
        r && !r.endsWith(":") && (r += ":"),
        e.slashes || ((!r || s.test(r)) && !1 !== u)
          ? ((u = "//" + (u || "")), a && "/" !== a[0] && (a = "/" + a))
          : u || (u = ""),
        o && "#" !== o[0] && (o = "#" + o),
        c && "?" !== c[0] && (c = "?" + c),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${r}${u}${a}${c}${o}`
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
    function u(e) {
      return o(e);
    }
  },
  18581,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let r = e.r(71645);
    function a(e, t) {
      let n = (0, r.useRef)(null),
        a = (0, r.useRef)(null);
      return (0, r.useCallback)(
        (r) => {
          if (null === r) {
            let e = n.current;
            e && ((n.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else (e && (n.current = i(e, r)), t && (a.current = i(t, r)));
        },
        [e, t],
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let n = e(t);
        return "function" == typeof n ? n : () => e(null);
      }
    }
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  18967,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return g;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return x;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return s;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return m;
      },
      stringifyError: function () {
        return N;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(e) {
      let t,
        n = !1;
      return (...r) => (n || ((n = !0), (t = e(...r))), t);
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => o.test(e);
    function u() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function m(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function p(e, t) {
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await p(t.Component, t.ctx) }
          : {};
      let r = await e.getInitialProps(t);
      if (n && f(n)) return r;
      if (!r)
        throw Object.defineProperty(
          Error(
            `"${d(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return r;
    }
    let h = "undefined" != typeof performance,
      x =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class y extends Error {}
    class b extends Error {}
    class g extends Error {
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
    class j extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function N(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let r = e.r(18967),
      a = e.r(52817);
    function i(e) {
      if (!(0, r.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, r.getLocationOrigin)(),
          n = new URL(e, t);
        return n.origin === t && (0, a.hasBasePath)(n.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "errorOnce", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = (e) => {};
  },
  22016,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return g;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = e.r(90809),
      s = e.r(43476),
      o = i._(e.r(71645)),
      l = e.r(95057),
      u = e.r(8372),
      c = e.r(18581),
      d = e.r(18967),
      f = e.r(5550);
    e.r(33525);
    let m = e.r(91949),
      p = e.r(73668),
      h = e.r(65165);
    function x(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function y(t) {
      var n;
      let r,
        a,
        i,
        [l, y] = (0, o.useOptimistic)(m.IDLE_LINK_STATUS),
        g = (0, o.useRef)(null),
        {
          href: v,
          as: j,
          children: N,
          prefetch: k = null,
          passHref: S,
          replace: C,
          shallow: P,
          scroll: O,
          onClick: A,
          onMouseEnter: E,
          onTouchStart: w,
          legacyBehavior: R = !1,
          onNavigate: _,
          ref: M,
          unstable_dynamicOnHover: T,
          ...I
        } = t;
      ((r = N),
        R &&
          ("string" == typeof r || "number" == typeof r) &&
          (r = (0, s.jsx)("a", { children: r })));
      let L = o.default.useContext(u.AppRouterContext),
        F = !1 !== k,
        D =
          !1 !== k
            ? null === (n = k) || "auto" === n
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: B, as: U } = o.default.useMemo(() => {
          let e = x(v);
          return { href: e, as: j ? x(j) : e };
        }, [v, j]);
      if (R) {
        if (r?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        a = o.default.Children.only(r);
      }
      let $ = R ? a && "object" == typeof a && a.ref : M,
        z = o.default.useCallback(
          (e) => (
            null !== L &&
              (g.current = (0, m.mountLinkInstance)(e, B, L, D, F, y)),
            () => {
              (g.current &&
                ((0, m.unmountLinkForCurrentNavigation)(g.current),
                (g.current = null)),
                (0, m.unmountPrefetchableInstance)(e));
            }
          ),
          [F, B, L, D, y],
        ),
        V = {
          ref: (0, c.useMergedRef)(z, $),
          onClick(t) {
            (R || "function" != typeof A || A(t),
              R &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, n, r, a, i, s, l) {
                  if ("undefined" != typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, p.isLocalURL)(n)) {
                      i && (t.preventDefault(), location.replace(n));
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
                    let { dispatchNavigateAction: d } = e.r(99781);
                    o.default.startTransition(() => {
                      d(r || n, i ? "replace" : "push", s ?? !0, a.current);
                    });
                  }
                })(t, B, U, g, C, O, _));
          },
          onMouseEnter(e) {
            (R || "function" != typeof E || E(e),
              R &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              L && F && (0, m.onNavigationIntent)(e.currentTarget, !0 === T));
          },
          onTouchStart: function (e) {
            (R || "function" != typeof w || w(e),
              R &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              L && F && (0, m.onNavigationIntent)(e.currentTarget, !0 === T));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(U)
          ? (V.href = U)
          : (R && !S && ("a" !== a.type || "href" in a.props)) ||
            (V.href = (0, f.addBasePath)(U)),
        (i = R
          ? o.default.cloneElement(a, V)
          : (0, s.jsx)("a", { ...I, ...V, children: r })),
        (0, s.jsx)(b.Provider, { value: l, children: i })
      );
    }
    e.r(84508);
    let b = (0, o.createContext)(m.IDLE_LINK_STATUS),
      g = () => (0, o.useContext)(b);
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  45872,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(22016),
      r = e.i(71645);
    function a({ title: e, items: a, titleClassName: i }) {
      let [s, o] = (0, r.useState)(!1);
      return (0, t.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
          (0, t.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${i || "neon-cyan"}`,
            children: e,
          }),
          s &&
            (0, t.jsx)("div", {
              className: "header-dropdown-menu",
              children: a.map((e, r) =>
                e.isSeparator
                  ? (0, t.jsx)("div", { className: "dropdown-separator" }, r)
                  : "header" === e.type
                    ? (0, t.jsx)(
                        "div",
                        { className: "dropdown-header", children: e.name },
                        r,
                      )
                    : "link" === e.type
                      ? (0, t.jsxs)(
                          n.default,
                          {
                            href: e.href || "#",
                            className: "menu-item",
                            target: e.href?.startsWith("http")
                              ? "_blank"
                              : "_self",
                            rel: "noopener noreferrer",
                            children: [
                              e.name,
                              e.subtext &&
                                (0, t.jsx)("span", {
                                  className: "sub-text",
                                  children: e.subtext,
                                }),
                            ],
                          },
                          r,
                        )
                      : (0, t.jsxs)(
                          "div",
                          {
                            className: `menu-item ${e.active ? "active-pink" : ""}`,
                            children: [
                              e.name,
                              e.subtext &&
                                (0, t.jsx)("span", {
                                  className: "sub-text",
                                  children: e.subtext,
                                }),
                            ],
                          },
                          r,
                        ),
              ),
            }),
        ],
      });
    }
    let i = (0, e.i(75254).default)("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]);
    var s = e.i(37727);
    let o = [
        {
          name: "AI Price Prediction Engine",
          subtext: "Forecasting with machine learning",
        },
        {
          name: "ML Pattern Recognition",
          subtext: "Identify historical patterns",
        },
        {
          name: "Sentiment Analysis AI",
          subtext: "Gauge market mood from news & social",
        },
        { name: "Smart Risk Management", subtext: "AI-driven risk assessment" },
        {
          name: "Automated Trading Signals",
          subtext: "Real-time buy/sell alerts",
        },
        {
          name: "Neural Networks & LSTM",
          subtext: "Deep learning for market prediction",
        },
        { isSeparator: !0 },
        {
          name: "Binance Schema",
          subtext: "View the Binance API Schema",
          type: "link",
          href: "/binance-schema",
        },
        {
          name: "Data Providers",
          subtext: "View API data providers",
          type: "link",
          href: "/data-providers",
        },
      ],
      l = [
        { name: "Markets", subtext: "Global financial markets", active: !0 },
        { name: "World Sports", subtext: "International sports coverage" },
      ],
      u = [
        {
          name: "Personal Account",
          subtext: "Manage your personal trading profile",
          type: "link",
          href: "/profile",
        },
        {
          name: "Business Account",
          subtext: "Manage your business trading profile",
        },
        { name: "VIP", subtext: "Access exclusive VIP features" },
        { isSeparator: !0 },
        {
          name: "GPS Food Finder",
          subtext: "Find restaurants near you",
          type: "link",
          href: "/gps-finder",
        },
      ],
      c = [
        {
          name: "Bluetooth Connect",
          subtext: "Connect your audio device",
          type: "link",
          href: "/bluetooth-connect",
        },
        { isSeparator: !0 },
        { name: "Apple Music", subtext: "Listen on Apple Music", type: "item" },
        { name: "Spotify", subtext: "Listen on Spotify", type: "item" },
        {
          name: "YouTube Music",
          subtext: "Listen on YouTube Music",
          type: "item",
        },
        { isSeparator: !0 },
        {
          name: "Top 35 Food Apps",
          subtext: "Find food apps in your GPS region",
          type: "item",
        },
        {
          name: "Top Restaurants",
          subtext: "Find restaurants in your area",
          type: "link",
          href: "/gps-finder",
        },
        { name: "Uber Eats", subtext: "Order food delivery", type: "item" },
        { name: "DoorDash", subtext: "Order food delivery", type: "item" },
        { isSeparator: !0 },
        { name: "International Social Networks", type: "header" },
        { name: "Facebook", type: "link", href: "https://facebook.com" },
        { name: "Twitter / X", type: "link", href: "https://x.com" },
        { name: "Instagram", type: "link", href: "https://instagram.com" },
        { name: "TikTok", type: "link", href: "https://tiktok.com" },
        { name: "LinkedIn", type: "link", href: "https://linkedin.com" },
        { name: "Reddit", type: "link", href: "https://reddit.com" },
        { name: "Pinterest", type: "link", href: "https://pinterest.com" },
        { name: "Snapchat", type: "link", href: "https://snapchat.com" },
        { name: "Telegram", type: "link", href: "https://telegram.org" },
        { name: "WhatsApp", type: "link", href: "https://whatsapp.com" },
        { name: "WeChat", type: "link", href: "https://wechat.com" },
        { name: "Discord", type: "link", href: "https://discord.com" },
      ],
      d = [
        {
          name: "North American Major Sports",
          subtext: "NFL, NCAAF, NBA, WNBA, NCAAB, MLB, NHL, Soccer",
          type: "link",
          href: "#",
        },
        {
          name: "Combat Sports",
          subtext: "Boxing, MMA, UFC",
          type: "link",
          href: "#",
        },
        {
          name: "Racing",
          subtext: "NASCAR, Formula 1, Horse Racing",
          type: "link",
          href: "#",
        },
        {
          name: "Golf & Tennis",
          subtext: "PGA, LPGA, Grand Slam tournaments",
          type: "link",
          href: "#",
        },
        {
          name: "Other Sports",
          subtext:
            "Badminton, Cricket, Cycling, Darts, Handball, Lacrosse, Rugby, & more",
          type: "link",
          href: "#",
        },
      ],
      f = [
        {
          name: "Republican",
          subtext: "News and opinion from a conservative perspective",
          type: "link",
          href: "#",
        },
        {
          name: "Democrat",
          subtext: "News and opinion from a Democratic perspective",
          type: "link",
          href: "#",
        },
        {
          name: "Liberal",
          subtext: "News and opinion from a liberal perspective",
          type: "link",
          href: "#",
        },
        {
          name: "Independent",
          subtext: "News and opinion from an independent perspective",
          type: "link",
          href: "#",
        },
      ],
      m = [
        {
          name: "AI Volatility Forecast",
          subtext: "Predict market volatility with AI",
        },
      ];
    function p() {
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsxs)("div", {
            className: "header-top-layer",
            children: [
              (0, t.jsx)("div", {
                className: "flex items-center gap-4",
                children: (0, t.jsxs)("div", {
                  className: "header-title leading-tight",
                  children: [
                    (0, t.jsx)("span", {
                      className: "neon-text",
                      children: "Quantum",
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("span", {
                      className: "text-white",
                      children: "CyberVision",
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                className: "nav-right",
                children: [
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: u,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(a, {
                    title: "Community",
                    items: o,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsxs)(n.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, t.jsx)("br", {}), "Prices"],
                  }),
                  (0, t.jsx)(n.default, {
                    href: "/join",
                    className: "nav-item neon-pink",
                    children: "Join",
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "header-middle-layer",
            children: (0, t.jsxs)("nav", {
              className: "main-nav",
              children: [
                (0, t.jsx)(n.default, {
                  href: "/",
                  className: "nav-item neon-green",
                  children: "Home",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-orange",
                  children: "Stocks",
                }),
                (0, t.jsx)(n.default, {
                  href: "/main",
                  className: "nav-item neon-cyan",
                  children: "Crypto",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-blue",
                  children: "FUTURES AND COMMODITIES",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Options",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-green",
                  children: "BOND AND FIXED INCOME",
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "header-bottom-layer",
            children: (0, t.jsxs)("nav", {
              className: "main-nav",
              children: [
                (0, t.jsx)(a, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                  }),
                  items: c,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(a, {
                  title: "FX Matrix Analyzer",
                  items: m,
                  titleClassName: "neon-green",
                }),
                (0, t.jsx)(a, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "Las Vegas" }),
                      (0, t.jsx)("div", { children: "Stats" }),
                    ],
                  }),
                  items: d,
                  titleClassName: "neon-gold glow-text",
                }),
                (0, t.jsx)(a, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "World" }),
                      (0, t.jsx)("div", { children: "Sports" }),
                    ],
                  }),
                  items: l,
                  titleClassName: "neon-blue",
                }),
                (0, t.jsx)(a, {
                  title: "Opinions",
                  items: f,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-green",
                  children: "GLOBAL ECONOMIC AND MACRO DATA SOURCES",
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "header-fourth-layer",
            children: (0, t.jsxs)("nav", {
              className: "main-nav",
              children: [
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Over-the-Counter (OTC)",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-gold",
                  children: "INDEX PROVIDERS",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-red",
                  children: "Mutual Funds and ETFs Data",
                }),
                (0, t.jsx)(n.default, {
                  href: "#",
                  className: "nav-item neon-blue",
                  children: "ALTERNATIVE DATA MARKETS",
                }),
              ],
            }),
          }),
          (0, t.jsx)("div", {
            className: "header-fifth-layer",
            children: (0, t.jsx)("nav", { className: "main-nav" }),
          }),
        ],
      });
    }
    function h() {
      let [e, p] = (0, r.useState)(!1);
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsxs)("div", {
            className: "header-top-layer",
            children: [
              (0, t.jsx)("div", {
                className: "flex items-center gap-4",
                children: (0, t.jsxs)("div", {
                  className: "header-title leading-tight",
                  children: [
                    (0, t.jsx)("span", {
                      className: "neon-text",
                      children: "Quantum",
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("span", {
                      className: "text-white",
                      children: "CyberVision",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("button", {
                onClick: () => p(!e),
                className: "mobile-menu-button",
                children: e
                  ? (0, t.jsx)(s.X, { size: 24 })
                  : (0, t.jsx)(i, { size: 24 }),
              }),
            ],
          }),
          e &&
            (0, t.jsx)("div", {
              className: "mobile-menu",
              children: (0, t.jsxs)("nav", {
                className: "mobile-nav-links",
                children: [
                  (0, t.jsx)(n.default, {
                    href: "/",
                    className: "nav-item neon-green",
                    children: "Home",
                  }),
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: u,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(a, {
                    title: "Community",
                    items: o,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-orange",
                    children: "Stocks",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "/main",
                    className: "nav-item neon-cyan",
                    children: "Crypto",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "FUTURES AND COMMODITIES",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Options",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "BOND AND FIXED INCOME",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                    }),
                    items: c,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(a, {
                    title: "FX Matrix Analyzer",
                    items: m,
                    titleClassName: "neon-green",
                  }),
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "Las Vegas" }),
                        (0, t.jsx)("div", { children: "Stats" }),
                      ],
                    }),
                    items: d,
                    titleClassName: "neon-gold glow-text",
                  }),
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "World" }),
                        (0, t.jsx)("div", { children: "Sports" }),
                      ],
                    }),
                    items: l,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(a, {
                    title: "Opinions",
                    items: f,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "GLOBAL ECONOMIC AND MACRO DATA SOURCES",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Over-the-Counter (OTC)",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-gold",
                    children: "INDEX PROVIDERS",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-red",
                    children: "Mutual Funds and ETFs Data",
                  }),
                  (0, t.jsx)(n.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "ALTERNATIVE DATA MARKETS",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsxs)(n.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, t.jsx)("br", {}), "Prices"],
                  }),
                  (0, t.jsx)(n.default, {
                    href: "/join",
                    className: "nav-item neon-pink",
                    children: "Join",
                  }),
                ],
              }),
            }),
        ],
      });
    }
    function x() {
      let e = (function () {
        let [e, t] = r.useState(void 0);
        return (
          r.useEffect(() => {
            let e = window.matchMedia("(max-width: 767px)"),
              n = () => {
                t(window.innerWidth < 768);
              };
            return (
              e.addEventListener("change", n),
              t(window.innerWidth < 768),
              () => e.removeEventListener("change", n)
            );
          }, []),
          e
        );
      })();
      return (0, t.jsx)("header", {
        className: "header-nav",
        children:
          void 0 === e
            ? (0, t.jsx)("div", {
                className: "header-top-layer",
                children: (0, t.jsx)("div", {
                  className: "flex items-center gap-4",
                  children: (0, t.jsxs)("div", {
                    className: "header-title leading-tight",
                    children: [
                      (0, t.jsx)("span", {
                        className: "neon-text",
                        children: "Quantum",
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)("span", {
                        className: "text-white",
                        children: "CyberVision",
                      }),
                    ],
                  }),
                }),
              })
            : e
              ? (0, t.jsx)(h, {})
              : (0, t.jsx)(p, {}),
      });
    }
    e.s(["Header", () => x], 45872);
  },
  71689,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("ArrowLeft", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]);
    e.s(["ArrowLeft", () => t], 71689);
  },
  19455,
  (e) => {
    "use strict";
    let t, n, r;
    var a = e.i(43476),
      i = e.i(71645);
    function s(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    var o =
        (((r = i.forwardRef((e, t) => {
          let { children: n, ...r } = e;
          if (i.isValidElement(n)) {
            var a;
            let e,
              o,
              l =
                ((a = n),
                (o =
                  (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning)
                  ? a.ref
                  : (o =
                        (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? a.props.ref
                    : a.props.ref || a.ref),
              u = (function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let a = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r)
                    ? a && i
                      ? (n[r] = (...e) => {
                          let t = i(...e);
                          return (a(...e), t);
                        })
                      : a && (n[r] = a)
                    : "style" === r
                      ? (n[r] = { ...a, ...i })
                      : "className" === r &&
                        (n[r] = [a, i].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props);
            return (
              n.type !== i.Fragment &&
                (u.ref = t
                  ? (function (...e) {
                      return (t) => {
                        let n = !1,
                          r = e.map((e) => {
                            let r = s(e, t);
                            return (n || "function" != typeof r || (n = !0), r);
                          });
                        if (n)
                          return () => {
                            for (let t = 0; t < r.length; t++) {
                              let n = r[t];
                              "function" == typeof n ? n() : s(e[t], null);
                            }
                          };
                      };
                    })(t, l)
                  : l),
              i.cloneElement(n, u)
            );
          }
          return i.Children.count(n) > 1 ? i.Children.only(null) : null;
        })).displayName = "Slot.SlotClone"),
        (t = r),
        ((n = i.forwardRef((e, n) => {
          let { children: r, ...s } = e,
            o = i.Children.toArray(r),
            l = o.find(u);
          if (l) {
            let e = l.props.children,
              r = o.map((t) =>
                t !== l
                  ? t
                  : i.Children.count(e) > 1
                    ? i.Children.only(null)
                    : i.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, a.jsx)(t, {
              ...s,
              ref: n,
              children: i.isValidElement(e)
                ? i.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, a.jsx)(t, { ...s, ref: n, children: r });
        })).displayName = "Slot.Slot"),
        n),
      l = Symbol("radix.slottable");
    function u(e) {
      return (
        i.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === l
      );
    }
    var c = e.i(25913),
      d = e.i(75157);
    let f = (0, c.cva)(
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
      m = i.forwardRef(
        ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, s) =>
          (0, a.jsx)(r ? o : "button", {
            className: (0, d.cn)(f({ variant: t, size: n, className: e })),
            ref: s,
            ...i,
          }),
      );
    ((m.displayName = "Button"), e.s(["Button", () => m], 19455));
  },
  35804,
  (e) => {
    "use strict";
    var t = e.i(71645),
      n = e.i(34620);
    function r(e) {
      let [r, a] = t.useState(void 0);
      return (
        (0, n.useLayoutEffect)(() => {
          if (e) {
            a({ width: e.offsetWidth, height: e.offsetHeight });
            let t = new ResizeObserver((t) => {
              let n, r;
              if (!Array.isArray(t) || !t.length) return;
              let i = t[0];
              if ("borderBoxSize" in i) {
                let e = i.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                ((n = t.inlineSize), (r = t.blockSize));
              } else ((n = e.offsetWidth), (r = e.offsetHeight));
              a({ width: n, height: r });
            });
            return (t.observe(e, { box: "border-box" }), () => t.unobserve(e));
          }
          a(void 0);
        }, [e]),
        r
      );
    }
    e.s(["useSize", () => r]);
  },
  67585,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let r = e.r(32061);
    function a({ reason: e, children: t }) {
      if ("undefined" == typeof window)
        throw Object.defineProperty(
          new r.BailoutToCSRError(e),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return t;
    }
  },
  9885,
  (e, t, n) => {
    "use strict";
    function r(e) {
      return e
        .split("/")
        .map((e) => encodeURIComponent(e))
        .join("/");
    }
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "encodeURIPath", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
  },
  52157,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "PreloadChunks", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let r = e.r(43476),
      a = e.r(74080),
      i = e.r(63599),
      s = e.r(9885);
    function o({ moduleIds: e }) {
      if ("undefined" != typeof window) return null;
      let t = i.workAsyncStorage.getStore();
      if (void 0 === t) return null;
      let n = [];
      if (t.reactLoadableManifest && e) {
        let r = t.reactLoadableManifest;
        for (let t of e) {
          if (!r[t]) continue;
          let e = r[t].files;
          n.push(...e);
        }
      }
      return 0 === n.length
        ? null
        : (0, r.jsx)(r.Fragment, {
            children: n.map((e) => {
              let n = `${t.assetPrefix}/_next/${(0, s.encodeURIPath)(e)}`;
              return e.endsWith(".css")
                ? (0, r.jsx)(
                    "link",
                    {
                      precedence: "dynamic",
                      href: n,
                      rel: "stylesheet",
                      as: "style",
                      nonce: t.nonce,
                    },
                    e,
                  )
                : ((0, a.preload)(n, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce,
                  }),
                  null);
            }),
          });
    }
  },
  69093,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    let r = e.r(43476),
      a = e.r(71645),
      i = e.r(67585),
      s = e.r(52157);
    function o(e) {
      return { default: e && "default" in e ? e.default : e };
    }
    let l = {
        loader: () => Promise.resolve(o(() => null)),
        loading: null,
        ssr: !0,
      },
      u = function (e) {
        let t = { ...l, ...e },
          n = (0, a.lazy)(() => t.loader().then(o)),
          u = t.loading;
        function c(e) {
          let o = u
              ? (0, r.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            l = !t.ssr || !!t.loading,
            c = l ? a.Suspense : a.Fragment,
            d = t.ssr
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    "undefined" == typeof window
                      ? (0, r.jsx)(s.PreloadChunks, { moduleIds: t.modules })
                      : null,
                    (0, r.jsx)(n, { ...e }),
                  ],
                })
              : (0, r.jsx)(i.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, r.jsx)(n, { ...e }),
                });
          return (0, r.jsx)(c, { ...(l ? { fallback: o } : {}), children: d });
        }
        return ((c.displayName = "LoadableComponent"), c);
      };
  },
  70703,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let r = e.r(55682)._(e.r(69093));
    function a(e, t) {
      let n = {};
      "function" == typeof e && (n.loader = e);
      let a = { ...n, ...t };
      return (0, r.default)({ ...a, modules: a.loadableGenerated?.modules });
    }
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  11698,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/3d51450f0bc35c27.js"].map((t) => e.l(t)),
      ).then(() => t(26084)),
    );
  },
]);
