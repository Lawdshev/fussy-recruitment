import PageTitle from "@/components/shared/page-title";
import Image from "next/image";
import React from "react";
import healthProfessional from "@/assets/medium-shot-scientists-meeting 3.webp"

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto pt-12  px-24">
        <PageTitle title="Temporary Staffing" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="order-2 md:order-1 col-span-1" >
            <p className="text-primary-text">
              At Fussy Recruitment, we specialise in providing immediate,
              short-term staffing solutions tailored to healthcare providers'
              diverse needs. Our temporary staffing services are designed to
              ensure you have access to qualified healthcare professionals
              whenever and wherever you need them. Whether managing a care home,
              housing with care, children's services, specialist care units,
              live-in care, NHS facilities, or home care, our extensive network
              of pre-screened and compliant candidates is ready to step in
              immediately
            </p>
          </div>
                  <div className="order-1 md:order-2 col-span-1  flex items-center justify-center">
                      <Image src={healthProfessional} alt="healthcare professionals" className="rounded-2xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
             <div className="order-1 md:order-2 col-span-1  flex items-center justify-center">
                      <Image src={healthProfessional} alt="healthcare professionals" className="rounded-2xl" />
          </div>
          <div className="order-2 md:order-1 col-span-1" >
            <p className="text-primary-text">
              With Fussy Recruitment, you can trust that every temporary staff member is fully vetted, trained, and compliant with industry regulations. This means you can focus on delivering excellent care while we handle the staffing logistics. Whether you need coverage for a single shift or ongoing support, our temporary staffing solutions are here to help you navigate the complexities of healthcare staffing with ease and confidence
            </p>
          </div>
               
        </div>
      </div>
    </div>
  );
};

export default Hero;
