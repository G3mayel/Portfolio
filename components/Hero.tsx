import Image from "next/image";
import { FadeUp } from "./FadeUp";

export function Hero() {
  return (
    <section className="w-full px-6 md:px-12 pt-4 md:pt-8 pb-6 md:pb-10 overflow-hidden">
      <FadeUp className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-2 md:gap-0 pb-4">
        <div className="self-start pl-0 md:pl-4">
          <div className="relative text-brand-orange text-[0.8rem] sm:text-[1.25rem] font-medium leading-[1.05] inline-flex items-center justify-center px-5 py-3 md:px-8 md:py-5 text-left transform -rotate-3">
            <Image
              src="/images/circle.svg"
              alt=""
              fill
              priority
              className="absolute inset-0 object-fill pointer-events-none"
            />
            <span className="relative z-10 tracking-tight">
              Based in
              <br />
              Tangerang, ID
            </span>
          </div>
        </div>

        <div className="relative w-full md:w-auto text-right text-brand-orange flex flex-col items-end mt-0 md:mt-0">
          <span
            className="text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] mr-2 md:mr-4 -mb-3 sm:-mb-6 md:-mb-8 lg:-mb-10 z-10"
            style={{ fontFamily: "'Homemade Apple', cursive" }}
          >
            Creative
          </span>
          <span
            className="uppercase text-[3.1rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] font-medium tracking-[-0.05em] leading-[0.85] md:leading-[0.9]"
            style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}
          >
            DEVELOPER
          </span>
        </div>
      </FadeUp>

      <FadeUp
        delay={0.2}
        className="relative mt-4 md:mt-8 group flex flex-col items-end"
      >
        <div className="w-full overflow-hidden flex justify-end">
          <picture className="w-full relative">
            <source
              media="(max-width: 1023px)"
              srcSet="/images/hero-profile2.png"
            />
            <img
              src="/images/hero-profile.png"
              alt="Gemayel Abdad Rakadiansyah"
              className="w-full h-auto lg:h-[180px] object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </picture>
        </div>
        <div className="w-full flex justify-end">
          <span className="bg-[#FFD6C2] text-brand-orange text-lg md:text-2xl font-light px-2 py-0.5">
            2026 Portofolio
          </span>
        </div>
      </FadeUp>
    </section>
  );
}
