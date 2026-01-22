import { CTA } from "@/components/magic-ui/CTA";
import EditorialGrid from "@/components/ui/EditorialGrid";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

export default function ArticlesPage() {
  return (
    <main className="py-44 max-w-7xl mx-auto">
      <PrimaryHeading
        heading="Empower Your Workflow with AI"
        des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to streamline your operations."
      />

      <EditorialGrid itemsPerPage={9} />
      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
      {/* CTA End */}
    </main>
  );
}
