
import { Form, json, Link, Outlet, redirect, useLoaderData } from "@remix-run/react";
import { getSession } from "~/utills/session.server";

interface User {
  id: string;
  username: string;
  token: string;
}

export const meta = () => [{ title: "Admin Dashboard" }];

export async function loader({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const user = session.get("user");

  if (!token || !user) return redirect("/admin/login");

  return json({ user });
}
export default function DashboardOverview() {
  const { user } = useLoaderData<{ user: User }>();

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-medium text-blue-800">Welcome Back</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">{user.username}</p>
        </div>

        
      </div>
    </>
  );
}