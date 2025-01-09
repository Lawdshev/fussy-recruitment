// components/WhatWeOffer.js
import { FaCheckCircle } from "react-icons/fa"; // Icon library for the checkmark icon
import PageTitle from "@/components/shared/page-title";
import TitleDescription from "@/components/shared/title-and-description/titleDescription";

const offers = [
    {
        title: "Process Analysis",
        description:
            " We work closely with your team to understand your current recruitment methods and business objectives",
    },
    {
        title: "Cost Reduction",
        description:
            "  Our experts identify potential efficiencies to significantly lower recruitment expenses",
    },
    {
        title: "Time Saving",
        description:
            "By optimising your recruitment process, we help you focus on what matters most—growing your business",
    },
    {
        title: "Compliance Assurance",
        description:
            "We ensure that all aspects of your recruitment comply with the latest legislative and regulatory standards",
    },
];

function WhatWeOffer() {
    return (
        <section className="bg-[#FFFCF5] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <PageTitle title="What We Offer" />
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
