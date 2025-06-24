import CircleButton from "./CircleButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/about-us");
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row w-[95%] md:w-full px-11 lg:px-24 mt-11 relative pb-24" id="about-us"
      variants={divVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <div className="w-full md:w-2/5 bg-womanWithLaptop bg-contain bg-center h-full aspect-[2/3] bg-no-repeat"></div>
      <div className="w-full md:w-3/5 flex flex-col h-auto justify-evenly gap-y-8 xl:justify-center">
        <h1 className="font-bold text-4xl md:text-start lg:text-6xl text-[#0E3172]">
          About Us
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
          CodeFyze is a growing software development company that helps businesses succeed with smart and reliable IT solutions.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
          As a top software development agency, we focus on building customized software that makes your work easier, safer, and faster. Our goal is to provide technology that supports your business at every step.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
          Our team at CodeFyze, who bring creativity, experience, and dedication to every project. We work closely with you to understand your needs and deliver results that truly make a difference.
        </p>
      </div>
      <span className="-rotate-45 aspect-square w-[5vw] lg:w-[3vw] absolute bottom-10 right-10 lg:right-20" onClick={handleRedirect}>
        <CircleButton className="w-full h-full" />
      </span>
    </motion.div>
  );
}
