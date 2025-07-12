import { Link } from "@remix-run/react";

export function Sidebar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block hover:bg-gray-100 p-2 rounded"
        >
          Overview
        </Link>
        <Link
          to="/dashboard/blogs"
          className="block hover:bg-gray-100 p-2 rounded font-medium"
        >
          Blog Posts
        </Link>
      </nav>
    </div>
  );
}