import { Header } from '@/components/layout/header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header pageTitle="Quantum Charts" />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
