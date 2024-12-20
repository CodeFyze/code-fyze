// import { MdArrowOutward } from "react-icons/md";
// import { FaTelegram, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";
// import { BsArrowRight } from "react-icons/bs";
// import { AiOutlinePlus } from "react-icons/ai";

import CircleButton from "./CircleButton";
import { CodeFyzeMarquee } from "./CodeFyzeMarquee";

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col-reverse gap-y-5 my-6 lg:flex-row items-center justify-center w-full overflow-hidden px-[10vw]">
        <div className="flex flex-col items-start h-4/6 space-y-4 lg:w-3/5">
          <h1 className="text-5xl max-lg:text-center md:text-5xl font-bold text-gray-800">
            We provide reliable solutions and support
          </h1>
          <div
            className="flex w-full h-full aspect-[16/10] md:hidden justify-center items-center bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('hero-sec-pic.png')" }}
          ></div>
          <p className="text-lg max-lg:text-center w-full md:text-xl text-[#7D8D9A]">
            To manage your business{" "}
            <span className="text-[#0E3172]">data with precision</span>
          </p>
          <div className="flex space-x-4 h-11 max-lg:justify-center w-full">
            <button className="flex items-center md:px-6 md:py-3 p-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
              Get a Free Consultation
            </button>

            <span className="-rotate-45 aspect-square h-full">
              <CircleButton className="w-full h-full" />
            </span>
          </div>
        </div>

        <div
          className="hidden w-full h-full aspect-video md:flex justify-center items-center bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('hero-sec-pic.png')" }}
        ></div>
      </div>
      <CodeFyzeMarquee />
    </div>
  );
}
