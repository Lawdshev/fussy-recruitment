import React from "react";
import Image from "next/image";
import PageTitle from "../shared/page-title";
import youth from "@/assets/about-hero/authentic-small-youthful-marketing-agency(1) 1.png";

const Hero = () => {
  return (
    <div className="container py-12 px-8 md:px-24 lg:px-32 xl:px-8 mx-auto">
      <PageTitle title="About Us" />
      <div className="flex flex-col-reverse xl:flex-row items-center gap-8 xl:gap-16 xl:px-6 container mx-auto mt-8 lg:mt-12">
        <div className="w-full xl:w-[50%]">
          <p className="text-xl font-medium text-primary-text text-center xl:text-left">
            Your Trusted Partner in Healthcare Recruitment
          </p>
          <p className="text-[#0C0C0C] my-4 leading-[30px]">
            At Fussy Recruitment, we&apos;re not just another healthcare
            recruitment agency—we&apos;re transforming how contingent workforces
            in healthcare are managed across the UK. With a strong reputation
            for excellence, we are proud to lead the charge in simplifying and
            enhancing the complexities of healthcare recruitment.
          </p>
          <p className="text-[#0C0C0C] leading-[30px]">
            As a data-driven, end-to-end talent consultancy, we go beyond
            traditional recruitment. We serve as trusted advisors and partners
            to healthcare businesses of all sizes, sharing your ambition and
            dedication to success. Like you, we are meticulous and committed to
            getting it right every time.
          </p>
        </div>
        <div className=" rounded-xl overflow-hidden">
          <Image src={youth} alt="people laughing" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
