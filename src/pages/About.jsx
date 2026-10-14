import {
  BadgeCheck,
  Compass,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { aboutRoadmap, aboutStory, aboutValues } from "../data/about";
import { educationImages, educationNote } from "../data/images";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Badge from "../components/ui/Badge";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import Timeline from "../components/ui/Timeline";
import CTASection from "../components/sections/CTASection";

const valueIcons = {
  science: FlaskConical,
  education: GraduationCap,
  ethics: Scale,
  innovation: Lightbulb,
  professionalism: BadgeCheck,
  safety: ShieldCheck,
};

export default function About() {
  useDocumentTitle(`About | ${site.shortName}`);

  const { about, philosophy } = site;

  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        breadcrumb="About"
        title={about.title}
        lede={about.lede}
        image={educationImages.classroom.src}
        imageAlt={educationImages.classroom.alt}
      />

      {/* Brand story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">{aboutStory.eyebrow}</span>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">
              {aboutStory.title}
            </h2>
            <div className="mt-6 space-y-5">
              {aboutStory.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 font-heading text-xl text-accent-600">
              {aboutStory.highlight}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[1.75rem] border border-accent/30" />
              <ImageWithFallback
                src={educationImages.lab.src}
                alt={educationImages.lab.alt}
                className="h-72 w-full rounded-[1.75rem] border border-line object-cover shadow-card sm:h-80"
              />
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-8">
          <p className="text-xs text-muted">{educationNote}</p>
        </Reveal>
      </Section>

      {/* Vision, mission & philosophy */}
      <Section alt>
        <SectionHeading
          eyebrow={philosophy.eyebrow}
          title={philosophy.title}
          lede={philosophy.body}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-primary">
                  <Compass className="h-5 w-5" />
                </span>
                <h3 className="text-xl text-primary">{about.vision.title}</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {about.vision.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-primary">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="text-xl text-primary">{about.mission.title}</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {about.mission.body}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-6">
          <p className="rounded-card border border-accent/30 bg-accent/10 px-6 py-5 text-sm leading-relaxed text-accent-600">
            {philosophy.note}
          </p>
        </Reveal>
      </Section>

      {/* Three divisions overview */}
      <Section>
        <SectionHeading
          eyebrow="One brand · Three divisions"
          title="A connected ecosystem."
          lede={site.divisionsIntro}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {site.divisions.map((division, i) => (
            <Reveal key={division.id} delay={i * 0.1} className="h-full">
              <Link
                to={division.cta.to}
                className="group flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl text-accent/60">
                    {division.index}
                  </span>
                  {division.badge ? (
                    <Badge tone="accent">{division.badge}</Badge>
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl text-primary">{division.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
                  {division.kicker}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {division.description}
                </p>
                <span className="mt-6 text-sm font-semibold text-primary transition-colors group-hover:text-accent-600">
                  {division.cta.label} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values grid */}
      <Section alt>
        <SectionHeading
          eyebrow="Our values"
          title="The principles behind DERMOLYXA."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((value, i) => {
            const Icon = valueIcons[value.icon] ?? FlaskConical;
            return (
              <Reveal key={value.label} delay={(i % 3) * 0.08}>
                <div className="flex h-full items-center gap-4 rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tint text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg text-primary">{value.label}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Ecosystem roadmap */}
      <Section>
        <SectionHeading
          eyebrow="Roadmap"
          title="The DERMOLYXA ecosystem."
          lede="Education, clinical care and future science-driven product solutions, connected under one identity."
        />
        <div className="mt-10 max-w-3xl">
          <Timeline items={aboutRoadmap} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
