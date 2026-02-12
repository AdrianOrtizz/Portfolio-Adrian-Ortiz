"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/dataAux/skillsData";

const Skills = () => {
  return (
    <section className="py-24 px-6 w-7xl mx-auto">
      <div className=" justify-start mb-16">
        <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
        <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-mono">
          Herramientas y Tecnologías /03
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 },
            }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl"
              style={{ backgroundColor: skill.color }}
            />

            <div className="relative z-10 mb-4 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>

            <span className="relative z-10 text-sm text-center font-medium text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
