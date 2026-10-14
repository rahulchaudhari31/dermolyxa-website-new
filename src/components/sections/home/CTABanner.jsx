import { MessageCircle } from "lucide-react";
import { site } from "../../../data/site";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";

export default function CTABanner() {
  return (
    <section className="bg-white pb-section">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-primary to-primary-500 px-8 py-14 text-center shadow-card sm:px-14 sm:py-16">
            <div
              className="pointer-events-none absolute -top-24 right-8 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-tint/20 blur-3xl"
              aria-hidden="true"
            />

            <span className="eyebrow text-accent-soft">{site.motto}</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-4xl">
              Talk to us about your next step.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
              Institute, Clinic and Products enquiries are routed clearly — reach
              out and we will guide you.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button to="/contact" variant="accent" size="lg">
                Enquire Now
              </Button>
              <Button
                href={site.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
                icon={MessageCircle}
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
