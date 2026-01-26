'use client';

import CircleButton from "./CircleButton";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/about-us");
  };

  return (
    <div className="w-full py-8 ">
      {/* Max-width wrapper for centering */}
      <div className="max-w-[1300px] mx-auto px-4 relative">
        <motion.div
  className="flex flex-col md:flex-row items-stretch gap-y-8 md:gap-x-10"
  variants={divVariant}
  initial="hidden"
  animate="visible"
>
  {/* Left Image */}
  <div
    className="w-full md:w-2/5 aspect-[2/3] bg-contain bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/women-with-laptop.png')" }}
  />

  {/* Right Text */}
  <div className="w-full md:w-3/5 flex flex-col justify-center gap-y-6 text-center md:text-left">
    <h2 className="font-bold text-4xl lg:text-6xl text-[#0E3172]">
      About Us
    </h2>

    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
      CodeFyze is a growing software development company that helps businesses succeed with smart and reliable IT solutions.
    </p>

    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
      As a top software development agency, we focus on building customized software that makes your work easier, safer, and faster. Our goal is to provide technology that supports your business at every step.
    </p>

    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
      Our team at CodeFyze brings creativity, experience, and dedication to every project. We work closely with you to understand your needs and deliver results that truly make a difference.
    </p>
  </div>
</motion.div>

        {/* Circle Button
        <Link
          href="/about-us"
          className="-rotate-45 aspect-square w-[5vw] lg:w-[3vw] absolute bottom-10 right-10 lg:right-20 z-[50]"
        >
          <CircleButton className="w-full h-full" />
        </Link> */}
      </div>
    </div>
  );
}