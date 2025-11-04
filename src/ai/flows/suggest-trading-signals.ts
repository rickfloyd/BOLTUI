'use server';

/**
 * @fileOverview A trading signal suggestion AI agent.
 *
 * - suggestTradingSignals - A function that suggests trading signals based on market data and technical indicators.
 * - SuggestTradingSignalsInput - The input type for the suggestTradingSignals function.
 * - SuggestTradingSignalsOutput - The return type for the suggestTradingSignals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestTradingSignalsInputSchema = z.object({
  marketData: z.string().describe('The current market data for the asset.'),
  technicalIndicators: z
    .string()
    .describe(
      'The values of various technical indicators for the asset (e.g., RSI, MACD, moving averages).' ),
  userPreferences: z
  .string()
  .optional()
  .describe(
    'The users trading preferences.'
  )
});
export type SuggestTradingSignalsInput = z.infer<typeof SuggestTradingSignalsInputSchema>;

const SuggestTradingSignalsOutputSchema = z.object({
  signal: z.string().describe('The AI-generated trading signal.'),
  reason: z.string().describe('The reasoning behind the suggested signal.'),
  confidence: z
    .number()
    .describe('A confidence score (0-1) indicating the reliability of the signal.'),
});
export type SuggestTradingSignalsOutput = z.infer<typeof SuggestTradingSignalsOutputSchema>;

export async function suggestTradingSignals(
  input: SuggestTradingSignalsInput
): Promise<SuggestTradingSignalsOutput> {
  return suggestTradingSignalsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestTradingSignalsPrompt',
  input: {schema: SuggestTradingSignalsInputSchema},
  output: {schema: SuggestTradingSignalsOutputSchema},
  prompt: `You are an AI trading signal generator. Based on the provided market data and technical indicators, you will generate a trading signal, along with a reason and a confidence score.
Market Data: {{{marketData}}}
Technical Indicators: {{{technicalIndicators}}}
User Preferences: {{{userPreferences}}}

Signal:`, // Let the LLM complete the signal and reasoning.
});

const suggestTradingSignalsFlow = ai.defineFlow(
  {
    name: 'suggestTradingSignalsFlow',
    inputSchema: SuggestTradingSignalsInputSchema,
    outputSchema: SuggestTradingSignalsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
