import React from 'react'
import Image from 'next/image'
import Group14 from "@/assets/Group14.png"
import Group11 from "@/assets/hero/Group11.png"
import Button from '@/components/ui/button/btn'
import { FaArrowRight } from "react-icons/fa";


function Index() {
    return (
        <div className="bg-[#FFF6ED] pt-6 md:pt-12">
            <div className='container mx-auto px-4   lg:px-20 '>
                <div className="text-center  max-w-[554px] mx-auto mb-12">
                    <h2 className="text-2xl md:text-2xl max-w-[477px] mx-auto  font-semibold text-[#723A20]">
                        Healthcare Professionals or Organisations? We’ve Got You Covered!
                    </h2>
                    <p className="text-lg md:text-lg font-normal text-[#0C0C0C] mt-3">
                        Tailored solutions for healthcare professionals and organisations
                    </p>
                </div>
                <div className="grid md:grid-cols-2 items-center gap-[145px] mb-12">
                    <div className="flex justify-center">
                        <Image
                            src={Group14}
                            alt="Healthcare Professionals"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="bg-[#0C0C0C] w-[528px] mt-24 h-[320px] text-[#FFFFFF] p-8 rounded-lg">
                        <h3 className="text-2xl font-medium mb-4">I am a healthcare professional</h3>
                        <p className="mb-6 font-medium w-[95%] leading-[30px]">
                            At Fussy Recruitment, we help healthcare professionals find fulfilling roles that match their skills and career goals. Explore our wide range of opportunities and take the next step in your healthcare career with us.
                        </p>
                        <Button text='Get Started Now'
                            bgColor='bg-[#FFFFFF]'
                            icon={<FaArrowRight />}
                            textColor='text-[black]'
                            size='font-medium px-4 py-2 text-sm' />
                    </div>
                </div>
                <div className="grid md:grid-cols-2  pb-12 items-center gap-[145px]">
                    <div className="bg-[#0C0C0C] w-[528px] mt-24 h-[320px] text-[#FFFFFF] p-8 rounded-lg">
                        <h3 className="text-2xl font-medium mb-4">I am a healthcare organisation</h3>
                        <p className="mb-6 font-medium w-[95%] leading-[30px]">
                            Unlock seamless healthcare staffing solutions with Fussy Recruitment. We connect you with top healthcare professionals quickly and efficiently, ensuring your facility runs smoothly.
                        </p>
                        <Button text='Contact Us Now'
                            bgColor='bg-[#FFFFFF]'
                            icon={<FaArrowRight />}
                            textColor='text-[black]'
                            size='font-medium px-4 py-2 text-sm' />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={Group11}
                            alt="Healthcare Organisation"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index