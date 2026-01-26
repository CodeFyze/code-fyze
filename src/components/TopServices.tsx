"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import serviceslink from "../constants/serviceslink";

export default function TopServices() {
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
      id="services"
      className="
        w-full 
        min-h-[600px]
        py-16 md:py-28 lg:py-36
        bg-cover bg-center bg-no-repeat
        max-md:bg-[url('/top-services-bg-vertical.png')]
        md:bg-[url('/top-services-bg.png')]
        mt-0 md:-mt-10
        
      "
    >
      <div className="max-w-[1300px] mx-auto px-4">
        <motion.div
          className="
            flex flex-col gap-y-10 items-center 
            w-full text-white 
            bg-black/40 backdrop-blur-xl 
            py-12 px-6 md:px-14 lg:px-20 
            rounded-xl border border-white/30
          "
          variants={divVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
           animate="visible"
        >
          {/* Header */}
          <div className="text-center max-w-[760px] space-y-2">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Our Top Services
            </h2>
            <p className="font-medium text-sm md:text-lg text-white/80">
              We provide top IT services & consulting to help businesses grow and stay ahead in the digital world.
            </p>
          </div>

          {/* Services Grid */}
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceslink.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                
                className="
                  p-5 lg:p-7 
                  border border-gray-200/40 
                  rounded-xl shadow-lg 
                  bg-white 
                  space-y-3 
                  transition-all duration-300
                "
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mb-2"
                />

                <h2 className="text-lg font-semibold text-black">
                  {service.title}
                </h2>

                <ul className="space-y-1">
                  {service.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-[#7D8D9A] hover:text-[#5a6b78]">
                      <Link
                        href={tech.link}
                        className="block hover:underline"
                        prefetch
                      >
                        {tech.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}