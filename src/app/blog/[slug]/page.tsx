import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogClient from "./BlogClient";
import { makeStore } from "@/lib/store";
import { apiSlice } from "@/lib/features/api/apiSlice";

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
  const { slug } = await params;

  const store = makeStore();
  const result = await store.dispatch(
    apiSlice.endpoints.getBlogBySlug.initiate(slug)
  );

  const blog = result.data?.data?.blogPost;

  if (!blog) return {};

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || "",
    robots: "index, follow",
  };
}

/* ================= PAGE ================= */

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;

  return <BlogClient slug={slug} />;
}

