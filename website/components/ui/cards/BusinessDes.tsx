"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function BusinessDes() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center md:text-justify">
        {/* LEFT CONTENT */}
        <div className="space-y-2 text-slate-300 leading-relaxed text-sm  md:text-justify ">
          <p className="md:text-lg">
            Vipprow helps businesses streamline their operations with advanced
            AI-powered automation solutions.
          </p>
          <p className="md:text-lg">
            From managing leads to automating marketing and customer
            interactions, we reduce manual work and improve overall efficiency,
            allowing businesses to focus more on growth and strategy.
          </p>
          <p className="md:text-lg">
            Our automation solutions include CRM systems, WhatsApp automation,
            and AI-driven marketing tools like Croissix. These tools help
            businesses manage customers effectively, respond instantly, and run
            automated campaigns that save time while increasing productivity and
            accuracy.
          </p>
          <p className="md:text-lg">
            At Vipprow, we focus on building intelligent systems that work
            seamlessly with your business processes. Our  tools analyze data,
            track user behavior, and provide actionable insights that help you
            make smarter decisions.  enhances your ability to predict trends,
            personalize marketing efforts, and deliver better customer
            experiences.
          </p>

          <p className="md:text-lg">
            With smart data insights and automated workflows, Vipprow enables
            businesses to make better decisions and scale faster.
          </p>
          

          <p className="text-white font-semibold text-xl pt-4">
            We create systems that not only simplify operations but also drive
            consistent growth, making your business more efficient, responsive,
            and future-ready.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
            <Image
              src="/assets/company/business.png"
              alt="Client testimonial"
              width={800}
              height={800}
              className="h-auto w-full object-cover rounded-2xl"
              priority
            />

            {/* OVERLAY */}

            {/* GLASS OVERLAY */}
            <div
              className="
  absolute inset-x-0 bottom-0
  bg-white/10
  backdrop-blur-xl backdrop-saturate-150
  border-t border-white/20
  py-3 px-6
  flex items-end justify-between
  rounded-bl-2xl
  rounded-br-2xl
"
            >
              <div>
                <p className="text-sm text-white/70">
                  Powered by Data. Driven by Performance.
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-md text-white font-bold font-heading italic">
                  - Vipprow
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white text-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
