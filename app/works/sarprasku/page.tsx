import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { FadeUp } from "@/components/FadeUp";
import { TransitionLink } from "@/components/TransitionLink";
import { ProjectGallery } from "@/components/ProjectGallery";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SarpraskuPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text overflow-x-hidden flex flex-col pt-1 sm:pt-2">
      <CustomCursor />
      <Navbar />

      <section className="w-full px-6 md:px-12 pt-4 md:pt-8 pb-12 flex flex-col items-start">
        <FadeUp>
          <div className="inline-block bg-brand-orange/20 text-brand-orange px-2 py-0.5 text-lg md:text-xl font-light mb-4">
            Project #6
          </div>
          <h1 className="text-[12.5vw] sm:text-[14vw] md:text-[9vw] lg:text-[7vw] font-medium uppercase leading-[0.85] text-brand-orange text-left tracking-[-0.04em] break-words mb-16 md:mb-24">
            SarprasKu
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
                  Product Designer &<br />
                  Fullstack Developer
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  Task
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  Creating School Infrastructure Reporting Platform
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  For
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  SMK Negeri 4 Tangerang
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-orange text-sm md:text-base font-normal mb-2 opacity-70 uppercase tracking-widest">
                  Completed in
                </span>
                <span className="text-brand-orange text-xl md:text-2xl font-medium leading-tight">
                  2026
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
              src="/images/sarprasku.png"
              alt="SarprasKu Hero"
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
                SarprasKu is a school facility reporting system that helps
                students submit damaged facility reports and allows admins to
                manage them in one place. The project was created to make
                reporting faster, clearer, and easier to track.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Problems
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                Facility issues are often reported manually, forgotten, or
                difficult to track. Students do not have a clear reporting flow,
                and admins have no organized way to monitor report progress.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Goal
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                To create a simple digital system that helps students report
                damaged school facilities and allows admins to manage reports
                more efficiently.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium text-brand-orange uppercase tracking-tight">
                Solution
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-brand-text opacity-90">
                SarprasKu turns facility reporting into a clear digital flow.
                Constructed using Laravel, Inertia.js, and Tailwind CSS, the
                platform ensures rapid performance. Students can submit reports
                with photos and location details, while admins can review,
                manage, and update report status in one place.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="w-full bg-brand-orange text-brand-cream px-6 md:px-12 py-20 md:py-32">
        <FadeUp>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-medium uppercase tracking-[-0.04em] leading-[0.85] mb-16 md:mb-24 italic origin-left">
            HOW IT WORKS
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 w-full">
          {[
            {
              num: "01",
              title: "Spot the Damage",
              desc: "The student notices a damaged school facility, such as a broken chair, projector, desk, or other item that needs maintenance.",
            },
            {
              num: "02",
              title: "Take a Photo",
              desc: "The student takes a clear photo of the damaged facility to provide visual proof and help admins understand the issue faster.",
            },
            {
              num: "03",
              title: "Submit Report",
              desc: "The student fills in the report form with the problem description, location, and photo, then sends it through SarprasKu.",
            },
            {
              num: "04",
              title: "Track Progress",
              desc: "The student checks the report status to see whether the issue is still waiting, being reviewed, in progress, or resolved.",
            },
            {
              num: "05",
              title: "Fixed",
              desc: "The admin marks the report as completed after the facility has been repaired, replaced, or properly handled by the school.",
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

      <ProjectGallery 
        images={[
          "/images/sarprasku2.png",
          "/images/sarprasku3.png",
          "/images/sarprasku4.png",
          "/images/sarprasku5.png",
        ]} 
      />

      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="w-full border-t border-brand-orange/35 border-b py-16 md:py-24 flex items-center justify-between group cursor-pointer">
          <div className="flex flex-col gap-2 md:gap-4 max-w-[70vw] sm:max-w-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">
            <span className="text-brand-orange text-sm md:text-base font-normal uppercase tracking-widest opacity-70">
              Next Project
            </span>
            <TransitionLink
              href="/works/cnplus"
              className="text-5xl md:text-7xl lg:text-[8rem] font-medium tracking-[-0.04em] text-brand-orange uppercase leading-none italic break-words"
            >
              CNPLUS
            </TransitionLink>
          </div>
          <TransitionLink
            href="/works/cnplus"
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
