import React from "react";
import Image from "next/image";
import personImage from "@/assets/about-hero/Group 12.png"
import { FaCheckCircle } from "react-icons/fa";
import PageTitle from "../shared/page-title";

const reasons = [
    {
        title: "Improve Staffing Visibility: ",
        description: "Gain clear insights into workforce planning and fulfilment",
    },
    {
        title: "No Upfront Costs: ",
        description: "Get started with our services without any initial investment",
    },
    {
        title: "Budget Control: ",
        description: "Receive expert recommendations to help you manage your budget effectively and secure your needed staff",
    },
    {
        title: "Cost-Efficient Solutions: ",
        description: "Save on costs and reinvest in critical areas like care, compliance, or patient safety",
    }
]

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <PageTitle title="Why Choose Us" />
        <p className="text-center text-lg text-gray-600 mt-12 w-[45%] mx-auto">
          We recognise the unique challenges of sourcing and managing contingent
          roles in the healthcare sector. We offer award-winning workforce
          solutions designed to fit your budget and priorities.
        </p>
        <div className="flex items-end justify-center gap-12 ">
          <div className=" flex flex-col gap-6 mb-3 max-w-[35%]">
            {reasons.map((item) => (
              <div key={item.title} className="flex items-start space-x-2  ">
                <span>
                  {" "}
                  <FaCheckCircle size={20} className="text-[#FCB828] mt-1" />
                </span>
                <p className="text-black leading-[28px]">
                  <span className="font-medium">{item.title}</span>
                  <span>{item.description}</span>
                </p>
              </div>
            ))}
          </div>
          <div>
            <Image src={personImage} alt="Person shrugging" />;
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;