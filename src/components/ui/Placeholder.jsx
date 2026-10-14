import { AlertCircle } from "lucide-react";
import { cn } from "../../lib/cn";

/**
 * Visually marks content that is not yet provided by the source website.
 */
export default function Placeholder({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2 py-0.5 text-sm font-medium text-accent-600",
        className
      )}
    >
      <AlertCircle className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}
