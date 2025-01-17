// components/WhatWeOffer.js
import { FaCheckCircle } from "react-icons/fa"; // Icon library for the checkmark icon
import PageTitle from "../page-title";
import TitleDescription from "../title-and-description/titleDescription";

const offers = [
  {
    title: "Comprehensive Recruitment Management",
    description:
      " We manage the entire recruitment lifecycle, from job advertising and candidate sourcing to shortlisting, interviewing, and onboarding.",
  },
  {
    title: "Regulatory Compliance",
    description:
      " We ensure all candidates meet industry standards with thorough background checks, DBS disclosures, and compliance with employment legislation.",
  },
  {
    title: "Tailored Recruitment Strategies ",
    description:
      "We analyse your business needs and current processes to create a customised recruitment plan that aligns with your objectives, helping you reduce costs and improve efficiency",
  },
  {
    title: "Flexible Service Options ",
    description:
      "Whether you need end-to-end recruitment management or support with specific aspects of the hiring process, we offer flexible solutions to meet your unique needs",
  },
];

function WhatWeOffer() {
  return (
    <section className="bg-[#FFFCF5] py-12 ">
      <div className="container px-8 md:px-24 lg:px-36 mx-auto text-center">
        <PageTitle title="Our RPO Services" />
        <div className="space-y-12 mt-12">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex flex-row items-start space-x-2 md:space-x-4 text-left"
            >
              <FaCheckCircle className="w-6 h-6 mt-1 md:w-8 md:h-8 text-[#008080] flex-shrink-0 mb-4 sm:mb-0" />
              <div>
                <TitleDescription
                  title={offer.title}
                  description={offer.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhatWeOffer;
