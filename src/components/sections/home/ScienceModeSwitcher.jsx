import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Droplets, FlaskConical, Info, Sparkles, Wind } from "lucide-react";
import { scienceModes, scienceNote } from "../../../data/home";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import ImageWithFallback from "../../ui/ImageWithFallback";
import Reveal from "../../ui/Reveal";
import { cn } from "../../../lib/cn";

const iconMap = {
  skin: Droplets,
  hair: Wind,
  science: FlaskConical,
};

const ease = [0.22, 1, 0.36, 1];

export default function ScienceModeSwitcher() {
  const [activeId, setActiveId] = useState(scienceModes[0].id);
  const active = scienceModes.find((mode) => mode.id === activeId);

  return (
    <section className="relative overflow-hidden bg-surface-alt py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Interactive Science"
          title="Touch the core to activate"
          subtitle="Explore skin, hair & aesthetic science through three focused modes."
        />

        <Reveal className="mt-12" delay={0.1}>
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
            {scienceModes.map((mode) => {
              const Icon = iconMap[mode.icon] ?? Sparkles;
              const isActive = mode.id === activeId;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveId(mode.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "group inline-flex items-center gap-2.5 rounded-pill border px-5 py-3 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary text-white shadow-soft"
                      : "border-line bg-white text-muted hover:border-accent/40 hover:text-primary"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive ? "text-accent" : "text-primary/60"
                    )}
                  />
                  {mode.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-12" delay={0.15}>
          <div className="overflow-hidden rounded-card border border-line bg-white shadow-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease }}
                className="grid gap-0 lg:grid-cols-2"
              >
                <div className="relative order-2 min-h-[18rem] lg:order-1">
                  <ImageWithFallback
                    src={active.image.src}
                    alt={active.image.alt}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-pill bg-white/85 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    {active.label}
                  </span>
                </div>

                <div className="order-1 flex flex-col justify-center p-8 sm:p-10 lg:order-2">
                  <h3 className="text-2xl text-primary sm:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {active.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {active.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tint text-primary">
                          <Sparkles className="h-3.5 w-3.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal className="mt-6" delay={0.2}>
          <p className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-muted/80">
            <Info className="h-3.5 w-3.5 text-accent-600" />
            {scienceNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
