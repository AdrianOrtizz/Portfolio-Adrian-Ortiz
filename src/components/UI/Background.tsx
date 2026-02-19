"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-10 bg-[#050505]">
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative h-full w-full"
      >
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[30%] h-[500px] w-[500px] rounded-full bg-violet-600 blur-[100px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-80 left-[50%] h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[100px]"
        />
      </motion.div>
    </div>
  );
};

export default Background;
