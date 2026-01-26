'use client';
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  return (
    <footer className="w-full bg-[#3B3B3B] text-white py-12">
      {/* Centered container */}
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-16"
          variants={divVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* Divider */}
          <div className="w-full h-[2px] bg-white/50 backdrop-blur-md"></div>

          {/* Main content */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between space-y-16 lg:space-y-0">
            
            {/* Left: Logo & Social */}
            <div className="flex flex-col items-center lg:items-start space-y-6 w-full lg:w-2/6">
              <img
                src="/logo-white.png"
                alt="Logo White"
                className="w-4/5 lg:w-[20vw] object-contain"
              />
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/codefyze/" target="_blank" rel="noreferrer">
                  <CiLinkedin size={30} />
                </a>
                <a href="https://www.instagram.com/code_fyze/" target="_blank" rel="noreferrer">
                  <FaInstagram size={30} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61566949416573&mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                  <GrFacebookOption size={30} />
                </a>
                <a href="mailto:info@codefyze.com" title="Send via Email">
                  <HiOutlineMail size={30} />
                </a>
              </div>
            </div>

            {/* Right: Links & Text */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-end space-y-10 w-full lg:w-3/5">
              {/* Links */}
              <div className="flex flex-col lg:flex-row gap-6 text-lg font-bold">
                <Link href="/about-us" className="hover:text-blue-800">About US</Link>
                <Link href="/#services" className="hover:text-blue-800">Services</Link>
                <Link href="/#testimonials" className="hover:text-blue-800">Client Reviews</Link>
                <Link href="/#FAQ" className="hover:text-blue-800">FAQ</Link>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center lg:items-end space-y-4">
                <p className="text-base md:text-xl text-center lg:text-right">
                  Empowering Your Business with Innovative IT Solutions
                </p>
                <p className="text-sm md:text-base">
                  CODEFYZE © {new Date().getFullYear()} || All Rights Reserved
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}