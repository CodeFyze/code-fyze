"use client";

import { useEffect, useRef } from "react";

/* ================= TYPES ================= */

interface BlogPost {
  featuredImage: { url: string };
  title: string;
  content: string;
  createdAt: string;
  slug: string;
  _id: string;
}

interface RecentPost {
  _id: string;
  title: string;
  slug: string;
  featuredImage: { url: string };
}

/* ================= COMPONENT ================= */

export default function BlogClient({
  blog,
  recent,
}: {
  blog: BlogPost;
  recent: RecentPost[];
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const container = contentRef.current;

    // Images
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach((p) => {
      const images = p.querySelectorAll("img");
      const onlyImages = Array.from(p.childNodes).every(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          (node as HTMLElement).tagName === "IMG"
      );

      if (onlyImages && images.length >= 2) {
        p.classList.add("flex", "flex-wrap", "gap-8", "justify-center");
        images.forEach((img) => {
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
          img.removeAttribute("width");
          img.removeAttribute("height");
          img.style.maxHeight = "250px";
          img.style.objectFit = "cover";
        });
      }
    });

    // Links
    const links = container.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.add(
        "text-blue-600",
        "hover:underline",
        "transition-all",
        "duration-200"
      );
      if (link.hostname !== window.location.hostname) {
        link.classList.add("after:content-['_↗']");
      }
    });

    // Lists
    const lists = container.querySelectorAll("ul, ol");
    lists.forEach((list) => {
      list.classList.add("list-disc", "pl-6", "my-4");
      list.querySelectorAll("li").forEach((li) => {
        li.classList.add("list-item", "my-2");
        li.querySelectorAll("p").forEach((p) =>
          p.classList.add("mb-0", "inline")
        );
      });
    });
  }, []);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="relative text-center py-20 bg-gradient-to-br from-blue-100 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blog.featuredImage.url}
            alt={blog.title}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            {blog.title}
          </h1>
          <p className="text-sm mt-4">
            {formatDate(blog.createdAt)}
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-10 px-4 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-3">
          <img
            src={blog.featuredImage.url}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <article
            ref={contentRef}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1 sticky top-24">
          <h3 className="font-semibold mb-6 border-b pb-2">
            Recent Posts
          </h3>
          <ul className="space-y-6">
            {recent.map((post) => (
              <li key={post._id}>
                <a href={`/blog/${post.slug}`} className="flex gap-4">
                  <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <span className="text-sm font-medium">
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
