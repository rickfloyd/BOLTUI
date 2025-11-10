(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var n = e.i(43476),
      t = e.i(71645),
      a = e.i(75157);
    let r = t.forwardRef(({ className: e, type: t, ...r }, l) =>
      (0, n.jsx)("input", {
        type: t,
        className: (0, a.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: l,
        ...r,
      }),
    );
    ((r.displayName = "Input"), e.s(["Input", () => r]));
  },
  33525,
  (e, n, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "warnOnce", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let a = (e) => {};
  },
  98183,
  (e, n, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = {
      assign: function () {
        return i;
      },
      searchParamsToUrlQuery: function () {
        return l;
      },
      urlQueryToSearchParams: function () {
        return o;
      },
    };
    for (var r in a) Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
    function l(e) {
      let n = {};
      for (let [t, a] of e.entries()) {
        let e = n[t];
        void 0 === e
          ? (n[t] = a)
          : Array.isArray(e)
            ? e.push(a)
            : (n[t] = [e, a]);
      }
      return n;
    }
    function s(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function o(e) {
      let n = new URLSearchParams();
      for (let [t, a] of Object.entries(e))
        if (Array.isArray(a)) for (let e of a) n.append(t, s(e));
        else n.set(t, s(a));
      return n;
    }
    function i(e, ...n) {
      for (let t of n) {
        for (let n of t.keys()) e.delete(n);
        for (let [n, a] of t.entries()) e.append(n, a);
      }
      return e;
    }
  },
  95057,
  (e, n, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = {
      formatUrl: function () {
        return o;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return i;
      },
    };
    for (var r in a) Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
    let l = e.r(90809)._(e.r(98183)),
      s = /https?|ftp|gopher|file/;
    function o(e) {
      let { auth: n, hostname: t } = e,
        a = e.protocol || "",
        r = e.pathname || "",
        o = e.hash || "",
        i = e.query || "",
        c = !1;
      ((n = n ? encodeURIComponent(n).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = n + e.host)
          : t &&
            ((c = n + (~t.indexOf(":") ? `[${t}]` : t)),
            e.port && (c += ":" + e.port)),
        i && "object" == typeof i && (i = String(l.urlQueryToSearchParams(i))));
      let m = e.search || (i && `?${i}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || s.test(a)) && !1 !== c)
          ? ((c = "//" + (c || "")), r && "/" !== r[0] && (r = "/" + r))
          : c || (c = ""),
        o && "#" !== o[0] && (o = "#" + o),
        m && "?" !== m[0] && (m = "?" + m),
        (r = r.replace(/[?#]/g, encodeURIComponent)),
        (m = m.replace("#", "%23")),
        `${a}${c}${r}${m}${o}`
      );
    }
    let i = [
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
  (e, n, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let a = e.r(71645);
    function r(e, n) {
      let t = (0, a.useRef)(null),
        r = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = t.current;
            e && ((t.current = null), e());
            let n = r.current;
            n && ((r.current = null), n());
          } else (e && (t.current = l(e, a)), n && (r.current = l(n, a)));
        },
        [e, n],
      );
    }
    function l(e, n) {
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
    var a = {
      DecodeError: function () {
        return x;
      },
      MiddlewareNotFoundError: function () {
        return g;
      },
      MissingStaticPage: function () {
        return N;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return v;
      },
      SP: function () {
        return f;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return l;
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
        return m;
      },
      isAbsoluteUrl: function () {
        return i;
      },
      isResSent: function () {
        return u;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return j;
      },
    };
    for (var r in a) Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
    let l = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(e) {
      let n,
        t = !1;
      return (...a) => (t || ((t = !0), (n = e(...a))), n);
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      i = (e) => o.test(e);
    function c() {
      let { protocol: e, hostname: n, port: t } = window.location;
      return `${e}//${n}${t ? ":" + t : ""}`;
    }
    function m() {
      let { href: e } = window.location,
        n = c();
      return e.substring(n.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function u(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let n = e.split("?");
      return (
        n[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (n[1] ? `?${n.slice(1).join("?")}` : "")
      );
    }
    async function h(e, n) {
      let t = n.res || (n.ctx && n.ctx.res);
      if (!e.getInitialProps)
        return n.ctx && n.Component
          ? { pageProps: await h(n.Component, n.ctx) }
          : {};
      let a = await e.getInitialProps(n);
      if (t && u(t)) return a;
      if (!a)
        throw Object.defineProperty(
          Error(
            `"${d(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return a;
    }
    let f = "undefined" != typeof performance,
      y =
        f &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class x extends Error {}
    class b extends Error {}
    class v extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class N extends Error {
      constructor(e, n) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${n}`));
      }
    }
    class g extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function j(e) {
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
          return l;
        },
      }));
    let a = e.r(18967),
      r = e.r(52817);
    function l(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let n = (0, a.getLocationOrigin)(),
          t = new URL(e, n);
        return t.origin === n && (0, r.hasBasePath)(t.pathname);
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
          return a;
        },
      }));
    let a = (e) => {};
  },
  22016,
  (e, n, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return x;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var r in a) Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
    let l = e.r(90809),
      s = e.r(43476),
      o = l._(e.r(71645)),
      i = e.r(95057),
      c = e.r(8372),
      m = e.r(18581),
      d = e.r(18967),
      u = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      h = e.r(73668),
      f = e.r(65165);
    function y(e) {
      return "string" == typeof e ? e : (0, i.formatUrl)(e);
    }
    function x(n) {
      var t;
      let a,
        r,
        l,
        [i, x] = (0, o.useOptimistic)(p.IDLE_LINK_STATUS),
        v = (0, o.useRef)(null),
        {
          href: N,
          as: g,
          children: j,
          prefetch: k = null,
          passHref: S,
          replace: P,
          shallow: T,
          scroll: C,
          onClick: A,
          onMouseEnter: O,
          onTouchStart: w,
          legacyBehavior: E = !1,
          onNavigate: R,
          ref: M,
          unstable_dynamicOnHover: I,
          ...L
        } = n;
      ((a = j),
        E &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, s.jsx)("a", { children: a })));
      let F = o.default.useContext(c.AppRouterContext),
        D = !1 !== k,
        B =
          !1 !== k
            ? null === (t = k) || "auto" === t
              ? f.FetchStrategy.PPR
              : f.FetchStrategy.Full
            : f.FetchStrategy.PPR,
        { href: _, as: V } = o.default.useMemo(() => {
          let e = y(N);
          return { href: e, as: g ? y(g) : e };
        }, [N, g]);
      if (E) {
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
      let H = E ? r && "object" == typeof r && r.ref : M,
        X = o.default.useCallback(
          (e) => (
            null !== F &&
              (v.current = (0, p.mountLinkInstance)(e, _, F, B, D, x)),
            () => {
              (v.current &&
                ((0, p.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [D, _, F, B, x],
        ),
        U = {
          ref: (0, m.useMergedRef)(X, H),
          onClick(n) {
            (E || "function" != typeof A || A(n),
              E &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(n),
              !F ||
                n.defaultPrevented ||
                (function (n, t, a, r, l, s, i) {
                  if ("undefined" != typeof window) {
                    let c,
                      { nodeName: m } = n.currentTarget;
                    if (
                      ("A" === m.toUpperCase() &&
                        (((c = n.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          n.metaKey ||
                          n.ctrlKey ||
                          n.shiftKey ||
                          n.altKey ||
                          (n.nativeEvent && 2 === n.nativeEvent.which))) ||
                      n.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(t)) {
                      l && (n.preventDefault(), location.replace(t));
                      return;
                    }
                    if ((n.preventDefault(), i)) {
                      let e = !1;
                      if (
                        (i({
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
                      d(a || t, l ? "replace" : "push", s ?? !0, r.current);
                    });
                  }
                })(n, _, V, v, P, C, R));
          },
          onMouseEnter(e) {
            (E || "function" != typeof O || O(e),
              E &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              F && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === I));
          },
          onTouchStart: function (e) {
            (E || "function" != typeof w || w(e),
              E &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              F && D && (0, p.onNavigationIntent)(e.currentTarget, !0 === I));
          },
        };
      return (
        (0, d.isAbsoluteUrl)(V)
          ? (U.href = V)
          : (E && !S && ("a" !== r.type || "href" in r.props)) ||
            (U.href = (0, u.addBasePath)(V)),
        (l = E
          ? o.default.cloneElement(r, U)
          : (0, s.jsx)("a", { ...L, ...U, children: a })),
        (0, s.jsx)(b.Provider, { value: i, children: l })
      );
    }
    e.r(84508);
    let b = (0, o.createContext)(p.IDLE_LINK_STATUS),
      v = () => (0, o.useContext)(b);
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
      a = e.i(71645);
    function r({ title: e, items: r, titleClassName: l }) {
      let [s, o] = (0, a.useState)(!1);
      return (0, n.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
          (0, n.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${l || "neon-cyan"}`,
            children: e,
          }),
          s &&
            (0, n.jsx)("div", {
              className: "header-dropdown-menu",
              children: r.map((e, a) =>
                e.isSeparator
                  ? (0, n.jsx)("div", { className: "dropdown-separator" }, a)
                  : "header" === e.type
                    ? (0, n.jsx)(
                        "div",
                        { className: "dropdown-header", children: e.name },
                        a,
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
                          a,
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
                          a,
                        ),
              ),
            }),
        ],
      });
    }
    let l = (0, e.i(75254).default)("Menu", [
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
      i = [
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
      p = [
        {
          name: "AI Volatility Forecast",
          subtext: "Predict market volatility with AI",
        },
      ];
    function h() {
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
                  (0, n.jsx)(r, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: ["Trader", (0, n.jsx)("br", {}), "Profile"],
                    }),
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, n.jsx)(r, {
                    title: "Community",
                    items: o,
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
                (0, n.jsx)(r, {
                  title: (0, n.jsxs)(n.Fragment, {
                    children: ["Guilty", (0, n.jsx)("br", {}), "Pleasures"],
                  }),
                  items: m,
                  titleClassName: "neon-pink",
                }),
                (0, n.jsx)(r, {
                  title: "FX Matrix Analyzer",
                  items: p,
                  titleClassName: "neon-green",
                }),
                (0, n.jsx)(r, {
                  title: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", { children: "Las Vegas" }),
                      (0, n.jsx)("div", { children: "Stats" }),
                    ],
                  }),
                  items: d,
                  titleClassName: "neon-gold glow-text",
                }),
                (0, n.jsx)(r, {
                  title: (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", { children: "World" }),
                      (0, n.jsx)("div", { children: "Sports" }),
                    ],
                  }),
                  items: i,
                  titleClassName: "neon-blue",
                }),
                (0, n.jsx)(r, {
                  title: "Opinions",
                  items: u,
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
      let [e, h] = (0, a.useState)(!1);
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
                onClick: () => h(!e),
                className: "mobile-menu-button",
                children: e
                  ? (0, n.jsx)(s.X, { size: 24 })
                  : (0, n.jsx)(l, { size: 24 }),
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
                  (0, n.jsx)(r, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: ["Trader", (0, n.jsx)("br", {}), "Profile"],
                    }),
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, n.jsx)(r, {
                    title: "Community",
                    items: o,
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
                  (0, n.jsx)(r, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: ["Guilty", (0, n.jsx)("br", {}), "Pleasures"],
                    }),
                    items: m,
                    titleClassName: "neon-pink",
                  }),
                  (0, n.jsx)(r, {
                    title: "FX Matrix Analyzer",
                    items: p,
                    titleClassName: "neon-green",
                  }),
                  (0, n.jsx)(r, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", { children: "Las Vegas" }),
                        (0, n.jsx)("div", { children: "Stats" }),
                      ],
                    }),
                    items: d,
                    titleClassName: "neon-gold glow-text",
                  }),
                  (0, n.jsx)(r, {
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", { children: "World" }),
                        (0, n.jsx)("div", { children: "Sports" }),
                      ],
                    }),
                    items: i,
                    titleClassName: "neon-blue",
                  }),
                  (0, n.jsx)(r, {
                    title: "Opinions",
                    items: u,
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
        let [e, n] = a.useState(void 0);
        return (
          a.useEffect(() => {
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
              : (0, n.jsx)(h, {}),
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
  79959,
  (e) => {
    "use strict";
    var n = e.i(43476),
      t = e.i(71645),
      a = e.i(45872),
      r = e.i(93479),
      l = e.i(22016),
      s = e.i(71689);
    let o = [
      { name: "Monero", symbol: "XMR" },
      { name: "Zcash", symbol: "ZEC" },
      { name: "Dash", symbol: "DASH" },
      { name: "Pirate Chain", symbol: "ARRR" },
      { name: "Beam", symbol: "BEAM" },
      { name: "Grin", symbol: "GRIN" },
      { name: "Horizen", symbol: "ZEN" },
      { name: "Firo (formerly Zcoin)", symbol: "FIRO" },
      { name: "Secret Network", symbol: "SCRT" },
      { name: "Railgun", symbol: "RAIL" },
      { name: "Zano", symbol: "ZANO" },
      { name: "Incognito", symbol: "PRV" },
      { name: "Haven Protocol", symbol: "XHV" },
      { name: "Verge", symbol: "XVG" },
      { name: "Nym", symbol: "NYM" },
      { name: "NIX", symbol: "NIX" },
      { name: "Komodo", symbol: "KMD" },
      { name: "NavCoin", symbol: "NAV" },
      { name: "PIVX", symbol: "PIVX" },
      { name: "CloakCoin", symbol: "CLOAK" },
      { name: "Bytecoin", symbol: "BCN" },
      { name: "Aeon", symbol: "AEON" },
      { name: "Loki (Oxen)", symbol: "OXEN" },
      { name: "Tari", symbol: "XTR" },
      {
        name: "Horizon Perpetual (privacy layer)",
        symbol: "HPRIV (placeholder)",
      },
      { name: "TomoChain Private (example)", symbol: "TOMO-P (placeholder)" },
      { name: "Sentinel", symbol: "DVPN" },
      { name: "Spectrecoin", symbol: "XSPEC" },
      { name: "Golang Privacy Chain (example)", symbol: "GPC (placeholder)" },
      { name: "Ghost (Ghost)", symbol: "GHOST" },
      { name: "Panther Protocol", symbol: "ZKP (PANTHER)" },
      { name: "Shade Protocol", symbol: "SD (placeholder)" },
      { name: "BeamX (example wrapped privacy)", symbol: "BMAX (placeholder)" },
      { name: "Fulgur (example)", symbol: "FLGR (placeholder)" },
      { name: "Shadow Token (example)", symbol: "SHDW (placeholder)" },
      { name: "Arweave Private (example)", symbol: "AR-PRIV (placeholder)" },
      { name: "Tornado Cash (protocol token, legacy)", symbol: "TORN" },
      { name: "Secret DeFi Shield (example)", symbol: "SDFS (placeholder)" },
      {
        name: "Nightfall Privacy Token (example)",
        symbol: "NFTK (placeholder)",
      },
      { name: "Zether-based token (example)", symbol: "ZTH (placeholder)" },
      {
        name: "Zcash Sprout/Taproot variants (networks)",
        symbol: "ZEC-S (placeholder)",
      },
      { name: "Manta Network", symbol: "MANTA" },
      { name: "Aleo", symbol: "ALEO" },
      { name: "Aztec", symbol: "AZTEC (or AZT depending on project token)" },
      {
        name: "Offchain Labs privacy module (example)",
        symbol: "OP-PRIV (placeholder)",
      },
      { name: "Keep Network", symbol: "KEEP" },
      { name: "Panther (alt listing)", symbol: "PANTHER" },
      { name: "Möbius Privacy Token (example)", symbol: "MOBP (placeholder)" },
      { name: "SecretAMM (example)", symbol: "SRAMM (placeholder)" },
      { name: "BlindChain (example)", symbol: "BLND (placeholder)" },
      { name: "ZKP Labs Token (example)", symbol: "ZKPL (placeholder)" },
      { name: "Celer Privacy (example)", symbol: "CPRIV (placeholder)" },
      { name: "Horizon Mixnet Token (example)", symbol: "HMIX (placeholder)" },
      { name: "Nightshade Privacy (example)", symbol: "NGHT (placeholder)" },
      { name: "Obscure (example)", symbol: "OBSC (placeholder)" },
      { name: "StealthCash (example)", symbol: "STC (placeholder)" },
      {
        name: "Whisper Protocol Token (example)",
        symbol: "WHSP (placeholder)",
      },
      { name: "SecretSwap Token (example)", symbol: "SSWP (placeholder)" },
      {
        name: "RailSight (privacy analytics countermeasure token)",
        symbol: "RSLT (placeholder)",
      },
      { name: "Cloak Shield Token (example)", symbol: "CST (placeholder)" },
      { name: "ZKSwap Privacy Token (example)", symbol: "ZKSP (placeholder)" },
      {
        name: "Incognito Chain v2 token (example)",
        symbol: "PRV2 (placeholder)",
      },
      { name: "Phantom Privacy (example)", symbol: "PHNT (placeholder)" },
      {
        name: "Stealth Protocol Token (example)",
        symbol: "STEP (placeholder)",
      },
      { name: "Vault Privacy Token (example)", symbol: "VPT (placeholder)" },
      { name: "WhisperNet Token (example)", symbol: "WNET (placeholder)" },
      { name: "Obfuscate Token (example)", symbol: "OBF (placeholder)" },
      { name: "Blackbox Token (example)", symbol: "BLBX (placeholder)" },
      { name: "Silent Network Token (example)", symbol: "SIL (placeholder)" },
      { name: "Hush (legacy)", symbol: "HUSH" },
      { name: "ShadowCash (legacy)", symbol: "SDASH (placeholder)" },
      { name: "Beam Confidential (example)", symbol: "BCFT (placeholder)" },
      { name: "PhantomX (example)", symbol: "PHX (placeholder)" },
      { name: "Mask Network Token (privacy overlay)", symbol: "MASK" },
      { name: "SecretDAO Token (example)", symbol: "SDAO (placeholder)" },
      { name: "CloakSwap Token (example)", symbol: "CLSW (placeholder)" },
      { name: "WhisperSwap Token (example)", symbol: "WSP (placeholder)" },
      { name: "Blackhole Token (example)", symbol: "BHOL (placeholder)" },
      { name: "Quiet Protocol Token (example)", symbol: "QUIET (placeholder)" },
      { name: "Veil Network Token (example)", symbol: "VEIL (placeholder)" },
      { name: "Obelisk (privacy infra token)", symbol: "OBLK (placeholder)" },
      { name: "Sphinx Token (example)", symbol: "SPX (placeholder)" },
      { name: "StealthX (example)", symbol: "STX-PRIV (placeholder)" },
      { name: "Mutiny Token (example)", symbol: "MTY (placeholder)" },
      { name: "Phantom Privacy Chain (example)", symbol: "PPC (placeholder)" },
      {
        name: "Incognito Privacy Bridge Token (example)",
        symbol: "IPB (placeholder)",
      },
      { name: "Shroud Token (example)", symbol: "SHRD (placeholder)" },
      { name: "Echo Privacy Token (example)", symbol: "ECHO (placeholder)" },
      { name: "Ghost Protocol Token (example)", symbol: "GSP (placeholder)" },
      { name: "Conceal (legacy)", symbol: "CCX (placeholder)" },
      { name: "ShadeCash (example)", symbol: "SDC (placeholder)" },
      { name: "ShroudSwap (example)", symbol: "SSW (placeholder)" },
      { name: "VeilSwap Token (example)", symbol: "VSW (placeholder)" },
      { name: "PrivateX (example)", symbol: "PRVX (placeholder)" },
      { name: "Anon Network Token (example)", symbol: "ANON" },
      { name: "CloakChain Token (example)", symbol: "CKT (placeholder)" },
      { name: "BlackNet Token (example)", symbol: "BNK (placeholder)" },
      { name: "Hidden Value Token (example)", symbol: "HVT (placeholder)" },
      { name: "SecretLayer Token (example)", symbol: "SLYR (placeholder)" },
      { name: "Silent Vault Token (example)", symbol: "SVT (placeholder)" },
    ];
    function i() {
      let [e, i] = (0, t.useState)(""),
        c = o.filter(
          (n) =>
            n.name.toLowerCase().includes(e.toLowerCase()) ||
            n.symbol.toLowerCase().includes(e.toLowerCase()),
        );
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(a.Header, {}),
          (0, n.jsx)("main", {
            className: "dashboard-grid",
            children: (0, n.jsxs)("section", {
              className: "center-content",
              children: [
                (0, n.jsx)("h1", {
                  className: "text-3xl font-bold neon-text text-center mt-8",
                  children: "Privacy-Focused Coins",
                }),
                (0, n.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "A curated list of cryptocurrencies and protocols designed to enhance user privacy and confidentiality in transactions.",
                }),
                (0, n.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, n.jsx)(r.Input, {
                    type: "text",
                    placeholder: "Search privacy coins...",
                    value: e,
                    onChange: (e) => i(e.target.value),
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
                                (0, n.jsx)("th", { children: "#" }),
                                (0, n.jsx)("th", { children: "Name" }),
                                (0, n.jsx)("th", { children: "Symbol" }),
                              ],
                            }),
                          }),
                          (0, n.jsx)("tbody", {
                            children: c.map((e, t) =>
                              (0, n.jsxs)(
                                "tr",
                                {
                                  className: "hover:bg-white/5",
                                  children: [
                                    (0, n.jsx)("td", {
                                      className: "neon-orange",
                                      children: t + 1,
                                    }),
                                    (0, n.jsx)("td", {
                                      className: "neon-cyan",
                                      children: e.name,
                                    }),
                                    (0, n.jsx)("td", {
                                      className: "neon-pink",
                                      children: e.symbol,
                                    }),
                                  ],
                                },
                                `${e.symbol}-${t}`,
                              ),
                            ),
                          }),
                        ],
                      }),
                      0 === c.length &&
                        (0, n.jsx)("p", {
                          className: "text-center text-gray-400 py-8",
                          children:
                            "No privacy coins found matching your search.",
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, n.jsxs)(l.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, n.jsx)(s.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => i], 79959);
  },
]);
