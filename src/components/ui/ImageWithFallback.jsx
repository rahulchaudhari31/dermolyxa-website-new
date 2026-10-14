import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "../../lib/cn";

/**
 * Image element that degrades gracefully to a branded placeholder
 * when no source is provided or the source fails to load.
 */
export default function ImageWithFallback({
  src,
  alt = "",
  className,
  fallbackClassName,
  ...rest
}) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-primary to-primary-500 text-accent",
          className,
          fallbackClassName
        )}
      >
        <ImageOff className="h-1/4 w-1/4 max-h-12 max-w-12 opacity-70" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
