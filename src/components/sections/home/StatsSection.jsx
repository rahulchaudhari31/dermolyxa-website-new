import { site } from "../../../data/site";
import Container from "../../ui/Container";
import Counter from "../../ui/Counter";
import Reveal from "../../ui/Reveal";

export default function StatsSection() {
  return (
    <section className="bg-white py-section">
      <Container>
        <div className="grid gap-y-10 rounded-card border border-line bg-surface-alt px-8 py-14 sm:grid-cols-3">
          {site.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.12}
              className="text-center sm:border-r sm:border-line sm:last:border-none"
            >
              <Counter
                value={stat.value}
                className="block font-heading text-5xl text-primary sm:text-6xl"
              />
              <span className="mx-auto mt-4 block h-1 w-10 rounded-full bg-accent" />
              <p className="mt-4 text-sm uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
