'use client';

import Link from "next/link";
import { useGetBlogsQuery } from "@/lib/features/api/apiSlice";
import { htmlToText } from "html-to-text";

export default function BlogListClient() {
  const { data, isLoading, isError } = useGetBlogsQuery(undefined);
  const blogs = data?.data?.blogPosts || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const extractPlainText = (html: string): string => {
    return htmlToText(html, {
      wordwrap: false,
      selectors: [
        { selector: "img", format: "skip" },
        { selector: "a", options: { ignoreHref: true } },
      ],
    });
  };

  const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="max-w-[1200px] mx-auto px-6">{children}</div>
  );

  if (isLoading) {
    return (
      <div className="font-sans">
        <header className="relative text-center py-16 bg-gray-100">
          <Container>
            <h1 className="text-5xl font-bold">Our Blog</h1>
            <p className="text-gray-400 mt-2">Home / Blog</p>
          </Container>
        </header>
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg overflow-hidden shadow-lg animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="font-sans text-center py-20">
        <p className="text-red-500">Failed to load blogs. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="relative text-center py-16 bg-gray-100">
        <Container>
          <h1 className="text-5xl font-bold">Our Blog</h1>
          <p className="text-gray-400 mt-2">Home / Blog</p>
        </Container>
      </header>

      {/* Blog Posts Section */}
      <section className="py-16">
        <Container>
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-700">No Blogs Yet</h2>
              <p className="mt-4 text-gray-500">
                We&apos;re working on some amazing content! Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: any) => {
                const plainText = extractPlainText(blog.content);
                const shortDesc =
                  plainText.length > 80
                    ? plainText.slice(0, 80) + "..."
                    : plainText;

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
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-700 text-sm line-clamp-3">
                        {shortDesc}
                      </p>
                      <div className="mt-4 text-black font-semibold hover:text-gray-600 transition duration-300">
                        Read More →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}