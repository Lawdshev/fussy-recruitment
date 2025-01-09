import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/button/btn";
import Image from "next/image";
import blacknurse from "@/assets/Frame 1618872593.png";

function ServiceOffered() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
          <div className="space-y-4 order-2 lg:order-1 md:px-4">
            <h2 className="text-center lg:text-left text-2xl lg:text-2xl font-semibold text-[#723A20]">
              Comprehensive Healthcare Staffing Solutions
            </h2>
            <p className="text-lg text-center font-normal lg:text-lg text-[#000000]">
              Tailored to meet your unique needs
            </p>
            <p className="text-[#0C0C0C] font-normal leading-relaxed">
              Outsource your recruitment process to our experts and streamline
              every step—from candidate sourcing and compliance to interviews
              and onboarding. With our expert consultancy services, we help
              you optimise hiring strategies, reduce costs, and attract top
              talent. Focus on growing your business while we ensure you get
              the right workforce, save valuable time, and build a stronger,
              compliant team.
            </p>
            <div className="max-w-[506px] mx-auto items-center">
              <div className="border-l-2 mt-8 border-[#B3831C] w-36 mx-auto border-r-2">
                <h3 className="text-lg font-medium ml-2 text-[#0C0C0C]">
                  What We Offer
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-12 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008080] flex items-center justify-center">
                    <IoMdCheckmark className="text-white text-lg" />
                  </div>
                  <p className="text-[#1C1C1C] font-medium">
                    Temporary Staffing
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008080] flex items-center justify-center">
                    <IoMdCheckmark className="text-white text-lg" />
                  </div>
                  <p className="text-[#1C1C1C] font-medium">
                    Permanent Staffing
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#008080] flex items-center justify-center">
                    <IoMdCheckmark className="text-white text-lg" />
                  </div>
                  <p className="text-[#1C1C1C] font-medium">Consultancy</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 shrink-0 rounded-full bg-[#008080] flex items-center justify-center">
                    <IoMdCheckmark className="text-white text-lg" />
                  </div>
                  <p className="text-[#1C1C1C] break-words font-medium">
                    Recruitment Process Outsourcing
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-10 xl:mt-20">
              <Button
                text="Learn More"
                bgColor="bg-[#000000]"
                textColor="text-[#FEFEFE]"
                size="px-4 py-2 font-medium mx-auto lg:mx-0"
                icon={<FaArrowRight />}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src={blacknurse}
              alt="Doctors"
              className="rounded-lg w-[90%] lg:w-full xl:w-[90%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOffered;
