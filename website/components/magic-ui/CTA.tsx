import { GradientBars } from "@/components/ui/gradient-bars";
import { TextReveal } from "@/components/ui/text-reveal";
import PrimaryGlowButton from "../ui/buttons/primary-glow-button";
import SecondaryButton from "../ui/buttons/SecondaryButton";

const markers = [
  { lat: 40.7128, lng: -74.006, size: 0.3 },
  { lat: 34.0522, lng: -118.2437, size: 0.3 },
  { lat: 51.5074, lng: -0.1278, size: 0.3 },
  { lat: -33.8688, lng: 151.2093, size: 0.3 },
  { lat: 28.6139, lng: 77.209, size: 0.3 },
];

export function CTA() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl bg-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <GradientBars />
        <TextReveal className="font-heading text-foreground text-center text-4xl">
          Awesome backgrounds
        </TextReveal>
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-row gap-4">
          <PrimaryGlowButton heading="Get Started Now" />
          <SecondaryButton heading="Book a Demo" />
        </div>
      </div>
    </div>
  );
}
