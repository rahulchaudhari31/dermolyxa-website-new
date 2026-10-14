import { Mail, MapPin, Phone, Globe, MessageCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import InstagramIcon from "../components/ui/InstagramIcon";
import { site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import EnquiryForm from "../components/sections/EnquiryForm";

export default function Contact() {
  useDocumentTitle(`Contact | ${site.shortName}`);

  const { contact } = site;
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get("course") ?? "";

  const details = [
    {
      icon: Phone,
      label: "Phone",
      value: `${contact.phone1} / ${contact.phone2}`,
      href: `tel:+91${contact.phone1}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Globe,
      label: "Website",
      value: contact.website,
      href: `https://${contact.website}`,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: contact.instagram,
      href: contact.instagramUrl,
    },
    {
      icon: MapPin,
      label: "Address",
      value: contact.address,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        breadcrumb="Contact"
        title="Start a DERMOLYXA enquiry"
        lede={site.contact.lede}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl text-primary">Talk to us.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Institute, Clinic and Products enquiries are routed clearly.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((item) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tint text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-ink">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-start gap-4 transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-9">
              <Button
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <Reveal delay={0.1}>
            <EnquiryForm initialCourse={initialCourse} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
