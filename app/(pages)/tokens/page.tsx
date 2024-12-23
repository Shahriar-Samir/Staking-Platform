import Header from "@/components/home/Header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import TableComp from "@/components/Tokens/Table";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Tokens = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="w-11/12 mx-auto">
          <Header />
          <TableComp />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Tokens;
