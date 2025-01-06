import Button from "@/components/ui/button/btn";
import React from "react";
import Image from 'next/image';
import people from "@/assets/bodyframe/people.png"

const RecruitmentSection = () => {
    return (
        <div className="bg-[#FDC653]  px-8 sm:px-16 md:px-24 lg:px-20">
            <div className="container flex items-center justify-between mx-auto  sm:px-12 lg:px-20 pt-12 sm:pt-16 lg:pt-18 ">
                <div className="text-center lg:text-center">
                    <h1 className="text-2xl md:text-2xl font-medium text-[#0C0C0C] leading-tight">
                        Ready to revolutionise your recruitment or secure your next role?
                    </h1>
                    <p className="font-normal text-[#0C0C0C] mt-4">
                        Whether you're looking to hire top talent or land your ideal job, we're here to help every step of the way.
                    </p>
                    <div className=" flex items-center justify-center mt-8">
                        <Button text="Contact Us"
                            bgColor="bg-[#000000]"
                            size="px-6 py-2 font-normal"
                            textColor="text-[#FEFEFE]"
                        />
                    </div>
                </div>
                <Image
                    src={people}
                    alt="Healthcare Professionals"
                    className=" w-[500.57px] "
                />
            </div>
        </div>
    );
};

export default RecruitmentSection;
