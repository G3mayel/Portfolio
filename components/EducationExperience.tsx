"use client";

import { FadeUp } from "./FadeUp";
import { ArrowUpRight, GraduationCap, Briefcase, Award } from "lucide-react";

export function EducationExperience() {
  return (
    <section className="w-full px-6 md:px-12 py-20 md:py-32 bg-brand-orange text-brand-cream overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-24 lg:gap-32">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-28">
            <FadeUp>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium italic uppercase tracking-tight flex items-center gap-3 sm:gap-4">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0" />
                Education
              </h2>
            </FadeUp>
          </div>
          <div className="lg:w-2/3 flex flex-col w-full">
            <FadeUp delay={0.1}>
              <div className="group flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-brand-cream/30 hover:border-brand-cream transition-colors duration-300">
                <div className="flex flex-col">
                  <span className="text-brand-cream/70 text-sm md:text-base font-medium tracking-widest uppercase mb-2">
                    2023 — 2026
                  </span>
                  <h3 className="text-2xl md:text-4xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                    SMKN 4 Tangerang
                  </h3>
                </div>
                <span className="text-lg md:text-xl font-medium text-brand-cream/80 mt-4 sm:mt-0 text-left sm:text-right">
                  Vocational Highschool
                </span>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-28">
            <FadeUp>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium italic uppercase tracking-tight flex items-center gap-3 sm:gap-4">
                <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0" />
                Experience
              </h2>
            </FadeUp>
          </div>
          <div className="lg:w-2/3 flex flex-col w-full">
            <FadeUp delay={0.1}>
              <div className="group flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-brand-cream/30 hover:border-brand-cream transition-colors duration-300 mb-8 sm:mb-0 sm:pb-8">
                <div className="flex flex-col">
                  <span className="text-brand-cream/70 text-sm md:text-base font-medium tracking-widest uppercase mb-2">
                    2025
                  </span>
                  <h3 className="text-2xl md:text-4xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                    PT. Cnplus Computer Center
                  </h3>
                </div>
                <span className="text-lg md:text-xl font-medium text-brand-cream/80 mt-4 sm:mt-0 text-left sm:text-right">
                  Intern Web Developer<br />
                  <span className="text-sm font-regular opacity-70">School Internship</span>
                </span>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-0 sm:py-8 border-b border-brand-cream/30 hover:border-brand-cream transition-colors duration-300 pb-8 sm:pb-8">
                <div className="flex flex-col">
                  <span className="text-brand-cream/70 text-sm md:text-base font-medium tracking-widest uppercase mb-2">
                    2025
                  </span>
                  <h3 className="text-2xl md:text-4xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                    School Industry Class
                  </h3>
                </div>
                <span className="text-lg md:text-xl font-medium text-brand-cream/80 mt-4 sm:mt-0 text-left sm:text-right">
                  Upskill Class<br />
                  <span className="text-sm font-regular opacity-70">School Program</span>
                </span>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-28">
            <FadeUp>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium italic uppercase tracking-tight flex items-center gap-3 sm:gap-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0" />
                Certificate
              </h2>
            </FadeUp>
          </div>
          <div className="lg:w-2/3 flex flex-col w-full">
            <FadeUp delay={0.1}>
              <a
                href="https://drive.google.com/file/d/1oUrsNcm-C77PBw4eq5bTU0ZS1kG9vEHp/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-brand-cream/30 hover:border-brand-cream transition-colors duration-300 mb-8 sm:mb-0 sm:pb-8"
              >
                <div className="flex flex-col">
                  <span className="text-brand-cream/70 text-sm md:text-base font-medium tracking-widest uppercase mb-2">
                    2026
                  </span>
                  <h3 className="text-2xl md:text-4xl font-medium group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                    Certificate of Competency
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 opacity-0 group-hover:opacity-100 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                </div>
                <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
                <span className="text-lg md:text-xl font-medium text-brand-cream/80 mt-4 sm:mt-0 text-left sm:text-right">
                  Wellmagic Media Digital
                </span>
                <span className="text-sm font-regular opacity-70">
                    Level: Competent
                  </span>
                  </div>
              </a>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <a
                href="https://drive.google.com/file/d/1jvs0rsUWAcJVyhY5NutFs9-EUZg8MSsQ/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-0 sm:py-8 border-b border-brand-cream/30 hover:border-brand-cream transition-colors duration-300 pb-8 sm:pb-8"
              >
                <div className="flex flex-col">
                  <span className="text-brand-cream/70 text-sm md:text-base font-medium tracking-widest uppercase mb-2">
                    2025
                  </span>
                  <h3 className="text-2xl md:text-4xl font-medium group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                    Test of English for International Communication (TOEIC)
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 opacity-0 group-hover:opacity-100 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                </div>
                <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
                  <span className="text-lg md:text-xl font-medium text-brand-cream/80 text-left sm:text-right">
                    International Test Center
                  </span>
                  <span className="text-sm font-regular opacity-70">
                    Score: 755
                  </span>
                </div>
              </a>
            </FadeUp>
          </div>
        </div>

      </div>
    </section>
  );
}
