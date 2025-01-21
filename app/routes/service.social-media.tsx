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
  const description = "Social Media Post Design";

  return (
    <>
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-no-repeat bg-y-repeat"
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
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                Get Professional Social Media Poster Design 
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                In today&apos;s digital world, standing out on social media is crucial for success. At CodeFyze, we offer professional social media poster design services that not only captivate attention but also drive engagement with your audience. Our expert designers create custom, high-quality posters tailored to your brand, ensuring that your posts make an impact across all platforms.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full w-full"
                  src={"/services/Social-Media/1.jpg"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center md:flex-row-reverse`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                Benefits of Hiring CodeFyze for Social Media Poster Design:
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Boost Engagement:</b> Our eye-catching and professionally designed posters help increase engagement, making your social media posts more likely to be shared, liked, and commented on.</li>
                  <li><b>Brand Consistency:</b> We ensure that every poster aligns with your brand&aposs identity, maintaining a consistent visual language across all your social media channels for better recognition and trust.</li>
                  <li><b>Tailored Designs for Your Audience:</b> We create posters that speak directly to your target audience. From event promotions to product launches, our designs are strategically crafted to match the needs and interests of your followers.</li>
                  <li><b>High-Quality, Shareable Designs:</b> Our designs are not only visually stunning but optimized for sharing, ensuring that your content looks great across all social media platforms and devices.</li>
                  <li><b>Time-Saving & Efficient:</b> We provide fast turnaround times, so you can focus on running your business while we handle the creative aspect of your social media presence. Plus, with revisions included, you&apos;re guaranteed a design that meets your exact specifications.</li>
                  <li><b>Affordable Marketing Solutions:</b> With our cost-effective social media poster design services, you can enhance your digital marketing without breaking the bank.</li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/Social-Media/2.jpg"}
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
