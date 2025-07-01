import { motion } from "framer-motion";

export default function ServiceSeo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const title = "Graphic Design Services";
  const description = "Logo Design";

  return (
    <>
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-y-repeat lg:bg-cover"
        style={{
          backgroundImage: "url('/element3.png')",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
            {title}
          </h1>
          <p className="text-lg text-black font-mingzat">{description}</p>
        </div>
        <div className="">
          <div className="gap-6 flex flex-col items-center">
          <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Why a Professional Logo is Important for Your Business:
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                A professional logo is more than just a graphic; it&apos;s the face of your brand. It&apos;s the first thing customers notice and remember about your business. A strong, memorable logo creates trust and recognition, ensuring that your brand stands out in a crowded market. It serves as the foundation for your company&apos;s identity, reflecting your values, mission, and professionalism. Without a professional logo, your business could risk being perceived as untrustworthy or amateurish, which could limit its potential for growth and success.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full w-full"
                  src={"/services/Logo/Logo_1.jpg"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center md:flex-row-reverse`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Benefits of Hiring CodeFyze for Logo Design:
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Custom, Tailored Designs:</b> At CodeFyze, we create logos that are not only visually stunning but are tailored to reflect your unique brand identity.</li>
                  <li><b>Expertise & Creativity:</b> Our team of experienced designers brings creativity and expert insights, ensuring your logo stands out while maintaining industry relevance.</li>
                  <li><b>Brand Consistency:</b> We design logos that seamlessly align with your existing branding, creating a cohesive and professional look across all platforms.</li>
                  <li><b>High-Quality Designs:</b> We use the latest design tools and trends to create logos that are sharp, scalable, and adaptable for both digital and print media.</li>
                  <li><b>Enhanced Brand Recognition:</b> A well-designed logo helps to increase recognition and brand recall, making your business more memorable to your target audience.</li>
                  <li><b>Ongoing Support:</b> After we deliver your logo, we offer continued support and guidance on how to best use your new logo across various marketing channels.</li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/Logo/Logo_2.png"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
