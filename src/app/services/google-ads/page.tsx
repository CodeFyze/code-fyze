'use client';
import { motion } from "framer-motion";
// import ServicePage from "~/components/ServicePage";
// import portfolioItems from "~/constants/portfolioItems";

export default function ServiceGoogleAds() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  const title = "Digital Marketing";
  const description = "Google Ads";

  return (
    <>
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-y-repeat xl:bg-cover"
        style={{
          backgroundImage: "url('/element3.png')",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
            {title}
          </h1>
          <p className="text-lg text-black font-mingzat">{description}</p>
          <div className="mt-10 text-start mx-[13vw]">
            <h2>Google Ads connect businesses with people actively searching for what they offer, right when they need it</h2>
          </div>
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
                  Maximize Your Advertising Returns
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  Google Ads is a powerful tool for marketing, but without the right strategy, it can quickly become expensive. When used correctly, it{"'"}s one of the best ways to generate leads {"-"} delivering around $8 in profit for every $1 spent.<br />On average, Google search ads have a conversion rate of 4.2% across industries, and in some sectors, this can go as high as 6%.<br />Google Ads is easy to use, and anyone can launch a campaign in just a few minutes. However, managing the platform well leads to better results, higher returns on your ad spend, and stronger profits.
                </p>
              </div>
              <img
                className="w-full h-1/4 md:w-2/5 md:h-[30rem] lg:h-[22rem] object-cover"
                src={"/services/GoogleAds/GoogleAds_1.jpg"}
                alt={"SEO"}
              />
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
                  What You Need To Know About Google Ads
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  Google Ads is an online advertising platform that allows businesses to display their ads on Google’s search results and other partner websites. When people search for products or services related to your business, your ad can appear at the top of the search results, helping you reach potential customers instantly.
                </p>
              </div>
              <img
                className="w-full h-1/4 md:w-2/5 md:h-[20rem] lg:h-[15rem] object-cover"
                src={"/services/GoogleAds/GoogleAds_2.jpg"}
                alt={"SEO"}
              />
            </motion.div>
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
                  How Do Google Ads Work?
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  Google Ads works on a pay-per-click (PPC) model. This means you only pay when someone clicks on your ad. You can choose specific keywords, set a budget, and target your ads to appear for certain audiences based on location, interests, and more. “The better your ad and targeting, the higher the chances of driving traffic and getting conversions.”
                </p>
              </div>
              <img
                className="w-full h-1/4 md:w-2/5 md:h-[20rem] lg:h-[16rem] object-cover"
                src={"/services/GoogleAds/GoogleAds_3.jpeg"}
                alt={"SEO"}
              />
            </motion.div><motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center md:flex-row-reverse`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Why Are Google Ads Important for Your Business?
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li>Instant Visibility: Get your business in front of potential customers immediately.</li>
                  <li>Cost-Effective: Only pay for actual clicks, making it budget-friendly.</li>
                  <li>Highly Targeted: Reach the right audience based on their searches and behavior.</li>
                  <li>Boosts Website Traffic: Drive more visitors to your site, increasing leads and sales.</li>
                  <li>Measurable Results: Track performance and optimize for better results.</li>
                  <li>High ROI: Google Ads can deliver significant returns, with an amazing profit for every $1 spent.</li>
                </ul>
              </div>
              <img
                className="w-full h-1/4 md:w-2/5 md:h-[30rem] lg:h-[26rem] object-cover"
                src={"/services/GoogleAds/GoogleAds_4.png"}
                alt={"SEO"}
              />
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-11/12">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  How CodeFyze Can Help
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  At CodeFyze, we are experts in managing Google Ads campaigns to help businesses grow. Our team focuses on creating smart, results-driven strategies that maximize your ad spend and boost your bottom line. Whether you{"'"}re new to Google Ads or looking to improve your current campaigns, CodeFyze is here to help you succeed.
                </p>
              </div>
              <div className="w-2/5 sm:w-1/5 h-1/4 md:h-full md:w-2/5 md:flex md:justify-center">
                <img
                  className="object-contain md:p-10 xl:p-18"
                  src={"/help.png"}
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
