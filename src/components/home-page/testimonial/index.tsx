"use client"
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const testimonials = [
    {
        text: "Having worked in the care industry for over 16 years, I have worked with many agencies that provide staffing support in the health and social care sector. Fussy Agency is by far the best agency I have ever worked in partnership with!",
        author: "Westerly",
    },
    {
        text: "Fussy Recruitment has consistently delivered exceptional results, helping us find qualified professionals for our organization.",
        author: "Healthcare Org",
    },
    {
        text: "Thanks to Fussy, my career has taken off with fulfilling roles tailored to my skills and goals!",
        author: "Professional",
    },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#FFFFFF] container mx-auto px-6 sm:px-12 lg:px-24 py-8 sm:py-16 lg:py-24">
      <div className="text-center max-w-[990px] mx-auto mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#723A20]">
          Our Clients Trust Us
        </h2>
        <p className="text-base sm:text-lg font-normal text-[#1C1C1C] mt-4">
          Discover why businesses and professionals trust us to deliver
          exceptional results.
        </p>
      </div>

      <div className="relative bg-[#E6F2F2] p-8 sm:p-16 rounded-xl h-auto shadow-lg text-center max-w-[990px] mx-auto overflow-hidden">
        <p className="text-base sm:text-lg text-[#0C0C0C] max-w-[654px] mx-auto p-4 sm:p-8">
          “{testimonials[currentIndex].text}”
        </p>

        <div>
          <div className="text-[#C5AA1E] text-xl sm:text-2xl mt-2">
            {"★".repeat(5)}
          </div>
          <p className="font-medium text-[#242424]">
            {testimonials[currentIndex].author}
          </p>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
          <button
            onClick={prevSlide}
            className="bg-[#FFFFFF] text-[#242424] w-8 sm:w-12 p-2 rounded-md shadow hover:bg-gray-200"
          >
            <IoIosArrowBack className="text-center mx-auto text-sm sm:text-lg" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
          <button
            onClick={nextSlide}
            className="bg-[#FFFFFF] text-[#242424] w-8 sm:w-12 p-2 rounded-md shadow hover:bg-gray-200"
          >
            <IoIosArrowForward className="text-center mx-auto text-sm sm:text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}


export default Testimonials;
