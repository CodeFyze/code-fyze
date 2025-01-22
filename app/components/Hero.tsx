import CircleButton from "./CircleButton";
import { CodeFyzeMarquee } from "./CodeFyzeMarquee";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contactus");
  };

  return (
    <div className="flex flex-col w-full h-full bg-[url('/hero-sec-bg.png')] bg-cover bg-center">
      <div className="flex flex-col-reverse gap-y-5 mb-6 lg:flex-row items-center justify-center w-full overflow-hidden md:px-[10vw] lg:pl-[10vw] xl:pl-[9vw] lg:pr-0 lg:items-end mt-11">
        <div className="flex flex-col items-center space-y-4 h-4/6 lg:w-[40%] lg:items-start lg:mb-[6vw]">
          <h1 className="~/lg:~text-lg/7xl lg:text-4xl xl:text-[3.5vw] xl:leading-none max-md:px-[10vw] max-lg:text-center font-bold text-gray-800">
            We provide reliable<br/>solutions and support
          </h1>
          <div
            className="flex w-full h-full aspect-[852/509] lg:hidden justify-center items-center bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: "url('hero-sec-pic.png')" }}
          ></div>
          <p className="max-md:px-[10vw] text-lg max-lg:text-center w-full md:text-xl text-[#7D8D9A] font-bold">
            To manage your business{" "}
            <span className="text-[#0E3172]">data with precision</span>
          </p>
          <div className="max-md:px-[10vw] ~h-6/14 flex space-x-4 max-lg:justify-center w-full">
            <button className="flex items-center md:px-6 md:py-3 p-3 bg-black text-white text-[3vw] sm:text-base rounded-full hover:bg-gray-800 transition duration-300"
            onClick={handleRedirect}
            >
              Get a Free Consultation
            </button>

            <span className="-rotate-45 aspect-square h-full" onClick={handleRedirect}>
              <CircleButton className="w-full h-full" />
            </span>
          </div>
        </div>

        <div
          className="hidden w-[60%] h-full aspect-[852/509] lg:flex justify-center items-center bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('hero-sec-pic.png')" }}
        ></div>
      </div>
      <CodeFyzeMarquee />
    </div>
  );
}
