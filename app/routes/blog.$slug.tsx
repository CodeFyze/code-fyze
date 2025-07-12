import { LoaderFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";

// Type Definitions
interface BlogPost {
  featuredImage: { url: string };
  title: string;
  content: string;
  createdAt: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  _id: string;
}

interface RecentPost {
  _id: string;
  title: string;
  slug: string;
  featuredImage: { url: string };
}

interface LoaderData {
  blog: BlogPost;
  recent: RecentPost[];
}

// Loader
export async function loader({ params }: LoaderFunctionArgs) {
  const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) throw new Error("API_BASE_URL not set");

  const [blogRes, recentRes] = await Promise.all([
    fetch(`https://cf-backend-5d4o.onrender.com/api/blog/${params.slug}`),
    fetch(`https://cf-backend-5d4o.onrender.com/api/blog/recent`)
  ]);

  if (!blogRes.ok) throw new Response("Blog not found", { status: 404 });

  const blogData = await blogRes.json();
  const recentData = await recentRes.json();

  return json<LoaderData>({
    blog: blogData.data.blogPost,
    recent: recentData.data.recentPosts || []
  });
}

// Meta
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.blog?.metaTitle || data?.blog?.title },
    { name: "description", content: data?.blog?.metaDescription || "" }
  ];
};

// Component
export default function BlogSlug() {
  const { blog, recent } = useLoaderData<LoaderData>();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!contentRef.current) return;
  const container = contentRef.current;
  const paragraphs = container.querySelectorAll("p");

  paragraphs.forEach((p) => {
    const images = p.querySelectorAll("img");
    const onlyImages = Array.from(p.childNodes).every((node) => {
      return node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === "IMG";
    });

    if (onlyImages && images.length >= 2) {
      p.classList.add("flex", "flex-wrap", "gap-4", "justify-center");

      images.forEach((img) => {
        img.classList.remove("mx-auto");
        img.classList.add(
          "object-cover",
          "rounded-lg",
          "shadow-md",
          "transition",
          "hover:scale-105",
          "w-full",
          "sm:w-[48%]",
          "md:w-[30%]",
          "max-h-[250px]",
           "m-4"
        );

        // Remove fixed dimensions
        img.removeAttribute("width");
        img.removeAttribute("height");

        // Ensure responsiveness and aspect ratio
        img.style.height = "auto";
        img.style.maxHeight = "250px";
        img.style.objectFit = "cover";
      });
    }
  });
}, []);


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
     <div className="font-sans">
      {/* Header with background image */}
      <header className="relative text-center py-20 bg-gradient-to-r from-gray-100 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blog.featuredImage.url}
            alt={blog.title}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {blog.title}
          </h1>
          <p className="text-gray-600 mt-3 text-sm">Home / Blog / {blog.title}</p>
          <p className="mt-4 text-sm text-gray-500">{formatDate(blog.createdAt)}</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-10 px-4 md:px-10 lg:px-12 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Blog Content */}
        <div className="md:col-span-3">
          <a
            href="/blogs"
            className="inline-block mb-6 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            ← Back to Blogs
          </a>

          <div className="mb-8">
            <img
              src={blog.featuredImage.url}
              alt={blog.title}
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">{blog.title}</h2>

          <article
            ref={contentRef}
            className="prose prose-lg lg:prose-xl max-w-none prose-img:rounded-md prose-img:my-6 prose-a:text-blue-600 hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1 sticky top-24 self-start">
          <h3 className="text-lg font-semibold mb-6 text-gray-800 border-b pb-2">Recent Posts</h3>
          <ul className="space-y-6">
            {recent.map((post) => (
              <li key={post._id}>
                <a
                  href={`/blog/${post.slug}`}
                  className="flex items-center space-x-4 group"
                >
                  <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg shadow"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                    {post.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
