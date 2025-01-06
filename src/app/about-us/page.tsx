import Hero from "@/components/about/hero";
import React from "react";
import Mission from "@/components/about/mission";
import WhyChooseUs from "@/components/about/whyChooseUs";

function page() {
  return (
    <div>
      <Hero />
      <Mission />
      <WhyChooseUs/>
    </div>
  );
}

export default page;
