// app/routes/login.tsx
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { commitSession, getSession } from "~/utills/session.server";


export const meta = () => {
  return [{ title: "Login | Admin Dashboard" }];
};

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  
  // Basic validation
  if (!email || !password) {
    return json({ error: "Email and password are required" }, { status: 400 });
  }
  const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) {
  throw new Error("API_BASE_URL environment variable is not set");
}
  try {
    // Call your API endpoint
    
    const response = await fetch(`${apiUrl}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status !== "success") {
      return json({ error: data.message || "Login failed" }, { status: 401 });
    }

    // Store token in session
    const session = await getSession(request.headers.get("Cookie"));
    session.set("token", data.token);
    session.set("user", data.data.user);

    // Redirect to dashboard with session cookie
    return redirect("/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error) {
    
    return json({ error: "Failed to connect to server" }, { status: 500 });
  }
}

export default function Login() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Admin Login</h2>
        </div>
        {actionData?.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {actionData.error}
          </div>
        )}
        <Form className="mt-8 space-y-6" method="post">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Logging in..." : "Sign in"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}