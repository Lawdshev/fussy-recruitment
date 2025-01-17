"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { routes } from "@/utils/static";
import NavBarLink from "./nav-link";
import Button from "../ui/button/btn";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="bg-white border-b-2  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Image src={logo} alt="logo"  />

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className={`hidden md:flex text-gray-700 space-x-6`}>
          {routes.map((route) => (
            <NavBarLink key={route.name} route={route} />
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Button
            onClick={() => router.push("/consultation")}
            text="Hire"
            bgColor="bg-white"
            size="px-4 text-sm"
            textColor="text-black"
            border="border-2"
            borderColor="border-black"
          />
          <Button
        onClick={()=>router.push("/application")}
            text="Get Hired"
            bgColor="bg-black"
            size="px-4 py-2 text-sm"
            textColor="text-white"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t-2 shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col text-gray-700 space-y-4 px-4 py-2">
              {routes.map((route) => (
                <NavBarLink
                  key={route.name}
                  route={route}
                  closeMenu={() => setMenuOpen(false)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 px-4 py-2">
              <Button
                onClick={() => {
                  setMenuOpen(false)
                  router.push("/consultation")
                }}
                text="Hire"
                bgColor="bg-white"
                size="px-4 py-2 text-sm"
                textColor="text-black"
                border="border-2"
                borderColor="border-black"
              />
              <Button
                onClick={() => {
                  setMenuOpen(false)
                  router.push("/application")
                }}
                text="Get Hired"
                bgColor="bg-black"
                size="px-4 py-3 text-sm"
                textColor="text-white"
                borderColor="border-black"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
