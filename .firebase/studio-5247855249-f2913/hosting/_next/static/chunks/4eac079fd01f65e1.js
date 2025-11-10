(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      a = e.i(75157);
    let s = n.forwardRef(({ className: e, type: n, ...s }, r) =>
      (0, t.jsx)("input", {
        type: n,
        className: (0, a.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: r,
        ...s,
      }),
    );
    ((s.displayName = "Input"), e.s(["Input", () => s]));
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
        return l;
      },
      searchParamsToUrlQuery: function () {
        return r;
      },
      urlQueryToSearchParams: function () {
        return o;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    function r(e) {
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
    function i(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function o(e) {
      let t = new URLSearchParams();
      for (let [n, a] of Object.entries(e))
        if (Array.isArray(a)) for (let e of a) t.append(n, i(e));
        else t.set(n, i(a));
      return t;
    }
    function l(e, ...t) {
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
        return c;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    let r = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: n } = e,
        a = e.protocol || "",
        s = e.pathname || "",
        o = e.hash || "",
        l = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : n &&
            ((c = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (c += ":" + e.port)),
        l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l))));
      let m = e.search || (l && `?${l}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || i.test(a)) && !1 !== c)
          ? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
          : c || (c = ""),
        o && "#" !== o[0] && (o = "#" + o),
        m && "?" !== m[0] && (m = "?" + m),
        (s = s.replace(/[?#]/g, encodeURIComponent)),
        (m = m.replace("#", "%23")),
        `${a}${c}${s}${m}${o}`
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
    function c(e) {
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
          return s;
        },
      }));
    let a = e.r(71645);
    function s(e, t) {
      let n = (0, a.useRef)(null),
        s = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = n.current;
            e && ((n.current = null), e());
            let t = s.current;
            t && ((s.current = null), t());
          } else (e && (n.current = r(e, a)), t && (s.current = r(t, a)));
        },
        [e, t],
      );
    }
    function r(e, t) {
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
        return x;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return g;
      },
      NormalizeError: function () {
        return w;
      },
      PageNotFoundError: function () {
        return y;
      },
      SP: function () {
        return f;
      },
      ST: function () {
        return b;
      },
      WEB_VITALS: function () {
        return r;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return u;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return m;
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
        return v;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        n = !1;
      return (...a) => (n || ((n = !0), (t = e(...a))), t);
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => o.test(e);
    function c() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function m() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function u(e) {
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
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
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
    let f = "undefined" != typeof performance,
      b =
        f &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class x extends Error {}
    class w extends Error {}
    class y extends Error {
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
    function v(e) {
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
          return r;
        },
      }));
    let a = e.r(18967),
      s = e.r(52817);
    function r(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, a.getLocationOrigin)(),
          n = new URL(e, t);
        return n.origin === t && (0, s.hasBasePath)(n.pathname);
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
        return x;
      },
      useLinkStatus: function () {
        return y;
      },
    };
    for (var s in a) Object.defineProperty(n, s, { enumerable: !0, get: a[s] });
    let r = e.r(90809),
      i = e.r(43476),
      o = r._(e.r(71645)),
      l = e.r(95057),
      c = e.r(8372),
      m = e.r(18581),
      u = e.r(18967),
      d = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      h = e.r(73668),
      f = e.r(65165);
    function b(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function x(t) {
      var n;
      let a,
        s,
        r,
        [l, x] = (0, o.useOptimistic)(p.IDLE_LINK_STATUS),
        y = (0, o.useRef)(null),
        {
          href: g,
          as: j,
          children: v,
          prefetch: N = null,
          passHref: k,
          replace: A,
          shallow: C,
          scroll: S,
          onClick: O,
          onMouseEnter: P,
          onTouchStart: E,
          legacyBehavior: M = !1,
          onNavigate: T,
          ref: R,
          unstable_dynamicOnHover: F,
          ...I
        } = t;
      ((a = v),
        M &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, i.jsx)("a", { children: a })));
      let L = o.default.useContext(c.AppRouterContext),
        D = !1 !== N,
        _ =
          !1 !== N
            ? null === (n = N) || "auto" === n
              ? f.FetchStrategy.PPR
              : f.FetchStrategy.Full
            : f.FetchStrategy.PPR,
        { href: B, as: U } = o.default.useMemo(() => {
          let e = b(g);
          return { href: e, as: j ? b(j) : e };
        }, [g, j]);
      if (M) {
        if (a?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        s = o.default.Children.only(a);
      }
      let z = M ? s && "object" == typeof s && s.ref : R,
        V = o.default.useCallback(
          (e) => (
            null !== L &&
              (y.current = (0, p.mountLinkInstance)(e, B, L, _, D, x)),
            () => {
              (y.current &&
                ((0, p.unmountLinkForCurrentNavigation)(y.current),
                (y.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [D, B, L, _, x],
        ),
        G = {
          ref: (0, m.useMergedRef)(V, z),
          onClick(t) {
            (M || "function" != typeof O || O(t),
              M &&
                s.props &&
                "function" == typeof s.props.onClick &&
                s.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, n, a, s, r, i, l) {
                  if ("undefined" != typeof window) {
                    let c,
                      { nodeName: m } = t.currentTarget;
                    if (
                      ("A" === m.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(n)) {
                      r && (t.preventDefault(), location.replace(n));
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
                    let { dispatchNavigateAction: u } = e.r(99781);
                    o.default.startTransition(() => {
                      u(a || n, r ? "replace" : "push", i ?? !0, s.current);
                    });
                  }
                })(t, B, U, y, A, S, T));
          },
          onMouseEnter(e) {
            (M || "function" != typeof P || P(e),
              M &&
                s.props &&
                "function" == typeof s.props.onMouseEnter &&
                s.props.onMouseEnter(e),
              L && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === F));
          },
          onTouchStart: function (e) {
            (M || "function" != typeof E || E(e),
              M &&
                s.props &&
                "function" == typeof s.props.onTouchStart &&
                s.props.onTouchStart(e),
              L && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === F));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(U)
          ? (G.href = U)
          : (M && !k && ("a" !== s.type || "href" in s.props)) ||
            (G.href = (0, d.addBasePath)(U)),
        (r = M
          ? o.default.cloneElement(s, G)
          : (0, i.jsx)("a", { ...I, ...G, children: a })),
        (0, i.jsx)(w.Provider, { value: l, children: r })
      );
    }
    e.r(84508);
    let w = (0, o.createContext)(p.IDLE_LINK_STATUS),
      y = () => (0, o.useContext)(w);
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
    function s({ title: e, items: s, titleClassName: r }) {
      let [i, o] = (0, a.useState)(!1);
      return (0, t.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
          (0, t.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${r || "neon-cyan"}`,
            children: e,
          }),
          i &&
            (0, t.jsx)("div", {
              className: "header-dropdown-menu",
              children: s.map((e, a) =>
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
    let r = (0, e.i(75254).default)("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]);
    var i = e.i(37727);
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
      c = [
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
      m = [
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
                  (0, t.jsx)(s, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(s, {
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
                (0, t.jsx)(s, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                  }),
                  items: m,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(s, {
                  title: "FX Matrix Analyzer",
                  items: p,
                  titleClassName: "neon-green",
                }),
                (0, t.jsx)(s, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "Las Vegas" }),
                      (0, t.jsx)("div", { children: "Stats" }),
                    ],
                  }),
                  items: u,
                  titleClassName: "neon-gold glow-text",
                }),
                (0, t.jsx)(s, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "World" }),
                      (0, t.jsx)("div", { children: "Sports" }),
                    ],
                  }),
                  items: l,
                  titleClassName: "neon-blue",
                }),
                (0, t.jsx)(s, {
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
                  ? (0, t.jsx)(i.X, { size: 24 })
                  : (0, t.jsx)(r, { size: 24 }),
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
                  (0, t.jsx)(s, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(s, {
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
                  (0, t.jsx)(s, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                    }),
                    items: m,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(s, {
                    title: "FX Matrix Analyzer",
                    items: p,
                    titleClassName: "neon-green",
                  }),
                  (0, t.jsx)(s, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "Las Vegas" }),
                        (0, t.jsx)("div", { children: "Stats" }),
                      ],
                    }),
                    items: u,
                    titleClassName: "neon-gold glow-text",
                  }),
                  (0, t.jsx)(s, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "World" }),
                        (0, t.jsx)("div", { children: "Sports" }),
                      ],
                    }),
                    items: l,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(s, {
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
    function b() {
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
    e.s(["Header", () => b], 45872);
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
  25019,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      a = e.i(45872),
      s = e.i(93479),
      r = e.i(22016),
      i = e.i(71689),
      o = e.i(78917);
    let l = [
      { name: "CryptoPunks", website: "https://www.larvalabs.com/cryptopunks" },
      {
        name: "Bored Ape Yacht Club",
        website: "https://boredapeyachtclub.com",
      },
      {
        name: "Mutant Ape Yacht Club",
        website: "https://boredapeyachtclub.com#mutants",
      },
      { name: "Otherside", website: "https://otherside.xyz" },
      { name: "Moonbirds", website: "https://moonbirds.xyz" },
      { name: "Azuki", website: "https://www.azuki.com" },
      { name: "Doodles", website: "https://doodles.app" },
      { name: "CloneX", website: "https://www.rtfkt.com/clonex" },
      { name: "Meebits", website: "https://meebits.larvalabs.com" },
      { name: "VeeFriends", website: "https://veefriends.com" },
      { name: "Pudgy Penguins", website: "https://www.pudgypenguins.io" },
      { name: "Cool Cats", website: "https://www.coolcatsnft.com" },
      { name: "World of Women", website: "https://worldofwomen.art" },
      { name: "Art Blocks", website: "https://www.artblocks.io" },
      { name: "RTFKT (Nike)", website: "https://www.rtfkt.com" },
      {
        name: "Mutant Cats",
        website: "https://opensea.io/collection/mutant-cats",
      },
      {
        name: "Loot (for Adventurers)",
        website: "https://www.lootproject.com",
      },
      { name: "SuperRare", website: "https://superrare.com" },
      { name: "Foundation", website: "https://foundation.app" },
      { name: "Nouns", website: "https://nouns.wtf" },
      { name: "Hashmasks", website: "https://www.thehashmasks.com" },
      { name: "OnChainMonkeys", website: "https://onchainmonkeys.com" },
      {
        name: "Bored Ape Kennel Club",
        website: "https://boredapeyachtclub.com#kennel",
      },
      {
        name: "Ringers (Art Blocks)",
        website: "https://www.artblocks.io/project/4",
      },
      {
        name: "Chromie Squiggle",
        website: "https://www.artblocks.io/project/1",
      },
      { name: "Fidenza", website: "https://www.artblocks.io/project/438" },
      { name: "NBA Top Shot", website: "https://www.nbatopshot.com" },
      { name: "Sorare", website: "https://sorare.com" },
      { name: "OpenSea", website: "https://opensea.io" },
      { name: "Magic Eden", website: "https://magiceden.io" },
      {
        name: "Solana Monkey Business",
        website: "https://solanamonkey.business",
      },
      { name: "DeGods", website: "https://degods.com" },
      { name: "Goblintown", website: "https://goblintown.wtf" },
      { name: "CyberKongz", website: "https://www.cyberkongz.com" },
      { name: "World of Women Galaxy", website: "https://worldofwomen.art" },
      { name: "Invisible Friends", website: "https://invisiblefriends.io" },
      { name: "Parallel", website: "https://www.parallel.life" },
      { name: "Pixel Vault", website: "https://pixelvault.xyz" },
      {
        name: "Forgotten Runes Wizard’s Cult",
        website: "https://forgottenrunes.com",
      },
      { name: "The Sandbox LAND", website: "https://www.sandbox.game" },
      { name: "Decentraland Estates", website: "https://decentraland.org" },
      { name: "Axie Infinity NFTs", website: "https://axieinfinity.com" },
      { name: "ZED RUN", website: "https://zed.run" },
      { name: "CryptoKitties", website: "https://www.cryptokitties.co" },
      { name: "The Sevens", website: "https://thesevens.io" },
      { name: "Nifty Gateway", website: "https://niftygateway.com" },
      { name: "Rarible", website: "https://rarible.com" },
      { name: "KnownOrigin", website: "https://knownorigin.io" },
      { name: "Async Art", website: "https://async.art" },
      { name: "POAP", website: "https://poap.xyz" },
      { name: "DMarket", website: "https://dmarket.com" },
      { name: "Enjin Marketplace", website: "https://enjin.io" },
      {
        name: "Immutable Marketplace",
        website: "https://marketplace.immutable.com",
      },
      { name: "WAX NFT Hub", website: "https://wax.io/nft" },
      {
        name: "Axie Marketplace",
        website: "https://marketplace.axieinfinity.com",
      },
      { name: "Curio Cards", website: "https://curiocollective.co" },
      { name: "Autoglyphs", website: "https://www.larvalabs.com/autoglyphs" },
      { name: "Yuga Labs", website: "https://yugalabs.com" },
      { name: "The Sandbox", website: "https://www.sandbox.game" },
      { name: "Decentraland", website: "https://decentraland.org" },
      { name: "Axie Infinity", website: "https://axieinfinity.com" },
      { name: "Illuvium", website: "https://illuvium.io" },
      { name: "Gala Games", website: "https://gala.games" },
      { name: "Render Network", website: "https://rendertoken.com" },
      { name: "Enjin", website: "https://enjin.io" },
      { name: "Animoca Brands", website: "https://www.animocabrands.com" },
      { name: "Somnium Space", website: "https://somniumspace.com" },
      { name: "Cryptovoxels", website: "https://www.cryptovoxels.com" },
      { name: "Star Atlas", website: "https://staratlas.com" },
      { name: "Decentral Games", website: "https://decentral.games" },
      { name: "My Neighbor Alice", website: "https://myneighboralice.com" },
      { name: "Phantom Galaxies", website: "https://phantomgalaxies.com" },
      { name: "Metahero", website: "https://metahero.io" },
      { name: "Upland", website: "https://upland.me" },
      { name: "The Six Dragons", website: "https://thesixdragons.com" },
      { name: "Alien Worlds", website: "https://alienworlds.io" },
      { name: "WEMIX", website: "https://wemix.com" },
      { name: "WAX (platform)", website: "https://wax.io" },
      {
        name: "Horizon Worlds (Meta)",
        website: "https://www.meta.com/horizon-worlds",
      },
      { name: "Oasys", website: "https://oasys.games" },
      { name: "Treasure", website: "https://treasure.lol" },
      { name: "Yield Guild Games", website: "https://yieldguild.io" },
      {
        name: "Animoca’s REVV Motorsport",
        website: "https://revvmotorsport.com",
      },
      { name: "Bloktopia", website: "https://bloktopia.com" },
      { name: "Highstreet", website: "https://highstreet.tv" },
      { name: "Planet IX", website: "https://planetix.io" },
      { name: "MOBOX", website: "https://mobox.io" },
      { name: "RFOX (RFOX VALT)", website: "https://rfox.com" },
      { name: "Aavegotchi", website: "https://www.aavegotchi.com" },
      { name: "The Graph", website: "https://thegraph.com" },
      { name: "Immutable X", website: "https://www.immutable.com" },
      { name: "CEEK VR", website: "https://www.ceek.com" },
      { name: "Metaplex", website: "https://www.metaplex.com" },
      { name: "NetVRk", website: "https://netvrk.co" },
      { name: "Forte", website: "https://www.forte.io" },
      { name: "PlayDapp", website: "https://playdapp.io" },
      { name: "Splinterlands", website: "https://splinterlands.com" },
    ];
    function c() {
      let [e, c] = (0, n.useState)(""),
        m = l.filter((t) => t.name.toLowerCase().includes(e.toLowerCase()));
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
                  children: "Metaverse & NFT Projects",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "A curated list of projects building the metaverse, from virtual worlds and gaming platforms to the underlying infrastructure and tools.",
                }),
                (0, t.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, t.jsx)(s.Input, {
                    type: "text",
                    placeholder: "Search metaverse & NFT projects...",
                    value: e,
                    onChange: (e) => c(e.target.value),
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
                                (0, t.jsx)("th", { children: "Website" }),
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
                                      children: (0, t.jsxs)(r.default, {
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
                                `${e.name}-${n}`,
                              ),
                            ),
                          }),
                        ],
                      }),
                      0 === m.length &&
                        (0, t.jsx)("p", {
                          className: "text-center text-gray-400 py-8",
                          children: "No projects found matching your search.",
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, t.jsxs)(r.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, t.jsx)(i.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => c], 25019);
  },
]);
