import { useNavigate } from "@remix-run/react";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio({ title }: { title: string }) {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const navigate = useNavigate();

  const projectsTemplate = [
    {
      images: ["website/01.png", "website/02.png", "website/03.png"],
      hoverImages: [],
      links: [
        "https://license-help.vercel.app",
        "https://emaps-web.vercel.app",
        "https://review-website-eight.vercel.app",
      ],
    },
    {
      images: ["app/app_01.jpg", "app/app_02.jpg", "app/app_03.jpeg"],
      hoverImages: [
        "app/app_01_hover.jpg",
        "app/app_02_hover.jpg",
        "app/app_03_hover.jpeg",
      ],
      links: [],
    },
    {
      images: [
        "wordpress/wordpress_01.png",
        "wordpress/wordpress_02.png",
        "wordpress/wordpress_03.png",
      ],
      hoverImages: [],
      links: [
        "https://www.google.com",
        "https://www.google.com",
        "https://www.google.com",
      ],
    },
  ];

  const projects =
    title === "Website Projects"
      ? projectsTemplate[0]
      : title === "Mobile App Projects"
      ? projectsTemplate[1]
      : projectsTemplate[2];

  const handleRedirect = () => {
    if (title === "Website Projects") {
      navigate("/portfolio/#website");
    } else if (title === "Mobile App Projects") {
      navigate("/portfolio/#app");
    } else {
      navigate("/portfolio/#wordpress");
    }
  };

  return (
    <div className="flex w-full h-full py-12 text-center justify-center relative lg:-top-52 xl:-top-80">
      <motion.div
        className="flex flex-col items-center justify-center space-y-8 w-5/6"
        variants={divVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-xl sm:text-3xl max-lg:text-center lg:text-5xl font-bold text-[#0E3172]">
            {title}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row max-lg:space-y-4 lg:space-x-3 text-sm sm:text-base max-lg:text-center md:text-xl text-[#7D8D9A]">
          {projects.images.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden cursor-pointer shadow-xl"
              onClick={() => window.open(projects.links[index], "_blank")}
            >
              <img
                src={`/portfolio/${image}`}
                alt={`${title} ${index + 1}`}
                className={`w-full aspect-[1800/820] transition-transform duration-300 ease-in-out object-cover object-center ${
                  title === "Mobile App Projects"
                    ? "group-hover:scale-105"
                    : "group-hover:brightness-50 group-hover:scale-105"
                }`}
              />
              {title === "Mobile App Projects" && (
                <img
                  src={`/portfolio/${projects.hoverImages[index]}`}
                  alt={`${title} ${index + 1} hover`}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                />
              )}
              {title !== "Mobile App Projects" && (
                <FaEye className="absolute inset-0 m-auto text-white text-3xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
              )}
            </div>
          ))}
        </div>
        <div className="flex space-x-4 h-12 max-lg:justify-center">
          <button
            className="flex items-center md:px-16 md:py-2 p-5 bg-black/30 transparent backdrop-blur-xl border-slate-200 border-[3px] text-white rounded-xl hover:bg-[#10375c] transition duration-300"
            onClick={handleRedirect}
          >
            View All
          </button>
        </div>
      </motion.div>
    </div>
  );
}
