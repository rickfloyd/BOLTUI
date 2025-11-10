(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      a = e.i(75157);
    let r = n.forwardRef(({ className: e, type: n, ...r }, s) =>
      (0, t.jsx)("input", {
        type: n,
        className: (0, a.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: s,
        ...r,
      }),
    );
    ((r.displayName = "Input"), e.s(["Input", () => r]));
  },
  33525,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "warnOnce", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let a = (e) => {};
  },
  98183,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = {
      assign: function () {
        return o;
      },
      searchParamsToUrlQuery: function () {
        return s;
      },
      urlQueryToSearchParams: function () {
        return i;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    function s(e) {
      let t = {};
      for (let [n, a] of e.entries()) {
        let e = t[n];
        void 0 === e
          ? (t[n] = a)
          : Array.isArray(e)
            ? e.push(a)
            : (t[n] = [e, a]);
      }
      return t;
    }
    function l(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function i(e) {
      let t = new URLSearchParams();
      for (let [n, a] of Object.entries(e))
        if (Array.isArray(a)) for (let e of a) t.append(n, l(e));
        else t.set(n, l(a));
      return t;
    }
    function o(e, ...t) {
      for (let n of t) {
        for (let t of n.keys()) e.delete(t);
        for (let [t, a] of n.entries()) e.append(t, a);
      }
      return e;
    }
  },
  95057,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = {
      formatUrl: function () {
        return i;
      },
      formatWithValidation: function () {
        return m;
      },
      urlObjectKeys: function () {
        return o;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let s = e.r(90809)._(e.r(98183)),
      l = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: n } = e,
        a = e.protocol || "",
        r = e.pathname || "",
        i = e.hash || "",
        o = e.query || "",
        m = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (m = t + e.host)
          : n &&
            ((m = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (m += ":" + e.port)),
        o && "object" == typeof o && (o = String(s.urlQueryToSearchParams(o))));
      let c = e.search || (o && `?${o}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || l.test(a)) && !1 !== m)
          ? ((m = "//" + (m || "")), r && "/" !== r[0] && (r = "/" + r))
          : m || (m = ""),
        i && "#" !== i[0] && (i = "#" + i),
        c && "?" !== c[0] && (c = "?" + c),
        (r = r.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${a}${m}${r}${c}${i}`
      );
    }
    let o = [
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
      return i(e);
    }
  },
  18581,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let a = e.r(71645);
    function r(e, t) {
      let n = (0, a.useRef)(null),
        r = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = n.current;
            e && ((n.current = null), e());
            let t = r.current;
            t && ((r.current = null), t());
          } else (e && (n.current = s(e, a)), t && (r.current = s(t, a)));
        },
        [e, t],
      );
    }
    function s(e, t) {
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
    var a = {
      DecodeError: function () {
        return b;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return g;
      },
      NormalizeError: function () {
        return x;
      },
      PageNotFoundError: function () {
        return S;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return s;
      },
      execOnce: function () {
        return l;
      },
      getDisplayName: function () {
        return u;
      },
      getLocationOrigin: function () {
        return m;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return o;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return f;
      },
      stringifyError: function () {
        return N;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function l(e) {
      let t,
        n = !1;
      return (...a) => (n || ((n = !0), (t = e(...a))), t);
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      o = (e) => i.test(e);
    function m() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = m();
      return e.substring(t.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function f(e) {
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
      let a = await e.getInitialProps(t);
      if (n && d(n)) return a;
      if (!a)
        throw Object.defineProperty(
          Error(
            `"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return a;
    }
    let h = "undefined" != typeof performance,
      y =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class b extends Error {}
    class x extends Error {}
    class S extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class g extends Error {
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
          return s;
        },
      }));
    let a = e.r(18967),
      r = e.r(52817);
    function s(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, a.getLocationOrigin)(),
          n = new URL(e, t);
        return n.origin === t && (0, r.hasBasePath)(n.pathname);
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
          return a;
        },
      }));
    let a = (e) => {};
  },
  22016,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return b;
      },
      useLinkStatus: function () {
        return S;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let s = e.r(90809),
      l = e.r(43476),
      i = s._(e.r(71645)),
      o = e.r(95057),
      m = e.r(8372),
      c = e.r(18581),
      u = e.r(18967),
      d = e.r(5550);
    e.r(33525);
    let f = e.r(91949),
      p = e.r(73668),
      h = e.r(65165);
    function y(e) {
      return "string" == typeof e ? e : (0, o.formatUrl)(e);
    }
    function b(t) {
      var n;
      let a,
        r,
        s,
        [o, b] = (0, i.useOptimistic)(f.IDLE_LINK_STATUS),
        S = (0, i.useRef)(null),
        {
          href: g,
          as: j,
          children: N,
          prefetch: D = null,
          passHref: v,
          replace: U,
          shallow: A,
          scroll: T,
          onClick: C,
          onMouseEnter: P,
          onTouchStart: R,
          legacyBehavior: k = !1,
          onNavigate: E,
          ref: O,
          unstable_dynamicOnHover: w,
          ...I
        } = t;
      ((a = N),
        k &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, l.jsx)("a", { children: a })));
      let L = i.default.useContext(m.AppRouterContext),
        M = !1 !== D,
        F =
          !1 !== D
            ? null === (n = D) || "auto" === n
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: B, as: _ } = i.default.useMemo(() => {
          let e = y(g);
          return { href: e, as: j ? y(j) : e };
        }, [g, j]);
      if (k) {
        if (a?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        r = i.default.Children.only(a);
      }
      let K = k ? r && "object" == typeof r && r.ref : O,
        G = i.default.useCallback(
          (e) => (
            null !== L &&
              (S.current = (0, f.mountLinkInstance)(e, B, L, F, M, b)),
            () => {
              (S.current &&
                ((0, f.unmountLinkForCurrentNavigation)(S.current),
                (S.current = null)),
                (0, f.unmountPrefetchableInstance)(e));
            }
          ),
          [M, B, L, F, b],
        ),
        X = {
          ref: (0, c.useMergedRef)(G, K),
          onClick(t) {
            (k || "function" != typeof C || C(t),
              k &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, n, a, r, s, l, o) {
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
                      s && (t.preventDefault(), location.replace(n));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: u } = e.r(99781);
                    i.default.startTransition(() => {
                      u(a || n, s ? "replace" : "push", l ?? !0, r.current);
                    });
                  }
                })(t, B, _, S, U, T, E));
          },
          onMouseEnter(e) {
            (k || "function" != typeof P || P(e),
              k &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              L && M && (0, f.onNavigationIntent)(e.currentTarget, !0 === w));
          },
          onTouchStart: function (e) {
            (k || "function" != typeof R || R(e),
              k &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              L && M && (0, f.onNavigationIntent)(e.currentTarget, !0 === w));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(_)
          ? (X.href = _)
          : (k && !v && ("a" !== r.type || "href" in r.props)) ||
            (X.href = (0, d.addBasePath)(_)),
        (s = k
          ? i.default.cloneElement(r, X)
          : (0, l.jsx)("a", { ...I, ...X, children: a })),
        (0, l.jsx)(x.Provider, { value: o, children: s })
      );
    }
    e.r(84508);
    let x = (0, i.createContext)(f.IDLE_LINK_STATUS),
      S = () => (0, i.useContext)(x);
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
      a = e.i(71645);
    function r({ title: e, items: r, titleClassName: s }) {
      let [l, i] = (0, a.useState)(!1);
      return (0, t.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => i(!0),
        onMouseLeave: () => i(!1),
        children: [
          (0, t.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${s || "neon-cyan"}`,
            children: e,
          }),
          l &&
            (0, t.jsx)("div", {
              className: "header-dropdown-menu",
              children: r.map((e, a) =>
                e.isSeparator
                  ? (0, t.jsx)("div", { className: "dropdown-separator" }, a)
                  : "header" === e.type
                    ? (0, t.jsx)(
                        "div",
                        { className: "dropdown-header", children: e.name },
                        a,
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
                          a,
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
                          a,
                        ),
              ),
            }),
        ],
      });
    }
    let s = (0, e.i(75254).default)("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]);
    var l = e.i(37727);
    let i = [
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
      o = [
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
      u = [
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
      d = [
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
      f = [
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
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: m,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(r, {
                    title: "Community",
                    items: i,
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
                (0, t.jsx)(r, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                  }),
                  items: c,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(r, {
                  title: "FX Matrix Analyzer",
                  items: f,
                  titleClassName: "neon-green",
                }),
                (0, t.jsx)(r, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "Las Vegas" }),
                      (0, t.jsx)("div", { children: "Stats" }),
                    ],
                  }),
                  items: u,
                  titleClassName: "neon-gold glow-text",
                }),
                (0, t.jsx)(r, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "World" }),
                      (0, t.jsx)("div", { children: "Sports" }),
                    ],
                  }),
                  items: o,
                  titleClassName: "neon-blue",
                }),
                (0, t.jsx)(r, {
                  title: "Opinions",
                  items: d,
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
      let [e, p] = (0, a.useState)(!1);
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
                  ? (0, t.jsx)(l.X, { size: 24 })
                  : (0, t.jsx)(s, { size: 24 }),
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
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: m,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(r, {
                    title: "Community",
                    items: i,
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
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                    }),
                    items: c,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(r, {
                    title: "FX Matrix Analyzer",
                    items: f,
                    titleClassName: "neon-green",
                  }),
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "Las Vegas" }),
                        (0, t.jsx)("div", { children: "Stats" }),
                      ],
                    }),
                    items: u,
                    titleClassName: "neon-gold glow-text",
                  }),
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "World" }),
                        (0, t.jsx)("div", { children: "Sports" }),
                      ],
                    }),
                    items: o,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(r, {
                    title: "Opinions",
                    items: d,
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
    function y() {
      let e = (function () {
        let [e, t] = a.useState(void 0);
        return (
          a.useEffect(() => {
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
    e.s(["Header", () => y], 45872);
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
  29475,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      a = e.i(45872),
      r = e.i(93479),
      s = e.i(22016),
      l = e.i(71689);
    let i = [
      { name: "Tether", symbol: "USDT" },
      { name: "USD Coin", symbol: "USDC" },
      { name: "Dai", symbol: "DAI" },
      { name: "TrueUSD", symbol: "TUSD" },
      { name: "Pax Dollar", symbol: "USDP" },
      { name: "Binance USD", symbol: "BUSD" },
      { name: "USDD", symbol: "USDD" },
      { name: "First Digital USD", symbol: "FDUSD" },
      { name: "PayPal USD", symbol: "PYUSD" },
      { name: "Ethena USDe", symbol: "USDe" },
      { name: "World Liberty USD (USD1)", symbol: "USD1" },
      { name: "Neutrino USD", symbol: "USDN" },
      { name: "sUSD (Synthetix)", symbol: "SUSD" },
      { name: "mUSD (mStable)", symbol: "MUSD" },
      { name: "Stably USD", symbol: "USDS" },
      { name: "Fei USD", symbol: "FEI" },
      { name: "TerraUSD Classic", symbol: "USTC" },
      { name: "Reserve Rights USD", symbol: "RSV" },
      { name: "Tether EURt", symbol: "EURt" },
      { name: "USDX (Kava)", symbol: "USDX" },
      { name: "TrueAUD", symbol: "TAUD" },
      { name: "sEUR", symbol: "SEUR" },
      { name: "USDK", symbol: "USDK" },
      { name: "QCAD Stablecoin", symbol: "QCAD" },
      { name: "XSGD", symbol: "XSGD" },
      { name: "TrueGBP", symbol: "TGBP" },
      { name: "Terra Classic USD (deprecated)", symbol: "UST" },
      { name: "Stasis EURS", symbol: "EURS" },
      { name: "Hedera USD (example)", symbol: "HUSD" },
      { name: "mStable USD", symbol: "mUSD" },
      { name: "Algorithmic USDX (example)", symbol: "USDXA" },
      { name: "TrueBRL", symbol: "TBRL" },
      { name: "Celo Dollar", symbol: "cUSD" },
      { name: "FRAX (fractional algorithmic)", symbol: "FRAX" },
      { name: "sAUD", symbol: "SAUD" },
      { name: "VGX Stable (example)", symbol: "VGXUSD" },
      { name: "Carbon USD (example)", symbol: "CUSD" },
      { name: "Tether GBPt", symbol: "GBPt" },
      { name: "TrueHKD", symbol: "THKD" },
      { name: "NUVEI USD (example)", symbol: "NUUSD" },
      { name: "sJPY", symbol: "SJPy" },
      { name: "TerraUSD v2 variants (example)", symbol: "TUSD2" },
      { name: "USDJ", symbol: "USDJ" },
      { name: "Liquity LUSD (pegged)", symbol: "LUSD" },
      { name: "mStable EUR", symbol: "mEUR" },
      { name: "Wrapped USD (wUSD)", symbol: "WUSD" },
      { name: "USDe (another issuer)", symbol: "USDE2" },
      { name: "Alchemix USD", symbol: "ALUSD" },
      { name: "NUSD (example)", symbol: "NUSD" },
      { name: "OKB Stable USD (example)", symbol: "OKUSD" },
      { name: "Gate USD (example)", symbol: "GTUSD" },
      { name: "Tether TRX-USDT", symbol: "TRX-USDT" },
      { name: "sGBP", symbol: "SGBP" },
      { name: "Reserve (RSV variant)", symbol: "RSV2" },
      { name: "sKRW", symbol: "SKRW" },
      { name: "BitUSD (BitShares)", symbol: "BITUSD" },
      { name: "NuBits (legacy)", symbol: "USNBT" },
      { name: "USDH (Hedera example)", symbol: "USDH" },
      { name: "sKRW2", symbol: "SKRW2" },
      { name: "XEUR (example)", symbol: "XEUR" },
      { name: "TrueCHF", symbol: "TCHF" },
      { name: "sCHF", symbol: "SCHF" },
      { name: "eUSD (example)", symbol: "EUSD" },
      { name: "USDQ (Q DAO)", symbol: "USDQ" },
      { name: "sCAD", symbol: "SCAD" },
      { name: "sAUD2", symbol: "SAUD2" },
      { name: "sEUR2", symbol: "SEUR2" },
      { name: "sUSD2", symbol: "SUSD2" },
      { name: "USDSB (example bank-backed)", symbol: "USDSB" },
      { name: "XSGD2", symbol: "XSGD2" },
      { name: "TrueINR (example)", symbol: "TINR" },
      { name: "sINR", symbol: "SINR" },
      { name: "USDS (example)", symbol: "USDS2" },
      { name: "StableUSD (example)", symbol: "STUSD" },
      { name: "Wrapped Fiat USD (example)", symbol: "WFUSD" },
      { name: "USDG (example)", symbol: "USDG" },
      { name: "sNZD", symbol: "SNZD" },
      { name: "sSEK", symbol: "SSEK" },
      { name: "sNOK", symbol: "SNOK" },
      { name: "sDKK", symbol: "SDKK" },
      { name: "sPLN", symbol: "SPLN" },
      { name: "PAX Gold (stable-like commodity)", symbol: "PAXG" },
      { name: "sMXN", symbol: "SMXN" },
      { name: "TerraKRW (example)", symbol: "KRT" },
      { name: "sTRY", symbol: "STRY" },
      { name: "sZAR", symbol: "SZAR" },
      { name: "sHKD", symbol: "SHKD" },
      { name: "sAED", symbol: "SAED" },
      { name: "BasketStable (example)", symbol: "BUSDx" },
      { name: "sILS", symbol: "SILS" },
      { name: "Anchor USD (example)", symbol: "ANUSD" },
      { name: "sPHP", symbol: "SPHP" },
      { name: "sTHB", symbol: "STHB" },
      { name: "sIDR", symbol: "SIDR" },
      { name: "sVND", symbol: "SVND" },
      { name: "sBDT", symbol: "SBDT" },
      { name: "sPKR", symbol: "SPKR" },
    ];
    function o() {
      let [e, o] = (0, n.useState)(""),
        m = i.filter(
          (t) =>
            t.name.toLowerCase().includes(e.toLowerCase()) ||
            t.symbol.toLowerCase().includes(e.toLowerCase()),
        );
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(a.Header, {}),
          (0, t.jsx)("main", {
            className: "dashboard-grid",
            children: (0, t.jsxs)("section", {
              className: "center-content",
              children: [
                (0, t.jsx)("h1", {
                  className: "text-3xl font-bold neon-text text-center mt-8",
                  children: "Top 100 Stablecoins",
                }),
                (0, t.jsx)("p", {
                  className: "text-lg text-gray-300 text-center",
                  children:
                    "A comprehensive list of stablecoins, which are cryptocurrencies designed to minimize price volatility.",
                }),
                (0, t.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, t.jsx)(r.Input, {
                    type: "text",
                    placeholder: "Search stablecoins...",
                    value: e,
                    onChange: (e) => o(e.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "w-full overflow-x-auto mt-8",
                  children: (0, t.jsx)("div", {
                    className: "info-table-card",
                    children: (0, t.jsxs)("table", {
                      className: "info-table w-full",
                      children: [
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", { children: "#" }),
                              (0, t.jsx)("th", { children: "Name" }),
                              (0, t.jsx)("th", { children: "Symbol" }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("tbody", {
                          children: m.map((e, n) =>
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
                                ],
                              },
                              e.name,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          (0, t.jsxs)(s.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, t.jsx)(l.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => o]);
  },
]);
