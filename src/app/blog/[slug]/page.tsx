import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogClient from "./BlogClient";

/* ================= TYPES ================= */

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

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ================= METADATA ================= */

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params; // ✅ FIX

  const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) return {};

  const res = await fetch(`${apiUrl}blog/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return {};

  const data = await res.json();
  const blog: BlogPost = data.data.blogPost;

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || "",
    robots: "index, follow",
  };
}

/* ================= PAGE ================= */

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params; // ✅ FIX

  const apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) throw new Error("API_BASE_URL not set");

  const [blogRes, recentRes] = await Promise.all([
    fetch(`${apiUrl}blog/${slug}`, { cache: "no-store" }),
    fetch(`${apiUrl}blog/recent`, { cache: "no-store" }),
  ]);

  if (!blogRes.ok) notFound();

  const blogData = await blogRes.json();
  const recentData = await recentRes.json();

  return (
    <BlogClient
      blog={blogData.data.blogPost}
      recent={recentData.data.recentPosts || []}
    />
  );
}
