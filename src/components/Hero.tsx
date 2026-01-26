"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { CodeFyzeMarquee } from "./CodeFyzeMarquee";

export default function Hero() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  return (
    <div className="w-full bg-[url('/hero-sec-bg.png')] bg-cover bg-center overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-4">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center w-full gap-y-5 lg:gap-x-10"
          variants={divVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Left Text Section */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start space-y-4 max-w-[650px]">
            <h1 className="font-bold text-[#0E3172] leading-tight text-3xl sm:text-3xl md:text-4xl xl:text-5xl max-lg:text-center">
              Top-Rated Software
              <br />
              <span className="inline-block min-w-[250px]">
                <span className="hidden lg:inline text-[#7D8D9A]">
                  <TypeAnimation
                    sequence={["Development Agency", 1000, " ", 350]}
                    wrapper="span"
                    cursor
                    repeat={Infinity}
                  />
                </span>
                <span className="lg:hidden text-[#7D8D9A]">
                  Development Agency
                </span>
              </span>
            </h1>

            {/* Mobile Image */}
            <div
              className="flex w-full justify-center items-center bg-cover bg-no-repeat bg-center aspect-[852/509] lg:hidden"
              style={{ backgroundImage: "url('hero-sec-pic.png')" }}
            ></div>

            <p className="text-lg max-lg:text-center w-full md:text-xl text-[#7D8D9A] font-bold max-w-[520px]">
              Delivering Digital Solutions{" "}
              <span className="text-[#0E3172]">Worldwide.</span>
            </p>

            <div className="flex space-x-2 max-lg:justify-center w-full">
              <Link
                href="/contact-us"
                className="flex items-center md:px-6 md:py-3 py-2 px-4 bg-black text-white text-sm sm:text-base rounded-lg hover:bg-gray-800 transition duration-300 whitespace-nowrap"
              >
                Book Free Call
              </Link>

              <Link
                href="/contact-us"
                className="flex items-center md:px-6 md:py-3 py-2 px-4 bg-[#7D8D9A] text-white text-sm sm:text-base rounded-lg hover:bg-gray-800 transition duration-300 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right-side Image for Desktop */}
          <div
            className="hidden lg:flex w-[55%] max-w-[720px] flex-shrink-0 justify-center items-center bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/hero-sec-pic.png')",
              height: "520px",
            }}
          ></div>
        </motion.div>
      </div>

      <CodeFyzeMarquee />
    </div>
  );
}