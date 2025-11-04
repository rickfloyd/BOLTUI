'use server';

import { generateMarketAnalysis as genMarketAnalysis, GenerateMarketAnalysisInput, GenerateMarketAnalysisOutput } from '@/ai/flows/generate-market-analysis';
import { suggestTradingSignals as genTradingSignals, SuggestTradingSignalsInput, SuggestTradingSignalsOutput } from '@/ai/flows/suggest-trading-signals';

export async function generateMarketAnalysis(input: GenerateMarketAnalysisInput): Promise<GenerateMarketAnalysisOutput> {
  // In a real app, you might add authentication, logging, or data validation here.
  console.log(`Generating market analysis for ${input.ticker}`);
  try {
    const result = await genMarketAnalysis(input);
    return result;
  } catch (error) {
    console.error('Error generating market analysis:', error);
    throw new Error('Failed to communicate with AI service.');
  }
}

export async function suggestTradingSignals(input: SuggestTradingSignalsInput): Promise<SuggestTradingSignalsOutput> {
  // In a real app, you might add authentication, logging, or data validation here.
  console.log('Suggesting trading signals with input:', input);
  try {
    const result = await genTradingSignals(input);
    return result;
  } catch (error) {
    console.error('Error suggesting trading signals:', error);
    throw new Error('Failed to communicate with AI service.');
  }
}
