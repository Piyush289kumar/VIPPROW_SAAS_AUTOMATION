import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientTestimonialMarquee from "@/components/client-sections/ClientTestimonialMarquee";
import DigitalMarketingHeroSection from "@/components/custom-ui/DigitalMarketingHeroSection";
import InfoSection from "@/components/custom-ui/InfoSection";
import DigitalMarketingFeatureSection from "@/components/mvpblock-ui/DigitalMarketingFeatureSection";
import DescriptionSection from "@/components/ui/cards/DescriptionSection";



import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { digitalTextContent } from "../data/digital-content";
import DynamicSection from "@/components/dynamic/DynamicContent";

export default function DigitalMarketingPage() {
  return (
    <>

    
      {/* Digital Markting Hero Section Start. */}
      <DigitalMarketingHeroSection />
      {/* Digital Markting Hero Section End. */}

      {/* Info Section Start */}
      <InfoSection />
      {/* Info Section End */}

      {/* Digital Marketing Feature Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Smarter Digital Marketing Starts with Intelligent Systems"
          des="Streamline your marketing operations with AI-driven strategies and seamless integrations."
        />
        <DigitalMarketingFeatureSection />
      </div>
      {/* Digital Marketing Feature End */}

      {/* Services Start */}
      <ServiceGridScroller initialTab="Marketing" showTabs={false} />

      {/* <ServiceGridScroller /> */}
      {/* Services End */}
      {/* digital marketing content start*/}
      <div className="pt-20 max-w-7xl mx-auto">
              <>
                <DynamicSection
                  textContent={{
                    heading: digitalTextContent[0].heading,
                     description: digitalTextContent[0].description,
                     long_description : digitalTextContent[0].long_description,
                      highlight: digitalTextContent[0].highlight,
                    
                  }}
                />
      
                {/* <DynamicSection imageSections={saasImageContent[0].sections} /> */}
      
              
              </>
            </div>
      {/* digital marketing content End*/}
      
      
      {/* Testimonial Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Client Experiences That Matter"
          des="Authentic stories from brands that achieved measurable growth through Vipprow’s strategic approach."
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
