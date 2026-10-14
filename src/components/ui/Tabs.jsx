import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/cn";

/**
 * Accessible tabs with an animated gold indicator.
 * tabs: [{ id, label, content }]
 */
export default function Tabs({ tabs = [], defaultTab, className }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  if (!tabs.length) return null;

  return (
    <div className={cn(className)}>
      <div
        role="tablist"
        aria-label="Tabs"
        className="flex flex-wrap gap-1 border-b border-line"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === current?.id;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={cn(
                "relative px-5 py-3 text-sm font-medium transition-colors",
                isActive ? "text-primary" : "text-muted hover:text-primary"
              )}
            >
              {tab.label}
              {isActive ? (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current?.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {current?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
