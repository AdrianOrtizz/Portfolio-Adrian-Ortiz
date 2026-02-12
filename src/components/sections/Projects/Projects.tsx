import ProjectCard from "./components/ProjectCard";
import { projectsData } from "@/dataAux/projectsData";

const Projects = () => {
  return (
    <section className="py-24 px-6 w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
        Proyectos{" "}
        <span className="text-primary text-sm font-mono ml-2">/01</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            youTube={project.youTube}
            gitHub={project.gitHub}
            tags={project.tags}
            className={project.className}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
