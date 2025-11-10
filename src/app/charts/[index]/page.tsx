import ChartPageClient from "./client";

export default async function ChartPage({ params }: { params: any }) {
  return <ChartPageClient index={params.index} />;
}
