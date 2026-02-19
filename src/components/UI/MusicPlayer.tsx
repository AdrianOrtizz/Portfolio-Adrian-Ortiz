"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music } from "lucide-react";

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvite, setShowInvite] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInvite(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start">
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          marginBottom: isOpen ? 16 : 0,
        }}
        className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl backdrop-blur-xl w-[300px]"
      >
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/playlist/3OLwvJy9YT5uOdbQAnpKyi?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </motion.div>

      <motion.button
        layout
        onClick={() => {
          setIsOpen(!isOpen);
          setShowInvite(false);
        }}
        className={`flex items-center p-3 rounded-full border transition-all duration-500 shadow-lg ${
          isOpen
            ? "bg-primary border-primary text-white"
            : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:border-primary/50"
        }`}
      >
        <div className="relative">
          <Music
            size={18}
            className={isOpen || showInvite ? "animate-spin-slow mr-3" : ""}
          />
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          )}
        </div>

        <AnimatePresence mode="wait">
          {showInvite && !isOpen ? (
            <motion.span
              key="invite"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-medium whitespace-nowrap"
            >
              ¿No querés escuchar un poco de música?
            </motion.span>
          ) : (
            <motion.span
              key="status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-tight"
            >
              {isOpen ? "Cerrar" : ""}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
