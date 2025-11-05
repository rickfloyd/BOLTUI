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
      <div className="flex">
        <Sidebar>
          <MainSidebar />
        </Sidebar>
        <SidebarInset>
          <main className="flex-1 flex flex-col">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
