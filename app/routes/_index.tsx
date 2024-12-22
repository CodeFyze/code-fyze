import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import About from "~/components/About";
import CaseStudies from "~/components/CaseStudies";
import CircleButton from "~/components/CircleButton";
import Contact from "~/components/Contact";
import DevelopmentProcess from "~/components/DevelopmentProcess";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Innovation from "~/components/Innovation";
import Navbar from "~/components/Navbar";
import Technologies from "~/components/Technologies";
import TopServices from "~/components/TopServices";
import FAQ from "~/components/FAQ";

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

        <div className="bg-aboutUsBg bg-cover bg-top bg-no-repeat">
          {/* Innovation Section */}
          <About />
          {/* Top Services Section */}
          <TopServices />
        </div>
        {/* Technologies Section */}
        <Technologies />

        {/* Case Studies Component */}
        <CaseStudies />

        {/* Development Process Component */}
        <DevelopmentProcess />

        {/* Contact Component */}
        <Contact />

        {/* <section className="2 mb-8"></section> */}

        <FAQ page="home" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
