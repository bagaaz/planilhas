import Hero from "../../sections/odonto/Hero";
import Resources from "../../sections/odonto/Resources";
import Testimonials from "../../sections/odonto/Testimonials";
import Price from "../../sections/odonto/Price";
import CTA from "../../sections/odonto/CTA";

export default function OdontoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Resources />
        <Testimonials />
        <Price />
        <CTA />
      </main>
    </div>
  );
}