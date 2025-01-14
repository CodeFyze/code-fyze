import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import devTeam from "../constants/devTeam";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";


export default function Team() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[50vw] md:w-[80vw]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {devTeam.map((member, index) => (
          <CarouselItem key={index} className="aspect-square md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1">
              <Card 
              className="bg-cover bg-left-top bg-no-repeat"
              style={{
                backgroundImage: `url(${index % 2 === 0 ? 'circleDevBg.png' : 'circleDevBgRotate.png'})`,
              }}>
                <CardContent className="flex items-center justify-center p-2 md:p-6">
                  <div className="flex w-max h-full flex-col items-center justify-center">
                    <img
                      src={member.roleimage}
                      alt="UI-UX-design"
                      className={`w-full aspect-[9/10] object-cover object-top`}
                    />
                    <div className="text-center">
                      <h2 className="text-lg font-semibold text-black mt-4">
                        {member.name}
                      </h2>
                      <p className="text-[#7D8D9A] text-base">{member.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
