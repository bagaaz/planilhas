import Hero from "../../sections/construction/Hero";
import Features from "../../sections/construction/Features";
import Testimonials from "../../sections/construction/Testimonials";
import Price from "../../sections/construction/Price";
import CTA from "../../sections/construction/CTA";

export default function ConstructionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Price />
        <CTA />
      </main>
    </div>
  );
}