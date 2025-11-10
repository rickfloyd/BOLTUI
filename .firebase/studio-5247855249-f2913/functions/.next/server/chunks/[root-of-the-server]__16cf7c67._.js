module.exports = [
  18622,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
    );
  },
  56704,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-async-storage.external.js"),
    );
  },
  32319,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );
  },
  24725,
  (e, t, r) => {
    t.exports = e.x(
      "next/dist/server/app-render/after-task-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );
  },
  93695,
  (e, t, r) => {
    t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  43800,
  (e) => {
    "use strict";
    var t = e.i(47909),
      r = e.i(74017),
      n = e.i(96250),
      a = e.i(59756),
      s = e.i(61916),
      o = e.i(14444),
      i = e.i(37092),
      l = e.i(69741),
      u = e.i(16795),
      d = e.i(87718),
      p = e.i(95169),
      c = e.i(47587),
      h = e.i(66012),
      x = e.i(70101),
      f = e.i(26937),
      R = e.i(10372),
      v = e.i(93695);
    e.i(52474);
    var g = e.i(220),
      w = e.i(89171);
    async function m(e) {
      let t,
        { searchParams: r } = new URL(e.url),
        n = r.get("symbol") || "BINANCE:BTCUSDT",
        a = r.get("interval") || "60",
        s = process.env.FINNHUB_API_KEY;
      if (!s)
        return w.NextResponse.json(
          { error: "API key for Finnhub is not configured." },
          { status: 500 },
        );
      let o = Math.floor(Date.now() / 1e3);
      switch (a) {
        case "1":
          t = o - 18e3;
          break;
        case "60":
        default:
          t = o - 108e4;
          break;
        case "D":
          t = o - 2592e4;
      }
      let i = `https://finnhub.io/api/v1/crypto/candle?symbol=${n}&resolution=${a}&from=${t}&to=${o}&token=${s}`;
      try {
        let e = await fetch(i);
        if (!e.ok) {
          let t = await e.text();
          return (
            console.error("Finnhub API Error:", t),
            w.NextResponse.json(
              { error: `Finnhub API error: ${e.statusText}` },
              { status: e.status },
            )
          );
        }
        let t = await e.text();
        if (!t)
          return w.NextResponse.json(
            { error: "Finnhub returned an empty response." },
            { status: 500 },
          );
        let r = JSON.parse(t);
        if ("ok" !== r.s)
          return w.NextResponse.json(
            { error: "Finnhub returned no data for the symbol." },
            { status: 404 },
          );
        return w.NextResponse.json(r);
      } catch (e) {
        return (
          console.error("Failed to fetch from Finnhub API:", e),
          w.NextResponse.json(
            { error: "Failed to fetch candle data from Finnhub." },
            { status: 500 },
          )
        );
      }
    }
    e.s(["GET", () => m], 83617);
    var E = e.i(83617);
    let b = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/api/finnhub/route",
          pathname: "/api/finnhub",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/api/finnhub/route.ts",
        nextConfigOutput: "",
        userland: E,
      }),
      { workAsyncStorage: y, workUnitAsyncStorage: C, serverHooks: A } = b;
    function N() {
      return (0, n.patchFetch)({
        workAsyncStorage: y,
        workUnitAsyncStorage: C,
      });
    }
    async function P(e, t, n) {
      b.isDev &&
        (0, a.addRequestMeta)(
          e,
          "devRequestTimingInternalsEnd",
          process.hrtime.bigint(),
        );
      let w = "/api/finnhub/route";
      w = w.replace(/\/index$/, "") || "/";
      let m = await b.prepare(e, t, { srcPage: w, multiZoneDraftMode: !1 });
      if (!m)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == n.waitUntil || n.waitUntil.call(n, Promise.resolve()),
          null
        );
      let {
          buildId: E,
          params: y,
          nextConfig: C,
          parsedUrl: A,
          isDraftMode: N,
          prerenderManifest: P,
          routerServerContext: T,
          isOnDemandRevalidate: k,
          revalidateOnlyGenerated: j,
          resolvedPathname: I,
          clientReferenceManifest: O,
          serverActionsManifest: S,
        } = m,
        _ = (0, l.normalizeAppPath)(w),
        q = !!(P.dynamicRoutes[_] || P.routes[I]),
        U = async () => (
          (null == T ? void 0 : T.render404)
            ? await T.render404(e, t, A, !1)
            : t.end("This page could not be found"),
          null
        );
      if (q && !N) {
        let e = !!P.routes[I],
          t = P.dynamicRoutes[_];
        if (t && !1 === t.fallback && !e) {
          if (C.experimental.adapterPath) return await U();
          throw new v.NoFallbackError();
        }
      }
      let F = null;
      !q || b.isDev || N || (F = "/index" === (F = I) ? "/" : F);
      let H = !0 === b.isDev || !q,
        M = q && !H;
      S &&
        O &&
        (0, o.setReferenceManifestsSingleton)({
          page: w,
          clientReferenceManifest: O,
          serverActionsManifest: S,
          serverModuleMap: (0, i.createServerModuleMap)({
            serverActionsManifest: S,
          }),
        });
      let D = e.method || "GET",
        $ = (0, s.getTracer)(),
        K = $.getActiveScopeSpan(),
        B = {
          params: y,
          prerenderManifest: P,
          renderOpts: {
            experimental: { authInterrupts: !!C.experimental.authInterrupts },
            cacheComponents: !!C.cacheComponents,
            supportsDynamicResponse: H,
            incrementalCache: (0, a.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles: C.cacheLife,
            waitUntil: n.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, n) =>
              b.onRequestError(e, t, n, T),
          },
          sharedContext: { buildId: E },
        },
        L = new u.NodeNextRequest(e),
        G = new u.NodeNextResponse(t),
        V = d.NextRequestAdapter.fromNodeNextRequest(
          L,
          (0, d.signalFromNodeResponse)(t),
        );
      try {
        let o = async (e) =>
            b.handle(V, B).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = $.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== p.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let n = r.get("next.route");
              if (n) {
                let t = `${D} ${n}`;
                (e.setAttributes({
                  "next.route": n,
                  "http.route": n,
                  "next.span_name": t,
                }),
                  e.updateName(t));
              } else e.updateName(`${D} ${w}`);
            }),
          i = !!(0, a.getRequestMeta)(e, "minimalMode"),
          l = async (a) => {
            var s, l;
            let u = async ({ previousCacheEntry: r }) => {
                try {
                  if (!i && k && j && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let s = await o(a);
                  e.fetchMetrics = B.renderOpts.fetchMetrics;
                  let l = B.renderOpts.pendingWaitUntil;
                  l && n.waitUntil && (n.waitUntil(l), (l = void 0));
                  let u = B.renderOpts.collectedTags;
                  if (!q)
                    return (
                      await (0, h.sendResponse)(
                        L,
                        G,
                        s,
                        B.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await s.blob(),
                      t = (0, x.toNodeOutgoingHttpHeaders)(s.headers);
                    (u && (t[R.NEXT_CACHE_TAGS_HEADER] = u),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type));
                    let r =
                        void 0 !== B.renderOpts.collectedRevalidate &&
                        !(
                          B.renderOpts.collectedRevalidate >= R.INFINITE_CACHE
                        ) &&
                        B.renderOpts.collectedRevalidate,
                      n =
                        void 0 === B.renderOpts.collectedExpire ||
                        B.renderOpts.collectedExpire >= R.INFINITE_CACHE
                          ? void 0
                          : B.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: g.CachedRouteKind.APP_ROUTE,
                        status: s.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: n },
                    };
                  }
                } catch (t) {
                  throw (
                    (null == r ? void 0 : r.isStale) &&
                      (await b.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: w,
                          routeType: "route",
                          revalidateReason: (0, c.getRevalidateReason)({
                            isStaticGeneration: M,
                            isOnDemandRevalidate: k,
                          }),
                        },
                        T,
                      )),
                    t
                  );
                }
              },
              d = await b.handleResponse({
                req: e,
                nextConfig: C,
                cacheKey: F,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: P,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: k,
                revalidateOnlyGenerated: j,
                responseGenerator: u,
                waitUntil: n.waitUntil,
                isMinimalMode: i,
              });
            if (!q) return null;
            if (
              (null == d || null == (s = d.value) ? void 0 : s.kind) !==
              g.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == d || null == (l = d.value) ? void 0 : l.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (i ||
              t.setHeader(
                "x-nextjs-cache",
                k
                  ? "REVALIDATED"
                  : d.isMiss
                    ? "MISS"
                    : d.isStale
                      ? "STALE"
                      : "HIT",
              ),
              N &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let p = (0, x.fromNodeOutgoingHttpHeaders)(d.value.headers);
            return (
              (i && q) || p.delete(R.NEXT_CACHE_TAGS_HEADER),
              !d.cacheControl ||
                t.getHeader("Cache-Control") ||
                p.get("Cache-Control") ||
                p.set(
                  "Cache-Control",
                  (0, f.getCacheControlHeader)(d.cacheControl),
                ),
              await (0, h.sendResponse)(
                L,
                G,
                new Response(d.value.body, {
                  headers: p,
                  status: d.value.status || 200,
                }),
              ),
              null
            );
          };
        K
          ? await l(K)
          : await $.withPropagatedContext(e.headers, () =>
              $.trace(
                p.BaseServerSpan.handleRequest,
                {
                  spanName: `${D} ${w}`,
                  kind: s.SpanKind.SERVER,
                  attributes: { "http.method": D, "http.target": e.url },
                },
                l,
              ),
            );
      } catch (t) {
        if (
          (t instanceof v.NoFallbackError ||
            (await b.onRequestError(e, t, {
              routerKind: "App Router",
              routePath: _,
              routeType: "route",
              revalidateReason: (0, c.getRevalidateReason)({
                isStaticGeneration: M,
                isOnDemandRevalidate: k,
              }),
            })),
          q)
        )
          throw t;
        return (
          await (0, h.sendResponse)(L, G, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        () => P,
        "patchFetch",
        () => N,
        "routeModule",
        () => b,
        "serverHooks",
        () => A,
        "workAsyncStorage",
        () => y,
        "workUnitAsyncStorage",
        () => C,
      ],
      43800,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16cf7c67._.js.map
