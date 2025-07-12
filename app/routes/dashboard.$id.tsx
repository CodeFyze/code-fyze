import { json, redirect } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { getSession } from "~/utills/session.server";
import { BlogForm } from "./dashboard.BlogForm";
import { BlogApiResponse } from "~/types/blog";

export const meta = () => [{ title: "Edit Blog Post" }];

export async function loader({ request, params }: { request: Request; params: { id: string } }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  if (!token) return redirect("/admin/login");
const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) {
  throw new Error("API_BASE_URL environment variable is not set");
}
  try {
    const response = await fetch(`${apiUrl}blog/id/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: BlogApiResponse = await response.json();
    
    if (!data?.data?.blogPost) {
      throw new Error("Invalid blog data structure received");
    }

    return json({ 
      blog: data.data.blogPost,
      token:token 
    });
  } catch (error) {
    console.error("Error loading blog:", error);
    return redirect("/dashboard/blogs");
  }
}

export async function action({ request, params }: { request: Request; params: { id: string } }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const formData = await request.formData();
  const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) {
  throw new Error("API_BASE_URL environment variable is not set");
}
  try {
    const response = await fetch(`${apiUrl}blog/${params.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update blog");
    }

    return redirect("/dashboard/blogs");
  } catch (error) {
    console.error("Action error:", error);
    return json({
      error: error instanceof Error ? error.message : "An error occurred",
    }, { status: 500 });
  }
}

export default function EditBlogPage() {
  const { blog,token } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Edit Blog Post</h2>
      <BlogForm 
        blog={blog} 
        isSubmitting={isSubmitting}
        token={token}
      />
    </div>
  );
}