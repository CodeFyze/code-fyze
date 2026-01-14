import { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Software Development Agency Blogs | CodeFyze",
  description: "Stay updated with our blogs covering tech trends, & digital solutions for businesses. Contact +971 55 265 4401",
  robots: "index, follow",
};

export default function BlogIndex() {
  return <BlogListClient />;
}