"use client";

import React, { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Header at the top, full width */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Content area below header */}
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content scrollable independently */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
