import { FadeUp } from "./FadeUp";
import { TransitionLink } from "./TransitionLink";

export function IntroSection() {
  return (
    <section id="about" className="w-full px-6 md:px-12 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
        <FadeUp>
          <h2 className="text-[2.2rem] sm:text-4xl md:text-[2.8rem] lg:text-[3.5rem] font-normal uppercase tracking-[-0.03em] leading-[1.05] md:leading-[1] text-balance">
            <span className="text-brand-text">I TURN</span>{" "}
            <span className="text-brand-orange font-medium">
              REAL PROBLEMS INTO SIMPLE
            </span>{" "}
            <span className="text-brand-text">DIGITAL SOLUTIONS.</span>
          </h2>
        </FadeUp>

        <FadeUp
          delay={0.2}
          className="flex flex-col items-end text-right md:text-right"
        >
          <p className="max-w-[420px] text-[1.15rem] md:text-[1.25rem] leading-[1.5] font-normal text-brand-text text-right">
            Blending{" "}
            <span className="text-brand-orange font-medium">
              design, code, and problem-solving,
            </span>{" "}
            I create purposeful digital experiences that make everyday tasks
            easier.
          </p>
          <div className="mt-8">
            <TransitionLink 
              href="/about"
              className="px-6 py-3 border border-brand-orange text-brand-orange text-sm font-light hover:bg-brand-orange hover:text-brand-cream transition-colors duration-300 inline-block"
            >
              More about me
            </TransitionLink>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
