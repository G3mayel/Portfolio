import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { FadeUp } from "@/components/FadeUp";
import { TransitionLink } from "@/components/TransitionLink";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function KaskuyPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text overflow-x-hidden flex flex-col pt-1 sm:pt-2">
      <CustomCursor />
      <Navbar />

      <section className="w-full px-6 md:px-12 pt-4 md:pt-8 pb-12 flex flex-col items-start">
        <FadeUp>
          <div className="inline-block bg-brand-orange/20 text-brand-orange px-2 py-0.5 text-lg md:text-xl font-light mb-4">
            Project #5
          </div>
          <h1 className="text-[12.5vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] font-medium uppercase leading-[0.85] text-brand-orange text-left tracking-[-0.04em] break-words mb-16 md:mb-24">
            KASKUY
          </h1>
        </FadeUp>

        <div className="w-full">
          <FadeUp delay={0.2}>
            <hr className="border-brand-orange/35 mb-8 md:mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  Role
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  UI/UX & Front-End Developer
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  Task
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  Interface Architecture & Implementation
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  For
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  PT Cnplus Computer Center
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  Completed in
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  2025
                </span>
              </div>
            </div>
            <hr className="border-brand-orange/35 mt-8 md:mt-12" />
          </FadeUp>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 mb-20 md:mb-32">
        <FadeUp delay={0.3}>
          <div className="w-full relative bg-gray-200">
            <Image draggable={false}
              src="/images/kaskuy.png"
              alt="KasKuy Hero Interface"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeUp>
      </section>

      <section className="w-full px-6 md:px-12 mb-20 md:mb-32 flex justify-center">
        <div className="w-full max-w-[800px] flex flex-col gap-12 md:gap-16">
          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Overview
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                KasKuy is a comprehensive personal finance application designed to simplify daily money management. The platform equips users with intuitive tools for logging income and expenses, categorizing transactions, and analyzing financial behaviors through an interactive statistical dashboard.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Problems
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                Managing personal finances often involves tedious manual data entry, leading to poor user retention. Additionally, tracking shared expenses among peers is traditionally a fragmented process, making it difficult to calculate exact splits from complex shopping receipts.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Goal
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                To engineer a modern, highly engaging mobile-first web application that completely removes the friction of financial tracking. A core objective was to introduce advanced smart features, such as automated receipt scanning, to facilitate effortless bill-splitting.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Solution
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                A custom, fluid interface was constructed using Laravel, React.js and Tailwind CSS, enhanced with Framer Motion for app-like transitions. The platform successfully integrates rich transaction histories, visual data analytics, and an innovative OCR-driven split-bill feature that extracts data directly from physical receipts.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="w-full bg-brand-orange text-brand-cream px-6 md:px-12 py-20 md:py-32">
        <FadeUp>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-medium uppercase tracking-[-0.04em] leading-[0.85] mb-16 md:mb-24 italic origin-left">
            MY APPROACH
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 w-full">
          {[
            {
              num: "01",
              title: "Discover",
              desc: "Analyzing daily financial habits to identify primary user pain points, prioritizing rapid transaction logging and the mathematical friction of shared expenses.",
            },
            {
              num: "02",
              title: "Wireframe",
              desc: "Designing a mobile-first architecture that emphasizes quick-action buttons for inputs, alongside clear, highly digestible statistical charts for financial overviews.",
            },
            {
              num: "03",
              title: "Design System",
              desc: "Establishing a clean, accessible visual language with tailored color codes for specific expense categories, ensuring users can process their financial data at a glance.",
            },
            {
              num: "04",
              title: "Development",
              desc: "Translating high-fidelity designs into a performant React.js application, integrating fluid animations to make financial tracking feel rewarding rather than tedious.",
            },
            {
              num: "05",
              title: "Integration",
              desc: "Implementing Optical Character Recognition (OCR) logic to accurately read uploaded receipts, automating itemized cost breakdowns for a frictionless peer-to-peer split-bill experience.",
            },
          ].map((step, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_3fr] lg:grid-cols-[1fr_2.5fr_4fr] gap-4 md:gap-8 items-start border-t border-brand-cream/35 pt-8 md:pt-12">
                <div className="text-2xl md:text-3xl font-light opacity-80">
                  {step.num}
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] pr-4">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90 leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="w-full border-t border-brand-orange/35 border-b py-16 md:py-24 flex items-center justify-between group cursor-pointer">
          <div className="flex flex-col gap-2 md:gap-4 max-w-[70vw] sm:max-w-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
            <span className="text-brand-orange text-sm md:text-base font-normal uppercase tracking-widest opacity-70">
              Next Project
            </span>
            <TransitionLink
              href="/works/eks-kuline"
              className="text-5xl md:text-7xl lg:text-[8rem] font-medium tracking-[-0.04em] text-brand-orange uppercase leading-none italic break-words"
            >
              EKS-KULINE
            </TransitionLink>
          </div>
          <TransitionLink
            href="/works/eks-kuline"
            className="text-brand-orange transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-4"
          >
            <ArrowRight className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 stroke-[1]" />
          </TransitionLink>
        </div>
      </section>

      <div className="mt-auto">
        <ContactSection />
      </div>
    </main>
  );
}