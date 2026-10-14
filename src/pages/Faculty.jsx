import { useState } from "react";
import { UserRound } from "lucide-react";
import { site } from "../data/site";
import { faculty, facultyPage } from "../data/faculty";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Placeholder from "../components/ui/Placeholder";
import FacultyCard from "../components/faculty/FacultyCard";
import CTASection from "../components/sections/CTASection";

export default function Faculty() {
  useDocumentTitle(`Faculty | ${site.shortName}`);

  const [active, setActive] = useState(null);

  return (
    <>
      <PageHeader
        eyebrow={facultyPage.eyebrow}
        breadcrumb="Faculty"
        title={facultyPage.title}
        lede={facultyPage.lede}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08} className="h-full">
              <FacultyCard member={member} onOpen={setActive} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-center text-sm text-muted">{facultyPage.note}</p>
        </Reveal>
      </Section>

      {/* Profile modal (placeholder only) */}
      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active?.role}
      >
        {active ? (
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-line bg-surface-alt text-primary/40">
                <UserRound className="h-9 w-9" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
                {facultyPage.placeholderLabel}
              </p>
              <h4 className="mt-1 text-lg text-primary">
                {facultyPage.profileComingSoon}
              </h4>
            </div>

            <p className="text-sm leading-relaxed text-muted">
              {facultyPage.profileBody}
            </p>

            <div className="rounded-xl border border-line bg-surface-alt p-5">
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {facultyPage.detailsLabel}
              </span>
              <span className="mt-2 block">
                <Placeholder>{facultyPage.placeholderNote}</Placeholder>
              </span>
            </div>

            <Button to="/contact" variant="accent" size="lg" className="w-full">
              {facultyPage.modalCta}
            </Button>
          </div>
        ) : null}
      </Modal>

      <CTASection
        title="Interested in teaching with DERMOLYXA?"
        body="Faculty information is published only when officially provided and verified."
        ctaLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
