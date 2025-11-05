import { Header } from '@/components/layout/header';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { MainSidebar } from '@/components/layout/main-sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Header />
      <div className="dashboard-grid">
        <MainSidebar />
        {children}
      </div>
    </SidebarProvider>
  );
}
