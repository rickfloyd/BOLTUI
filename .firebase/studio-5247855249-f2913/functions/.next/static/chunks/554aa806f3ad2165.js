(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93479,
  (e) => {
    "use strict";
    var t = e.i(43476),
      a = e.i(71645),
      n = e.i(75157);
    let r = a.forwardRef(({ className: e, type: a, ...r }, o) =>
      (0, t.jsx)("input", {
        type: a,
        className: (0, n.cn)(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ref: o,
        ...r,
      }),
    );
    ((r.displayName = "Input"), e.s(["Input", () => r]));
  },
  33525,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  98183,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return i;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return l;
      },
    };
    for (var r in n) Object.defineProperty(a, r, { enumerable: !0, get: n[r] });
    function o(e) {
      let t = {};
      for (let [a, n] of e.entries()) {
        let e = t[a];
        void 0 === e
          ? (t[a] = n)
          : Array.isArray(e)
            ? e.push(n)
            : (t[a] = [e, n]);
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
    function l(e) {
      let t = new URLSearchParams();
      for (let [a, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(a, s(e));
        else t.set(a, s(n));
      return t;
    }
    function i(e, ...t) {
      for (let a of t) {
        for (let t of a.keys()) e.delete(t);
        for (let [t, n] of a.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return i;
      },
    };
    for (var r in n) Object.defineProperty(a, r, { enumerable: !0, get: n[r] });
    let o = e.r(90809)._(e.r(98183)),
      s = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: a } = e,
        n = e.protocol || "",
        r = e.pathname || "",
        l = e.hash || "",
        i = e.query || "",
        c = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : a &&
            ((c = t + (~a.indexOf(":") ? `[${a}]` : a)),
            e.port && (c += ":" + e.port)),
        i && "object" == typeof i && (i = String(o.urlQueryToSearchParams(i))));
      let h = e.search || (i && `?${i}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || s.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), r && "/" !== r[0] && (r = "/" + r))
          : c || (c = ""),
        l && "#" !== l[0] && (l = "#" + l),
        h && "?" !== h[0] && (h = "?" + h),
        (r = r.replace(/[?#]/g, encodeURIComponent)),
        (h = h.replace("#", "%23")),
        `${n}${c}${r}${h}${l}`
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
      return l(e);
    }
  },
  18581,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let n = e.r(71645);
    function r(e, t) {
      let a = (0, n.useRef)(null),
        r = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = a.current;
            e && ((a.current = null), e());
            let t = r.current;
            t && ((r.current = null), t());
          } else (e && (a.current = o(e, n)), t && (r.current = o(t, n)));
        },
        [e, t],
      );
    }
    function o(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let a = e(t);
        return "function" == typeof a ? a : () => e(null);
      }
    }
    ("function" == typeof a.default ||
      ("object" == typeof a.default && null !== a.default)) &&
      void 0 === a.default.__esModule &&
      (Object.defineProperty(a.default, "__esModule", { value: !0 }),
      Object.assign(a.default, a),
      (t.exports = a.default));
  },
  18967,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return f;
      },
      MiddlewareNotFoundError: function () {
        return b;
      },
      MissingStaticPage: function () {
        return y;
      },
      NormalizeError: function () {
        return x;
      },
      PageNotFoundError: function () {
        return N;
      },
      SP: function () {
        return C;
      },
      ST: function () {
        return T;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return s;
      },
      getDisplayName: function () {
        return m;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return h;
      },
      isAbsoluteUrl: function () {
        return i;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return u;
      },
      stringifyError: function () {
        return A;
      },
    };
    for (var r in n) Object.defineProperty(a, r, { enumerable: !0, get: n[r] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(e) {
      let t,
        a = !1;
      return (...n) => (a || ((a = !0), (t = e(...n))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      i = (e) => l.test(e);
    function c() {
      let { protocol: e, hostname: t, port: a } = window.location;
      return `${e}//${t}${a ? ":" + a : ""}`;
    }
    function h() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function m(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function u(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function p(e, t) {
      let a = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await p(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (a && d(a)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${m(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let C = "undefined" != typeof performance,
      T =
        C &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class f extends Error {}
    class x extends Error {}
    class N extends Error {
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
    class b extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function A(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(18967),
      r = e.r(52817);
    function o(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          a = new URL(e, t);
        return a.origin === t && (0, r.hasBasePath)(a.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  22016,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return f;
      },
      useLinkStatus: function () {
        return N;
      },
    };
    for (var r in n) Object.defineProperty(a, r, { enumerable: !0, get: n[r] });
    let o = e.r(90809),
      s = e.r(43476),
      l = o._(e.r(71645)),
      i = e.r(95057),
      c = e.r(8372),
      h = e.r(18581),
      m = e.r(18967),
      d = e.r(5550);
    e.r(33525);
    let u = e.r(91949),
      p = e.r(73668),
      C = e.r(65165);
    function T(e) {
      return "string" == typeof e ? e : (0, i.formatUrl)(e);
    }
    function f(t) {
      var a;
      let n,
        r,
        o,
        [i, f] = (0, l.useOptimistic)(u.IDLE_LINK_STATUS),
        N = (0, l.useRef)(null),
        {
          href: y,
          as: b,
          children: A,
          prefetch: E = null,
          passHref: O,
          replace: R,
          shallow: P,
          scroll: W,
          onClick: g,
          onMouseEnter: j,
          onTouchStart: v,
          legacyBehavior: S = !1,
          onNavigate: w,
          ref: _,
          unstable_dynamicOnHover: L,
          ...I
        } = t;
      ((n = A),
        S &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, s.jsx)("a", { children: n })));
      let M = l.default.useContext(c.AppRouterContext),
        k = !1 !== E,
        B =
          !1 !== E
            ? null === (a = E) || "auto" === a
              ? C.FetchStrategy.PPR
              : C.FetchStrategy.Full
            : C.FetchStrategy.PPR,
        { href: D, as: U } = l.default.useMemo(() => {
          let e = T(y);
          return { href: e, as: b ? T(b) : e };
        }, [y, b]);
      if (S) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        r = l.default.Children.only(n);
      }
      let F = S ? r && "object" == typeof r && r.ref : _,
        X = l.default.useCallback(
          (e) => (
            null !== M &&
              (N.current = (0, u.mountLinkInstance)(e, D, M, B, k, f)),
            () => {
              (N.current &&
                ((0, u.unmountLinkForCurrentNavigation)(N.current),
                (N.current = null)),
                (0, u.unmountPrefetchableInstance)(e));
            }
          ),
          [k, D, M, B, f],
        ),
        H = {
          ref: (0, h.useMergedRef)(X, F),
          onClick(t) {
            (S || "function" != typeof g || g(t),
              S &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              !M ||
                t.defaultPrevented ||
                (function (t, a, n, r, o, s, i) {
                  if ("undefined" != typeof window) {
                    let c,
                      { nodeName: h } = t.currentTarget;
                    if (
                      ("A" === h.toUpperCase() &&
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
                    if (!(0, p.isLocalURL)(a)) {
                      o && (t.preventDefault(), location.replace(a));
                      return;
                    }
                    if ((t.preventDefault(), i)) {
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
                    let { dispatchNavigateAction: m } = e.r(99781);
                    l.default.startTransition(() => {
                      m(n || a, o ? "replace" : "push", s ?? !0, r.current);
                    });
                  }
                })(t, D, U, N, R, W, w));
          },
          onMouseEnter(e) {
            (S || "function" != typeof j || j(e),
              S &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              M && k && (0, u.onNavigationIntent)(e.currentTarget, !0 === L));
          },
          onTouchStart: function (e) {
            (S || "function" != typeof v || v(e),
              S &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              M && k && (0, u.onNavigationIntent)(e.currentTarget, !0 === L));
          },
        };
      return (
        (0, m.isAbsoluteUrl)(U)
          ? (H.href = U)
          : (S && !O && ("a" !== r.type || "href" in r.props)) ||
            (H.href = (0, d.addBasePath)(U)),
        (o = S
          ? l.default.cloneElement(r, H)
          : (0, s.jsx)("a", { ...I, ...H, children: n })),
        (0, s.jsx)(x.Provider, { value: i, children: o })
      );
    }
    e.r(84508);
    let x = (0, l.createContext)(u.IDLE_LINK_STATUS),
      N = () => (0, l.useContext)(x);
    ("function" == typeof a.default ||
      ("object" == typeof a.default && null !== a.default)) &&
      void 0 === a.default.__esModule &&
      (Object.defineProperty(a.default, "__esModule", { value: !0 }),
      Object.assign(a.default, a),
      (t.exports = a.default));
  },
  45872,
  (e) => {
    "use strict";
    var t = e.i(43476),
      a = e.i(22016),
      n = e.i(71645);
    function r({ title: e, items: r, titleClassName: o }) {
      let [s, l] = (0, n.useState)(!1);
      return (0, t.jsxs)("div", {
        className: "header-dropdown-container",
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
          (0, t.jsx)("a", {
            href: "#",
            className: `nav-item leading-tight text-center ${o || "neon-cyan"}`,
            children: e,
          }),
          s &&
            (0, t.jsx)("div", {
              className: "header-dropdown-menu",
              children: r.map((e, n) =>
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
                          a.default,
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
    let o = (0, e.i(75254).default)("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]);
    var s = e.i(37727);
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
      h = [
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
      m = [
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
      u = [
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
                    items: c,
                    titleClassName: "neon-orange",
                  }),
                  (0, t.jsx)(r, {
                    title: "Community",
                    items: l,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsxs)(a.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, t.jsx)("br", {}), "Prices"],
                  }),
                  (0, t.jsx)(a.default, {
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
                (0, t.jsx)(a.default, {
                  href: "/",
                  className: "nav-item neon-green",
                  children: "Home",
                }),
                (0, t.jsx)(a.default, {
                  href: "#",
                  className: "nav-item neon-orange",
                  children: "Stocks",
                }),
                (0, t.jsx)(a.default, {
                  href: "/main",
                  className: "nav-item neon-cyan",
                  children: "Crypto",
                }),
                (0, t.jsx)(a.default, {
                  href: "#",
                  className: "nav-item neon-blue",
                  children: "FUTURES AND COMMODITIES",
                }),
                (0, t.jsx)(a.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Options",
                }),
                (0, t.jsx)(a.default, {
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
                  items: h,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(r, {
                  title: "FX Matrix Analyzer",
                  items: u,
                  titleClassName: "neon-green",
                }),
                (0, t.jsx)(r, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "Las Vegas" }),
                      (0, t.jsx)("div", { children: "Stats" }),
                    ],
                  }),
                  items: m,
                  titleClassName: "neon-gold glow-text",
                }),
                (0, t.jsx)(r, {
                  title: (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", { children: "World" }),
                      (0, t.jsx)("div", { children: "Sports" }),
                    ],
                  }),
                  items: i,
                  titleClassName: "neon-blue",
                }),
                (0, t.jsx)(r, {
                  title: "Opinions",
                  items: d,
                  titleClassName: "neon-pink",
                }),
                (0, t.jsx)(a.default, {
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
                (0, t.jsx)(a.default, {
                  href: "#",
                  className: "nav-item neon-purple",
                  children: "Over-the-Counter (OTC)",
                }),
                (0, t.jsx)(a.default, {
                  href: "#",
                  className: "nav-item neon-gold",
                  children: "INDEX PROVIDERS",
                }),
                (0, t.jsx)(a.default, {
                  href: "#",
                  className: "nav-item neon-red",
                  children: "Mutual Funds and ETFs Data",
                }),
                (0, t.jsx)(a.default, {
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
    function C() {
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
                  : (0, t.jsx)(o, { size: 24 }),
              }),
            ],
          }),
          e &&
            (0, t.jsx)("div", {
              className: "mobile-menu",
              children: (0, t.jsxs)("nav", {
                className: "mobile-nav-links",
                children: [
                  (0, t.jsx)(a.default, {
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
                    items: l,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-orange",
                    children: "Stocks",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "/main",
                    className: "nav-item neon-cyan",
                    children: "Crypto",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "FUTURES AND COMMODITIES",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Options",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "BOND AND FIXED INCOME",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: ["Guilty", (0, t.jsx)("br", {}), "Pleasures"],
                    }),
                    items: h,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(r, {
                    title: "FX Matrix Analyzer",
                    items: u,
                    titleClassName: "neon-green",
                  }),
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "Las Vegas" }),
                        (0, t.jsx)("div", { children: "Stats" }),
                      ],
                    }),
                    items: m,
                    titleClassName: "neon-gold glow-text",
                  }),
                  (0, t.jsx)(r, {
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("div", { children: "World" }),
                        (0, t.jsx)("div", { children: "Sports" }),
                      ],
                    }),
                    items: i,
                    titleClassName: "neon-blue",
                  }),
                  (0, t.jsx)(r, {
                    title: "Opinions",
                    items: d,
                    titleClassName: "neon-pink",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-green",
                    children: "GLOBAL ECONOMIC AND MACRO DATA SOURCES",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-purple",
                    children: "Over-the-Counter (OTC)",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-gold",
                    children: "INDEX PROVIDERS",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-red",
                    children: "Mutual Funds and ETFs Data",
                  }),
                  (0, t.jsx)(a.default, {
                    href: "#",
                    className: "nav-item neon-blue",
                    children: "ALTERNATIVE DATA MARKETS",
                  }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsx)("div", { className: "mobile-menu-separator" }),
                  (0, t.jsxs)(a.default, {
                    href: "/compare-prices",
                    className: "nav-item neon-pink text-center leading-tight",
                    children: ["Compare", (0, t.jsx)("br", {}), "Prices"],
                  }),
                  (0, t.jsx)(a.default, {
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
    function T() {
      let e = (function () {
        let [e, t] = n.useState(void 0);
        return (
          n.useEffect(() => {
            let e = window.matchMedia("(max-width: 767px)"),
              a = () => {
                t(window.innerWidth < 768);
              };
            return (
              e.addEventListener("change", a),
              t(window.innerWidth < 768),
              () => e.removeEventListener("change", a)
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
              ? (0, t.jsx)(C, {})
              : (0, t.jsx)(p, {}),
      });
    }
    e.s(["Header", () => T], 45872);
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
  39872,
  (e) => {
    "use strict";
    var t = e.i(43476),
      a = e.i(71645),
      n = e.i(45872),
      r = e.i(93479),
      o = e.i(22016),
      s = e.i(71689);
    let l = [
      {
        name: "Wrapped Bitcoin",
        symbol: "wBTC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWBTC_CONTRACT",
      },
      {
        name: "Ren Bitcoin",
        symbol: "renBTC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xRENBTC_CONTRACT",
      },
      {
        name: "tBTC",
        symbol: "tBTC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xTBTC_CONTRACT",
      },
      {
        name: "sBTC (Synthetix)",
        symbol: "sBTC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xSBTC_CONTRACT",
      },
      {
        name: "pBTC (pNetwork)",
        symbol: "pBTC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xPBTC_CONTRACT",
      },
      {
        name: "Wrapped Ethereum",
        symbol: "wETH",
        hostChain: "Binance Smart Chain",
        contractPlaceholder: "0xWETH_BSC",
      },
      {
        name: "Wrapped Solana",
        symbol: "wSOL",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWSOL_CONTRACT",
      },
      {
        name: "Wrapped Avalanche",
        symbol: "wAVAX",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWAVAX_CONTRACT",
      },
      {
        name: "Wrapped TerraUSD Classic (WBTC-like)",
        symbol: "wUSTC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWUSTC_CONTRACT",
      },
      {
        name: "Wrapped USDC",
        symbol: "wUSDC",
        hostChain: "Solana",
        contractPlaceholder: "SOL_USDC_CONTRACT",
      },
      {
        name: "Wrapped USDT",
        symbol: "wUSDT",
        hostChain: "Avalanche",
        contractPlaceholder: "AVAX_USDT_CONTRACT",
      },
      {
        name: "Wrapped Litecoin",
        symbol: "wLTC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWLTC_CONTRACT",
      },
      {
        name: "Wrapped Dogecoin",
        symbol: "wDOGE",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWDOGE_CONTRACT",
      },
      {
        name: "Wrapped XRP",
        symbol: "wXRP",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWXRP_CONTRACT",
      },
      {
        name: "Wrapped ADA",
        symbol: "wADA",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWADA_CONTRACT",
      },
      {
        name: "Wrapped DOT",
        symbol: "wDOT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWDOT_CONTRACT",
      },
      {
        name: "Wrapped BCH",
        symbol: "wBCH",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWBCH_CONTRACT",
      },
      {
        name: "Wrapped BNB",
        symbol: "wBNB",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWBNB_CONTRACT",
      },
      {
        name: "Wrapped XLM",
        symbol: "wXLM",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWXLM_CONTRACT",
      },
      {
        name: "Wrapped MATIC",
        symbol: "wMATIC",
        hostChain: "Binance Smart Chain",
        contractPlaceholder: "0xWMATIC_BSC",
      },
      {
        name: "Wrapped AAVE",
        symbol: "wAAVE",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWAAVE_CONTRACT",
      },
      {
        name: "Wrapped LINK",
        symbol: "wLINK",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWLINK_CONTRACT",
      },
      {
        name: "Wrapped UNI",
        symbol: "wUNI",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWUNI_CONTRACT",
      },
      {
        name: "Wrapped SUSHI",
        symbol: "wSUSHI",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWSUSHI_CONTRACT",
      },
      {
        name: "Wrapped COMP",
        symbol: "wCOMP",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWCOMP_CONTRACT",
      },
      {
        name: "Wrapped MKR",
        symbol: "wMKR",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWMKR_CONTRACT",
      },
      {
        name: "Wrapped REN (cross-chain)",
        symbol: "wREN",
        hostChain: "Solana",
        contractPlaceholder: "SOL_WREN_CONTRACT",
      },
      {
        name: "Wrapped ZEC",
        symbol: "wZEC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWZEC_CONTRACT",
      },
      {
        name: "Wrapped XMR",
        symbol: "wXMR",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWXMR_CONTRACT",
      },
      {
        name: "Wrapped EOS",
        symbol: "wEOS",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWEOS_CONTRACT",
      },
      {
        name: "Wrapped NEO",
        symbol: "wNEO",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWNEO_CONTRACT",
      },
      {
        name: "Wrapped FIL",
        symbol: "wFIL",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWFIL_CONTRACT",
      },
      {
        name: "Wrapped ICP",
        symbol: "wICP",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWICP_CONTRACT",
      },
      {
        name: "Wrapped SUI",
        symbol: "wSUI",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWSUI_CONTRACT",
      },
      {
        name: "Wrapped APTOS",
        symbol: "wAPT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWAPT_CONTRACT",
      },
      {
        name: "Wrapped LUNA Classic",
        symbol: "wLUNC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWLUNC_CONTRACT",
      },
      {
        name: "Wrapped EGLD",
        symbol: "wEGLD",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWEGLD_CONTRACT",
      },
      {
        name: "Wrapped TRX",
        symbol: "wTRX",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWTRX_CONTRACT",
      },
      {
        name: "Wrapped XTZ",
        symbol: "wXTZ",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWXTZ_CONTRACT",
      },
      {
        name: "Wrapped CELO",
        symbol: "wCELO",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWCELO_CONTRACT",
      },
      {
        name: "Wrapped SOL (Ren)",
        symbol: "renSOL",
        hostChain: "Ethereum",
        contractPlaceholder: "0xRENSOL_CONTRACT",
      },
      {
        name: "Wrapped KSM",
        symbol: "wKSM",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWKSM_CONTRACT",
      },
      {
        name: "Wrapped KLAY",
        symbol: "wKLAY",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWKLAY_CONTRACT",
      },
      {
        name: "Wrapped ONE",
        symbol: "wONE",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWONE_CONTRACT",
      },
      {
        name: "Wrapped HBAR",
        symbol: "wHBAR",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWHBAR_CONTRACT",
      },
      {
        name: "Wrapped VET",
        symbol: "wVET",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWVET_CONTRACT",
      },
      {
        name: "Wrapped BTT",
        symbol: "wBTT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWBTT_CONTRACT",
      },
      {
        name: "Wrapped RVN",
        symbol: "wRVN",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWRVN_CONTRACT",
      },
      {
        name: "Wrapped NANO",
        symbol: "wNANO",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWNANO_CONTRACT",
      },
      {
        name: "Wrapped ZIL",
        symbol: "wZIL",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWZIL_CONTRACT",
      },
      {
        name: "Wrapped QTUM",
        symbol: "wQTUM",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWQTUM_CONTRACT",
      },
      {
        name: "Wrapped IOTA",
        symbol: "wIOTA",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWIOTA_CONTRACT",
      },
      {
        name: "Wrapped HNT",
        symbol: "wHNT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWHNT_CONTRACT",
      },
      {
        name: "Wrapped CHZ",
        symbol: "wCHZ",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWCHZ_CONTRACT",
      },
      {
        name: "Wrapped RUNE",
        symbol: "wRUNE",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWRUNE_CONTRACT",
      },
      {
        name: "Wrapped GRT",
        symbol: "wGRT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWGRT_CONTRACT",
      },
      {
        name: "Wrapped OCEAN",
        symbol: "wOCEAN",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWOCEAN_CONTRACT",
      },
      {
        name: "Wrapped XEM",
        symbol: "wXEM",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWXEM_CONTRACT",
      },
      {
        name: "Wrapped BAT",
        symbol: "wBAT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWBAT_CONTRACT",
      },
      {
        name: "Wrapped NMR",
        symbol: "wNMR",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWNMR_CONTRACT",
      },
      {
        name: "Wrapped BNT",
        symbol: "wBNT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWBNT_CONTRACT",
      },
      {
        name: "Wrapped CEL",
        symbol: "wCEL",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWCEL_CONTRACT",
      },
      {
        name: "Wrapped RENZ",
        symbol: "wRENZ",
        hostChain: "Polygon",
        contractPlaceholder: "POLY_WRENZ_CONTRACT",
      },
      {
        name: "Wrapped mBTC",
        symbol: "mBTC",
        hostChain: "Multi-chain",
        contractPlaceholder: "MULTI_MBTC_CONTRACT",
      },
      {
        name: "Wrapped sETH",
        symbol: "sETH",
        hostChain: "Synthetic (Synthetix)",
        contractPlaceholder: "0xSETH_CONTRACT",
      },
      {
        name: "Wrapped yUSD",
        symbol: "wyUSD",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWYUSD_CONTRACT",
      },
      {
        name: "Wrapped rETH",
        symbol: "rETH",
        hostChain: "Ethereum",
        contractPlaceholder: "0xRETH_CONTRACT",
      },
      {
        name: "Wrapped beETH",
        symbol: "beETH",
        hostChain: "BSC",
        contractPlaceholder: "0xBEETH_BSC",
      },
      {
        name: "Wrapped stETH",
        symbol: "stETH",
        hostChain: "Ethereum",
        contractPlaceholder: "0xSTETH_CONTRACT",
      },
      {
        name: "Wrapped cvxCRV",
        symbol: "wCVX",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWCVX_CONTRACT",
      },
      {
        name: "Wrapped dYdX-bridge token",
        symbol: "wDYDX",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWDYDX_CONTRACT",
      },
      {
        name: "Wrapped BAL",
        symbol: "wBAL",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWBAL_CONTRACT",
      },
      {
        name: "Wrapped 1INCH",
        symbol: "w1INCH",
        hostChain: "Ethereum",
        contractPlaceholder: "0xW1INCH_CONTRACT",
      },
      {
        name: "Wrapped UMA",
        symbol: "wUMA",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWUMA_CONTRACT",
      },
      {
        name: "Wrapped SXP",
        symbol: "wSXP",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWSXP_CONTRACT",
      },
      {
        name: "Wrapped NEXO",
        symbol: "wNEXO",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWNEXO_CONTRACT",
      },
      {
        name: "Wrapped HUSD",
        symbol: "wHUSD",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWHUSD_CONTRACT",
      },
      {
        name: "Wrapped USDP (Pax)",
        symbol: "wUSDP",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWUSDP_CONTRACT",
      },
      {
        name: "Wrapped EURS",
        symbol: "wEURS",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWEURS_CONTRACT",
      },
      {
        name: "Wrapped PAXG",
        symbol: "wPAXG",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWPAXG_CONTRACT",
      },
      {
        name: "Wrapped GOLD (tokenized)",
        symbol: "wGOLD",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWGOLD_CONTRACT",
      },
      {
        name: "Wrapped SILVER",
        symbol: "wSILV",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWSILV_CONTRACT",
      },
      {
        name: "Wrapped YFI",
        symbol: "wYFI",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWYFI_CONTRACT",
      },
      {
        name: "Wrapped SFI",
        symbol: "wSFI",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWSFI_CONTRACT",
      },
      {
        name: "Wrapped DGB",
        symbol: "wDGB",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWDGB_CONTRACT",
      },
      {
        name: "Wrapped XVS",
        symbol: "wXVS",
        hostChain: "Binance Smart Chain",
        contractPlaceholder: "0xWXVS_BSC",
      },
      {
        name: "Wrapped ZRX",
        symbol: "wZRX",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWZRX_CONTRACT",
      },
      {
        name: "Wrapped ANT",
        symbol: "wANT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWANT_CONTRACT",
      },
      {
        name: "Wrapped OXT",
        symbol: "wOXT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWOXT_CONTRACT",
      },
      {
        name: "Wrapped TORN",
        symbol: "wTORN",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWTORN_CONTRACT",
      },
      {
        name: "Wrapped FTM",
        symbol: "wFTM",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWFTM_CONTRACT",
      },
      {
        name: "Wrapped AION",
        symbol: "wAION",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWAION_CONTRACT",
      },
      {
        name: "Wrapped LRC",
        symbol: "wLRC",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWLRC_CONTRACT",
      },
      {
        name: "Wrapped RENBTC (on Solana)",
        symbol: "solRenBTC",
        hostChain: "Solana",
        contractPlaceholder: "SOL_RENBTC_CONTRACT",
      },
      {
        name: "Wrapped BTC (on Polygon)",
        symbol: "pBTC",
        hostChain: "Polygon",
        contractPlaceholder: "POLY_PBTC_CONTRACT",
      },
      {
        name: "Wrapped ETH (on Avalanche)",
        symbol: "aWETH",
        hostChain: "Avalanche",
        contractPlaceholder: "AVAX_AWETH_CONTRACT",
      },
      {
        name: "Wrapped USDN",
        symbol: "wUSDN",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWUSDN_CONTRACT",
      },
      {
        name: "Wrapped sUSDT",
        symbol: "wsUSDT",
        hostChain: "Multi-chain",
        contractPlaceholder: "MULTI_WSUSDT_CONTRACT",
      },
      {
        name: "Wrapped FRACTAL-Asset",
        symbol: "wFRACT",
        hostChain: "Ethereum",
        contractPlaceholder: "0xWFRACT_CONTRACT",
      },
      {
        name: "Wrapped Basket Token",
        symbol: "wBASKET",
        hostChain: "Multi-chain",
        contractPlaceholder: "MULTI_WBASKET_CONTRACT",
      },
    ];
    function i() {
      let [e, i] = (0, a.useState)(""),
        c = l.filter(
          (t) =>
            t.name.toLowerCase().includes(e.toLowerCase()) ||
            t.symbol.toLowerCase().includes(e.toLowerCase()) ||
            t.hostChain.toLowerCase().includes(e.toLowerCase()),
        );
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
                  children: "Wrapped Assets Encyclopedia (Top 100)",
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-lg text-gray-300 text-center max-w-3xl mx-auto",
                  children:
                    "Wrapped assets are tokens that represent a cryptocurrency from another blockchain. They are pegged 1:1 to the original asset, enabling cross-chain interoperability and DeFi participation.",
                }),
                (0, t.jsx)("div", {
                  className: "w-full mt-4",
                  children: (0, t.jsx)(r.Input, {
                    type: "text",
                    placeholder: "Search all wrapped assets...",
                    value: e,
                    onChange: (e) => i(e.target.value),
                    className:
                      "w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "w-full space-y-12 mt-8",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "info-table-card",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-2xl font-bold mb-4 neon-cyan",
                          children: "Top 100 Wrapped Assets",
                        }),
                        (0, t.jsx)("div", {
                          className: "overflow-x-auto",
                          children: (0, t.jsxs)("table", {
                            className: "info-table w-full",
                            children: [
                              (0, t.jsx)("thead", {
                                children: (0, t.jsxs)("tr", {
                                  children: [
                                    (0, t.jsx)("th", { children: "#" }),
                                    (0, t.jsx)("th", { children: "Name" }),
                                    (0, t.jsx)("th", { children: "Symbol" }),
                                    (0, t.jsx)("th", {
                                      children: "Host Chain",
                                    }),
                                    (0, t.jsx)("th", {
                                      children:
                                        "Contract Address (Placeholder)",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("tbody", {
                                children: c.map((e, a) =>
                                  (0, t.jsxs)(
                                    "tr",
                                    {
                                      className: "hover:bg-white/5",
                                      children: [
                                        (0, t.jsx)("td", {
                                          className: "neon-orange",
                                          children: a + 1,
                                        }),
                                        (0, t.jsx)("td", {
                                          className: "font-bold",
                                          children: e.name,
                                        }),
                                        (0, t.jsx)("td", {
                                          className: "text-gray-300",
                                          children: e.symbol,
                                        }),
                                        (0, t.jsx)("td", {
                                          className: "text-gray-300",
                                          children: e.hostChain,
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "text-gray-400 font-mono text-xs",
                                          children: e.contractPlaceholder,
                                        }),
                                      ],
                                    },
                                    `${e.name}-${a}`,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    0 === c.length &&
                      (0, t.jsx)("p", {
                        className: "text-center text-gray-400 mt-8",
                        children:
                          "No wrapped assets found matching your search.",
                      }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsxs)(o.default, {
            href: "/main",
            className:
              "fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2",
            children: [(0, t.jsx)(s.ArrowLeft, { size: 16 }), "Back"],
          }),
        ],
      });
    }
    e.s(["default", () => i]);
  },
]);
