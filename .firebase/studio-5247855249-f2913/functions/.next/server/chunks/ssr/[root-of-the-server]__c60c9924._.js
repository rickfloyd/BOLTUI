module.exports = [
  93695,
  (a, b, c) => {
    b.exports = a.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  50645,
  (a) => {
    a.n(a.i(27572));
  },
  43619,
  (a) => {
    a.n(a.i(79962));
  },
  13718,
  (a) => {
    a.n(a.i(85523));
  },
  18198,
  (a) => {
    a.n(a.i(45518));
  },
  62212,
  (a) => {
    a.n(a.i(66114));
  },
  90392,
  (a) => {
    "use strict";
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/layout/header.tsx <module evaluation>",
      "Header",
    );
    a.s(["Header", 0, b]);
  },
  32323,
  (a) => {
    "use strict";
    let b = (0, a.i(11857).registerClientReference)(
      function () {
        throw Error(
          "Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
        );
      },
      "[project]/src/components/layout/header.tsx",
      "Header",
    );
    a.s(["Header", 0, b]);
  },
  33952,
  (a) => {
    "use strict";
    a.i(90392);
    var b = a.i(32323);
    a.n(b);
  },
  1269,
  (a) => {
    "use strict";
    var b = a.i(717);
    let c = (...a) =>
      a
        .filter((a, b, c) => !!a && "" !== a.trim() && c.indexOf(a) === b)
        .join(" ")
        .trim();
    var d = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let e = (0, b.forwardRef)(
        (
          {
            color: a = "currentColor",
            size: e = 24,
            strokeWidth: f = 2,
            absoluteStrokeWidth: g,
            className: h = "",
            children: i,
            iconNode: j,
            ...k
          },
          l,
        ) =>
          (0, b.createElement)(
            "svg",
            {
              ref: l,
              ...d,
              width: e,
              height: e,
              stroke: a,
              strokeWidth: g ? (24 * Number(f)) / Number(e) : f,
              className: c("lucide", h),
              ...k,
            },
            [
              ...j.map(([a, c]) => (0, b.createElement)(a, c)),
              ...(Array.isArray(i) ? i : [i]),
            ],
          ),
      ),
      f = (a, d) => {
        let f = (0, b.forwardRef)(({ className: f, ...g }, h) =>
          (0, b.createElement)(e, {
            ref: h,
            iconNode: d,
            className: c(
              `lucide-${a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`,
              f,
            ),
            ...g,
          }),
        );
        return ((f.displayName = `${a}`), f);
      };
    a.s(["default", () => f], 1269);
  },
  96159,
  (a) => {
    "use strict";
    let b = (0, a.i(1269).default)("ShieldCheck", [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y",
        },
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    a.s(["ShieldCheck", () => b], 96159);
  },
  17974,
  (a) => {
    "use strict";
    var b = a.i(7997),
      c = a.i(33952),
      d = a.i(96159);
    function e() {
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)(c.Header, {}),
          (0, b.jsx)("main", {
            className: "min-h-screen bg-black text-white",
            children: (0, b.jsx)("div", {
              className: "container mx-auto px-4 py-12 md:py-20",
              children: (0, b.jsxs)("div", {
                className:
                  "relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.4)] backdrop-blur-md border border-cyan-400/40",
                children: [
                  (0, b.jsxs)("div", {
                    className: "text-center mb-12",
                    children: [
                      (0, b.jsx)(d.ShieldCheck, {
                        className:
                          "mx-auto h-16 w-16 text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]",
                      }),
                      (0, b.jsx)("h1", {
                        className:
                          "text-4xl md:text-5xl font-extrabold mt-6 text-white drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]",
                        children: "Our Customer Trust & Policies",
                      }),
                      (0, b.jsxs)("p", {
                        className:
                          "mt-4 text-lg text-gray-300 max-w-3xl mx-auto",
                        children: [
                          "Welcome to quantumcybervision.com. Our entire business is built on a single idea: ",
                          (0, b.jsx)("strong", { children: "trust" }),
                          '. We believe you deserve powerful tools, fair prices, and honest policies. We are not "The Other Guys." Here is our simple, unbreakable commitment to you.',
                        ],
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className: "space-y-10",
                    children: [
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("h2", {
                            className:
                              "text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3",
                            children: "1. Pricing & Billing Policies",
                          }),
                          (0, b.jsxs)("ul", {
                            className: "space-y-6 text-gray-300 text-lg",
                            children: [
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children: 'The "Price Lock" Guarantee',
                                  }),
                                  "The price you sign up for (monthly or annual) is ",
                                  (0, b.jsx)("strong", {
                                    children:
                                      "locked in for the life of your subscription.",
                                  }),
                                  " We will never raise your rates. Our prices won't change on you.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children:
                                      'All-Inclusive, "No-Surprise" Pricing',
                                  }),
                                  "The price you see is the only price you pay. We do ",
                                  (0, b.jsx)("strong", { children: "not" }),
                                  " have hidden, extra monthly fees for real-time market data from major exchanges. All data costs are built directly into your plan price.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children: 'The 7-Day "Grace Period"',
                                  }),
                                  "We understand that not everyone gets paid on the same day. If a payment ever fails, your account is ",
                                  (0, b.jsx)("strong", { children: "not" }),
                                  " instantly shut off. Your access continues uninterrupted for a 7-day grace period, and we'll send you a simple, no-hassle email to update your billing info.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children: "Fair Global Pricing (PPP)",
                                  }),
                                  "We believe everyone deserves access to powerful tools. We use Purchasing Power Parity (PPP) to automatically adjust our prices to be fair and affordable for your country's local economy.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children: "Secure & Honest Billing",
                                  }),
                                  "We use a world-leading, PCI-compliant payment processor (Stripe) to handle all subscriptions. This guarantees your data is secure and you will never be double-billed or charged for services you haven't authorized.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, b.jsxs)("div", {
                        children: [
                          (0, b.jsx)("h2", {
                            className:
                              "text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3",
                            children: "2. Service & Feature Policies",
                          }),
                          (0, b.jsxs)("ul", {
                            className: "space-y-6 text-gray-300 text-lg",
                            children: [
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children: 'The "Feature-Lock" Guarantee',
                                  }),
                                  'This is our "No Bait-and-Switch" promise. When you buy a plan, you are ',
                                  (0, b.jsx)("strong", {
                                    children:
                                      "guaranteed to keep all the features of that plan",
                                  }),
                                  " for as long as you are subscribed. We will never remove features from paying customers to force an upgrade.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children:
                                      '1-Click "No-Hassle" Cancellation',
                                  }),
                                  "You are in complete control. You can cancel your subscription at any time from your account settings with a ",
                                  (0, b.jsx)("strong", {
                                    children: "single click.",
                                  }),
                                  ' You will never be forced into a "retention loop" or have to argue with a chatbot to stop your payments.',
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children:
                                      "A Free Plan That's Actually Useful",
                                  }),
                                  "Our Free plan is our best advertisement. It is powerful, genuinely useful, and ",
                                  (0, b.jsx)("strong", {
                                    children: "100% Ad-Free, forever.",
                                  }),
                                  " We believe you should upgrade because you want more power, not because the free plan is broken.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children:
                                      "Free Billing Support for Everyone",
                                  }),
                                  "You should never have to pay to ask a question. Our billing and sales support is free for ",
                                  (0, b.jsx)("strong", {
                                    children: "everyone",
                                  }),
                                  ". You do not need to be a paid member to get help with a payment or account question.",
                                ],
                              }),
                              (0, b.jsxs)("li", {
                                children: [
                                  (0, b.jsx)("strong", {
                                    className:
                                      "text-white block text-xl font-semibold",
                                    children:
                                      "Proactive Security & Fraud Protection",
                                  }),
                                  "We will ",
                                  (0, b.jsx)("strong", { children: "never" }),
                                  " ask for your password, private keys, or cryptocurrency. All official communication will always come from an ",
                                  (0, b.jsx)("code", {
                                    children: "@quantumcybervision.com",
                                  }),
                                  ' email address. Any "free premium" offers you see on social media are scams.',
                                ],
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
          }),
        ],
      });
    }
    a.s(["default", () => e]);
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c60c9924._.js.map
