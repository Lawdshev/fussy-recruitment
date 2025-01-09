import Image from "next/image";
import React from "react";
import nurses from "@/assets/blog-hero/nurses.png";
import { IoIosArrowBack } from "react-icons/io";

const HealthcareTrends = () => {
    return (
        <div className="bg-[#FFFFFF] py-12 px-6 mx-8 lg:mx-48">
            <div className="flex text-[#333333] gap-1 py-8 items-center">
                <IoIosArrowBack className="text-lg" />
                <button className="font-medium">Back</button>
            </div>
            <h1 className="text-4xl font-semibold text-[#0C0C0C] mb-4">
                Healthcare Staffing Trends in 2024: Adapting to a Changing Landscape
            </h1>
            <div className="flex flex-col lg:flex-row bg-white my-10 rounded-lg">
                <div className="w-full lg:w-1/2">
                    <Image
                        src={nurses}
                        alt="healthcare professionals"
                        className="rounded-lg w-full object-cover h-[556px]"
                        priority
                    />
                </div>
                <div className="lg:mt-0 lg:ml-6 w-full lg:w-1/2">
                    <p className="text-[#09090A] mt-6 lg:mt-44 leading-[32px]">
                        The healthcare staffing industry is undergoing significant
                        transformation in 2024, propelled by rapid technological
                        advancements, evolving workforce dynamics, and an ever-increasing
                        demand for specialised care. As healthcare providers strive to
                        maintain high standards of patient care amidst these changes,
                        staying informed about the latest trends is crucial for success.
                    </p>
                </div>
            </div>
            <div className="leading-[32px] space-y-6">
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        1. The Rise of Telehealth Roles
                    </h2>
                    <p className="text-[#0C0C0C]">
                        Telehealth has become a cornerstone of modern healthcare,
                        particularly in the wake of the COVID-19 pandemic. In 2024, we're
                        seeing a continued expansion of telehealth services, with a growing
                        need for healthcare professionals skilled in remote patient care,
                        telemedicine, and virtual consultations. This shift not only
                        broadens access to healthcare but also creates new opportunities
                        for healthcare workers to engage in flexible, location-independent
                        roles. Providers who adapt to this trend by integrating telehealth
                        professionals into their staffing models can offer more
                        comprehensive and accessible care to their patients.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        2. The Growing Importance of Flexible Staffing Solutions
                    </h2>
                    <p className="text-[#0C0C0C]">
                        The healthcare workforce is becoming increasingly diverse, with
                        professionals seeking greater flexibility in their work schedules.
                        In response, healthcare providers are embracing flexible staffing
                        solutions for better work-life balance, reduced burnout, and
                        improved job satisfaction. This trend includes the rise of gig work
                        in healthcare, where professionals can pick up shifts as needed and
                        on-demand staffing platforms that match healthcare facilities with
                        qualified workers in real-time. By offering more adaptable work
                        arrangements, providers can attract and retain top talent while
                        ensuring they have the staff to meet fluctuating patient demands.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        3. The Impact of AI on Recruitment Processes
                    </h2>
                    <p className="text-[#0C0C0C]">
                        Artificial Intelligence (AI) is revolutionising the recruitment
                        process in healthcare. From automating candidate sourcing and
                        screening to enhancing the matching of candidates with job
                        openings, AI-driven tools are making recruitment faster, more
                        efficient, and more precise. In 2024, we're seeing an increasing
                        adoption of AI to identify the best candidates quickly and predict
                        future staffing needs based on data analytics. This allows
                        healthcare providers to stay ahead of staffing challenges, reduce
                        time-to-hire, and ensure that the professionals they bring are the
                        best fit for their needs.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-medium text-[#09090A] mb-2">
                        How Healthcare Providers Can Adapt
                    </h2>
                    <p className="text-[#0C0C0C]">
                        To stay competitive and maintain quality care in this rapidly
                        changing landscape, healthcare providers must embrace these trends
                        and integrate them into their staffing strategies. This includes
                        investing in telehealth infrastructure, offering flexible work
                        options to attract diverse talent, and leveraging AI tools to
                        streamline recruitment and staffing processes. By doing so,
                        providers can ensure they are well-equipped to meet the demands of
                        modern healthcare and continue delivering exceptional patient care.
                    </p>
                    <p className="mt-6 text-[#0C0C0C]">
                        Staying ahead of these trends enhances operational efficiency and
                        positions healthcare organisations as leaders in a competitive
                        industry. As 2024 unfolds, those who adapt quickly will thrive in
                        an increasingly complex healthcare environment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HealthcareTrends;
