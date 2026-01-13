import * as React from "react";
import devTeam from "../constants/devTeam";
import { Card, CardContent } from "./ui/card";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  // Get only the first 3 team members
  const founders = devTeam.slice(0, 3);

  return (
    <section className="py-16 pb-20 px-4 sm:px-6 lg:px-8 relative lg:-top-24 xl:-top-48 lg:py-40 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founders</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The visionary leaders who brought this company to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((member, index) => (
          <div key={index} className="flex justify-center">
            <Card className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md border-none bg-cover bg-left-top bg-no-repeat"
               style={{
                backgroundImage: `url(${index % 2 === 0 ? 'circleDevBg.png' : 'circleDevBgRotate.png'})`,
              }}
            >
              <div className="relative pt-[120%] overflow-hidden">
                <img
                  src={member.roleimage}
                  alt={member.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-2 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-600 mb-2">{member.role}</p>

                
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}