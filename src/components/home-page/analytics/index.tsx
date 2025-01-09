import Button from "@/components/ui/button/btn";

function Index() {
  return (
    <div className="bg-[#FDC653] w-screen">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-24 ">
        <div className="flex flex-col lg:flex-row justify-around gap-8 lg:gap-24">
          <div className=" mx-auto gap-6 flex items-center lg:flex-col lg:space-y-8 text-center lg:text-left">
            <div>
              <p className="text-[#723A20] text-3xl sm:text-4xl font-semibold">
                12k+
              </p>
              <p className="text-black font-medium text-base sm:text-lg">
                Total Users
              </p>
            </div>
            <div>
              <p className="text-[#924B29] font-bold text-3xl sm:text-4xl">
                5k+
              </p>
              <p className="text-black font-medium text-base sm:text-lg">
                Employers
              </p>
            </div>
            <div>
              <p className="text-[#723A20] font-bold text-3xl sm:text-4xl">
                200k+
              </p>
              <p className="text-black font-medium text-base sm:text-lg">
                Happy Users
              </p>
            </div>
          </div>   
          <div className="max-w-[652px] mx-auto text-center space-y-8">
            <h3 className="font-medium text-2xl sm:text-3xl text-black">
              Ready to Transform Your Recruitment or Nail Your Next Role?
            </h3>
            <p className=" text-primary-text sm:text-lg font-normal">
              We specialise in delivering top-tier healthcare staffing solutions
              across the UK. As a trusted partner, we provide a seamless
              connection between care providers and highly skilled healthcare
              professionals, ensuring your staffing needs are fulfilled with
              precision and care.
            </p>
            <Button
              text={"Contact Us"}
              bgColor="bg-black"
              size="px-4 py-2 font-medium mx-auto lg:mx-0"
              textColor="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
