import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { routes } from "@/utils/static";
import NavBarLink from "./nav-link";
import Button from "../button/btn";

export default function NavBar() {
  return (
      <nav className="bg-white shadow-md ">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image src={logo} alt="logo" />
          <div className="hidden cursor-pointer md:flex text-gray-700 space-x-6">
            {routes.map((route) => (
              <NavBarLink route={route} />
            )
            )}
          </div>
          <div className="flex gap-3">
            <Button text="Hire"
              bgColor="bg-white"
              size="px-4 text-lg"
              textColor="text-black"
              border="border-2"
              borderColor="border-black" />
            <Button text="Get Hired"
              bgColor="bg-black"
              size="px-4 py-2 text-lg"
              textColor="text-white"
            />
          </div>
        </div>
      </nav>
  );
}