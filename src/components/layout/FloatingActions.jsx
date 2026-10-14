import { Link } from "react-router-dom";
import { MessageCircle, PhoneCall, CalendarPlus } from "lucide-react";
import { site } from "../../data/site";
import BackToTop from "./BackToTop";

function Action({ as: Tag = "a", label, className, children, ...rest }) {
  return (
    <Tag
      className={`group relative flex h-12 w-12 items-center justify-center rounded-full shadow-card transition-transform duration-200 hover:scale-105 ${className}`}
      {...rest}
    >
      {children}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
        {label}
      </span>
    </Tag>
  );
}

export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <BackToTop />

      <Action
        as={Link}
        to="/contact"
        label={site.footer.enquireLabel}
        className="bg-accent text-primary hover:bg-accent-600 hover:text-white"
        aria-label="Enquire now"
      >
        <CalendarPlus className="h-5 w-5" />
      </Action>

      <Action
        href={`tel:+91${site.contact.phone1}`}
        label={`Call ${site.contact.phone1}`}
        className="bg-primary text-white"
        aria-label="Call DERMOLYXA"
      >
        <PhoneCall className="h-5 w-5" />
      </Action>

      <Action
        href={site.contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        label="WhatsApp"
        className="h-14 w-14 bg-whatsapp text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Action>
    </div>
  );
}
