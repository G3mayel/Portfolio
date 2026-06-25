"use client";

import { useState } from "react";
import { WorksHero } from "./WorksHero";
import { ProjectsGrid } from "./ProjectsGrid";

export function WorksSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      <WorksHero
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ProjectsGrid activeFilter={activeFilter} />
    </>
  );
}
