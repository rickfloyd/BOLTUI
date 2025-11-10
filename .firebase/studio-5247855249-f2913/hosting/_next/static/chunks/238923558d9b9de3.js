(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
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
        return o;
      },
      searchParamsToUrlQuery: function () {
        return s;
      },
      urlQueryToSearchParams: function () {
        return l;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    function s(e) {
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
    function i(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function l(e) {
      let t = new URLSearchParams();
      for (let [n, r] of Object.entries(e))
        if (Array.isArray(r)) for (let e of r) t.append(n, i(e));
        else t.set(n, i(r));
      return t;
    }
    function o(e, ...t) {
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
        return l;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return o;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let s = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: n } = e,
        r = e.protocol || "",
        a = e.pathname || "",
        l = e.hash || "",
        o = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : n &&
            ((c = t + (~n.indexOf(":") ? `[${n}]` : n)),
            e.port && (c += ":" + e.port)),
        o && "object" == typeof o && (o = String(s.urlQueryToSearchParams(o))));
      let d = e.search || (o && `?${o}`) || "";
      return (
        r && !r.endsWith(":") && (r += ":"),
        e.slashes || ((!r || i.test(r)) && !1 !== c)
          ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a))
          : c || (c = ""),
        l && "#" !== l[0] && (l = "#" + l),
        d && "?" !== d[0] && (d = "?" + d),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${r}${c}${a}${d}${l}`
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
    function c(e) {
      return l(e);
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
          } else (e && (n.current = s(e, r)), t && (a.current = s(t, r)));
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
    var r = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return b;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return g;
      },
      PageNotFoundError: function () {
        return j;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return x;
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
        return d;
      },
      isAbsoluteUrl: function () {
        return o;
      },
      isResSent: function () {
        return m;
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
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        n = !1;
      return (...r) => (n || ((n = !0), (t = e(...r))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      o = (e) => l.test(e);
    function c() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return `${e}//${t}${n ? ":" + n : ""}`;
    }
    function d() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function m(e) {
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
      let r = await e.getInitialProps(t);
      if (n && m(n)) return r;
      if (!r)
        throw Object.defineProperty(
          Error(
            `"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`,
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
    class g extends Error {}
    class j extends Error {
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
    class b extends Error {
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
    let r = e.r(18967),
      a = e.r(52817);
    function s(e) {
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
        return j;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let s = e.r(90809),
      i = e.r(43476),
      l = s._(e.r(71645)),
      o = e.r(95057),
      c = e.r(8372),
      d = e.r(18581),
      u = e.r(18967),
      m = e.r(5550);
    e.r(33525);
    let f = e.r(91949),
      p = e.r(73668),
      h = e.r(65165);
    function x(e) {
      return "string" == typeof e ? e : (0, o.formatUrl)(e);
    }
    function y(t) {
      var n;
      let r,
        a,
        s,
        [o, y] = (0, l.useOptimistic)(f.IDLE_LINK_STATUS),
        j = (0, l.useRef)(null),
        {
          href: v,
          as: b,
          children: N,
          prefetch: k = null,
          passHref: C,
          replace: A,
          shallow: S,
          scroll: P,
          onClick: O,
          onMouseEnter: w,
          onTouchStart: E,
          legacyBehavior: T = !1,
          onNavigate: _,
          ref: M,
          unstable_dynamicOnHover: R,
          ...I
        } = t;
      ((r = N),
        T &&
          ("string" == typeof r || "number" == typeof r) &&
          (r = (0, i.jsx)("a", { children: r })));
      let D = l.default.useContext(c.AppRouterContext),
        L = !1 !== k,
        F =
          !1 !== k
            ? null === (n = k) || "auto" === n
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: U, as: B } = l.default.useMemo(() => {
          let e = x(v);
          return { href: e, as: b ? x(b) : e };
        }, [v, b]);
      if (T) {
        if (r?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        a = l.default.Children.only(r);
      }
      let $ = T ? a && "object" == typeof a && a.ref : M,
        V = l.default.useCallback(
          (e) => (
            null !== D &&
              (j.current = (0, f.mountLinkInstance)(e, U, D, F, L, y)),
            () => {
              (j.current &&
                ((0, f.unmountLinkForCurrentNavigation)(j.current),
                (j.current = null)),
                (0, f.unmountPrefetchableInstance)(e));
            }
          ),
          [L, U, D, F, y],
        ),
        G = {
          ref: (0, d.useMergedRef)(V, $),
          onClick(t) {
            (T || "function" != typeof O || O(t),
              T &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !D ||
                t.defaultPrevented ||
                (function (t, n, r, a, s, i, o) {
                  if ("undefined" != typeof window) {
                    let c,
                      { nodeName: d } = t.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
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
                    l.default.startTransition(() => {
                      u(r || n, s ? "replace" : "push", i ?? !0, a.current);
                    });
                  }
                })(t, U, B, j, A, P, _));
          },
          onMouseEnter(e) {
            (T || "function" != typeof w || w(e),
              T &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              D && L && (0, f.onNavigationIntent)(e.currentTarget, !0 === R));
          },
          onTouchStart: function (e) {
            (T || "function" != typeof E || E(e),
              T &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              D && L && (0, f.onNavigationIntent)(e.currentTarget, !0 === R));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(B)
          ? (G.href = B)
          : (T && !C && ("a" !== a.type || "href" in a.props)) ||
            (G.href = (0, m.addBasePath)(B)),
        (s = T
          ? l.default.cloneElement(a, G)
          : (0, i.jsx)("a", { ...I, ...G, children: r })),
        (0, i.jsx)(g.Provider, { value: o, children: s })
      );
    }
    e.r(84508);
    let g = (0, l.createContext)(f.IDLE_LINK_STATUS),
      j = () => (0, l.useContext)(g);
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
    function a({ title: e, items: a, titleClassName: s }) {
      let [i, l] = (0, r.useState)(!1);
      return (0, t.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
          (0, t.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${s || "neon-cyan"}`,
            children: e,
          }),
          i &&
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
    let s = (0, e.i(75254).default)("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]);
    var i = e.i(37727);
    let l = [
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
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(a, {
                    title: "Community",
                    items: l,
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
                  items: d,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(a, {
                  title: "FX Matrix Analyzer",
                  items: f,
                  titleClassName: "neon-green",
                }),
                (0, t.jsx)(a, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "Las Vegas" }),
                      (0, t.jsx)("div", { children: "Stats" }),
                    ],
                  }),
                  items: u,
                  titleClassName: "neon-gold glow-text",
                }),
                (0, t.jsx)(a, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "World" }),
                      (0, t.jsx)("div", { children: "Sports" }),
                    ],
                  }),
                  items: o,
                  titleClassName: "neon-blue",
                }),
                (0, t.jsx)(a, {
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
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Trader", (0, t.jsx)("br", {}), "Profile"],
                    }),
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(a, {
                    title: "Community",
                    items: l,
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
                    items: d,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(a, {
                    title: "FX Matrix Analyzer",
                    items: f,
                    titleClassName: "neon-green",
                  }),
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "Las Vegas" }),
                        (0, t.jsx)("div", { children: "Stats" }),
                      ],
                    }),
                    items: u,
                    titleClassName: "neon-gold glow-text",
                  }),
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "World" }),
                        (0, t.jsx)("div", { children: "Sports" }),
                      ],
                    }),
                    items: o,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(a, {
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
  15288,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      r = e.i(75157);
    let a = n.forwardRef(({ className: e, ...n }, a) =>
      (0, t.jsx)("div", {
        ref: a,
        className: (0, r.cn)(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          e,
        ),
        ...n,
      }),
    );
    a.displayName = "Card";
    let s = n.forwardRef(({ className: e, ...n }, a) =>
      (0, t.jsx)("div", {
        ref: a,
        className: (0, r.cn)("flex flex-col space-y-1.5 p-6", e),
        ...n,
      }),
    );
    s.displayName = "CardHeader";
    let i = n.forwardRef(({ className: e, ...n }, a) =>
      (0, t.jsx)("h3", {
        ref: a,
        className: (0, r.cn)(
          "text-2xl font-semibold leading-none tracking-tight",
          e,
        ),
        ...n,
      }),
    );
    ((i.displayName = "CardTitle"),
      (n.forwardRef(({ className: e, ...n }, a) =>
        (0, t.jsx)("p", {
          ref: a,
          className: (0, r.cn)("text-sm text-muted-foreground", e),
          ...n,
        }),
      ).displayName = "CardDescription"));
    let l = n.forwardRef(({ className: e, ...n }, a) =>
      (0, t.jsx)("div", { ref: a, className: (0, r.cn)("p-6 pt-0", e), ...n }),
    );
    ((l.displayName = "CardContent"),
      (n.forwardRef(({ className: e, ...n }, a) =>
        (0, t.jsx)("div", {
          ref: a,
          className: (0, r.cn)("flex items-center p-6 pt-0", e),
          ...n,
        }),
      ).displayName = "CardFooter"),
      e.s([
        "Card",
        () => a,
        "CardContent",
        () => l,
        "CardHeader",
        () => s,
        "CardTitle",
        () => i,
      ]));
  },
  64590,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(45872),
      r = e.i(15288);
    let a = [
      {
        id: "real_time_dex_data",
        title: "Real-Time DEX Data",
        description:
          "Live prices, slippage, and liquidity from Uniswap, PancakeSwap, and other DEXs.",
        tags: ["DEX", "liquidity", "slippage", "volume"],
      },
      {
        id: "consensus_mining_intel",
        title: "Consensus & Mining Intelligence",
        description:
          "Hash algorithm, mining status, GPU/ASIC flags for PoW coins.",
        tags: ["PoW", "mining", "hashrate"],
      },
      {
        id: "smart_contract_scanner",
        title: "Smart Contract Code Scanner",
        description:
          "Detects verified contracts, proxy patterns, upgradeability, and key functions.",
        tags: ["EVM", "security", "contracts"],
      },
      {
        id: "canonical_token_validator",
        title: "Canonical Token Validator",
        description:
          "Validates CoinGecko ID, consensus, contract, and metadata.",
        tags: ["validation", "metadata", "canonical"],
      },
      {
        id: "onchain_metrics_dashboard",
        title: "On-Chain Metrics Dashboard",
        description:
          "Track active addresses, gas fees, validator count, and treasury balances.",
        tags: ["on-chain", "analytics", "metrics"],
      },
      {
        id: "token_patch_override",
        title: "Token Patch & Override System",
        description:
          "Patch broken tokens, submit metadata fixes, and vote on canonical status.",
        tags: ["patching", "community", "governance"],
      },
      {
        id: "ai_token_classifier",
        title: "AI-Powered Token Classifier",
        description:
          "Auto-tags tokens as DAOs, bridges, infra, privacy, meme, wrapped, etc.",
        tags: ["AI", "classification", "taxonomy"],
      },
      {
        id: "custom_index_builder",
        title: "Custom Index Builder",
        description:
          "Create and chart your own token baskets: DAOs, PoW, L2s, etc.",
        tags: ["index", "portfolio", "custom"],
      },
      {
        id: "experimental_token_lab",
        title: "Experimental Token Lab",
        description:
          "Track new deployments, simulate forks, and test token behavior.",
        tags: ["sandbox", "testing", "forks"],
      },
      {
        id: "security_rug_scanner",
        title: "Security & Rug Risk Scanner",
        description:
          "Detect honeypots, unverified contracts, and liquidity locks.",
        tags: ["security", "rugpull", "audit"],
      },
    ];
    var s = e.i(22016),
      i = e.i(71689);
    function l() {
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(n.Header, {}),
          (0, t.jsx)("main", {
            className: "dashboard-grid",
            children: (0, t.jsxs)("section", {
              className: "center-content",
              children: [
                (0, t.jsx)("h1", {
                  className: "text-3xl font-bold neon-text text-center mt-8",
                  children: "Crypto Feature Cards",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "An overview of the powerful, data-driven features for deep crypto analysis available on the platform.",
                }),
                (0, t.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8",
                  children: a.map((e) =>
                    (0, t.jsxs)(
                      r.Card,
                      {
                        className: "data-card glow-cyan flex flex-col",
                        children: [
                          (0, t.jsx)(r.CardHeader, {
                            children: (0, t.jsx)(r.CardTitle, {
                              className: "text-xl neon-cyan",
                              children: e.title,
                            }),
                          }),
                          (0, t.jsxs)(r.CardContent, {
                            className:
                              "flex-grow flex flex-col justify-between",
                            children: [
                              (0, t.jsx)("p", {
                                className: "text-gray-300 mb-4",
                                children: e.description,
                              }),
                              (0, t.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children: e.tags.map((e) =>
                                  (0, t.jsx)(
                                    "span",
                                    {
                                      className:
                                        "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200/20",
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
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
    e.s(["default", () => l], 64590);
  },
]);
