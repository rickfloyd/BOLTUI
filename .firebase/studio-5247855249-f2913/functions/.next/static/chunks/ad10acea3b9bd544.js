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
        return i;
      },
      urlQueryToSearchParams: function () {
        return o;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    function i(e) {
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
    function s(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function o(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, s(e));
        else t.set(r, s(n));
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
        return o;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(90809)._(e.r(98183)),
      s = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        a = e.pathname || "",
        o = e.hash || "",
        l = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
            ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (c += ":" + e.port)),
        l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l))));
      let u = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || s.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a))
          : c || (c = ""),
        o && "#" !== o[0] && (o = "#" + o),
        u && "?" !== u[0] && (u = "?" + u),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (u = u.replace("#", "%23")),
        `${n}${c}${a}${u}${o}`
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
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(71645);
    function a(e, t) {
      let r = (0, n.useRef)(null),
        a = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else (e && (r.current = i(e, n)), t && (a.current = i(t, n)));
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
        return j;
      },
      MissingStaticPage: function () {
        return y;
      },
      NormalizeError: function () {
        return g;
      },
      PageNotFoundError: function () {
        return v;
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
        return c;
      },
      getURL: function () {
        return u;
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
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => o.test(e);
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function u() {
      let { href: e } = window.location,
        t = c();
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
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await p(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let h = "undefined" != typeof performance,
      x =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class b extends Error {}
    class g extends Error {}
    class v extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class y extends Error {
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
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(18967),
      a = e.r(52817);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, a.hasBasePath)(r.pathname);
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
        return v;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(90809),
      s = e.r(43476),
      o = i._(e.r(71645)),
      l = e.r(95057),
      c = e.r(8372),
      u = e.r(18581),
      d = e.r(18967),
      f = e.r(5550);
    e.r(33525);
    let m = e.r(91949),
      p = e.r(73668),
      h = e.r(65165);
    function x(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function b(t) {
      var r;
      let n,
        a,
        i,
        [l, b] = (0, o.useOptimistic)(m.IDLE_LINK_STATUS),
        v = (0, o.useRef)(null),
        {
          href: y,
          as: j,
          children: N,
          prefetch: k = null,
          passHref: S,
          replace: w,
          shallow: C,
          scroll: P,
          onClick: A,
          onMouseEnter: E,
          onTouchStart: O,
          legacyBehavior: T = !1,
          onNavigate: R,
          ref: _,
          unstable_dynamicOnHover: I,
          ...M
        } = t;
      ((n = N),
        T &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, s.jsx)("a", { children: n })));
      let D = o.default.useContext(c.AppRouterContext),
        L = !1 !== k,
        F =
          !1 !== k
            ? null === (r = k) || "auto" === r
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: B, as: U } = o.default.useMemo(() => {
          let e = x(y);
          return { href: e, as: j ? x(j) : e };
        }, [y, j]);
      if (T) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        a = o.default.Children.only(n);
      }
      let V = T ? a && "object" == typeof a && a.ref : _,
        $ = o.default.useCallback(
          (e) => (
            null !== D &&
              (v.current = (0, m.mountLinkInstance)(e, B, D, F, L, b)),
            () => {
              (v.current &&
                ((0, m.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, m.unmountPrefetchableInstance)(e));
            }
          ),
          [L, B, D, F, b],
        ),
        z = {
          ref: (0, u.useMergedRef)($, V),
          onClick(t) {
            (T || "function" != typeof A || A(t),
              T &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !D ||
                t.defaultPrevented ||
                (function (t, r, n, a, i, s, l) {
                  if ("undefined" != typeof window) {
                    let c,
                      { nodeName: u } = t.currentTarget;
                    if (
                      ("A" === u.toUpperCase() &&
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
                    if (!(0, p.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
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
                      d(n || r, i ? "replace" : "push", s ?? !0, a.current);
                    });
                  }
                })(t, B, U, v, w, P, R));
          },
          onMouseEnter(e) {
            (T || "function" != typeof E || E(e),
              T &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              D && L && (0, m.onNavigationIntent)(e.currentTarget, !0 === I));
          },
          onTouchStart: function (e) {
            (T || "function" != typeof O || O(e),
              T &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              D && L && (0, m.onNavigationIntent)(e.currentTarget, !0 === I));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(U)
          ? (z.href = U)
          : (T && !S && ("a" !== a.type || "href" in a.props)) ||
            (z.href = (0, f.addBasePath)(U)),
        (i = T
          ? o.default.cloneElement(a, z)
          : (0, s.jsx)("a", { ...M, ...z, children: n })),
        (0, s.jsx)(g.Provider, { value: l, children: i })
      );
    }
    e.r(84508);
    let g = (0, o.createContext)(m.IDLE_LINK_STATUS),
      v = () => (0, o.useContext)(g);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  45872,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(22016),
      n = e.i(71645);
    function a({ title: e, items: a, titleClassName: i }) {
      let [s, o] = (0, n.useState)(!1);
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
              children: a.map((e, n) =>
                e.isSeparator
                  ? (0, t.jsx)("div", { className: "dropdown-separator" }, n)
                  : "header" === e.type
                    ? (0, t.jsx)(
                        "div",
                        { className: "dropdown-header", children: e.name },
                        n,
                      )
                    : "link" === e.type
                      ? (0, t.jsxs)(
                          r.default,
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
                          n,
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
                          n,
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
      u = [
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
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(a, {
                    title: "Community",
                    items: o,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsxs)(r.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, t.jsx)("br", {}), "Prices"],
                  }),
                  (0, t.jsx)(r.default, {
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
                (0, t.jsx)(r.default, {
                  href: "/",
                  className: "nav-item neon-green",
                  children: "Home",
                }),
                (0, t.jsx)(r.default, {
                  href: "#",
                  className: "nav-item neon-orange",
                  children: "Stocks",
                }),
                (0, t.jsx)(r.default, {
                  href: "/main",
                  className: "nav-item neon-cyan",
                  children: "Crypto",
                }),
                (0, t.jsx)(r.default, {
                  href: "#",
                  className: "nav-item neon-blue",
                  children: "FUTURES AND COMMODITIES",
                }),
                (0, t.jsx)(r.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Options",
                }),
                (0, t.jsx)(r.default, {
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
                  items: u,
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
                (0, t.jsx)(r.default, {
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
                (0, t.jsx)(r.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Over-the-Counter (OTC)",
                }),
                (0, t.jsx)(r.default, {
                  href: "#",
                  className: "nav-item neon-gold",
                  children: "INDEX PROVIDERS",
                }),
                (0, t.jsx)(r.default, {
                  href: "#",
                  className: "nav-item neon-red",
                  children: "Mutual Funds and ETFs Data",
                }),
                (0, t.jsx)(r.default, {
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
      let [e, p] = (0, n.useState)(!1);
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
                  (0, t.jsx)(r.default, {
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
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-orange",
                    children: "Stocks",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/main",
                    className: "nav-item neon-cyan",
                    children: "Crypto",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "FUTURES AND COMMODITIES",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Options",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "BOND AND FIXED INCOME",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)(a, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                    }),
                    items: u,
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
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "GLOBAL ECONOMIC AND MACRO DATA SOURCES",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Over-the-Counter (OTC)",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-gold",
                    children: "INDEX PROVIDERS",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-red",
                    children: "Mutual Funds and ETFs Data",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "ALTERNATIVE DATA MARKETS",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsxs)(r.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, t.jsx)("br", {}), "Prices"],
                  }),
                  (0, t.jsx)(r.default, {
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
        let [e, t] = n.useState(void 0);
        return (
          n.useEffect(() => {
            let e = window.matchMedia("(max-width: 767px)"),
              r = () => {
                t(window.innerWidth < 768);
              };
            return (
              e.addEventListener("change", r),
              t(window.innerWidth < 768),
              () => e.removeEventListener("change", r)
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
  93479,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(75157);
    let a = r.forwardRef(({ className: e, type: r, ...a }, i) =>
      (0, t.jsx)("input", {
        type: r,
        className: (0, n.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: i,
        ...a,
      }),
    );
    ((a.displayName = "Input"), e.s(["Input", () => a]));
  },
  19455,
  (e) => {
    "use strict";
    let t, r, n;
    var a = e.i(43476),
      i = e.i(71645);
    function s(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    var o =
        (((n = i.forwardRef((e, t) => {
          let { children: r, ...n } = e;
          if (i.isValidElement(r)) {
            var a;
            let e,
              o,
              l =
                ((a = r),
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
              c = (function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let a = e[n],
                    i = t[n];
                  /^on[A-Z]/.test(n)
                    ? a && i
                      ? (r[n] = (...e) => {
                          let t = i(...e);
                          return (a(...e), t);
                        })
                      : a && (r[n] = a)
                    : "style" === n
                      ? (r[n] = { ...a, ...i })
                      : "className" === n &&
                        (r[n] = [a, i].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props);
            return (
              r.type !== i.Fragment &&
                (c.ref = t
                  ? (function (...e) {
                      return (t) => {
                        let r = !1,
                          n = e.map((e) => {
                            let n = s(e, t);
                            return (r || "function" != typeof n || (r = !0), n);
                          });
                        if (r)
                          return () => {
                            for (let t = 0; t < n.length; t++) {
                              let r = n[t];
                              "function" == typeof r ? r() : s(e[t], null);
                            }
                          };
                      };
                    })(t, l)
                  : l),
              i.cloneElement(r, c)
            );
          }
          return i.Children.count(r) > 1 ? i.Children.only(null) : null;
        })).displayName = "Slot.SlotClone"),
        (t = n),
        ((r = i.forwardRef((e, r) => {
          let { children: n, ...s } = e,
            o = i.Children.toArray(n),
            l = o.find(c);
          if (l) {
            let e = l.props.children,
              n = o.map((t) =>
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
              ref: r,
              children: i.isValidElement(e)
                ? i.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, a.jsx)(t, { ...s, ref: r, children: n });
        })).displayName = "Slot.Slot"),
        r),
      l = Symbol("radix.slottable");
    function c(e) {
      return (
        i.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === l
      );
    }
    var u = e.i(25913),
      d = e.i(75157);
    let f = (0, u.cva)(
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
        ({ className: e, variant: t, size: r, asChild: n = !1, ...i }, s) =>
          (0, a.jsx)(n ? o : "button", {
            className: (0, d.cn)(f({ variant: t, size: r, className: e })),
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
      r = e.i(34620);
    function n(e) {
      let [n, a] = t.useState(void 0);
      return (
        (0, r.useLayoutEffect)(() => {
          if (e) {
            a({ width: e.offsetWidth, height: e.offsetHeight });
            let t = new ResizeObserver((t) => {
              let r, n;
              if (!Array.isArray(t) || !t.length) return;
              let i = t[0];
              if ("borderBoxSize" in i) {
                let e = i.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                ((r = t.inlineSize), (n = t.blockSize));
              } else ((r = e.offsetWidth), (n = e.offsetHeight));
              a({ width: r, height: n });
            });
            return (t.observe(e, { box: "border-box" }), () => t.unobserve(e));
          }
          a(void 0);
        }, [e]),
        n
      );
    }
    e.s(["useSize", () => n]);
  },
  99682,
  (e) => {
    "use strict";
    var t = e.i(71645);
    function r(e) {
      let r = t.useRef({ value: e, previous: e });
      return t.useMemo(
        () => (
          r.current.value !== e &&
            ((r.current.previous = r.current.value), (r.current.value = e)),
          r.current.previous
        ),
        [e],
      );
    }
    e.s(["usePrevious", () => r]);
  },
  10204,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(48425),
      a = r.forwardRef((e, r) =>
        (0, t.jsx)(n.Primitive.label, {
          ...e,
          ref: r,
          onMouseDown: (t) => {
            t.target.closest("button, input, select, textarea") ||
              (e.onMouseDown?.(t),
              !t.defaultPrevented && t.detail > 1 && t.preventDefault());
          },
        }),
      );
    a.displayName = "Label";
    var i = e.i(25913),
      s = e.i(75157);
    let o = (0, i.cva)(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      ),
      l = r.forwardRef(({ className: e, ...r }, n) =>
        (0, t.jsx)(a, { ref: n, className: (0, s.cn)(o(), e), ...r }),
      );
    ((l.displayName = a.displayName), e.s(["Label", () => l], 10204));
  },
  62199,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      n = e.i(45872),
      a = e.i(19455),
      i = e.i(81140),
      s = e.i(20783),
      o = e.i(30030),
      l = e.i(69340),
      c = e.i(99682),
      u = e.i(35804),
      d = e.i(48425),
      f = "Switch",
      [m, p] = (0, o.createContextScope)(f),
      [h, x] = m(f),
      b = r.forwardRef((e, n) => {
        let {
            __scopeSwitch: a,
            name: o,
            checked: c,
            defaultChecked: u,
            required: f,
            disabled: m,
            value: p = "on",
            onCheckedChange: x,
            form: b,
            ...g
          } = e,
          [v, N] = r.useState(null),
          k = (0, s.useComposedRefs)(n, (e) => N(e)),
          S = r.useRef(!1),
          w = !v || b || !!v.closest("form"),
          [C = !1, P] = (0, l.useControllableState)({
            prop: c,
            defaultProp: u,
            onChange: x,
          });
        return (0, t.jsxs)(h, {
          scope: a,
          checked: C,
          disabled: m,
          children: [
            (0, t.jsx)(d.Primitive.button, {
              type: "button",
              role: "switch",
              "aria-checked": C,
              "aria-required": f,
              "data-state": j(C),
              "data-disabled": m ? "" : void 0,
              disabled: m,
              value: p,
              ...g,
              ref: k,
              onClick: (0, i.composeEventHandlers)(e.onClick, (e) => {
                (P((e) => !e),
                  w &&
                    ((S.current = e.isPropagationStopped()),
                    S.current || e.stopPropagation()));
              }),
            }),
            w &&
              (0, t.jsx)(y, {
                control: v,
                bubbles: !S.current,
                name: o,
                value: p,
                checked: C,
                required: f,
                disabled: m,
                form: b,
                style: { transform: "translateX(-100%)" },
              }),
          ],
        });
      });
    b.displayName = f;
    var g = "SwitchThumb",
      v = r.forwardRef((e, r) => {
        let { __scopeSwitch: n, ...a } = e,
          i = x(g, n);
        return (0, t.jsx)(d.Primitive.span, {
          "data-state": j(i.checked),
          "data-disabled": i.disabled ? "" : void 0,
          ...a,
          ref: r,
        });
      });
    v.displayName = g;
    var y = (e) => {
      let { control: n, checked: a, bubbles: i = !0, ...s } = e,
        o = r.useRef(null),
        l = (0, c.usePrevious)(a),
        d = (0, u.useSize)(n);
      return (
        r.useEffect(() => {
          let e = o.current,
            t = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "checked",
            ).set;
          if (l !== a && t) {
            let r = new Event("click", { bubbles: i });
            (t.call(e, a), e.dispatchEvent(r));
          }
        }, [l, a, i]),
        (0, t.jsx)("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: a,
          ...s,
          tabIndex: -1,
          ref: o,
          style: {
            ...e.style,
            ...d,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    };
    function j(e) {
      return e ? "checked" : "unchecked";
    }
    var N = e.i(75157);
    let k = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(b, {
        className: (0, N.cn)(
          "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          e,
        ),
        ...r,
        ref: n,
        children: (0, t.jsx)(v, {
          className: (0, N.cn)(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          ),
        }),
      }),
    );
    k.displayName = b.displayName;
    var S = e.i(10204),
      w = e.i(93479);
    function C() {
      let [e, i] = (0, r.useState)("Connection status will appear here."),
        [s, o] = (0, r.useState)(!1),
        [l, c] = (0, r.useState)(!1),
        u = (0, r.useRef)(null);
      async function d() {
        try {
          i("🔍 Scanning for nearby Bluetooth devices...");
          let e = await navigator.bluetooth.requestDevice({
            acceptAllDevices: !0,
            optionalServices: [
              "battery_service",
              "device_information",
              "generic_access",
            ],
          });
          o(!0);
          let t = `✅ Connected to: <b>${e.name || "Unknown Device"}</b><br />ID: ${e.id}`;
          if (
            (i(t),
            l &&
              (localStorage.setItem("trustedDeviceId", e.id),
              (t += `<br />💾 This device is now trusted for auto-pairing.`),
              i(t)),
            (t +=
              '<br /><span style="color:#ff007f;">Attempting to access device info...</span>'),
            i(t),
            !e.gatt)
          )
            return void i("GATT server not found on this device.");
          let r = await e.gatt.connect();
          try {
            let e = await r.getPrimaryService("battery_service"),
              n = await e.getCharacteristic("battery_level"),
              a = (await n.readValue()).getUint8(0);
            ((t += `<br />🔋 Battery: <span class="font-numeric">${a}%</span>`),
              i(t));
          } catch {
            ((t += "<br />🔋 Battery info not available."), i(t));
          }
          try {
            let e = await r.getPrimaryService("device_information"),
              n = await e.getCharacteristic("manufacturer_name_string"),
              a = await n.readValue(),
              s = new TextDecoder().decode(a);
            ((t += `<br />🏭 Manufacturer: ${s}`), i(t));
          } catch {
            ((t += "<br />ℹ️ Device info unavailable."), i(t));
          }
        } catch (e) {
          (console.error(e), o(!1), i(`❌ Error: ${e.message}`));
        }
      }
      return (
        (0, r.useEffect)(() => {
          ((u.current = new Audio(
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          )),
            (u.current.volume = 0.5));
          let e = localStorage.getItem("trustedDeviceId");
          return (
            "true" === localStorage.getItem("autoPairEnabled") &&
              (c(!0), e && console.log("Auto-pair is enabled for device:", e)),
            () => {
              u.current?.pause();
            }
          );
        }, []),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.Header, {}),
            (0, t.jsx)("main", {
              className: "container mx-auto px-4 py-12 text-center",
              children: (0, t.jsxs)("div", {
                className:
                  "relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-cyan-400/40 max-w-4xl mx-auto",
                children: [
                  (0, t.jsx)("h1", {
                    className:
                      "text-4xl md:text-5xl font-extrabold mt-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]",
                    children: "🔊 Bluetooth Audio Connector",
                  }),
                  (0, t.jsx)("p", {
                    className: "mt-4 text-lg text-gray-300 max-w-3xl mx-auto",
                    children:
                      "Connect to a device, then use the playback controls. Enable auto-pair to remember a trusted device.",
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "mt-8 flex flex-col sm:flex-row items-center justify-center gap-6",
                    children: [
                      (0, t.jsx)(a.Button, {
                        onClick: d,
                        className:
                          "px-8 py-6 text-lg rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(255,0,255,0.5)]",
                        children: "🔗 Connect Bluetooth",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          (0, t.jsx)(k, {
                            id: "autoPairToggle",
                            checked: l,
                            onCheckedChange: (e) => {
                              (c(e),
                                localStorage.setItem(
                                  "autoPairEnabled",
                                  String(e),
                                ),
                                e
                                  ? i(
                                      "Auto-pairing enabled. Connect to a device to set it as trusted.",
                                    )
                                  : (localStorage.removeItem("trustedDeviceId"),
                                    i(
                                      "Auto-pairing disabled and trusted device cleared.",
                                    )));
                            },
                          }),
                          (0, t.jsx)(S.Label, {
                            htmlFor: "autoPairToggle",
                            className: "text-cyan-400",
                            children: "Auto-Pair Trusted Device",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "mt-10 p-6 rounded-lg bg-black/50 border border-pink-400/50 text-left text-lg text-cyan-400 min-h-[100px]",
                    dangerouslySetInnerHTML: { __html: e },
                  }),
                  s &&
                    (0, t.jsxs)("div", {
                      className:
                        "mt-8 p-6 rounded-lg bg-black/50 border border-cyan-400/50",
                      children: [
                        (0, t.jsx)("h3", {
                          className: "text-2xl font-bold text-cyan-300 mb-4",
                          children: "Playback Controls",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row items-center justify-center gap-4",
                          children: [
                            (0, t.jsx)(a.Button, {
                              onClick: () => {
                                u.current &&
                                  (u.current.paused
                                    ? u.current.play()
                                    : u.current.pause());
                              },
                              children: "▶️ Play / Pause",
                            }),
                            (0, t.jsx)(a.Button, {
                              onClick: () => {
                                u.current &&
                                  ((u.current.src =
                                    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"),
                                  u.current.play());
                              },
                              children: "⏭ Next",
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, t.jsx)(S.Label, {
                                  htmlFor: "volume",
                                  children: "Volume:",
                                }),
                                (0, t.jsx)(w.Input, {
                                  id: "volume",
                                  type: "range",
                                  min: "0",
                                  max: "1",
                                  step: "0.05",
                                  defaultValue: "0.5",
                                  onChange: (e) => {
                                    u.current &&
                                      (u.current.volume = parseFloat(
                                        e.target.value,
                                      ));
                                  },
                                  className: "w-48",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
          ],
        })
      );
    }
    e.s(["default", () => C], 62199);
  },
]);
