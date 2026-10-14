import { motion } from "framer-motion";

/**
 * Fade / slide wrapper for page content.
 * Keyed by route (pathname) so each navigation plays the entrance fade.
 */
export default function PageTransition({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
