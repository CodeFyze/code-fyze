import Link from "next/link";
import { Metadata } from "next";
// We need to handle html-to-text. If it's not installed, we might fallback to regex or install it.
// Assuming it is available as it was in Remix code.
import { htmlToText } from "html-to-text";

export const metadata: Metadata = {
  title: "Software Development Agency Blogs | CodeFyze",
  description: "Stay updated with our blogs covering tech trends, & digital solutions for businesses. Contact +971 55 265 4401",
  robots: "index, follow",
};

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

// Data fetching function
async function getBlogPosts() {
  const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) {
    // In production/build, this might be undefined if not set at build time
    // For now we assume env is set or we return empty
    // console.error("API_BASE_URL environment variable is not set");
    return [];
  }

  try {
    const response = await fetch(`${apiUrl}blog`, { next: { revalidate: 3600 } }); // Cache for 1 hour
    if (!response.ok) {
      // throw new Error(`Failed to fetch blog posts: ${response.status}`);
      return [];
    }

    const data = await response.json();
    if (!data.data?.blogPosts) {
      return [];
    }

    return data.data.blogPosts as BlogPost[];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogIndex() {
  const blogs = await getBlogPosts();

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
        { selector: "img", format: "skip" },
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
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-700">No Blogs Yet</h2>
            <p className="mt-4 text-gray-500"> We&apos;re working on some amazing content! Check back soon. </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const plainText = extractPlainText(blog.content);
              const shortDesc = plainText.length > 80 ? plainText.slice(0, 80) + "..." : plainText;

              return (
                <Link
                  href={`/blog/${blog.slug}`}
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
        )}
      </section>
    </div>
  );
}