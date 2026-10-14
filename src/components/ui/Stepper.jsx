import Reveal from "./Reveal";
import { cn } from "../../lib/cn";

/**
 * Numbered stepper for process / journey flows.
 * steps: [{ step, title, body }]
 * The connector line shows between steps on large screens.
 */
export default function Stepper({ steps = [], className }) {
  return (
    <ol className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {steps.map((step, i) => (
        <Reveal as="li" key={step.step ?? i} delay={i * 0.08}>
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white font-heading text-lg font-semibold text-primary">
                {step.step ?? String(i + 1).padStart(2, "0")}
              </span>
              {i < steps.length - 1 ? (
                <span
                  className="hidden h-px flex-1 bg-line lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
            <h3 className="mt-5 text-lg text-primary">{step.title}</h3>
            {step.body ? (
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            ) : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
