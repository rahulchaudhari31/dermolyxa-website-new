import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { site } from "../../data/site";
import Container from "../ui/Container";
import InstagramIcon from "../ui/InstagramIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  const { footer, contact, disclaimer } = site;

  return (
    <footer className="bg-primary text-white/75">
      <Container className="py-section">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Brand + tagline */}
          <div>
            <div className="flex items-baseline gap-0.5 leading-none">
              <span className="font-heading text-2xl font-semibold text-white">
                DERMOLYXA
              </span>
              <span className="font-heading text-base font-semibold text-accent">
                ™
              </span>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft">
              {site.ribbon}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {site.motto}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/45">
              {footer.divisionLabel}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram ${contact.instagram}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={`tel:+91${contact.phone1}`}
                aria-label="Call"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <PhoneCall className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 2. Explore */}
          <nav aria-label="Explore">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footer.explore.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Contact & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
              Contact &amp; Legal
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+91${contact.phone1}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {contact.phone1} / {contact.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 text-accent" />
                  {contact.instagram}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-accent" />
                  WhatsApp: {contact.whatsappNumber}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4 text-accent" />
                {contact.address}
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/55">
              {footer.legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Divisions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
              Divisions
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              {footer.divisions.map((division) => (
                <li key={division.label}>
                  <Link
                    to={division.to}
                    className="font-medium text-white transition-colors hover:text-accent"
                  >
                    {division.label}
                  </Link>
                  <p className="mt-1 text-xs text-white/55">{division.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45">
          <p>{disclaimer.approval}</p>
          <p>{disclaimer.training}</p>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:+91${contact.phone1}`}
              className="inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-accent-600 hover:text-white"
            >
              <PhoneCall className="h-4 w-4" />
              {footer.callLabel}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              <MessageCircle className="h-4 w-4" />
              {footer.whatsappLabel}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-pill border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              {footer.enquireLabel}
            </Link>
          </div>

          <p className="text-xs text-white/45">
            © {year} DERMOLYXA™. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
