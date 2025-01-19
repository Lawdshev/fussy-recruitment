import React from "react";
import footerlogo from "@/assets/footerlogo.png";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import FooterLink from "./services";
import QuickLinks from "./quickLinks";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-16 lg:px-20">
        <div className="px-4 py-3 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center lg:text-left">
            <Image src={footerlogo} alt="logo" className="mx-auto lg:mx-0" />
            <p className="text-sm text-white mt-4 max-w-xs mx-auto lg:mx-0">
              An All-In-One Solution to connect healthcare professionals and
              employers effortlessly. Recruitment, Compliance, Onboarding,
              Workforce Management, and More.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-wrap gap-8 lg:gap-16 justify-center mt-6 lg:mt-0">
            <FooterLink />
            <QuickLinks />
          </div>
        </div>
        <div className="border-t border-gray-700 my-8"></div>
        <div className="px-4 py-3 flex flex-wrap justify-between items-center">
          <p className="w-full lg:w-auto text-sm text-white text-center lg:text-left">
            Copyright © 2024 Fussy Recruitment
          </p>
          <div className="w-full lg:w-auto flex space-x-4 justify-center lg:justify-end mt-4 lg:mt-0">
            <button className="w-8 h-8 flex items-center justify-center bg-white shadow-lg rounded-full">
              <BsTwitterX className="text-black" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <LuFacebook className="text-black" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <SlSocialLinkedin className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
