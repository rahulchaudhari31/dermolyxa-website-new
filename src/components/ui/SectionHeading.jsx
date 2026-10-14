import { cn } from "../../lib/cn";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  lede,
  align = "left",
  className,
  light = false,
}) {
  const copy = subtitle ?? lede;
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", light && "text-accent-soft")}>
          {eyebrow}
        </span>
      ) : null}
      {title ? (
        <h2
          className={cn(
            "mt-3 text-3xl sm:text-4xl",
            light ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
      ) : null}
      {copy ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-white/80" : "text-muted"
          )}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}
