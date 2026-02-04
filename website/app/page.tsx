import HeroSection from "./components/ui/HeroSection";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import EditorialGrid from "@/components/ui/EditorialGrid";
import ServiceCardGrid from "@/components/ui/ServiceCardGrid";
import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientTestimonialMarquee from "@/components/client-sections/ClientTestimonialMarquee";
import ClientBentoGridSection from "@/components/client-sections/ClientBentoGridSection";
import ClientPartnerBrandMarquee from "@/components/client-sections/ClientPartnerBrandMarquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABC VIPPROW",
  description: "VIPPROW Landing",
};

export default function Home() {
  return (
    <>
      <div className="bg-transparent">
        <HeroSection />
        <ClientPartnerBrandMarquee />

        {/* Services Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <ServiceCardGrid />
        </div>
        {/* Services End */}

        {/* Bento Grid Start */}
        <div className="pt-20">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <ClientBentoGridSection />
        </div>
        {/* Bento Grid End */}

        {/* Testimonial Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <ClientTestimonialMarquee />
        </div>
        {/* Testimonial End */}

        {/* Editorial Grid Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <EditorialGrid itemsPerPage={3} />
        </div>
        {/* Editorial Grid End */}

        {/* CTA Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <ClientCTA />
        </div>
        {/* CTA End */}
      </div>
    </>
  );
}
