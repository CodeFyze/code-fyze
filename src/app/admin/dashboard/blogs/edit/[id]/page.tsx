"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { BlogForm } from "@/components/admin/BlogForm";
import { Loader } from "@/components/ui/loader";
import { useGetBlogQuery, useUpdateBlogMutation } from "@/lib/features/api/apiSlice";
import { toast } from "react-toastify";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const { data: blogResponse, isLoading: isFetching, error: fetchError } = useGetBlogQuery(id, {
    skip: !id,
  });

  const [updateBlog, { isLoading: isSubmitting }] = useUpdateBlogMutation();
  const [error, setError] = useState<string | null>(null);

  const blog = blogResponse?.data?.blogPost || (blogResponse?.data as any) || blogResponse;

  useEffect(() => {
    if (fetchError) {
      console.error("Error fetching blog:", fetchError);
      setError("Failed to load blog post");
    }
  }, [fetchError]);

  const handleSubmit = async (formData: FormData) => {
    if (!id) return;

    setError(null);

    try {
      await updateBlog({ id, formData }).unwrap();
      toast.success("Blog updated successfully");
      router.push("/admin/dashboard/blogs");
    } catch (err: any) {
      console.error("Blog update error:", err);
      const errorMessage = err?.data?.message || err?.error || "Failed to update blog";
      setError(errorMessage);
    }
  };

  if (isFetching) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <Loader className="w-8 h-8 text-blue-600" />
      </div>
    );
  }

  if (!blog && !isFetching) {
    return <div className="p-4">Blog not found</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Edit Blog Post</h2>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>
      )}
      <BlogForm
        blog={blog}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
        error={error || undefined}
      />
    </div>
  );
}
