"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Loader from "@/components/ui/loader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Determine auth status
    const token = sessionStorage.getItem("token");
    const isAuthenticated = !!token;

    // Define routes
    const isLoginPage = pathname === "/admin/login";

    if (isLoading) {
      if (isAuthenticated && isLoginPage) {
        // Already logged in, trying to access login -> redirect to dashboard
        router.push("/admin/dashboard");
      } else if (!isAuthenticated && !isLoginPage) {
        // Not logged in, trying to access protected route -> redirect to login
        router.push("/admin/login");
      } else {
        // Valid state (logged in & accessing protected, or logged out & accessing login)
        setIsLoading(false);
      }
    }
  }, [pathname, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader className="w-10 h-10 text-blue-600" />
      </div>
    );
  }

  return <>{children}</>;
}
