import { ClientCardCarousel } from "@/components/aceternity-ui/ClientCardCarousel";

export default function ServicesPage() {
  return (
    <>
      {/* Client Cards Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <ClientCardCarousel />
      </div>
      {/* Client Cards End */}
    </>
  );
}
