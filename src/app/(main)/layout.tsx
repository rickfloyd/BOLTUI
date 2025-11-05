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
      <div className="dashboard-grid">
        <Header />
        <MainSidebar />
        {children}
      </div>
    </SidebarProvider>
  );
}
