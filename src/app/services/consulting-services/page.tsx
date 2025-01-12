"use client"
import React from 'react';
import Index from "@/components/consult/index";
import Offers from "@/components/consult/offer/index";
import ClientStory from '@/components/shared/client-story/client-story';
import SectionWithImage from '@/components/goals/goal';
import objects from "@/assets/bodyframe/OBJECTS.png"
import { useRouter } from "next/navigation";


const Page = () => {
    const router=useRouter();
    return (
        <div>
            <Index />
            <Offers/>
            <ClientStory story='I cannot recommend any other agency as highly as I do Fussy Recruitment. We feel truly fortunate to partner with such a reliable and compassionate team. Thank you to everyone at Fussy Recruitment for your outstanding support! '
                name='Westerley Christian Homes' />
            <SectionWithImage 
                onClick={() => router.push("/consultation")}
            buttonBgColor='bg-[#0C0C0C]'
                buttonSize='px-3 py-2'
                buttonText='Request Staffing'

                buttonTextColor='text-white'
                description="Contact us today to learn more about how our consultancy services can benefit your organisation. Together, we can turn recruitment challenges into opportunities for growth and success"
                imageAlt='health professional'
                imageSrc={objects}
                title='Ready to Optimise Your Recruitment?' />
        </div>
    );
};

export default Page;