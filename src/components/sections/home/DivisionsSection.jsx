import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { site } from "../../../data/site";
import { homeImages } from "../../../data/home";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import ImageWithFallback from "../../ui/ImageWithFallback";
import Reveal from "../../ui/Reveal";

export default function DivisionsSection() {
  return (
    <section className="bg-white py-section">
      <Container>
        <SectionHeading
          eyebrow="One brand · Three divisions"
          title="A connected ecosystem for education, care and future solutions."
          subtitle={site.divisionsIntro}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {site.divisions.map((division, i) => {
            const image = homeImages.divisions[division.id];
            return (
              <Reveal key={division.id} delay={i * 0.12}>
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-card">
                  <div className="relative h-52 overflow-hidden">
                    <ImageWithFallback
                      src={image?.src}
                      alt={image?.alt ?? division.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                    <span className="absolute left-6 top-6 font-heading text-3xl text-white/85">
                      {division.index}
                    </span>
                    {division.badge ? (
                      <span className="absolute right-6 top-6 rounded-pill bg-accent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {division.badge}
                      </span>
                    ) : null}
                    <h3 className="absolute bottom-5 left-6 right-6 text-xl text-white">
                      {division.name}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                      {division.kicker}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {division.description}
                    </p>

                    {division.items.length > 0 ? (
                      <ul className="mt-6 space-y-3">
                        {division.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-ink"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex-1" />
                    )}

                    <Link
                      to={division.cta.to}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent-600"
                    >
                      {division.cta.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
