"use client";

import Image from "next/image";
import PrimaryGlowButton from "../ui/buttons/primary-glow-button";
import SecondaryButton from "../ui/buttons/SecondaryButton";

export default function SaasHeroSection() {
  return (
    <>
      <section className="">
        <div className="relative py-20 bg-black sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
          <div className="absolute inset-0 hidden lg:block">
            <Image
              fill
              className="object-cover w-full h-full"
              src="https://res.cloudinary.com/dh87x8i37/image/upload/v1770031263/background_aqwgv5.png"
              alt="saas"
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-24 max-w-9xl pt-10 md:pt-32">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl xl:text-5xl xl:leading-tighter font-heading">
                Build SaaS Landing Page without Writing a Single Code
              </h1>
              <p className="mt-8 text-base font-normal leading-7 text-gray-100 lg:max-w-md xl:pr-0 lg:pr-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
                nisl eu consectetur. Mi massa elementum odio eu viverra amet.
              </p>

              <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                <div className="mt-10 flex flex-row gap-4">
                  <PrimaryGlowButton heading="Get Started Now" />
                  <SecondaryButton heading="Book a Demo" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
