/**
 * Clinic service content sourced from https://dermolyxa.com/clinic.html
 * Services are considered individually following appropriate assessment.
 */

export const clinicPage = {
  eyebrow: "DERMOLYXA CLINIC™",
  title: "Professional Skin & Hair Care",
  lede: "Explore our hair, skin and aesthetic services, subject to individual clinical assessment.",
  ctaLabel: "Explore Services",
  bookLabel: "Book Consultation",
  imageDisclaimer:
    "Illustrative imagery; not actual DERMOLYXA patients, facilities or products.",
  notice:
    "Services are provided subject to clinical assessment, eligibility and applicable professional/regulatory requirements. No procedure is presented as suitable for every person.",
  sectionTitle: "Advanced Skin • Hair • Aesthetic Care",
  sectionLede:
    "Services are considered individually following appropriate assessment.",
};

export const clinicGroups = [
  {
    id: "hair",
    title: "Hair & Scalp Services",
    icon: "hair",
    services: [
      "Hair Transplant",
      "Hairline Hair Transplant",
      "PRP",
      "GFC",
      "PRFM",
      "Hair Regeneration",
      "Hair Growth Consultation",
      "Microneedling Hair",
      "Beard & Eyebrow Transplant",
      "Body Hair Transplant",
    ],
  },
  {
    id: "skin-aesthetic",
    title: "Skin & Aesthetic Services",
    icon: "sparkles",
    services: [
      "Skin PRP",
      "Skin GFC",
      "Skin PRFM",
      "Microneedling",
      "Skin HydraFacial",
      "Wart Removal",
      "Skin Rejuvenation",
      "Facial Rejuvenation",
      "Skin Brightening & Tightening",
      "Non-Surgical Body Contouring",
    ],
  },
  {
    id: "regenerative",
    title: "Regenerative Aesthetic Services",
    icon: "activity",
    services: ["Exosomes", "SVF", "Regenerative aesthetic services"],
  },
];

/**
 * Flat list of every clinic service, used by the enquiry form selector.
 */
export const clinicServiceOptions = clinicGroups.flatMap((group) => [
  group.title.replace(" Services", ""),
  ...group.services,
]);

/**
 * Clinic service categories, mapped from the DERMOLYXA CLINIC™ division list
 * (Hair Care & Transplant, Hair Regeneration, Skin Treatments, Aesthetic Care,
 * Regenerative Aesthetic Services). Service names are exact site content.
 */
export const clinicCategories = [
  {
    id: "hair-care-transplant",
    title: "Hair Care & Transplant",
    kicker: "Hair • Scalp",
    icon: "scissors",
    image: "hair",
    services: [
      { name: "Hair Transplant", icon: "transplant" },
      { name: "Hairline Hair Transplant", icon: "transplant" },
      { name: "Beard & Eyebrow Transplant", icon: "transplant" },
      { name: "Body Hair Transplant", icon: "transplant" },
      { name: "PRP", icon: "prp" },
      { name: "GFC", icon: "gfc" },
      { name: "PRFM", icon: "prfm" },
      { name: "Microneedling Hair", icon: "microneedling" },
    ],
  },
  {
    id: "hair-regeneration",
    title: "Hair Regeneration",
    kicker: "Hair • Growth",
    icon: "sprout",
    image: "hairRegen",
    services: [
      { name: "Hair Regeneration", icon: "regeneration" },
      { name: "Hair Growth Consultation", icon: "consult" },
    ],
  },
  {
    id: "skin-treatments",
    title: "Skin Treatments",
    kicker: "Skin",
    icon: "droplets",
    image: "skin",
    services: [
      { name: "Skin PRP", icon: "prp" },
      { name: "Skin GFC", icon: "gfc" },
      { name: "Skin PRFM", icon: "prfm" },
      { name: "Microneedling", icon: "microneedling" },
      { name: "Skin HydraFacial", icon: "hydrafacial" },
      { name: "Wart Removal", icon: "removal" },
    ],
  },
  {
    id: "aesthetic-care",
    title: "Aesthetic Care",
    kicker: "Skin • Aesthetic",
    icon: "sparkles",
    image: "aesthetic",
    services: [
      { name: "Skin Rejuvenation", icon: "sparkles" },
      { name: "Facial Rejuvenation", icon: "sparkles" },
      { name: "Skin Brightening & Tightening", icon: "sparkles" },
      { name: "Non-Surgical Body Contouring", icon: "contour" },
    ],
  },
  {
    id: "regenerative",
    title: "Regenerative Aesthetic Services",
    kicker: "Regenerative",
    icon: "dna",
    image: "lab",
    services: [
      { name: "Exosomes", icon: "dna" },
      { name: "SVF", icon: "dna" },
      { name: "Regenerative aesthetic services", icon: "dna" },
    ],
  },
];

/** Short, site-derived description shown on every service card. */
export const clinicServiceNote =
  "Services are considered individually following appropriate assessment.";

/**
 * "Your consultation journey" — a general outline built from published
 * clinic language (booking, individual assessment, eligibility, next steps).
 */
export const clinicJourney = {
  eyebrow: "Your consultation journey",
  title: "How a clinic consultation works.",
  lede: "Every service begins with an individual assessment before anything is recommended.",
  steps: [
    {
      step: "01",
      title: "Book Consultation",
      body: "Request an appointment by phone, WhatsApp or the booking form.",
    },
    {
      step: "02",
      title: "Individual Assessment",
      body: "Services are considered individually following appropriate assessment.",
    },
    {
      step: "03",
      title: "Eligibility & Suitability",
      body: "Options are discussed subject to clinical assessment and eligibility. No procedure is presented as suitable for every person.",
    },
    {
      step: "04",
      title: "Guidance on Next Steps",
      body: "Suitable options and next steps are explained, subject to applicable professional and regulatory requirements.",
    },
  ],
};

/**
 * "Before you visit" — no specific pre-visit requirements are published on the
 * site, so guidance is intentionally generic with a clearly marked placeholder.
 */
export const beforeYouVisit = {
  eyebrow: "Before you visit",
  title: "What to expect and bring.",
  intro:
    "Your visit begins with an individual assessment. Specific pre-visit instructions will be shared once your consultation is confirmed.",
  items: [
    "Share your main skin, hair or aesthetic concerns and goals.",
    "Mention any relevant medical history or current medications during assessment.",
    "Book Consultation by phone, WhatsApp or the booking form.",
  ],
  placeholder: "[DETAILED PRE-VISIT GUIDANCE TO BE CONFIRMED]",
  contactsLabel: "Book by phone or WhatsApp",
};

export const clinicDisclaimer = {
  eyebrow: "Important",
  text: "Services are provided subject to clinical assessment, eligibility and applicable professional/regulatory requirements. No procedure is presented as suitable for every person. Information on this page is not medical advice.",
};
