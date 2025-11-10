module.exports = [
  47145,
  (a) => {
    "use strict";
    var b = a.i(87924),
      c = a.i(72131),
      d = a.i(18894),
      e = a.i(70106);
    let f = (0, e.default)("TriangleAlert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]),
      g = (0, e.default)("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    var h = a.i(38246),
      i = a.i(99570),
      j = a.i(80701),
      k = a.i(70430);
    let l = {
        en: "AiQuantumCharts holds zero responsibility if you choose to break any laws. We do not agree with your personal choices and would never go against any country’s legal code.",
        es: "AiQuantumCharts no se hace responsable si decides infringir alguna ley...",
        fr: "AiQuantumCharts décline toute responsabilité si vous choisissez de violer la loi...",
        de: "AiQuantumCharts übernimmt keine Verantwortung, wenn Sie gegen Gesetze verstoßen...",
        ru: "AiQuantumCharts не несет ответственности за нарушение вами закона...",
        zh: "如果您选择违法，AiQuantumCharts概不负责...",
        ja: "AiQuantumChartsは、法律違反を選択した場合の責任を一切負いません...",
        hi: "यदि आप कानून तोड़ने का निर्णय लेते हैं तो AiQuantumCharts कोई ज़िम्मेदारी नहीं लेता...",
        pt: "A AiQuantumCharts não se responsabiliza se você optar por violar leis...",
        ar: "لا تتحمل AiQuantumCharts أي مسؤولية إذا اخترت انتهاك القوانين...",
      },
      m = {
        US: "https://www.analyticsinsight.net/cryptocurrency-analytics-insight/crypto-regulations-in-2025-whats-changing",
        CN: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
        RU: "https://crystalintelligence.com/crypto-regulations/pwc-global-crypto-regulation-trends-for-2025/",
        EG: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
        BD: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
        NP: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
        DZ: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
        AF: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
        NO: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
        SG: "https://crystalintelligence.com/crypto-regulations/pwc-global-crypto-regulation-trends-for-2025/",
        AE: "https://www.coinrank.io/crypto/global-crypto-policy-outlook/",
      };
    function n() {
      let [a, e] = (0, c.useState)("US"),
        [n, o] = (0, c.useState)(!1),
        [p, q] = (0, c.useState)(l.en),
        [r, s] = (0, c.useState)(m.US);
      (0, c.useEffect)(() => {
        t(a);
      }, [a]);
      let t = (a) => {
        (e(a), q(l[navigator.language.slice(0, 2)] || l.en), s(m[a] || "#"));
      };
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)(d.Header, {}),
          n &&
            (0, b.jsxs)("div", {
              style: {
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                maxWidth: "600px",
                background: "#1a1a2e",
                color: "#e0e0e0",
                border: "2px solid hsl(var(--neon-pink))",
                padding: "2rem",
                zIndex: 1e3,
                borderRadius: "1rem",
                boxShadow: "0 0 30px hsl(var(--neon-pink))",
              },
              children: [
                (0, b.jsx)("h3", {
                  className: "text-2xl font-bold neon-pink mb-4",
                  children: "⚠️ Legal Disclaimer",
                }),
                (0, b.jsx)("p", { children: p }),
                (0, b.jsx)("a", {
                  href: r,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block mt-4 text-cyan-400 hover:underline",
                  children: "🌍 Learn More About Mining Laws",
                }),
                (0, b.jsx)(i.Button, {
                  onClick: () => o(!1),
                  className: "mt-6 w-full",
                  children: "I Understand",
                }),
              ],
            }),
          (0, b.jsx)("main", {
            className: "container mx-auto px-4 py-12",
            children: (0, b.jsxs)("div", {
              className: "center-content max-w-4xl mx-auto",
              children: [
                (0, b.jsx)("h1", {
                  className:
                    "text-3xl md:text-4xl font-bold neon-text text-center mb-6",
                  children: "🧱 Step-by-Step Miner Selection Guide",
                }),
                (0, b.jsxs)("section", {
                  className:
                    "p-6 rounded-lg bg-black/50 border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.3)] w-full",
                  children: [
                    (0, b.jsx)("h2", {
                      className:
                        "text-2xl font-bold text-cyan-300 mb-4 text-center",
                      children: "Check Mining Legality",
                    }),
                    (0, b.jsxs)("div", {
                      className:
                        "flex flex-col sm:flex-row items-center justify-center gap-4",
                      children: [
                        (0, b.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, b.jsx)(k.Label, {
                              htmlFor: "country-select",
                              className: "text-gray-300",
                              children: "🌐 Select Your Country:",
                            }),
                            (0, b.jsxs)(j.Select, {
                              onValueChange: t,
                              defaultValue: a,
                              children: [
                                (0, b.jsx)(j.SelectTrigger, {
                                  id: "country-select",
                                  className:
                                    "w-[280px] bg-gray-800 border-cyan-400 text-white",
                                  children: (0, b.jsx)(j.SelectValue, {
                                    placeholder: "Select a country",
                                  }),
                                }),
                                (0, b.jsxs)(j.SelectContent, {
                                  className:
                                    "bg-black text-white border-cyan-400",
                                  children: [
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "US",
                                      children: "United States",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "CN",
                                      children: "China",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "RU",
                                      children: "Russia",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "EG",
                                      children: "Egypt",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "BD",
                                      children: "Bangladesh",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "NP",
                                      children: "Nepal",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "DZ",
                                      children: "Algeria",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "AF",
                                      children: "Afghanistan",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "NO",
                                      children: "Norway",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "SG",
                                      children: "Singapore",
                                    }),
                                    (0, b.jsx)(j.SelectItem, {
                                      value: "AE",
                                      children: "United Arab Emirates",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsx)(i.Button, {
                          onClick: () => o(!0),
                          className: "self-end h-10",
                          children: "Show Disclaimer",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, b.jsxs)("div", {
                  className: "space-y-12 mt-12",
                  children: [
                    (0, b.jsxs)("section", {
                      className:
                        "p-6 rounded-lg bg-black/50 border border-cyan-400/30 shadow-lg",
                      children: [
                        (0, b.jsx)("h2", {
                          className: "text-2xl font-bold text-cyan-300 mb-4",
                          children: "1. Identify Your Hardware Type",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-gray-300 mb-4",
                          children:
                            "**Goal:** Determine whether your computer uses CPU, GPU, or ASIC mining.",
                        }),
                        (0, b.jsxs)("ul", {
                          className:
                            "list-disc list-inside space-y-2 text-gray-300",
                          children: [
                            (0, b.jsxs)("li", {
                              children: [
                                "**CPU Mining**: Most basic; works on nearly all computers but low profitability.",
                                (0, b.jsx)("span", {
                                  className: "text-gray-400 block text-sm ml-6",
                                  children:
                                    "Example coins: Monero (XMR), VerusCoin (VRSC)",
                                }),
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                "**GPU Mining**: Requires a dedicated graphics card (NVIDIA or AMD).",
                                (0, b.jsx)("span", {
                                  className: "text-gray-400 block text-sm ml-6",
                                  children:
                                    "Example coins: Ravencoin (RVN), Ergo (ERG), Ethereum Classic (ETC)",
                                }),
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                "**ASIC Mining**: Specialized hardware (not typical for home users).",
                                (0, b.jsx)("span", {
                                  className: "text-gray-400 block text-sm ml-6",
                                  children:
                                    "Example coins: Bitcoin (BTC), Litecoin (LTC), Dash (DASH)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          className: "mt-4 text-gray-300",
                          children: [
                            (0, b.jsx)("p", {
                              className: "font-bold",
                              children: "How to check:",
                            }),
                            (0, b.jsxs)("ul", {
                              className: "list-disc list-inside ml-4",
                              children: [
                                (0, b.jsx)("li", {
                                  children:
                                    "On **Windows**: Open Task Manager → Performance tab → Check CPU and GPU specs.",
                                }),
                                (0, b.jsx)("li", {
                                  children:
                                    "On **macOS**: Click Apple logo → About This Mac → Overview tab.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("section", {
                      className:
                        "p-6 rounded-lg bg-black/50 border border-pink-400/30 shadow-lg",
                      children: [
                        (0, b.jsx)("h2", {
                          className: "text-2xl font-bold text-pink-300 mb-4",
                          children: "2. Choose Your Coin Type",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-gray-300 mb-4",
                          children:
                            "**Goal:** Select a coin that matches your hardware and mining goals.",
                        }),
                        (0, b.jsxs)("ul", {
                          className:
                            "list-disc list-inside space-y-2 text-gray-300",
                          children: [
                            (0, b.jsx)("li", {
                              children:
                                "**Privacy Coins**: Monero (XMR), Firo — best for CPU or GPU",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "**Payment Coins**: Bitcoin (BTC), Litecoin (LTC) — best for ASIC",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "**Smart Contract Coins**: Ethereum Classic (ETC), Ergo — best for GPU",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "**Experimental Coins**: Kaspa (KAS), Radiant (RXD) — GPU or CPU",
                            }),
                          ],
                        }),
                        (0, b.jsxs)("p", {
                          className: "mt-4 text-gray-300",
                          children: [
                            "**Tip:** Use sites like ",
                            (0, b.jsx)(h.default, {
                              href: "https://whattomine.com",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "text-cyan-400 hover:underline",
                              children: "WhatToMine.com",
                            }),
                            " to compare profitability and hardware compatibility.",
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("section", {
                      className:
                        "p-6 rounded-lg bg-black/50 border border-cyan-400/30 shadow-lg",
                      children: [
                        (0, b.jsx)("h2", {
                          className: "text-2xl font-bold text-cyan-300 mb-4",
                          children: "3. Match Miner Software to Your Setup",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-gray-300 mb-6",
                          children:
                            "**Goal:** Pick mining software that supports your coin, hardware, and OS.",
                        }),
                        (0, b.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, b.jsxs)("div", {
                              children: [
                                (0, b.jsx)("h3", {
                                  className:
                                    "text-xl font-bold text-cyan-200 mb-2",
                                  children: "✅ CPU Miners",
                                }),
                                (0, b.jsx)("p", {
                                  children:
                                    "**XMRig** – Monero, RandomX coins (OS: Windows, macOS, Linux)",
                                }),
                                (0, b.jsx)(h.default, {
                                  href: "https://github.com/xmrig/xmrig",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-pink-400 hover:underline break-all",
                                  children: "https://github.com/xmrig/xmrig",
                                }),
                                (0, b.jsx)("p", {
                                  className: "mt-2",
                                  children:
                                    "**cpuminer (minerd)** – SHA-256, Scrypt coins (OS: Windows, macOS)",
                                }),
                                (0, b.jsx)(h.default, {
                                  href: "https://github.com/pooler/cpuminer",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-pink-400 hover:underline break-all",
                                  children:
                                    "https://github.com/pooler/cpuminer",
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              children: [
                                (0, b.jsx)("h3", {
                                  className:
                                    "text-xl font-bold text-cyan-200 mb-2",
                                  children: "✅ GPU Miners",
                                }),
                                (0, b.jsx)("p", {
                                  children:
                                    "**NBMiner** – NVIDIA/AMD, Ravencoin, Ergo (OS: Windows, Linux)",
                                }),
                                (0, b.jsx)(h.default, {
                                  href: "https://github.com/NebuTech/NBMiner",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-pink-400 hover:underline break-all",
                                  children:
                                    "https://github.com/NebuTech/NBMiner",
                                }),
                                (0, b.jsx)("p", {
                                  className: "mt-2",
                                  children:
                                    "**TeamRedMiner** – AMD-focused (OS: Windows, Linux)",
                                }),
                                (0, b.jsx)(h.default, {
                                  href: "https://github.com/todxx/teamredminer",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-pink-400 hover:underline break-all",
                                  children:
                                    "https://github.com/todxx/teamredminer",
                                }),
                                (0, b.jsx)("p", {
                                  className: "mt-2",
                                  children:
                                    "**GMiner** – NVIDIA/AMD, Kaspa, ETC (OS: Windows, Linux)",
                                }),
                                (0, b.jsx)(h.default, {
                                  href: "https://github.com/develsoftware/GMinerRelease",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-pink-400 hover:underline break-all",
                                  children:
                                    "https://github.com/develsoftware/GMinerRelease",
                                }),
                              ],
                            }),
                            (0, b.jsxs)("div", {
                              children: [
                                (0, b.jsx)("h3", {
                                  className:
                                    "text-xl font-bold text-cyan-200 mb-2",
                                  children: "✅ ASIC Miners",
                                }),
                                (0, b.jsx)("p", {
                                  children:
                                    "**CGMiner** – Bitcoin, Litecoin (OS: Windows, Linux)",
                                }),
                                (0, b.jsx)(h.default, {
                                  href: "https://github.com/ckolivas/cgminer",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-pink-400 hover:underline break-all",
                                  children:
                                    "https://github.com/ckolivas/cgminer",
                                }),
                                (0, b.jsx)("p", {
                                  className: "mt-2",
                                  children:
                                    "**BFGMiner** – Modular ASIC/FPGA (OS: Windows, macOS, Linux)",
                                }),
                                (0, b.jsx)(h.default, {
                                  href: "https://github.com/luke-jr/bfgminer",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-pink-400 hover:underline break-all",
                                  children:
                                    "https://github.com/luke-jr/bfgminer",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("section", {
                      className:
                        "p-6 rounded-lg bg-black/50 border border-pink-400/30 shadow-lg",
                      children: [
                        (0, b.jsx)("h2", {
                          className: "text-2xl font-bold text-pink-300 mb-4",
                          children: "4. Check Operating System Compatibility",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-gray-300 mb-4",
                          children:
                            "**Goal:** Ensure the miner runs smoothly on your OS.",
                        }),
                        (0, b.jsxs)("ul", {
                          className:
                            "list-disc list-inside space-y-2 text-gray-300",
                          children: [
                            (0, b.jsx)("li", {
                              children:
                                "**Windows 10/11**: Most miners support Windows. Use `.exe` installers or command-line tools.",
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                "**macOS**: Fewer miners available. Use Terminal and compile from source if needed.",
                                (0, b.jsx)("pre", {
                                  className:
                                    "bg-gray-800 p-2 rounded-md mt-1 text-sm text-cyan-300",
                                  children: (0, b.jsx)("code", {
                                    children:
                                      "brew install cmake && git clone https://github.com/xmrig/xmrig.git",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsx)("p", {
                          className: "mt-4 text-gray-300",
                          children:
                            "**Tip:** Always run miners as administrator and whitelist them in antivirus software (they’re often flagged falsely).",
                        }),
                      ],
                    }),
                    (0, b.jsxs)("section", {
                      className:
                        "p-6 rounded-lg bg-black/50 border border-cyan-400/30 shadow-lg",
                      children: [
                        (0, b.jsx)("h2", {
                          className: "text-2xl font-bold text-cyan-300 mb-4",
                          children: "5. Configure and Launch Your Miner",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-gray-300 mb-4",
                          children:
                            "**Goal:** Set up your miner with the correct pool and wallet.",
                        }),
                        (0, b.jsxs)("ul", {
                          className:
                            "list-disc list-inside space-y-2 text-gray-300",
                          children: [
                            (0, b.jsxs)("li", {
                              children: [
                                "**Choose a mining pool**: e.g., ",
                                (0, b.jsx)(h.default, {
                                  href: "https://minexmr.com",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "text-cyan-400 hover:underline",
                                  children: "minexmr.com",
                                }),
                                " for Monero, ",
                                (0, b.jsx)(h.default, {
                                  href: "https://2miners.com",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "text-cyan-400 hover:underline",
                                  children: "2miners.com",
                                }),
                                " for Ravencoin",
                              ],
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "**Enter your wallet address**: This is where mined coins are sent.",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "**Set launch parameters**: Usually via `.bat` (Windows) or `.sh` (macOS) files.",
                            }),
                          ],
                        }),
                        (0, b.jsx)("p", {
                          className: "mt-4 text-gray-300",
                          children: "**Example (XMRig config):**",
                        }),
                        (0, b.jsx)("pre", {
                          className:
                            "bg-gray-800 p-3 rounded-md mt-1 text-sm text-cyan-300",
                          children: (0, b.jsx)("code", {
                            children:
                              "xmrig -o pool.minexmr.com:443 -u YOUR_WALLET_ADDRESS -k --tls",
                          }),
                        }),
                      ],
                    }),
                    (0, b.jsxs)("section", {
                      className:
                        "p-6 rounded-lg bg-black/50 border border-pink-400/30 shadow-lg",
                      children: [
                        (0, b.jsx)("h2", {
                          className: "text-2xl font-bold text-pink-300 mb-4",
                          children: "6. Monitor Performance and Safety",
                        }),
                        (0, b.jsx)("p", {
                          className: "text-gray-300 mb-4",
                          children:
                            "**Goal:** Track your mining stats and keep your system safe.",
                        }),
                        (0, b.jsxs)("ul", {
                          className:
                            "list-disc list-inside space-y-2 text-gray-300",
                          children: [
                            (0, b.jsx)("li", {
                              children:
                                "Use built-in miner dashboards or pool websites.",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "Watch CPU/GPU temperatures (HWMonitor, MSI Afterburner).",
                            }),
                            (0, b.jsx)("li", {
                              children:
                                "Avoid mining on battery power or overheating your system.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsxs)("section", {
                      className:
                        "p-6 rounded-lg bg-black/50 border-2 border-red-500/50 shadow-[0_0_20px_rgba(255,80,80,0.3)]",
                      children: [
                        (0, b.jsxs)("div", {
                          className: "flex items-start gap-4",
                          children: [
                            (0, b.jsx)(g, {
                              className:
                                "h-8 w-8 text-red-400 flex-shrink-0 mt-1",
                            }),
                            (0, b.jsxs)("div", {
                              children: [
                                (0, b.jsx)("h2", {
                                  className:
                                    "text-2xl font-bold text-red-400 mb-3",
                                  children:
                                    "Countries Where Crypto Mining Is Illegal (2025)",
                                }),
                                (0, b.jsx)("p", {
                                  className: "text-gray-300 mb-4",
                                  children:
                                    "As of November 2025, cryptocurrency mining is fully illegal in at least six countries, with partial or regional bans in several others. These restrictions are driven by energy concerns, financial risks, and regulatory control.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsx)("h3", {
                          className: "text-xl font-bold text-red-300 mt-4 mb-2",
                          children:
                            "🌍 Countries Where Crypto Mining Is Fully Illegal",
                        }),
                        (0, b.jsxs)("ul", {
                          className:
                            "list-disc list-inside space-y-3 text-gray-300 pl-4",
                          children: [
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", { children: "China" }),
                                " – Banned all crypto mining in 2021 due to energy waste and financial instability. Underground mining still persists.",
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", { children: "Algeria" }),
                                " – Outlawed all crypto activity including mining since 2017 to protect the national currency.",
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", {
                                  children: "Bangladesh",
                                }),
                                " – Criminalized mining and trading under anti-money laundering laws. Violators face imprisonment.",
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", { children: "Nepal" }),
                                " – Mining is illegal under the Foreign Exchange Act. Authorities conduct raids on mining farms.",
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", { children: "Egypt" }),
                                " – Banned since 2018. Religious edicts and economic concerns drive enforcement.",
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", {
                                  children: "Afghanistan",
                                }),
                                " – The Taliban reinstated a mining ban in 2022, shutting down exchanges and arresting operators.",
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsx)("h3", {
                          className: "text-xl font-bold text-red-300 mt-6 mb-2",
                          children:
                            "⚡ Countries With Regional or Temporary Mining Bans",
                        }),
                        (0, b.jsxs)("ul", {
                          className:
                            "list-disc list-inside space-y-3 text-gray-300 pl-4",
                          children: [
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", { children: "Russia" }),
                                " – Banned mining in 10 regions in 2025 due to energy shortages and grid instability.",
                              ],
                            }),
                            (0, b.jsxs)("li", {
                              children: [
                                (0, b.jsx)("strong", { children: "Norway" }),
                                " – Plans to ban new proof-of-work mining data centers in 2025 for environmental reasons.",
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)("div", {
                          className:
                            "mt-6 p-4 rounded-md bg-red-900/30 border border-red-500/50",
                          children: [
                            (0, b.jsx)("h4", {
                              className: "font-bold text-red-300",
                              children: "🛑 Important Notes",
                            }),
                            (0, b.jsxs)("ul", {
                              className:
                                "list-disc list-inside space-y-2 text-red-200/90 mt-2",
                              children: [
                                (0, b.jsx)("li", {
                                  children:
                                    "Mining legality can change rapidly, and enforcement varies by region.",
                                }),
                                (0, b.jsx)("li", {
                                  children:
                                    "Underground mining often continues despite bans, especially in countries like China and Bangladesh.",
                                }),
                                (0, b.jsx)("li", {
                                  children:
                                    "Always check local laws before engaging in mining activities.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, b.jsx)("div", {
                      className:
                        "relative p-6 rounded-lg border-2 border-yellow-500/80 bg-yellow-900/30 shadow-[0_0_20px_rgba(255,223,0,0.3)] mt-12",
                      children: (0, b.jsxs)("div", {
                        className: "flex items-start gap-4",
                        children: [
                          (0, b.jsx)(f, {
                            className:
                              "h-8 w-8 text-yellow-400 flex-shrink-0 mt-1",
                          }),
                          (0, b.jsxs)("div", {
                            children: [
                              (0, b.jsx)("h2", {
                                className: "text-2xl font-bold text-yellow-300",
                                children: "Legal and Ethical Reminder",
                              }),
                              (0, b.jsx)("p", {
                                className: "mt-2 text-yellow-200/90",
                                children:
                                  "Mining software may be restricted or regulated in your country. Always check local laws. You are solely responsible for downloading, installing, and running any mining software. AiQuantum Chart, and affiliated parties assume no liability for your actions or outcomes.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    a.s(["default", () => n], 47145);
  },
];

//# sourceMappingURL=src_app_free-miners_page_tsx_da9177b3._.js.map
