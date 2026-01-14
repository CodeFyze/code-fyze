"use client";

import React from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    router.push("/admin/login");
  };

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center z-20 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-md hover:bg-gray-100 md:hidden text-gray-600"
        >
          <FiMenu size={24} />
        </button>
        <img src="/logo.png" alt="CodeFyze" className="h-8 w-auto" />
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
      >
        <FiLogOut />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </header>
  );
}
