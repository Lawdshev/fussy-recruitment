import React from 'react';
import PageTitle from '../shared/page-title';
import Image from 'next/image';
import Button from '../ui/button/btn';
import { IoMdArrowForward } from "react-icons/io";
import nurses from "@/assets/blog-hero/nurses.png";
import happycouple from "@/assets/blog-hero/happycouple.png"
import hdglass from "@/assets/blog-hero/hdglass.png"

const blogPosts = [
    {
        image: nurses,
        title: "Healthcare Staffing Trends in 2024: Adapting to a Changing Landscape",
        description: "The healthcare staffing industry is undergoing significant transformation in 2024, propelled...",
        buttonText: "Learn More",
        buttonBgColor: "bg-primary-text",
    },
    {
        image: happycouple,
        title: "Navigating Compliance in Healthcare Staffing: What You Need to Know",
        description: "In the healthcare industry, compliance is not just a regulatory requirement—it's a cornerstone of qu...",
        buttonText: "Learn More",
        buttonBgColor: "bg-primary-text",
    },
    {
        image: hdglass,
        title: "Fussy Recruitment's Advanced AI-Driven Compliance Systems",
        description: "At Fussy Recruitment, we understand the complexities of compliance and the importance...",
        buttonText: "Learn More",
        buttonBgColor: "bg-primary-text",
    },
];

const Index = () => {
    return (
        <div className="bg-#FFFFFF py-6 max-w-5xl mx-auto">
            <PageTitle title='Blog' />
            <h3 className='text-lg text-primary-text text-center my-10'>Explore insights, tips, and trends shaping the healthcare and recruitment industry</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {blogPosts.map((post, index) => (
                    <div key={index} className='flex flex-col justify-between max-w-[384px] mb-8  bg-white'>
                        <Image src={post.image} alt={'healthprofessionals'} className='rounded-lg' />
                        <h2 className=" mt-3 leading-[28px] font-medium text-primary-text text-lg">{post.title}</h2>
                        <p className="leading-[26px]  mt-2 font-normal mb-4 text-primary-text text-sm">{post.description}</p>
                        <div className="mt-auto">
                            <Button
                                text={post.buttonText}
                                textColor='text-white'
                                size='px-4 py-2'
                                bgColor={post.buttonBgColor}
                                icon={<IoMdArrowForward />}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;