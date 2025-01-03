import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="w-screen h-full p-[7vw] bg-[#3B3B3B] text-white">
      <div className="flex flex-col items-center justify-center space-y-16">
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
            <a href="#" className="w-fit h-full" target="_blank"><FaXTwitter size={30}/></a>
            <a href="#" className="w-fit h-full" target="_blank"><RiTelegramLine size={30}/></a>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end text-end xl:w-[45vw] space-y-10">
            <div className="w-full flex flex-col max-lg:space-y-5 lg:flex-row items-center justify-between text-lg lg:max-xl:text-base font-bold">
              <a href="/#about-us" className="hover:text-yellow-600">
                About US
              </a>
              <a href="/#services" className="hover:text-yellow-600">
                Services
              </a>
              <a href="/portfolio" className="hover:text-yellow-600">
                Portfolio
              </a>
              <a href="/#technologies" className="hover:text-yellow-600">
                Technologies
              </a>
            </div>
            <div className="flex flex-col space-y-4 items-center lg:items-end">
              <p className="text-[3vw] sm:text-base md:text-xl">
                Empowering Your Business with Innovative IT Solutions
              </p>
              <p className="text-sm sm:text-base md:text-xl">
                Copyright by CODE FYZE 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
