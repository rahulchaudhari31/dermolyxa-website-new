import { cn } from "../../lib/cn";
import Container from "./Container";

/**
 * Section shell with optional soft alternate background.
 */
export default function Section({
  children,
  className,
  containerClassName,
  alt = false,
  id,
  container = true,
}) {
  const inner = container ? (
    <Container className={containerClassName}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        "py-section",
        alt && "bg-surface-alt",
        className
      )}
    >
      {inner}
    </section>
  );
}
