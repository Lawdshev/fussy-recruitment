import PageTitle from "../shared/page-title";
import { FaCheck } from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      title: "Expertise",
      description:
        "With decades of experience in the healthcare sector, we bring deep industry knowledge to every recruitment challenge.",
      icon: (
        <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FCB828] text-white">
          <FaCheck className="text-lg" />
        </div>
      ),
    },
    {
      title: "Efficiency",
      description:
        "Our streamlined processes and advanced technology reduce time-to-hire and ensure you get suitable candidates quickly.",
      icon: (
        <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FCB828] text-white">
          <FaCheck className="text-lg" />
        </div>
      ),
    },
    {
      title: "Cost Saving",
      description:
        "Outsourcing recruitment can reduce administrative burdens, lower agency spending, and allow you to focus your resources on strategic business growth.",
      icon: (
        <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FCB828] text-white">
          <FaCheck className="text-lg" />
        </div>
      ),
    },
  ];

  return (
    <div className="py-12 bg-white container mx-auto">
      <div className="container mx-auto px-4 text-center">
        <PageTitle title="Why Choose Fussy Recruitment's RPO?" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg text-left p-6 mx-auto ${
                index === 2 ? 'md:col-start-1 md:col-end-2' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                {feature.icon}
                <h2 className="text-lg font-medium text-primary-text">
                  {feature.title}
                </h2>
              </div>
              <p className="text-[#0C0C0C] leading-[28px] sm:leading-[26px] lg:leading-[28px] mt-4 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
