"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import DeleteDialog from "@/components/admin/DeleteDialog";
import { Loader } from "@/components/ui/loader";
import { useGetBlogsQuery, useDeleteBlogMutation } from "@/lib/features/api/apiSlice";
import { toast } from "react-toastify";

interface Blog {
  _id: string;
  title: string;
  content: string;
  featuredImage: { public_id: string; url: string } | string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export default function BlogListPage() {
  const { data: blogsResponse, isLoading: loading, error } = useGetBlogsQuery(undefined);
  const [deleteBlog, { isLoading: isDeleting }] = useDeleteBlogMutation();

  // Handle different response structures if necessary
  const blogs: Blog[] = Array.isArray(blogsResponse?.data?.blogPosts)
    ? blogsResponse.data.blogPosts
    : [];

  const [deleteState, setDeleteState] = useState<{ isOpen: boolean; blogId: string | null; blogTitle: string }>({
    isOpen: false,
    blogId: null,
    blogTitle: "",
  });

  const openDeleteDialog = (id: string, title: string) => {
    setDeleteState({ isOpen: true, blogId: id, blogTitle: title });
  };
  const closeDeleteDialog = () => setDeleteState({ isOpen: false, blogId: null, blogTitle: "" });

  const handleDelete = async () => {
    if (!deleteState.blogId) return;

    try {
      await deleteBlog(deleteState.blogId).unwrap();
      toast.success("Blog deleted successfully");
      closeDeleteDialog();
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || err?.error || "Failed to delete post");
    }
  };

  return (
    <>
      <DeleteDialog
        isOpen={deleteState.isOpen}
        onClose={closeDeleteDialog}
        onConfirm={handleDelete}
        title={deleteState.blogTitle}
        isDeleting={isDeleting}
      />

      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">All Blog Posts</h2>
        <Link
          href="/admin/dashboard/blogs/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Add New Blog
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="w-8 h-8 text-blue-600" />
        </div>
      ) : error ? (
        <div className="text-red-500">Failed to load blogs.</div>
      ) : blogs.length === 0 ? (
        <p className="text-gray-500">No blog posts yet</p>
      ) : (
        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-48 flex-shrink-0">
                  <img
                    src={typeof blog.featuredImage === "string" ? blog.featuredImage : blog.featuredImage.url}
                    alt={blog.title}
                    className="w-full h-40 sm:h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800">
                      {blog.title.length > 50 ? `${blog.title.substring(0, 50)}...` : blog.title}
                    </h3>
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/dashboard/blogs/edit/${blog._id}`}
                        className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => openDeleteDialog(blog._id, blog.title)}
                        className="text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                        disabled={deleteState.isOpen && deleteState.blogId === blog._id && isDeleting}
                      >
                        {deleteState.isOpen && deleteState.blogId === blog._id && isDeleting ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    {blog.slug && <span className="ml-2">• Slug: {blog.slug}</span>}
                  </div>

                  {blog.metaDescription && (
                    <div className="mt-2 text-sm text-gray-500 italic">
                      <span className="font-semibold">Meta:</span> {blog.metaDescription}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
