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
  62376,
  (e) => {
    "use strict";
    var t = e.i(47909),
      r = e.i(74017),
      a = e.i(96250),
      n = e.i(59756),
      o = e.i(61916),
      s = e.i(14444),
      i = e.i(37092),
      l = e.i(69741),
      d = e.i(16795),
      u = e.i(87718),
      c = e.i(95169),
      p = e.i(47587),
      h = e.i(66012),
      x = e.i(70101),
      R = e.i(26937),
      v = e.i(10372),
      f = e.i(93695);
    e.i(52474);
    var g = e.i(220),
      E = e.i(89171);
    async function m() {
      let e = process.env.COINGECKO_API_KEY;
      if (!e)
        return E.NextResponse.json(
          {
            error:
              "API key is not configured. Please set COINGECKO_API_KEY in your environment variables.",
          },
          { status: 500 },
        );
      try {
        let t = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false",
          { headers: { Accept: "application/json", "x-cg-demo-api-key": e } },
        );
        if (!t.ok) {
          let e = await t.text();
          return (
            console.error("CoinGecko API Error:", e),
            E.NextResponse.json(
              { error: `CoinGecko API error: ${t.statusText}` },
              { status: t.status },
            )
          );
        }
        let r = await t.json();
        return E.NextResponse.json(r);
      } catch (e) {
        return (
          console.error("Failed to fetch from CoinGecko API:", e),
          E.NextResponse.json(
            { error: "Failed to fetch coins data." },
            { status: 500 },
          )
        );
      }
    }
    e.s(["GET", () => m], 99378);
    var w = e.i(99378);
    let C = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/api/coingecko/coins/route",
          pathname: "/api/coingecko/coins",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/api/coingecko/coins/route.ts",
        nextConfigOutput: "",
        userland: w,
      }),
      { workAsyncStorage: y, workUnitAsyncStorage: A, serverHooks: k } = C;
    function P() {
      return (0, a.patchFetch)({
        workAsyncStorage: y,
        workUnitAsyncStorage: A,
      });
    }
    async function N(e, t, a) {
      C.isDev &&
        (0, n.addRequestMeta)(
          e,
          "devRequestTimingInternalsEnd",
          process.hrtime.bigint(),
        );
      let E = "/api/coingecko/coins/route";
      E = E.replace(/\/index$/, "") || "/";
      let m = await C.prepare(e, t, { srcPage: E, multiZoneDraftMode: !1 });
      if (!m)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
          null
        );
      let {
          buildId: w,
          params: y,
          nextConfig: A,
          parsedUrl: k,
          isDraftMode: P,
          prerenderManifest: N,
          routerServerContext: b,
          isOnDemandRevalidate: _,
          revalidateOnlyGenerated: T,
          resolvedPathname: O,
          clientReferenceManifest: j,
          serverActionsManifest: I,
        } = m,
        S = (0, l.normalizeAppPath)(E),
        q = !!(N.dynamicRoutes[S] || N.routes[O]),
        H = async () => (
          (null == b ? void 0 : b.render404)
            ? await b.render404(e, t, k, !1)
            : t.end("This page could not be found"),
          null
        );
      if (q && !P) {
        let e = !!N.routes[O],
          t = N.dynamicRoutes[S];
        if (t && !1 === t.fallback && !e) {
          if (A.experimental.adapterPath) return await H();
          throw new f.NoFallbackError();
        }
      }
      let M = null;
      !q || C.isDev || P || (M = "/index" === (M = O) ? "/" : M);
      let U = !0 === C.isDev || !q,
        D = q && !U;
      I &&
        j &&
        (0, s.setReferenceManifestsSingleton)({
          page: E,
          clientReferenceManifest: j,
          serverActionsManifest: I,
          serverModuleMap: (0, i.createServerModuleMap)({
            serverActionsManifest: I,
          }),
        });
      let K = e.method || "GET",
        F = (0, o.getTracer)(),
        $ = F.getActiveScopeSpan(),
        G = {
          params: y,
          prerenderManifest: N,
          renderOpts: {
            experimental: { authInterrupts: !!A.experimental.authInterrupts },
            cacheComponents: !!A.cacheComponents,
            supportsDynamicResponse: U,
            incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles: A.cacheLife,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a) =>
              C.onRequestError(e, t, a, b),
          },
          sharedContext: { buildId: w },
        },
        B = new d.NodeNextRequest(e),
        L = new d.NodeNextResponse(t),
        V = u.NextRequestAdapter.fromNodeNextRequest(
          B,
          (0, u.signalFromNodeResponse)(t),
        );
      try {
        let s = async (e) =>
            C.handle(V, G).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = F.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== c.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let a = r.get("next.route");
              if (a) {
                let t = `${K} ${a}`;
                (e.setAttributes({
                  "next.route": a,
                  "http.route": a,
                  "next.span_name": t,
                }),
                  e.updateName(t));
              } else e.updateName(`${K} ${E}`);
            }),
          i = !!(0, n.getRequestMeta)(e, "minimalMode"),
          l = async (n) => {
            var o, l;
            let d = async ({ previousCacheEntry: r }) => {
                try {
                  if (!i && _ && T && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let o = await s(n);
                  e.fetchMetrics = G.renderOpts.fetchMetrics;
                  let l = G.renderOpts.pendingWaitUntil;
                  l && a.waitUntil && (a.waitUntil(l), (l = void 0));
                  let d = G.renderOpts.collectedTags;
                  if (!q)
                    return (
                      await (0, h.sendResponse)(
                        B,
                        L,
                        o,
                        G.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await o.blob(),
                      t = (0, x.toNodeOutgoingHttpHeaders)(o.headers);
                    (d && (t[v.NEXT_CACHE_TAGS_HEADER] = d),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type));
                    let r =
                        void 0 !== G.renderOpts.collectedRevalidate &&
                        !(
                          G.renderOpts.collectedRevalidate >= v.INFINITE_CACHE
                        ) &&
                        G.renderOpts.collectedRevalidate,
                      a =
                        void 0 === G.renderOpts.collectedExpire ||
                        G.renderOpts.collectedExpire >= v.INFINITE_CACHE
                          ? void 0
                          : G.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: g.CachedRouteKind.APP_ROUTE,
                        status: o.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: a },
                    };
                  }
                } catch (t) {
                  throw (
                    (null == r ? void 0 : r.isStale) &&
                      (await C.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: E,
                          routeType: "route",
                          revalidateReason: (0, p.getRevalidateReason)({
                            isStaticGeneration: D,
                            isOnDemandRevalidate: _,
                          }),
                        },
                        b,
                      )),
                    t
                  );
                }
              },
              u = await C.handleResponse({
                req: e,
                nextConfig: A,
                cacheKey: M,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: N,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: _,
                revalidateOnlyGenerated: T,
                responseGenerator: d,
                waitUntil: a.waitUntil,
                isMinimalMode: i,
              });
            if (!q) return null;
            if (
              (null == u || null == (o = u.value) ? void 0 : o.kind) !==
              g.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == u || null == (l = u.value) ? void 0 : l.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (i ||
              t.setHeader(
                "x-nextjs-cache",
                _
                  ? "REVALIDATED"
                  : u.isMiss
                    ? "MISS"
                    : u.isStale
                      ? "STALE"
                      : "HIT",
              ),
              P &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let c = (0, x.fromNodeOutgoingHttpHeaders)(u.value.headers);
            return (
              (i && q) || c.delete(v.NEXT_CACHE_TAGS_HEADER),
              !u.cacheControl ||
                t.getHeader("Cache-Control") ||
                c.get("Cache-Control") ||
                c.set(
                  "Cache-Control",
                  (0, R.getCacheControlHeader)(u.cacheControl),
                ),
              await (0, h.sendResponse)(
                B,
                L,
                new Response(u.value.body, {
                  headers: c,
                  status: u.value.status || 200,
                }),
              ),
              null
            );
          };
        $
          ? await l($)
          : await F.withPropagatedContext(e.headers, () =>
              F.trace(
                c.BaseServerSpan.handleRequest,
                {
                  spanName: `${K} ${E}`,
                  kind: o.SpanKind.SERVER,
                  attributes: { "http.method": K, "http.target": e.url },
                },
                l,
              ),
            );
      } catch (t) {
        if (
          (t instanceof f.NoFallbackError ||
            (await C.onRequestError(e, t, {
              routerKind: "App Router",
              routePath: S,
              routeType: "route",
              revalidateReason: (0, p.getRevalidateReason)({
                isStaticGeneration: D,
                isOnDemandRevalidate: _,
              }),
            })),
          q)
        )
          throw t;
        return (
          await (0, h.sendResponse)(B, L, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        () => N,
        "patchFetch",
        () => P,
        "routeModule",
        () => C,
        "serverHooks",
        () => k,
        "workAsyncStorage",
        () => y,
        "workUnitAsyncStorage",
        () => A,
      ],
      62376,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c0700c47._.js.map
