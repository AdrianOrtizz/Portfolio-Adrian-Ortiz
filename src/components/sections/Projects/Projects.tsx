"use client";

import ProjectCard from "./components/ProjectCard";
import { useLanguage } from "@/hooks/useLanguage";

const Projects = () => {
  const { t, projects } = useLanguage();
  return (
    <section
      id="projects"
      className="py-24 px-4 max-w-7xl mx-auto overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
        {t.sections.projectsTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[400px]">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            youTube={project.youTube}
            gitHub={project.gitHub}
            tags={project.tags}
            className={project.className}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
