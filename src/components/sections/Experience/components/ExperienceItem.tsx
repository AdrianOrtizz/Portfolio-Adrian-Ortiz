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
  <div className="group relative pl-6 md:pl-8 pb-12 border-l border-zinc-800 last:pb-0 transition-colors duration-500 hover:border-primary/50">
    <div className="absolute left-[-5.5px] top-0 h-[11px] w-[11px] rounded-full bg-zinc-900 border border-zinc-700 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transition-all duration-500 z-10" />

    <motion.div
      whileHover={{
        x: typeof window !== "undefined" && window.innerWidth > 768 ? 10 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
        <div className="max-w-full">
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
            {role}
          </h3>
          <p className="text-zinc-300 font-semibold">{company}</p>
        </div>
        <span className="inline-block w-fit text-[10px] md:text-xs text-zinc-500 font-mono bg-zinc-900/80 border border-zinc-800 px-3 py-1 rounded-full">
          {period}
        </span>
      </div>

      <p className="text-zinc-400 mb-6 leading-relaxed max-w-3xl text-[15px]">
        {description}
      </p>

      <ul className="grid grid-cols-1 gap-2 md:gap-3">
        {achievements.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-[13px] md:text-sm text-zinc-500 flex items-start gap-3 group/item"
          >
            <span className="text-primary/60 mt-1 shrink-0">▹</span>
            <span className="group-hover/item:text-zinc-300 transition-colors">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export default ExperienceItem;
