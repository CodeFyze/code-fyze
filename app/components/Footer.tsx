import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
  return (
    <div className="w-screen h-full p-[7vw] bg-[#3B3B3B] text-white">
      <motion.div
        className="flex flex-col items-center justify-center space-y-16"
        variants={divVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
      
        <div className="w-full h-[2px] bg-white/50 backdrop-blur-md"></div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center md:justify-between lg:items-start max-lg:space-y-16">
          <div className="w-2/3 lg:w-2/6 h-full flex flex-col items-center lg:items-start justify-center space-y-6">
            <img
              src="/logo-white.png"
              alt="Logo White"
              className="w-4/5 lg:w-[20vw] h-full block object-contain"
            />
            <div className="flex justify-between w-4/5 lg:w-[46%] space-x-3 h-12">
            <a href="https://www.linkedin.com/company/codefyze/" className="w-fit h-full" target="_blank"><CiLinkedin size={30}/></a>
            <a href="https://www.instagram.com/code_fyze/" className="w-fit h-full" target="_blank"><FaInstagram size={30}/></a>
            <a href="https://www.facebook.com/profile.php?id=61566949416573&mibextid=LQQJ4d" className="w-fit h-full" target="_blank"><GrFacebookOption size={30}/></a>
            <a href="mailto:info@codefyze.com" className="w-fit h-full" target="_blank"><HiOutlineMail size={30}/></a>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end text-end xl:w-[45vw] space-y-10">
            <div className="w-full flex flex-col max-lg:space-y-5 lg:flex-row items-center justify-between text-lg lg:max-xl:text-base font-bold">
              <Link to="/about-us" className="hover:text-blue-800">
                About US
              </Link>
              <Link to="/#services" className="hover:text-blue-800">
                Services
              </Link>
              <Link to="/portfolio" className="hover:text-blue-800">
                Portfolio
              </Link>
              <Link to="/#technologies" className="hover:text-blue-800">
                Technologies
              </Link>
            </div>
            <div className="flex flex-col space-y-4 items-center lg:items-end">
              <p className="text-[3vw] sm:text-base md:text-xl">
                Empowering Your Business with Innovative IT Solutions
              </p>
              <p className="text-sm sm:text-base md:text-xl">
                CODEFYZE © 2025 || All Rights are Reserved
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
