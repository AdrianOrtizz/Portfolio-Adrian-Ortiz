"use client";

import { IExperience } from "@/dataAux/experienceData";

import { motion } from "framer-motion";

const ExperienceItem = ({
  company,
  role,
  period,
  description,
  achievements,
}: IExperience) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <p className="text-primary font-medium">{company}</p>
      </div>
      <span className="text-sm text-gray-500 font-mono mt-1 md:mt-0">
        {period}
      </span>
    </div>

    <p className="text-gray-400 mb-4 leading-relaxed max-w-3xl">
      {description}
    </p>

    <ul className="space-y-2">
      {achievements.map((item: string, i: number) => (
        <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
          <span className="text-primary mt-1">▹</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ExperienceItem;
