"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-3xl leading-normal lg:leading-snug text-center mx-auto font-heading"
      >
        Everything is far away. Everything
        is a<br/>
        <Highlight className="text-black dark:text-white font-heading">
          Vipprow.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
