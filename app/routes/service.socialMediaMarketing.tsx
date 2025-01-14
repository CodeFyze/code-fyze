import { motion } from "framer-motion";
import Navbar from "~/components/Navbar";
// import ServicePage from "~/components/ServicePage";
// import portfolioItems from "~/constants/portfolioItems";

export default function ServiceSocialMediaMarketing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const title = "Digital Marketing";
  const description = "Social Media Marketing";

  return (
    <>
      <Navbar />
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-y-repeat"
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
            <h2>Meta Ads work because they reach the right people, at the right time, with the right message.</h2>
          </div>
        </div>
        <div className="">
          <div className="gap-6 flex flex-col items-center">
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                Social Media Marketing Basics
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                Social media has grown into one of the main places where people get their news and information in today{"'"}s online world. But it{"'"}s more than just that - having a strong social media presence plays a big role in boosting search rankings and digital marketing success.<br />Recent numbers show that there are now 4.57 billion social media users worldwide, with 346 million new users joining in 2020 alone. According to Global WebIndex, the average user spends about two hours and 24 minutes each day on social media.
                </p>
              </div>
              <img
                className="w-full h-1/4 md:w-2/5 md:h-[26rem] object-cover"
                src={"/services/SMMarketing/SMM_1.jpg"}
                alt={"SEO"}
              />
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center md:flex-row-reverse`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                What is Social Media Marketing
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                Social Media Marketing (SMM) is the process of using social media platforms like Facebook, Instagram, LinkedIn, and Twitter to promote your business. It helps you reach new customers, build your brand, and engage with your audience by sharing posts, running ads, and interacting with followers.
                </p>
              </div>
              <img
                className="w-full h-1/4 md:w-2/5 md:h-[18rem] object-cover"
                src={"/services/SMMarketing/SMM_2.webp"}
                alt={"SEO"}
              />
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center bg-[url('/hero-sec-bg.png')] bg-cover bg-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full px-6 py-4 md:py-10">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Why Social Media marketing is Important for your business?
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Increases Brand Awareness:</b> Helps more people discover and recognize your brand.</li>
                  <li><b>Drives Website Traffic:</b> Directs users to your site through posts and ads.</li>
                  <li><b>Boosts Sales and Leads:</b> Promotes products and services to potential customers.</li>
                  <li><b>Engages with Customers:</b> Allows direct communication and feedback from your audience.</li>
                  <li><b>Builds Trust and Loyalty:</b> Creates strong relationships through regular interaction.</li>
                  <li><b>Cost-Effective Marketing:</b> Reaches a large audience without high costs.</li>
                  <li><b>Provides Valuable Insights:</b> Offers data on customer behavior and campaign performance.</li>
                  <li><b>Improves Search Rankings:</b> Active social media presence can positively impact SEO.</li>
                  <li><b>Keeps You Competitive:</b> Ensures your brand stays relevant and visible.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-11/12">
                <div className="font-bold text-xl mb-2 font-baskervville">
                How CodeFyze Can Help
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                CodeFyze is a professional company that specializes in social media marketing. We help businesses create effective strategies, design engaging content, and manage campaigns to get the best results. Whether you're just starting or want to improve your current social media efforts, CodeFyze can help your business grow and succeed online.
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
