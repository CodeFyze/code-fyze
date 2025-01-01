import services from "~/constants/services";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Dropdown({ title,variant }: { title?: string, variant?: string }) {
    return (
    <span className="hover:text-yellow-600 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-center gap-x-1"><span>{title}</span>
          <span className="w-4 flex aspect-square relative md:top-[1px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-md:max-h-80 max-md:overflow-y-scroll flex flex-col md:max-xl:grid md:max-xl:grid-cols-2 xl:flex-row p-2">
          {variant === "services" ? services.map((service, index) => (
            <DropdownMenuItem
              key={index}
              className="p-4 lg:p-4 space-y-1 flex flex-col items-start focus:bg-transparent"
            >
              <h2 className="text-lg font-semibold text-black">
                {service.title}
              </h2>
              <ul className="list-disc list-inside">
                {service.technologies.map((tech, techIndex) => (
                  <a key={techIndex} href={tech.link}><li className="text-[#7D8D9A] text-base cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 hover:font-bold hover:text-[#0E3172]">
                    {tech.text}
                  </li></a>
                ))}
              </ul>
            </DropdownMenuItem>
          )) : <></>}
          </DropdownMenuContent>
        </DropdownMenu>
      </span>
    );
  }
  








