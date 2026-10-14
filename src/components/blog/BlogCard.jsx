import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal";

export default function BlogCard({ post, index = 0 }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
        <div className="flex flex-col p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.14em] text-accent-600">
              {post.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="mt-3 text-xl text-primary">{post.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted">
            <span>By {post.author}</span>
            {post.disclaimer ? (
              <span className="italic">{post.disclaimer}</span>
            ) : null}
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent-600"
          >
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
