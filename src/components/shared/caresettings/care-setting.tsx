import React from 'react';
import { FaCheck } from 'react-icons/fa';
import PageTitle from '@/components/shared/page-title';

const CareSetting = () => {
    const settings = [
        "Home Care",
        "Care Homes",
        "Specialist Care",
        "NHS facilities",
        "Care with Housing",
        "Children's Services",
        "Live-in Care",
        "Holiday and Travel Support",
    ];

    return (
        <section className=" bg-[#FFFCF5] py-12 px-8">
            <div className="max-w-6xl mx-auto text-center">
                <PageTitle title="Care Settings We Offer" />
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 md:grid-cols-3 xl:grid-cols-4 gap-8 px-8 sm:px-0 lg:pl-12 ">
                    {settings.map((setting, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-3 text-[#008080] font-medium"
                        >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#008080] text-white">
                                <FaCheck className="text-sm" />
                            </div>
                            <span className="whitespace-nowrap text-[#1C1C1C] text-lg">{setting}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareSetting;