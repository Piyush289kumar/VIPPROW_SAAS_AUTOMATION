"use client";

import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { SparklesHeading } from "../SparklesHeading";

export default function CompanyStory() {
  return (
    <section>
      <SparklesHeading />

      <PrimaryHeading
        heading="Empower Your Workflow with AI"
        des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
      />
    </section>
  );
}
