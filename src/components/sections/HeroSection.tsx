"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex mt-[-10vh] min-h-[90vh] flex-col items-center justify-center px-6 py-20 text-center h-screen w-screen">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            Adrian <span className="text-primary">Ortiz</span>
          </h1>
          <h2 className="mb-8 text-xl font-medium tracking-[0.2em] text-gray-400 uppercase sm:text-2xl">
            Problem Solver <span className="mx-2 text-white/20">|</span> Full
            Stack Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12 text-lg leading-relaxed text-gray-400 md:text-xl"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-all hover:pr-12 active:scale-95">
            <span className="relative z-10 font-bold">Ver Proyectos</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100">
              →
            </span>
          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95">
            Descargar CV
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
