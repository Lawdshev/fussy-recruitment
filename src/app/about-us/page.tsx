"use client"
import Hero from "@/components/about/hero";
import React from "react";
import Mission from "@/components/about/mission";
import WhyChooseUs from "@/components/about/whyChooseUs";
import OurValues from "@/components/about/ourValues";
import Modal from "@/components/modal/modal";

function page() {
  return (
    <div>
      <Hero />
      <Mission />
      <WhyChooseUs />
      <OurValues/>
    </div>
  );
}

export default page;
