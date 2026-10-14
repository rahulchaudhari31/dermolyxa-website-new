import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gold scroll-progress bar pinned to the very top of the viewport.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-accent-soft via-accent to-accent-600"
      aria-hidden="true"
    />
  );
}
