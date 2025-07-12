import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { htmlToText } from "html-to-text";

interface BlogPost {
  featuredImage: {
    url: string;
  };
  _id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
}

export async function loader() {
  const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) {
  throw new Error("API_BASE_URL environment variable is not set");
}
  try {
    const response = await fetch(`${apiUrl}blog`);

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data?.blogPosts) {
      throw new Error("Unexpected API response structure");
    }

    return json(data.data.blogPosts);
  } catch (error) {
    console.error("Error in blog loader:", error);
    throw new Response("Could not load blog posts", { status: 500 });
  }
}

export default function BlogIndex() {
  const blogs = useLoaderData<BlogPost[]>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };


  const extractPlainText = (html: string): string => {
  return htmlToText(html, {
    wordwrap: false,
    selectors: [
      { selector: "img", format: "skip" }, // skip images
      { selector: "a", options: { ignoreHref: true } }
      
    ]
  });
};

  return (
     <div className="font-sans">
      {/* Header Section */}
      <header className="relative text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold">Our Blog</h1>
        <p className="text-gray-400 mt-2">Home / Blog</p>
      </header>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const plainText = extractPlainText(blog.content);
            const shortDesc = plainText.length > 80 ? plainText.slice(0, 80) + "..." : plainText;

            return (
              <Link
                to={`/blog/${blog.slug}`}
                key={blog._id}
                className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={blog.featuredImage.url}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">
                    {formatDate(blog.createdAt)}
                  </p>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-700 text-sm line-clamp-3">{shortDesc}</p>
                  <div className="mt-4 text-black font-semibold hover:text-gray-600 transition duration-300">
                    Read More →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-red-600">Error loading blog posts</h2>
      <p className="mt-4">We couldn't load the blog posts. Please try again later.</p>
    </div>
  );
}