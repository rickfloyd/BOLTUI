
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PolicyPage() {
  return (
    <div className="flex-1 p-4 md:p-8">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Our Policy: A Commitment to Transparency and Fairness</CardTitle>
          <CardDescription>Last updated: November 20, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">1. The "Bait and Switch" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: The "Locked-In" Feature Guarantee.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> When a customer buys a plan (e.g., "Premium Plan"), they are guaranteed to keep all features of that plan for as long as they remain subscribed. We will never take features away from a paying customer to force an upgrade. Loyalty is rewarded, not punished.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">2. The "Aggressive Crippling of Free Plan" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: A Free Plan That's Actually Useful.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> Our Free Plan is our best advertisement. It will be Ad-Free forever and include powerful core features (like 4 indicators and 2 charts) that are genuinely useful for a new trader. Users will upgrade because they want more power, not because the free plan is useless.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">3. The "Deceptive Discounts" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: 100% Honest & Transparent Pricing.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> We will never use "false advertising." The price you see on the sales page is the exact price you will pay at checkout. All discounts will be clearly and honestly displayed.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">4. The "Billing Nightmares" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: A Secure, World-Class Payment System.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> We use a world-leading payment processor (like Stripe) to handle all subscriptions. This guarantees your security, prevents double-billing, and provides a reliable, professional billing experience.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">5. The "Impossible to Cancel/Refund" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: 1-Click Cancellation. No Questions Asked.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> In your account settings, there will be a clear, simple "Cancel My Subscription" button. One click and you are done. You will never be forced into a "retention loop" or have to argue with a chatbot to stop your payments.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">6. The "Catch-22 for Billing Support" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: Free Billing Support for Everyone.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> We will have a public, dedicated email address (billing@aiquantumcharts.com) that is open to everyone. You do not need to be a paid member to get help with a billing or sales question.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">8. The "No Regional Price Parity" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: Fair Global Pricing (Purchasing Power Parity).</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> We will use a payment system that automatically adjusts our prices based on the customer's country. This ensures a fair, affordable price for users in developing nations, building a loyal global community.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">9. The "Scams" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: Proactive Security & Constant Warnings.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> If we have social chat features, we will have clear "Report User" buttons. A permanent warning banner will be visible in all community areas: "WARNING: Our staff will NEVER ask for your password, private keys, or crypto. Anyone who does is a scammer."
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-primary">10. The "Paid Data is Separate" Problem</h3>
            <p className="font-semibold text-accent">Your 100% Solution: All-Inclusive, "No-Surprise" Pricing.</p>
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Your Policy:</span> The price you see for a plan is the only price you pay. We will not surprise you with hidden, extra monthly fees for real-time data from major exchanges. All data costs are built directly into the plan price.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
