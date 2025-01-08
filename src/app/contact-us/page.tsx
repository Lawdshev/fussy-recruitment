"use client";

import PageTitle from "@/components/shared/page-title";
import InputField from "@/components/ui/button/input/input";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import TextAreaField from "@/components/ui/button/textarea/textarea";
import { CiLocationOn } from "react-icons/ci";
import Button from "@/components/ui/button/btn";
import { fetchAPI } from "@/utils/fetchApi";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(status);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetchAPI<{ message: string }>("api/contact", {
        method: "POST",
        body: formData,
      });
      setIsLoading(false);
      setStatus(response.message || "Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-44 py-12">
      <div className="text-center mb-12">
        <PageTitle title="Contact Us" />
      </div>
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
      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              required
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              required
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <InputField
            label="Email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <TextAreaField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            text={isLoading ? "sending..." : "Send Message"}
            bgColor="bg-[#000000]"
            size="w-full py-2  text-lg"
            textColor="text-[#FEFEFE]"
          />
        </form>
        <div>
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000.000000!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAxMDDCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sus!4v0000000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen={false}
          ></iframe>
        </div>
      </div>
      <div className="bg-[#FFF9EE] text-primary-text mt-12 p-6 rounded-xl shadow-md shadow-[#00000026]">
        <div className="flex flex-col gap-6 sm:flex-row justify-between text-center sm:text-left">
          <div className=" mb-4 sm:mb-0 lg:max-w-[30%]">
            <p className="font-medium">Office Address</p>
            <div className="flex items-start my-3 gap-2">
              <CiLocationOn className="text-[#007474] text-xl mt-1 shrink-0" />
              <p className="text-primary-text">
                Harrier House, Aviation Way, Southend, Essex. SS2 6UN
              </p>
            </div>
          </div>
          <div className="mb-4  sm:mb-0 ">
            <p className="font-medium mb-3">Phone Number</p>
            <div className="flex items-center  my-3 gap-2">
              <PiPhoneCall className="text-[#34C759]  text-xl shrink-0" />
              <a href="tel:01702842942" className="text-primary-text">
                01702 842 942
              </a>
            </div>
          </div>
          <div className=" mb-4  sm:mb-0 ">
            <p className="font-medium mb-3 ">Email</p>
            <div className="flex items-center hover:underline  my-3 gap-2">
              <HiOutlineMail className="text-[#007AFF] text-xl shrink-0" />
              <a
                href="mailto:Recruitment@fussygroup.co.uk"
                className=" text-primary-text"
              >
                Recruitment@fussygroup.co.uk
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium mb-3">Social Media</p>
            <div className="w-full lg:w-auto flex space-x-1 justify-center lg:justify-end mt-4 lg:mt-0">
              <button className="w-8 h-8 flex items-center justify-center bg-white hover:shadow-lg rounded-full">
                <BsTwitterX className="text-black" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white hover:shadow-lg rounded-full">
                <LuFacebook className="text-[#1877F2]" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white hover:shadow-lg rounded-full">
                <SlSocialLinkedin className="text-[#0077B5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
