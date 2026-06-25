"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { FadeUp } from "./FadeUp";
import { motion } from "motion/react";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <FadeUp
      delay={0.1 * index}
      className="w-full flex flex-col group cursor-pointer"
    >
      <div className="w-full relative aspect-[16/10] overflow-hidden mb-6 bg-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-brand-orange uppercase tracking-tight leading-none mb-3">
          {project.title}
        </h3>

        <hr className="border-brand-orange/35 my-3" />

        <div className="flex justify-between items-center text-brand-orange text-base md:text-lg font-medium gap-4">
          <span className="truncate">{project.role}</span>
          <span className="shrink-0">{project.year}</span>
        </div>
      </div>
    </FadeUp>
  );
}
