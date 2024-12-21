import topServices from "~/constants/topservices";

export default function TopServices() {
  return (
    <div className="flex w-screen h-full px-10 lg:px-[3vw] py-11 mt-11 bg-blueBg bg-cover bg-center">
      <div className="flex flex-col gap-y-7 items-center justify-around w-full text-white bg-black/30 transparent backdrop-blur-xl py-16 px-11 lg:px-2 rounded-md border-slate-200 border-[3px]">
        <div className="[&>*]:text-center">
          <h1 className="font-bold text-2xl md:text-3xl md:text-start lg:text-3xl">
            Our Top Services
          </h1>
          <p className="font-medium text-base md:text-lg md:text-start">
            We provide a full suite of IT services designed to help businesses
          </p>
        </div>
        <div className="~w-5/6/6/12 md:w-11/12 h-full grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {/* Top Services */}
          {topServices.map((topService, index) => (
            <div
              key={index}
              className="p-4 lg:p-7 border rounded-xl shadow-lg bg-white space-y-2 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="w-full">
                <img
                  src={topService.icon}
                  alt={topService.title}
                  className="w-12 h-12 mb-2"
                />
              </div>
              <h2 className="text-lg font-semibold text-black">
                {topService.title}
              </h2>
              <ul className="w-4/5">
                {topService.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="text-[#7D8D9A]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
