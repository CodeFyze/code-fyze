import { json, redirect } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { getSession } from "~/utills/session.server";
interface Blog {
  _id: string;
  title: string;
  content: string;
  featuredImage: {
    public_id: string;
    url: string;
  } | string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

interface User {
  id: string;
  username: string;
  token: string;
}


export async function loader({ request }: { request: Request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const user = session.get("user");

  if (!token || !user) return redirect("/admin/login");
const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) {
  throw new Error("API_BASE_URL environment variable is not set");
}
  try {
    const response = await fetch(`${apiUrl}blog`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await response.json();
    return json({
      user,
      token,
      blogs: Array.isArray(data?.data?.blogPosts) ? data.data.blogPosts : []
    });
  } catch (error) {
    console.error("Error loading blogs:", error);
    return json({ user, token, blogs: [] });
  }
}

function DeleteConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  blogTitle,
  isDeleting, // Add this prop
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  blogTitle: string;
  isDeleting: boolean;
}) {
  return (
    <Transition appear show={isOpen} as="div">
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Delete Blog Post
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete <span className="font-semibold">"{blogTitle}"</span>? This action cannot be undone.
                  </p>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={onClose}
                    disabled={isDeleting}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={onConfirm}
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Deleting...
                      </span>
                    ) : (
                      "Delete Post"
                    )}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default function BlogListPage() {
  const { user, token, blogs } = useLoaderData<{ user: User; token: string; blogs: Blog[] }>();
  const navigate = useNavigate();
  const [deleteState, setDeleteState] = useState<{
    isOpen: boolean;
    blogId: string | null;
    blogTitle: string;
    isDeleting: boolean; // Add this
  }>({
    isOpen: false,
    blogId: null,
    blogTitle: "",
    isDeleting: false,
  });

  const openDeleteDialog = (id: string, title: string) => {
    setDeleteState({
      isOpen: true,
      blogId: id,
      blogTitle: title,
      isDeleting: false,
    });
  };

  const closeDeleteDialog = () => {
    setDeleteState({
      isOpen: false,
      blogId: null,
      blogTitle: "",
      isDeleting: false,
    });
  };

  const handleDelete = async () => {
    if (!deleteState.blogId) {
      console.error("No ID provided for deletion");
      return;
    }
    const apiUrl = window.ENV.API_BASE_URL;
  if (!apiUrl) {
  throw new Error("API_BASE_URL environment variable is not set");
}

    try {
      setDeleteState(prev => ({ ...prev, isDeleting: true }));

      const response = await fetch(`${apiUrl}blog/${deleteState.blogId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete post");
      }

      closeDeleteDialog();
      navigate(".", { replace: true });
    } catch (error) {
      console.error("Delete error:", error);
      alert(error instanceof Error ? error.message : "Failed to delete post");
      setDeleteState(prev => ({ ...prev, isDeleting: false }));
    }
  };

  return (
    <div className="mt-2">
      <DeleteConfirmationDialog
        isOpen={deleteState.isOpen}
        onClose={closeDeleteDialog}
        onConfirm={handleDelete}
        blogTitle={deleteState.blogTitle}
        isDeleting={deleteState.isDeleting}
      />

      <div className="flex justify-between mb-2">
        <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
        <Link
          to="/dashboard/newBlog"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Add New Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blog posts yet</p>
      ) : (
        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-48 flex-shrink-0">
                  {typeof blog.featuredImage === 'object' ? (
                    <img
                      src={blog.featuredImage.url}
                      alt={blog.title}
                      className="w-full h-40 sm:h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-full h-40 sm:h-full object-cover rounded-lg"
                    />
                  )}
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800"> {blog.title.length > 50 ? `${blog.title.substring(0, 50)}...` : blog.title}</h3>
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/${blog._id}`}
                        className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => openDeleteDialog(blog._id, blog.title)}
                        className="text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                        disabled={deleteState.isOpen && deleteState.blogId === blog._id && deleteState.isDeleting}
                      >
                        {deleteState.isOpen && deleteState.blogId === blog._id && deleteState.isDeleting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Deleting...
                          </span>
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    {blog.slug && (
                      <span className="ml-2">• Slug:  {blog.slug.length > 20 ? `${blog.slug.substring(0, 20)}...` : blog.slug}</span>
                    )}
                  </div>

                  

                  {blog.metaDescription && (
                    <div className="mt-2 text-sm text-gray-500 italic">
                      <span className="font-semibold">Meta:</span>  {blog.metaDescription.length > 20 ? `${blog.metaDescription.substring(0, 20)}...` : blog.metaDescription}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}