import CircleButton from "./CircleButton";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/about-us");
  };

  return (
    <div className="flex flex-col md:flex-row w-[95%] md:w-full px-11 lg:px-24 mt-11 relative pb-24" id="about-us">
      <div className="w-full md:w-2/5 bg-womanWithLaptop bg-contain bg-center h-full aspect-[2/3] bg-no-repeat"></div>
      <div className="w-full md:w-3/5 flex flex-col h-auto justify-evenly gap-y-8 xl:justify-center">
        <h1 className="font-bold text-4xl md:text-start lg:text-6xl text-[#0E3172]">
          About Us
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-4">
          At CODE FYZE, we believe in powering businesses with cutting-edge IT
          solutions that are as dynamic as the digital world we live in.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
          Founded with a passion for technology and a commitment to excellence,
          CODE FYZE specializes in providing robust, customized IT services that
          help our clients streamline operations, enhance security, and drive
          growth.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
          Our team is a diverse group of skilled professionals dedicated to
          understanding your unique needs and delivering solutions that exceed
          expectations.
        </p>
      </div>
      <span className="-rotate-45 aspect-square w-[5vw] lg:w-[3vw] absolute bottom-10 right-10 lg:right-20" onClick={handleRedirect}>
        <CircleButton className="w-full h-full" />
      </span>
    </div>
  );
}
