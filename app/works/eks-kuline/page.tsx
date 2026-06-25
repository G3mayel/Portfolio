import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { FadeUp } from "@/components/FadeUp";
import { TransitionLink } from "@/components/TransitionLink";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function EksKulinePage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text overflow-x-hidden flex flex-col pt-1 sm:pt-2">
      <CustomCursor />
      <Navbar />

      <section className="w-full px-6 md:px-12 pt-4 md:pt-8 pb-12 flex flex-col items-start">
        <FadeUp>
          <div className="inline-block bg-brand-orange/20 text-brand-orange px-2 py-0.5 text-lg md:text-xl font-light mb-4">
            Project #1
          </div>
          <h1 className="text-[12.5vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] font-medium uppercase leading-[0.85] text-brand-orange text-left tracking-[-0.04em] break-words mb-16 md:mb-24">
            EKS-KULINE
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
                  Front-End Developer
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  Task
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  UI Architecture & Implementation
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  For
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  Official Acceleration Program
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  Completed in
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  2024
                </span>
              </div>
            </div>
            <hr className="border-brand-orange/35 mt-8 md:mt-12" />
          </FadeUp>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 mb-20 md:mb-32">
        <FadeUp delay={0.3}>
          <div className="w-full relative aspect-[16/9] md:aspect-[21/9] bg-gray-200">
            <Image
              src="/images/ekskuline.png"
              alt="Eks-Kuline Hero Interface"
              fill
              className="object-cover"
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
                EKS-KULINE is a centralized extracurricular tracking platform developed during an exclusive academic acceleration program. Built through intensive daily coding sprints, the application serves as a comprehensive portal for students to register for activities, track attendance, monitor schedules, and view grading results.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Problems
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                Extracurricular administration traditionally relied on fragmented, manual processes. Students faced friction when trying to coordinate schedules or register for clubs, while administrators struggled with tracking attendance and distributing grades across unorganized legacy systems.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Goal
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                To engineer a unified, user-friendly digital ecosystem that streamlines student activities. The objective was to design a highly accessible interface capable of consolidating registrations, live attendance tracking, dynamic schedules, and grade visualization into one seamless web application.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Solution
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                A structured, multi-role frontend architecture was constructed
                using React.js and Tailwind CSS to handle diverse academic data.
                The platform utilizes clean visual hierarchies and responsive
                components to ensure complex scheduling and grading information
                remains highly digestible, resulting in a frictionless
                administrative experience.
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
              desc: "Analyzing administrative bottlenecks to define core requirements for a unified portal that connects student registrations, schedules, attendance, and grading.",
            },
            {
              num: "02",
              title: "Wireframe",
              desc: "Drafting a structured layout optimized for clarity, ensuring that intricate academic schedules and grade statistics are visually prioritized and easy to navigate.",
            },
            {
              num: "03",
              title: "Design System",
              desc: "Establishing a modern, accessible visual identity suitable for educational institutions, prioritizing highly legible typography and responsive mobile layouts.",
            },
            {
              num: "04",
              title: "Intensive Development",
              desc: "Executing rigorous daily coding sprints within the acceleration program to rapidly construct a performant, modular Front-End architecture.",
            },
            {
              num: "05",
              title: "Launch",
              desc: "Deploying the centralized tracker, gathering immediate feedback from students and staff, and refining the registration workflows based on real-world usage.",
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
              href="/works/sarprasku"
              className="text-5xl md:text-7xl lg:text-[8rem] font-medium tracking-[-0.04em] text-brand-orange uppercase leading-none italic break-words"
            >
              SARPRASKU
            </TransitionLink>
          </div>
          <TransitionLink
            href="/works/sarprasku"
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