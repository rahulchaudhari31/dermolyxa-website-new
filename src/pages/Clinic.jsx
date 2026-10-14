import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Dna,
  Droplets,
  Eraser,
  MessageCircle,
  PhoneCall,
  Scissors,
  Sparkles,
  Sprout,
  Stethoscope,
  Syringe,
  Wand2,
} from "lucide-react";
import { site } from "../data/site";
import {
  beforeYouVisit,
  clinicCategories,
  clinicDisclaimer,
  clinicJourney,
  clinicPage,
  clinicServiceNote,
} from "../data/clinic";
import { clinicImages, clinicNote } from "../data/images";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Stepper from "../components/ui/Stepper";
import BookingModal from "../components/clinic/BookingModal";
import ServiceCard from "../components/clinic/ServiceCard";
import CTASection from "../components/sections/CTASection";

const categoryIcons = {
  scissors: Scissors,
  sprout: Sprout,
  droplets: Droplets,
  sparkles: Sparkles,
  dna: Dna,
};

const serviceIcons = {
  transplant: Scissors,
  prp: Droplets,
  gfc: Syringe,
  prfm: Syringe,
  microneedling: Wand2,
  hydrafacial: Droplets,
  removal: Eraser,
  regeneration: Sprout,
  consult: Stethoscope,
  sparkles: Sparkles,
  contour: Activity,
  dna: Dna,
};

export default function Clinic() {
  useDocumentTitle(`Clinic | ${site.shortName}`);

  const [active, setActive] = useState(clinicCategories[0].id);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState("");

  const activeCategory =
    clinicCategories.find((category) => category.id === active) ??
    clinicCategories[0];
  const activeImage = clinicImages[activeCategory.image];

  const openBooking = (serviceName = "") => {
    setBookingService(serviceName);
    setBookingOpen(true);
  };

  return (
    <>
      <PageHeader
        eyebrow={clinicPage.eyebrow}
        breadcrumb="Clinic"
        title={clinicPage.title}
        lede={clinicPage.lede}
        image={clinicImages.hero.src}
        imageAlt={clinicImages.hero.alt}
      />

      {/* Service categories (sidebar) + service cards */}
      <Section>
        <SectionHeading
          title={clinicPage.sectionTitle}
          lede={clinicPage.sectionLede}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
          <Reveal>
            <nav
              aria-label="Clinic service categories"
              className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {clinicCategories.map((category) => {
                const Icon = categoryIcons[category.icon] ?? Sparkles;
                const isActive = category.id === active;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActive(category.id)}
                    aria-pressed={isActive}
                    className={`flex shrink-0 items-center gap-3 rounded-card border px-4 py-3 text-left text-sm font-medium transition-all lg:w-full ${
                      isActive
                        ? "border-accent/50 bg-primary text-white shadow-soft"
                        : "border-line bg-white text-muted hover:border-accent/40 hover:text-primary"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isActive ? "bg-white/10 text-accent" : "bg-tint text-primary"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="whitespace-nowrap lg:whitespace-normal">
                      {category.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </Reveal>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
                    {activeCategory.kicker}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="text-xs text-muted">
                    {activeCategory.services.length} services
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {activeCategory.services.map((service) => (
                    <ServiceCard
                      key={`${activeCategory.id}-${service.name}`}
                      service={service}
                      icon={serviceIcons[service.icon] ?? Sparkles}
                      image={activeImage}
                      description={clinicServiceNote}
                      onBook={openBooking}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="mt-6 text-xs text-muted">{clinicNote}</p>
          </div>
        </div>
      </Section>

      {/* Consultation journey */}
      <Section alt>
        <SectionHeading
          eyebrow={clinicJourney.eyebrow}
          title={clinicJourney.title}
          lede={clinicJourney.lede}
        />
        <div className="mt-10">
          <Stepper steps={clinicJourney.steps} />
        </div>
      </Section>

      {/* Before you visit */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">{beforeYouVisit.eyebrow}</span>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">
              {beforeYouVisit.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {beforeYouVisit.intro}
            </p>
            <ul className="mt-6 space-y-3">
              {beforeYouVisit.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 inline-flex rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-600">
              {beforeYouVisit.placeholder}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="accent" size="lg" onClick={() => openBooking("")}>
                Book Consultation
              </Button>
              <Button
                href={`tel:+91${site.contact.phone1}`}
                variant="outline"
                size="lg"
                icon={PhoneCall}
              >
                {site.contact.phone1}
              </Button>
              <Button
                href={site.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
              >
                WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-card border border-line bg-surface-alt p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-primary">
                  <Stethoscope className="h-5 w-5" />
                </span>
                <h3 className="text-lg text-primary">
                  {beforeYouVisit.contactsLabel}
                </h3>
              </div>
              <ul className="mt-5 space-y-4 text-sm text-muted">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Phone
                  </span>
                  <span className="text-ink">
                    {site.contact.phone1} / {site.contact.phone2}
                  </span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    WhatsApp
                  </span>
                  <span className="text-ink">{site.contact.whatsappNumber}</span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Email
                  </span>
                  <span className="text-ink">{site.contact.email}</span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Address
                  </span>
                  <span className="text-ink">{site.contact.address}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Visible medical disclaimer */}
      <Section alt>
        <Reveal>
          <div className="flex flex-col gap-4 rounded-card border border-accent/30 bg-accent/10 p-7 sm:flex-row sm:items-start">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-accent-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
                {clinicDisclaimer.eyebrow}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {clinicDisclaimer.text}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {clinicPage.notice}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={bookingService}
      />

      <CTASection
        title="Book a clinic consultation."
        body="Services are considered individually following appropriate assessment."
        ctaLabel="Book Consultation"
        to="/contact"
      />
    </>
  );
}
