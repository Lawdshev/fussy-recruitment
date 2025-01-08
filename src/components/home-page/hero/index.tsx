"use client"
import React from "react";
import floatingOne from "@/assets/hero/Vector.png";
import floatingTwo from "@/assets/hero/Vector (1).png";
import floatingThree from "@/assets/hero/Rectangle 1.png";
import Image from "next/image";
import covid from "@/assets/hero/covid-19-frontline-healthcare-essential-workers 1.png";
import ellipse from "@/assets/hero/Ellipse 7.png";
import polygon from "@/assets/hero/Polygon 1.png";
import Button from "../../ui/button/btn";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

function Index() {
  return (
    <div className="bg-[#FFFCF5] pt-6 xl:pt-12">
      <div className="grid grid-cols-2 lg:px-8 xl:px-4 2xl:px-8 container mx-auto">
        <motion.div
          className="relative col-span-2  xl:col-span-1 py-8 xl:py-0 xl:h-[calc(60vh-100px)] px-4 xl:px-0"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <motion.div
            className="absolute top-0 left-0 xl:-left-8 2xl:left-0"
            variants={fadeInLeft}
          >
            <Image src={floatingOne} alt="floating arrow" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-28"
            variants={fadeInRight}
          >
            <Image src={floatingThree} alt="floating rectangle" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 md:bottom-16 xl:bottom-0 2xl:bottom-16 2xl:right-16 right-4 md:right-16 xl:right-0"
            variants={fadeInRight}
          >
            <Image src={floatingTwo} alt="floating arrow" />
          </motion.div>
          <div className="px-4 md:pl-32 xl:pl-0 xl:ml-14 xl:pr-0 xl:mt-6 pr-8 pt-8 xl:pt-0 2xl:pt-8">
            <motion.p
              className="text-3xl md:text-5xl font-semibold leading-[40px] md:leading-[57px] text-primary-text"
              variants={fadeInUp}
            >
              Transforming Healthcare Recruitment Across the UK
            </motion.p>
            <motion.p
              className="md:text-xl font-medium text-[#242424] mt-6 mb-8 max-w-[80%]"
              variants={fadeInUp}
            >
              Expertly Managing Contingent Workforces with Precision and Care
            </motion.p>
            <div className="flex items-center gap-4">
              <Button
                text="Find Your Next Role"
                bgColor="bg-black"
                size="px-2 py-2 md:px-3 md:text-lg font-medium"
                textColor="text-white"
              />
              <Button
                text="Hire Top Talents"
                bgColor="bg-[#FCB828]"
                size="px-3 py-2 md:px-3 md:text-lg font-medium"
                textColor="text-black"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative col-span-2 xl:col-span-1 py-12 md:py-8 px-8 xl:px-16 xl:min-h-[calc(65vh-100px)]"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <Image
            src={covid}
            alt="covid 19 frontline healthcare essential workers"
            className="mx-auto lg:w-[80%] xl:w-[90%]"
          />
          <motion.div
            className="absolute bottom-0 md:bottom-8 left-12"
            variants={fadeInLeft}
          >
            <Image src={ellipse} alt="ellipse" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-4 md:right-0"
            variants={fadeInRight}
          >
            <Image src={polygon} alt="polygon" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
