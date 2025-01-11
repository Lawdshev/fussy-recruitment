"use client"
import React from 'react';
import WhatWeOffer from '@/components/shared/what-we-offer';
import Index from '@/components/recruitment-process';
import WhyFussy from '@/components/why-fussy';
import ClientStory from '@/components/shared/client-story/client-story';
import objects from '@/assets/bodyframe/OBJECTS.png';
import SectionWithImage from '@/components/goals/goal';
import { useRouter } from "next/navigation";


const page = () => {
    const router = useRouter();
    return (
        <div>
            <Index />
            <WhatWeOffer />
            <WhyFussy />
            <ClientStory story='“While there are undoubtedly many dedicated individuals working behind the scenes at Fussy Recruitment, we’ve had the privilege of working directly with Candice, our representative. Candice is incredibly efficient and responsive, whether it’s for long-term staffing planning or addressing last-minute emergency cover. Her professionalism and dedication have made a significant impact on our operations, allowing us to maintain seamless care delivery”'
                name='Healthcare Organisation' />
            <SectionWithImage
            onClick={() => router.push("/consultation")}
             buttonBgColor='bg-[#0C0C0C]'
                buttonSize='px-3 py-2'
                buttonText='Contact Us Now'
                buttonTextColor='text-white'
                description=". Whether you' re looking to fill temporary, permanent, or contract positions, our RPO service ensures you have the right people in the right roles at the right time"
                imageAlt='health professional'
                imageSrc={objects}
                title='Let Fussy Recruitment Handle Your Hiring Needs' />
        </div>

    );
};

export default page;