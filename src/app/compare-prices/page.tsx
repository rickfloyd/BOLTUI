import { Header } from "@/components/layout/header";
import { Check } from "lucide-react";

export default function ComparePricesPage() {
  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-green-400 mr-2 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );

  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl p-6 lg:p-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-500">
              Get Double The Power.
            </h1>
            <p className="text-2xl lg:text-3xl font-bold mb-4">
              Pay Half The Price.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stop overpaying for crippled plans. Our prices are locked in for
              life.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 via-pink-500 to-fuchsia-500 p-8 rounded-xl shadow-2xl mb-16 max-w-3xl mx-auto ring-4 ring-white/20">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
              🔥 The Founder's FREE Offer
            </h2>
            <p className="text-center text-lg text-gray-100 font-medium mb-6">
              For our first 1,000 members. Get our <strong>Premium</strong> plan{" "}
              <strong>FREE FOR LIFE</strong>.
            </p>
            <div className="text-center">
              <span className="text-5xl font-extrabold text-white font-numeric">
                $0.00
              </span>
              <span className="text-xl text-gray-200 font-medium">/ month</span>
            </div>
            <a
              href="#subscribe-founder"
              className="block w-full text-center bg-white text-gray-900 font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 mt-8"
            >
              Claim Your FREE Founder's Spot
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-700 flex flex-col">
              <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">
                Basic Plan
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-extrabold">FREE</span>
                <span className="text-xl text-gray-400">/ forever</span>
              </div>
              <p className="text-gray-400 mb-6">
                Our free plan gives you double the power of their first *paid*
                plan.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">10</strong>{" "}
                  Indicators per chart
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">4</strong>{" "}
                  Charts in one layout
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">40</strong>{" "}
                  Server-side alerts
                </li>
              </ul>
              <a
                href="#subscribe-free"
                className="block w-full text-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Sign Up For Free
              </a>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-fuchsia-400 relative flex flex-col">
              <span className="absolute top-0 -translate-y-1/2 bg-gradient-to-r from-cyan-500 via-pink-500 to-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">
                Plus Plan
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-extrabold font-numeric">
                  $14.98
                </span>
                <span className="text-xl text-gray-400">/ mo</span>
              </div>
              <p className="text-gray-400 mb-6">
                Half their price, double their features.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">20</strong>{" "}
                  Indicators per chart
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">8</strong>{" "}
                  Charts in one layout
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">200</strong>{" "}
                  Server-side alerts
                </li>
              </ul>
              <a
                href="#subscribe-plus"
                className="block w-full text-center bg-fuchsia-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-fuchsia-300 transition duration-300"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-700 flex flex-col">
              <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">
                Premium Plan
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-extrabold font-numeric">
                  $29.98
                </span>
                <span className="text-xl text-gray-400">/ mo</span>
              </div>
              <p className="text-gray-400 mb-6">
                Half their price, double their features.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">50</strong>{" "}
                  Indicators per chart
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">16</strong>{" "}
                  Charts in one layout
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">800</strong>{" "}
                  Server-side alerts
                </li>
              </ul>
              <a
                href="#subscribe-premium"
                className="block w-full text-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-gray-700 flex flex-col">
              <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">
                Ultimate Plan
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-extrabold font-numeric">
                  $119.98
                </span>
                <span className="text-xl text-gray-400">/ mo</span>
              </div>
              <p className="text-gray-400 mb-6">
                Half their price, double their features.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">100</strong>{" "}
                  Indicators per chart
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">32</strong>{" "}
                  Charts in one layout
                </li>
                <li className="flex items-center">
                  <CheckIcon /> <strong className="font-numeric">2,000</strong>{" "}
                  Server-side alerts
                </li>
              </ul>
              <a
                href="#subscribe-ultimate"
                className="block w-full text-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
            The Value is Clear.
          </h2>

          <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Plan Comparison
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Price / Month
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    "The Leading Competitor" Limit
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-left text-xs font-bold text-fuchsia-400 uppercase tracking-wider"
                  >
                    Your "Double Value" Limit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                <tr className="bg-gray-900/50">
                  <td className="py-4 px-6 text-sm font-medium text-white row-span-3 align-top">
                    <span className="font-bold text-fuchsia-400">
                      Our BASIC
                    </span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">Their ESSENTIAL</span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium row-span-3 align-top font-numeric">
                    <span className="font-bold text-fuchsia-400">FREE</span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">$14.95</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-300">
                    Indicators per Chart
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-400 font-numeric">
                    5
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-green-400 font-numeric">
                    10
                  </td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Charts in one Layout
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    2
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    4
                  </td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Server-Side Alerts
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    20
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    40
                  </td>
                </tr>

                <tr className="bg-gray-800/50">
                  <td className="py-4 px-6 text-sm font-medium text-white row-span-3 align-top">
                    <span className="font-bold text-fuchsia-400">Our PLUS</span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">Their PLUS</span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium row-span-3 align-top font-numeric">
                    <span className="font-bold text-fuchsia-400">$14.98</span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">$29.95</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-300">
                    Indicators per Chart
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-400 font-numeric">
                    10
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-green-400 font-numeric">
                    20
                  </td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Charts in one Layout
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    4
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    8
                  </td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Server-Side Alerts
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    100
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    200
                  </td>
                </tr>

                <tr className="bg-gray-900/50">
                  <td className="py-4 px-6 text-sm font-medium text-white row-span-3 align-top">
                    <span className="font-bold text-fuchsia-400">
                      Our PREMIUM
                    </span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">Their PREMIUM</span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium row-span-3 align-top font-numeric">
                    <span className="font-bold text-fuchsia-400">$29.98</span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">$59.95</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-300">
                    Indicators per Chart
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-400 font-numeric">
                    25
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-green-400 font-numeric">
                    50
                  </td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Charts in one Layout
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    8
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    16
                  </td>
                </tr>
                <tr className="bg-gray-900/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Server-Side Alerts
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    400
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    800
                  </td>
                </tr>

                <tr className="bg-gray-800/50">
                  <td className="py-4 px-6 text-sm font-medium text-white row-span-3 align-top">
                    <span className="font-bold text-fuchsia-400">
                      Our ULTIMATE
                    </span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">Their ULTIMATE</span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium row-span-3 align-top font-numeric">
                    <span className="font-bold text-fuchsia-400">$119.98</span>
                    <br />
                    vs.
                    <br />
                    <span className="text-gray-400">$239.95</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-300">
                    Indicators per Chart
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-400 font-numeric">
                    50
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-green-400 font-numeric">
                    100
                  </td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Charts in one Layout
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    16
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    32
                  </td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td colSpan={1} className="py-4 px-6 text-sm text-gray-300">
                    Server-Side Alerts
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm text-gray-400 font-numeric"
                  >
                    1,000
                  </td>
                  <td
                    colSpan={1}
                    className="py-4 px-6 text-sm font-bold text-green-400 font-numeric"
                  >
                    2,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10 px-4">
            <p className="text-sm text-gray-400">
              "Comparison based on standard monthly prices and features publicly
              listed by the leading competitor in the online charting industry
              as of November 2023. Prices and features are subject to change."
              <strong className="text-red-500">(BUT OURS WONT)</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
