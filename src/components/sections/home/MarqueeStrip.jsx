import { site } from "../../../data/site";

export default function MarqueeStrip() {
  const items = site.marquee;

  return (
    <div
      className="overflow-hidden border-y border-line bg-primary py-6"
      aria-label="DERMOLYXA focus areas"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center gap-8 px-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/80"
              >
                <span className="transition-colors hover:text-accent">
                  {item}
                </span>
                <span className="text-accent">◆</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
