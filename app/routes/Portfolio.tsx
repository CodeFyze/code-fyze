import { motion } from "framer-motion";
import Navbar from "~/components/Navbar";
import portfolioItems from "~/constants/portfolioItems";

export default function Portfolio() {
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
      <Navbar />
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center"
        style={{
          backgroundImage: "url('/element3.png')",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
            Mobile Application
          </h1>
          <p className="text-lg text-black font-mingzat">
            Explore our portfolio of mobile applications, designed to deliver
            exceptional user experiences and cutting-edge technology solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="max-w-sm h-96 rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 font-baskervville">
                    {item.title}
                  </div>
                  <p className="text-gray-700 text-base font-mingzat">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
