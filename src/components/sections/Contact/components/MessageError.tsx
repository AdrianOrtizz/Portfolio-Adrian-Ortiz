import { AnimatePresence, motion } from "framer-motion";

const ErrorMessage = ({ message }: { message?: string }) => (
  <div className="h-4">
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="text-red-500 text-[11px] ml-1 mt-1 tracking-wider font-semibold"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

export default ErrorMessage;
