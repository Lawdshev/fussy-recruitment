import React from 'react'
import PageTitle from '../shared/page-title'
import Image from 'next/image'
import handshake from "@/assets/bodyframe/handshake.png"

function Index() {
  return (
      <div>
          <div className="container mx-auto pt-12 px-6 sm:px-12 lg:px-24">
              <PageTitle title="Recruitment Process Outsourcing" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
                  <div className="order-2 md:order-1 col-span-1">
                      <h4 className="text-lg sm:text-xl text-primary-text mb-3 font-medium">
                          Simplify Your Recruitment with Tailored RPO Solutions
                      </h4>
                      <p className="text-primary-text text-sm sm:text-base leading-[30px] sm:leading-[26px] lg:leading-[30px]">
                          At Fussy Recruitment, our Recruitment Process Outsourcing (RPO) service is designed to take the hassle out of your recruitment process. By partnering with us, you can delegate all or part of your hiring activities to our expert team, gaining the benefits of increased flexibility, efficiency, and cost savings while retaining control over crucial decisions.
                      </p>
                      <p className="text-primary-text text-sm sm:text-base leading-[30px] sm:leading-[26px] lg:leading-[30px] mt-4">
                          With over 20 years of experience in healthcare and social care recruitment, we understand the industry's complexities and compliance requirements. Our RPO service is not just about filling roles—it&apos;s about delivering suitable candidates who align with your business goals and culture.
                      </p>
                  </div>
                  <div className="order-1 md:order-2 col-span-1 flex items-center justify-center">
                      <Image
                          src={handshake}
                          alt="healthcare professionals"
                          className="rounded-2xl w-full max-w-[400px] sm:max-w-[500px]"
                      />
                  </div>
              </div>
          </div>
      </div>


  )
}

export default Index