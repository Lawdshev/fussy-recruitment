import Image from "next/image";
import React from "react";
import hdglass from "@/assets/blog-hero/hdglass.png"
import { IoIosArrowBack } from "react-icons/io";

const AiDrivenComplianceSystem = () => {
    return (
        <div className="bg-[#FFFFFF] py-12 px-6 mx-8 lg:mx-48">
            <div className="flex text-[#333333] gap-1 py-8 items-center">
                <IoIosArrowBack className="text-lg" />
                <button className="font-medium">Back</button>
            </div>
            <h1 className="text-4xl font-semibold text-[#0C0C0C] mb-4">
                Fussy Recruitment's Advanced AI-Driven Compliance Systems
            </h1>
            <div className="flex flex-col lg:flex-row bg-white my-10 rounded-lg">
                <div className="w-full lg:w-1/2">
                    <Image
                        src={hdglass}
                        alt="healthcare professionals"
                        className="rounded-lg w-full  h-[556px]"
                        priority
                    />
                </div>
                <div className="lg:mt-0 lg:ml-6 w-full lg:w-1/2">
                    <p className="text-[#09090A] mt-6 lg:mt-44 leading-[32px]">
                        At Fussy Recruitment, we understand the complexities of compliance and the importance of maintaining the highest standards. That's why we've invested in advanced AI-driven compliance systems that streamline and automate many processes involved in managing compliance.
                    </p>
                </div>
            </div>
            <div className="leading-[32px] space-y-6">
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        1. Automated DBS and Right-to-Work Checks
                    </h2>
                    <p className="text-[#0C0C0C]">
                        Our AI systems automatically initiate and track DBS and right-to-work checks, ensuring all candidates are fully vetted before placement. This reduces the risk of human error and speeds up the onboarding process, allowing us to place qualified professionals quickly without compromising compliance
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        2. Real-Time Compliance Monitoring
                    </h2>
                    <p className="text-[#0C0C0C]">
                        Our AI tools monitor compliance status across our workforce in real-time, alerting us to potential issues before they become problems. This proactive approach ensures that we can address compliance concerns immediately, maintaining the integrity of our staffing solutions.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        3. Ongoing Training and Development
                    </h2>
                    <p className="text-[#0C0C0C]">
                        We use AI to track our staff's training and CPD progress, ensuring they are always up-to-date with the latest requirements and best practices. This not only helps us stay compliant but also ensures that our staff provides the highest-quality care.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        Data Security and GDPR Compliance
                    </h2>
                    <p className="text-[#0C0C0C]">
                        Our AI-driven systems are designed with data protection in mind. They ensure that all personal data is securely stored and processed in compliance with GDPR. This safeguards patient and staff information, maintaining trust and confidentiality.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2" >
                        Ensuring Peace of Mind for Healthcare Providers
                    </h2>
                    <p className="mt-6 text-[#0C0C0C]">
                        Navigating compliance in healthcare staffing can be challenging. Still, with Fussy Recruitment's advanced systems and commitment to excellence, you can be confident that your staffing needs are met with the highest standards of professionalism and care. Our approach protects your patients and helps you avoid the pitfalls of non-compliance, allowing you to focus on what matters most—delivering exceptional healthcare.
                    </p>
                    <p className="mt-6 text-[#0C0C0C]" >
                        For healthcare providers, partnering with a compliant and reliable staffing agency like Fussy Recruitment is essential to maintaining a safe and effective workforce. As compliance requirements continue to evolve, staying informed and leveraging advanced technology will ensure you meet all regulatory standards and provide the best possible care to those who need it most.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AiDrivenComplianceSystem;
