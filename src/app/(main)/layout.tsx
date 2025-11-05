import { Header } from '@/components/layout/header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MainSidebar } from '@/components/layout/main-sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Header />
      <main className="dashboard-grid">
        <MainSidebar />
        {children}
      </main>
    </SidebarProvider>
  );
}
