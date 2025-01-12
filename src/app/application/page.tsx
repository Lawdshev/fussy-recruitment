import { ApplicationForm } from "@/components/forms/application";
import PageTitle from "@/components/shared/page-title";

function Page() {
  return (
    <main className="container mx-auto px-6 lg:px-44  py-[4.5em]">
      <div className="text-center mb-[4.5em]">
        <PageTitle title="Application" />
      </div>
      <div className="text-center text-primary-text flex flex-col gap-y-4">
        <h3 className="text-[20px] font-medium leading-7 ">
          Apply Now to Join Our Healthcare Network
        </h3>
        <p className="">
          Complete the form below to start your journey with Fussy
        </p>
      </div>
      <div className="text-primary-text text-center mt-8 leading-8">
        <p>
          We’re excited to help you find your next role in healthcare. Please
          provide your details below to ensure we match you with the best
          opportunities based on your skills, experience, and preferences. Your
          application is the first step toward a fulfilling career with top
          healthcare organisations
        </p>
      </div>
      <div className="w-full mt-20 mb-16">
        <ApplicationForm />
      </div>
    </main>
  );
}

export default Page;
