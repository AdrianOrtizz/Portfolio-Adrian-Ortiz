"use client";
import { Check, Copy } from "lucide-react";
import { useContact } from "@/hooks/useContact";
import { AnimatePresence, motion } from "framer-motion";

const CopyButton = () => {
  const { copied, handleCopy } = useContact();
  return (
    <button
      onClick={handleCopy}
      className="p-2 text-zinc-500 hover:text-white transition-colors relative h-10 w-10 flex items-center justify-center"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <Check size={18} className="text-green-500" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Copy size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default CopyButton;
