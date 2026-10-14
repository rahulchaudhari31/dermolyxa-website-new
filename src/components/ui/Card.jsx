import { cn } from "../../lib/cn";

export default function Card({
  children,
  className,
  as: Tag = "div",
  interactive = false,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-line bg-white p-6 shadow-soft",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
