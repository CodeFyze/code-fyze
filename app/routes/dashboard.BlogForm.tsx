import { Form, Link } from "@remix-run/react";
import { useRef, useState } from "react";
import { Blog } from "~/types/blog";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import ClientOnlyReactQuill from "~/components/ClientOnlyReactQuill";
import { getSession } from "~/utills/session.server";
interface BlogFormProps {
    blog?: Blog;
    error?: string;
    isSubmitting?: boolean;
    token: string | null;
}

export function BlogForm({ blog, error, isSubmitting = false, token }: BlogFormProps) {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [content, setContent] = useState(blog?.content || '')

    const editorRef = useRef<any>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const editorAPI=window.ENV.editor_API;

    return (
        <Form
            method="post"
            encType="multipart/form-data"
            className="space-y-4"
        >
            {blog?._id && <input type="hidden" name="blogId" value={blog._id} />}

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            {/* Title Field */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title *
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={blog?.title || ""}
                    className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    aria-required="true"
                />
            </div>

            {/* Content Field */}
            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Content *
                </label>

                {/* Hidden input for content */}
                <input
                    type="hidden"
                    name="content"
                    value={content}
                    onChange={() => { }} // dummy onChange to prevent React warnings
                />

                <Editor
  apiKey={window.ENV.editor_API}
  onInit={(_evt: unknown, editor: TinyMCEEditor) => {
    editorRef.current = editor;
    setContent(blog?.content || "");
  }}
  initialValue={blog?.content || ""}
  onEditorChange={(newContent: string) => setContent(newContent)}
  init={{
    height: 400,
    menubar: false,
    plugins: ["image", "link", "lists", "code", "textcolor", "colorpicker"],
    toolbar: "undo redo | formatselect | bold italic underline | forecolor backcolor | link image | bullist numlist | removeformat",
    images_upload_handler: (blobInfo: { blob: () => Blob; filename: () => string }, progress: (percent: number) => void) => {
      return new Promise<string>((resolve, reject) => {
        
        const formData = new FormData();
        formData.append("image", blobInfo.blob(), blobInfo.filename());

        fetch(`${window.ENV.API_BASE_URL}blog/upload-content-image`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        })
        .then(async (res) => {
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Upload failed");
          }
          return res.json();
        })
        .then((data: { data?: { url: string } }) => {
          if (!data.data?.url) {
            throw new Error("Received invalid response from server");
          }
          
          // Resolve with the absolute URL
          const imageUrl = data.data.url.startsWith('http')
            ? data.data.url
            : `${window.location.origin}${data.data.url}`;
          
          resolve(imageUrl);
        })
        .catch((err: Error) => {
          console.error("Image upload error:", err);
          reject(err.message || "Image upload failed. Please try again.");
        });
      });
    },
    automatic_uploads: true,
    file_picker_types: "image",
  }}
/>

            </div>

            {/* Featured Image field - Updated */}
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Featured Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                />

                {/* Image Preview Section */}
                <div className="mt-4">
                    {previewImage ? (
                        <div className="current-image">
                            <p className="text-sm font-medium text-gray-700">New Image Preview:</p>
                            <img
                                src={previewImage}
                                alt="New preview"
                                className="mt-2 max-h-60 object-contain"
                            />
                        </div>
                    ) : blog?.featuredImage ? (
                        <div className="current-image">
                            <p className="text-sm font-medium text-gray-700">Current Image:</p>
                            <img
                                src={blog.featuredImage.url}
                                alt="Current featured"
                                className="mt-2 max-h-60 object-contain"
                            />
                            <input
                                type="hidden"
                                name="existingImage"
                                value={blog.featuredImage.public_id}
                            />
                        </div>
                    ) : (
                        <p className="text-sm text-gray-500 mt-2">No image selected</p>
                    )}
                </div>
            </div>

            {/* SEO Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700">
                        Meta Title *
                    </label>
                    <input
                        type="text"
                        id="metaTitle"
                        name="metaTitle"
                        defaultValue={blog?.metaTitle || ""}
                        className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        aria-required="true"
                    />
                </div>

                <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                        URL Slug *
                    </label>
                    <input
                        type="text"
                        id="slug"
                        name="slug"
                        defaultValue={blog?.slug || ""}
                        className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        aria-required="true"
                    />
                </div>
            </div>

            {/* Meta Description */}
            <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
                    Meta Description *
                </label>
                <textarea
                    id="metaDescription"
                    name="metaDescription"
                    defaultValue={blog?.metaDescription || ""}
                    className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    required
                    aria-required="true"
                />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-2 pt-4">
                <Link
                    to="/dashboard/blogs"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
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
                        <span>{blog ? "Update Post" : "Create Post"}</span>
                    )}
                </button>
            </div>
        </Form>
    );
}