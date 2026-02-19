"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { YouTube, GitHub } from "../../../UI/Icons";

import { Project } from "@/dataAux/projectsData";

const ProjectCard = ({
  title,
  description,
  tags,
  youTube,
  gitHub,
  className,
}: Project) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 overflow-hidden transition-colors hover:border-primary/20 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed  md:line-clamp-none">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-4">
            <a href={youTube} target="_blank" rel="noopener noreferrer">
              <YouTube className="w-6 h-6 md:w-7 md:h-7" />
            </a>

            <a href={gitHub} target="_blank" rel="noopener noreferrer">
              <GitHub className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
