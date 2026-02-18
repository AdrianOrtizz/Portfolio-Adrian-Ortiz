"use client";

import { Eye, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/hooks/useHeroButtons";

const HeroButtons = () => {
  const textVariants = {
    initial: { x: 0 },
    hover: { x: -12 },
  };

  const iconVariants = {
    initial: { x: 15, opacity: 0 },
    hover: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <motion.button
        initial="initial"
        whileHover="hover"
        onClick={() => scrollToSection("projects")}
        className="relative w-48 h-12 bg-white text-black font-bold rounded-full overflow-hidden transition-transform active:scale-95 flex items-center justify-center"
      >
        <motion.span
          variants={textVariants}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          Ver Proyectos
        </motion.span>

        <motion.span
          variants={iconVariants}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute right-6"
        >
          <Eye size={20} />
        </motion.span>
      </motion.button>

      <motion.button
        initial="initial"
        whileHover="hover"
        onClick={() => scrollToSection("contact")}
        className="relative w-48 h-12 border border-zinc-700 text-white font-bold rounded-full overflow-hidden transition-all active:scale-95 hover:bg-zinc-900 flex items-center justify-center"
      >
        <motion.span
          variants={textVariants}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          Hablemos
        </motion.span>

        <motion.span
          variants={iconVariants}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute right-8 text-primary"
        >
          <MessageSquare size={18} />
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default HeroButtons;
