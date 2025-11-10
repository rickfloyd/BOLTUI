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
        return x;
      },
      PageNotFoundError: function () {
        return b;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return g;
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
      g =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class y extends Error {}
    class x extends Error {}
    class b extends Error {
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
        return b;
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
    function g(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function y(t) {
      var n;
      let r,
        a,
        i,
        [l, y] = (0, o.useOptimistic)(m.IDLE_LINK_STATUS),
        b = (0, o.useRef)(null),
        {
          href: v,
          as: j,
          children: N,
          prefetch: C = null,
          passHref: _,
          replace: P,
          shallow: S,
          scroll: O,
          onClick: w,
          onMouseEnter: E,
          onTouchStart: k,
          legacyBehavior: A = !1,
          onNavigate: R,
          ref: M,
          unstable_dynamicOnHover: T,
          ...I
        } = t;
      ((r = N),
        A &&
          ("string" == typeof r || "number" == typeof r) &&
          (r = (0, s.jsx)("a", { children: r })));
      let D = o.default.useContext(u.AppRouterContext),
        F = !1 !== C,
        L =
          !1 !== C
            ? null === (n = C) || "auto" === n
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: $, as: z } = o.default.useMemo(() => {
          let e = g(v);
          return { href: e, as: j ? g(j) : e };
        }, [v, j]);
      if (A) {
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
      let U = A ? a && "object" == typeof a && a.ref : M,
        B = o.default.useCallback(
          (e) => (
            null !== D &&
              (b.current = (0, m.mountLinkInstance)(e, $, D, L, F, y)),
            () => {
              (b.current &&
                ((0, m.unmountLinkForCurrentNavigation)(b.current),
                (b.current = null)),
                (0, m.unmountPrefetchableInstance)(e));
            }
          ),
          [F, $, D, L, y],
        ),
        G = {
          ref: (0, c.useMergedRef)(B, U),
          onClick(t) {
            (A || "function" != typeof w || w(t),
              A &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !D ||
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
                })(t, $, z, b, P, O, R));
          },
          onMouseEnter(e) {
            (A || "function" != typeof E || E(e),
              A &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              D && F && (0, m.onNavigationIntent)(e.currentTarget, !0 === T));
          },
          onTouchStart: function (e) {
            (A || "function" != typeof k || k(e),
              A &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              D && F && (0, m.onNavigationIntent)(e.currentTarget, !0 === T));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(z)
          ? (G.href = z)
          : (A && !_ && ("a" !== a.type || "href" in a.props)) ||
            (G.href = (0, f.addBasePath)(z)),
        (i = A
          ? o.default.cloneElement(a, G)
          : (0, s.jsx)("a", { ...I, ...G, children: r })),
        (0, s.jsx)(x.Provider, { value: l, children: i })
      );
    }
    e.r(84508);
    let x = (0, o.createContext)(m.IDLE_LINK_STATUS),
      b = () => (0, o.useContext)(x);
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
    function g() {
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
    e.s(["Header", () => g], 45872);
  },
  98879,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let r = e.r(71645),
      a = "undefined" == typeof window,
      i = a ? () => {} : r.useLayoutEffect,
      s = a ? () => {} : r.useEffect;
    function o(e) {
      let { headManager: t, reduceComponentsToState: n } = e;
      function o() {
        if (t && t.mountedInstances) {
          let e = r.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean),
          );
          t.updateHead(n(e));
        }
      }
      return (
        a && (t?.mountedInstances?.add(e.children), o()),
        i(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        i(
          () => (
            t && (t._pendingUpdate = o),
            () => {
              t && (t._pendingUpdate = o);
            }
          ),
        ),
        s(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  25633,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return h;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = e.r(55682),
      s = e.r(90809),
      o = e.r(43476),
      l = s._(e.r(71645)),
      u = i._(e.r(98879)),
      c = e.r(42732);
    function d() {
      return [
        (0, o.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, o.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport",
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                [],
              ),
            )
          : e.concat(t);
    }
    e.r(33525);
    let m = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, n, r, a;
      return e
        .reduce(f, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (n = new Set()),
          (r = new Set()),
          (a = {}),
          (e) => {
            let i = !0,
              s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              s = !0;
              let n = e.key.slice(e.key.indexOf("$") + 1);
              t.has(n) ? (i = !1) : t.add(n);
            }
            switch (e.type) {
              case "title":
              case "base":
                n.has(e.type) ? (i = !1) : n.add(e.type);
                break;
              case "meta":
                for (let t = 0, n = m.length; t < n; t++) {
                  let n = m[t];
                  if (e.props.hasOwnProperty(n))
                    if ("charSet" === n) r.has(n) ? (i = !1) : r.add(n);
                    else {
                      let t = e.props[n],
                        r = a[n] || new Set();
                      ("name" !== n || !s) && r.has(t)
                        ? (i = !1)
                        : (r.add(t), (a[n] = r));
                    }
                }
            }
            return i;
          }),
        )
        .reverse()
        .map((e, t) => {
          let n = e.key || t;
          return l.default.cloneElement(e, { key: n });
        });
    }
    let h = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, o.jsx)(u.default, {
        reduceComponentsToState: p,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  88143,
  (e, t, n) => {
    "use strict";
    function r({
      widthInt: e,
      heightInt: t,
      blurWidth: n,
      blurHeight: r,
      blurDataURL: a,
      objectFit: i,
    }) {
      let s = n ? 40 * n : e,
        o = r ? 40 * r : t,
        l = s && o ? `viewBox='0 0 ${s} ${o}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
  },
  87690,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      VALID_LOADERS: function () {
        return i;
      },
      imageConfigDefault: function () {
        return s;
      },
    };
    for (var a in r) Object.defineProperty(n, a, { enumerable: !0, get: r[a] });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
      s = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  8927,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "getImgProps", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      e.r(33525));
    let r = e.r(88143),
      a = e.r(87690),
      i = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function o(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function l(
      {
        src: e,
        sizes: t,
        unoptimized: n = !1,
        priority: l = !1,
        preload: u = !1,
        loading: c,
        className: d,
        quality: f,
        width: m,
        height: p,
        fill: h = !1,
        style: g,
        overrideSrc: y,
        onLoad: x,
        onLoadingComplete: b,
        placeholder: v = "empty",
        blurDataURL: j,
        fetchPriority: N,
        decoding: C = "async",
        layout: _,
        objectFit: P,
        objectPosition: S,
        lazyBoundary: O,
        lazyRoot: w,
        ...E
      },
      k,
    ) {
      var A;
      let R,
        M,
        T,
        { imgConf: I, showAltText: D, blurComplete: F, defaultLoader: L } = k,
        $ = I || a.imageConfigDefault;
      if ("allSizes" in $) R = $;
      else {
        let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t),
          t = $.deviceSizes.sort((e, t) => e - t),
          n = $.qualities?.sort((e, t) => e - t);
        R = { ...$, allSizes: e, deviceSizes: t, qualities: n };
      }
      if (void 0 === L)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 },
        );
      let z = E.loader || L;
      (delete E.loader, delete E.srcSet);
      let U = "__next_img_default" in z;
      if (U) {
        if ("custom" === R.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 },
          );
      } else {
        let e = z;
        z = (t) => {
          let { config: n, ...r } = t;
          return e(r);
        };
      }
      if (_) {
        "fill" === _ && (h = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[_];
        e && (g = { ...g, ...e });
        let n = { responsive: "100vw", fill: "100vw" }[_];
        n && !t && (t = n);
      }
      let B = "",
        G = o(m),
        V = o(p);
      if ((A = e) && "object" == typeof A && (s(A) || void 0 !== A.src)) {
        let t = s(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 },
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 },
          );
        if (
          ((M = t.blurWidth),
          (T = t.blurHeight),
          (j = j || t.blurDataURL),
          (B = t.src),
          !h)
        )
          if (G || V) {
            if (G && !V) {
              let e = G / t.width;
              V = Math.round(t.height * e);
            } else if (!G && V) {
              let e = V / t.height;
              G = Math.round(t.width * e);
            }
          } else ((G = t.width), (V = t.height));
      }
      let W = !l && !u && ("lazy" === c || void 0 === c);
      ((!(e = "string" == typeof e ? e : B) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((n = !0), (W = !1)),
        R.unoptimized && (n = !0),
        U &&
          !R.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (n = !0));
      let X = o(f),
        q = Object.assign(
          h
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: S,
              }
            : {},
          D ? {} : { color: "transparent" },
          g,
        ),
        K =
          F || "empty" === v
            ? null
            : "blur" === v
              ? `url("data:image/svg+xml;charset=utf-8,${(0, r.getImageBlurSvg)({ widthInt: G, heightInt: V, blurWidth: M, blurHeight: T, blurDataURL: j || "", objectFit: q.objectFit })}")`
              : `url("${v}")`,
        H = i.includes(q.objectFit)
          ? "fill" === q.objectFit
            ? "100% 100%"
            : "cover"
          : q.objectFit,
        Q = K
          ? {
              backgroundSize: H,
              backgroundPosition: q.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: K,
            }
          : {},
        J = (function ({
          config: e,
          src: t,
          unoptimized: n,
          width: r,
          quality: a,
          sizes: i,
          loader: s,
        }) {
          if (n) return { src: t, srcSet: void 0, sizes: void 0 };
          let { widths: o, kind: l } = (function (
              { deviceSizes: e, allSizes: t },
              n,
              r,
            ) {
              if (r) {
                let n = /(^|\s)(1?\d?\d)vw/g,
                  a = [];
                for (let e; (e = n.exec(r)); ) a.push(parseInt(e[2]));
                if (a.length) {
                  let n = 0.01 * Math.min(...a);
                  return { widths: t.filter((t) => t >= e[0] * n), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof n
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [n, 2 * n].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1],
                        ),
                      ),
                    ],
                    kind: "x",
                  };
            })(e, r, i),
            u = o.length - 1;
          return {
            sizes: i || "w" !== l ? i : "100vw",
            srcSet: o
              .map(
                (n, r) =>
                  `${s({ config: e, src: t, quality: a, width: n })} ${"w" === l ? n : r + 1}${l}`,
              )
              .join(", "),
            src: s({ config: e, src: t, quality: a, width: o[u] }),
          };
        })({
          config: R,
          src: e,
          unoptimized: n,
          width: G,
          quality: X,
          sizes: t,
          loader: z,
        }),
        Y = W ? "lazy" : c;
      return {
        props: {
          ...E,
          loading: Y,
          fetchPriority: N,
          width: G,
          height: V,
          decoding: C,
          className: d,
          style: { ...q, ...Q },
          sizes: J.sizes,
          srcSet: J.srcSet,
          src: y || J.src,
        },
        meta: { unoptimized: n, preload: u || l, placeholder: v, fill: h },
      };
    }
  },
  18556,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let r = e.r(55682)._(e.r(71645)),
      a = e.r(87690),
      i = r.default.createContext(a.imageConfigDefault);
  },
  65856,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "RouterContext", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  70965,
  (e, t, n) => {
    "use strict";
    function r(e, t) {
      let n = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - n) < Math.abs(e - n) ? t : e),
            0,
          )
        : n;
    }
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
  },
  1948,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let r = e.r(70965);
    function a({ config: e, src: t, width: n, quality: a }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 },
        );
      let i = (0, r.findClosestQuality)(a, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${i}${(t.startsWith("/_next/static/media/"), "")}`;
    }
    a.__next_img_default = !0;
    let i = a;
  },
  5500,
  (e, t, n) => {
    "use strict";
    (Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.defineProperty(n, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      }));
    let r = e.r(55682),
      a = e.r(90809),
      i = e.r(43476),
      s = a._(e.r(71645)),
      o = r._(e.r(74080)),
      l = r._(e.r(25633)),
      u = e.r(8927),
      c = e.r(87690),
      d = e.r(18556);
    e.r(33525);
    let f = e.r(65856),
      m = r._(e.r(1948)),
      p = e.r(18581),
      h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function g(e, t, n, r, a, i, s) {
      let o = e?.src;
      e &&
        e["data-loaded-src"] !== o &&
        ((e["data-loaded-src"] = o),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && a(!0), n?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let r = !1,
                  a = !1;
                n.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => r,
                  isPropagationStopped: () => a,
                  persist: () => {},
                  preventDefault: () => {
                    ((r = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((a = !0), t.stopPropagation());
                  },
                });
              }
              r?.current && r.current(e);
            }
          }));
    }
    function y(e) {
      return s.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let x = (0, s.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: n,
          height: r,
          width: a,
          decoding: o,
          className: l,
          style: u,
          fetchPriority: c,
          placeholder: d,
          loading: f,
          unoptimized: m,
          fill: h,
          onLoadRef: x,
          onLoadingCompleteRef: b,
          setBlurComplete: v,
          setShowAltText: j,
          sizesInput: N,
          onLoad: C,
          onError: _,
          ...P
        },
        S,
      ) => {
        let O = (0, s.useCallback)(
            (e) => {
              e && (_ && (e.src = e.src), e.complete && g(e, d, x, b, v, m, N));
            },
            [e, d, x, b, v, _, m, N],
          ),
          w = (0, p.useMergedRef)(S, O);
        return (0, i.jsx)("img", {
          ...P,
          ...y(c),
          loading: f,
          width: a,
          height: r,
          decoding: o,
          "data-nimg": h ? "fill" : "1",
          className: l,
          style: u,
          sizes: n,
          srcSet: t,
          src: e,
          ref: w,
          onLoad: (e) => {
            g(e.currentTarget, d, x, b, v, m, N);
          },
          onError: (e) => {
            (j(!0), "empty" !== d && v(!0), _ && _(e));
          },
        });
      },
    );
    function b({ isAppRouter: e, imgAttributes: t }) {
      let n = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...y(t.fetchPriority),
      };
      return e && o.default.preload
        ? (o.default.preload(t.src, n), null)
        : (0, i.jsx)(l.default, {
            children: (0, i.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...n },
              "__nimg-" + t.src + t.srcSet + t.sizes,
            ),
          });
    }
    let v = (0, s.forwardRef)((e, t) => {
      let n = (0, s.useContext)(f.RouterContext),
        r = (0, s.useContext)(d.ImageConfigContext),
        a = (0, s.useMemo)(() => {
          let e = h || r || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            n = e.deviceSizes.sort((e, t) => e - t),
            a = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: n,
            qualities: a,
            localPatterns:
              "undefined" == typeof window ? r?.localPatterns : e.localPatterns,
          };
        }, [r]),
        { onLoad: o, onLoadingComplete: l } = e,
        p = (0, s.useRef)(o);
      (0, s.useEffect)(() => {
        p.current = o;
      }, [o]);
      let g = (0, s.useRef)(l);
      (0, s.useEffect)(() => {
        g.current = l;
      }, [l]);
      let [y, v] = (0, s.useState)(!1),
        [j, N] = (0, s.useState)(!1),
        { props: C, meta: _ } = (0, u.getImgProps)(e, {
          defaultLoader: m.default,
          imgConf: a,
          blurComplete: y,
          showAltText: j,
        });
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(x, {
            ...C,
            unoptimized: _.unoptimized,
            placeholder: _.placeholder,
            fill: _.fill,
            onLoadRef: p,
            onLoadingCompleteRef: g,
            setBlurComplete: v,
            setShowAltText: N,
            sizesInput: e.sizes,
            ref: t,
          }),
          _.preload
            ? (0, i.jsx)(b, { isAppRouter: !n, imgAttributes: C })
            : null,
        ],
      });
    });
    ("function" == typeof n.default ||
      ("object" == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, "__esModule", { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
]);
