module.exports = [
  9270,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(42602).vendored.contexts.AppRouterContext;
  },
  38783,
  (a, b, c) => {
    "use strict";
    b.exports = a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient;
  },
  93482,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(38246);
    function d() {
      return (0, b.jsxs)("main", {
        className:
          "min-h-screen flex flex-col items-center justify-center bg-black text-center text-white",
        children: [
          (0, b.jsx)("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-pink-900 opacity-70 blur-3xl animate-pulse",
          }),
          (0, b.jsxs)("div", {
            className:
              "relative z-10 p-10 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-pink-400/40",
            children: [
              (0, b.jsx)("h1", {
                className:
                  "text-5xl font-extrabold mb-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]",
                children: "Welcome Back",
              }),
              (0, b.jsxs)("form", {
                className: "flex flex-col gap-4 w-80 mx-auto text-left",
                children: [
                  (0, b.jsx)("input", {
                    type: "email",
                    placeholder: "Email",
                    className:
                      "p-3 rounded bg-black/50 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-400",
                  }),
                  (0, b.jsx)("input", {
                    type: "password",
                    placeholder: "Password",
                    className:
                      "p-3 rounded bg-black/50 border border-cyan-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-400",
                  }),
                  (0, b.jsx)("button", {
                    type: "submit",
                    className:
                      "mt-4 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,0,255,0.5)]",
                    children: "Sign In",
                  }),
                ],
              }),
              (0, b.jsxs)("p", {
                className: "mt-6 text-gray-400",
                children: [
                  "Don’t have an account?",
                  " ",
                  (0, b.jsx)(c.default, {
                    href: "/signup",
                    className: "text-pink-400 hover:underline",
                    children: "Join Now",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    a.s(["default", () => d]);
  },
];

//# sourceMappingURL=_004b8233._.js.map
