import Analytics from "@/components/home/Analytics";
import Header from "@/components/home/Header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="w-11/12 mx-auto">
          <Header />
          <Analytics />
        </div>
      </main>
    </SidebarProvider>
  );
}
export default App;
