import { motion } from "framer-motion";

interface Constant {
  title: string;
  image: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  constants: Constant[];
}

export default function ServicePage({title, description, constants}:ServicePageProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center"
        style={{
          backgroundImage: "url('/element3.png')",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
            {title}
          </h1>
          <p className="text-lg text-black font-mingzat">
            {description}
          </p>
        </div>
        <div className="">
          <div className="gap-6 flex flex-col items-center">
            {constants.map((item, index) => (
              <motion.div
                key={index}
                className={`w-4/5 h-96 rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.01 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                  <div className="font-bold text-xl mb-2 font-baskervville">
                    {item.title}
                  </div>
                  <p className="text-gray-700 text-base font-mingzat">
                    {item.description}
                  </p>
                </div>
                <img
                  className="w-full h-1/4 md:w-2/5 md:h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
