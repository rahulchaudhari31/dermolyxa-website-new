import { AlertCircle, CheckCircle2 } from "lucide-react";
import { site } from "../data/site";
import { admissionsPage, admissionsSteps } from "../data/courses";
import { faqs } from "../data/faq";
import { educationImages, educationNote } from "../data/images";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Placeholder from "../components/ui/Placeholder";
import Timeline from "../components/ui/Timeline";
import Accordion from "../components/ui/Accordion";
import CTASection from "../components/sections/CTASection";

export default function Admissions() {
  useDocumentTitle(`Admissions | ${site.shortName} Institute`);

  const { eligibility, faqs: admissionsFaq } = admissionsPage;

  const faqItems = admissionsFaq.questions
    .map((question) => faqs.find((faq) => faq.q === question))
    .filter(Boolean)
    .map((faq) => ({ q: faq.q, a: faq.a }));

  const processItems = admissionsSteps.map((step) => ({
    id: step.step,
    index: step.step,
    title: step.title,
    body: step.body,
  }));

  return (
    <>
      <PageHeader
        eyebrow={admissionsPage.eyebrow}
        breadcrumb="Admissions"
        title={admissionsPage.title}
        lede={admissionsPage.lede}
        image={educationImages.workshop.src}
        imageAlt={educationImages.workshop.alt}
      />

      {/* Step-by-step process */}
      <Section>
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-5 rounded-card bg-surface-alt p-7 sm:flex-row sm:items-center">
          <p className="font-heading text-2xl text-primary">
            {admissionsPage.subLede}
          </p>
          <Button to="/contact" variant="accent" size="lg">
            {admissionsPage.ctaLabel}
          </Button>
        </Reveal>

        <SectionHeading
          eyebrow={admissionsPage.processEyebrow}
          title={admissionsPage.processTitle}
        />
        <div className="mt-10 max-w-3xl">
          <Timeline items={processItems} />
        </div>

        <Reveal className="mt-12 flex items-start gap-3 rounded-card border border-accent/30 bg-accent/10 p-6">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
          <p className="text-sm font-medium text-accent-600">
            {admissionsPage.notice}
          </p>
        </Reveal>
      </Section>

      {/* Eligibility area */}
      <Section alt>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">{eligibility.eyebrow}</span>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">
              {eligibility.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {eligibility.body}
            </p>
            <div className="mt-7">
              <Button to="/courses" variant="primary" size="lg">
                Review programs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-card border border-line bg-white p-7 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Eligibility check</span>
                <Badge tone="accent">Before admission</Badge>
              </div>
              <ul className="mt-5 space-y-4">
                {eligibility.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span className="text-sm leading-relaxed text-muted">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
                Program-wise requirement details:{" "}
                <Placeholder>{eligibility.placeholder}</Placeholder>
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-8">
          <p className="text-xs text-muted">{educationNote}</p>
        </Reveal>
      </Section>

      {/* Admissions FAQ */}
      <Section>
        <SectionHeading
          eyebrow={admissionsFaq.eyebrow}
          title={admissionsFaq.title}
          lede={admissionsFaq.lede}
        />
        <Reveal className="mt-10 max-w-3xl">
          <Accordion items={faqItems} />
        </Reveal>
      </Section>

      <CTASection
        title="Start your programme enquiry."
        body="Choose your course, submit an enquiry and let us guide you through the steps."
        ctaLabel="Start Your Enquiry"
        to="/contact"
      />
    </>
  );
}
