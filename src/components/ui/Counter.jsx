import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "../../lib/cn";

/**
 * Counts up to `value` when the element scrolls into view.
 * Supports a non-numeric prefix/suffix (e.g. "12", "₹9,999").
 */
export default function Counter({
  value,
  duration = 1.6,
  className,
  prefix = "",
  suffix = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  const target = Number(String(value).replace(/[^0-9.]/g, "")) || 0;

  useEffect(() => {
    if (!inView) return undefined;

    let frame;
    const start = performance.now();
    const total = duration * 1000;

    const tick = (now) => {
      const progress = Math.min((now - start) / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
