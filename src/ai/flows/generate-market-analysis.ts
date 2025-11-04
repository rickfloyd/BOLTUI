'use server';

/**
 * @fileOverview An AI agent for generating market analysis summaries.
 *
 * - generateMarketAnalysis - A function that generates a summary of a stock.
 * - GenerateMarketAnalysisInput - The input type for the generateMarketAnalysis function.
 * - GenerateMarketAnalysisOutput - The return type for the generateMarketAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketAnalysisInputSchema = z.object({
  ticker: z.string().describe('The ticker symbol of the stock to analyze.'),
});
export type GenerateMarketAnalysisInput = z.infer<typeof GenerateMarketAnalysisInputSchema>;

const GenerateMarketAnalysisOutputSchema = z.object({
  summary: z.string().describe('A summary of the stock analysis.'),
});
export type GenerateMarketAnalysisOutput = z.infer<typeof GenerateMarketAnalysisOutputSchema>;

export async function generateMarketAnalysis(input: GenerateMarketAnalysisInput): Promise<GenerateMarketAnalysisOutput> {
  return generateMarketAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketAnalysisPrompt',
  input: {schema: GenerateMarketAnalysisInputSchema},
  output: {schema: GenerateMarketAnalysisOutputSchema},
  prompt: `You are a financial analyst. Please provide a brief summary of the stock with ticker symbol {{{ticker}}}. Include key information that would help a potential investor quickly understand the stock's prospects.`,
});

const generateMarketAnalysisFlow = ai.defineFlow(
  {
    name: 'generateMarketAnalysisFlow',
    inputSchema: GenerateMarketAnalysisInputSchema,
    outputSchema: GenerateMarketAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
