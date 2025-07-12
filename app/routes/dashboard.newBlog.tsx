import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { getSession } from "~/utills/session.server";
import { BlogForm } from "./dashboard.BlogForm";


export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  return json({
    token,
  });
}

export async function action({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const formData = await request.formData();
  const apiUrl = process.env.API_BASE_URL;

  try {

    const response = await fetch(`${apiUrl}blog/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create blog");
    }

    return redirect("/dashboard/blogs");
  } catch (error) {
    console.error("Action error:", error);
    return json({
      error: error instanceof Error ? error.message : "An error occurred",
      formData: Object.fromEntries(formData)
    }, { status: 500 });
  }
}

export default function NewBlogPage() {
  const { token } = useLoaderData<typeof loader>();
  const actionData = useActionData<{ error?: string }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Create New Blog Post</h2>
      <BlogForm
        error={actionData?.error}
        isSubmitting={isSubmitting}
         token={token} 
      />
    </div>
  );
}