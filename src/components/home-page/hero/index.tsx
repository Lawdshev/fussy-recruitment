import React from "react";
import floatingOne from "@/assets/hero/Vector.png";
import floatingTwo from "@/assets/hero/Vector (1).png";
import floatingThree from "@/assets/hero/Rectangle 1.png";
import Image from "next/image";
import covid from "@/assets/hero/covid-19-frontline-healthcare-essential-workers 1.png";
import ellipse from "@/assets/hero/Ellipse 7.png";
import polygon from "@/assets/hero/Polygon 1.png";
import Button from "../../ui/button/btn";

function Index() {
  return (
    <div className="bg-[#FFFCF5] w-screen pt-12">
      <div className="grid grid-cols-2 px-8 container mx-auto ">
        <div className="relative col-span-2 md:col-span-1 py-8 h-[calc(60vh-100px)]">
          <Image
            className="absolute top-0 left-0"
            src={floatingOne}
            alt="floating arrow"
          />
          <Image
            className="absolute top-0 right-28"
            src={floatingThree}
            alt="floating rectangle"
          />
          <Image
            className="absolute bottom-16 right-16"
            src={floatingTwo}
            alt="floating arrow"
          />
          <div className="pl-32 pr-8  pt-8">
            <p className="text-5xl font-semibold leading-[57px] text-primary-text">
              Transforming Healthcare Recruitment Across the UK
            </p>
            <p className="text-xl font-medium text-[#242424] mt-6 mb-8 max-w-[80%]">
              Expertly Managing Contingent Workforces with Precision and Care
            </p>
            <div className="flex items-center gap-4">
              <Button
                text="Find Your Next Role"
                bgColor="bg-black"
                size="px-3 py-2 text-lg font-medium"
                textColor="text-white"
              />
              <Button
                text="Hire Top Talents"
                bgColor="bg-[#FCB828]"
                size="px-3 py-2 text-lg font-medium"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
        <div className="relative col-span-2 md:col-span-1 py-8 px-16 h-[calc(65vh-100px)]">
          <Image
            src={covid}
            alt="covid 19 frontline healthcare essential workers"
            className="mx-auto"
          />
          <Image
            src={ellipse}
            alt="ellipse"
            className="absolute bottom-8 left-12"
          />
          <Image
            src={polygon}
            alt="polygon"
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
