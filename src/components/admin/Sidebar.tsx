"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiPieChart, FiUsers, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const links = [
    { href: "/admin/dashboard", label: "Overview", icon: FiHome },
    { href: "/admin/dashboard/blogs", label: "Blogs", icon: FiHome },
    // Add more links here later
  ];

  // Decide sidebar state: On mobile, respect isOpen. On desktop, force open.
  const sidebarOpen = isMobile ? isOpen : true;

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-30 transition-opacity",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-40 w-64 bg-gray-50 border-r border-gray-200 transition-transform duration-300 flex flex-col",
          // Mobile: Toggle based on state
          // Desktop: Always show (translate-x-0)
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {isMobile && (
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <span className="font-bold text-lg text-gray-700">Menu</span>
            <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded">
              <FiX size={20} />
            </button>
          </div>
        )}

        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
                onClick={() => isMobile && onClose()}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
