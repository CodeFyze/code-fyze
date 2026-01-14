'use client';
import CircleButton from "./CircleButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };
  const [carouselItem, setCarouselItem] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const CASE_STUDIES = [
    { src: "/Web-Development.jpg", alt: "Web Development" },
    { src: "/App-Development.jpg", alt: "App Development" },
    { src: "/UI-UX-design.png", alt: "UI UX Design" },
    { src: "/Panel-Development.png", alt: "Panel Development" },
  ];

  useEffect(() => {
    setFadeIn(true);
  }, [carouselItem]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setFadeIn(false);
    setTimeout(() => {
      setCarouselItem((prev) => (prev === 1 ? 4 : prev - 1));
      setFadeIn(true);
      setIsAnimating(false);
    }, 300);
  };


  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setFadeIn(false);
    setTimeout(() => {
      setCarouselItem((prev) => (prev === 4 ? 1 : prev + 1));
      setFadeIn(true);
      setIsAnimating(false);
    }, 300);
  };

  const getRelativePosition = (index: number) => {
    const total = CASE_STUDIES.length;
    const diff = index + 1 - carouselItem;

    if (diff === 0) return "active";
    if (diff === -1 || diff === total - 1) return "prev";
    if (diff === 1 || diff === -(total - 1)) return "next";
    return "far";
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
            Explore how our web development projects have helped clients achieve real results.
          </p>
        </div>
      </header>

      {/* Carousel */}
      <div className="w-full flex items-center justify-around px-3">
        <div
          className="relative z-20 rotate-180 cursor-pointer max-sm:top-[17.5vw]"
          onClick={handlePrevious}
        >
          <CircleButton />
        </div>

        <div className="w-[80%] flex gap-2 [&>*]:max-sm:h-[35vw] [&>*]:h-[20vw] [&>*]:object-cover relative">
          {CASE_STUDIES.map((item, index) => {
            const pos = getRelativePosition(index);

            const widthClass =
              pos === "active"
                ? "w-[44%]"
                : pos === "prev" || pos === "next"
                  ? "w-[22%]"
                  : "w-[11%] sm:rounded-full";

            return (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt}
                className={`
          transition-all duration-300 rounded-lg
          h-[20vw] object-cover
          max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:h-[35vw]
          ${pos === "active"
                    ? "max-sm:opacity-100 max-sm:scale-100 z-10"
                    : "max-sm:opacity-0 max-sm:scale-90 z-0"}
          ${widthClass}
        `}
              />
            );
          })}
        </div>

        <div
          className="relative z-20 cursor-pointer max-sm:top-[17.5vw]"
          onClick={handleNext}
        >
          <CircleButton />
        </div>
      </div>
    </motion.div>
  );
}
