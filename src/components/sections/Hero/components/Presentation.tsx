"use client";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <div className="max-w-4xl px-2">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
          Adrian <span className="text-primary">Ortiz</span>
        </h1>
        <h2 className="mb-8 text-sm font-medium tracking-[0.15em] text-gray-400 uppercase sm:text-2xl sm:tracking-[0.2em]">
          Problem Solver <span className="mx-2 text-white/20">|</span> Full
          Stack Developer
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-10 text-base leading-relaxed text-gray-400 md:text-xl md:mb-12"
      >
        Más de 4 años optimizando procesos de{" "}
        <span className="text-white font-semibold">
          administración y logística
        </span>
        , ahora aplicados al desarrollo de software. Experto en transformar
        necesidades de negocio en
        <span className="text-white font-semibold">
          {" "}
          soluciones técnicas robustas
        </span>{" "}
        con un enfoque absoluto en la experiencia del cliente.
      </motion.p>
    </div>
  );
};

export default Presentation;
