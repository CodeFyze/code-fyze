"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BlogForm } from "@/components/admin/BlogForm";
import { useCreateBlogMutation } from "@/lib/features/api/apiSlice";
import { toast } from "react-toastify";

export default function NewBlogPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [createBlog, { isLoading: isSubmitting }] = useCreateBlogMutation();

  const handleSubmit = async (formData: FormData) => {
    setError(null);

    try {
      await createBlog(formData).unwrap();
      toast.success("Blog created successfully");
      router.push("/admin/dashboard/blogs");
    } catch (err: any) {
      console.error("Create blog error:", err);
      const errorMessage = err?.data?.message || err?.error || "Failed to create blog";
      setError(errorMessage);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Create New Blog Post</h2>

      <BlogForm
        error={error || undefined}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
