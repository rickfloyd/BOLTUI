(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      a = e.i(75157);
    let r = n.forwardRef(({ className: e, type: n, ...r }, i) =>
      (0, t.jsx)("input", {
        type: n,
        className: (0, a.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: i,
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
        return c;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return o;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    function i(e) {
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
    function s(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function o(e) {
      let t = new URLSearchParams();
      for (let [n, a] of Object.entries(e))
        if (Array.isArray(a)) for (let e of a) t.append(n, s(e));
        else t.set(n, s(a));
      return t;
    }
    function c(e, ...t) {
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
        return o;
      },
      formatWithValidation: function () {
        return l;
      },
      urlObjectKeys: function () {
        return c;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let i = e.r(90809)._(e.r(98183)),
      s = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: n } = e,
        a = e.protocol || "",
        r = e.pathname || "",
        o = e.hash || "",
        c = e.query || "",
        l = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (l = t + e.host)
          : n &&
            ((l = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (l += ":" + e.port)),
        c && "object" == typeof c && (c = String(i.urlQueryToSearchParams(c))));
      let d = e.search || (c && `?${c}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || s.test(a)) && !1 !== l)
          ? ((l = "//" + (l || "")), r && "/" !== r[0] && (r = "/" + r))
          : l || (l = ""),
        o && "#" !== o[0] && (o = "#" + o),
        d && "?" !== d[0] && (d = "?" + d),
        (r = r.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${a}${l}${r}${d}${o}`
      );
    }
    let c = [
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
    function l(e) {
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
          } else (e && (n.current = i(e, a)), t && (r.current = i(t, a)));
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
    var a = {
      DecodeError: function () {
        return b;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return y;
      },
      PageNotFoundError: function () {
        return g;
      },
      SP: function () {
        return f;
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
        return u;
      },
      getLocationOrigin: function () {
        return l;
      },
      getURL: function () {
        return d;
      },
      isAbsoluteUrl: function () {
        return c;
      },
      isResSent: function () {
        return m;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return N;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(e) {
      let t,
        n = !1;
      return (...a) => (n || ((n = !0), (t = e(...a))), t);
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      c = (e) => o.test(e);
    function l() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function d() {
      let { href: e } = window.location,
        t = l();
      return e.substring(t.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function m(e) {
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
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let a = await e.getInitialProps(t);
      if (n && m(n)) return a;
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
    let f = "undefined" != typeof performance,
      x =
        f &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class b extends Error {}
    class y extends Error {}
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
    let a = e.r(18967),
      r = e.r(52817);
    function i(e) {
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
        return g;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let i = e.r(90809),
      s = e.r(43476),
      o = i._(e.r(71645)),
      c = e.r(95057),
      l = e.r(8372),
      d = e.r(18581),
      u = e.r(18967),
      m = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      h = e.r(73668),
      f = e.r(65165);
    function x(e) {
      return "string" == typeof e ? e : (0, c.formatUrl)(e);
    }
    function b(t) {
      var n;
      let a,
        r,
        i,
        [c, b] = (0, o.useOptimistic)(p.IDLE_LINK_STATUS),
        g = (0, o.useRef)(null),
        {
          href: v,
          as: j,
          children: N,
          prefetch: k = null,
          passHref: A,
          replace: E,
          shallow: C,
          scroll: O,
          onClick: S,
          onMouseEnter: I,
          onTouchStart: P,
          legacyBehavior: w = !1,
          onNavigate: T,
          ref: D,
          unstable_dynamicOnHover: M,
          ...F
        } = t;
      ((a = N),
        w &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, s.jsx)("a", { children: a })));
      let L = o.default.useContext(l.AppRouterContext),
        R = !1 !== k,
        B =
          !1 !== k
            ? null === (n = k) || "auto" === n
              ? f.FetchStrategy.PPR
              : f.FetchStrategy.Full
            : f.FetchStrategy.PPR,
        { href: _, as: G } = o.default.useMemo(() => {
          let e = x(v);
          return { href: e, as: j ? x(j) : e };
        }, [v, j]);
      if (w) {
        if (a?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        r = o.default.Children.only(a);
      }
      let U = w ? r && "object" == typeof r && r.ref : D,
        $ = o.default.useCallback(
          (e) => (
            null !== L &&
              (g.current = (0, p.mountLinkInstance)(e, _, L, B, R, b)),
            () => {
              (g.current &&
                ((0, p.unmountLinkForCurrentNavigation)(g.current),
                (g.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [R, _, L, B, b],
        ),
        V = {
          ref: (0, d.useMergedRef)($, U),
          onClick(t) {
            (w || "function" != typeof S || S(t),
              w &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, n, a, r, i, s, c) {
                  if ("undefined" != typeof window) {
                    let l,
                      { nodeName: d } = t.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
                        (((l = t.currentTarget.getAttribute("target")) &&
                          "_self" !== l) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(n)) {
                      i && (t.preventDefault(), location.replace(n));
                      return;
                    }
                    if ((t.preventDefault(), c)) {
                      let e = !1;
                      if (
                        (c({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: u } = e.r(99781);
                    o.default.startTransition(() => {
                      u(a || n, i ? "replace" : "push", s ?? !0, r.current);
                    });
                  }
                })(t, _, G, g, E, O, T));
          },
          onMouseEnter(e) {
            (w || "function" != typeof I || I(e),
              w &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              L && R && (0, p.onNavigationIntent)(e.currentTarget, !0 === M));
          },
          onTouchStart: function (e) {
            (w || "function" != typeof P || P(e),
              w &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              L && R && (0, p.onNavigationIntent)(e.currentTarget, !0 === M));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(G)
          ? (V.href = G)
          : (w && !A && ("a" !== r.type || "href" in r.props)) ||
            (V.href = (0, m.addBasePath)(G)),
        (i = w
          ? o.default.cloneElement(r, V)
          : (0, s.jsx)("a", { ...F, ...V, children: a })),
        (0, s.jsx)(y.Provider, { value: c, children: i })
      );
    }
    e.r(84508);
    let y = (0, o.createContext)(p.IDLE_LINK_STATUS),
      g = () => (0, o.useContext)(y);
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
    function r({ title: e, items: r, titleClassName: i }) {
      let [s, o] = (0, a.useState)(!1);
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
      c = [
        { name: "Markets", subtext: "Global financial markets", active: !0 },
        { name: "World Sports", subtext: "International sports coverage" },
      ],
      l = [
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
      d = [
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
      m = [
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
      p = [
        {
          name: "AI Volatility Forecast",
          subtext: "Predict market volatility with AI",
        },
      ];
    function h() {
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
                    items: l,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(r, {
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
                (0, t.jsx)(r, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                  }),
                  items: d,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(r, {
                  title: "FX Matrix Analyzer",
                  items: p,
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
                  items: c,
                  titleClassName: "neon-blue",
                }),
                (0, t.jsx)(r, {
                  title: "Opinions",
                  items: m,
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
    function f() {
      let [e, h] = (0, a.useState)(!1);
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
                onClick: () => h(!e),
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
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: l,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(r, {
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
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                    }),
                    items: d,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(r, {
                    title: "FX Matrix Analyzer",
                    items: p,
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
                    items: c,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(r, {
                    title: "Opinions",
                    items: m,
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
              ? (0, t.jsx)(f, {})
              : (0, t.jsx)(h, {}),
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
  83339,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      a = e.i(45872),
      r = e.i(93479),
      i = e.i(22016),
      s = e.i(71689),
      o = e.i(78917);
    let c = [
      {
        name: "Aragon",
        symbol: "ANT",
        contractAddress: "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
        chain: "Ethereum",
        coinGeckoId: "aragon",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/aragon",
      },
      {
        name: "API3",
        symbol: "API3",
        contractAddress: "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
        chain: "Ethereum",
        coinGeckoId: "api3",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/api3",
      },
      {
        name: "DAO Maker",
        symbol: "DAO",
        contractAddress: "0x0f51bb10119727a7e5ea3538074fb341f56b09ad",
        chain: "Ethereum",
        coinGeckoId: "dao-maker",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/dao-maker",
      },
      {
        name: "BitDAO",
        symbol: "BIT",
        contractAddress: "0x1a4da80967373fd929961e976b4b53ceec063a15",
        chain: "Ethereum",
        coinGeckoId: "bitdao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/bitdao",
      },
      {
        name: "MetisDAO",
        symbol: "METIS",
        contractAddress: "0xdeaDDe1127c0A5cF7e5F65cBfA0A3c6e5B7C1cB3",
        chain: "Ethereum",
        coinGeckoId: "metis-token",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/metis-token",
      },
      {
        name: "Olympus DAO",
        symbol: "OHM",
        contractAddress: "0x64aa3364F17FfF3a2d7A7D6cC9cB2A1cF8C3e3f0",
        chain: "Ethereum",
        coinGeckoId: "olympus",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/olympus",
      },
      {
        name: "Maker",
        symbol: "MKR",
        contractAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
        chain: "Ethereum",
        coinGeckoId: "maker",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/maker",
      },
      {
        name: "Compound",
        symbol: "COMP",
        contractAddress: "0xc00e94cb662c3520282e6f5717214004a7f26888",
        chain: "Ethereum",
        coinGeckoId: "compound-governance-token",
        apiEndpoint:
          "https://api.coingecko.com/api/v3/coins/compound-governance-token",
      },
      {
        name: "Aave",
        symbol: "AAVE",
        contractAddress: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
        chain: "Ethereum",
        coinGeckoId: "aave",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/aave",
      },
      {
        name: "Curve DAO Token",
        symbol: "CRV",
        contractAddress: "0xd533a949740bb3306d119cc777fa900ba034cd52",
        chain: "Ethereum",
        coinGeckoId: "curve-dao-token",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/curve-dao-token",
      },
      {
        name: "Synthetix",
        symbol: "SNX",
        contractAddress: "0xc011a72400e58ecd99ee497cf89e3775d4bd732f",
        chain: "Ethereum",
        coinGeckoId: "synthetix-network-token",
        apiEndpoint:
          "https://api.coingecko.com/api/v3/coins/synthetix-network-token",
      },
      {
        name: "Yearn Finance",
        symbol: "YFI",
        contractAddress: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
        chain: "Ethereum",
        coinGeckoId: "yearn-finance",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/yearn-finance",
      },
      {
        name: "Badger DAO",
        symbol: "BADGER",
        contractAddress: "0x3472a5a71965499acd81997a54bba8d852c6e53d",
        chain: "Ethereum",
        coinGeckoId: "badger-dao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/badger-dao",
      },
      {
        name: "Gitcoin",
        symbol: "GTC",
        contractAddress: "0xDe30DaD76F5fA5A6f8fB7e8eA7f8fB7e8eA7f8fB",
        chain: "Ethereum",
        coinGeckoId: "gitcoin",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/gitcoin",
      },
      {
        name: "ConstitutionDAO",
        symbol: "PEOPLE",
        contractAddress: "0x7a58c0be72be218b41c608b7fe7c5bb630736c71",
        chain: "Ethereum",
        coinGeckoId: "constitutiondao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/constitutiondao",
      },
      {
        name: "Mantra DAO",
        symbol: "OM",
        contractAddress: "0x82f0b8b456c1a451378467398982d4834b6829c1",
        chain: "Ethereum",
        coinGeckoId: "mantra-dao",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/mantra-dao",
      },
      {
        name: "dYdX",
        symbol: "DYDX",
        contractAddress: "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
        chain: "Ethereum",
        coinGeckoId: "dydx",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/dydx",
      },
      {
        name: "Gnosis",
        symbol: "GNO",
        contractAddress: "0x6810e776880c02933d47db1b9fc05908e5386b96",
        chain: "Ethereum",
        coinGeckoId: "gnosis",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/gnosis",
      },
      {
        name: "BarnBridge",
        symbol: "BOND",
        contractAddress: "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
        chain: "Ethereum",
        coinGeckoId: "barnbridge",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/barnbridge",
      },
      {
        name: "Index Coop",
        symbol: "INDEX",
        contractAddress: "0x0954906da0Bf32d5479e25f46056d22f08464cab",
        chain: "Ethereum",
        coinGeckoId: "index-cooperative",
        apiEndpoint: "https://api.coingecko.com/api/v3/coins/index-cooperative",
      },
    ];
    function l() {
      let [e, l] = (0, n.useState)(""),
        d = c.filter(
          (t) =>
            t.name.toLowerCase().includes(e.toLowerCase()) ||
            t.symbol.toLowerCase().includes(e.toLowerCase()) ||
            t.chain.toLowerCase().includes(e.toLowerCase()),
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
                  children: "DAO Governance Tokens",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "These tokens represent governance rights in decentralized autonomous organizations (DAOs). They’re typically used for voting, proposals, and treasury control.",
                }),
                (0, t.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, t.jsx)(r.Input, {
                    type: "text",
                    placeholder: "Search DAO tokens...",
                    value: e,
                    onChange: (e) => l(e.target.value),
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
                                (0, t.jsx)("th", { children: "Token Name" }),
                                (0, t.jsx)("th", { children: "Symbol" }),
                                (0, t.jsx)("th", {
                                  children: "Contract Address",
                                }),
                                (0, t.jsx)("th", { children: "Chain" }),
                                (0, t.jsx)("th", { children: "API" }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("tbody", {
                            children: d.map((e, n) =>
                              (0, t.jsxs)(
                                "tr",
                                {
                                  className: "hover:bg-white/5",
                                  children: [
                                    (0, t.jsx)("td", {
                                      className: "neon-cyan",
                                      children: e.name,
                                    }),
                                    (0, t.jsx)("td", {
                                      className: "neon-pink",
                                      children: e.symbol,
                                    }),
                                    (0, t.jsx)("td", {
                                      className:
                                        "text-gray-400 font-mono text-xs",
                                      children: e.contractAddress,
                                    }),
                                    (0, t.jsx)("td", {
                                      className: "text-gray-300",
                                      children: e.chain,
                                    }),
                                    (0, t.jsx)("td", {
                                      children: (0, t.jsxs)(i.default, {
                                        href: e.apiEndpoint,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "text-cyan-400 hover:underline flex items-center gap-1",
                                        children: [
                                          "CoinGecko ",
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
                      0 === d.length &&
                        (0, t.jsx)("p", {
                          className: "text-center text-gray-400 py-8",
                          children: "No DAO tokens found matching your search.",
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, t.jsxs)(i.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, t.jsx)(s.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => l], 83339);
  },
]);
