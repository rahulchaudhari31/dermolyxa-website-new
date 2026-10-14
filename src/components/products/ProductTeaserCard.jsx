import { Lock } from "lucide-react";
import ImageWithFallback from "../ui/ImageWithFallback";
import { productTeasers } from "../../data/products";

/**
 * Blurred "preview-style" teaser card for a product category.
 */
export default function ProductTeaserCard({ category, image }) {
  return (
    <article className="group relative overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={image?.src}
          alt={image?.alt ?? category.title}
          className="h-full w-full scale-105 object-cover blur-[3px] transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-primary/10"
          aria-hidden="true"
        />

        <span className="absolute right-4 top-4 rounded-pill bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Coming Soon
        </span>

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <Lock className="h-3 w-3" />
          {productTeasers.previewLabel}
        </span>

        <h3 className="absolute bottom-5 left-5 right-5 font-heading text-2xl text-white">
          {category.title}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-sm leading-relaxed text-muted">{category.body}</p>
        <p className="mt-4 text-xs italic text-muted/80">
          Product names, ingredients and claims will be published only when
          finalized.
        </p>
      </div>
    </article>
  );
}
