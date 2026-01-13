import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Top-Rated Software Development Agency | CodeFyze",
  description: "CodeFyze a top-rated software development agency that builds custom digital solutions for businesses around the world. Contact +971 55 265 4401 today",
  keywords: "software development, custom software, CodeFyze, web development, mobile app development, top software agency, Dubai tech company",
  alternates: {
    canonical: "https://www.codefyze.com/",
  },
  robots: "index, follow",
};

export default function Index() {
  const apiUrl = process.env.API_BASE_URL;

  return <HomeClient apiUrl={apiUrl} />;
}