import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import About from "~/components/About";
import Team from "~/components/Team";
import CaseStudies from "~/components/CaseStudies";
import Contact from "~/components/Contact";
import DevelopmentProcess from "~/components/DevelopmentProcess";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Innovation from "~/components/Innovation";
import Navbar from "~/components/Navbar";
import Technologies from "~/components/Technologies";
import TopServices from "~/components/TopServices";
import FAQ from "~/components/FAQ";
import { homeFAQs } from "~/constants/faqs";
import Portfolio from "~/components/Portfolio";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Top-Rated Software Development Agency | CodeFyze" },
    { name: "description", content: "CodeFyze a top-rated software development agency that builds custom digital solutions for businesses around the world. Contact +971 55 265 4401 today" },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "software development, custom software, CodeFyze, web development, mobile app development, top software agency, Dubai tech company" },
    { tagName: "link", rel: "canonical", href: "https://www.codefyze.com/" }

  ];
};

export const loader: LoaderFunction = () => {
  return json({
    apiUrl: process.env.API_BASE_URL
  });
};

export default function Index() {
  const { apiUrl } = useLoaderData<typeof loader>();
  
  useEffect(() => {
    const logVisitor = async () => {
      try {
        await fetch(`${apiUrl}visitors/log`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ path: "/home" }),
        });
      } catch (err) {
        console.error("Visitor logging failed:", err);
      }
    };

    if (apiUrl) {
      logVisitor();
    }
  }, [apiUrl]);

  return (
    <>
      <main className="flex flex-col items-center justify-center w-screen">
        {/* Hero Section */}
        <Hero />

        {/* Innovation Section */}
        <Innovation />

        <div className="bg-aboutUsBg bg-contain bg-top bg-y-repeat flex flex-col items-center">
          {/* About Section */}
          <About />
          {/* Top Services Section */}
          <TopServices />
          {/* Team */}
          <Team />
          <div className="py-10"></div>
          <Portfolio title="Website Projects"/>
          <Portfolio title="Mobile App Projects"/>
          <Portfolio title="Wordpress Projects"/>
        </div>

        <div className="lg:relative lg:-top-24 xl:-top-48">
          {/* Technologies Section */}
          <Technologies />

          {/* Case Studies Component */}
          <CaseStudies />

          {/* Development Process Component */}
          <DevelopmentProcess />

          {/* Contact Component */}
          <Contact />
        </div>
        <FAQ faq={homeFAQs} />
      </main>
    </>
  );
}