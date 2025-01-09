import { FaStar } from "react-icons/fa";
import PageTitle from "../page-title";

interface IProps {
  story: string;
  name: string;
}

function ClientStory({ story, name }: IProps) {
  return (
    <section className="bg-[#FFFFFF] py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-black mb-8">
          <PageTitle title="Client Success Stories" />
        </h2>
        <div className="bg-[#E6F2F2] rounded-xl px-6 sm:px-12 lg:px-24 py-14 shadow-md">
          <p className="text-lg text-[#242424] leading-[32px] mb-6">
           {story}
          </p>
          <div className="flex justify-center mt-2 space-x-1 mb-4">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} className="text-[#C5AA1E]" />
            ))}
          </div>
          <p className="font-medium text-xl text-[#242424]">{name}</p>
        </div>
      </div>
    </section>
  );
}

export default ClientStory;
