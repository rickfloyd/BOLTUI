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
        return l;
      },
      searchParamsToUrlQuery: function () {
        return s;
      },
      urlQueryToSearchParams: function () {
        return o;
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
    function o(e) {
      let t = new URLSearchParams();
      for (let [n, r] of Object.entries(e))
        if (Array.isArray(r)) for (let e of r) t.append(n, i(e));
        else t.set(n, i(r));
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
        return c;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let s = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: n } = e,
        r = e.protocol || "",
        a = e.pathname || "",
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
      let d = e.search || (l && `?${l}`) || "";
      return (
        r && !r.endsWith(":") && (r += ":"),
        e.slashes || ((!r || i.test(r)) && !1 !== c)
          ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a))
          : c || (c = ""),
        o && "#" !== o[0] && (o = "#" + o),
        d && "?" !== d[0] && (d = "?" + d),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${r}${c}${a}${d}${o}`
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
        return N;
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
        return l;
      },
      isResSent: function () {
        return m;
      },
      loadGetInitialProps: function () {
        return f;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return v;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        n = !1;
      return (...r) => (n || ((n = !0), (t = e(...r))), t);
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => o.test(e);
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
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function f(e, t) {
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await f(t.Component, t.ctx) }
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
    class N extends Error {
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
      o = s._(e.r(71645)),
      l = e.r(95057),
      c = e.r(8372),
      d = e.r(18581),
      u = e.r(18967),
      m = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      f = e.r(73668),
      h = e.r(65165);
    function x(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function y(t) {
      var n;
      let r,
        a,
        s,
        [l, y] = (0, o.useOptimistic)(p.IDLE_LINK_STATUS),
        j = (0, o.useRef)(null),
        {
          href: N,
          as: b,
          children: v,
          prefetch: k = null,
          passHref: C,
          replace: w,
          shallow: A,
          scroll: S,
          onClick: T,
          onMouseEnter: E,
          onTouchStart: P,
          legacyBehavior: O = !1,
          onNavigate: M,
          ref: R,
          unstable_dynamicOnHover: I,
          ...F
        } = t;
      ((r = v),
        O &&
          ("string" == typeof r || "number" == typeof r) &&
          (r = (0, i.jsx)("a", { children: r })));
      let D = o.default.useContext(c.AppRouterContext),
        L = !1 !== k,
        _ =
          !1 !== k
            ? null === (n = k) || "auto" === n
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: B, as: U } = o.default.useMemo(() => {
          let e = x(N);
          return { href: e, as: b ? x(b) : e };
        }, [N, b]);
      if (O) {
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
      let V = O ? a && "object" == typeof a && a.ref : R,
        $ = o.default.useCallback(
          (e) => (
            null !== D &&
              (j.current = (0, p.mountLinkInstance)(e, B, D, _, L, y)),
            () => {
              (j.current &&
                ((0, p.unmountLinkForCurrentNavigation)(j.current),
                (j.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [L, B, D, _, y],
        ),
        G = {
          ref: (0, d.useMergedRef)($, V),
          onClick(t) {
            (O || "function" != typeof T || T(t),
              O &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !D ||
                t.defaultPrevented ||
                (function (t, n, r, a, s, i, l) {
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
                    if (!(0, f.isLocalURL)(n)) {
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
                      u(r || n, s ? "replace" : "push", i ?? !0, a.current);
                    });
                  }
                })(t, B, U, j, w, S, M));
          },
          onMouseEnter(e) {
            (O || "function" != typeof E || E(e),
              O &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              D && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === I));
          },
          onTouchStart: function (e) {
            (O || "function" != typeof P || P(e),
              O &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              D && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === I));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(U)
          ? (G.href = U)
          : (O && !C && ("a" !== a.type || "href" in a.props)) ||
            (G.href = (0, m.addBasePath)(U)),
        (s = O
          ? o.default.cloneElement(a, G)
          : (0, i.jsx)("a", { ...F, ...G, children: r })),
        (0, i.jsx)(g.Provider, { value: l, children: s })
      );
    }
    e.r(84508);
    let g = (0, o.createContext)(p.IDLE_LINK_STATUS),
      j = () => (0, o.useContext)(g);
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
      let [i, o] = (0, r.useState)(!1);
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
    function f() {
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
                  items: d,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(a, {
                  title: "FX Matrix Analyzer",
                  items: p,
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
                  items: l,
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
      let [e, f] = (0, r.useState)(!1);
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
                onClick: () => f(!e),
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
                    items: d,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(a, {
                    title: "FX Matrix Analyzer",
                    items: p,
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
                    items: l,
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
              : (0, t.jsx)(f, {}),
      });
    }
    e.s(["Header", () => x], 45872);
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
    let o = n.forwardRef(({ className: e, ...n }, a) =>
      (0, t.jsx)("div", { ref: a, className: (0, r.cn)("p-6 pt-0", e), ...n }),
    );
    ((o.displayName = "CardContent"),
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
        () => o,
        "CardHeader",
        () => s,
        "CardTitle",
        () => i,
      ]));
  },
  18566,
  (e, t, n) => {
    t.exports = e.r(76562);
  },
  79369,
  (e) => {
    "use strict";
    var t = e.i(43476),
      n = e.i(71645),
      r = e.i(22016),
      a = e.i(18566),
      s = e.i(45872),
      i = e.i(15288);
    let o = [
        {
          name: "Layer-1 Blockchains",
          description: "Base networks like BTC, ETH, SOL.",
          color: "glow-cyan",
          route: "/layer-1",
        },
        {
          name: "Layer-2 Scaling Solutions",
          description: "Faster, cheaper add-on layers (ARB, OP, MATIC).",
          color: "glow-orange",
          route: "/layer-2",
        },
        {
          name: "Smart-Contract Platforms",
          description: "Support on-chain apps (ETH, AVAX, ADA).",
          color: "glow-blue",
          route: "/smart-contract-platforms",
        },
        {
          name: "Stablecoins",
          description: "Fiat-pegged assets (USDT, USDC, DAI).",
          color: "glow-gold",
          route: "/stablecoins",
        },
        {
          name: "Wrapped Assets",
          description: "Tokens backed by others (WBTC, WETH).",
          color: "glow-pink",
          route: "/wrapped-assets",
        },
        {
          name: "Exchange Tokens",
          description: "Power trading platforms (BNB, OKB, HT).",
          color: "glow-teal",
          route: "/exchange-tokens",
        },
        {
          name: "Governance Tokens",
          description: "DAO voting rights (COMP, MKR, AAVE).",
          color: "glow-cyan",
          route: "/dao-tokens",
        },
        {
          name: "Utility Tokens",
          description: "Access or pay for services (BAT, CHZ).",
          color: "glow-orange",
          route: "/utility-tokens",
        },
        {
          name: "Privacy Coins",
          description: "Hide sender and receiver data (XMR, ZEC).",
          color: "glow-blue",
          route: "/privacy-coins",
        },
        {
          name: "Interoperability Tokens",
          description: "Link different blockchains (DOT, ATOM).",
          color: "glow-gold",
          route: "/interoperability",
        },
        {
          name: "DeFi Protocol Tokens",
          description: "Drive DeFi platforms (CRV, SNX, AAVE).",
          color: "glow-pink",
          route: "/defi-protocols",
        },
        {
          name: "Lending & Borrowing Tokens",
          description: "Enable crypto loans (COMP, AAVE).",
          color: "glow-teal",
        },
        {
          name: "Yield-Farming Tokens",
          description: "Earn rewards via liquidity (CAKE, FXS).",
          color: "glow-cyan",
          route: "/yield-farming",
        },
        {
          name: "Synthetic Asset Tokens",
          description: "Mirror real-world prices (SXP, SNX).",
          color: "glow-orange",
          route: "/synthetic-assets",
        },
        {
          name: "Oracle Tokens",
          description: "Deliver price and data feeds (LINK, BAND).",
          color: "glow-blue",
          route: "/oracles",
        },
        {
          name: "Gaming Tokens",
          description: "Power play-to-earn games (AXS, GALA).",
          color: "glow-gold",
          route: "/gaming",
        },
        {
          name: "Metaverse Tokens",
          description: "Virtual worlds & assets (MANA, SAND).",
          color: "glow-pink",
          route: "/metaverse",
        },
        {
          name: "NFT Ecosystem Tokens",
          description: "NFT markets & tools (APE, RARI).",
          color: "glow-teal",
          route: "/metaverse",
        },
        {
          name: "Meme Coins",
          description: "Hype-based community tokens (DOGE, SHIB, PEPE).",
          color: "glow-cyan",
          route: "/shitcoins",
        },
        {
          name: "Community / Social Tokens",
          description: "Represent online groups or influencers.",
          color: "glow-orange",
          route: "/social-tokens",
        },
        {
          name: "Fan Tokens",
          description: "Represent sports or entertainment fandoms (CHZ, PSG).",
          color: "glow-blue",
        },
        {
          name: "DAO Tokens",
          description: "Enable decentralized governance (UNI, MKR).",
          color: "glow-gold",
          route: "/dao-tokens",
        },
        {
          name: "Cross-Chain Bridge Tokens",
          description: "Move assets between chains (MULTI, ANY).",
          color: "glow-pink",
          route: "/interoperability",
        },
        {
          name: "Infrastructure / Data Tokens",
          description: "Power AI, cloud, and analytics (RNDR, FIL, OCEAN).",
          color: "glow-teal",
          route: "/utility-tokens",
        },
        {
          name: "Proof of Stake",
          description: "Validators lock up tokens to secure the network.",
          color: "glow-cyan",
          className: "font-cinzel",
          route: "/proof-of-stake",
        },
        {
          name: "Proof of Work",
          description:
            "Miners use computational power to solve puzzles and secure the network.",
          color: "glow-pink",
          className: "font-cinzel",
          route: "/proof-of-work",
        },
        {
          name: "FREE MINERS",
          description: "Information on free mining opportunities.",
          color: "glow-teal",
          className: "font-cinzel",
          route: "/free-miners",
        },
        {
          name: "Shitcoins",
          description: "Highly speculative and volatile tokens.",
          color: "glow-orange",
          route: "/shitcoins",
        },
        {
          name: "Coin Validator",
          description: "Verify on-chain data and metadata.",
          color: "glow-multi-color",
          route: "/coin-validator",
        },
        {
          name: "Crypto Features",
          description: "Advanced crypto analysis tools.",
          color: "glow-gold-blue",
          route: "/crypto-features",
        },
        {
          name: "CANDL",
          description: "Bright orange and pink fluid card.",
          color: "glow-orange-pink",
          route: "#",
          className: "text-black",
        },
      ],
      l = [
        { id: "chainlink", symbol: "LINK", name: "Chainlink" },
        { id: "the-graph", symbol: "GRT", name: "The Graph" },
        { id: "render-token", symbol: "RNDR", name: "Render Token" },
        { id: "bittensor", symbol: "TAO", name: "Bittensor" },
        { id: "kaspa", symbol: "KAS", name: "Kaspa" },
        { id: "hamster", symbol: "HAM", name: "Hamster" },
        { id: "pepe", symbol: "PEPE", name: "Pepe" },
      ],
      c = (e) =>
        null == e
          ? "N/A"
          : new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(e),
      d = (e) =>
        null == e
          ? "N/A"
          : new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "long",
            }).format(e);
    function u() {
      let e = (0, a.useRouter)(),
        [u, m] = (0, n.useState)(null),
        [p, f] = (0, n.useState)(!0);
      return (
        (0, n.useEffect)(() => {
          (async () => {
            try {
              f(!0);
              let e = l[Math.floor(Date.now() / 1728e5) % l.length],
                t = await fetch("/api/coingecko/coins");
              if (!t.ok) throw Error("Failed to fetch token list from API.");
              let n = await t.json(),
                r = n.find((t) => t.id === e.id);
              if (r) m(r);
              else {
                let e = n.find((e) => "hamster" === e.id);
                m(e);
              }
            } catch (e) {
              (console.error("Failed to fetch featured token:", e), m(null));
            } finally {
              f(!1);
            }
          })();
        }, []),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.Header, {}),
            (0, t.jsx)("main", {
              className: "dashboard-grid",
              children: (0, t.jsxs)("section", {
                className: "center-content",
                children: [
                  (0, t.jsx)("h1", {
                    className: "text-3xl font-bold neon-text text-center",
                    children: "CRYPTO CLASSES",
                  }),
                  (0, t.jsxs)("div", {
                    className: "view-switcher",
                    children: [
                      (0, t.jsx)(r.default, {
                        href: "/simple-view",
                        className: "view-button neon-pink",
                        children: "SIMPLE VIEW",
                      }),
                      (0, t.jsx)(r.default, {
                        href: "/custom-view",
                        className: "view-button neon-orange",
                        children: "CUSTOM VIEW",
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8",
                    children: o.map((n, r) =>
                      (0, t.jsxs)(
                        "button",
                        {
                          className: `data-card ${n.color} ${n.className || "font-cinzel"} flex flex-col justify-start text-left`,
                          onClick: () =>
                            ((t) => {
                              if (t.route) e.push(t.route);
                              else {
                                let n = t.name.toLowerCase().replace(/ /g, "-");
                                e.push(`/charts/${n}`);
                              }
                            })(n),
                          children: [
                            (0, t.jsx)("h3", {
                              className: "card-title text-sm font-bold",
                              children: n.name,
                            }),
                            n.description &&
                              (0, t.jsx)("p", {
                                className: "text-xs text-gray-400 mt-2",
                                children: n.description,
                              }),
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                  (0, t.jsx)("div", {
                    className: "mt-12",
                    children: (0, t.jsxs)(i.Card, {
                      className: "info-table-card",
                      children: [
                        (0, t.jsx)(i.CardHeader, {
                          children: (0, t.jsx)(i.CardTitle, {
                            className: "text-2xl neon-text",
                            children: p
                              ? "Loading Featured Token..."
                              : `Featured Token: ${u?.name || "N/A"} (${u?.symbol?.toUpperCase() || "N/A"})`,
                          }),
                        }),
                        (0, t.jsx)(i.CardContent, {
                          children: p
                            ? (0, t.jsx)("div", {
                                className: "text-center text-gray-400",
                                children: "Fetching latest data...",
                              })
                            : u
                              ? (0, t.jsxs)("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-8",
                                  children: [
                                    (0, t.jsx)("div", {
                                      children: (0, t.jsx)("table", {
                                        className: "info-table w-full",
                                        children: (0, t.jsxs)("tbody", {
                                          children: [
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children: "Symbol",
                                                }),
                                                (0, t.jsx)("td", {
                                                  className: "text-gray-300",
                                                  children:
                                                    u.symbol.toUpperCase(),
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children: "Price",
                                                }),
                                                (0, t.jsx)("td", {
                                                  className:
                                                    "text-gray-300 font-numeric",
                                                  children: c(u.current_price),
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children: "Market Cap",
                                                }),
                                                (0, t.jsx)("td", {
                                                  className:
                                                    "text-gray-300 font-numeric",
                                                  children: c(u.market_cap),
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children: "Market Cap Rank",
                                                }),
                                                (0, t.jsxs)("td", {
                                                  className:
                                                    "text-gray-300 font-numeric",
                                                  children: [
                                                    "#",
                                                    u.market_cap_rank,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children:
                                                    "Circulating Supply",
                                                }),
                                                (0, t.jsx)("td", {
                                                  className:
                                                    "text-gray-300 font-numeric",
                                                  children: d(
                                                    u.circulating_supply,
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children: "Max Supply",
                                                }),
                                                (0, t.jsx)("td", {
                                                  className:
                                                    "text-gray-300 font-numeric",
                                                  children:
                                                    d(u.max_supply) || "N/A",
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children: "CoinGecko",
                                                }),
                                                (0, t.jsx)("td", {
                                                  children: (0, t.jsx)("a", {
                                                    href: `https://www.coingecko.com/en/coins/${u.id}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                      "text-cyan-400 hover:underline",
                                                    children:
                                                      "✅ View on CoinGecko",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("tr", {
                                              children: [
                                                (0, t.jsx)("td", {
                                                  className: "neon-cyan",
                                                  children: "CoinMarketCap",
                                                }),
                                                (0, t.jsx)("td", {
                                                  children: (0, t.jsx)("a", {
                                                    href: `https://coinmarketcap.com/currencies/${u.id}/`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                      "text-cyan-400 hover:underline",
                                                    children: "✅ View on CMC",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("h4", {
                                          className:
                                            "text-xl font-bold neon-pink mb-4",
                                          children: "🔍 Key Notes",
                                        }),
                                        (0, t.jsxs)("ul", {
                                          className:
                                            "list-disc list-inside space-y-2 text-gray-300",
                                          children: [
                                            (0, t.jsx)("li", {
                                              children:
                                                "This token is selected from a curated list and rotates every 48 hours.",
                                            }),
                                            (0, t.jsx)("li", {
                                              children:
                                                "Market data is live from the CoinGecko API.",
                                            }),
                                            (0, t.jsx)("li", {
                                              children:
                                                "Always do your own research (DYOR) before making any investment decisions.",
                                            }),
                                            (0, t.jsx)("li", {
                                              children:
                                                "This is not financial advice.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, t.jsx)("div", {
                                  className: "text-center text-red-400",
                                  children:
                                    "Could not load featured token data.",
                                }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    e.s(["default", () => u]);
  },
]);
