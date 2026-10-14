/**
 * Products content sourced from https://dermolyxa.com/products.html
 */

export const productsPage = {
  eyebrow: "DERMOLYXA PRODUCTS™",
  title: "Science-Driven Solutions",
  lede: "New-generation skin and hair solutions are under development.",
  sectionTitle: "Science-Driven Skin & Hair Solutions",
  badge: "Coming Soon",
  body: "New-generation solutions are under development. Product names, ingredients, claims, prices, licences and certifications will be published only when finalized and factually supported.",
  ctaLabel: "Get Product Updates",
  imageDisclaimer:
    "Illustrative imagery; not actual DERMOLYXA patients, facilities or products.",
};

/**
 * Product-category teasers. Categories are limited to the two solution areas
 * named on the site (skin and hair); no product names, ingredients or claims
 * are invented.
 */
export const productCategories = [
  {
    id: "skin",
    title: "Skin Solutions",
    image: "skin",
    body: "New-generation skin solutions are under development.",
  },
  {
    id: "hair",
    title: "Hair Solutions",
    image: "hair",
    body: "New-generation hair solutions are under development.",
  },
];

export const productTeasers = {
  eyebrow: "What's coming",
  title: "Two solution areas in development.",
  lede: "A first look at the direction of DERMOLYXA PRODUCTS™ — details will be published only when finalized.",
  previewLabel: "Preview",
};

/**
 * Development roadmap visual. Stages are a generic development outline only;
 * all product details, timing and certifications are explicitly pending
 * ("[TO BE CONFIRMED]"). No specific percentages or dates are claimed.
 */
export const productRoadmap = {
  eyebrow: "Development status",
  title: "Building responsibly, step by step.",
  lede: "Product names, ingredients, claims, prices, licences and certifications will be published only when finalized and factually supported.",
  inProgressLabel: "In development",
  pendingLabel: "Pending",
  stages: [
    {
      id: "development",
      title: "Research & Development",
      status: "active",
      body: "New-generation skin and hair solutions are under development.",
    },
    {
      id: "finalisation",
      title: "Finalisation",
      status: "pending",
      body: "Naming, formulation details and documentation.",
    },
    {
      id: "publication",
      title: "Publication & Launch",
      status: "pending",
      body: "Claims, certifications and prices published once verified.",
    },
  ],
  placeholder: "[TIMELINE TO BE CONFIRMED]",
};

export const notifyForm = {
  title: "Be the first to know.",
  body: "Register your interest and we'll share product updates as they are finalised.",
  emailLabel: "Email address",
  interestLabel: "Interested in",
  interestOptions: ["Skin solutions", "Hair solutions", "Both"],
  consent: "I agree to be contacted about DERMOLYXA PRODUCTS™ updates.",
  submitLabel: "Notify me",
  emailPlaceholder: "you@example.com",
  invalidEmail: "Please enter a valid email address.",
  requiredConsent: "Please confirm you agree to be contacted.",
  successTitle: "You're on the list.",
  successBody:
    "Thanks for your interest. This website does not store submissions automatically yet — we'll share updates as soon as they are published.",
};
