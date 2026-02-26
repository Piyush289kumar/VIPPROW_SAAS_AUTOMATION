import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientTestimonialMarquee from "@/components/client-sections/ClientTestimonialMarquee";
import DigitalMarketingHeroSection from "@/components/custom-ui/DigitalMarketingHeroSection";
import InfoSection from "@/components/custom-ui/InfoSection";
import DigitalMarketingFeatureSection from "@/components/mvpblock-ui/DigitalMarketingFeatureSection";
import DigitalDes from "@/components/ui/cards/DigitalDes";

import DigitalHighlighted from "@/components/ui/cards/DigitalHighlited";

import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

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
      <ServiceGridScroller
        initialTab="Marketing"
        showTabs={false}
      />

      {/* <ServiceGridScroller /> */}
      {/* Services End */}
      {/* digital marketing me koi speciality batani ho to 1*/}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Vipprow Digital Marketing Services  "
          des="Authentic stories from brands that achieved measurable growth through Vipprow’s strategic approach."
        />
        <DigitalDes />
      </div>
      {/* digital marketing me koi speciality batani ho to 2*/}
      
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
