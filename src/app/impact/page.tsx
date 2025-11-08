
import { Header } from '@/components/layout/header';
import { HeartHandshake } from 'lucide-react';

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-pink-400/40">
            <div className="text-center mb-12">
              <HeartHandshake className="mx-auto h-16 w-16 text-pink-400 drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]" />
              <h2 className="text-2xl md:text-3xl font-bold mt-4 text-cyan-300">VISUAL</h2>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-2 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                Our Impact Statement
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Once our company goals are achieved, a percentage of every paying customer’s monthly subscription will be directed into a private scholarship fund. This fund will provide grants to high school students who aspire to attend business and finance specialty schools. It’s our way of investing in the next generation of innovators — and that’s what makes us different.
              </p>
            </div>

            <div className="space-y-12 text-gray-300">

              {/* Core Development Team */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">1. Core Development Team (for fast weekly builds)</h2>
                <p className="mb-6">To maintain “super-fast” coding velocity, with front- and back-end updates, bug fixes, and feature releases every week, you’ll need ~10–15 full-time equivalents (FTEs).</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">#</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">U.S. / Global blended annual salary</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Key Responsibility</th>
                      </tr>
                    </thead>
                    <tbody className="bg-black/30 divide-y divide-gray-700">
                      <tr><td className="px-6 py-4">CTO / Lead Architect</td><td className="px-6 py-4">1</td><td className="px-6 py-4">$150 K–$220 K</td><td className="px-6 py-4">Oversees stack, scaling, security</td></tr>
                      <tr><td className="px-6 py-4">Full-Stack Devs (React + Node/Firebase)</td><td className="px-6 py-4">3</td><td className="px-6 py-4">$110 K–$150 K ea</td><td className="px-6 py-4">Rapid front/back integration</td></tr>
                      <tr><td className="px-6 py-4">Frontend Devs (UI/UX + Tailwind/Next.js)</td><td className="px-6 py-4">2</td><td className="px-6 py-4">$90 K–$130 K ea</td><td className="px-6 py-4">Dashboard, charting UI</td></tr>
                      <tr><td className="px-6 py-4">Backend / API Engineers (Python + Realtime)</td><td className="px-6 py-4">2</td><td className="px-6 py-4">$100 K–$140 K ea</td><td className="px-6 py-4">Live data, sockets, DB performance</td></tr>
                      <tr><td className="px-6 py-4">DevOps / Cloud Engineer</td><td className="px-6 py-4">1</td><td className="px-6 py-4">$120 K–$160 K</td><td className="px-6 py-4">Handles servers, scaling, CI/CD</td></tr>
                      <tr><td className="px-6 py-4">Data / AI Engineer</td><td className="px-6 py-4">1</td><td className="px-6 py-4">$120 K–$180 K</td><td className="px-6 py-4">Data feeds, analytics, model tuning</td></tr>
                      <tr><td className="px-6 py-4">QA / Automation Tester</td><td className="px-6 py-4">1</td><td className="px-6 py-4">$70 K–$100 K</td><td className="px-6 py-4">Testing, regression, bug QA</td></tr>
                      <tr><td className="px-6 py-4">UI/Graphic Designer</td><td className="px-6 py-4">1</td><td className="px-6 py-4">$70 K–$110 K</td><td className="px-6 py-4">Brand, neon visuals, promo graphics</td></tr>
                      <tr><td className="px-6 py-4">Project Manager / Scrum Lead</td><td className="px-6 py-4">1</td><td className="px-6 py-4">$90 K–$130 K</td><td className="px-6 py-4">Keeps releases moving fast</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-lg">➡️ Approx. annual payroll: <strong className="text-white">$1.4 – $2.2 million</strong></p>
                <p className="mt-2 text-gray-400">If you hire mixed-market (e.g., U.S. leads + offshore support in Europe/Asia/LatAm), you can cut that 30–40 % while maintaining speed.</p>
              </section>

              {/* Infrastructure */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">💻 2. Infrastructure and Core Services</h2>
                <div className="overflow-x-auto">
                   <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50"><tr><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Service</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Monthly</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Annual</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Notes</th></tr></thead>
                    <tbody className="bg-black/30 divide-y divide-gray-700">
                        <tr><td className="px-6 py-4">Cloud hosting (AWS/Azure/GCP)</td><td className="px-6 py-4">$5 K–$10 K</td><td className="px-6 py-4">$60 K–$120 K</td><td className="px-6 py-4">Global servers, auto-scale</td></tr>
                        <tr><td className="px-6 py-4">APIs & data feeds (TwelveData, Finnhub, Polygon)</td><td className="px-6 py-4">$2 K–$5 K</td><td className="px-6 py-4">$25 K–$60 K</td><td className="px-6 py-4">Real-time quotes, news</td></tr>
                        <tr><td className="px-6 py-4">Security, backups, monitoring</td><td className="px-6 py-4">$1 K–$2 K</td><td className="px-6 py-4">$12 K–$24 K</td><td className="px-6 py-4">Cloudflare, logging, threat protection</td></tr>
                        <tr><td className="px-6 py-4">Email, auth, CDN, misc SaaS</td><td className="px-6 py-4">$500–$1 K</td><td className="px-6 py-4">$6 K–$12 K</td><td className="px-6 py-4">Firebase, SendGrid, analytics</td></tr>
                    </tbody>
                   </table>
                </div>
                 <p className="mt-6 text-lg">➡️ Infra subtotal: <strong className="text-white">≈ $100 K – $200 K / year</strong></p>
              </section>

              {/* Marketing */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">📣 3. Marketing & Convention Budget</h2>
                <p className="mb-6">You mentioned heavy weekly social media + conventions — here’s the combined outlook.</p>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">🧭 Weekly Digital / Social Marketing</h3>
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800/50"><tr><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Role</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">#</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Annual</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Notes</th></tr></thead>
                        <tbody className="bg-black/30 divide-y divide-gray-700">
                            <tr><td className="px-6 py-4">Social Media Manager</td><td className="px-6 py-4">1</td><td className="px-6 py-4">$70 K–$100 K</td><td className="px-6 py-4">Multi-platform daily posts</td></tr>
                            <tr><td className="px-6 py-4">Content Creator / Video Editor</td><td className="px-6 py-4">1–2</td><td className="px-6 py-4">$60 K–$90 K ea</td><td className="px-6 py-4">Shorts, Reels, chart clips</td></tr>
                            <tr><td className="px-6 py-4">Paid Ads Budget (Meta, YouTube, Google)</td><td className="px-6 py-4">—</td><td className="px-6 py-4">$5 K–$10 K / mo ($60 K–$120 K / yr)</td><td></td></tr>
                            <tr><td className="px-6 py-4">Copywriter / PR</td><td className="px-6 py-4">1 (part-time)</td><td className="px-6 py-4">$40 K</td><td className="px-6 py-4">Press releases, blogs</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-lg">➡️ Digital marketing subtotal: <strong className="text-white">≈ $250 K – $350 K / year</strong></p>

                <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-300">🏦 Convention & Event Marketing</h3>
                <p className="mb-4">Average banking/trading conference booth package (U.S./EU/Asia):</p>
                <div className="overflow-x-auto mb-6">
                   <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800/50"><tr><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Expense</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Typical Range</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Notes</th></tr></thead>
                        <tbody className="bg-black/30 divide-y divide-gray-700">
                            <tr><td className="px-6 py-4">Booth space (10x10 ft to 20x20 ft)</td><td className="px-6 py-4">$8 K – $25 K</td><td className="px-6 py-4">Higher for premium expos</td></tr>
                            <tr><td className="px-6 py-4">Booth design / build</td><td className="px-6 py-4">$5 K – $15 K</td><td className="px-6 py-4">Modular reusable setup</td></tr>
                            <tr><td className="px-6 py-4">Travel & lodging (3-4 staff)</td><td className="px-6 py-4">$6 K – $12 K</td><td className="px-6 py-4">Flights, hotels, meals</td></tr>
                            <tr><td className="px-6 py-4">Printed materials & swag</td><td className="px-6 py-4">$2 K – $5 K</td><td className="px-6 py-4">Banners, shirts, brochures</td></tr>
                            <tr><td className="px-6 py-4">Misc / sponsorships</td><td className="px-6 py-4">$2 K – $8 K</td><td className="px-6 py-4">Event branding, giveaways</td></tr>
                        </tbody>
                   </table>
                </div>
                <p className="text-lg">➡️ Per-event total: <strong className="text-white">roughly $25 K – $60 K</strong></p>
                <p className="mt-2 text-gray-400">If you do 6–8 conventions/year, plan $150 K – $400 K for event marketing.</p>
              </section>

              {/* Summary */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">💵 4. Combined Annual Burn-Rate Estimate</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800/50"><tr><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Category</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Yearly Cost</th></tr></thead>
                        <tbody className="bg-black/30 divide-y divide-gray-700">
                            <tr><td className="px-6 py-4">Team (engineering + management)</td><td className="px-6 py-4">$1.4 M – $2.2 M</td></tr>
                            <tr><td className="px-6 py-4">Infrastructure & tools</td><td className="px-6 py-4">$0.1 M – $0.2 M</td></tr>
                            <tr><td className="px-6 py-4">Marketing (digital + events)</td><td className="px-6 py-4">$0.3 M – $0.7 M</td></tr>
                            <tr className="font-bold text-white"><td className="px-6 py-4">Total Operating Budget</td><td className="px-6 py-4">≈ $1.8 M – $3.1 M / year</td></tr>
                        </tbody>
                    </table>
                </div>
              </section>
              
              {/* Legal & Compliance */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">5. Regulatory & Legal Layer (U.S. + International)</h2>
                <p className="mb-6">You’ll need specialized attorneys and compliance partners who understand SEC, CFTC, FTC, GDPR, FINRA, and international frameworks (EU, Canada, Australia, etc.).</p>
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Role / Service</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Annual Cost Range</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Responsibility</th>
                            </tr>
                        </thead>
                        <tbody className="bg-black/30 divide-y divide-gray-700">
                            <tr><td className="px-6 py-4">SEC/CFTC Compliance Attorney</td><td className="px-6 py-4">External counsel (retainer)</td><td className="px-6 py-4">$120K–$200K</td><td className="px-6 py-4">Ensures platform avoids broker-dealer or exchange classification; reviews disclosures</td></tr>
                            <tr><td className="px-6 py-4">FTC / Consumer Protection Lawyer</td><td className="px-6 py-4">External counsel</td><td className="px-6 py-4">$60K–$100K</td><td className="px-6 py-4">Verifies marketing, ads, and grant programs are compliant</td></tr>
                            <tr><td className="px-6 py-4">Data Privacy / GDPR Specialist</td><td className="px-6 py-4">Consultant or retained</td><td className="px-6 py-4">$50K–$90K</td><td className="px-6 py-4">Handles EU/UK/Canada data protection (GDPR, PIPEDA, etc.)</td></tr>
                            <tr><td className="px-6 py-4">General Corporate Counsel</td><td className="px-6 py-4">Part-time or full-time</td><td className="px-6 py-4">$100K–$180K</td><td className="px-6 py-4">Contracts, IP, trademarks, NDAs, employment law</td></tr>
                            <tr><td className="px-6 py-4">Auditor / Forensic Accountant</td><td className="px-6 py-4">Contract basis</td><td className="px-6 py-4">$50K–$120K</td><td className="px-6 py-4">Annual audits, transparency verification, investor assurance</td></tr>
                            <tr><td className="px-6 py-4">Compliance Officer (internal)</td><td className="px-6 py-4">Staff position</td><td className="px-6 py-4">$90K–$140K</td><td className="px-6 py-4">Maintains compliance logs, risk assessments, and KYC/AML policy enforcement</td></tr>
                            <tr><td className="px-6 py-4">Insurance (Cyber + E&O + Liability)</td><td className="px-6 py-4">Annual premium</td><td className="px-6 py-4">$30K–$60K</td><td className="px-6 py-4">Protects against data breaches, user claims, or system errors</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-lg">✅ Total Legal + Compliance Annual Cost: <strong className="text-white">≈ $500K – $900K</strong></p>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
