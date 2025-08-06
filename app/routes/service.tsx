import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import FAQ from "~/components/FAQ";
import { landingFAQs } from "~/constants/faqs";


export const loader: LoaderFunction = () => {
    return json({
      apiUrl: process.env.API_BASE_URL
    });
  };

const LandingPageProcess = () => {
  const steps = [
    {
      title: "Consultation",
      description:
        "We start by understanding your business objectives, target audience, and unique selling propositions (USPs) to tailor our approach accordingly.",
    },
    {
      title: "Concept Development",
      description:
        "Our designers conceptualize and create mockups based on your requirements and feedback.",
    },
    {
      title: "Design Implementation",
      description:
        "Once approved, we proceed to develop the landing page, ensuring pixel-perfect execution and adherence to best practices.",
    },
    {
      title: "Testing and Optimization",
      description:
        "We rigorously test the landing page across different devices and browsers to ensure compatibility and optimal performance.",
    },
    {
      title: "Launch and Monitoring",
      description:
        "After deployment, we monitor the landing page's performance and provide ongoing support and optimization as needed.",
    },
  ];


  const { apiUrl } = useLoaderData<typeof loader>();
        
        useEffect(() => {
          const logVisitor = async () => {
            try {
              await fetch(`${apiUrl}visitors/log`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ path: "/services" }),
              });
            } catch (err) {
              console.error("Visitor logging failed:", err);
            }
          };
      
          if (apiUrl) {
            logVisitor();
          }
        }, [apiUrl]);

  return (
    <>
      <section className="bg-gray-50 bg-[url('/element3.png')] bg-cover bg-center py-10 ">
        <div className=" bg-opacity-80  py-10 px-6 md:px-16 rounded-xl ">
          <div className="container mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E3172] mb-8">
              Our Landing Page Design Process
            </h2>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Image */}
              <div className="flex justify-center items-center">
                <img
                  src="/sign.jpeg" // Replace with your actual image path
                  alt="Landing Page Design"
                  className="max-w-full h-auto shadow-lg rounded-lg"
                />
              </div>

              {/* Right Column: Steps */}
              <div>
                {steps.map((step, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0E3172] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className=" bg-[url('/element.png')] bg-cover bg-center py-10 px-6 md:px-16">
          <div className="bg-white bg-opacity-80 py-10 px-6 md:px-16 rounded-xl ">
            <div className="container mx-auto">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E3172] mb-8">
                Professional Landing Page Design Agency Services
              </h2>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Steps */}
                <div className="order-2 md:order-1">
                  {steps.map((step, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold text-[#0E3172] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Column: Image */}
                <div className="flex justify-center items-center order-1 md:order-2">
                  <img
                    src="/sign.jpeg" // Replace with your actual image path
                    alt="Landing Page Design"
                    className="max-w-xs md:max-w-md lg:max-w-lg w-auto h-auto shadow-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-10 px-6 sm:px-12 md:px-20 m-6 sm:m-10 md:m-20 rounded-lg">
  <div className="text-center max-w-3xl mx-auto">
    {/* Heading */}
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E3172] mb-4">
      Get Started with Code Fyze Today!
    </h2>

    {/* Subheading */}
    <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
      Ready to elevate your online presence and drive conversions with a stunning landing page? Contact Code Fyze now to discuss your project requirements and get a custom quote. Let's create a landing page that leaves a lasting impression and delivers tangible results for your business.
    </p>

    {/* Button */}
    <div>
      <a
        href="#"
        className="inline-block bg-[#0E3172] text-white font-medium text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Book Appointment →
      </a>
    </div>
  </div>
</section>
        <FAQ faq={landingFAQs}/>
      </section>
    </>
  );
};

export default LandingPageProcess;
