/**
 * About-page structured content.
 *
 * Story text is taken from https://dermolyxa.com/about.html (via site.js).
 * Value items map the brand values to icons; roadmap stages are derived
 * directly from the three published DERMOLYXA divisions (no invented dates,
 * milestones or claims).
 */

import { site } from "./site";

export const aboutStory = {
  eyebrow: "Our story",
  title: "An umbrella brand for Skin, Hair and Aesthetic Science.",
  paragraphs: [
    site.intro,
    "Professional education, clinical care and future science-driven product solutions are brought together under one premium brand, with each division kept clearly defined.",
  ],
  highlight: site.about.highlights,
};

/** Brand values with matching icon keys (resolved in the About page). */
export const aboutValues = [
  { label: "Science", icon: "science" },
  { label: "Education", icon: "education" },
  { label: "Ethics", icon: "ethics" },
  { label: "Innovation", icon: "innovation" },
  { label: "Professionalism", icon: "professionalism" },
  { label: "Patient/Client Safety", icon: "safety" },
];

/**
 * Ecosystem roadmap — the three divisions as connected stages.
 * Uses the published division names, kickers and descriptions.
 */
export const aboutRoadmap = site.divisions.map((division) => ({
  id: division.id,
  index: division.index,
  kicker: division.kicker,
  title: division.name,
  body: division.description,
  badge: division.badge ?? null,
  to: division.cta.to,
}));
