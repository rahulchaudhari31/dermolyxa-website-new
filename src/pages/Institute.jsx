import { AlertTriangle, ArrowRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { site } from "../data/site";
import {
  coursesByCategory,
  coursesPage,
  instituteInfo,
  programCategories,
} from "../data/courses";
import { educationImages, educationNote } from "../data/images";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Tabs from "../components/ui/Tabs";
import Stepper from "../components/ui/Stepper";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import CourseCard from "../components/courses/CourseCard";
import CTASection from "../components/sections/CTASection";

function ProgramTab({ category, onOpen }) {
  const items = coursesByCategory(category.id);

  if (!items.length) {
    return (
      <div className="rounded-card border border-dashed border-line bg-surface-alt p-10 text-center">
        <p className="mx-auto max-w-md text-sm leading-relaxed text-muted">
          {category.id === "workshops"
            ? coursesPage.detail.workshopsEmpty
            : coursesPage.emptyBody}
        </p>
        <div className="mt-6 flex justify-center">
          <Button to="/contact" variant="outline">
            Register your interest
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((course, i) => (
        <Reveal key={course.id} delay={(i % 3) * 0.08} className="h-full">
          <CourseCard
            course={course}
            categoryLabel={category.full}
            onOpen={onOpen}
          />
        </Reveal>
      ))}
    </div>
  );
}

export default function Institute() {
  useDocumentTitle(`Institute | ${site.shortName}`);
  const navigate = useNavigate();

  const tabs = programCategories.map((category) => ({
    id: category.id,
    label: category.label,
    content: (
      <ProgramTab category={category} onOpen={() => navigate("/courses")} />
    ),
  }));

  return (
    <>
      <PageHeader
        eyebrow={instituteInfo.eyebrow}
        breadcrumb="Institute"
        title={instituteInfo.title}
        lede={instituteInfo.lede}
        image={educationImages.teacher.src}
        imageAlt={educationImages.teacher.alt}
      />

      {/* Learning journey stepper */}
      <Section>
        <SectionHeading
          eyebrow={instituteInfo.journey.eyebrow}
          title={instituteInfo.journey.title}
          lede={instituteInfo.journey.lede}
        />
        <div className="mt-10">
          <Stepper steps={instituteInfo.pillars} />
        </div>
        <Reveal className="mt-8">
          <p className="text-xs text-muted">{educationNote}</p>
        </Reveal>
      </Section>

      {/* Program categories as tabs */}
      <Section alt>
        <SectionHeading
          eyebrow={instituteInfo.programs.eyebrow}
          title={instituteInfo.programs.title}
          lede={instituteInfo.programs.lede}
        />
        <div className="mt-10">
          <Tabs tabs={tabs} />
        </div>
        <Reveal className="mt-8">
          <div className="flex flex-col items-start justify-between gap-5 rounded-card border border-accent/30 bg-accent/10 p-6 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-accent-600">
              {coursesPage.feeNotice}
            </p>
            <Button to="/courses" variant="primary" iconRight={ArrowRight}>
              View all courses
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Professional skill development + regulatory disclaimers */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h2 className="text-3xl text-primary">
                {instituteInfo.development.title}
              </h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {instituteInfo.development.body}
            </p>
            <div className="mt-7">
              <Button to="/courses" variant="primary" size="lg">
                View Courses
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-card border border-line bg-white shadow-soft">
              <ImageWithFallback
                src={educationImages.lab.src}
                alt={educationImages.lab.alt}
                className="h-44 w-full rounded-t-card object-cover"
              />
              <div className="space-y-4 p-7">
                <p className="eyebrow">Regulatory notes</p>
                {instituteInfo.notices.map((notice) => (
                  <div key={notice} className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <p className="text-sm leading-relaxed text-muted">
                      {notice}
                    </p>
                  </div>
                ))}
                <p className="border-t border-line pt-4 text-xs leading-relaxed text-muted">
                  {site.disclaimer.approval} {site.disclaimer.training}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Ready to build your professional skills?"
        body="Explore the proposed institute programs and indicative fees."
        ctaLabel="Explore Courses"
        to="/courses"
      />
    </>
  );
}
