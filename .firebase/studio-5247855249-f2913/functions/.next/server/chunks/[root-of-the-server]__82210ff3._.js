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
  52418,
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
      u = e.i(16795),
      d = e.i(87718),
      p = e.i(95169),
      c = e.i(47587),
      h = e.i(66012),
      x = e.i(70101),
      R = e.i(26937),
      v = e.i(10372),
      g = e.i(93695);
    e.i(52474);
    var f = e.i(220),
      E = e.i(89171);
    async function m(e) {
      let { searchParams: t } = new URL(e.url),
        r = t.get("lat"),
        a = t.get("lon"),
        n = process.env.GOOGLE_MAPS_API_KEY;
      if (!r || !a)
        return E.NextResponse.json(
          { error: "Latitude and longitude are required" },
          { status: 400 },
        );
      if (!n)
        return E.NextResponse.json(
          {
            error:
              "API key is not configured. Please set GOOGLE_MAPS_API_KEY in your environment variables.",
          },
          { status: 500 },
        );
      let s = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${r},${a}&radius=2500&type=restaurant&key=${n}`;
      try {
        let e = await fetch(s),
          t = await e.json();
        if ("OK" !== t.status && "ZERO_RESULTS" !== t.status)
          return (
            console.error("Google Places API Error:", t),
            E.NextResponse.json(
              {
                error:
                  t.error_message ||
                  "An error occurred with the Google Places API.",
              },
              { status: 500 },
            )
          );
        return E.NextResponse.json(t);
      } catch (e) {
        return (
          console.error("Failed to fetch from Google Places API:", e),
          E.NextResponse.json(
            { error: "Failed to fetch restaurant data." },
            { status: 500 },
          )
        );
      }
    }
    e.s(["GET", () => m], 89780);
    var w = e.i(89780);
    let y = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/api/places/route",
          pathname: "/api/places",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/api/places/route.ts",
        nextConfigOutput: "",
        userland: w,
      }),
      { workAsyncStorage: A, workUnitAsyncStorage: C, serverHooks: P } = y;
    function b() {
      return (0, a.patchFetch)({
        workAsyncStorage: A,
        workUnitAsyncStorage: C,
      });
    }
    async function N(e, t, a) {
      y.isDev &&
        (0, n.addRequestMeta)(
          e,
          "devRequestTimingInternalsEnd",
          process.hrtime.bigint(),
        );
      let E = "/api/places/route";
      E = E.replace(/\/index$/, "") || "/";
      let m = await y.prepare(e, t, { srcPage: E, multiZoneDraftMode: !1 });
      if (!m)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == a.waitUntil || a.waitUntil.call(a, Promise.resolve()),
          null
        );
      let {
          buildId: w,
          params: A,
          nextConfig: C,
          parsedUrl: P,
          isDraftMode: b,
          prerenderManifest: N,
          routerServerContext: _,
          isOnDemandRevalidate: O,
          revalidateOnlyGenerated: T,
          resolvedPathname: j,
          clientReferenceManifest: S,
          serverActionsManifest: k,
        } = m,
        I = (0, l.normalizeAppPath)(E),
        q = !!(N.dynamicRoutes[I] || N.routes[j]),
        M = async () => (
          (null == _ ? void 0 : _.render404)
            ? await _.render404(e, t, P, !1)
            : t.end("This page could not be found"),
          null
        );
      if (q && !b) {
        let e = !!N.routes[j],
          t = N.dynamicRoutes[I];
        if (t && !1 === t.fallback && !e) {
          if (C.experimental.adapterPath) return await M();
          throw new g.NoFallbackError();
        }
      }
      let U = null;
      !q || y.isDev || b || (U = "/index" === (U = j) ? "/" : U);
      let H = !0 === y.isDev || !q,
        D = q && !H;
      k &&
        S &&
        (0, o.setReferenceManifestsSingleton)({
          page: E,
          clientReferenceManifest: S,
          serverActionsManifest: k,
          serverModuleMap: (0, i.createServerModuleMap)({
            serverActionsManifest: k,
          }),
        });
      let $ = e.method || "GET",
        G = (0, s.getTracer)(),
        K = G.getActiveScopeSpan(),
        F = {
          params: A,
          prerenderManifest: N,
          renderOpts: {
            experimental: { authInterrupts: !!C.experimental.authInterrupts },
            cacheComponents: !!C.cacheComponents,
            supportsDynamicResponse: H,
            incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles: C.cacheLife,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a) =>
              y.onRequestError(e, t, a, _),
          },
          sharedContext: { buildId: w },
        },
        L = new u.NodeNextRequest(e),
        B = new u.NodeNextResponse(t),
        V = d.NextRequestAdapter.fromNodeNextRequest(
          L,
          (0, d.signalFromNodeResponse)(t),
        );
      try {
        let o = async (e) =>
            y.handle(V, F).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = G.getRootSpanAttributes();
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
              } else e.updateName(`${$} ${E}`);
            }),
          i = !!(0, n.getRequestMeta)(e, "minimalMode"),
          l = async (n) => {
            var s, l;
            let u = async ({ previousCacheEntry: r }) => {
                try {
                  if (!i && O && T && !r)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let s = await o(n);
                  e.fetchMetrics = F.renderOpts.fetchMetrics;
                  let l = F.renderOpts.pendingWaitUntil;
                  l && a.waitUntil && (a.waitUntil(l), (l = void 0));
                  let u = F.renderOpts.collectedTags;
                  if (!q)
                    return (
                      await (0, h.sendResponse)(
                        L,
                        B,
                        s,
                        F.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await s.blob(),
                      t = (0, x.toNodeOutgoingHttpHeaders)(s.headers);
                    (u && (t[v.NEXT_CACHE_TAGS_HEADER] = u),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type));
                    let r =
                        void 0 !== F.renderOpts.collectedRevalidate &&
                        !(
                          F.renderOpts.collectedRevalidate >= v.INFINITE_CACHE
                        ) &&
                        F.renderOpts.collectedRevalidate,
                      a =
                        void 0 === F.renderOpts.collectedExpire ||
                        F.renderOpts.collectedExpire >= v.INFINITE_CACHE
                          ? void 0
                          : F.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: f.CachedRouteKind.APP_ROUTE,
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
                          routePath: E,
                          routeType: "route",
                          revalidateReason: (0, c.getRevalidateReason)({
                            isStaticGeneration: D,
                            isOnDemandRevalidate: O,
                          }),
                        },
                        _,
                      )),
                    t
                  );
                }
              },
              d = await y.handleResponse({
                req: e,
                nextConfig: C,
                cacheKey: U,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: N,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: O,
                revalidateOnlyGenerated: T,
                responseGenerator: u,
                waitUntil: a.waitUntil,
                isMinimalMode: i,
              });
            if (!q) return null;
            if (
              (null == d || null == (s = d.value) ? void 0 : s.kind) !==
              f.CachedRouteKind.APP_ROUTE
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
                O
                  ? "REVALIDATED"
                  : d.isMiss
                    ? "MISS"
                    : d.isStale
                      ? "STALE"
                      : "HIT",
              ),
              b &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let p = (0, x.fromNodeOutgoingHttpHeaders)(d.value.headers);
            return (
              (i && q) || p.delete(v.NEXT_CACHE_TAGS_HEADER),
              !d.cacheControl ||
                t.getHeader("Cache-Control") ||
                p.get("Cache-Control") ||
                p.set(
                  "Cache-Control",
                  (0, R.getCacheControlHeader)(d.cacheControl),
                ),
              await (0, h.sendResponse)(
                L,
                B,
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
          : await G.withPropagatedContext(e.headers, () =>
              G.trace(
                p.BaseServerSpan.handleRequest,
                {
                  spanName: `${$} ${E}`,
                  kind: s.SpanKind.SERVER,
                  attributes: { "http.method": $, "http.target": e.url },
                },
                l,
              ),
            );
      } catch (t) {
        if (
          (t instanceof g.NoFallbackError ||
            (await y.onRequestError(e, t, {
              routerKind: "App Router",
              routePath: I,
              routeType: "route",
              revalidateReason: (0, c.getRevalidateReason)({
                isStaticGeneration: D,
                isOnDemandRevalidate: O,
              }),
            })),
          q)
        )
          throw t;
        return (
          await (0, h.sendResponse)(L, B, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        () => N,
        "patchFetch",
        () => b,
        "routeModule",
        () => y,
        "serverHooks",
        () => P,
        "workAsyncStorage",
        () => A,
        "workUnitAsyncStorage",
        () => C,
      ],
      52418,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__82210ff3._.js.map
