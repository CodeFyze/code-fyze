import { json, redirect } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { Sidebar } from "~/components/Sidebar";
import { getSession, destroySession } from "~/utills/session.server";

interface User {
  id: string;
  username: string;
  token: string;
}

export const meta = () => [{ title: "Admin Dashboard" }];

export async function loader({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");

  if (!user) {
    return redirect("/admin/login");
  }

  return json({ user });
}

export async function action({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  
  // Simply destroy the session on logout
  return redirect("/admin/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

export default function DashboardLayout() {
  const { user } = useLoaderData<{ user: User }>();
  const navigate = useNavigate();

  // Client-side protection
  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.username}</span>
            <Form method="post">
              <button
                type="submit"
                className="text-blue-600 hover:text-blue-800"
              >
                Logout
              </button>
            </Form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Sidebar />
          <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}