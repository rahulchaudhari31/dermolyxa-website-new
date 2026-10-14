import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { site } from "../data/site";
import { courses, coursesPage, programCategories } from "../data/courses";
import { educationImages, educationNote } from "../data/images";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Accordion from "../components/ui/Accordion";
import Placeholder from "../components/ui/Placeholder";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import CourseCard from "../components/courses/CourseCard";
import CTASection from "../components/sections/CTASection";

const feeValue = (fee) => Number(String(fee).replace(/[^0-9]/g, "")) || 0;
const durationDays = (duration) => {
  const n = parseInt(duration, 10) || 0;
  return /day/i.test(duration) ? n : n * 30;
};

const categoryLabel = (id) =>
  programCategories.find((category) => category.id === id)?.full ??
  "Professional education";

const categoryImage = {
  certificate: educationImages.classroom,
  diploma: educationImages.lecture,
  advanced: educationImages.workshop,
  fellowship: educationImages.lab,
};

export default function Courses() {
  useDocumentTitle(`Courses | ${site.shortName} Institute`);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    const result = courses.filter((course) => {
      const matchesCategory =
        category === "all" || course.programCategory === category;
      const haystack = `${course.title} ${course.description} ${categoryLabel(
        course.programCategory
      )}`.toLowerCase();
      const matchesTerm = !term || haystack.includes(term);
      return matchesCategory && matchesTerm;
    });

    const sorted = [...result];
    switch (sort) {
      case "fee-asc":
        sorted.sort((a, b) => feeValue(a.fee) - feeValue(b.fee));
        break;
      case "fee-desc":
        sorted.sort((a, b) => feeValue(b.fee) - feeValue(a.fee));
        break;
      case "duration-asc":
        sorted.sort((a, b) => durationDays(a.duration) - durationDays(b.duration));
        break;
      case "duration-desc":
        sorted.sort((a, b) => durationDays(b.duration) - durationDays(a.duration));
        break;
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return sorted;
  }, [query, category, sort]);

  const filtersActive = query !== "" || category !== "all" || sort !== "default";

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setSort("default");
  };

  return (
    <>
      <PageHeader
        eyebrow={coursesPage.eyebrow}
        breadcrumb="Courses"
        title={coursesPage.title}
        lede={coursesPage.lede}
        image={educationImages.lecture.src}
        imageAlt={educationImages.lecture.alt}
      />

      <Section>
        <Reveal className="mb-8 flex flex-col gap-3 rounded-card border border-accent/30 bg-accent/10 p-6 sm:flex-row sm:items-start">
          <p className="text-sm font-medium text-accent-600">
            {coursesPage.feeNotice}
          </p>
          <p className="text-sm text-muted sm:ml-auto sm:text-right">
            {coursesPage.feeDisclaimer}
          </p>
        </Reveal>

        {/* Filter bar */}
        <Reveal>
          <div className="rounded-card border border-line bg-surface-alt p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={coursesPage.searchPlaceholder}
                  aria-label="Search programs"
                  className="w-full rounded-pill border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <label className="flex items-center gap-3 text-sm text-muted">
                <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em]">
                  Sort
                </span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-pill border border-line bg-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  {coursesPage.sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {[{ id: "all", label: "All" }, ...programCategories].map((option) => {
                const isActive = category === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setCategory(option.id)}
                    aria-pressed={isActive}
                    className={`rounded-pill border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-transparent bg-primary text-white"
                        : "border-line bg-white text-muted hover:border-accent/40 hover:text-primary"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}

              {filtersActive ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-pill px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-white"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear
                </button>
              ) : null}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted">
            <span className="font-semibold text-primary">{filtered.length}</span>{" "}
            {coursesPage.resultsLabel}
          </p>
        </div>

        {/* Course grid */}
        <motion.div
          layout
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <CourseCard
                  course={course}
                  categoryLabel={categoryLabel(course.programCategory)}
                  onOpen={setActive}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!filtered.length ? (
          <Reveal className="mt-10 rounded-card border border-dashed border-line bg-surface-alt p-10 text-center">
            <h3 className="text-xl text-primary">{coursesPage.emptyTitle}</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              {coursesPage.emptyBody}
            </p>
            <div className="mt-6 flex justify-center">
              <Button type="button" variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-8">
          <p className="text-xs text-muted">{educationNote}</p>
        </Reveal>
      </Section>

      {/* Course detail modal */}
      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active?.title}
        className="max-w-2xl"
      >
        {active ? (
          <div className="space-y-6">
            <ImageWithFallback
              src={
                (categoryImage[active.programCategory] ?? educationImages.study)
                  .src
              }
              alt={
                (categoryImage[active.programCategory] ?? educationImages.study)
                  .alt
              }
              className="h-40 w-full rounded-xl border border-line object-cover"
            />

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
                {categoryLabel(active.programCategory)}
              </span>
              <h4 className="mt-2 text-lg text-primary">
                {coursesPage.detail.overviewLabel}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {active.description}
              </p>
            </div>

            <div className="grid gap-4 rounded-xl border border-line bg-surface-alt p-5 sm:grid-cols-3">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {coursesPage.detail.durationLabel}
                </span>
                <span className="mt-1 block text-sm font-medium text-ink">
                  {active.duration}
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {coursesPage.detail.feeLabel}
                </span>
                <span className="mt-1 block text-sm font-semibold text-primary">
                  {active.fee}
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {coursesPage.detail.eligibilityLabel}
                </span>
                <span className="mt-1 block">
                  <Placeholder>{active.eligibility}</Placeholder>
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg text-primary">
                {coursesPage.detail.whoForLabel}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {coursesPage.detail.whoForPlaceholder}
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-lg text-primary">
                {coursesPage.detail.curriculumLabel}
              </h4>
              <Accordion
                defaultOpen={-1}
                items={[
                  {
                    q: coursesPage.detail.curriculumHeading,
                    a: coursesPage.detail.curriculumPlaceholder,
                  },
                ]}
              />
            </div>

            <Button
              variant="accent"
              size="lg"
              className="w-full"
              onClick={() =>
                navigate(
                  `/contact?course=${encodeURIComponent(active.title)}`
                )
              }
            >
              {coursesPage.detail.enquiryLabel}
            </Button>

            <p className="text-center text-xs text-muted">
              {coursesPage.feeDisclaimer}
            </p>
          </div>
        ) : null}
      </Modal>

      <CTASection
        title="Have a question about eligibility or fees?"
        body="Share basic contact and course-interest information and we will route your enquiry clearly."
        ctaLabel="Enquire Now"
        to="/contact"
      />
    </>
  );
}
