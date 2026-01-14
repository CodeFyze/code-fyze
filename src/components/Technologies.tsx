import cards from "../constants/technologies";
import { motion } from "framer-motion";

export default function Technologies() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  return (
    <section className="w-full h-max relative lg:-top-24" id="technologies">
      {/* Text Header */}
      <header className="flex justify-center py-10 bg-[url('/Ellipse237.png')] bg-cover bg-center">
        <motion.div
          className="heading flex flex-col items-center w-10/12 sm:gap-2"
          variants={divVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <p className=" font-extrabold sm:font-bold text-[#0E3172] text-center text-[6vw] md:text-3xl">
            Technologies We Use
          </p>
          <p className="font-medium text-center text-xs sm:text-base">
            At CodeFyze, we use the latest technology to create smooth and effective digital solutions.
            <br />
            As a custom software development agency offering expert IT services consulting, Our expertise spans{" "}
            <span className="font-bold">
              Frontend Development, Backend Systems, Databases, Frameworks, Designing, and SEO Optimization{" "}
            </span>
            — ensuring a perfect blend of functionality and aesthetics.

            <br />
            With this complete approach, we deliver digital solutions that are fast, reliable, and easy for users.
            <br />

          </p>
        </motion.div>
      </header>

      {/* Cards */}
      <div className="w-full h-max md:h-max bg-cover bg-center" style={{ backgroundImage: "url('/blue-background.png')" }}>
        <div className="w-full h-max flex flex-col justify-center items-center max-md:gap-[7vw] gap-[18vw] md:gap-30 xl:gap-[15vw]">
          <div className="~w-5/6/6/12 md:w-9/12 lg:w-4/6 xl:w-7/12 h-full grid md:grid-cols-3 gap-7 py-10">
            {/* Cards */}
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="p-4 border rounded-xl shadow-lg bg-white space-y-2 hover:scale-105 transition-transform duration-300"
                variants={divVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
