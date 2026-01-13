"use client";
import { PartnerBrandMarquee } from "@/components/magic-ui/PartnerBrandMarquee";
import HeroSection from "./components/ui/HeroSection";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { BentoGridThird } from "@/components/aceternity-ui/BentoGrid";
import { TestimonialMarquee } from "@/components/magic-ui/Testimonials";
import EditorialGrid from "@/components/ui/EditorialGrid";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <HeroSection />
        <PartnerBrandMarquee />
        {/* Bento Grid Start */}
        <div className="pt-20">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <BentoGridThird />
        </div>
        {/* Bento Grid End */}

              {/* Testimonial Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <TestimonialMarquee />
        </div>
        {/* Testimonial End */}

        {/* Editorial Grid Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <EditorialGrid />
        </div>
        {/* Editorial Grid End */}
      </div>
    </>
  );
}
