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
  58494,
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
      R = e.i(26937),
      v = e.i(10372),
      f = e.i(93695);
    e.i(52474);
    var g = e.i(220),
      E = e.i(89171);
    async function m(e) {
      let { searchParams: t } = new URL(e.url),
        r = t.get("confidenceMinimum") || "90",
        a = process.env.ABUSEIPDB_API_KEY;
      if (!a)
        return E.NextResponse.json(
          {
            error:
              "API key is not configured. Please set ABUSEIPDB_API_KEY in your environment variables.",
          },
          { status: 500 },
        );
      let n = `https://api.abuseipdb.com/api/v2/blacklist?confidenceMinimum=${r}`;
      try {
        let e = await fetch(n, {
          headers: { Accept: "application/json", Key: a },
        });
        if (!e.ok) {
          let t = await e.text();
          return (
            console.error("AbuseIPDB API Error:", t),
            E.NextResponse.json(
              { error: `AbuseIPDB API error: ${e.statusText}` },
              { status: e.status },
            )
          );
        }
        let t = await e.json();
        return E.NextResponse.json(t);
      } catch (e) {
        return (
          console.error("Failed to fetch from AbuseIPDB API:", e),
          E.NextResponse.json(
            { error: "Failed to fetch blacklist data." },
            { status: 500 },
          )
        );
      }
    }
    e.s(["GET", () => m], 2409);
    var w = e.i(2409);
    let b = new t.AppRouteRouteModule({
        definition: {
          kind: r.RouteKind.APP_ROUTE,
          page: "/api/abuseipdb/route",
          pathname: "/api/abuseipdb",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/src/app/api/abuseipdb/route.ts",
        nextConfigOutput: "",
        userland: w,
      }),
      { workAsyncStorage: A, workUnitAsyncStorage: y, serverHooks: C } = b;
    function P() {
      return (0, a.patchFetch)({
        workAsyncStorage: A,
        workUnitAsyncStorage: y,
      });
    }
    async function N(e, t, a) {
      b.isDev &&
        (0, n.addRequestMeta)(
          e,
          "devRequestTimingInternalsEnd",
          process.hrtime.bigint(),
        );
      let E = "/api/abuseipdb/route";
      E = E.replace(/\/index$/, "") || "/";
      let m = await b.prepare(e, t, { srcPage: E, multiZoneDraftMode: !1 });
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
          nextConfig: y,
          parsedUrl: C,
          isDraftMode: P,
          prerenderManifest: N,
          routerServerContext: I,
          isOnDemandRevalidate: T,
          revalidateOnlyGenerated: k,
          resolvedPathname: _,
          clientReferenceManifest: j,
          serverActionsManifest: S,
        } = m,
        O = (0, l.normalizeAppPath)(E),
        q = !!(N.dynamicRoutes[O] || N.routes[_]),
        U = async () => (
          (null == I ? void 0 : I.render404)
            ? await I.render404(e, t, C, !1)
            : t.end("This page could not be found"),
          null
        );
      if (q && !P) {
        let e = !!N.routes[_],
          t = N.dynamicRoutes[O];
        if (t && !1 === t.fallback && !e) {
          if (y.experimental.adapterPath) return await U();
          throw new f.NoFallbackError();
        }
      }
      let D = null;
      !q || b.isDev || P || (D = "/index" === (D = _) ? "/" : D);
      let M = !0 === b.isDev || !q,
        H = q && !M;
      S &&
        j &&
        (0, o.setReferenceManifestsSingleton)({
          page: E,
          clientReferenceManifest: j,
          serverActionsManifest: S,
          serverModuleMap: (0, i.createServerModuleMap)({
            serverActionsManifest: S,
          }),
        });
      let B = e.method || "GET",
        K = (0, s.getTracer)(),
        $ = K.getActiveScopeSpan(),
        F = {
          params: A,
          prerenderManifest: N,
          renderOpts: {
            experimental: { authInterrupts: !!y.experimental.authInterrupts },
            cacheComponents: !!y.cacheComponents,
            supportsDynamicResponse: M,
            incrementalCache: (0, n.getRequestMeta)(e, "incrementalCache"),
            cacheLifeProfiles: y.cacheLife,
            waitUntil: a.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, r, a) =>
              b.onRequestError(e, t, a, I),
          },
          sharedContext: { buildId: w },
        },
        L = new d.NodeNextRequest(e),
        G = new d.NodeNextResponse(t),
        V = u.NextRequestAdapter.fromNodeNextRequest(
          L,
          (0, u.signalFromNodeResponse)(t),
        );
      try {
        let o = async (e) =>
            b.handle(V, F).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let r = K.getRootSpanAttributes();
              if (!r) return;
              if (r.get("next.span_type") !== p.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let a = r.get("next.route");
              if (a) {
                let t = `${B} ${a}`;
                (e.setAttributes({
                  "next.route": a,
                  "http.route": a,
                  "next.span_name": t,
                }),
                  e.updateName(t));
              } else e.updateName(`${B} ${E}`);
            }),
          i = !!(0, n.getRequestMeta)(e, "minimalMode"),
          l = async (n) => {
            var s, l;
            let d = async ({ previousCacheEntry: r }) => {
                try {
                  if (!i && T && k && !r)
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
                  let d = F.renderOpts.collectedTags;
                  if (!q)
                    return (
                      await (0, h.sendResponse)(
                        L,
                        G,
                        s,
                        F.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await s.blob(),
                      t = (0, x.toNodeOutgoingHttpHeaders)(s.headers);
                    (d && (t[v.NEXT_CACHE_TAGS_HEADER] = d),
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
                        kind: g.CachedRouteKind.APP_ROUTE,
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
                      (await b.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: E,
                          routeType: "route",
                          revalidateReason: (0, c.getRevalidateReason)({
                            isStaticGeneration: H,
                            isOnDemandRevalidate: T,
                          }),
                        },
                        I,
                      )),
                    t
                  );
                }
              },
              u = await b.handleResponse({
                req: e,
                nextConfig: y,
                cacheKey: D,
                routeKind: r.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: N,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: T,
                revalidateOnlyGenerated: k,
                responseGenerator: d,
                waitUntil: a.waitUntil,
                isMinimalMode: i,
              });
            if (!q) return null;
            if (
              (null == u || null == (s = u.value) ? void 0 : s.kind) !==
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
                T
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
            let p = (0, x.fromNodeOutgoingHttpHeaders)(u.value.headers);
            return (
              (i && q) || p.delete(v.NEXT_CACHE_TAGS_HEADER),
              !u.cacheControl ||
                t.getHeader("Cache-Control") ||
                p.get("Cache-Control") ||
                p.set(
                  "Cache-Control",
                  (0, R.getCacheControlHeader)(u.cacheControl),
                ),
              await (0, h.sendResponse)(
                L,
                G,
                new Response(u.value.body, {
                  headers: p,
                  status: u.value.status || 200,
                }),
              ),
              null
            );
          };
        $
          ? await l($)
          : await K.withPropagatedContext(e.headers, () =>
              K.trace(
                p.BaseServerSpan.handleRequest,
                {
                  spanName: `${B} ${E}`,
                  kind: s.SpanKind.SERVER,
                  attributes: { "http.method": B, "http.target": e.url },
                },
                l,
              ),
            );
      } catch (t) {
        if (
          (t instanceof f.NoFallbackError ||
            (await b.onRequestError(e, t, {
              routerKind: "App Router",
              routePath: O,
              routeType: "route",
              revalidateReason: (0, c.getRevalidateReason)({
                isStaticGeneration: H,
                isOnDemandRevalidate: T,
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
        () => N,
        "patchFetch",
        () => P,
        "routeModule",
        () => b,
        "serverHooks",
        () => C,
        "workAsyncStorage",
        () => A,
        "workUnitAsyncStorage",
        () => y,
      ],
      58494,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96e51b0c._.js.map
