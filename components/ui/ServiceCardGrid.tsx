"use client";

import { DottedGlowBackgroundCard } from "../aceternity-ui/DottedGlowBackgroundCard";

export default function ServiceCardGrid() {
  return (
    <section className="px-6 py-22">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <DottedGlowBackgroundCard />
        <DottedGlowBackgroundCard />
        <DottedGlowBackgroundCard />
      </div>
    </section>
  );
}
