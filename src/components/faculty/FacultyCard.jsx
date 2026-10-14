import { ArrowRight, UserRound } from "lucide-react";
import { facultyPage } from "../../data/faculty";

/**
 * Placeholder faculty card. Opens a profile modal.
 * No names, qualifications or credentials are invented.
 */
export default function FacultyCard({ member, onOpen }) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-line bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-line bg-surface-alt text-primary/40 transition-colors group-hover:text-accent-600">
        <UserRound className="h-9 w-9" />
      </span>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
        {facultyPage.placeholderLabel}
      </p>
      <h3 className="mt-2 text-lg text-primary">{member.role}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {facultyPage.profileComingSoon}
      </p>

      <button
        type="button"
        onClick={() => onOpen?.(member)}
        className="mt-5 inline-flex items-center justify-center gap-2 self-center text-sm font-semibold text-primary transition-colors group-hover:text-accent-600"
      >
        View profile
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </article>
  );
}
