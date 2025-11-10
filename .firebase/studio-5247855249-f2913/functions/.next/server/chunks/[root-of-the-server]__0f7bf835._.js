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
  50745,
  (e) => {
    "use strict";
    var t = e.i(47909),
      r = e.i(74017),
      a = e.i(96250),
      n = e.i(59756),
      s = e.i(61916),
      o = e.i(14444),
      i = e.i(37092),
      l = e.i(69741),
      d = e.i(16795),
      u = e.i(87718),
      p = e.i(95169),
      c = e.i(47587),
      h = e.i(66012),
      x = e.i(70101),
      v = e.i(26937),
      R = e.i(10372),
      f = e.i(93695);
    e.i(52474);
    var w = e.i(220),
      g = e.i(89171);
    async function m(e) {
      let { searchParams: t } = new URL(e.url),
        r = t.get("symbol"),
        a = t.get("interval") || "1min",
        n = process.env.TWELVEDATA_API_KEY;
      if (!n)
        return g.NextResponse.json(
          {
            error:
              "API key is not configured. Please set TWELVEDATA_API_KEY in your environment variables.",
          },
          { status: 500 },
        );
      if (!r)
        return g.NextResponse.json(
          { error: "Symbol parameter is required." },
          { status: 400 },
        );
      let s = `https://api.twelvedata.com/time_series?symbol=${r}&interval=${a}&apikey=${n}&outputsize=60`;
      try {
        let e = await fetch(s);
        if (!e.ok) {
          let t = await e.text();
          return (
            console.error("Twelve Data API Error:", t),
            g.NextResponse.json(
              { error: `Twelve Data API error: ${e.statusText}` },
              { status: e.status },
            )
          );
        }
        let t = await e.json();
        if ("error" === t.status)
          return g.NextResponse.json({ error: t.message }, { status: 400 });
        return g.NextResponse.json(t);
      } catch (e) {
        return (
          console.error("Failed to fetch from Twelve Data API:", e),
          g.NextResponse.json(
            { error: "Failed to fetch time series data." },
            { status: 500 },
          )
        );
      }
    }
    e.s(["GET", () => m], 68737);
    var E = e.i(68737);
    let y = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/api/twelvedata/route",
          pathname: "/api/twelvedata",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/api/twelvedata/route.ts",
        nextConfigOutput: "",
        userland: E,
      }),
      { workAsyncStorage: A, workUnitAsyncStorage: C, serverHooks: T } = y;
    function b() {
      return (0, a.patchFetch)({
        workAsyncStorage: A,
        workUnitAsyncStorage: C,
      });
    }
    async function P(e, t, a) {
      y.isDev &&
        (0, n.addRequestMeta)(
          e,
          "devRequestTimingInternalsEnd",
          process.hrtime.bigint(),
        );
      let g = "/api/twelvedata/route";
      g = g.replace(/\/index$/, "") || "/";
      let m = await y.prepare(e, t, { srcPage: g, multiZoneDraftMode: !1 });
      if (!m)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
          null
        );
      let {
          buildId: E,
          params: A,
          nextConfig: C,
          parsedUrl: T,
          isDraftMode: b,
          prerenderManifest: P,
          routerServerContext: N,
          isOnDemandRevalidate: _,
          revalidateOnlyGenerated: j,
          resolvedPathname: k,
          clientReferenceManifest: I,
          serverActionsManifest: O,
        } = m,
        S = (0, l.normalizeAppPath)(g),
        q = !!(P.dynamicRoutes[S] || P.routes[k]),
        D = async () => (
          (null == N ? void 0 : N.render404)
            ? await N.render404(e, t, T, !1)
            : t.end("This page could not be found"),
          null
        );
      if (q && !b) {
        let e = !!P.routes[k],
          t = P.dynamicRoutes[S];
        if (t && !1 === t.fallback && !e) {
          if (C.experimental.adapterPath) return await D();
          throw new f.NoFallbackError();
        }
      }
      let H = null;
      !q || y.isDev || b || (H = "/index" === (H = k) ? "/" : H);
      let U = !0 === y.isDev || !q,
        M = q && !U;
      O &&
        I &&
        (0, o.setReferenceManifestsSingleton)({
          page: g,
          clientReferenceManifest: I,
          serverActionsManifest: O,
          serverModuleMap: (0, i.createServerModuleMap)({
            serverActionsManifest: O,
          }),
        });
      let $ = e.method || "GET",
        F = (0, s.getTracer)(),
        K = F.getActiveScopeSpan(),
        L = {
          params: A,
          prerenderManifest: P,
          renderOpts: {
            experimental: { authInterrupts: !!C.experimental.authInterrupts },
            cacheComponents: !!C.cacheComponents,
            supportsDynamicResponse: U,
            incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles: C.cacheLife,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a) =>
              y.onRequestError(e, t, a, N),
          },
          sharedContext: { buildId: E },
        },
        B = new d.NodeNextRequest(e),
        V = new d.NodeNextResponse(t),
        G = u.NextRequestAdapter.fromNodeNextRequest(
          B,
          (0, u.signalFromNodeResponse)(t),
        );
      try {
        let o = async (e) =>
            y.handle(G, L).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = F.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== p.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let a = r.get("next.route");
              if (a) {
                let t = `${$} ${a}`;
                (e.setAttributes({
                  "next.route": a,
                  "http.route": a,
                  "next.span_name": t,
                }),
                  e.updateName(t));
              } else e.updateName(`${$} ${g}`);
            }),
          i = !!(0, n.getRequestMeta)(e, "minimalMode"),
          l = async (n) => {
            var s, l;
            let d = async ({ previousCacheEntry: r }) => {
                try {
                  if (!i && _ && j && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let s = await o(n);
                  e.fetchMetrics = L.renderOpts.fetchMetrics;
                  let l = L.renderOpts.pendingWaitUntil;
                  l && a.waitUntil && (a.waitUntil(l), (l = void 0));
                  let d = L.renderOpts.collectedTags;
                  if (!q)
                    return (
                      await (0, h.sendResponse)(
                        B,
                        V,
                        s,
                        L.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await s.blob(),
                      t = (0, x.toNodeOutgoingHttpHeaders)(s.headers);
                    (d && (t[R.NEXT_CACHE_TAGS_HEADER] = d),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type));
                    let r =
                        void 0 !== L.renderOpts.collectedRevalidate &&
                        !(
                          L.renderOpts.collectedRevalidate >= R.INFINITE_CACHE
                        ) &&
                        L.renderOpts.collectedRevalidate,
                      a =
                        void 0 === L.renderOpts.collectedExpire ||
                        L.renderOpts.collectedExpire >= R.INFINITE_CACHE
                          ? void 0
                          : L.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: w.CachedRouteKind.APP_ROUTE,
                        status: s.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: r, expire: a },
                    };
                  }
                } catch (t) {
                  throw (
                    (null == r ? void 0 : r.isStale) &&
                      (await y.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: g,
                          routeType: "route",
                          revalidateReason: (0, c.getRevalidateReason)({
                            isStaticGeneration: M,
                            isOnDemandRevalidate: _,
                          }),
                        },
                        N,
                      )),
                    t
                  );
                }
              },
              u = await y.handleResponse({
                req: e,
                nextConfig: C,
                cacheKey: H,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: P,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: _,
                revalidateOnlyGenerated: j,
                responseGenerator: d,
                waitUntil: a.waitUntil,
                isMinimalMode: i,
              });
            if (!q) return null;
            if (
              (null == u || null == (s = u.value) ? void 0 : s.kind) !==
              w.CachedRouteKind.APP_ROUTE
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
              b &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let p = (0, x.fromNodeOutgoingHttpHeaders)(u.value.headers);
            return (
              (i && q) || p.delete(R.NEXT_CACHE_TAGS_HEADER),
              !u.cacheControl ||
                t.getHeader("Cache-Control") ||
                p.get("Cache-Control") ||
                p.set(
                  "Cache-Control",
                  (0, v.getCacheControlHeader)(u.cacheControl),
                ),
              await (0, h.sendResponse)(
                B,
                V,
                new Response(u.value.body, {
                  headers: p,
                  status: u.value.status || 200,
                }),
              ),
              null
            );
          };
        K
          ? await l(K)
          : await F.withPropagatedContext(e.headers, () =>
              F.trace(
                p.BaseServerSpan.handleRequest,
                {
                  spanName: `${$} ${g}`,
                  kind: s.SpanKind.SERVER,
                  attributes: { "http.method": $, "http.target": e.url },
                },
                l,
              ),
            );
      } catch (t) {
        if (
          (t instanceof f.NoFallbackError ||
            (await y.onRequestError(e, t, {
              routerKind: "App Router",
              routePath: S,
              routeType: "route",
              revalidateReason: (0, c.getRevalidateReason)({
                isStaticGeneration: M,
                isOnDemandRevalidate: _,
              }),
            })),
          q)
        )
          throw t;
        return (
          await (0, h.sendResponse)(B, V, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        () => P,
        "patchFetch",
        () => b,
        "routeModule",
        () => y,
        "serverHooks",
        () => T,
        "workAsyncStorage",
        () => A,
        "workUnitAsyncStorage",
        () => C,
      ],
      50745,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f7bf835._.js.map
