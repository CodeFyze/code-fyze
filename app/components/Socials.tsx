import { FaWhatsapp } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="fixed bottom-10 right-4 flex flex-col space-y-2 z-50">
          <div className="relative flex items-center justify-center">
            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E3172] hover:text-[#0E3172] transition-colors duration-300 bg-white rounded-full p-2 m-2 flex items-center justify-center"
            >
              <SiGmail className="text-4xl md:text-5xl" />
            </a>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring"></span>
              <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75"></span>
            </span>
          </div><div className="relative flex items-center justify-center">
            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E3172] hover:text-[#0E3172] transition-colors duration-300 bg-white rounded-full p-2 m-2 flex items-center justify-center"
            >
              <FaLinkedin  className="text-4xl md:text-5xl" />
            </a>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring"></span>
              <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75"></span>
            </span>
          </div>
          <div className="relative flex items-center justify-center">
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0E3172] hover:text-[#0E3172] transition-colors duration-300 bg-white rounded-full p-2 m-2 flex items-center justify-center"
            >
              <FaWhatsapp className="text-4xl md:text-5xl" />
            </a>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring"></span>
              <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75"></span>
            </span>
          </div>
        </div>
  );
}











