import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";
import ImageWithFallback from "./ImageWithFallback";
import { cn } from "../../lib/cn";

/**
 * Page hero used at the top of every inner page.
 * breadcrumb + eyebrow + title + subtitle, with an optional image panel.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  lede,
  breadcrumb,
  image,
  imageAlt = "",
  className,
}) {
  const copy = subtitle ?? lede;

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-surface-alt",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-tint blur-3xl opacity-70"
        aria-hidden="true"
      />

      <Container
        className={cn(
          "relative py-14 sm:py-20",
          image && "grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        )}
      >
        <Reveal>
          <nav className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-accent-600">{breadcrumb ?? title}</span>
          </nav>

          {eyebrow ? <span className="eyebrow mt-6 block">{eyebrow}</span> : null}

          <h1 className="mt-3 max-w-3xl text-4xl text-primary sm:text-5xl">
            {title}
          </h1>

          {copy ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {copy}
            </p>
          ) : null}
        </Reveal>

        {image ? (
          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[1.75rem] border border-accent/30" />
              <ImageWithFallback
                src={image}
                alt={imageAlt}
                className="h-64 w-full rounded-[1.75rem] border border-line object-cover shadow-card sm:h-72"
              />
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
