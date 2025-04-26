import Hero from "../sections/Hero";
import FeaturedSpreadsheets from "../sections/FeaturedSpreadsheets";
import Benefits from "../sections/Benefits";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import CTA from "../sections/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <FeaturedSpreadsheets />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
}