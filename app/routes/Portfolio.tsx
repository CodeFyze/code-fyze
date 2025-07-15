import { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import {
  websitePortfolioItems,
  wordpressPortfolioItems,
  shopifyPortfolioItems,
  appPortfolioItems
} from "~/constants/portfolioItems";
import { loader } from "~/root";

// Meta
  export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
      { title: "Portfolio | Top-Rated Software Development Agency | CodeFyze" },
      { name: "See how CodeFyze transforms ideas into high-performing digital products. View our portfolio of software solutions. Contact +971 55 265 4401." },
       { name: "robots", content: "index, follow" }
    ];
  };
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
        {/* Website Portfolio  */}
        <div id="website">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
              Website Portfolio
            </h1>
            <p className="text-lg text-black font-mingzat">
              Explore our portfolio of websites, designed to deliver exceptional
              user experiences and cutting-edge technology solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {websitePortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="max-w-sm h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 relative group cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img
                    className="w-full h-48 object-cover group-hover:brightness-50 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={item.image}
                    alt={"Website " + index}
                  />
                  <FaEye className="absolute inset-0 m-auto text-white text-3xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Wordpress Portfolio */}
        <div id="wordpress">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
              Wordpress Portfolio
            </h1>
            <p className="text-lg text-black font-mingzat">
              Explore our portfolio of wordpress websites, designed to deliver
              exceptional user experiences and cutting-edge technology
              solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wordpressPortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="max-w-sm h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 relative group cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img
                    className="w-full h-48 object-cover group-hover:brightness-50 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={item.image}
                    alt={"Wordpress " + index}
                  />
                  <FaEye className="absolute inset-0 m-auto text-white text-3xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
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
              exceptional user experiences and cutting-edge technology
              solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopifyPortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="max-w-sm h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 relative group cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <img
                    className="w-full h-48 object-cover group-hover:brightness-50 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={item.image}
                    alt={"Shopify " + index}
                  />
                  <FaEye className="absolute inset-0 m-auto text-white text-3xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile App Portfolio */}
        <div id="app">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
              Mobile App Portfolio
            </h1>
            <p className="text-lg text-black font-mingzat">
              Explore our portfolio of Mobile Applications, designed to deliver
              exceptional user experiences and cutting-edge technology
              solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {appPortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="max-w-sm h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 cursor-pointer group relative"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    src={item.image}
                    alt={"App " + index}
                  />
                  <img
                    src={item.hoverImage}
                    alt={"App " + index + " hover"}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
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
