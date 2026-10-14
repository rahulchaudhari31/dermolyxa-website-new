import { AlertCircle } from "lucide-react";
import Section from "../ui/Section";

/**
 * Renders a legal page from src/data/legal.js
 */
export default function LegalContent({ page }) {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-muted">
          Last updated: {page.lastUpdated}
        </p>

        {page.placeholder ? (
          <div className="mt-8 flex items-start gap-3 rounded-card border border-accent/40 bg-accent/10 p-5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
            <p className="text-sm font-medium text-accent-600">
              {page.placeholder}
            </p>
          </div>
        ) : null}

        <div className="mt-8 space-y-5">
          {page.sections.map((section, sIndex) => (
            <div key={sIndex} className="space-y-5">
              {section.heading ? (
                <h2 className="text-2xl text-primary">{section.heading}</h2>
              ) : null}
              {section.paragraphs?.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-card border border-line bg-surface-alt p-6">
          <p className="text-sm text-muted">
            Contact DERMOLYXA™ &middot; dermolyxa@gmail.com &middot; 7709739330 /
            7709729330
          </p>
        </div>
      </div>
    </Section>
  );
}
