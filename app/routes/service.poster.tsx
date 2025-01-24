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
  const description = "Poster Design";

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
                Poster Design Services
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                At CodeFyze, we specialize in creating visually striking and impactful posters that capture attention and leave a lasting impression. Whether you&apos;re promoting a product, event, or campaign, our custom-designed posters are crafted to communicate your message effectively and elevate your brand's visual appeal.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full w-full"
                  src={"/services/Poster/Poster_1.jpg"}
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
                Why Choose Our Poster Design Services?
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Custom Designs Tailored to Your Brand:</b> We understand that every business is unique, and so are your design needs. Our team works closely with you to create posters that align with your brand&apos;s personality, ensuring your message is communicated clearly and creatively.</li>
                  <li><b>High-Impact Visuals:</b> Our poster designs are not just aesthetically pleasing; they are crafted to grab attention. Whether it&apos;s through bold typography, striking colors, or compelling imagery, we ensure that your poster stands out in a crowded space.</li>
                  <li><b>Versatility Across Platforms:</b> Whether you need a poster for a physical billboard or a digital campaign, we design posters that are versatile and adaptable for all platforms—print, online, and social media.</li>
                  <li><b>Professional Quality & Attention to Detail:</b> We believe in delivering nothing short of excellence. Our team pays meticulous attention to every detail, ensuring that the final design is polished and professional.</li>
                  <li><b>Fast Turnaround & Revisions:</b> We value your time and aim to provide a fast turnaround for all our poster design projects. Plus, we offer revisions to make sure the final design is exactly what you envision.</li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/Poster/Poster_2.jpg"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
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
                Benefits of Hiring CodeFyze for Your Poster Design
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Enhanced Brand Awareness:</b> A professionally designed poster acts as a powerful marketing tool, helping to increase visibility and recognition for your brand. A well-crafted design ensures your message reaches the right audience.</li>
                  <li><b>Creativity that Captures Attention:</b> Our talented designers combine creativity with strategy to produce posters that don&apos;t just look great—they also serve their purpose by grabbing attention and sparking interest.</li>
                  <li><b>Consistent Branding:</b> We ensure that your poster design reflects your brand&apos;s identity, helping to maintain consistency across all your marketing materials.</li>
                  <li><b>Targeted Message Delivery:</b> We focus on crafting designs that convey the right message to your target audience, whether it's for an event, a product launch, or a promotional campaign.</li>
                  <li><b>Cost-Effective Marketing:</b> Posters are a cost-effective form of marketing that can reach a wide audience without breaking the bank. With CodeFyze&apos;s expertly designed posters, you get maximum impact at an affordable price.</li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/Poster/Poster_3.jpg"}
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
                Let's Make Your Next Poster a Showstopper!
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                Ready to create a poster that not only stands out but also leaves a lasting impression on your audience? Let CodeFyze&apos;s creative team bring your ideas to life. Contact us today to get started on your custom poster design and elevate your brand's visual presence!
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full w-full"
                  src={"/services/Poster/Poster_4.jpg"}
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
