import Reveal from "./Reveal";
import Badge from "./Badge";
import { cn } from "../../lib/cn";

/**
 * Vertical timeline / roadmap.
 * items: [{ id, index, kicker, title, body, badge, to }]
 */
export default function Timeline({ items = [], className }) {
  return (
    <ol className={cn("relative border-l border-line pl-8 sm:pl-10", className)}>
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.id ?? i}
          delay={i * 0.08}
          className="relative pb-10 last:pb-0"
        >
          <span className="absolute -left-[2.6rem] flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-white font-heading text-sm font-semibold text-primary sm:-left-[3.6rem]">
            {item.index ?? String(i + 1).padStart(2, "0")}
          </span>

          <div className="rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card">
            <div className="flex flex-wrap items-center gap-3">
              {item.kicker ? (
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                  {item.kicker}
                </span>
              ) : null}
              {item.badge ? <Badge tone="accent">{item.badge}</Badge> : null}
            </div>
            {item.title ? (
              <h3 className="mt-2 text-lg text-primary">{item.title}</h3>
            ) : null}
            {item.body ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            ) : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
