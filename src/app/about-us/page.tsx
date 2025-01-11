"use client"
import Hero from "@/components/about/hero";
import Image from "next/image";
import React from "react";
import Mission from "@/components/about/mission";
import WhyChooseUs from "@/components/about/whyChooseUs";
import OurValues from "@/components/about/ourValues";
import objects from "@/assets/bodyframe/OBJECTS.png"
import Button from "@/components/ui/button/btn";
import { useRouter } from "next/navigation";


function page() {
    const router = useRouter();
  return (
    <div>
      <Hero />
      <Mission />
      <WhyChooseUs />
      <OurValues/>
         <div className="bg-[#FDC653] px-6 sm:px-12 lg:px-20">
        <div className="container flex flex-col lg:flex-row items-center justify-between lg:justify-center mx-auto pt-8 sm:pt-12 lg:pt-18 lg:gap-12">
          <div className="text-center lg:max-w-[521px]">
            <h1 className="text-xl sm:text-2xl font-medium text-[#0C0C0C] leading-snug">
              Let us help you achieve your staffing goals
            </h1>
            <p className="font-normal leading-[30px] text-[#0C0C0C] mt-4">
              Partner with us to find the right talent, streamline recruitment,
              and build a stronger team.
            </p>
            <div className="flex items-center justify-center lg:justify-start mt-6">
              <Button
                onClick={() => router.push("/contact-us")}
                text="Contact Us"
                bgColor="bg-[#000000]"
                size="px-6 py-2 font-normal mx-auto"
                textColor="text-[#FEFEFE]"
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:max-w-[50%] flex justify-center">
            <Image src={objects} alt="healthcare objects" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
