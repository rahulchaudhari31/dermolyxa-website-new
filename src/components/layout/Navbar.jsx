import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mail, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { navMenu, site } from "../../data/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { cn } from "../../lib/cn";

function Wordmark({ onClick }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex shrink-0 items-center"
      aria-label={`${site.shortName} home`}
    >
      {failed ? (
        <span className="flex flex-col leading-none">
          <span className="flex items-baseline gap-0.5">
            <span className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
              DERMOLYXA
            </span>
            <span className="font-heading text-sm font-semibold text-accent">
              ™
            </span>
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-muted">
            {site.ribbon}
          </span>
        </span>
      ) : (
        <img
          src="/logo-white.jpg"
          alt={`${site.shortName} logo`}
          width="720"
          height="510"
          onError={() => setFailed(true)}
          className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14"
        />
      )}
    </Link>
  );
}

const linkBase =
  "relative px-3 py-2 text-sm font-medium transition-colors";

function DesktopNavItem({ item, scrolled }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  return (
    <li
      className="relative"
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => hasChildren && setOpen(false)}
    >
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          cn(
            linkBase,
            "inline-flex items-center gap-1",
            isActive ? "text-primary" : "text-muted hover:text-primary"
          )
        }
        onFocus={() => hasChildren && setOpen(true)}
      >
        {({ isActive }) => (
          <>
            {item.label}
            {hasChildren ? (
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            ) : null}
            <span
              className={cn(
                "absolute inset-x-3 bottom-0 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300",
                isActive ? "scale-x-100" : "scale-x-0"
              )}
            />
          </>
        )}
      </NavLink>

      <AnimatePresence>
        {hasChildren && open ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute left-0 top-full z-50 w-72 pt-3",
              scrolled ? "" : ""
            )}
          >
            <div className="overflow-hidden rounded-card border border-line bg-white p-2 shadow-card">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.to}
                  className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface-alt"
                >
                  <span className="block text-sm font-medium text-primary">
                    {child.label}
                  </span>
                  {child.description ? (
                    <span className="mt-0.5 block text-xs text-muted">
                      {child.description}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b bg-white/80 backdrop-blur-md transition-all duration-300",
          scrolled ? "border-line shadow-soft" : "border-transparent"
        )}
      >
        <Container className="flex h-[5rem] items-center justify-between gap-4">
          <Wordmark onClick={() => setOpen(false)} />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navMenu.map((item) => (
                <DesktopNavItem key={item.label} item={item} scrolled={scrolled} />
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <Button to="/contact" variant="primary" size="sm">
              Enquire Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-primary transition-colors hover:bg-tint xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-primary/40 backdrop-blur-sm xl:hidden"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 36 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-card xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-line px-6 py-5">
                <Wordmark onClick={() => setOpen(false)} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-primary transition-colors hover:bg-tint"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="space-y-1">
                  {navMenu.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.03 }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-xl px-4 py-3.5 text-lg font-medium transition-colors",
                            isActive
                              ? "bg-tint text-primary"
                              : "text-ink hover:bg-surface-alt"
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-6">
                  <p className="px-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Divisions
                  </p>
                  <ul className="mt-3 space-y-1">
                    {site.footer.divisions.map((division) => (
                      <li key={division.label}>
                        <Link
                          to={division.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-4 py-2.5 text-sm text-muted transition-colors hover:bg-surface-alt hover:text-primary"
                        >
                          {division.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              <div className="border-t border-line px-6 py-6">
                <Button
                  to="/contact"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Enquire Now
                </Button>

                <div className="mt-5 space-y-2.5 text-sm text-muted">
                  <a
                    href={`tel:+91${site.contact.phone1}`}
                    className="flex items-center gap-2.5 hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    {site.contact.phone1} / {site.contact.phone2}
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-2.5 hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    {site.contact.email}
                  </a>
                  <a
                    href={site.contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-accent" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
