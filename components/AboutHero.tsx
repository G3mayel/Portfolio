"use client";

import { FadeUp } from "./FadeUp";

export function AboutHero() {
  return (
    <section className="w-full px-6 md:px-12 pt-4 md:pt-8 pb-12 md:pb-16 flex flex-col items-start">
      <FadeUp>
        <h1 className="text-[12.5vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] font-normal leading-[0.85] text-brand-orange uppercase text-left tracking-[-0.04em] break-words">
          <span className="italic transform -skew-x-[4deg] inline-block font-medium pr-1">
            GEMAYEL
          </span>{" "}
          <span className="font-bold">ABDAD</span>
          <br />
          <span className="inline-block font-medium mt-1 md:mt-3">
            <b>RAKA</b><span className="italic">DIANSYAH</span>
          </span>
        </h1>
      </FadeUp>
    </section>
  );
}
