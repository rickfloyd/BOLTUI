
import { Header } from '@/components/layout/header';
import { ShieldCheck } from 'lucide-react';

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.4)] backdrop-blur-md border border-cyan-400/40">
            <div className="text-center mb-12">
              <ShieldCheck className="mx-auto h-16 w-16 text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
              <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-pink-400 drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]">
                Our Customer Trust & Policies
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Welcome to aiquantumcharts.com. Our entire business is built on a single idea: <strong>trust</strong>. We believe you deserve powerful tools, fair prices, and honest policies. We are not "The Other Guys." Here is our simple, unbreakable commitment to you.
              </p>
            </div>

            <div className="space-y-10">
              {/* Pricing & Billing Policies */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-300 border-b-2 border-cyan-500/30 pb-3">1. Pricing &amp; Billing Policies</h2>
                <ul className="space-y-6 text-gray-300 text-lg">
                  <li>
                    <strong className="text-white block text-xl font-semibold">The "Price Lock" Guarantee</strong>
                    The price you sign up for (monthly or annual) is <strong>locked in for the life of your subscription.</strong> We will never raise your rates. Our prices won't change on you.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">All-Inclusive, "No-Surprise" Pricing</strong>
                    The price you see is the only price you pay. We do <strong>not</strong> have hidden, extra monthly fees for real-time market data from major exchanges. All data costs are built directly into your plan price.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">The 7-Day "Grace Period"</strong>
                    We understand that not everyone gets paid on the same day. If a payment ever fails, your account is <strong>not</strong> instantly shut off. Your access continues uninterrupted for a 7-day grace period, and we'll send you a simple, no-hassle email to update your billing info.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">Fair Global Pricing (PPP)</strong>
                    We believe everyone deserves access to powerful tools. We use Purchasing Power Parity (PPP) to automatically adjust our prices to be fair and affordable for your country's local economy.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">Secure &amp; Honest Billing</strong>
                    We use a world-leading, PCI-compliant payment processor (Stripe) to handle all subscriptions. This guarantees your data is secure and you will never be double-billed or charged for services you haven't authorized.
                  </li>
                </ul>
              </div>

              {/* Service & Feature Policies */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-300 border-b-2 border-cyan-500/30 pb-3">2. Service &amp; Feature Policies</h2>
                <ul className="space-y-6 text-gray-300 text-lg">
                  <li>
                    <strong className="text-white block text-xl font-semibold">The "Feature-Lock" Guarantee</strong>
                    This is our "No Bait-and-Switch" promise. When you buy a plan, you are <strong>guaranteed to keep all the features of that plan</strong> for as long as you are subscribed. We will never remove features from paying customers to force an upgrade.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">1-Click "No-Hassle" Cancellation</strong>
                    You are in complete control. You can cancel your subscription at any time from your account settings with a <strong>single click.</strong> You will never be forced into a "retention loop" or have to argue with a chatbot to stop your payments.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">A Free Plan That's Actually Useful</strong>
                    Our Free plan is our best advertisement. It is powerful, genuinely useful, and <strong>100% Ad-Free, forever.</strong> We believe you should upgrade because you want more power, not because the free plan is broken.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">Free Billing Support for Everyone</strong>
                    You should never have to pay to ask a question. Our billing and sales support is free for <strong>everyone</strong>. You do not need to be a paid member to get help with a payment or account question.
                  </li>
                  <li>
                    <strong className="text-white block text-xl font-semibold">Proactive Security &amp; Fraud Protection</strong>
                    We will <strong>never</strong> ask for your password, private keys, or cryptocurrency. All official communication will always come from an <code>@aiquantumcharts.com</code> email address. Any "free premium" offers you see on social media are scams.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
