
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
              <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-blue-800" style={{ textShadow: 'none', filter: 'drop-shadow(0 0 12px rgba(255, 105, 180, 0.8))' }}>
                AI Quantum Charts — Where Your Subscription Goes
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Our promise: 50 % of our competitors’ cost + real transparency.
              </p>
            </div>

            <div className="space-y-12 text-gray-300">

              {/* Community Grant Program */}
              <section>
                <h2 className="text-3xl font-bold mb-4 text-center text-white border-b-2 border-cyan-500/30 pb-3">🎁 Community Grant Program — 2.5 Million USD Fund</h2>
                <p className="text-lg text-center max-w-4xl mx-auto">
                    We dedicate the first $2,500,000 each year to 100 grants of $25,000 each to educators, disabled developers, and innovation teams building ethical AI tools.
                    Every paid subscription helps grow this fund.
                </p>
                <p className="text-lg text-center max-w-4xl mx-auto text-pink-400 mt-2">(WE NEED TO GET TO THAT LEVEL FIRST)</p>
              </section>

              {/* How Each $1 Is Used */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">💰 How Each <span className="text-green-400">$1</span> Is Used</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Percent of Every Dollar</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-black/30 divide-y divide-gray-700">
                      <tr><td className="px-6 py-4">🧠 Grants & Community Funding</td><td className="px-6 py-4"><span className="neon-gold">20 %</span></td><td className="px-6 py-4">Directly supports the annual $2.5 M grant pool</td></tr>
                      <tr><td className="px-6 py-4">💻 Development & Engineering</td><td className="px-6 py-4"><span className="neon-gold">30 %</span></td><td className="px-6 py-4">Front-end + back-end dev team salaries and AI research</td></tr>
                      <tr><td className="px-6 py-4">☁️ Cloud Hosting & Data Feeds</td><td className="px-6 py-4"><span className="neon-gold">10 %</span></td><td className="px-6 py-4">Servers, CDN, API licenses (Finnhub, TwelveData, Polygon)</td></tr>
                      <tr><td className="px-6 py-4">📣 Marketing & Conventions</td><td className="px-6 py-4"><span className="neon-gold">15 %</span></td><td className="px-6 py-4">Social media teams, event booths, trader education tours</td></tr>
                      <tr><td className="px-6 py-4">⚖️ Legal & Compliance</td><td className="px-6 py-4"><span className="neon-gold">15 %</span></td><td className="px-6 py-4">SEC / CFTC / FTC attorneys, GDPR audits, insurance coverage</td></tr>
                      <tr><td className="px-6 py-4">🧾 Administration & Support</td><td className="px-6 py-4"><span className="neon-gold">5 %</span></td><td className="px-6 py-4">Payroll, finance, customer service</td></tr>
                      <tr><td className="px-6 py-4">💡 Innovation Reserve</td><td className="px-6 py-4"><span className="neon-gold">5 %</span></td><td className="px-6 py-4">New feature R&D, education initiatives, emergency funds</td></tr>
                      <tr className="font-bold bg-gray-800/50"><td className="px-6 py-4">Total:</td><td className="px-6 py-4"><span className="neon-gold">100 %</span></td><td className="px-6 py-4"></td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Annual Operating Model */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">📊 Annual Operating Model (Approx.)</h2>
                <div className="overflow-x-auto">
                   <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800/50"><tr><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Cost Center</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Annual Budget (USD)</th><th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Notes</th></tr></thead>
                        <tbody className="bg-black/30 divide-y divide-gray-700">
                            <tr><td className="px-6 py-4">Grants Fund (100 × $25 K)</td><td className="px-6 py-4">$2,500,000</td><td className="px-6 py-4">Reinvested directly into community grants</td></tr>
                            <tr><td className="px-6 py-4">Engineering Team (12–15 staff)</td><td className="px-6 py-4">$1.8 M</td><td className="px-6 py-4">Continuous front-end / back-end innovation</td></tr>
                            <tr><td className="px-6 py-4">Infrastructure & Data Feeds</td><td className="px-6 py-4">$150 K</td><td className="px-6 py-4">Cloud hosting + market data providers</td></tr>
                            <tr><td className="px-6 py-4">Legal / Compliance / Auditing</td><td className="px-6 py-4">$700 K</td><td className="px-6 py-4">SEC / CFTC / FTC / GDPR compliance</td></tr>
                            <tr><td className="px-6 py-4">Marketing & Conventions</td><td className="px-6 py-4">$400 K</td><td className="px-6 py-4">Global events + weekly social outreach</td></tr>
                            <tr><td className="px-6 py-4">Admin & Insurance</td><td className="px-6 py-4">$150 K</td><td className="px-6 py-4">HR, payroll, cyber liability coverage</td></tr>
                            <tr className="font-bold bg-gray-800/50"><td className="px-6 py-4">Total Annual Operating Budget:</td><td className="px-6 py-4">≈ $5.7 Million</td><td className="px-6 py-4"></td></tr>
                        </tbody>
                   </table>
                </div>
              </section>

              {/* Transparency Promise */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-white border-b-2 border-cyan-500/30 pb-3">🌍 Transparency Promise</h2>
                <ul className="list-disc list-inside space-y-4 text-lg">
                    <li>Public quarterly “Where Your Money Goes” ledger</li>
                    <li>Independent audit posted annually</li>
                    <li>Grant recipients listed by project and impact</li>
                    <li>No hidden fees, no upsells, no dark billing</li>
                </ul>
              </section>
              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">Regulatory & Legal Layer (U.S. + International)</h2>
                <p>You’ll need specialized attorneys and compliance partners who understand SEC, CFTC, FTC, GDPR, FINRA, and international frameworks (EU, Canada, Australia, etc.).</p>
                <div className="overflow-x-auto mt-4">
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
                      <tr>
                        <td className="px-6 py-4">SEC/CFTC Compliance Attorney</td>
                        <td className="px-6 py-4">External counsel (retainer)</td>
                        <td className="px-6 py-4">$120K–$200K</td>
                        <td className="px-6 py-4">Ensures platform avoids broker-dealer or exchange classification; reviews disclosures</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">FTC / Consumer Protection Lawyer</td>
                        <td className="px-6 py-4">External counsel</td>
                        <td className="px-6 py-4">$60K–$100K</td>
                        <td className="px-6 py-4">Verifies marketing, ads, and grant programs are compliant</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Data Privacy / GDPR Specialist</td>
                        <td className="px-6 py-4">Consultant or retained</td>
                        <td className="px-6 py-4">$50K–$90K</td>
                        <td className="px-6 py-4">Handles EU/UK/Canada data protection (GDPR, PIPEDA, etc.)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">General Corporate Counsel</td>
                        <td className="px-6 py-4">Part-time or full-time</td>
                        <td className="px-6 py-4">$100K–$180K</td>
                        <td className="px-6 py-4">Contracts, IP, trademarks, NDAs, employment law</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Auditor / Forensic Accountant</td>
                        <td className="px-6 py-4">Contract basis</td>
                        <td className="px-6 py-4">$50K–$120K</td>
                        <td className="px-6 py-4">Annual audits, transparency verification, investor assurance</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Compliance Officer (internal)</td>
                        <td className="px-6 py-4">Staff position</td>
                        <td className="px-6 py-4">$90K–$140K</td>
                        <td className="px-6 py-4">Maintains compliance logs, risk assessments, and KYC/AML policy enforcement</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Insurance (Cyber + E&O + Liability)</td>
                        <td className="px-6 py-4">Annual premium</td>
                        <td className="px-6 py-4">$30K–$60K</td>
                        <td className="px-6 py-4">Protects against data breaches, user claims, or system errors</td>
                      </tr>
                      <tr className="font-bold bg-gray-800/50">
                        <td className="px-6 py-4" colSpan={2}>✅ Total Legal + Compliance Annual Cost:</td>
                        <td className="px-6 py-4" colSpan={2}>≈ $500K – $900K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">Convention Costs (with Compliance Oversight)</h2>
                <p>For large industry events (e.g., Money 20/20, Fintech Nexus, Trading Expo, Token2049):</p>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Expense</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Average</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="bg-black/30 divide-y divide-gray-700">
                      <tr>
                        <td className="px-6 py-4">Booth & branding</td>
                        <td className="px-6 py-4">$20K</td>
                        <td className="px-6 py-4">Includes setup, displays</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Travel (4–6 staff)</td>
                        <td className="px-6 py-4">$12K</td>
                        <td className="px-6 py-4">Airfare, lodging, meals</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Compliance officer travel</td>
                        <td className="px-6 py-4">$5K</td>
                        <td className="px-6 py-4">To monitor data/promo compliance</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Swag & printed materials</td>
                        <td className="px-6 py-4">$5K</td>
                        <td className="px-6 py-4">Shirts, flyers, QR cards</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">Networking / sponsorship</td>
                        <td className="px-6 py-4">$8K</td>
                        <td className="px-6 py-4">VIP dinners, press booths</td>
                      </tr>
                      <tr className="font-bold bg-gray-800/50">
                        <td className="px-6 py-4">➡️ Per convention total:</td>
                        <td className="px-6 py-4" colSpan={2}>~$50K</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-center mt-4">6–8 conventions/year: $300K–$400K annual marketing + outreach budget.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
