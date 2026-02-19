import { experienceData } from "@/dataAux/experienceData";
import ExperienceItem from "./components/ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4 max-w-7xl mx-auto ">
      <div className="absolute top-0 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <h2 className="text-3xl font-bold mb-16 text-center md:text-left">
        Trayectoria Profesional{" "}
        <span className="text-primary text-sm font-mono ml-2">/02</span>
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {experienceData.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};
export default Experience;
