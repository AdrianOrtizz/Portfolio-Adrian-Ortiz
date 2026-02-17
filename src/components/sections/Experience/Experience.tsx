import { experienceData } from "@/dataAux/experienceData";
import ExperienceItem from "./components/ExperienceItem";

const Experience = () => {
  return (
    <section className="relative py-24 px-6 w-7xl mx-auto overflow-visible">
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <h2 className="text-3xl font-bold mb-16">
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
