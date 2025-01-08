import PageTitle from "@/components/shared/page-title";
import Image from "next/image";
import React from "react";
import frontviewblacknurse from "@/assets/bodyframe/frontviewblacknurse.png"
import nerddoctors from "@/assets/bodyframe/nerddoctors.png"
import happydoctors from "@/assets/bodyframe/happydoctors.png"
import CareSettings from "@/components/shared/caresettings/care-setting";

import Button from "@/components/ui/button/btn";
import OBJECTS from "@/assets/bodyframe/OBJECTS.png"
import ClientsStory from "@/components/shared/clients-story";

const Hero = () => {
    return (
        <div>
            <div className="container mx-auto pt-12  px-24">
                <PageTitle title="Permanent Staffing" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
                    <div className="order-2 mt-8 md:order-1 col-span-1" >
                        <p className="text-primary-text leading-[30px]">
                            Fussy Recruitment offers comprehensive permanent staffing services to match healthcare providers with the best long-term talent. Finding the right permanent staff is critical to maintaining consistent, high-quality care. That's why our process is thorough, focusing on rigorous screening and meticulous selection to ensure we provide Nurses, Healthcare Assistants, Support Workers and Carers with the necessary skills and experience aligned with your organisation's values and culture
                        </p>
                    </div>
                    <div className="order-1 md:order-2 col-span-1  flex items-center justify-center">
                        <Image src={frontviewblacknurse} alt="healthcare professionals" className="rounded-2xl" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
                    <div className="order-1 md:order-1 col-span-1  flex items-center justify-center">
                        <Image src={nerddoctors} alt="healthcare professionals" className="rounded-2xl" />
                    </div>
                    <div className="order-2 md:order-2 mt-12 col-span-1" >
                        <p className="text-primary-text leading-[30px]">
                            Our permanent staffing services cover various healthcare settings, including care homes, housing with care, children's services, specialist care units, live-in care, NHS facilities, and home care. We take the time to understand your specific needs and challenges, allowing us to identify and present candidates who will seamlessly integrate into your team and contribute positively to your organisation's goals
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
                    <div className="order-2 md:order-1 mt-12 col-span-1" >
                        <p className="text-primary-text leading-[30px]">
                            Every candidate we recommend undergoes a comprehensive vetting process, including background checks, qualification verification, and interviews. This rigorous approach ensures that you receive only the most qualified and committed professionals, reducing the risk of turnover and enhancing the stability of your workforce
                        </p>
                    </div>
                    <div className="order-1 md:order-2 col-span-1  flex items-center justify-center">
                        <Image src={happydoctors} alt="healthcare professionals" className="rounded-2xl" />
                    </div>
                </div>
            </div>
            <CareSettings />
          <ClientsStory/>
            <div className="bg-[#FDC653] px-6 sm:px-12 md:px-16 lg:px-20">
                <div className="container flex flex-col lg:flex-row items-center justify-between lg:justify-center mx-auto pt-8 sm:pt-12 lg:pt-18 lg:gap-12">
                    <div className="text-center lg:max-w-[521px]">
                        <h1 className="text-xl sm:text-2xl font-medium text-[#0C0C0C] leading-snug">
                            Let us help you achieve your staffing goals
                        </h1>
                        <p className="font-normal leading-[30px] text-[#0C0C0C] mt-4">
                            With Fussy Recruitment, you can be confident that your permanent staffing needs are handled with the utmost care and precision.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start mt-6">
                            <Button
                                text="Contact Us"
                                bgColor="bg-[#000000]"
                                size="px-6 py-2 font-normal mx-auto"
                                textColor="text-[#FEFEFE]"
                            />
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:max-w-[50%] flex justify-center">
                        <Image
                            src={OBJECTS}
                            alt="Healthcare Professionals"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
