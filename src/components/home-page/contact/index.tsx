"use client"
import React from "react";
import Image from 'next/image';
import people from "@/assets/bodyframe/people.png"
import Button from "@/components/ui/button/btn";
import { useRouter } from "next/navigation";

const RecruitmentSection = () => {
    const router = useRouter();
  return (
    <div className="bg-[#FDC653] px-6 sm:px-12 md:px-16 lg:px-20">
      <div className="container flex flex-col lg:flex-row items-center justify-between lg:justify-center mx-auto pt-8 sm:pt-12 lg:pt-18 lg:gap-12">
        <div className="text-center lg:max-w-[521px]">
          <h1 className="text-xl sm:text-2xl font-medium text-[#0C0C0C] leading-snug">
            Ready to revolutionise your recruitment or secure your next role?
          </h1>
          <p className="font-normal text-[#0C0C0C] mt-4">
            Whether you&apos;re looking to hire top talent or land your ideal job,
            we&apos;re here to help every step of the way.
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
          <Image
            src={people}
            alt="Healthcare Professionals"
          />
        </div>
      </div>
    </div>
  );
};


export default RecruitmentSection;
