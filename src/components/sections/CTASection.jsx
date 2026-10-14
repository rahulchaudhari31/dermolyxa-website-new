import { MessageCircle, PhoneCall } from "lucide-react";
import { site } from "../../data/site";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function CTASection({
  title = "Talk to us about your next step.",
  body = "Institute, Clinic and Products enquiries are routed clearly — reach out by call, WhatsApp or the enquiry form.",
  to = "/contact",
  ctaLabel = "Start Your Enquiry",
}) {
  return (
    <Container className="py-section">
      <Reveal>
        <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-primary to-primary-500 px-8 py-14 text-center text-white sm:px-12">
          <div
            className="pointer-events-none absolute -top-20 right-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <span className="eyebrow text-accent-soft">{site.motto}</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            {body}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to={to} variant="accent" size="lg">
              {ctaLabel}
            </Button>
            <Button
              href={`tel:+91${site.contact.phone1}`}
              variant="light"
              size="lg"
              icon={PhoneCall}
            >
              {site.contact.phone1}
            </Button>
            <Button
              href={site.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              icon={MessageCircle}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
