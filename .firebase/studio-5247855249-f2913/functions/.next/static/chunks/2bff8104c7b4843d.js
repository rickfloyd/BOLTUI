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
        return l;
      },
      searchParamsToUrlQuery: function () {
        return s;
      },
      urlQueryToSearchParams: function () {
        return o;
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
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let s = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: n } = e,
        a = e.protocol || "",
        r = e.pathname || "",
        o = e.hash || "",
        l = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : n &&
            ((c = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (c += ":" + e.port)),
        l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l))));
      let m = e.search || (l && `?${l}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || i.test(a)) && !1 !== c)
          ? ((c = "//" + (c || "")), r && "/" !== r[0] && (r = "/" + r))
          : c || (c = ""),
        o && "#" !== o[0] && (o = "#" + o),
        m && "?" !== m[0] && (m = "?" + m),
        (r = r.replace(/[?#]/g, encodeURIComponent)),
        (m = m.replace("#", "%23")),
        `${a}${c}${r}${m}${o}`
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
        return N;
      },
      MissingStaticPage: function () {
        return j;
      },
      NormalizeError: function () {
        return x;
      },
      PageNotFoundError: function () {
        return g;
      },
      SP: function () {
        return p;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return s;
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
        return f;
      },
      stringifyError: function () {
        return v;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
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
    function f(e) {
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
    let p = "undefined" != typeof performance,
      y =
        p &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class b extends Error {}
    class x extends Error {}
    class g extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class j extends Error {
      constructor(e, t) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class N extends Error {
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
        return g;
      },
    };
    for (var r in a) Object.defineProperty(n, r, { enumerable: !0, get: a[r] });
    let s = e.r(90809),
      i = e.r(43476),
      o = s._(e.r(71645)),
      l = e.r(95057),
      c = e.r(8372),
      m = e.r(18581),
      u = e.r(18967),
      d = e.r(5550);
    e.r(33525);
    let f = e.r(91949),
      h = e.r(73668),
      p = e.r(65165);
    function y(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function b(t) {
      var n;
      let a,
        r,
        s,
        [l, b] = (0, o.useOptimistic)(f.IDLE_LINK_STATUS),
        g = (0, o.useRef)(null),
        {
          href: j,
          as: N,
          children: v,
          prefetch: A = null,
          passHref: C,
          replace: S,
          shallow: P,
          scroll: k,
          onClick: O,
          onMouseEnter: E,
          onTouchStart: R,
          legacyBehavior: T = !1,
          onNavigate: F,
          ref: M,
          unstable_dynamicOnHover: L,
          ...w
        } = t;
      ((a = v),
        T &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, i.jsx)("a", { children: a })));
      let I = o.default.useContext(c.AppRouterContext),
        D = !1 !== A,
        _ =
          !1 !== A
            ? null === (n = A) || "auto" === n
              ? p.FetchStrategy.PPR
              : p.FetchStrategy.Full
            : p.FetchStrategy.PPR,
        { href: B, as: U } = o.default.useMemo(() => {
          let e = y(j);
          return { href: e, as: N ? y(N) : e };
        }, [j, N]);
      if (T) {
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
      let V = T ? r && "object" == typeof r && r.ref : M,
        G = o.default.useCallback(
          (e) => (
            null !== I &&
              (g.current = (0, f.mountLinkInstance)(e, B, I, _, D, b)),
            () => {
              (g.current &&
                ((0, f.unmountLinkForCurrentNavigation)(g.current),
                (g.current = null)),
                (0, f.unmountPrefetchableInstance)(e));
            }
          ),
          [D, B, I, _, b],
        ),
        H = {
          ref: (0, m.useMergedRef)(G, V),
          onClick(t) {
            (T || "function" != typeof O || O(t),
              T &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              !I ||
                t.defaultPrevented ||
                (function (t, n, a, r, s, i, l) {
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
                      s && (t.preventDefault(), location.replace(n));
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
                      u(a || n, s ? "replace" : "push", i ?? !0, r.current);
                    });
                  }
                })(t, B, U, g, S, k, F));
          },
          onMouseEnter(e) {
            (T || "function" != typeof E || E(e),
              T &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              I && D && (0, f.onNavigationIntent)(e.currentTarget, !0 === L));
          },
          onTouchStart: function (e) {
            (T || "function" != typeof R || R(e),
              T &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              I && D && (0, f.onNavigationIntent)(e.currentTarget, !0 === L));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(U)
          ? (H.href = U)
          : (T && !C && ("a" !== r.type || "href" in r.props)) ||
            (H.href = (0, d.addBasePath)(U)),
        (s = T
          ? o.default.cloneElement(r, H)
          : (0, i.jsx)("a", { ...w, ...H, children: a })),
        (0, i.jsx)(x.Provider, { value: l, children: s })
      );
    }
    e.r(84508);
    let x = (0, o.createContext)(f.IDLE_LINK_STATUS),
      g = () => (0, o.useContext)(x);
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
      let [i, o] = (0, a.useState)(!1);
      return (0, t.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
          (0, t.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${s || "neon-cyan"}`,
            children: e,
          }),
          i &&
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
      f = [
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
                    items: c,
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
                  items: m,
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
                  items: l,
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
    function p() {
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
                    items: c,
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
                    items: m,
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
                    items: l,
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
              ? (0, t.jsx)(p, {})
              : (0, t.jsx)(h, {}),
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
  92266,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      a = e.i(45872),
      r = e.i(93479),
      s = e.i(22016),
      i = e.i(71689);
    let o = [
      { name: "Uniswap", symbol: "UNI" },
      { name: "Aave", symbol: "AAVE" },
      { name: "Maker", symbol: "MKR" },
      { name: "Compound", symbol: "COMP" },
      { name: "Curve DAO", symbol: "CRV" },
      { name: "SushiSwap", symbol: "SUSHI" },
      { name: "Yearn Finance", symbol: "YFI" },
      { name: "Balancer", symbol: "BAL" },
      { name: "Synthetix", symbol: "SNX" },
      { name: "Lido DAO", symbol: "LDO" },
      { name: "PancakeSwap", symbol: "CAKE" },
      { name: "Trader Joe", symbol: "JOE" },
      { name: "Convex Finance", symbol: "CVX" },
      { name: "1inch", symbol: "1INCH" },
      { name: "Anchor (legacy / variants)", symbol: "ANC" },
      { name: "Bancor", symbol: "BNT" },
      { name: "Ren", symbol: "REN" },
      { name: "ThorChain", symbol: "RUNE" },
      { name: "Frax Finance", symbol: "FRAX" },
      { name: "Alchemix", symbol: "ALCX / ALUSD" },
      { name: "Perpetual Protocol", symbol: "PERP" },
      { name: "Injective", symbol: "INJ" },
      { name: "dYdX", symbol: "DYDX" },
      { name: "Venus Protocol", symbol: "VAI / XVS" },
      { name: "Kava", symbol: "KAVA" },
      { name: "Oasis Cash", symbol: "ROSE" },
      { name: "Curve Gauge/veTokens", symbol: "veCRV" },
      { name: "Mirror Protocol", symbol: "MIR" },
      { name: "Terra Classic (legacy DeFi)", symbol: "USTC" },
      { name: "DAI (Maker ecosystem)", symbol: "DAI" },
      { name: "Cream Finance", symbol: "CREAM" },
      { name: "Alpha Finance Lab", symbol: "ALPHA" },
      { name: "ThorFi Derivatives", symbol: "THOR" },
      { name: "Ribbon Finance", symbol: "RBN" },
      { name: "Index Coop", symbol: "INDEX" },
      { name: "Badger DAO", symbol: "BADGER" },
      { name: "Rocket Pool", symbol: "RPL" },
      { name: "Liquity", symbol: "LQTY / LUSD" },
      { name: "Hop Protocol", symbol: "HOP" },
      { name: "Stargate Finance", symbol: "STG" },
      { name: "Synapse", symbol: "SYN" },
      { name: "Hopr", symbol: "HOPR" },
      { name: "Orca", symbol: "ORCA" },
      { name: "Raydium", symbol: "RAY" },
      { name: "Jupiter Aggregator", symbol: "JUP" },
      { name: "Saber", symbol: "SBR" },
      { name: "Velodrome", symbol: "VELO" },
      { name: "Abracadabra Money", symbol: "SPELL" },
      { name: "Popsicle Finance", symbol: "ICE" },
      { name: "Tokemak", symbol: "TOKE" },
      { name: "Saddle", symbol: "SDL" },
      { name: "Pendle", symbol: "PENDLE" },
      { name: "Visor Finance", symbol: "VISR" },
      { name: "BarnBridge", symbol: "BOND" },
      { name: "Maple Finance", symbol: "MPL" },
      { name: "Aelin", symbol: "AELIN" },
      { name: "Yield Guild Games", symbol: "YGG" },
      { name: "Notional Finance", symbol: "NOTE" },
      { name: "Yield Protocol", symbol: "YIELD" },
      { name: "Element Finance", symbol: "ELEMENT" },
      { name: "Klima DAO", symbol: "KLIMA" },
      { name: "Olympus DAO", symbol: "OHM" },
      { name: "Wonderland", symbol: "TIME" },
      { name: "Lyra", symbol: "LYRA" },
      { name: "Opyn", symbol: "OPYN" },
      { name: "Charm Finance", symbol: "CHARM" },
      { name: "Hegic", symbol: "HEGIC" },
      { name: "Vega Protocol", symbol: "VEGA" },
      { name: "dForce", symbol: "DF" },
      { name: "Mux Network", symbol: "MUX" },
      { name: "Ondo Finance", symbol: "ONDO" },
      { name: "Fei Protocol", symbol: "FEI" },
      { name: "APY.Finance", symbol: "APY" },
      { name: "Meter", symbol: "MTR" },
      { name: "Saffron Finance", symbol: "SFI" },
      { name: "Kashi (Sushi lending)", symbol: "KASHI" },
      { name: "ZeroEx ecosystem", symbol: "ZRX" },
      { name: "Matcha (0x aggregator)", symbol: "MATCHA" },
      { name: "Liquid Driver", symbol: "LQDR" },
      { name: "Frame", symbol: "FRAME" },
      { name: "PowerPool", symbol: "CVP" },
      { name: "Balance Protocol", symbol: "BLC" },
    ];
    function l() {
      let [e, l] = (0, n.useState)(""),
        c = o.filter(
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
                  children: "DeFi Protocol Tokens",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "A curated list of tokens associated with decentralized finance (DeFi) protocols, including decentralized exchanges, lending platforms, and yield farming services.",
                }),
                (0, t.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, t.jsx)(r.Input, {
                    type: "text",
                    placeholder: "Search DeFi tokens...",
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
                                (0, t.jsx)("th", { children: "#" }),
                                (0, t.jsx)("th", { children: "Name" }),
                                (0, t.jsx)("th", { children: "Symbol" }),
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
                                      children: e.symbol,
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
                          children:
                            "No DeFi tokens found matching your search.",
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, t.jsxs)(s.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, t.jsx)(i.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => l], 92266);
  },
]);
