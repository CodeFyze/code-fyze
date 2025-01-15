import CircleButton from "./CircleButton";
import { FaEye } from "react-icons/fa"; // Import the eye icon from react-icons

export default function Portfolio({ title }: { title: string }) {
  const projectsTemplate = [
    {
        images: ["website/01.png", "website/02.png", "website/03.png"],
        links: ["https://license-help.vercel.app", "https://emaps-web.vercel.app", "https://review-website-eight.vercel.app"],
    },
    {
        images: ["mobile.png", "mobile.png", "mobile.png"],
        links: ["https://www.google.com", "https://www.google.com", "https://www.google.com"],
    },
    {
        images: ["wordpress.png", "wordpress.png", "wordpress.png"],
        links: ["https://www.google.com", "https://www.google.com", "https://www.google.com"],
    },
  ]

  const projects =
    title === "Website Projects"
      ? projectsTemplate[0]
      : title === "Mobile App Projects"
      ? projectsTemplate[1]
      : projectsTemplate[2];
  return (
    <div className="flex w-full h-full py-12 text-center justify-center relative lg:-top-52 xl:-top-80">
      <div className="flex flex-col items-center justify-center space-y-8 w-5/6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-xl sm:text-3xl max-lg:text-center lg:text-5xl font-bold text-[#0E3172]">
            {title}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row max-lg:space-y-4 lg:space-x-3 text-sm sm:text-base max-lg:text-center md:text-xl text-[#7D8D9A]">
          {projects.images.map((image, index) => (
            <div 
                key={index}
                className="relative group rounded-lg overflow-hidden cursor-pointer shadow-xl"
                onClick={() => window.open(projects.links[index], "_blank")}>
              <img
                src={`/portfolio/${image}`}
                alt={`${title} ${index + 1}`}
                className="w-full aspect-video transition-transform duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 object-cover object-center"
              />
              <FaEye className="absolute inset-0 m-auto text-white text-3xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 h-12 max-lg:justify-center">
          <button className="flex items-center md:px-16 md:py-2 p-5 bg-black/30 transparent backdrop-blur-xl border-slate-200 border-[3px] text-white rounded-xl hover:bg-[#10375c] transition duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
