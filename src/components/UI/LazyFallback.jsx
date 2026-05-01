import { memo } from "react";
import { motion } from "framer-motion";

const LazyFallback = memo(({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-950">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-12 h-12 border-2 border-neutral-700/50 border-t-amber-400 rounded-full animate-spin mx-auto mb-4"></div>

        <motion.p
          className="text-neutral-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  );
});

LazyFallback.displayName = "LazyFallback";

export default LazyFallback;
