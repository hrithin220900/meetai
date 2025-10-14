import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/modules/dashboard/components/ui/dashboard-navbar";
import { DashboardSidebar } from "@/modules/dashboard/components/ui/dashboard-sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashboardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
