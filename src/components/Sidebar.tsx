'use client';
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="block hover:bg-gray-100 p-2 rounded"
        >
          Overview
        </Link>
        <Link
          href="/dashboard/blogs"
          className="block hover:bg-gray-100 p-2 rounded font-medium"
        >
          Blog Posts
        </Link>
      </nav>
    </div>
  );
}