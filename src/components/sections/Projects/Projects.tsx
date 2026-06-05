"use client";

import { useState } from "react";
import ProjectCarousel from "./components/ProjectCarousel";
import VideoModal from "./components/VideoModal";
import { useLanguage } from "@/hooks/useLanguage";

const Projects = () => {
  const { t, projects } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 max-w-7xl mx-auto overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
        {t.sections.projectsTitle}
      </h2>

      <div className="w-full">
        <ProjectCarousel
          projects={projects}
          onPlayVideo={(url, title) => setActiveVideo({ url, title })}
        />
      </div>

      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        videoUrl={activeVideo?.url || ""}
        projectTitle={activeVideo?.title || ""}
      />
    </section>
  );
};

export default Projects;
