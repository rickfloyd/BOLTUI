
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PolicyPage() {
  return (
    <div className="flex-1 p-4 md:p-8">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
          <CardDescription>Last updated: November 20, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">1. Introduction</h3>
            <p className="text-muted-foreground">
              Welcome to Quantum Charts. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">2. Information Collection</h3>
            <p className="text-muted-foreground">
              We may collect personal information from you such as your name, email address, and payment information when you register for an account, subscribe to our service, or otherwise communicate with us.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">3. Data Usage</h3>
            <p className="text-muted-foreground">
              We use the information we collect to provide, operate, and maintain our services, to process your transactions, to send you marketing communications, to respond to your comments and questions, and to provide you with user support.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">4. Data Sharing</h3>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </div>
           <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">5. Contact Us</h3>
            <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at policy@quantumcharts.dev.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
