import React from "react";
import floatingOne from "@/assets/hero/Vector.png";
import floatingTwo from "@/assets/hero/Vector (1).png";
import floatingThree from "@/assets/hero/Rectangle 1.png";
import Image from "next/image";
import Button from "../ui/button/btn";

function Index() {
  return (
    <div className="bg-[#FFFCF5] w-screen">
      <div className="grid grid-cols-2 px-8 container mx-auto">
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
            className="absolute bottom-16 right-20"
            src={floatingTwo}
            alt="floating arrow"
          />
          <div className="pl-32 pr-8  pt-8">
            <p className="text-5xl font-semibold leading-[57px] text-primary-text">
              Transforming Healthcare Recruitment Across the UK
            </p>
            <p className="text-xl font-medium text-[#242424] mt-6 mb-8">
              Expertly Managing Contingent Workforces with Precision and Care
            </p>
            <div className="flex items-center gap-2">
              <Button
                text="Find Your Next Role"
                bgColor="bg-white"
                size="px-4 py-2 text-sm"
                textColor="text-black"
                border="border-2"
                borderColor="border-black"
              />
              <Button
                text="Hire Top Talents"
                bgColor="bg-black"
                size="px-4 py-3 text-sm"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
        <div className="relative col-span-2 md:col-span-1"></div>
      </div>
    </div>
  );
}

export default Index;
