'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateMarketAnalysis, suggestTradingSignals } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Sparkles, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  ticker: z.string().min(1, 'Ticker is required.').max(10, 'Ticker is too long.'),
});

type MarketAnalysis = {
  summary: string;
};

type TradingSignal = {
  signal: string;
  reason: string;
  confidence: number;
};

export default function AIAnalysisClient() {
  const [analysis, setAnalysis] = useState<MarketAnalysis | null>(null);
  const [signal, setSignal] = useState<TradingSignal | null>(null);
  const [isLoading, setIsLoading] = useState<'analysis' | 'signal' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ticker: 'AAPL' },
  });

  async function handleAnalysis(values: z.infer<typeof formSchema>) {
    setIsLoading('analysis');
    setError(null);
    setAnalysis(null);
    setSignal(null);
    try {
      const result = await generateMarketAnalysis({ ticker: values.ticker });
      setAnalysis(result);
    } catch (e) {
      setError('Failed to generate market analysis.');
    } finally {
      setIsLoading(null);
    }
  }

  async function handleSignal(values: z.infer<typeof formSchema>) {
    setIsLoading('signal');
    setError(null);
    setAnalysis(null);
    setSignal(null);
    try {
      const result = await suggestTradingSignals({
        marketData: `Current price for ${values.ticker} is volatile.`,
        technicalIndicators: 'RSI is at 65, MACD is crossing over.',
        userPreferences: 'High risk tolerance, looking for short-term gains.',
      });
      setSignal(result);
    } catch (e) {
      setError('Failed to suggest trading signals.');
    } finally {
      setIsLoading(null);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="neon-box">
        <CardHeader>
          <CardTitle>Generate AI Insights</CardTitle>
          <CardDescription>Enter a stock ticker to generate analysis or suggest trading signals.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4">
              <FormField
                control={form.control}
                name="ticker"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Stock Ticker</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., TSLA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex space-x-4">
                <Button type="button" onClick={form.handleSubmit(handleAnalysis)} disabled={!!isLoading} className="btn-primary">
                  {isLoading === 'analysis' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Generate Market Analysis
                </Button>
                <Button type="button" onClick={form.handleSubmit(handleSignal)} disabled={!!isLoading} variant="outline" className="btn-accent">
                  {isLoading === 'signal' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <TrendingUp className="mr-2 h-4 w-4" />}
                  Suggest Trading Signal
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="bg-destructive/20 border-destructive text-destructive-foreground neon-box">
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>{error}</CardContent>
        </Card>
      )}

      {analysis && (
        <Card className="neon-box animate-in fade-in">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2"><Sparkles className="h-5 w-5"/> Market Analysis for {form.getValues('ticker')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-wrap">{analysis.summary}</p>
          </CardContent>
        </Card>
      )}

      {signal && (
        <Card className="neon-box animate-in fade-in">
          <CardHeader>
            <CardTitle className="text-accent flex items-center gap-2"><TrendingUp className="h-5 w-5"/> Trading Signal for {form.getValues('ticker')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">Signal</h3>
              <p className="text-lg font-bold">{signal.signal}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">Confidence</h3>
              <div className="flex items-center gap-2">
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: `${signal.confidence * 100}%` }}></div>
                </div>
                <span className="font-mono text-accent">{(signal.confidence * 100).toFixed(0)}%</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">Reasoning</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{signal.reason}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
