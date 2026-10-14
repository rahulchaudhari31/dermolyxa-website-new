import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-700 shadow-soft border border-transparent",
  accent:
    "bg-accent text-primary hover:bg-accent-600 hover:text-white shadow-[var(--shadow-gold)] border border-transparent",
  outline:
    "bg-transparent text-primary border border-primary/25 hover:border-primary hover:bg-tint",
  ghost: "bg-transparent text-primary hover:bg-tint",
  whatsapp: "bg-whatsapp text-white hover:brightness-95 border border-transparent",
  light: "bg-white text-primary border border-line hover:border-accent shadow-soft",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  className,
  icon: Icon,
  iconRight: IconRight,
  ...rest
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className
  );

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4" strokeWidth={2} /> : null}
      <span>{children}</span>
      {IconRight ? <IconRight className="h-4 w-4" strokeWidth={2} /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
