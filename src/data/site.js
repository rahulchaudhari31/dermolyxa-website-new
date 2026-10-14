/**
 * Central site-wide content.
 * All text is sourced from https://dermolyxa.com/ (public pages).
 * Missing information is represented with clearly marked placeholders.
 */

export const site = {
  name: "DERMOLYXA™",
  shortName: "DERMOLYXA",
  tagline: "Skin • Hair • Aesthetic Institute, Clinic & Products",
  motto: "Science. Education. Responsible care.",
  ribbon: "SKIN • HAIR • AESTHETIC",
  metaTitle:
    "DERMOLYXA™ | Skin, Hair & Aesthetic Institute, Clinic & Products",
  metaDescription:
    "DERMOLYXA™ is an umbrella brand focused on Skin, Hair and Aesthetic Science — bringing together professional education, clinical care and future science-driven product solutions.",
  intro:
    "DERMOLYXA™ is an umbrella brand focused on Skin, Hair and Aesthetic Science, bringing together professional education, clinical care and future science-driven product solutions.",

  hero: {
    eyebrow: "SKIN • HAIR • AESTHETIC",
    title: "Where Science Meets Aesthetic Excellence",
    subtitle:
      "Discover professional education, clinical care and science-driven solutions under one premium brand.",
    banner:
      "DERMOLYXA™ · SKIN • HAIR • AESTHETIC — Where Science Meets Aesthetic Excellence. Professional education, advanced clinical care and science-driven skin & hair solutions under one premium brand.",
    actions: [
      { label: "Explore Institute", to: "/institute" },
      { label: "Explore Clinic", to: "/clinic" },
      { label: "Explore Products", to: "/products" },
    ],
    imageDisclaimer:
      "Illustrative imagery; not actual DERMOLYXA patients, facilities or products.",
  },

  marquee: [
    "SKIN SCIENCE",
    "HAIR SCIENCE",
    "AESTHETIC SCIENCE",
    "EDUCATION",
    "CLINICAL CARE",
  ],

  divisionsIntro:
    "One brand · Three divisions — A connected ecosystem for education, care and future solutions.",

  divisions: [
    {
      id: "institute",
      index: "01",
      name: "DERMOLYXA INSTITUTE™",
      kicker: "Professional Education & Skill Development",
      description:
        "A connected ecosystem for professional education and skill development in skin, hair and aesthetic science.",
      items: [
        "Certificate Courses",
        "Diploma Programs",
        "Advanced Programs",
        "Professional Fellowship Programs",
        "Workshops & Masterclasses",
      ],
      cta: { label: "View Courses", to: "/courses" },
    },
    {
      id: "clinic",
      index: "02",
      name: "DERMOLYXA CLINIC™",
      kicker: "Skin • Hair • Aesthetic Care",
      description:
        "Professional skin, hair and aesthetic care, considered individually following appropriate assessment.",
      items: [
        "Hair Care & Transplant",
        "Hair Regeneration",
        "Skin Treatments",
        "Aesthetic Care",
        "Regenerative Aesthetic Services",
      ],
      cta: { label: "Explore Clinic", to: "/clinic" },
    },
    {
      id: "products",
      index: "03",
      name: "DERMOLYXA PRODUCTS™",
      kicker: "Science-Driven Skin & Hair Solutions",
      description:
        "New-generation skin and hair solutions are under development.",
      badge: "Coming Soon",
      items: [],
      cta: { label: "Explore Products", to: "/products" },
    },
  ],

  philosophy: {
    eyebrow: "Our philosophy",
    title: "Premium in appearance. Responsible in substance.",
    body: "DERMOLYXA™ brings together professional education, clinical care and future science-driven product solutions while keeping each division clearly defined.",
    note: "Approval / affiliation subject to applicable regulatory requirements. Training does not by itself confer a medical licence or authorization to practise any regulated healthcare profession.",
  },

  stats: [
    { value: "12", label: "Proposed institute programs" },
    { value: "3", label: "Distinct brand divisions" },
    { value: "1", label: "Unified DERMOLYXA identity" },
  ],

  about: {
    eyebrow: "About",
    title: "About DERMOLYXA™",
    lede: "An umbrella brand focused on Skin, Hair and Aesthetic Science.",
    highlights: "One identity. Three focused divisions.",
    vision: {
      title: "Vision",
      body: "To build a trusted ecosystem combining scientific education, professional skill development and advanced skin & hair care.",
    },
    mission: {
      title: "Mission",
      body: "To promote evidence-informed education, responsible clinical practice and high-quality skin and hair solutions.",
    },
    values: [
      "Science",
      "Education",
      "Ethics",
      "Innovation",
      "Professionalism",
      "Patient/Client Safety",
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Start a DERMOLYXA enquiry",
    lede: "Institute, Clinic and Products enquiries are routed clearly.",
    phone1: "7709739330",
    phone2: "7709729330",
    email: "dermolyxa@gmail.com",
    website: "www.dermolyxa.com",
    instagram: "@dermolyxa",
    instagramUrl: "https://www.instagram.com/dermolyxa",
    whatsapp: "https://wa.me/917709739330",
    whatsappNumber: "wa.me/917709739330",
    address: "[ADDRESS TO BE UPDATED]",
  },

  enquiries: {
    title: "Enquire Now",
    interestOptions: ["Institute", "Clinic", "Products"],
    consent: "I agree to be contacted regarding course/service information.",
    submitLabel: "Send Enquiry",
    fields: {
      name: "Full Name",
      mobile: "Mobile Number",
      email: "Email",
      city: "City",
      qualification: "Highest Qualification",
      interestedIn: "Interested In",
      courseService: "Course / Service",
      batch: "Preferred Batch",
      message: "Message",
    },
  },

  legal: {
    lastUpdated: "06 October 2026",
  },

  footer: {
    divisionLabel: "ADVANCED REGENERATIVE & AESTHETIC SCIENCE",
    explore: [
      { label: "Institute", to: "/institute" },
      { label: "Courses", to: "/courses" },
      { label: "Admissions", to: "/admissions" },
      { label: "Clinic", to: "/clinic" },
      { label: "Products", to: "/products" },
      { label: "FAQ", to: "/faq" },
    ],
    legalLinks: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
    divisions: [
      {
        label: "DERMOLYXA INSTITUTE™",
        note: "Professional education & skill development",
        to: "/institute",
      },
      {
        label: "DERMOLYXA CLINIC™",
        note: "Skin • Hair • Aesthetic care",
        to: "/clinic",
      },
      {
        label: "DERMOLYXA PRODUCTS™",
        note: "Science-driven solutions · Coming Soon",
        to: "/products",
      },
    ],
    callLabel: "Call Now",
    whatsappLabel: "WhatsApp",
    enquireLabel: "Enquire",
  },

  disclaimer: {
    approval: "Approval / affiliation subject to applicable regulatory requirements.",
    training:
      "Training does not by itself confer a medical licence or authorization to practise any regulated healthcare profession.",
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Institute", to: "/institute" },
  { label: "Courses", to: "/courses" },
  { label: "Clinic", to: "/clinic" },
  { label: "Products", to: "/products" },
  { label: "Faculty", to: "/faculty" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

/**
 * Primary navigation with optional desktop hover dropdowns.
 */
export const navMenu = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Institute",
    to: "/institute",
    children: [
      { label: "Institute Overview", to: "/institute", description: "Professional education & skill development" },
      { label: "Courses", to: "/courses", description: "Proposed programs & indicative fees" },
      { label: "Admissions", to: "/admissions", description: "Step-by-step enquiry process" },
      { label: "Faculty", to: "/faculty", description: "Faculty / expert panel" },
    ],
  },
  { label: "Courses", to: "/courses" },
  {
    label: "Clinic",
    to: "/clinic",
    children: [
      { label: "Clinic Overview", to: "/clinic", description: "Skin • Hair • Aesthetic care" },
      { label: "Hair & Scalp Services", to: "/clinic", description: "Transplant, regeneration & consultation" },
      { label: "Skin & Aesthetic Services", to: "/clinic", description: "Rejuvenation, HydraFacial & more" },
      { label: "Book Consultation", to: "/contact", description: "Subject to clinical assessment" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Products Overview", to: "/products", description: "Science-driven skin & hair solutions" },
      { label: "Coming Soon", to: "/products", description: "New-generation solutions in development" },
      { label: "Get Product Updates", to: "/contact", description: "Register your interest" },
    ],
  },
  { label: "Faculty", to: "/faculty" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const telLinks = [
  `tel:+91${site.contact.phone1}`,
  `tel:+91${site.contact.phone2}`,
];
