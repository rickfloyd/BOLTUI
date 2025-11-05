import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

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
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
