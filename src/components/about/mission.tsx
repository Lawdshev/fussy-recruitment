import React from 'react'
import Image from 'next/image'
import threeSquares from '@/assets/about-hero/Frame 1618872597.png'
import threeSquares2 from '@/assets/about-hero/Frame 1618872609.png'
import PageTitle from '../shared/page-title';

const Mission = () => {
    return (
      <>
        <div className="py-6 md:py-12 lg:py-24 px-8 md:px-24 lg:px-32 bg-[#FFF9EE]">
          <div className="container mx-auto grid grid-cols-4 items-center">
            <div className="col-span-1">
              <Image src={threeSquares} alt="mission" />
            </div>
            <div className="col-span-2">
              <PageTitle title="Our Mission" />
              <p className="text-black mt-8 w-[90%] mx-auto leading-[32px]">
                At Fussy Recruitment, we aim to revolutionise healthcare
                staffing through innovative, data-driven, and comprehensive
                talent consultancy services. We are dedicated to connecting
                healthcare providers with the right professionals, ensuring that
                every placement enhances care quality that drives success
              </p>
            </div>
            <div className="col-span-1 ">
              <Image src={threeSquares} alt="mission" className="float-right" />{" "}
            </div>
          </div>
        </div>
        <div className="py-6 md:py-12 lg:py-24 px-8 md:px-24 lg:px-32 bg-[#E6F2F2]">
          <div className="container mx-auto grid grid-cols-4 items-center">
            <div className="col-span-1">
              <Image src={threeSquares2} alt="mission" />
            </div>
            <div className="col-span-2">
              <PageTitle title="Our Story" />
              <p className="text-black mt-8 w-[90%] mx-auto leading-[32px]">
                Fussy Recruitment's mission is to empower healthcare businesses
                with workforce solutions that help them achieve their goals. We
                are responsive, customer-focused, and dedicated to connecting
                you with the right talent to drive your success
              </p>
            </div>
            <div className="col-span-1 ">
              <Image src={threeSquares2} alt="mission" className="float-right" />{" "}
            </div>
          </div>
        </div>
      </>
    );
}

export default Mission