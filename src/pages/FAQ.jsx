import { site } from "../data/site";
import { faqs, faqPage } from "../data/faq";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import Accordion from "../components/ui/Accordion";
import CTASection from "../components/sections/CTASection";

export default function FAQ() {
  useDocumentTitle(`FAQ | ${site.shortName}`);

  return (
    <>
      <PageHeader
        eyebrow={faqPage.eyebrow}
        breadcrumb="FAQ"
        title={faqPage.title}
        lede={faqPage.lede}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        body="Call, WhatsApp or send an enquiry and we will help you find the right path."
        ctaLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
