import { motion } from "framer-motion";

export default function ServiceSocialMediaManagement() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const title = "Digital Marketing";
  const description = "Social Media Management";

  return (
    <>
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-y-repeat xl:bg-cover"
        style={{
          backgroundImage: "url('/element3.png')",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">{title}</h1>
          <p className="text-lg text-black font-mingzat">{description}</p>
        </div>
        <div className="">
          <div className="gap-6 flex flex-col items-center">
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                What is Social Media Management:
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                Social Media Management (SMM) is the art of crafting, scheduling, analyzing, and engaging with content across platforms like Instagram, Facebook, Twitter, LinkedIn, and more. It{"'"}s your key to strategically building brand awareness, connecting with your audience, and driving powerful business growth online!
                </p>
              </div>
              <img
                className="w-full h-1/4 md:w-2/5 md:h-full object-cover"
                src={"/services/SMManagement/SMM_1.png"}
                alt={"SMM"}
              />
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center bg-[url('/hero-sec-bg.png')] bg-cover bg-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full px-6 py-4 md:py-10">
                <div className="font-bold text-xl mb-2 font-baskervville">
                Why is Social Media Management Essential for Your Business?
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Boosts Brand Visibility:</b> Consistently posting engaging and valuable content ensures your business stays front and center in the minds of your target audience.</li>
                  <li><b>Creates Authentic Connections:</b> Engaging directly with followers builds trust, loyalty, and lasting relationships with both current and potential customers.</li>
                  <li><b>Accelerates Lead Generation:</b> Platforms like Instagram and Facebook enable you to run targeted campaigns that effectively capture high-quality leads.</li>
                  <li><b>Enhances Customer Service:</b> Promptly responding to questions and feedback on social media showcases exceptional care and builds customer satisfaction.</li>
                  <li><b>Keeps You Ahead of the Competition:</b> With every business vying for attention online, consistent and effective social media management ensures you stand out and stay competitive.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center bg-[url('/hero-sec-bg.png')] bg-cover bg-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full px-6 py-4 md:py-10">
                <div className="font-bold text-xl mb-2 font-baskervville">
                How Does Social Media Management Work?
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Understanding Your Audience:</b> Research and identifying your target audience—know their preferences, habits, and the platforms they use most.</li>
                  <li><b>Creating a Strategy:</b> Developing a clear plan with specific goals, like increasing followers, driving website traffic, or boosting sales.</li>
                  <li><b>Crafting Engaging Content:</b> Designing eye-catching visuals, write compelling captions, and create content that resonates with your audience.</li>
                  <li><b>Scheduling Posts:</b> Using tools like Buffer to schedule posts at the optimal times for maximum reach and engagement. </li>
                  <li><b>Engaging with Followers:</b> Responding to comments, answer questions, and interact with your audience to build trust and loyalty.</li>
                  <li><b>Tracking Performance:</b> Analyze metrics like likes, shares, clicks, and conversions to see what{"'"}s working and refine your strategy.</li>
                  <li><b>Staying Consistent:</b> Post regularly, adapt to trends, and maintain your brand{"'"}s voice to stay relevant and grow your online presence.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
