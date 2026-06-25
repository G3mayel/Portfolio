"use client";

import { motion } from "motion/react";
import { FadeUp } from "./FadeUp";
import { projects } from "@/data/projects";

interface WorksHeroProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = ["All", "Design", "Development", "QA"];

export function WorksHero({ activeFilter, setActiveFilter }: WorksHeroProps) {
  return (
    <section className="w-full px-6 md:px-12 pt-4 md:pt-8 pb-12 flex flex-col items-start">
      <FadeUp>
        <h1 className="text-[12.5vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] font-medium italic leading-[0.85] text-brand-orange uppercase text-left tracking-[-0.04em] mb-8 md:mb-12 break-words">
          THINGS <span className="font-bold">I&apos;VE BUILT</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="max-w-[850px] lg:max-w-[900px]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] md:leading-[1.1] uppercase">
            SELECTED PROJECTS SHAPED BY{" "}
            <br className="hidden md:block" />
            <span className="text-brand-orange">
              REAL NEEDS, CLEAR THINKING, AND{" "}
              <br className="hidden md:block" />
              PURPOSEFUL EXECUTION.
            </span>
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2} className="mt-10 md:mt-16 w-full">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-xl font-medium tracking-tight uppercase">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors duration-300 border border-brand-orange px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 ${
                  isActive
                    ? "bg-brand-orange text-brand-cream"
                    : "bg-transparent text-brand-orange hover:bg-brand-orange hover:text-brand-cream"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
