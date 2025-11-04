import { Header } from '@/components/layout/header';
import AIAnalysisClient from './_components/ai-analysis-client';

export default function AIAnalysisPage() {
  return (
    <>
      <Header pageTitle="AI Predictive Analysis" />
      <div className="flex-1 p-8 pt-6">
        <AIAnalysisClient />
      </div>
    </>
  );
}
