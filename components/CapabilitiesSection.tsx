"use client";

import { FadeUp } from "./FadeUp";
import { capabilities } from "../data/capabilities";
import Image from "next/image";

export function CapabilitiesSection() {
  return (
    <section className="w-full px-6 md:px-12 py-14 md:py-24 bg-brand-bg text-brand-text overflow-hidden">
      <FadeUp>
        <h2 className="text-[12.5vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] font-medium uppercase tracking-[-0.04em] leading-[0.85] text-brand-orange mb-12 md:mb-20 break-words">
          CAPABILITIES
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[380px_1fr] gap-12 md:gap-20 lg:gap-32 items-start">
        <FadeUp delay={0.2} className="w-full">
          <div className="w-full relative h-[400px] sm:h-[500px] md:h-[480px]">
            <Image draggable={false}
              src="/images/profile.png"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
              priority
            />
          </div>
        </FadeUp>

        <div className="flex flex-col justify-start pt-2 md:pt-0">
          {capabilities.map((group, groupIdx) => (
            <div key={groupIdx} className="w-full">
              {groupIdx !== 0 && (
                <FadeUp delay={0.1}>
                  <div className="w-full h-px bg-brand-line my-10 md:my-14"></div>
                </FadeUp>
              )}

              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8 items-start">
                <FadeUp delay={0.2}>
                  <div className="text-xl sm:text-2xl md:text-3xl text-brand-orange font-medium tracking-tight">
                    {group.category}
                  </div>
                </FadeUp>

                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mt-2 md:mt-0">
                  {group.items.map((item, itemIdx) => (
                    <FadeUp key={itemIdx} delay={0.3 + itemIdx * 0.05}>
                      <div className="text-lg sm:text-xl md:text-[1.35rem] font-light text-brand-text leading-tight">
                        {item}
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
