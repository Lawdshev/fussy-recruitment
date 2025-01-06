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
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <Image src={footerlogo} alt="logo" />
          <p className="text-sm text-white mt-4 max-w-xs">
            An All-In-One Solution to connect healthcare professionals and
            employers effortlessly. Recruitment, Compliance, Onboarding,
            Workforce Management, and More.
          </p>
        </div>
        <div className="flex gap-16">
          <FooterLink/>
          <QuickLinks />
        </div>
      </div>
      <div className="border-t border-gray-700 my-8"></div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <p className="text-sm text-white">Copyright © 2024 Fussy Recruitment</p>
        <div className="flex space-x-4">
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
    </footer>
  );
};

export default Footer;
