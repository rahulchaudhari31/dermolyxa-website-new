import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, PackageCheck } from "lucide-react";
import { cn } from "../../lib/cn";
import { productRoadmap } from "../../data/products";

const stageIcons = {
  development: FlaskConical,
  finalisation: ShieldCheck,
  publication: PackageCheck,
};

/**
 * Development roadmap / progress visual.
 * Uses an indeterminate progress bar — no fixed percentage or date is claimed.
 */
export default function DevelopmentRoadmap() {
  const {
    stages,
    inProgressLabel,
    pendingLabel,
    placeholder,
  } = productRoadmap;

  return (
    <div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-line">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-accent to-accent-600"
          animate={{ x: ["-110%", "310%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
        {inProgressLabel}
      </p>

      <ol className="mt-8 grid gap-6 sm:grid-cols-3">
        {stages.map((stage, i) => {
          const Icon = stageIcons[stage.id] ?? FlaskConical;
          const isActive = stage.status === "active";
          return (
            <motion.li
              key={stage.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border-2",
                    isActive
                      ? "border-accent bg-accent/15 text-accent-600"
                      : "border-line bg-surface-alt text-muted"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={cn(
                    "rounded-pill px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
                    isActive
                      ? "bg-accent/15 text-accent-600"
                      : "bg-surface-alt text-muted"
                  )}
                >
                  {isActive ? inProgressLabel : pendingLabel}
                </span>
              </div>

              <h3 className="mt-4 text-lg text-primary">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {stage.body}
              </p>
            </motion.li>
          );
        })}
      </ol>

      <p className="mt-8 inline-flex rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-600">
        {placeholder}
      </p>
    </div>
  );
}
