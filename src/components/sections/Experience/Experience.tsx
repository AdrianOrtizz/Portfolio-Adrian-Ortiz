import { experienceData } from "@/dataAux/experienceData";
import ExperienceItem from "./components/ExperienceItem";

const Experience = () => {
  return (
    <section className="py-24 px-6 w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-16">
        Trayectoria Profesional{" "}
        <span className="text-primary text-sm font-mono ml-2">/02</span>
      </h2>

      <div className="ml-4">
        {experienceData.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};
export default Experience;
