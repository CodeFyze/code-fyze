// @ts-nocheck
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Blog } from "@/types/blog";
import { Editor as TinyMCEEditor } from "tinymce";
import { useUploadBlogImageMutation } from "@/lib/features/api/apiSlice";

interface BlogFormProps {
  blog?: Blog;
  isSubmitting?: boolean;
  onSubmit: (formData: FormData) => void;
  error?: string;
}

export function BlogForm({ blog, isSubmitting = false, onSubmit, error }: BlogFormProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [content, setContent] = useState(blog?.content || "");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [uploadImage] = useUploadBlogImageMutation();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("content", content);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {blog?._id && <input type="hidden" name="blogId" value={blog._id} />}

      {/* Error */}
      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title *</label>
        <input
          type="text"
          name="title"
          defaultValue={blog?.title || ""}
          required
          className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Content *</label>
        <input type="hidden" name="content" value={content} />
        <Editor
          apiKey="oe3pqrvw0irsxhxmf0et8aj2ftny5tycp7y67a4nahr46gix"
          onInit={(_evt, editor) => {
            editorRef.current = editor;
            setContent(blog?.content || "");
          }}
          initialValue={blog?.content || ""}
          onEditorChange={(newContent) => setContent(newContent)}
          init={{
            height: 400,
            menubar: false,
            plugins: ["image", "link", "lists", "code", "textcolor", "colorpicker"],
            toolbar:
              "undo redo | formatselect | bold italic underline | forecolor backcolor | link image | bullist numlist | removeformat",
            images_upload_handler: (blobInfo, progress) => {
              return new Promise<string>((resolve, reject) => {
                const formData = new FormData();
                formData.append("image", blobInfo.blob(), blobInfo.filename());

                uploadImage(formData)
                  .unwrap()
                  .then((data: any) => {
                    const imageUrl = data.data?.url;
                    // Check if url is full path or relative
                    if (!imageUrl) throw new Error("Invalid response from server");

                    const finalUrl = imageUrl.startsWith("http")
                      ? imageUrl
                      : `${window.location.origin}${imageUrl}`;
                    resolve(finalUrl);
                  })
                  .catch((err) => reject(err.message || "Upload failed"));
              });
            },
            automatic_uploads: true,
            file_picker_types: "image",
          }}
        />
      </div>

      {/* Featured Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Featured Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />

        <div className="mt-4">
          {previewImage ? (
            <>
              <p className="text-sm font-medium text-gray-700">New Image Preview:</p>
              <img src={previewImage} alt="Preview" className="mt-2 max-h-60 object-contain" />
            </>
          ) : blog?.featuredImage ? (
            <>
              <p className="text-sm font-medium text-gray-700">Current Image:</p>
              <img src={typeof blog.featuredImage === 'string' ? blog.featuredImage : blog.featuredImage.url} alt="Current" className="mt-2 max-h-60 object-contain" />
              <input type="hidden" name="existingImage" value={typeof blog.featuredImage === 'string' ? '' : blog.featuredImage.public_id} />
            </>
          ) : (
            <p className="text-sm text-gray-500 mt-2">No image selected</p>
          )}
        </div>
      </div>

      {/* SEO Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Meta Title *</label>
          <input
            type="text"
            name="metaTitle"
            defaultValue={blog?.metaTitle || ""}
            required
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">URL Slug *</label>
          <input
            type="text"
            name="slug"
            defaultValue={blog?.slug || ""}
            required
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Meta Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Meta Description *</label>
        <textarea
          name="metaDescription"
          defaultValue={blog?.metaDescription || ""}
          rows={3}
          required
          className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-2 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {isSubmitting ? (blog ? "Updating..." : "Creating...") : blog ? "Update Post" : "Create Post"}
        </button>
      </div>
    </form>
  );
}
