import { motion } from "framer-motion";
import Navbar from "~/components/Navbar";

export default function ServiceSeo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const title = "Digital Marketing";
  const description = "Search Engine Optimization";

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
            <h2>Take the First Step Towards Better SEO Today!</h2>
            <h2>
              Boost Your Online Presence with CodeFyze{`'`}s SEO Services!
            </h2>
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
                  Let Us Rank Your Website #1 - Your Success Starts with SEO!
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  Your website deserves to be seen by the right people at the
                  right time. Let CodeFyze help you achieve higher rankings,
                  better traffic, and more conversions.
                </p>
                <div className="font-bold text-lg mb-2 font-baskervville">
                  Get Free SEO Audit
                </div>
                <div className="font-bold text-md mb-2 font-baskervville">
                  Why SEO is Important for Your Business
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  SEO is crucial for any business because it boosts online
                  visibility, driving organic traffic and increasing sales by up
                  to 50% or more as it attracts potential customers actively
                  searching for your products or services. It also builds
                  credibility for long-term growth.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/SEO/SEO_1.jpg"}
                  alt={"SEO"}
                />
              </div>
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
                  Why SEO Matters
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li>The SEO industry is worth more than $65 billion.</li>
                  <li>Google handles 100 billion searches each month.</li>
                  <li>70% of online searches are conducted on Google.</li>
                  <li>70% of search traffic comes from organic results.</li>
                  <li>
                    The top four search results receive 94% of all clicks.
                  </li>
                  <li>
                    94% of users never go past the first page of search results.
                  </li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full"
                  src={"/services/SEO/SEO_2.png"}
                  alt={"SEO"}
                />
              </div>
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
                  On-Page SEO
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Keyword Strategy:</b> Identifying high-traffic search terms and phrases to target in website content.</li>
                  <li><b>Meta Tags Optimization:</b> Ensures search engines can accurately interpret a website's content through meta tags.</li>
                  <li><b>Content Optimization:</b> Refines website content to make it more engaging and accessible to a broader audience.</li>
                  <li><b>Google Search Console:</b> A tool to monitor and analyze website performance and search traffic in Google search results.</li>
                  <li><b>Google Analytics Setup:</b> Provides insights into user behavior and interactions on your website.</li>
                  <li><b>Google Tag Manager:</b> Helps manage various marketing tags, such as tracking codes and pixels, on your website.</li>
                  <li><b>Local Listings:</b> Enhances a business's online presence by improving its visibility in local search results.</li>
                  <li><b>Internal Linking:</b> Helps search engines crawl your website more efficiently while providing users with related content.</li>
                  <li><b>XML Sitemap:</b> A comprehensive list of all website URLs, signaling page importance to search engines.</li>
                  <li><b>Fixing Broken Links:</b> Involves identifying and repairing broken links on a website to improve user experience.</li>
                  <li><b>Broken Link Redirects:</b> Redirects users to relevant pages to maintain a smooth experience when encountering broken links.</li>
                </ul>
              </div>
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
                Off-Page SEO
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Web 2.0 Blogging:</b> Uses blogging platforms to generate referral traffic by sharing valuable content.</li>
                  <li><b>Guest Posting:</b> Collaborating with other bloggers to increase website traffic and enhance relationships within the community.</li>
                  <li><b>Classifieds:</b> A strategy for increasing traffic and exposure to products, services, websites, or blogs.</li>
                  <li><b>Q&A Marketing:</b> Participating in Q&A platforms like Quora to build backlinks and drive organic traffic.</li>
                  <li><b>Infographics:</b> Visually engaging content that communicates information clearly, improving shareability and reach.</li>
                  <li><b>Blog Commenting:</b> Engaging with other blogs through comments can drive traffic and build organic relationships.</li>
                  <li><b>PDF Sharing:</b> Sharing documents on platforms like Slideshare can help generate backlinks and increase traffic.</li>
                  <li><b>Broken Link Building:</b> Identifying broken links on external sites and offering your content as a relevant replacement to earn backlinks.</li>
                  <li><b>Video Promotions:</b> Using videos to educate, engage, and convert audiences more effectively, driving both traffic and brand awareness.</li>
                </ul>
              </div>
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
                Technical SEO
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Website Speed:</b> Faster load times enhance user experience and contribute to better search engine rankings.</li>
                  <li><b>Robots.txt File:</b> Directs search engines on which pages to crawl or avoid, helping with efficient indexing.</li>
                  <li><b>Canonical Tags:</b> Prevents duplicate content issues by telling search engines which version of a page is the original.</li>
                  <li><b>Mobile Friendliness:</b> Ensures a positive experience for users on mobile devices, increasing engagement and retention.</li>
                  <li><b>(UI/UX):</b> A user-friendly design and intuitive navigation are essential for attracting traffic and improving brand perception.</li>
                  <li><b>Crawling:</b> Helps search engines index your site{"'"}s pages so they can be discovered in search results.</li>
                  <li><b>HTTPS:</b> Provides a secure connection, reassuring users and improving search engine rankings.</li>
                  <li><b>URL Structure:</b> Clean, descriptive URLs make it easier for users and search engines to comprehend the page{"'"}s content.</li>
                  <li><b>Structured Data Markup:</b> Enhances search engine understanding of page content, which can improve visibility in search results.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
