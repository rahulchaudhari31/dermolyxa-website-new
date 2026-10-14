import { ArrowRight } from "lucide-react";
import ImageWithFallback from "../ui/ImageWithFallback";
import Button from "../ui/Button";

/**
 * Clinic service card: icon, image, site-derived description and a
 * Book Consultation action.
 */
export default function ServiceCard({
  service,
  icon: Icon,
  image,
  description,
  onBook,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
      <div className="relative h-40 overflow-hidden">
        <ImageWithFallback
          src={image?.src}
          alt={image?.alt ?? service.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-soft backdrop-blur">
          {Icon ? <Icon className="h-5 w-5" /> : null}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg text-primary">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-5">
          <Button
            variant="outline"
            size="sm"
            iconRight={ArrowRight}
            onClick={() => onBook?.(service.name)}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </article>
  );
}
