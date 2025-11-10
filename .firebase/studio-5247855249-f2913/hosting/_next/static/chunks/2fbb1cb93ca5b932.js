(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      s = e.i(75157);
    let a = n.forwardRef(({ className: e, type: n, ...a }, i) =>
      (0, t.jsx)("input", {
        type: n,
        className: (0, s.cn)(
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
          return s;
        },
      }));
    let s = (e) => {};
  },
  98183,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var s = {
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
    for (var a in s) Object.defineProperty(n, a, { enumerable: !0, get: s[a] });
    function i(e) {
      let t = {};
      for (let [n, s] of e.entries()) {
        let e = t[n];
        void 0 === e
          ? (t[n] = s)
          : Array.isArray(e)
            ? e.push(s)
            : (t[n] = [e, s]);
      }
      return t;
    }
    function r(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function o(e) {
      let t = new URLSearchParams();
      for (let [n, s] of Object.entries(e))
        if (Array.isArray(s)) for (let e of s) t.append(n, r(e));
        else t.set(n, r(s));
      return t;
    }
    function l(e, ...t) {
      for (let n of t) {
        for (let t of n.keys()) e.delete(t);
        for (let [t, s] of n.entries()) e.append(t, s);
      }
      return e;
    }
  },
  95057,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var s = {
      formatUrl: function () {
        return o;
      },
      formatWithValidation: function () {
        return m;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var a in s) Object.defineProperty(n, a, { enumerable: !0, get: s[a] });
    let i = e.r(90809)._(e.r(98183)),
      r = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: n } = e,
        s = e.protocol || "",
        a = e.pathname || "",
        o = e.hash || "",
        l = e.query || "",
        m = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (m = t + e.host)
          : n &&
            ((m = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (m += ":" + e.port)),
        l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || "";
      return (
        s && !s.endsWith(":") && (s += ":"),
        e.slashes || ((!s || r.test(s)) && !1 !== m)
          ? ((m = "//" + (m || "")), a && "/" !== a[0] && (a = "/" + a))
          : m || (m = ""),
        o && "#" !== o[0] && (o = "#" + o),
        c && "?" !== c[0] && (c = "?" + c),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${s}${m}${a}${c}${o}`
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
    function m(e) {
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
    let s = e.r(71645);
    function a(e, t) {
      let n = (0, s.useRef)(null),
        a = (0, s.useRef)(null);
      return (0, s.useCallback)(
        (s) => {
          if (null === s) {
            let e = n.current;
            e && ((n.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else (e && (n.current = i(e, s)), t && (a.current = i(t, s)));
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
    var s = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return w;
      },
      NormalizeError: function () {
        return g;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return b;
      },
      ST: function () {
        return f;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return r;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return m;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return u;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return h;
      },
      stringifyError: function () {
        return N;
      },
    };
    for (var a in s) Object.defineProperty(n, a, { enumerable: !0, get: s[a] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function r(e) {
      let t,
        n = !1;
      return (...s) => (n || ((n = !0), (t = e(...s))), t);
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => o.test(e);
    function m() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = m();
      return e.substring(t.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function u(e) {
      return e.finished || e.headersSent;
    }
    function h(e) {
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
      let s = await e.getInitialProps(t);
      if (n && u(n)) return s;
      if (!s)
        throw Object.defineProperty(
          Error(
            `"${d(e)}.getInitialProps()" should resolve to an object. But found "${s}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return s;
    }
    let b = "undefined" != typeof performance,
      f =
        b &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class y extends Error {}
    class g extends Error {}
    class x extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class w extends Error {
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
    let s = e.r(18967),
      a = e.r(52817);
    function i(e) {
      if (!(0, s.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, s.getLocationOrigin)(),
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
          return s;
        },
      }));
    let s = (e) => {};
  },
  22016,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var s = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var a in s) Object.defineProperty(n, a, { enumerable: !0, get: s[a] });
    let i = e.r(90809),
      r = e.r(43476),
      o = i._(e.r(71645)),
      l = e.r(95057),
      m = e.r(8372),
      c = e.r(18581),
      d = e.r(18967),
      u = e.r(5550);
    e.r(33525);
    let h = e.r(91949),
      p = e.r(73668),
      b = e.r(65165);
    function f(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function y(t) {
      var n;
      let s,
        a,
        i,
        [l, y] = (0, o.useOptimistic)(h.IDLE_LINK_STATUS),
        x = (0, o.useRef)(null),
        {
          href: w,
          as: j,
          children: N,
          prefetch: v = null,
          passHref: k,
          replace: S,
          shallow: E,
          scroll: P,
          onClick: C,
          onMouseEnter: A,
          onTouchStart: O,
          legacyBehavior: D = !1,
          onNavigate: M,
          ref: T,
          unstable_dynamicOnHover: I,
          ...F
        } = t;
      ((s = N),
        D &&
          ("string" == typeof s || "number" == typeof s) &&
          (s = (0, r.jsx)("a", { children: s })));
      let L = o.default.useContext(m.AppRouterContext),
        R = !1 !== v,
        B =
          !1 !== v
            ? null === (n = v) || "auto" === n
              ? b.FetchStrategy.PPR
              : b.FetchStrategy.Full
            : b.FetchStrategy.PPR,
        { href: _, as: G } = o.default.useMemo(() => {
          let e = f(w);
          return { href: e, as: j ? f(j) : e };
        }, [w, j]);
      if (D) {
        if (s?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        a = o.default.Children.only(s);
      }
      let U = D ? a && "object" == typeof a && a.ref : T,
        H = o.default.useCallback(
          (e) => (
            null !== L &&
              (x.current = (0, h.mountLinkInstance)(e, _, L, B, R, y)),
            () => {
              (x.current &&
                ((0, h.unmountLinkForCurrentNavigation)(x.current),
                (x.current = null)),
                (0, h.unmountPrefetchableInstance)(e));
            }
          ),
          [R, _, L, B, y],
        ),
        K = {
          ref: (0, c.useMergedRef)(H, U),
          onClick(t) {
            (D || "function" != typeof C || C(t),
              D &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, n, s, a, i, r, l) {
                  if ("undefined" != typeof window) {
                    let m,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((m = t.currentTarget.getAttribute("target")) &&
                          "_self" !== m) ||
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
                      d(s || n, i ? "replace" : "push", r ?? !0, a.current);
                    });
                  }
                })(t, _, G, x, S, P, M));
          },
          onMouseEnter(e) {
            (D || "function" != typeof A || A(e),
              D &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              L && R && (0, h.onNavigationIntent)(e.currentTarget, !0 === I));
          },
          onTouchStart: function (e) {
            (D || "function" != typeof O || O(e),
              D &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              L && R && (0, h.onNavigationIntent)(e.currentTarget, !0 === I));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(G)
          ? (K.href = G)
          : (D && !k && ("a" !== a.type || "href" in a.props)) ||
            (K.href = (0, u.addBasePath)(G)),
        (i = D
          ? o.default.cloneElement(a, K)
          : (0, r.jsx)("a", { ...F, ...K, children: s })),
        (0, r.jsx)(g.Provider, { value: l, children: i })
      );
    }
    e.r(84508);
    let g = (0, o.createContext)(h.IDLE_LINK_STATUS),
      x = () => (0, o.useContext)(g);
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
      s = e.i(71645);
    function a({ title: e, items: a, titleClassName: i }) {
      let [r, o] = (0, s.useState)(!1);
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
          r &&
            (0, t.jsx)("div", {
              className: "header-dropdown-menu",
              children: a.map((e, s) =>
                e.isSeparator
                  ? (0, t.jsx)("div", { className: "dropdown-separator" }, s)
                  : "header" === e.type
                    ? (0, t.jsx)(
                        "div",
                        { className: "dropdown-header", children: e.name },
                        s,
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
                          s,
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
                          s,
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
    var r = e.i(37727);
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
      m = [
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
      u = [
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
      h = [
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
                    items: m,
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
                  items: h,
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
                  items: u,
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
    function b() {
      let [e, p] = (0, s.useState)(!1);
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
                  ? (0, t.jsx)(r.X, { size: 24 })
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
                    items: m,
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
                    items: h,
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
                    items: u,
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
    function f() {
      let e = (function () {
        let [e, t] = s.useState(void 0);
        return (
          s.useEffect(() => {
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
              ? (0, t.jsx)(b, {})
              : (0, t.jsx)(p, {}),
      });
    }
    e.s(["Header", () => f], 45872);
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
  78917,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("ExternalLink", [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "M10 14 21 3", key: "gplh6r" }],
      [
        "path",
        {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          key: "a6xqqp",
        },
      ],
    ]);
    e.s(["ExternalLink", () => t], 78917);
  },
  60553,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      s = e.i(45872),
      a = e.i(93479),
      i = e.i(22016),
      r = e.i(71689),
      o = e.i(78917);
    let l = [
      { name: "Dogecoin", symbol: "DOGE", website: "https://dogecoin.com" },
      { name: "Shiba Inu", symbol: "SHIB", website: "https://shibatoken.com" },
      { name: "Pepe", symbol: "PEPE", website: "https://pepecoin.com" },
      { name: "Floki Inu", symbol: "FLOKI", website: "https://www.floki.com" },
      { name: "Bonk", symbol: "BONK", website: "https://bonk.fi" },
      {
        name: "Dogelon Mars",
        symbol: "ELON",
        website: "https://dogelonmars.com",
      },
      {
        name: "Baby Doge Coin",
        symbol: "BABYDOGE",
        website: "https://babydoge.com",
      },
      { name: "Kishu Inu", symbol: "KISHU", website: "https://kishu.com" },
      { name: "Akita Inu", symbol: "AKITA", website: "https://akitainu.com" },
      {
        name: "Samoyedcoin",
        symbol: "SAMO",
        website: "https://samoyedcoin.com",
      },
      { name: "Hoge Finance", symbol: "HOGE", website: "https://hoge.finance" },
      { name: "MonaCoin", symbol: "MONA", website: "https://mona.site" },
      { name: "SafeMoon", symbol: "SAFEMOON", website: "https://safemoon.net" },
      { name: "ShibaPup", symbol: "PUP", website: "https://shibapup.io" },
      { name: "WIF Doge", symbol: "WIF", website: "https://wifdoge.com" },
      { name: "CateCoin", symbol: "CATE", website: "https://catecoin.org" },
      {
        name: "Stoned Ape Coin",
        symbol: "SAPE",
        website: "https://stonedape.com",
      },
      { name: "CumRocket", symbol: "CUMMIES", website: "https://cummies.io" },
      { name: "Doge Token", symbol: "DOGET", website: "https://dogetoken.com" },
      { name: "FlokiFi", symbol: "FLOKIFI", website: "https://flokifi.io" },
      { name: "PepeCash", symbol: "PEPECASH", website: "https://pepecash.org" },
      { name: "FEG Token", symbol: "FEG", website: "https://fegtoken.com" },
      { name: "Bonfire", symbol: "BONFIRE", website: "https://bonfire.com" },
      { name: "Hoge Inu", symbol: "HOGE2", website: "https://hoge.finance" },
      { name: "Elongate", symbol: "ELONGATE", website: "https://elongate.cc" },
      {
        name: "ShibaSwap Token",
        symbol: "BONE",
        website: "https://shibaswap.com",
      },
      {
        name: "Shiba Inu: LEASH",
        symbol: "LEASH",
        website: "https://shibatoken.com",
      },
      {
        name: "Doge Killer (example)",
        symbol: "DKILL",
        website: "https://example.com/dogekiller",
      },
      { name: "Pitbull", symbol: "PIT", website: "https://pitbull.com" },
      { name: "SafeMoonV2", symbol: "SFM", website: "https://safemoon.net" },
      { name: "ElonDoge", symbol: "EDOGE", website: "https://elondoge.io" },
      { name: "Inu Inu", symbol: "IINU", website: "https://inuinu.org" },
      { name: "MetaDoge", symbol: "METADOGE", website: "https://metadoge.io" },
      {
        name: "Shiba Predator",
        symbol: "SHIBP",
        website: "https://shibapredator.io",
      },
      { name: "DogeCash", symbol: "DOGEC", website: "https://dogec.io" },
      { name: "Kangal", symbol: "KANG", website: "https://kangal.finance" },
      {
        name: "Wojak Finance",
        symbol: "WOJAK",
        website: "https://wojak.finance",
      },
      { name: "Doge Yield", symbol: "DOGEY", website: "https://dogyield.io" },
      {
        name: "Floki Inu Classic",
        symbol: "FLOKIC",
        website: "https://flokiclassic.com",
      },
      { name: "BonkToken", symbol: "BONKT", website: "https://bonktoken.org" },
      { name: "ShibaNova", symbol: "SHN", website: "https://shibanova.io" },
      {
        name: "PepeCoinClassic",
        symbol: "PEPEC",
        website: "https://pepeclassic.io",
      },
      { name: "MoonToken", symbol: "MOON", website: "https://moontoken.io" },
      { name: "TacoCat", symbol: "TACOCAT", website: "https://tacocat.money" },
      { name: "Doggy DAO", symbol: "DDA0", website: "https://doggydao.org" },
      {
        name: "Snoop Doge",
        symbol: "SNOOPDOGE",
        website: "https://snoopdoge.io",
      },
      { name: "DogeFi", symbol: "DOGEFI", website: "https://dogefi.io" },
      {
        name: "MeowSwap Token",
        symbol: "MEOW",
        website: "https://meowswap.finance",
      },
      { name: "Floki Ino", symbol: "FLI", website: "https://flokiino.io" },
      { name: "ShibaCash", symbol: "SHC", website: "https://shibacash.io" },
      { name: "PepeWorld", symbol: "PEPW", website: "https://pepeworld.io" },
      { name: "DogeMoon", symbol: "DMN", website: "https://dogemoon.io" },
      { name: "InuX", symbol: "INUX", website: "https://inux.finance" },
      { name: "DogePad", symbol: "DOPE", website: "https://dogepad.io" },
      { name: "BabyPepe", symbol: "BABYPEPE", website: "https://babypepe.io" },
      {
        name: "ShibaRocket",
        symbol: "SRKT",
        website: "https://shibarocket.com",
      },
      {
        name: "DogeSwap",
        symbol: "DOGES",
        website: "https://dogeswap.finance",
      },
      {
        name: "PuppyToken",
        symbol: "PUPPY",
        website: "https://puppytoken.com",
      },
      { name: "ShibaFly", symbol: "SHFLY", website: "https://shibafly.io" },
      { name: "PepeDAO", symbol: "PDAO", website: "https://pepedao.org" },
      { name: "DogePrime", symbol: "DPRIME", website: "https://dogeprime.io" },
      { name: "Meme Kombat", symbol: "MKC", website: "https://memekombat.io" },
      { name: "DogeX", symbol: "DOGEX", website: "https://dogex.finance" },
      { name: "ShibaMoon", symbol: "SHBM", website: "https://shibamoon.io" },
      { name: "PepeX", symbol: "PEPX", website: "https://pepex.io" },
      { name: "DogeWar", symbol: "DWAR", website: "https://dogewar.io" },
      { name: "MemeCoin", symbol: "MEME", website: "https://memecoin.org" },
      { name: "DogeGold", symbol: "DGOLD", website: "https://dogegold.io" },
      {
        name: "BabyDogeSwap",
        symbol: "BDS",
        website: "https://babydogeswap.finance",
      },
      { name: "Shibalana", symbol: "SHBL", website: "https://shibalana.io" },
      { name: "PepeFi", symbol: "PEFI", website: "https://pepefi.finance" },
      { name: "DogeArmy", symbol: "DARMY", website: "https://dogearmy.io" },
      {
        name: "Shiba Inu Classic",
        symbol: "SHIBC",
        website: "https://shibaclassic.io",
      },
      {
        name: "Pepe Token Classic",
        symbol: "PTC",
        website: "https://pepetokenclassic.io",
      },
      { name: "DogeChef", symbol: "DCH", website: "https://dogechef.io" },
      { name: "MemeLord", symbol: "MLORD", website: "https://memelord.io" },
      {
        name: "DogeLend",
        symbol: "DLEND",
        website: "https://dogelend.finance",
      },
      { name: "GiggleCoin", symbol: "GIG", website: "https://gigglecoin.io" },
      { name: "PepeMoon", symbol: "PPM", website: "https://pepemoon.io" },
      { name: "DogeFlare", symbol: "DFL", website: "https://dogeflare.io" },
      {
        name: "Shibe Token",
        symbol: "SHIBE",
        website: "https://shibetoken.com",
      },
      { name: "PepeCash2", symbol: "PEPEC2", website: "https://pepecash2.io" },
      { name: "DogeShield", symbol: "DSH", website: "https://dogeshield.io" },
      { name: "MemeStar", symbol: "MSTAR", website: "https://memestar.io" },
      {
        name: "DogeFarm",
        symbol: "DFARM",
        website: "https://dogefarm.finance",
      },
      {
        name: "ShibaFarm",
        symbol: "SFARM",
        website: "https://shibafarm.finance",
      },
      {
        name: "PepeFarm",
        symbol: "PEFARM",
        website: "https://pepefarm.finance",
      },
      {
        name: "DogeBridge",
        symbol: "DBRIDGE",
        website: "https://dogebridge.io",
      },
      {
        name: "ShibaBridge",
        symbol: "SBRG",
        website: "https://shibabridge.io",
      },
      { name: "PepeBridge", symbol: "PBRG", website: "https://pepebridge.io" },
      { name: "DogeNFT", symbol: "DNFT", website: "https://dogenft.io" },
      { name: "ShibaNFT", symbol: "SNFT", website: "https://shibanft.io" },
      { name: "PepeNFT", symbol: "PNFT", website: "https://pepenft.io" },
      { name: "DogeMeta", symbol: "DMETA", website: "https://dogemeta.io" },
      { name: "ShibaMeta", symbol: "SMETA", website: "https://shibameta.io" },
    ];
    function m() {
      let [e, m] = (0, n.useState)(""),
        c = l.filter(
          (t) =>
            t.name.toLowerCase().includes(e.toLowerCase()) ||
            t.symbol.toLowerCase().includes(e.toLowerCase()),
        );
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(s.Header, {}),
          (0, t.jsx)("main", {
            className: "dashboard-grid",
            children: (0, t.jsxs)("section", {
              className: "center-content",
              children: [
                (0, t.jsx)("h1", {
                  className: "text-3xl font-bold neon-text text-center mt-8",
                  children: "🔥 Top 100 Meme Coins",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "A curated list of 100 meme-themed tokens. This ecosystem is extremely large and fast-moving. Always verify contract addresses and official project links before transacting.",
                }),
                (0, t.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, t.jsx)(a.Input, {
                    type: "text",
                    placeholder: "Search meme coins...",
                    value: e,
                    onChange: (e) => m(e.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "w-full overflow-x-auto mt-8",
                  children: (0, t.jsxs)("div", {
                    className: "info-table-card",
                    children: [
                      (0, t.jsxs)("table", {
                        className: "info-table w-full",
                        children: [
                          (0, t.jsx)("thead", {
                            children: (0, t.jsxs)("tr", {
                              children: [
                                (0, t.jsx)("th", { children: "#" }),
                                (0, t.jsx)("th", { children: "Name" }),
                                (0, t.jsx)("th", { children: "Symbol" }),
                                (0, t.jsx)("th", { children: "Website" }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("tbody", {
                            children: c.map((e, n) =>
                              (0, t.jsxs)(
                                "tr",
                                {
                                  className: "hover:bg-white/5",
                                  children: [
                                    (0, t.jsx)("td", {
                                      className: "neon-orange",
                                      children: n + 1,
                                    }),
                                    (0, t.jsx)("td", {
                                      className: "neon-cyan",
                                      children: e.name,
                                    }),
                                    (0, t.jsx)("td", {
                                      className: "neon-pink",
                                      children: e.symbol.toUpperCase(),
                                    }),
                                    (0, t.jsx)("td", {
                                      children: (0, t.jsxs)(i.default, {
                                        href: e.website,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "text-cyan-400 hover:underline flex items-center gap-1",
                                        children: [
                                          "Visit ",
                                          (0, t.jsx)(o.ExternalLink, {
                                            size: 14,
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                `${e.symbol}-${n}`,
                              ),
                            ),
                          }),
                        ],
                      }),
                      0 === c.length &&
                        (0, t.jsx)("p", {
                          className: "text-center text-gray-400 py-8",
                          children: "No meme coins found matching your search.",
                        }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "mt-8 text-gray-400 text-sm max-w-4xl mx-auto",
                  children: [
                    (0, t.jsx)("h3", {
                      className: "font-bold text-lg text-white mb-2",
                      children: "Note on Meme Coins:",
                    }),
                    (0, t.jsx)("p", {
                      children:
                        "The meme coin ecosystem is extremely large and fast-moving. For some smaller or very new tokens there may be multiple community pages, and some projects intentionally use social channels (Telegram/Discord/Twitter) rather than a central website. Several entries are community-driven projects with variable permanence; always verify contract addresses and official project links before interacting or transacting.",
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsxs)(i.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, t.jsx)(r.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => m], 60553);
  },
]);
