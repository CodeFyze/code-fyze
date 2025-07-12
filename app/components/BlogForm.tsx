import { Form } from "@remix-run/react";
import { Blog } from "~/types/blog";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface BlogFormProps {
  blog?: Blog;
  error?: string;
  isSubmitting?: boolean;
}

export function BlogForm({ blog, error, isSubmitting = false }: BlogFormProps) {
  const [content, setContent] = useState(blog?.content || '')
  
  return (
    <Form method="post" encType="multipart/form-data" className="space-y-4">
      {blog?._id && <input type="hidden" name="blogId" value={blog._id} />}

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
          {blog && (
            <p className="mt-2 text-sm">
              Please check your inputs and try again
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={blog?.title || ""}
            className="w-full p-2 border rounded mt-1"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700">
            Meta Title*
          </label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
            defaultValue={blog?.metaTitle || ""}
            className="w-full p-2 border rounded mt-1"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content*
        </label>
        <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        className="mt-1 bg-white"
    />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Featured Image
          <span className="text-xs text-gray-500 ml-1">(Leave empty to keep current image)</span>
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className="mt-1"
          disabled={isSubmitting}
        />
        {blog?.featuredImage && (
          <div className="mt-2">
            <p className="text-sm text-gray-500">Current Image:</p>
            <img
              src={typeof blog.featuredImage === 'string' 
                ? blog.featuredImage 
                : blog.featuredImage.url}
              alt="Current featured"
              className="h-40 object-cover rounded mt-1 border"
            />
          </div>
        )}
      </div>

      <div>
        <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
          Meta Description*
        </label>
        <textarea
          id="metaDescription"
          name="metaDescription"
          defaultValue={blog?.metaDescription || ""}
          className="w-full p-2 border rounded mt-1"
          rows={3}
          required
          disabled={isSubmitting}
        />
        <p className="text-xs text-gray-500 mt-1">
          This description appears in search results and social shares.
        </p>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <button
          type="button"
          onClick={() => window.location.href = '/dashboard/blogs'}
          className="px-4 py-2 border rounded hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {blog ? "Updating..." : "Creating..."}
            </span>
          ) : (
            blog ? "Update Post" : "Create Post"
          )}
        </button>
      </div>
    </Form>
  );
}