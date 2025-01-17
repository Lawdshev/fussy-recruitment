"use client";
import PageTitle from "@/components/shared/page-title";
import Image from "next/image";
import React from "react";
import healthProfessional from "@/assets/medium-shot-scientists-meeting 3.webp";
import maleNurses from "@/assets/bodyframe/malenurses.png";
import caregiver from "@/assets/bodyframe/caregiver.png";
import CareSettings from "@/components/shared/caresettings/care-setting";
import ClientStory from "@/components/shared/client-story/client-story";
import Button from "@/components/ui/button/btn";
import objects from "@/assets/bodyframe/OBJECTS.png";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="container mx-auto pt-12 px-6 sm:px-12 lg:px-24">
        <PageTitle title="Temporary Staffing" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 py-12">
           <div className="order-2 mt-6 lg:order-1 col-span-1">
            <p className="text-primary-text leading-[30px]">
              At Fussy Recruitment, we specialise in providing immediate,
              short-term staffing solutions tailored to healthcare
              providers&apos; diverse needs. Our temporary staffing services are
              designed to ensure you have access to qualified healthcare
              professionals whenever and wherever you need them. Whether
              managing a care home, housing with care, children&apos;s services,
              specialist care units, live-in care, NHS facilities, or home care,
              our extensive network of pre-screened and compliant candidates is
              ready to step in immediately.
            </p>
          </div>
           <div className="order-1 lg:order-2 col-span-1 flex items-center justify-center">
            <Image
              src={healthProfessional}
              alt="healthcare professionals"
              className="rounded-2xl w-full xl:w-[90%]" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 py-12">
          <div className="order-1 lg:order-1 col-span-1 flex items-center justify-center">
            <Image src={maleNurses} alt="male nurses"  className="rounded-2xl w-full xl:w-[90%]"  />
          </div>
           <div className="order-2 lg:order-2 mt-6 col-span-1">
            <p className="text-primary-text leading-[30px]">
              With Fussy Recruitment, you can trust that every temporary staff
              member is fully vetted, trained, and compliant with industry
              regulations. This means you can focus on delivering excellent care
              while we handle the staffing logistics. Whether you need coverage
              for a single shift or ongoing support, our temporary staffing
              solutions are here to help you navigate the complexities of
              healthcare staffing with ease and confidence.
            </p>
          </div>
        </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 py-12">
           <div className="order-2 mt-6 lg:order-1 col-span-1">
            <p className="text-primary-text leading-[30px]">
              Healthcare settings often face unexpected staffing challenges,
              from sudden increases in patient demand to staff absences. Our
              flexible, temporary staffing solutions allow you to fill shifts
              quickly, maintain care continuity, and uphold the highest service
              standards without compromising quality. Our team works closely
              with you to understand your specific needs, ensuring that the
              professionals we provide are not only skilled but also a perfect
              fit for your care environment.
            </p>
          </div>
          <div className="order-1 lg:order-2 col-span-1 flex items-center justify-center">
            <Image src={caregiver} alt="caregiver" className="rounded-2xl w-full xl:w-[90%]"  />
          </div>
        </div>
      </div>
      <CareSettings />
      <ClientStory
        story={`"Having worked in the care industry for over 16 years, I’ve partnered with numerous agencies to meet the staffing needs of our health and social care facility. Without a doubt, Fussy Recruitment stands out as the best agency I’ve ever collaborated with."`}
        name="Healthcare Worker"
      />
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
                onClick={() => router.push("/consultation")}
                text="Request Staffing"
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
};

export default Page;
