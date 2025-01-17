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
import { useRouter } from "next/navigation";


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
  const router = useRouter();

  return (
    <div className="bg-[#FFFCF5] pt-6 xl:pt-4">
      <div className="grid grid-cols-2 lg:px-8 xl:px-4 2xl:px-8 xl:py-20 2xl:py-10 container mx-auto">
        <motion.div
          className="relative col-span-2  xl:col-span-1 py-8 xl:py-0 px-4 xl:px-0"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <motion.div
            className="absolute top-0 left-0 md:top-4 md:left-12 xl:-top-12 2xl:top-0 xl:left-0"
            variants={fadeInLeft}
          >
            <Image src={floatingOne} alt="floating arrow" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-28 xl:-top-12 2xl:top-0"
            variants={fadeInRight}
          >
            <Image src={floatingThree} alt="floating rectangle" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 sm:bottom-4 sm:right-12 md:bottom-8  2xl:bottom-16 2xl:right-16 right-4 md:right-8 lg:right-24 xl:right-4 xl:bottom-2"
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
            <div className="flex flex-wrap items-center gap-4">
              <Button
                onClick={() => router.push("/application")}
                text="Find Your Next Role"
                bgColor="bg-black"
                size="px-2 py-2 md:px-3 md:text-lg font-medium"
                textColor="text-white"
              />
              <Button
                onClick={() => router.push("/consultation")}
                text="Hire Top Talents"
                bgColor="bg-[#FCB828]"
                size="px-3 py-2 md:px-3 md:text-lg font-medium"
                textColor="text-black"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative col-span-2 xl:col-span-1 py-12 md:py-16 xl:py-0 2xl:py-8 px-8 xl:px-16 "
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <Image
            src={covid}
            alt="covid 19 frontline healthcare essential workers"
            className="mx-auto lg:w-[80%] xl:w-[100%] 2xl:w-[80%] max-w-[561px] mb-4"
          />
          <motion.div
            className="absolute bottom-4  left-4 md:left-24 lg:left-28 xl:-bottom-12 xl:left-8 2xl:bottom-0 2xl:left-20"
            variants={fadeInLeft}
          >
            <Image src={ellipse} alt="ellipse" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-4 md:right-24 md:top-4 xl:-top-10 xl:right-5 2xl:right-20 2xl:top-0"
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
