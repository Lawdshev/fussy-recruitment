import React from 'react'
import PageTitle from '../shared/page-title'
import Image from 'next/image'
import youngemployees from "@/assets/bodyframe/youngemployees.png"
import employee from "@/assets/bodyframe/employee.png"

function Index() {
  return (
      <div>
          <div className="container mx-auto pt-12 px-6 sm:px-12 lg:px-24">
              <PageTitle title="Consultancy Services" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
                  <div className="order-2 flex   justify-center flex-col md:order-1 col-span-1 lg:mt-8 md:mt-0 leading-[30px] sm:leading-[28px] lg:leading-[30px]">
                      <h4 className="text-lg sm:text-xl text-primary-text mb-3 font-medium">
                          Are Recruitment Challenges Holding You Back?
                      </h4>
                      <p className="text-primary-text text-sm sm:text-base leading-[30px] sm:leading-[28px] lg:leading-[30px]">
                          Need help finding the right staff? Are you looking to cut recruitment costs and save valuable time? Need assurance that your hiring processes are fully compliant with regulations? Fussy Recruitment is here to help.
                      </p>
                  </div>
                  <div className="order-1 md:order-2 col-span-1 flex-col flex items-center justify-center">
                      <Image
                          src={youngemployees}
                          alt="healthcare professionals"
                          className="rounded-2xl w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[100%]"
                      />
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
                  <div className="order-2 flex flex-col justify-center md:order-2 col-span-1 lg:mt-8 md:mt-0 lg:leading-[30px]">
                      <h4 className="text-lg  sm:text-xl text-primary-text mb-3 font-medium">
                          Why Choose Our Consultancy Services?
                      </h4>
                      <p className="text-primary-text text-sm sm:text-base leading-[30px] sm:leading-[28px] lg:leading-[30px]">
                          With extensive experience across the healthcare and social care sectors, Fussy Recruitment has successfully partnered with clients ranging from small nursing homes to large housing associations. Our consultancy services are designed to streamline your recruitment processes, reduce costs, and enhance efficiency—all while ensuring that you remain fully compliant with industry regulations.
                      </p>
                  </div>
                  <div className="order-1 md:order-1 col-span-1 flex items-center justify-center">
                      <Image
                          src={employee}
                          alt="healthcare professionals"
                          className="rounded-2xl w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[100%]"
                      />
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Index