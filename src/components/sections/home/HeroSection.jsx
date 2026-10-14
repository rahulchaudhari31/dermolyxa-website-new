import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FlaskConical, Layers, Sparkles } from "lucide-react";
import { site } from "../../../data/site";
import { homeImages } from "../../../data/home";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import ImageWithFallback from "../../ui/ImageWithFallback";
import Reveal from "../../ui/Reveal";

const ease = [0.22, 1, 0.36, 1];

function GlassCard({ icon: Icon, title, value, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-3.5 shadow-card backdrop-blur-md"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
          <Icon className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="font-heading text-lg text-primary">{value}</p>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted">
            {title}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yMain = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yTop = useTransform(scrollYProgress, [0, 1], [90, -70]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [30, -40]);
  const yFloat = useTransform(scrollYProgress, [0, 1], [60, -80]);

  const { hero } = site;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-tint blur-3xl opacity-80" />
        <div className="absolute top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-tint-200/60 blur-3xl" />
      </div>

      <Container className="grid items-center gap-16 py-section-lg lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-5 text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl"
          >
            Where Science Meets{" "}
            <span className="font-normal italic text-accent">
              Aesthetic Excellence
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {hero.actions.map((action, i) => (
              <Button
                key={action.to}
                to={action.to}
                variant={i === 0 ? "primary" : "outline"}
                size="lg"
                iconRight={ArrowRight}
              >
                {action.label}
              </Button>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 text-xs text-muted/80"
          >
            {hero.imageDisclaimer}
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <motion.div style={{ y: yMain }} className="row-span-2">
              <ImageWithFallback
                src={homeImages.hero.main.src}
                alt={homeImages.hero.main.alt}
                className="h-full min-h-[22rem] w-full rounded-[1.75rem] border border-line object-cover shadow-card"
              />
            </motion.div>

            <motion.div style={{ y: yTop }}>
              <ImageWithFallback
                src={homeImages.hero.clinic.src}
                alt={homeImages.hero.clinic.alt}
                className="aspect-[4/3] w-full rounded-[1.5rem] border border-line object-cover shadow-soft"
              />
            </motion.div>

            <motion.div style={{ y: yBottom }}>
              <ImageWithFallback
                src={homeImages.hero.lab.src}
                alt={homeImages.hero.lab.alt}
                className="aspect-[4/3] w-full rounded-[1.5rem] border border-line object-cover shadow-soft"
              />
            </motion.div>
          </div>

          <motion.div style={{ y: yFloat }} className="absolute -bottom-8 -left-6 hidden w-44 sm:block">
            <ImageWithFallback
              src={homeImages.hero.hair.src}
              alt={homeImages.hero.hair.alt}
              className="aspect-[5/4] w-full rounded-[1.25rem] border-4 border-white object-cover shadow-card"
            />
          </motion.div>

          <GlassCard
            icon={Layers}
            value="3 Divisions"
            title="One identity"
            delay={0.3}
            className="absolute -left-4 top-8 w-44"
          />
          <GlassCard
            icon={FlaskConical}
            value="12 Programs"
            title="Proposed"
            delay={0.45}
            className="absolute -right-3 bottom-24 w-44"
          />
          <GlassCard
            icon={Sparkles}
            value="Science"
            title="Education • Care"
            delay={0.6}
            className="absolute right-2 -top-5 hidden w-40 md:block"
          />
        </div>
      </Container>
    </section>
  );
}
