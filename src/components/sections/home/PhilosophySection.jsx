import { AlertTriangle, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "../../../data/site";
import { homeImages } from "../../../data/home";
import Container from "../../ui/Container";
import ImageWithFallback from "../../ui/ImageWithFallback";
import Reveal from "../../ui/Reveal";

export default function PhilosophySection() {
  const { philosophy, disclaimer } = site;

  const points = [
    { icon: Sparkles, text: philosophy.note },
    { icon: ShieldCheck, text: disclaimer.approval },
    { icon: AlertTriangle, text: disclaimer.training },
  ];

  return (
    <section className="bg-surface-alt py-section">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-accent/30" />
              <ImageWithFallback
                src={homeImages.philosophy.src}
                alt={homeImages.philosophy.alt}
                className="h-[24rem] w-full rounded-[1.75rem] object-cover shadow-card sm:h-[28rem]"
              />
              <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-line bg-white/90 p-4 shadow-card backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-primary">
                  <Leaf className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="font-heading text-base text-primary">
                    Science. Education.
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">
                    Responsible care.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="eyebrow">{philosophy.eyebrow}</span>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">
              {philosophy.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {philosophy.body}
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div
                  key={point.text}
                  className="flex items-start gap-3 rounded-card border border-line bg-white p-5 shadow-soft"
                >
                  <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <p className="text-sm leading-relaxed text-muted">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
