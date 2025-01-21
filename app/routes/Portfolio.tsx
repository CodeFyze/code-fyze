import { motion } from "framer-motion";
import { wordpressPortfolioItems, shopifyPortfolioItems } from "~/constants/portfolioItems";

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
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-no-repeat bg-y-repeat flex flex-col gap-y-10"
        style={{
          backgroundImage: "url('/element3.png')",
        }}
      >
        {/* Website Portfolio */}
        <div>
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
              Wordpress Portfolio
            </h1>
            <p className="text-lg text-black font-mingzat">
              Explore our portfolio of websites, designed to deliver
              exceptional user experiences and cutting-edge technology solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wordpressPortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="max-w-sm h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.01 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={item.image}
                    alt={"Wordpress "+index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        {/* Shopify Portfolio */}
        <div>
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
              Shopify Portfolio
            </h1>
            <p className="text-lg text-black font-mingzat">
              Explore our portfolio of shopify websites, designed to deliver
              exceptional user experiences and cutting-edge technology solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopifyPortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="max-w-sm h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.01 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={item.image}
                    alt={"Shopify "+index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
