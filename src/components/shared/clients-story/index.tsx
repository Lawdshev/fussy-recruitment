import { FaStar } from "react-icons/fa";
import PageTitle from "../page-title";
function ClientsStory() {
    return (
        <section className="bg-[#FFFFFF] py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xl font-semibold text-black mb-8">
                    <PageTitle title="Client Success Stories" />
                </h2>
                <div className="bg-[#E6F2F2] rounded-xl px-24 py-14 shadow-md">
                    <p className="text-lg leading-[32px] text-[#242424] mb-6">
                        “The quality of staff provided by Fussy Recruitment is truly exceptional. Every team member brings a kind and caring nature to our residents, exhibiting both patience and compassion. Their knowledge and training are top-notch, ensuring that they not only meet but exceed the high standards of care we strive to maintain. The staff are always polite, courteous, and respectful, which significantly enhances the experience for our residents”
                    </p>
                    <div className="flex justify-center mt-2 space-x-1 mb-4">
                        {Array.from({ length: 5 }, (_, index) => (
                            <FaStar key={index} className=" text-[#C5AA1E]" />
                        ))}
                    </div>
                    <p className="font-medium text-xl text-[#242424]">Healthcare Organization</p>
                </div>
            </div>
        </section>
    );
}
export default ClientsStory