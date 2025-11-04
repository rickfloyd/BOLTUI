import { Header } from '@/components/layout/header';
import { ChartingClient } from './_components/charting-client';

export default function ChartingPage() {
  return (
    <>
      <Header pageTitle="Chart Engine" />
      <div className="flex-1 p-8 pt-6">
        <ChartingClient />
      </div>
    </>
  );
}
