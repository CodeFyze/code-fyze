'use client';

import About from "../components/About";
import Team from "../components/Team";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import DevelopmentProcess from "../components/DevelopmentProcess";
import Hero from "../components/Hero";
import Innovation from "../components/Innovation";
import Technologies from "../components/Technologies";
import TopServices from "../components/TopServices";
import FAQ from "../components/FAQ";
import { homeFAQs } from "../constants/faqs";
import Portfolio from "../components/Portfolio";
import VisitorLogger from "../components/VisitorLogger";

export default function HomeClient({ apiUrl }: { apiUrl?: string }) {
  return (
    <>
      <VisitorLogger apiUrl={apiUrl} path="/home" />
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
          <Portfolio title="Website Projects" />
          <Portfolio title="Mobile App Projects" />
          <Portfolio title="Wordpress Projects" />
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
