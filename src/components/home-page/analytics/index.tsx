import Button from "@/components/ui/button/btn";

function Index() {
    return (
        <div className="bg-[#FDC653] w-screen ">
            <div className="container mx-64 px-48 py-24">
                <div className="flex flex-col lg:flex-row justify-between  gap-12 lg:gap-24">
                    <div className="flex flex-col space-y-8">
                        <div className="text-center lg:text-left">
                            <p className="text-[#723A20] text-4xl font-semibold">12k+</p>
                            <p className="text-black font-medium text-lg">Total Users</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="text-[#924B29] font-bold text-4xl">5k+</p>
                            <p className="text-black font-medium text-lg">Employers</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="text-[#723A20] font-bold text-4xl">200k+</p>
                            <p className="text-black font-medium text-lg">Happy Users</p>
                        </div>
                    </div>  
                    <div className="text-center mr-48  max-w-[652px] lg:text-center space-y-8">
                        <h3 className="font-medium text-3xl lg:text-3xl text-black">
                            Ready to Transform Your Recruitment or Nail Your Next Role?
                        </h3>
                        <p className=" lg:text-lg font-normal">
                            We specialise in delivering top-tier healthcare staffing solutions across the UK. As a trusted partner, we provide a seamless connection between care providers and highly skilled healthcare professionals, ensuring your staffing needs are fulfilled with precision and care.
                        </p>
                        <Button
                            text={"Contact Us"}
                            bgColor="bg-black"
                            size="px-4 py-2 font-medium"
                            textColor="text-white"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Index;