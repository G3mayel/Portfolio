"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { TransitionLink } from "./TransitionLink";

export function ProjectsGrid({ activeFilter }: { activeFilter: string }) {
  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.category.includes(activeFilter),
  );

  return (
    <section className="w-full px-6 md:px-12 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {filteredProjects.map((project, index) => (
          <TransitionLink key={project.slug} href={`/works/${project.slug}`} className="block">
            <ProjectCard project={project} index={index % 2} />
          </TransitionLink>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="w-full py-20 text-center text-brand-text opacity-70 text-xl font-medium tracking-tight">
          No projects found for this category.
        </div>
      )}
    </section>
  );
}
