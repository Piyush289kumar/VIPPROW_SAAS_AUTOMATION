import HeroProductInfoSection from "@/components/custom-ui/HeroProductInfoSection";
import SaasHeroSection from "@/components/custom-ui/SaasHeroSection";
import WorkFlowSteps from "@/components/custom-ui/WorkFlowSteps";
import { CTA } from "@/components/magic-ui/CTA";
import { TestimonialMarquee } from "@/components/magic-ui/Testimonials";
import TopProductSparkles from "@/components/mvpblock-ui/TopProductSparkles";
import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

export default function SoftwareAsAServicePage() {
  return (
    <>
      {/* Saas Hero Section Start */}
      <SaasHeroSection />
      {/* Saas Hero Section End */}

      {/* work flow steps start */}
      <WorkFlowSteps />
      {/* work flow steps end */}

      {/* Top Product Sparkles Start */}
      <TopProductSparkles />
      {/* Top Product Sparkles Start */}

      {/* Services Start */}
      <ServiceGridScroller />
      {/* Services End */}

      {/* Testimonial Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <TestimonialMarquee />
      </div>
      {/* Testimonial End */}

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
      {/* CTA End */}
    </>
  );
}
