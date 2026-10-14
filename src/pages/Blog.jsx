import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { site } from "../data/site";
import { blogPage } from "../data/blog";
import { blogPostsExtended, blogFeatured } from "../data/blogExtended";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import BlogCard from "../components/blog/BlogCard";
import CTASection from "../components/sections/CTASection";

export default function Blog() {
  useDocumentTitle(`Blog | ${site.shortName}`);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const set = new Set(["all"]);
    blogPostsExtended.forEach((p) => set.add(p.category));
    return Array.from(set).map((id) => ({
      id,
      label: id === "all" ? "All" : blogPostsExtended.find((p) => p.category === id)?.categoryLabel || id,
    }));
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return blogPostsExtended.filter((p) => {
      const matchesCat = category === "all" || p.category === category;
      const hay = `${p.title} ${p.excerpt} ${p.tags.join(" ")} ${p.categoryLabel}`.toLowerCase();
      return matchesCat && (!term || hay.includes(term));
    });
  }, [query, category]);

  return (
    <>
      <PageHeader eyebrow={blogPage.eyebrow} breadcrumb="Blog" title={blogPage.title} lede={blogPage.lede} />

      {blogFeatured && (
        <Section>
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-line bg-surface-alt p-8 sm:p-10">
              <span className="eyebrow">Featured</span>
              <h2 className="mt-3 text-3xl text-primary">{blogFeatured.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{blogFeatured.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted">
                <span>{blogFeatured.categoryLabel}</span>
                <span>{blogFeatured.date}</span>
                <span>{blogFeatured.readTime}</span>
                <span>By {blogFeatured.author}</span>
              </div>
              <div className="mt-7">
                <Button to={`/blog/${blogFeatured.slug}`} variant="primary">Read Featured Post</Button>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      <Section alt>
        <Reveal>
          <div className="rounded-card border border-line bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search posts..." className="w-full rounded-pill border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20" />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = category === c.id;
                return (
                  <button key={c.id} type="button" onClick={() => setCategory(c.id)} className={`rounded-pill border px-4 py-2 text-sm font-medium ${active ? "border-transparent bg-primary text-white" : "border-line bg-surface-alt text-muted hover:text-primary"}`}>
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
        {!filtered.length && (
          <p className="mt-6 text-center text-sm text-muted">{blogPage.emptyBody}</p>
        )}
      </Section>

      <CTASection title="Want to learn more?" body="Explore our educational approach and enquiry options." ctaLabel="Contact Us" to="/contact" />
    </>
  );
}
