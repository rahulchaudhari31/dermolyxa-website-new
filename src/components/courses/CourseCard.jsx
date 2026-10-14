import { ArrowRight, CalendarDays, IndianRupee } from "lucide-react";
import { coursesPage } from "../../data/courses";

/**
 * Presentational course card. Animation/filtering is handled by the
 * parent grid so cards can participate in layout transitions.
 */
export default function CourseCard({
  course,
  onOpen,
  categoryLabel,
  className = "",
}) {
  return (
    <article
      className={`group flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
        {categoryLabel ?? course.category}
      </span>

      <h3 className="mt-4 text-xl leading-snug text-primary">{course.title}</h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {course.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-5 text-sm">
        <span className="inline-flex items-center gap-2 text-ink">
          <CalendarDays className="h-4 w-4 text-primary" />
          {course.duration}
        </span>
        <span className="inline-flex items-center gap-2 font-semibold text-primary">
          <IndianRupee className="h-4 w-4 text-accent-600" />
          {course.fee}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onOpen?.(course)}
        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors group-hover:text-accent-600"
      >
        {coursesPage.ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </article>
  );
}
