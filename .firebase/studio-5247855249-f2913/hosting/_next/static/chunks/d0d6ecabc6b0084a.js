(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var n = e.i(43476),
      t = e.i(71645),
      r = e.i(75157);
    let i = t.forwardRef(({ className: e, type: t, ...i }, a) =>
      (0, n.jsx)("input", {
        type: t,
        className: (0, r.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: a,
        ...i,
      }),
    );
    ((i.displayName = "Input"), e.s(["Input", () => i]));
  },
  33525,
  (e, n, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "warnOnce", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = (e) => {};
  },
  98183,
  (e, n, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return a;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var i in r) Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
    function a(e) {
      let n = {};
      for (let [t, r] of e.entries()) {
        let e = n[t];
        void 0 === e
          ? (n[t] = r)
          : Array.isArray(e)
            ? e.push(r)
            : (n[t] = [e, r]);
      }
      return n;
    }
    function o(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function s(e) {
      let n = new URLSearchParams();
      for (let [t, r] of Object.entries(e))
        if (Array.isArray(r)) for (let e of r) n.append(t, o(e));
        else n.set(t, o(r));
      return n;
    }
    function l(e, ...n) {
      for (let t of n) {
        for (let n of t.keys()) e.delete(n);
        for (let [n, r] of t.entries()) e.append(n, r);
      }
      return e;
    }
  },
  95057,
  (e, n, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return m;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var i in r) Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
    let a = e.r(90809)._(e.r(98183)),
      o = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: n, hostname: t } = e,
        r = e.protocol || "",
        i = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        m = !1;
      ((n = n ? encodeURIComponent(n).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (m = n + e.host)
          : t &&
            ((m = n + (~t.indexOf(":") ? `[${t}]` : t)),
            e.port && (m += ":" + e.port)),
        l && "object" == typeof l && (l = String(a.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || "";
      return (
        r && !r.endsWith(":") && (r += ":"),
        e.slashes || ((!r || o.test(r)) && !1 !== m)
          ? ((m = "//" + (m || "")), i && "/" !== i[0] && (i = "/" + i))
          : m || (m = ""),
        s && "#" !== s[0] && (s = "#" + s),
        c && "?" !== c[0] && (c = "?" + c),
        (i = i.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${r}${m}${i}${c}${s}`
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
      return s(e);
    }
  },
  18581,
  (e, n, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let r = e.r(71645);
    function i(e, n) {
      let t = (0, r.useRef)(null),
        i = (0, r.useRef)(null);
      return (0, r.useCallback)(
        (r) => {
          if (null === r) {
            let e = t.current;
            e && ((t.current = null), e());
            let n = i.current;
            n && ((i.current = null), n());
          } else (e && (t.current = a(e, r)), n && (i.current = a(n, r)));
        },
        [e, n],
      );
    }
    function a(e, n) {
      if ("function" != typeof e)
        return (
          (e.current = n),
          () => {
            e.current = null;
          }
        );
      {
        let t = e(n);
        return "function" == typeof t ? t : () => e(null);
      }
    }
    ("function" == typeof t.default ||
      ("object" == typeof t.default && null !== t.default)) &&
      void 0 === t.default.__esModule &&
      (Object.defineProperty(t.default, "__esModule", { value: !0 }),
      Object.assign(t.default, t),
      (n.exports = t.default));
  },
  18967,
  (e, n, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = {
      DecodeError: function () {
        return h;
      },
      MiddlewareNotFoundError: function () {
        return b;
      },
      MissingStaticPage: function () {
        return T;
      },
      NormalizeError: function () {
        return v;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return f;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return a;
      },
      execOnce: function () {
        return o;
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
        return p;
      },
      loadGetInitialProps: function () {
        return E;
      },
      normalizeRepeatedSlashes: function () {
        return u;
      },
      stringifyError: function () {
        return _;
      },
    };
    for (var i in r) Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function o(e) {
      let n,
        t = !1;
      return (...r) => (t || ((t = !0), (n = e(...r))), n);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => s.test(e);
    function m() {
      let { protocol: e, hostname: n, port: t } = window.location;
      return `${e}//${n}${t ? ":" + t : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        n = m();
      return e.substring(n.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function p(e) {
      return e.finished || e.headersSent;
    }
    function u(e) {
      let n = e.split("?");
      return (
        n[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (n[1] ? `?${n.slice(1).join("?")}` : "")
      );
    }
    async function E(e, n) {
      let t = n.res || (n.ctx && n.ctx.res);
      if (!e.getInitialProps)
        return n.ctx && n.Component
          ? { pageProps: await E(n.Component, n.ctx) }
          : {};
      let r = await e.getInitialProps(n);
      if (t && p(t)) return r;
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
    let f = "undefined" != typeof performance,
      y =
        f &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class h extends Error {}
    class v extends Error {}
    class x extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class T extends Error {
      constructor(e, n) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${n}`));
      }
    }
    class b extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, n, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let r = e.r(18967),
      i = e.r(52817);
    function a(e) {
      if (!(0, r.isAbsoluteUrl)(e)) return !0;
      try {
        let n = (0, r.getLocationOrigin)(),
          t = new URL(e, n);
        return t.origin === n && (0, i.hasBasePath)(t.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, n, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "errorOnce", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = (e) => {};
  },
  22016,
  (e, n, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return h;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var i in r) Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
    let a = e.r(90809),
      o = e.r(43476),
      s = a._(e.r(71645)),
      l = e.r(95057),
      m = e.r(8372),
      c = e.r(18581),
      d = e.r(18967),
      p = e.r(5550);
    e.r(33525);
    let u = e.r(91949),
      E = e.r(73668),
      f = e.r(65165);
    function y(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function h(n) {
      var t;
      let r,
        i,
        a,
        [l, h] = (0, s.useOptimistic)(u.IDLE_LINK_STATUS),
        x = (0, s.useRef)(null),
        {
          href: T,
          as: b,
          children: _,
          prefetch: I = null,
          passHref: g,
          replace: C,
          shallow: A,
          scroll: N,
          onClick: S,
          onMouseEnter: X,
          onTouchStart: B,
          legacyBehavior: P = !1,
          onNavigate: j,
          ref: k,
          unstable_dynamicOnHover: K,
          ...O
        } = n;
      ((r = _),
        P &&
          ("string" == typeof r || "number" == typeof r) &&
          (r = (0, o.jsx)("a", { children: r })));
      let R = s.default.useContext(m.AppRouterContext),
        H = !1 !== I,
        M =
          !1 !== I
            ? null === (t = I) || "auto" === t
              ? f.FetchStrategy.PPR
              : f.FetchStrategy.Full
            : f.FetchStrategy.PPR,
        { href: w, as: L } = s.default.useMemo(() => {
          let e = y(T);
          return { href: e, as: b ? y(b) : e };
        }, [T, b]);
      if (P) {
        if (r?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        i = s.default.Children.only(r);
      }
      let F = P ? i && "object" == typeof i && i.ref : k,
        D = s.default.useCallback(
          (e) => (
            null !== R &&
              (x.current = (0, u.mountLinkInstance)(e, w, R, M, H, h)),
            () => {
              (x.current &&
                ((0, u.unmountLinkForCurrentNavigation)(x.current),
                (x.current = null)),
                (0, u.unmountPrefetchableInstance)(e));
            }
          ),
          [H, w, R, M, h],
        ),
        G = {
          ref: (0, c.useMergedRef)(D, F),
          onClick(n) {
            (P || "function" != typeof S || S(n),
              P &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(n),
              !R ||
                n.defaultPrevented ||
                (function (n, t, r, i, a, o, l) {
                  if ("undefined" != typeof window) {
                    let m,
                      { nodeName: c } = n.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((m = n.currentTarget.getAttribute("target")) &&
                          "_self" !== m) ||
                          n.metaKey ||
                          n.ctrlKey ||
                          n.shiftKey ||
                          n.altKey ||
                          (n.nativeEvent && 2 === n.nativeEvent.which))) ||
                      n.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, E.isLocalURL)(t)) {
                      a && (n.preventDefault(), location.replace(t));
                      return;
                    }
                    if ((n.preventDefault(), l)) {
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
                    s.default.startTransition(() => {
                      d(r || t, a ? "replace" : "push", o ?? !0, i.current);
                    });
                  }
                })(n, w, L, x, C, N, j));
          },
          onMouseEnter(e) {
            (P || "function" != typeof X || X(e),
              P &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              R && H && (0, u.onNavigationIntent)(e.currentTarget, !0 === K));
          },
          onTouchStart: function (e) {
            (P || "function" != typeof B || B(e),
              P &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              R && H && (0, u.onNavigationIntent)(e.currentTarget, !0 === K));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(L)
          ? (G.href = L)
          : (P && !g && ("a" !== i.type || "href" in i.props)) ||
            (G.href = (0, p.addBasePath)(L)),
        (a = P
          ? s.default.cloneElement(i, G)
          : (0, o.jsx)("a", { ...O, ...G, children: r })),
        (0, o.jsx)(v.Provider, { value: l, children: a })
      );
    }
    e.r(84508);
    let v = (0, s.createContext)(u.IDLE_LINK_STATUS),
      x = () => (0, s.useContext)(v);
    ("function" == typeof t.default ||
      ("object" == typeof t.default && null !== t.default)) &&
      void 0 === t.default.__esModule &&
      (Object.defineProperty(t.default, "__esModule", { value: !0 }),
      Object.assign(t.default, t),
      (n.exports = t.default));
  },
  45872,
  (e) => {
    "use strict";
    var n = e.i(43476),
      t = e.i(22016),
      r = e.i(71645);
    function i({ title: e, items: i, titleClassName: a }) {
      let [o, s] = (0, r.useState)(!1);
      return (0, n.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
          (0, n.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${a || "neon-cyan"}`,
            children: e,
          }),
          o &&
            (0, n.jsx)("div", {
              className: "header-dropdown-menu",
              children: i.map((e, r) =>
                e.isSeparator
                  ? (0, n.jsx)("div", { className: "dropdown-separator" }, r)
                  : "header" === e.type
                    ? (0, n.jsx)(
                        "div",
                        { className: "dropdown-header", children: e.name },
                        r,
                      )
                    : "link" === e.type
                      ? (0, n.jsxs)(
                          t.default,
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
                                (0, n.jsx)("span", {
                                  className: "sub-text",
                                  children: e.subtext,
                                }),
                            ],
                          },
                          r,
                        )
                      : (0, n.jsxs)(
                          "div",
                          {
                            className: `menu-item ${e.active ? "active-pink" : ""}`,
                            children: [
                              e.name,
                              e.subtext &&
                                (0, n.jsx)("span", {
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
    let a = (0, e.i(75254).default)("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]);
    var o = e.i(37727);
    let s = [
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
      p = [
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
      u = [
        {
          name: "AI Volatility Forecast",
          subtext: "Predict market volatility with AI",
        },
      ];
    function E() {
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)("div", {
            className: "header-top-layer",
            children: [
              (0, n.jsx)("div", {
                className: "flex items-center gap-4",
                children: (0, n.jsxs)("div", {
                  className: "header-title leading-tight",
                  children: [
                    (0, n.jsx)("span", {
                      className: "neon-text",
                      children: "Quantum",
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("span", {
                      className: "text-white",
                      children: "CyberVision",
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: "nav-right",
                children: [
                  (0, n.jsx)(i, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: ["Trader", (0, n.jsx)("br", {}), "Profile"],
                    }),
                    items: m,
                    titleClassName: "neon-orange",
                  }),
                  (0, n.jsx)(i, {
                    title: "Community",
                    items: s,
                    titleClassName: "neon-blue",
                  }),
                  (0, n.jsxs)(t.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, n.jsx)("br", {}), "Prices"],
                  }),
                  (0, n.jsx)(t.default, {
                    href: "/join",
                    className: "nav-item neon-pink",
                    children: "Join",
                  }),
                ],
              }),
            ],
          }),
          (0, n.jsx)("div", {
            className: "header-middle-layer",
            children: (0, n.jsxs)("nav", {
              className: "main-nav",
              children: [
                (0, n.jsx)(t.default, {
                  href: "/",
                  className: "nav-item neon-green",
                  children: "Home",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-orange",
                  children: "Stocks",
                }),
                (0, n.jsx)(t.default, {
                  href: "/main",
                  className: "nav-item neon-cyan",
                  children: "Crypto",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-blue",
                  children: "FUTURES AND COMMODITIES",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Options",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-green",
                  children: "BOND AND FIXED INCOME",
                }),
              ],
            }),
          }),
          (0, n.jsx)("div", {
            className: "header-bottom-layer",
            children: (0, n.jsxs)("nav", {
              className: "main-nav",
              children: [
                (0, n.jsx)(i, {
                  title: (0, n.jsxs)(n.Fragment, {
                    children: ["Guilty", (0, n.jsx)("br", {}), "Pleasures"],
                  }),
                  items: c,
                  titleClassName: "neon-pink",
                }),
                (0, n.jsx)(i, {
                  title: "FX Matrix Analyzer",
                  items: u,
                  titleClassName: "neon-green",
                }),
                (0, n.jsx)(i, {
                  title: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", { children: "Las Vegas" }),
                      (0, n.jsx)("div", { children: "Stats" }),
                    ],
                  }),
                  items: d,
                  titleClassName: "neon-gold glow-text",
                }),
                (0, n.jsx)(i, {
                  title: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", { children: "World" }),
                      (0, n.jsx)("div", { children: "Sports" }),
                    ],
                  }),
                  items: l,
                  titleClassName: "neon-blue",
                }),
                (0, n.jsx)(i, {
                  title: "Opinions",
                  items: p,
                  titleClassName: "neon-pink",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-green",
                  children: "GLOBAL ECONOMIC AND MACRO DATA SOURCES",
                }),
              ],
            }),
          }),
          (0, n.jsx)("div", {
            className: "header-fourth-layer",
            children: (0, n.jsxs)("nav", {
              className: "main-nav",
              children: [
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Over-the-Counter (OTC)",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-gold",
                  children: "INDEX PROVIDERS",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-red",
                  children: "Mutual Funds and ETFs Data",
                }),
                (0, n.jsx)(t.default, {
                  href: "#",
                  className: "nav-item neon-blue",
                  children: "ALTERNATIVE DATA MARKETS",
                }),
              ],
            }),
          }),
          (0, n.jsx)("div", {
            className: "header-fifth-layer",
            children: (0, n.jsx)("nav", { className: "main-nav" }),
          }),
        ],
      });
    }
    function f() {
      let [e, E] = (0, r.useState)(!1);
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)("div", {
            className: "header-top-layer",
            children: [
              (0, n.jsx)("div", {
                className: "flex items-center gap-4",
                children: (0, n.jsxs)("div", {
                  className: "header-title leading-tight",
                  children: [
                    (0, n.jsx)("span", {
                      className: "neon-text",
                      children: "Quantum",
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("span", {
                      className: "text-white",
                      children: "CyberVision",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("button", {
                onClick: () => E(!e),
                className: "mobile-menu-button",
                children: e
                  ? (0, n.jsx)(o.X, { size: 24 })
                  : (0, n.jsx)(a, { size: 24 }),
              }),
            ],
          }),
          e &&
            (0, n.jsx)("div", {
              className: "mobile-menu",
              children: (0, n.jsxs)("nav", {
                className: "mobile-nav-links",
                children: [
                  (0, n.jsx)(t.default, {
                    href: "/",
                    className: "nav-item neon-green",
                    children: "Home",
                  }),
                  (0, n.jsx)(i, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: ["Trader", (0, n.jsx)("br", {}), "Profile"],
                    }),
                    items: m,
                    titleClassName: "neon-orange",
                  }),
                  (0, n.jsx)(i, {
                    title: "Community",
                    items: s,
                    titleClassName: "neon-blue",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-orange",
                    children: "Stocks",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "/main",
                    className: "nav-item neon-cyan",
                    children: "Crypto",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "FUTURES AND COMMODITIES",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Options",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "BOND AND FIXED INCOME",
                  }),
                  (0, n.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, n.jsx)(i, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: ["Guilty", (0, n.jsx)("br", {}), "Pleasures"],
                    }),
                    items: c,
                    titleClassName: "neon-pink",
                  }),
                  (0, n.jsx)(i, {
                    title: "FX Matrix Analyzer",
                    items: u,
                    titleClassName: "neon-green",
                  }),
                  (0, n.jsx)(i, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", { children: "Las Vegas" }),
                        (0, n.jsx)("div", { children: "Stats" }),
                      ],
                    }),
                    items: d,
                    titleClassName: "neon-gold glow-text",
                  }),
                  (0, n.jsx)(i, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", { children: "World" }),
                        (0, n.jsx)("div", { children: "Sports" }),
                      ],
                    }),
                    items: l,
                    titleClassName: "neon-blue",
                  }),
                  (0, n.jsx)(i, {
                    title: "Opinions",
                    items: p,
                    titleClassName: "neon-pink",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "GLOBAL ECONOMIC AND MACRO DATA SOURCES",
                  }),
                  (0, n.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Over-the-Counter (OTC)",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-gold",
                    children: "INDEX PROVIDERS",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-red",
                    children: "Mutual Funds and ETFs Data",
                  }),
                  (0, n.jsx)(t.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "ALTERNATIVE DATA MARKETS",
                  }),
                  (0, n.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, n.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, n.jsxs)(t.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, n.jsx)("br", {}), "Prices"],
                  }),
                  (0, n.jsx)(t.default, {
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
        let [e, n] = r.useState(void 0);
        return (
          r.useEffect(() => {
            let e = window.matchMedia("(max-width: 767px)"),
              t = () => {
                n(window.innerWidth < 768);
              };
            return (
              e.addEventListener("change", t),
              n(window.innerWidth < 768),
              () => e.removeEventListener("change", t)
            );
          }, []),
          e
        );
      })();
      return (0, n.jsx)("header", {
        className: "header-nav",
        children:
          void 0 === e
            ? (0, n.jsx)("div", {
                className: "header-top-layer",
                children: (0, n.jsx)("div", {
                  className: "flex items-center gap-4",
                  children: (0, n.jsxs)("div", {
                    className: "header-title leading-tight",
                    children: [
                      (0, n.jsx)("span", {
                        className: "neon-text",
                        children: "Quantum",
                      }),
                      (0, n.jsx)("br", {}),
                      (0, n.jsx)("span", {
                        className: "text-white",
                        children: "CyberVision",
                      }),
                    ],
                  }),
                }),
              })
            : e
              ? (0, n.jsx)(f, {})
              : (0, n.jsx)(E, {}),
      });
    }
    e.s(["Header", () => y], 45872);
  },
  71689,
  (e) => {
    "use strict";
    let n = (0, e.i(75254).default)("ArrowLeft", [
      ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
      ["path", { d: "M19 12H5", key: "x3x0zl" }],
    ]);
    e.s(["ArrowLeft", () => n], 71689);
  },
  55884,
  (e) => {
    "use strict";
    var n = e.i(43476),
      t = e.i(71645),
      r = e.i(45872),
      i = e.i(93479),
      a = e.i(22016),
      o = e.i(71689);
    let s = [
      {
        name: "Binance Coin",
        symbol: "BNB",
        apiKeyEnv: "EX_API_BINANCE",
        providerHint: "Binance REST / account endpoints",
      },
      {
        name: "LEO Token",
        symbol: "LEO",
        apiKeyEnv: "EX_API_BITFINEX",
        providerHint: "Bitfinex REST",
      },
      {
        name: "Bitget Token",
        symbol: "BGB",
        apiKeyEnv: "EX_API_BITGET",
        providerHint: "Bitget REST",
      },
      {
        name: "OKB",
        symbol: "OKB",
        apiKeyEnv: "EX_API_OKX",
        providerHint: "OKX REST",
      },
      {
        name: "Cronos",
        symbol: "CRO",
        apiKeyEnv: "EX_API_CRONOS",
        providerHint: "Crypto.com REST",
      },
      {
        name: "KuCoin Token",
        symbol: "KCS",
        apiKeyEnv: "EX_API_KUCOIN",
        providerHint: "KuCoin REST",
      },
      {
        name: "GateToken",
        symbol: "GT",
        apiKeyEnv: "EX_API_GATEIO",
        providerHint: "Gate.io REST",
      },
      {
        name: "FTX Token (FTT)",
        symbol: "FTT",
        apiKeyEnv: "EX_API_FTX",
        providerHint: "FTX legacy REST (if available)",
      },
      {
        name: "CoinEx Token",
        symbol: "CET",
        apiKeyEnv: "EX_API_COINEX",
        providerHint: "CoinEx REST",
      },
      {
        name: "Huobi Token",
        symbol: "HT",
        apiKeyEnv: "EX_API_HUOBI",
        providerHint: "Huobi REST",
      },
      {
        name: "OKT (OKChain)",
        symbol: "OKT",
        apiKeyEnv: "EX_API_OKT",
        providerHint: "OKX/OKChain endpoints",
      },
      {
        name: "Bitrue Coin",
        symbol: "BTR",
        apiKeyEnv: "EX_API_BITRUE",
        providerHint: "Bitrue REST",
      },
      {
        name: "Bitkub Coin",
        symbol: "KUB",
        apiKeyEnv: "EX_API_BITKUB",
        providerHint: "Bitkub REST",
      },
      {
        name: "MEXC Token",
        symbol: "MX",
        apiKeyEnv: "EX_API_MEXC",
        providerHint: "MEXC REST",
      },
      {
        name: "WhiteBIT Coin",
        symbol: "WBT",
        apiKeyEnv: "EX_API_WHITEBIT",
        providerHint: "WhiteBIT REST",
      },
      {
        name: "WazirX WRX",
        symbol: "WRX",
        apiKeyEnv: "EX_API_WAZIRX",
        providerHint: "WazirX REST",
      },
      {
        name: "Tokenize Xchange TKX",
        symbol: "TKX",
        apiKeyEnv: "EX_API_TOKENIZE",
        providerHint: "Tokenize REST",
      },
      {
        name: "BitMart Token",
        symbol: "BMX",
        apiKeyEnv: "EX_API_BITMART",
        providerHint: "BitMart REST",
      },
      {
        name: "Bibox Token",
        symbol: "BIX",
        apiKeyEnv: "EX_API_BIBOX",
        providerHint: "Bibox REST",
      },
      {
        name: "OKChain OKB variant",
        symbol: "OKB2",
        apiKeyEnv: "EX_API_OKB2",
        providerHint: "OKX ecosystem",
      },
      {
        name: "AscendEX Token",
        symbol: "ASD",
        apiKeyEnv: "EX_API_ASCENDEX",
        providerHint: "AscendEX REST",
      },
      {
        name: "Hotbit Token",
        symbol: "HTB",
        apiKeyEnv: "EX_API_HOTBIT",
        providerHint: "Hotbit REST",
      },
      {
        name: "ProBit Token",
        symbol: "PROB",
        apiKeyEnv: "EX_API_PROBIT",
        providerHint: "ProBit REST",
      },
      {
        name: "Bitso Token",
        symbol: "BITSO",
        apiKeyEnv: "EX_API_BITSO",
        providerHint: "Bitso REST",
      },
      {
        name: "Bibox Chain Token",
        symbol: "BCHT",
        apiKeyEnv: "EX_API_BIBOX_CHAIN",
        providerHint: "Bibox chain APIs",
      },
      {
        name: "CoinEx Chain CET",
        symbol: "CETC",
        apiKeyEnv: "EX_API_COINEX_CHAIN",
        providerHint: "CoinEx Chain endpoints",
      },
      {
        name: "Gopax Token",
        symbol: "GPX",
        apiKeyEnv: "EX_API_GOPAX",
        providerHint: "Gopax REST",
      },
      {
        name: "Bittrex Token (example)",
        symbol: "BTRX",
        apiKeyEnv: "EX_API_BITTREX",
        providerHint: "Bittrex REST",
      },
      {
        name: "Poloniex Token (example)",
        symbol: "POLX",
        apiKeyEnv: "EX_API_POLONIEX",
        providerHint: "Poloniex REST",
      },
      {
        name: "GateChain Token",
        symbol: "GTN",
        apiKeyEnv: "EX_API_GATECHAIN",
        providerHint: "GateChain endpoints",
      },
      {
        name: "MEXC Ecosystem Token",
        symbol: "MEXCET",
        apiKeyEnv: "EX_API_MEXCET",
        providerHint: "MEXC REST",
      },
      {
        name: "Bitstamp Token (example)",
        symbol: "BST",
        apiKeyEnv: "EX_API_BITSTAMP",
        providerHint: "Bitstamp REST",
      },
      {
        name: "CoinTiger Token",
        symbol: "CTT",
        apiKeyEnv: "EX_API_COIN TIGER",
        providerHint: "CoinTiger REST",
      },
      {
        name: "BitFlyer Token (example)",
        symbol: "BFY",
        apiKeyEnv: "EX_API_BITFLYER",
        providerHint: "bitFlyer REST",
      },
      {
        name: "Crypto.com Token (CRO)",
        symbol: "CRO",
        apiKeyEnv: "EX_API_CRYPTOCOM",
        providerHint: "Crypto.com REST",
      },
      {
        name: "CoinEx Token (alternate)",
        symbol: "CET2",
        apiKeyEnv: "EX_API_CET2",
        providerHint: "CoinEx REST",
      },
      {
        name: "Bitbank Token (example)",
        symbol: "BBK",
        apiKeyEnv: "EX_API_BITBANK",
        providerHint: "Bitbank REST",
      },
      {
        name: "Bithumb Token (example)",
        symbol: "BTH",
        apiKeyEnv: "EX_API_BITHUMB",
        providerHint: "Bithumb REST",
      },
      {
        name: "Upbit Token (example)",
        symbol: "UPT",
        apiKeyEnv: "EX_API_UPBIT",
        providerHint: "Upbit REST",
      },
      {
        name: "Coinbase Exchange Token (example)",
        symbol: "COBX",
        apiKeyEnv: "EX_API_COINBASE",
        providerHint: "Coinbase Pro REST",
      },
      {
        name: "Gemini Token (example)",
        symbol: "GMI",
        apiKeyEnv: "EX_API_GEMINI",
        providerHint: "Gemini REST",
      },
      {
        name: "Kraken Token (example)",
        symbol: "KRK",
        apiKeyEnv: "EX_API_KRAKEN",
        providerHint: "Kraken REST",
      },
      {
        name: "OKX Ecosystem Token",
        symbol: "OKXET",
        apiKeyEnv: "EX_API_OKX_ET",
        providerHint: "OKX REST",
      },
      {
        name: "KuCoin Ecosystem Token (alt)",
        symbol: "KCS2",
        apiKeyEnv: "EX_API_KCS2",
        providerHint: "KuCoin REST",
      },
      {
        name: "Bitfinex LEO variant",
        symbol: "LEO2",
        apiKeyEnv: "EX_API_BITFINEX_LEO",
        providerHint: "Bitfinex REST",
      },
      {
        name: "Huobi Eco Chain HPT (example)",
        symbol: "HPT",
        apiKeyEnv: "EX_API_HECO_HPT",
        providerHint: "Huobi ecosystem",
      },
      {
        name: "Bibox Token (alt)",
        symbol: "BIX2",
        apiKeyEnv: "EX_API_BIX2",
        providerHint: "Bibox REST",
      },
      {
        name: "CoinEx Global Token",
        symbol: "CETG",
        apiKeyEnv: "EX_API_CETG",
        providerHint: "CoinEx REST",
      },
      {
        name: "Tokocrypto TKO (example)",
        symbol: "TKO",
        apiKeyEnv: "EX_API_TOKOCRYPTO",
        providerHint: "Tokocrypto REST",
      },
      {
        name: "Bitget Ecosystem Token",
        symbol: "BGB2",
        apiKeyEnv: "EX_API_BITGET2",
        providerHint: "Bitget REST",
      },
      {
        name: "WhiteBit Ecosystem Token",
        symbol: "WBT2",
        apiKeyEnv: "EX_API_WHITEBIT2",
        providerHint: "WhiteBIT REST",
      },
      {
        name: "ZBG Token (example)",
        symbol: "ZBG",
        apiKeyEnv: "EX_API_ZBG",
        providerHint: "ZBG REST",
      },
      {
        name: "Bibox Chain BIXC",
        symbol: "BIXC",
        apiKeyEnv: "EX_API_BIXC",
        providerHint: "Bibox chain endpoints",
      },
      {
        name: "Mercatox Token (example)",
        symbol: "MCT",
        apiKeyEnv: "EX_API_MERCATOX",
        providerHint: "Mercatox REST",
      },
      {
        name: "BitMax Token (example)",
        symbol: "BTMX",
        apiKeyEnv: "EX_API_BITMAX",
        providerHint: "BitMax REST",
      },
      {
        name: "Coinone Token (example)",
        symbol: "CONE",
        apiKeyEnv: "EX_API_COINONE",
        providerHint: "Coinone REST",
      },
      {
        name: "Paxful Token (example)",
        symbol: "PAXF",
        apiKeyEnv: "EX_API_PAXFUL",
        providerHint: "Paxful REST",
      },
      {
        name: "WOO Network (exchange integration)",
        symbol: "WOO",
        apiKeyEnv: "EX_API_WOO",
        providerHint: "WOO X / REST",
      },
      {
        name: "Bilaxy Token (example)",
        symbol: "BIA",
        apiKeyEnv: "EX_API_BILAXY",
        providerHint: "Bilaxy REST",
      },
      {
        name: "Hotbit Token (alt)",
        symbol: "HTB2",
        apiKeyEnv: "EX_API_HTB2",
        providerHint: "Hotbit REST",
      },
      {
        name: "Bitrue Token (alt)",
        symbol: "BTR2",
        apiKeyEnv: "EX_API_BTR2",
        providerHint: "Bitrue REST",
      },
      {
        name: "Korbit Token (example)",
        symbol: "KOR",
        apiKeyEnv: "EX_API_KORBIT",
        providerHint: "Korbit REST",
      },
      {
        name: "CoinEx Token (regional)",
        symbol: "CETR",
        apiKeyEnv: "EX_API_CETR",
        providerHint: "CoinEx REST",
      },
      {
        name: "BKEX Token (example)",
        symbol: "BKX",
        apiKeyEnv: "EX_API_BKEX",
        providerHint: "BKEX REST",
      },
      {
        name: "LBank Token (example)",
        symbol: "LBT",
        apiKeyEnv: "EX_API_LBANK",
        providerHint: "LBank REST",
      },
      {
        name: "CoinDCX Token (example)",
        symbol: "CDX",
        apiKeyEnv: "EX_API_COINDCX",
        providerHint: "CoinDCX REST",
      },
      {
        name: "Bitbank Token (alt)",
        symbol: "BBT",
        apiKeyEnv: "EX_API_BBT",
        providerHint: "Bitbank REST",
      },
      {
        name: "AscendEX Token (alt)",
        symbol: "ASD2",
        apiKeyEnv: "EX_API_ASD2",
        providerHint: "AscendEX REST",
      },
      {
        name: "Indodax Token (example)",
        symbol: "IDX",
        apiKeyEnv: "EX_API_INDODAX",
        providerHint: "Indodax REST",
      },
      {
        name: "Tokocrypto Token (alt)",
        symbol: "TKO2",
        apiKeyEnv: "EX_API_TKO2",
        providerHint: "Tokocrypto REST",
      },
      {
        name: "HBTC Token (example)",
        symbol: "HBTC",
        apiKeyEnv: "EX_API_HBTC",
        providerHint: "HBTC REST",
      },
      {
        name: "OKX Token Variant",
        symbol: "OKXV",
        apiKeyEnv: "EX_API_OKXV",
        providerHint: "OKX REST",
      },
      {
        name: "Bitstamp Token (alt)",
        symbol: "BST2",
        apiKeyEnv: "EX_API_BST2",
        providerHint: "Bitstamp REST",
      },
      {
        name: "GateToken (alt)",
        symbol: "GT2",
        apiKeyEnv: "EX_API_GT2",
        providerHint: "Gate.io REST",
      },
      {
        name: "Kanga Exchange Token (example)",
        symbol: "KNGA",
        apiKeyEnv: "EX_API_KANGA",
        providerHint: "Kanga REST",
      },
      {
        name: "BTCEX Token (example)",
        symbol: "BTX",
        apiKeyEnv: "EX_API_BTCEX",
        providerHint: "BTCEX REST",
      },
      {
        name: "ZBG Token (alt)",
        symbol: "ZBG2",
        apiKeyEnv: "EX_API_ZBG2",
        providerHint: "ZBG REST",
      },
      {
        name: "BHEX Token (example)",
        symbol: "BHT",
        apiKeyEnv: "EX_API_BHEX",
        providerHint: "BHEX REST",
      },
      {
        name: "Coinsbit Token (example)",
        symbol: "CNB",
        apiKeyEnv: "EX_API_COINSBIT",
        providerHint: "Coinsbit REST",
      },
      {
        name: "OKCoin Token (example)",
        symbol: "OKC",
        apiKeyEnv: "EX_API_OKCOIN",
        providerHint: "OKCoin REST",
      },
      {
        name: "Simulated Exchange Token 1",
        symbol: "EXSIM1",
        apiKeyEnv: "EX_API_EXSIM1",
        providerHint: "Custom exchange REST",
      },
      {
        name: "Simulated Exchange Token 2",
        symbol: "EXSIM2",
        apiKeyEnv: "EX_API_EXSIM2",
        providerHint: "Custom exchange REST",
      },
      {
        name: "Simulated Exchange Token 3",
        symbol: "EXSIM3",
        apiKeyEnv: "EX_API_EXSIM3",
        providerHint: "Custom exchange REST",
      },
      {
        name: "Simulated Exchange Token 4",
        symbol: "EXSIM4",
        apiKeyEnv: "EX_API_EXSIM4",
        providerHint: "Custom exchange REST",
      },
    ];
    function l() {
      let [e, l] = (0, t.useState)(""),
        m = s.filter(
          (n) =>
            n.name.toLowerCase().includes(e.toLowerCase()) ||
            n.symbol.toLowerCase().includes(e.toLowerCase()),
        );
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(r.Header, {}),
          (0, n.jsx)("main", {
            className: "dashboard-grid",
            children: (0, n.jsxs)("section", {
              className: "center-content",
              children: [
                (0, n.jsx)("h1", {
                  className: "text-3xl font-bold neon-text text-center mt-8",
                  children: "Exchange Tokens",
                }),
                (0, n.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "A list of tokens issued by cryptocurrency exchanges. These tokens often provide utility within their native platform, such as reduced trading fees, governance rights, or access to exclusive features.",
                }),
                (0, n.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, n.jsx)(i.Input, {
                    type: "text",
                    placeholder: "Search exchange tokens...",
                    value: e,
                    onChange: (e) => l(e.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "w-full overflow-x-auto mt-8",
                  children: (0, n.jsxs)("div", {
                    className: "info-table-card",
                    children: [
                      (0, n.jsxs)("table", {
                        className: "info-table w-full",
                        children: [
                          (0, n.jsx)("thead", {
                            children: (0, n.jsxs)("tr", {
                              children: [
                                (0, n.jsx)("th", { children: "Name" }),
                                (0, n.jsx)("th", { children: "Symbol" }),
                                (0, n.jsx)("th", {
                                  children: "API Key Env Var",
                                }),
                                (0, n.jsx)("th", { children: "Provider Hint" }),
                              ],
                            }),
                          }),
                          (0, n.jsx)("tbody", {
                            children: m.map((e, t) =>
                              (0, n.jsxs)(
                                "tr",
                                {
                                  className: "hover:bg-white/5",
                                  children: [
                                    (0, n.jsx)("td", {
                                      className: "neon-cyan",
                                      children: e.name,
                                    }),
                                    (0, n.jsx)("td", {
                                      className: "neon-pink",
                                      children: e.symbol.toUpperCase(),
                                    }),
                                    (0, n.jsx)("td", {
                                      className:
                                        "text-gray-400 font-mono text-xs",
                                      children: e.apiKeyEnv,
                                    }),
                                    (0, n.jsx)("td", {
                                      className: "text-gray-400",
                                      children: e.providerHint,
                                    }),
                                  ],
                                },
                                `${e.symbol}-${t}`,
                              ),
                            ),
                          }),
                        ],
                      }),
                      0 === m.length &&
                        (0, n.jsx)("p", {
                          className: "text-center text-gray-400 py-8",
                          children:
                            "No exchange tokens found matching your search.",
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, n.jsxs)(a.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, n.jsx)(o.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => l]);
  },
]);
