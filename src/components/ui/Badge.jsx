import { cn } from "../../lib/cn";

const tones = {
  tint: "bg-tint text-primary-700 border-tint-200",
  accent: "bg-accent/15 text-accent-600 border-accent/30",
  outline: "bg-transparent text-muted border-line",
  gold: "bg-accent text-white border-transparent",
};

export default function Badge({ children, tone = "tint", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tones[tone] ?? tones.tint,
        className
      )}
    >
      {children}
    </span>
  );
}
