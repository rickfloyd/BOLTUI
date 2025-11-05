
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function JoinPage() {
  return (
    <div className="flex flex-1 items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-md neon-box">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-accent neon-text">Create an Account</CardTitle>
          <CardDescription>Join the Quantum Charts community.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" type="text" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="user@email.com" required />
            </div>
            
            <div className="space-y-4">
                <Label>Address Type</Label>
                <RadioGroup defaultValue="home" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="home" id="home" />
                        <Label htmlFor="home">Home</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business">Business</Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" type="text" placeholder="1234 Main St" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full btn-accent">
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
