import type { MetaFunction } from "@remix-run/node";
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

export const meta: MetaFunction = () => {
  return [
    { title: "CodeFyze Personal Website" },
    { name: "description", content: "We provide business services!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-screen">
        {/* Hero Section */}
        <Hero />

        {/* Innovation Section */}
        <Innovation />

        <div className="bg-aboutUsBg bg-cover bg-top bg-no-repeat flex flex-col items-center">
          {/* About Section */}
          <About />
          {/* Team */}
          <Team />
          {/* Top Services Section */}
          <TopServices />
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}
