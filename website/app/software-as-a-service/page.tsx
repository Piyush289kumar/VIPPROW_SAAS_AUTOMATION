import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientTestimonialMarquee from "@/components/client-sections/ClientTestimonialMarquee";
import SaasHeroSection from "@/components/custom-ui/SaasHeroSection";
import WorkFlowSteps from "@/components/custom-ui/WorkFlowSteps";
import SaasFeatureSteps from "@/components/mvpblock-ui/SaasFeatureSteps";
import TopProductSparkles from "@/components/mvpblock-ui/TopProductSparkles";
import DescriptionSection from "@/components/ui/cards/DescriptionSection";
import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";

import TextSection from "@/components/dynamic/DynamicContent";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

import DynamicSection from "@/components/dynamic/DynamicContent";
import { saasImageContent, saasTextContent } from "@/app/data/software-content";
import SoftwareDes from "@/components/ui/cards/SoftwareDes";

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
      {/* Testimonial Start */}
      <div className="pt-0 md:pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Scale Smarter with SaaS Solutions"
          des="Empower your business with secure, cloud-based software designed to streamline operations and boost productivity.."
        />
        <SaasFeatureSteps />
      </div>
      {/* Testimonial End */}
      {/* Services Start */}
      <ServiceGridScroller />
      {/* Services End */}
      {/* software service kliye speciality 1 */}
      <div className="pt-20 max-w-7xl mx-auto">
        <>
          <DynamicSection
            textContent={{
              heading: saasTextContent[0].heading,
              description: saasTextContent[0].description,
            }}
          />

          {/* <DynamicSection imageSections={saasImageContent[0].sections} /> */}

          <DynamicSection imageSections={saasImageContent[0].sections} />
        </>
      </div>
      {/* <SoftwareDes /> */}

      {/* software service kliye speciality 2 */}

      {/* Testimonial Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Client Experiences That Matter"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <ClientTestimonialMarquee />
      </div>
      {/* Testimonial End */}
      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <ClientCTA />
      </div>
      {/* CTA End */}
    </>
  );
}
