import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import CircleButton from "~/components/CircleButton";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import cards from "~/constants/technologies";

export const meta: MetaFunction = () => {
  return [
    { title: "CodeFyze Personal Website" },
    { name: "description", content: "We provide business services!" },
  ];
};

export default function Index() {
  const [carouselItem, setCarouselItem] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

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

  useEffect(() => {
    setFadeIn(true);
  }, [carouselItem]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-screen">
        {/* Hero Section */}
        <Hero />

        {/* 1st Component */}
        <section className="w-full h-max space-y-2">
          {/* Text Header */}
          <header className="flex justify-center my-10">
            <div className="heading flex flex-col items-center w-10/12 sm:gap-2">
              <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[6vw] md:text-3xl">
                Technologies We Used
              </p>
              <p className="font-medium text-center text-[3vw] md:text-sm">
                At Code Fyze, we leverage cutting-edge technology to deliver
                seamless solutions.
                <br />
                Our expertise spans{" "}
                <span className="font-bold">
                  Frontend Development, Backend Systems, Databases, Frameworks,
                  Designing, and SEO Optimization,
                </span>
                <br />
                ensuring a perfect blend of functionality and aesthetics.
                <br />
                This comprehensive approach allows us to craft efficient,
                scalable, and user-focused digital experiences.
              </p>
            </div>
          </header>

          {/* Cards */}
          <div className="w-full h-max md:h-max bg-blueBg bg-cover bg-center">
            <div className="w-full h-max flex flex-col justify-center items-center max-md:gap-[7vw] gap-[18vw] md:gap-30 xl:gap-[15vw]">
              <div className="~w-5/6/6/12 md:w-9/12 lg:w-7/12 h-full grid md:grid-cols-3 gap-7 py-10">
                {/* Cards */}
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-xl shadow-lg bg-white space-y-2"
                  >
                    <div className="w-full flex justify-center">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-12 h-12 mb-2"
                      />
                    </div>
                    <h2 className="text-lg font-semibold text-center">
                      {card.title}
                    </h2>
                    <ul className="list-disc list-inside w-4/5 mx-auto">
                      {card.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="text-[#7D8D9A]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2nd Component */}
        <section className="w-full space-y-2 max-sm:mb-[44vw] my-11">
          {/* Text Header */}
          <header className="flex justify-center mb-2">
            <div className="heading flex flex-col items-center w-4/6 lg:w-2/5 sm:gap-2">
              <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[6vw] md:text-2xl">
                Our Case Studies
              </p>
              <p className="font-medium text-center text-[3vw] md:text-sm lg:text-base">
                Here are a few case studies highlighting successful projects we
                have undertaken. Web Development
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
                    ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
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
                    ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
                    : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
                } ${carouselItem === 2 ? "w-[44%]" : "w-[22%]"} rounded-lg`}
              />

              <img
                src="/UI-UX-design.png"
                alt="UI-UX-design"
                className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-300 ${
                  carouselItem === 3
                    ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
                    : "max-sm:opacity-0 max-sm:scale-90 max-sm:z-0"
                } ${carouselItem === 3 ? "w-[44%]" : "w-[22%]"} rounded-lg`}
              />

              <img
                src="/Panel-Development.png"
                alt="Panel-Development"
                className={`max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 transition-all duration-300 ${
                  carouselItem === 4
                    ? "max-sm:opacity-100 max-sm:scale-100 max-sm:z-10"
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
        </section>

        {/* 3rd Component */}
        <section className="w-full">
          <div className="w-full h-max bg-whiteBg bg-cover bg-center py-8">
            <div className="w-full h-full flex flex-col justify-center items-center max-md:gap-[7vw] gap-[18vw] md:gap-28 xl:gap-[10vw]">
              <div className="heading flex flex-col items-center w-10/12 md:w-4/6 lg:w-6/12 sm:gap-2">
                <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[6vw] md:text-2xl lg:text-4xl">
                  Our Development Process
                </p>
                <p className="font-medium text-center text-[3vw] md:text-base lg:text-lg">
                  At <span className="font-extrabold">Code Fyze</span>, we follow
                  a streamlined process from planning and design to development
                  and deployment. Each step is tailored to deliver innovative
                  solutions that meet client needs with precision.
                </p>
              </div>
              {/* Image */}
              <div className="relative">
                <img
                  src="/human-with-laptop.png"
                  alt="human-with-laptop"
                  className="w-[55vw] h-full max-md:hidden block object-contain"
                />
                {/* Message Boxes */}
                <div className="w-full h-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-y-5 bg-humanWithoutArrows bg-center bg-contain bg-no-repeat">
                  <div className="msg -top-[13vw] -left-[15vw] md:-top-[10vw] lg:-top-[8vw]">
                    <h1>Project Planning</h1>
                    <p>
                      We collaborate closely with our client to understand their
                      requirements,{" "}
                      <span className="font-bold">goals and objectives</span>,
                      ensuring a comprehensive plan is in place before starting
                      development.
                    </p>
                  </div>
                  <div className="msg -top-[6vw] -right-[18vw] sm:-top-[9vw] md:-top-[7vw] lg:-top-[5vw]">
                    <h1>Testing and Deployment</h1>
                    <p>
                      We rigorously test and deploy the developed software, ensuring
                      it meets the highest quality standards and is ready to be used
                      by our client and their end-users.
                    </p>
                  </div>
                  <div className="msg bottom-[16vw] -left-[19vw]">
                    <h1>Development</h1>
                    <p>
                      Our skilled developers bring the designs to life, writing
                      clean and <span className="font-bold">efficient code</span>
                      while following industry standards and best practices.
                    </p>
                  </div>
                  <div className="msg bottom-[9vw] -right-[19vw]">
                    <h1>Desinging</h1>
                    <p>
                      Our experienced team of designers create intuitive and
                      <span className="font-bold">use-friendly interfaces</span>,
                      ensuring a seamless user experience while adhering to the
                      client&apos;s brand guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="2 mb-8"></section> */}
      </main>
    </>
  );
}
