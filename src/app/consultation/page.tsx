import { ConsultationForm } from "@/components/forms/consultation";
import PageTitle from "@/components/shared/page-title";
import consultationImage from "@/assets/consultation/consultation-img.png";
import curveArrowLeft from "@/assets/svgs/curveArrowLeft.svg";
import curveArrowRight from "@/assets/svgs/curveArrowRight.svg";
import Image from "next/image";

function Page() {
  return (
    <main>
      <div className="container mx-auto px-6 lg:px-44 py-12">
        <div className="text-center mb-12">
          <PageTitle title="Consultation" />
        </div>
        <div className="text-center text-primary-text flex flex-col gap-y-4">
          <h3 className="text-[20px] font-medium leading-7 ">
            Request Healthcare Staffing Solutions
          </h3>
          <p className="">Let Us Help You Find the Right Professionals</p>
        </div>
        {/* Consultation form */}

        <ConsultationForm />
      </div>
      <section className="bg-[#FFFCF5] py-[4.5em]">
        <div className="text-center mb-[4.5em]">
          <PageTitle title="Schedule Your Free Consultation" />
        </div>
        <div className="container mx-auto px-6 lg:px-[7.5em] ">
          <div className="grid md:grid-cols-3 md:gap-[5.5rem] items-center mb-[5.5rem]">
            <div className="text-left">
              <p className="text-sm leading-[1.5em] text-primary-text ">
                {` Book your free consultation today and discover how Fussy
                Recruitment can transform your staffing approach. Let's work
                together to ensure your care standards are met with the highest
                quality professionals. Your success is our priority—schedule
                your consultation now!`}
              </p>
            </div>

            <div className="border-2 rounded-lg border-[#007474]">
              <Image
                src={consultationImage}
                alt="Consultation"
                className="rounded-lg"
                width={379}
                height={253}
                objectFit="cover"
              />
            </div>

            <div className="text-left">
              <p className="text-sm leading-[1.5em] text-primary-text ">
                Ready to improve your healthcare staffing? Our consultation
                service is the perfect starting point. At Fussy Recruitment, we
                offer personalised consultations to understand your unique needs
                and provide tailored solutions that drive results.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-[8em] items-center ">
            <div className="relative">
              <div className="absolute -top-28 left-24 ">
                <Image
                  src={curveArrowLeft}
                  alt="curve arrow left"
                  // width={190}
                  // height={34}
                />
              </div>
            </div>

            <div className="">
              <p className="text-sm leading-[1.5em] text-primary-text">
                {` Whether you're struggling with staffing shortages, looking for
                specialised care professionals, or planning to optimise your
                workforce management, our experts are here to help. We take the
                time to listen, analyse your challenges, and offer strategic
                advice that aligns with your goals.`}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-28 right-20 ">
                <Image
                  src={curveArrowRight}
                  alt="curve arrow left"
                  // width={190}
                  // height={34}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
