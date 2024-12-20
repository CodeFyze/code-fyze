import cards from "~/constants/technologies";

export default function Technologies() {
  return (
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
            This comprehensive approach allows us to craft efficient, scalable,
            and user-focused digital experiences.
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
                className="p-4 border rounded-xl shadow-lg bg-white space-y-2 hover:scale-105 transition-transform duration-300"
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
  );
}
