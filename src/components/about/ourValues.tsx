import React from "react";
import PageTitle from "../shared/page-title";
import integrity from "@/assets/about-hero/secure-collaboration(1) 1.png"
import excellence from "@/assets/about-hero/excellence 1.png"
import responsiveness from "@/assets/about-hero/communication(2) 1.png"
import collaboration from "@/assets/about-hero/material-symbols-light_diversity-2-outline.png"
import innovation from "@/assets/about-hero/streamline_industry-innovation-and-infrastructure.png"
import empathy from "@/assets/about-hero/healthicons_community-meeting-outline.png"
import accountability from "@/assets/about-hero/Vector (2).png"
import Image from "next/image";

const values = [
  {
    icon: integrity,
    title: "Integrity",
    description:
      "We believe in always doing the right thing. Our commitment to honesty, transparency, and ethical practices ensures that our clients and candidates can trust us to act in their best interests.",
  },
  {
    icon: excellence,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work. From the quality of our candidates to the efficiency of our processes, we are dedicated to delivering the highest standards in recruitment.",
  },
  {
    icon: responsiveness,
    title: "Responsiveness",
    description:
      "Being responsive is critical in the fast-paced world of healthcare. We prioritise quick, effective communication and are always ready to adapt to the evolving needs of our clients and candidates.",
  },
  {
    icon: collaboration,
    title: "Collaboration",
    description:
      "We see ourselves as partners in your success. By working closely with our clients and candidates, we ensure that we understand your needs and can provide the best possible solutions.",
  },
  {
    icon: innovation,
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to stay ahead in recruitment. With a data-driven approach and tools, we deliver innovative solutions to meet the evolving needs of the healthcare sector.",
  },
  {
    icon: empathy,
    title: "Empathy",
    description:
      "We recognise the human element in everything we do. Whether supporting healthcare organisations, patients, or our team, we approach every interaction with compassion and understanding.",
  },
  {
    icon: accountability,
    title: "Accountability",
    description:
      "We take responsibility for our actions and their outcomes. Our commitment to accountability means we stand by our promises and always strive to improve our services.",
  },
];

const OurValues = () => {
  return (
    <div className="bg-[#FFFCF5] py-12 px-4">
      <div className="container mx-auto text-center">
        <PageTitle title="Our Values" />
        <p className="text-center text-primary-text mt-8 w-full md:w-[60%] mx-auto">
          At Fussy Recruitment, our values guide everything we do. They are the
          foundation of our commitment to delivering exceptional service and
          building solid and lasting partnerships.
        </p>
        <div className="flex items-center gap-8 mt-12 justify-center flex-wrap px-4 md:px-12 lg:px-24">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center w-full sm:w-[45%] md:w-[30%] lg:w-[25%] mx-auto"
            >
              <div className="mb-4 flex items-center justify-center">
                <Image src={value.icon} alt="icon" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#0C0C0C]">
                {value.title}
              </h3>
              <p className="text-[#0C0C0C] text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default OurValues;
