// components/WhatWeOffer.js
import { FaCheckCircle } from "react-icons/fa"; // Icon library for the checkmark icon
import PageTitle from "../page-title";
import TitleDescription from "../title-and-description/titleDescription";

const offers = [
    {
        title: "Comprehensive Recruitment Management:",
        description:
            " We manage the entire recruitment lifecycle, from job advertising and candidate sourcing to shortlisting, interviewing, and onboarding.",
    },
    {
        title: "Regulatory Compliance:",
        description:
            " We ensure all candidates meet industry standards with thorough background checks, DBS disclosures, and compliance with employment legislation.",
    },
    {
        title: "Tailored Recruitment Strategies: ",
        description:
            "We analyse your business needs and current processes to create a customised recruitment plan that aligns with your objectives, helping you reduce costs and improve efficiency",
    },
    {
        title: "Flexible Service Options: ",
        description:
            "Whether you need end-to-end recruitment management or support with specific aspects of the hiring process, we offer flexible solutions to meet your unique needs",
    },
];

function WhatWeOffer() {
    return (
        <section className="bg-[#FFFCF5] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <PageTitle title="Our RPO Services" />
                <div className="space-y-8 mt-12">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="flex items-start space-x-4 text-left"
                        >
                            <FaCheckCircle className="w-8 h-8 text-[#008080] flex-shrink-0" />
                            <div className="flex items-center space-x-2">
                                <TitleDescription title={offer.title} description={offer.description} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default WhatWeOffer
