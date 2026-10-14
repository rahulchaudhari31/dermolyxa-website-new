import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Circular back-to-top button. Appears after scrolling past `threshold`.
 * Sized to sit inside the FloatingActions stack.
 */
export default function BackToTop({ threshold = 600 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-primary shadow-soft transition-colors hover:bg-tint"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
            Back to top
          </span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
