import CircleButton from "./CircleButton";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contactus");
  };
  
  return (
    <div className="flex w-full h-full py-12 text-center justify-center lg:relative lg:top-6 xl:top-12">
      <div className="flex flex-col items-center justify-center space-y-8 w-5/6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-xl sm:text-3xl max-lg:text-center lg:text-5xl font-bold text-[#0E3172]">
            Ready to Transform Your Business with Expert IT Solutions?
          </h1>
          <p className="text-sm sm:text-base max-lg:text-center md:text-xl text-[#7D8D9A]">
            For a free consultation and let&apos;s discuss how we can drive your
            business forward
          </p>
        </div>
        <div className="flex space-x-4 h-12 max-lg:justify-center">
          <button className="flex items-center md:px-6 md:py-3 p-5 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300" onClick={handleRedirect}>
            Contact Us
          </button>

          <span className="-rotate-45 aspect-square h-full" onClick={handleRedirect}>
            <CircleButton className="w-full h-full" />
          </span>
        </div>
      </div>
    </div>
  );
}
