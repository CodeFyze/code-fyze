"use client";

import { motion } from "framer-motion";

export default function Innovation() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  return (
    <div
      className="
        w-full 
        min-h-[520px]
        py-16 md:py-28 lg:py-36
        bg-cover bg-center bg-no-repeat
        max-sm:bg-[url('/innovation-bg-vertical.png')]
        sm:bg-[url('/innovation-bg.png')]
      "
    >
      {/* Max width container */}
      <div className="max-w-[1300px] mx-auto px-4">
        <motion.div
          className="
            flex flex-col gap-y-7 items-center justify-around 
            md:flex-row xl:justify-center 
            w-full text-white 
            bg-black/40 backdrop-blur-xl 
            py-10 px-6 md:px-14 lg:px-20 
            rounded-xl border border-white/30
          "
          variants={divVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="w-full md:w-[40%] text-center md:text-left space-y-2">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              Innovation at Work
            </h2>
            <p className="font-medium text-sm md:text-lg max-w-[320px] mx-auto md:mx-0">
              Innovative technology to transform your operations and drive growth.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-[2px] h-[80px] bg-white/40 mx-8"></div>

          {/* Right Column */}
          <div className="flex flex-col sm:flex-row justify-around gap-y-7 w-full md:w-[55%]">
            <div className="w-full md:w-[29%] flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-black">1000+</h2>
              <p className="text-center text-sm md:text-base">Success Projects</p>
            </div>

            <div className="w-full h-[2px] sm:h-auto sm:w-[2px] bg-white/40"></div>

            <div className="w-full md:w-[29%] flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-5xl font-black">500+</h2>
              <p className="text-center text-sm md:text-base">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}