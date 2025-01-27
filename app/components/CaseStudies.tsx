import CircleButton from "./CircleButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const [carouselItem, setCarouselItem] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, [carouselItem]);

  const handlePrevious = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCarouselItem((prev) => (prev === 1 ? 4 : prev - 1));
      setFadeIn(true);
    }, 500);
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCarouselItem((prev) => (prev === 4 ? 1 : prev + 1));
      setFadeIn(true);
    }, 500);
  };

  return (
    <motion.div
      className="w-full space-y-2 max-sm:pb-[44vw] pt-32 pb-40 bg-element3 bg-center bg-cover bg-no-repeat relative lg:-top-24"
      variants={divVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      {/* Text Header */}
      <header className="flex justify-center mb-2">
        <div className="heading flex flex-col items-center w-4/6 lg:w-2/5 sm:gap-2">
          <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[6vw] md:text-2xl">
            Our Case Studies
          </p>
          <p className="font-medium text-center text-[3vw] md:text-sm lg:text-base">
            Here are a few case studies highlighting successful projects we have
            undertaken. Web Development
          </p>
        </div>
      </header>

      {/* Carousel */}
      <div className="w-full flex items-center justify-around px-3">
        <div
          className="rotate-180 cursor-pointer max-sm:top-[17.5vw] max-sm:relative"
          onClick={handlePrevious}
        >
          <CircleButton />
        </div>
        <div className="w-[80%] flex gap-2 [&>*]:max-sm:h-[35vw] [&>*]:h-[20vw] [&>*]:object-cover relative">
          <img
            src="/Web-Development.jpg"
            alt="Web-Development"
            className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-300 ${
              carouselItem === 1
                ? "max-sm:opacity-100 max-sm:scale-100"
                : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
            } ${
              carouselItem === 1
                ? "w-[44%] rounded-lg"
                : carouselItem === 4
                ? "w-[11%] sm:rounded-full"
                : "w-[22%] rounded-lg"
            }`}
          />

          <img
            src="/App-Development.jpg"
            alt="App-Development"
            className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-300 ${
              carouselItem === 2
                ? "max-sm:opacity-100 max-sm:scale-100"
                : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
            } ${carouselItem === 2 ? "w-[44%]" : "w-[22%]"} rounded-lg`}
          />

          <img
            src="/UI-UX-design.png"
            alt="UI-UX-design"
            className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-300 ${
              carouselItem === 3
                ? "max-sm:opacity-100 max-sm:scale-100"
                : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
            } ${carouselItem === 3 ? "w-[44%]" : "w-[22%]"} rounded-lg`}
          />

          <img
            src="/Panel-Development.png"
            alt="Panel-Development"
            className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-300 ${
              carouselItem === 4
                ? "max-sm:opacity-100 max-sm:scale-100"
                : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
            } ${
              carouselItem === 4
                ? "w-[44%] rounded-lg"
                : "w-[11%] sm:rounded-full"
            }`}
          />
        </div>
        <div
          onClick={handleNext}
          className="max-sm:top-[17.5vw] max-sm:relative"
        >
          <CircleButton />
        </div>
      </div>
    </motion.div>
  );
}
