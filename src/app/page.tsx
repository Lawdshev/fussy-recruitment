import Analytics from "@/components/home-page/analytics";
import Hero from "@/components/home-page/hero";
import Offer from "@/components/home-page/offer";
import Body from "@/components/home-page/body";
import Testimonials from "@/components/home-page/testimonial";
import Contact from "@/components/home-page/contact";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <Analytics/>
      <Offer/>
      <Body/>
   <Testimonials/>
   <Contact/>
    </div>
  );
}
