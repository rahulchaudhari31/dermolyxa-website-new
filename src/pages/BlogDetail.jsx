import { Link, useParams } from "react-router-dom";
import { CalendarDays, Share2, ArrowLeft } from "lucide-react";
import { site } from "../data/site";
import { blogPostsExtended } from "../data/blogExtended";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import BlogCard from "../components/blog/BlogCard";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPostsExtended.find((p) => p.slug === slug);
  useDocumentTitle(post ? `${post.title} | ${site.shortName}` : `Blog | ${site.shortName}`);

  if (!post) {
    return (
      <Section>
        <div className="text-center">
          <h1 className="text-2xl text-primary">Article not found</h1>
          <p className="mt-2 text-sm text-muted">This sample article may not exist.</p>
          <div className="mt-4">
            <Button to="/blog" variant="outline" icon={ArrowLeft}>Back to Blog</Button>
          </div>
        </div>
      </Section>
    );
  }

  const related = blogPostsExtended.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  const shareText = encodeURIComponent(`${post.title} - ${site.name}`);
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <>
      <Section>
        <Reveal>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mt-6">
            <span className="eyebrow">{post.categoryLabel}</span>
            <h1 className="mt-3 text-3xl text-primary sm:text-4xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{post.date}</span>
              <span>{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
            {post.disclaimer && <p className="mt-3 text-xs italic text-muted">{post.disclaimer}</p>}
          </div>
        </Reveal>
      </Section>

      <Section alt>
        <article className="prose prose-slate mx-auto max-w-3xl">
          {post.body.map((para, idx) => (
            <p key={idx} className="text-base leading-relaxed text-muted">{para}</p>
          ))}
        </article>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center gap-3">
          <span className="text-sm text-muted">Share:</span>
          <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-pill border border-line px-4 py-2 text-sm text-primary hover:bg-tint">
            <Share2 className="h-4 w-4" /> WhatsApp
          </a>
          <a href={`mailto:?subject=${shareText}&body=${shareText}%20${shareUrl}`} className="inline-flex items-center gap-2 rounded-pill border border-line px-4 py-2 text-sm text-primary hover:bg-tint">
            Email
          </a>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <h2 className="text-2xl text-primary">Related posts</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
