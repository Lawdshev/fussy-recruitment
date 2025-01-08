import { TextAreaInput, TextInput } from "@/components/form/inputs";
import PageTitle from "@/components/shared/page-title";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

const Page = () => {
  return (
    <div className="container mx-auto px-6 lg:px-44 py-12">
      {/* Contact Us Header */}
      <div className="text-center mb-12">
        <PageTitle title="Contact Us" />
      </div>

      {/* Intro Section */}
      <div className="bg-[#F6F6F6] border border-[#004646] p-6 xl:p-12 mb-12 rounded-xl">
        <h3 className="text-lg font-medium text-center text-primary-text">
          We&apos;re Here to Meet Your Healthcare Staffing Needs
        </h3>
        <p className="text-center mt-4 text-sm text-primary-text">
          Our team is dedicated to understanding your unique needs and
          delivering tailored solutions that exceed your expectations. For
          clients, we offer a seamless process to connect you with highly
          skilled, compliant healthcare staff, ensuring your care standards are
          met. For candidates, we provide access to rewarding opportunities that
          align with your skills and career goals.
        </p>
      </div>

      {/* Contact Form and Map Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput label="First Name" required type="text" />
            <TextInput label="Last Name" required type="text" />
          </div>
          <TextInput label="Email" required type="email" />
          <TextInput label="Phone Number" type="tel" />
          <TextAreaInput label="Message" rows={6} />

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md w-full"
          >
            Send Message
          </button>
        </form>

        {/* Map Section */}
        <div>
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000.000000!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAxMDDCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sus!4v0000000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen={false}
          ></iframe>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-[#FFF9EE] text-primary-text mt-12 p-6 rounded-xl shadow-md shadow-[#00000026]">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <p className="font-medium">Office Address</p>
            <p className="text-sm text-gray-600">
              Harrier House, Aviation Way, Southend, Essex. SS2 6UN
            </p>
          </div>
          <div className="mb-4 sm:mb-0">
            <p className="font-medium">Phone Number</p>
            <p className="text-sm text-gray-600">01702 842 942</p>
          </div>
          <div className="mb-4 sm:mb-0">
            <p className="font-medium">Email</p>
            <p className="text-sm text-gray-600">
              Recruitment@fussygroup.co.uk
            </p>
          </div>
          <div>
            <p className="font-medium">Social Media</p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-gray-600">
                <BsTwitter />
              </a>
              <a href="#" className="text-gray-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600">
                <SlSocialLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
