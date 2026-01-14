'use client';

import CircleButton from "./CircleButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  return (
    <div className="flex w-full h-full py-12 text-center justify-center lg:relative lg:top-6 xl:top-12">
      <motion.div
        className="flex flex-col items-center justify-center space-y-8 w-5/6"
        variants={divVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-xl sm:text-3xl max-lg:text-center lg:text-5xl font-bold text-[#0E3172]">
            Ready to Transform Your Business with Expert IT Solutions?
          </h3>

          <p className="text-sm sm:text-base max-lg:text-center md:text-xl text-[#7D8D9A]">
            For a free consultation and let&apos;s discuss how we can drive your
            business forward
          </p>
        </div>

        <div className="flex space-x-4 h-12 max-lg:justify-center">
          {/* Button */}
          <Link
            href="/contact-us"
            className="flex items-center md:px-6 md:py-3 p-5 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </Link>

          {/* Circle Button */}
          <Link
            href="/contact-us"
            className="-rotate-45 aspect-square h-full"
          >
            <CircleButton className="w-full h-full" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
