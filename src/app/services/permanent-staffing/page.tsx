import PageTitle from "@/components/shared/page-title";
import Image from "next/image";
import React from "react";
import frontviewblacknurse from "@/assets/bodyframe/frontviewblacknurse.png";
import nerddoctors from "@/assets/bodyframe/nerddoctors.png";
import happydoctors from "@/assets/bodyframe/happydoctors.png";
import CareSettings from "@/components/shared/caresettings/care-setting";
import objects from "@/assets/bodyframe/OBJECTS.png";
import ClientStory from "@/components/shared/client-story/client-story";
import SectionWithImage from "@/components/goals/goal";

const page = () => {
  return (
    <div>
      <div className="container mx-auto pt-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <PageTitle title="Permanent Staffing" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="order-2 mt-8 md:order-1 col-span-1">
            <p className="text-primary-text leading-[30px]">
              Fussy Recruitment offers comprehensive permanent staffing services to match healthcare providers with the best long-term talent. Finding the right permanent staff is critical to maintaining consistent, high-quality care. That's why our process is thorough, focusing on rigorous screening and meticulous selection to ensure we provide Nurses, Healthcare Assistants, Support Workers and Carers with the necessary skills and experience aligned with your organisation's values and culture.
            </p>
          </div>
          <div className="order-1 md:order-2 col-span-1 flex items-center justify-center">
            <Image src={frontviewblacknurse} alt="healthcare professionals" className="rounded-2xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
          <div className="order-1 md:order-1 col-span-1 flex items-center justify-center">
            <Image src={nerddoctors} alt="healthcare professionals" className="rounded-2xl" />
          </div>
          <div className="order-2 md:order-2 mt-12 col-span-1">
            <p className="text-primary-text leading-[30px]">
              Our permanent staffing services cover various healthcare settings, including care homes, housing with care, children's services, specialist care units, live-in care, NHS facilities, and home care. We take the time to understand your specific needs and challenges, allowing us to identify and present candidates who will seamlessly integrate into your team and contribute positively to your organisation's goals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="order-2 md:order-1 mt-12 col-span-1">
            <p className="text-primary-text leading-[30px]">
              Every candidate we recommend undergoes a comprehensive vetting process, including background checks, qualification verification, and interviews. This rigorous approach ensures that you receive only the most qualified and committed professionals, reducing the risk of turnover and enhancing the stability of your workforce.
            </p>
          </div>
          <div className="order-1 md:order-2 col-span-1 flex items-center justify-center">
            <Image src={happydoctors} alt="healthcare professionals" className="rounded-2xl" />
          </div>
        </div>
      </div>
      <CareSettings />
      <ClientStory story={`“The quality of staff provided by Fussy Recruitment is truly exceptional. Every team member brings a kind and caring nature to our residents, exhibiting both patience and compassion. Their knowledge and training are top-notch, ensuring that they not only meet but exceed the high standards of care we strive to maintain. The staff are always polite, courteous, and respectful, which significantly enhances the experience for our residents”`} name="Healthcare Organisation" />
      <SectionWithImage buttonBgColor="bg-[#000000]"
        buttonSize="px-3 py-2 "
        buttonText="Contact Us"
        buttonTextColor="text-white"
        description="With Fussy Recruitment, you can be confident that your permanent staffing needs are handled with the utmost care and precision."
        imageAlt="health professionals"
        imageSrc={objects}
        title="Let us help you achieve your staffing goals"
        containerBgColor="bg-[#FDC653]"
      />
    </div>
  );
};

export default page;
