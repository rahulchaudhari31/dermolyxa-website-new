/**
 * Course content sourced from https://dermolyxa.com/courses.html
 * Fees are indicative private-institute marketing fees and are NOT official
 * MSBSVET fees. Eligibility is marked as a placeholder pending confirmation.
 */

export const coursesPage = {
  eyebrow: "Professional education",
  title: "DERMOLYXA INSTITUTE™ Courses",
  lede: "Explore proposed private institute programs and indicative fees.",
  feeNotice:
    "Indicative DERMOLYXA Institute program fees. Final fees, eligibility, duration and course availability may vary by batch and applicable approvals.",
  feeDisclaimer:
    "These are proposed/private institute marketing fees, NOT official MSBSVET fees.",
  defaultDescription:
    "Structured learning with theory, guided skill development and assessment.",
  eligibilityPlaceholder: "Eligibility: [TO BE CONFIRMED]",
  ctaLabel: "Course Details",
  searchPlaceholder: "Search programs…",
  resultsLabel: "programs",
  emptyTitle: "No programs match your search.",
  emptyBody:
    "Try a different keyword or clear the filters to see all proposed programs.",
  sortOptions: [
    { id: "default", label: "Recommended" },
    { id: "fee-asc", label: "Fee: Low to High" },
    { id: "fee-desc", label: "Fee: High to Low" },
    { id: "duration-asc", label: "Duration: Short to Long" },
    { id: "duration-desc", label: "Duration: Long to Short" },
    { id: "title-asc", label: "Title: A to Z" },
  ],
  detail: {
    overviewLabel: "Overview",
    whoForLabel: "Who it's for",
    curriculumLabel: "Curriculum",
    durationLabel: "Duration",
    feeLabel: "Indicative Fee",
    eligibilityLabel: "Eligibility",
    enquiryLabel: "Enquire for this course",
    whoForPlaceholder:
      "This program is intended for suitable candidates; eligibility and suitability are confirmed during counselling for each batch.",
    curriculumPlaceholder:
      "Module-by-module curriculum will be published when finalised. Contact us for the current program outline.",
    curriculumHeading: "Program curriculum",
    workshopsEmpty:
      "Workshops and masterclasses are part of the proposed DERMOLYXA Institute offering. No scheduled sessions are listed yet.",
  },
};

/**
 * Proposed program categories (from the DERMOLYXA Institute division listing).
 */
export const programCategories = [
  { id: "certificate", label: "Certificate", full: "Certificate Courses" },
  { id: "diploma", label: "Diploma", full: "Diploma Programs" },
  { id: "advanced", label: "Advanced", full: "Advanced Programs" },
  {
    id: "fellowship",
    label: "Fellowship",
    full: "Professional Fellowship Programs",
  },
  {
    id: "workshops",
    label: "Workshops & Masterclasses",
    full: "Workshops & Masterclasses",
  },
];

export const courses = [
  {
    id: "certificate-skin-hair-science",
    category: "Professional education",
    programCategory: "certificate",
    title: "Certificate in Skin & Hair Science",
    duration: "1 Month",
    fee: "₹9,999",
  },
  {
    id: "certificate-trichology-basic",
    category: "Professional education",
    programCategory: "certificate",
    title: "Certificate in Trichology – Basic",
    duration: "1 Month",
    fee: "₹14,999",
  },
  {
    id: "certificate-advanced-trichology",
    category: "Professional education",
    programCategory: "certificate",
    title: "Certificate in Advanced Trichology",
    duration: "2 Months",
    fee: "₹24,999",
  },
  {
    id: "hair-transplant-assistance",
    category: "Professional education",
    programCategory: "certificate",
    title: "Hair Transplant Assistance Program",
    duration: "1 Month",
    fee: "₹19,999",
  },
  {
    id: "prp-gfc-hair-therapy",
    category: "Professional education",
    programCategory: "certificate",
    title: "PRP & GFC Hair Therapy – Assistant Training",
    duration: "15 Days",
    fee: "₹14,999",
  },
  {
    id: "certificate-aesthetic-skin-care",
    category: "Professional education",
    programCategory: "certificate",
    title: "Certificate in Aesthetic Skin Care",
    duration: "1 Month",
    fee: "₹19,999",
  },
  {
    id: "certificate-clinical-cosmetology-foundation",
    category: "Professional education",
    programCategory: "certificate",
    title: "Certificate in Clinical Cosmetology – Foundation",
    duration: "3 Months",
    fee: "₹29,999",
  },
  {
    id: "advanced-skin-hair-care",
    category: "Professional education",
    programCategory: "advanced",
    title: "Advanced Skin & Hair Care Program",
    duration: "3 Months",
    fee: "₹39,999",
  },
  {
    id: "diploma-clinical-cosmetology",
    category: "Professional education",
    programCategory: "diploma",
    title: "Diploma in Clinical Cosmetology",
    duration: "6 Months",
    fee: "₹59,999",
  },
  {
    id: "diploma-trichology-hair-science",
    category: "Professional education",
    programCategory: "diploma",
    title: "Diploma in Trichology & Hair Science",
    duration: "6 Months",
    fee: "₹69,999",
  },
  {
    id: "advanced-diploma-skin-hair-aesthetic",
    category: "Professional education",
    programCategory: "advanced",
    title: "Advanced Diploma in Skin, Hair & Aesthetic Science",
    duration: "12 Months",
    fee: "₹99,999",
  },
  {
    id: "fellowship-hair-skin-aesthetic",
    category: "Professional education",
    programCategory: "fellowship",
    title: "Professional Fellowship in Hair, Skin & Aesthetic Science",
    duration: "6 Months",
    fee: "₹1,49,999",
  },
].map((course) => ({
  ...course,
  description: coursesPage.defaultDescription,
  eligibility: "[TO BE CONFIRMED]",
}));

/** Returns the proposed programs grouped under a category id. */
export function coursesByCategory(categoryId) {
  return courses.filter((course) => course.programCategory === categoryId);
}

export const instituteInfo = {
  eyebrow: "DERMOLYXA INSTITUTE™",
  title: "Professional Education in Skin • Hair • Aesthetic Science",
  lede: "Structured, science-based professional learning and skill development.",
  pillars: [
    {
      title: "Structured Learning",
      body: "Clear modules, guided progression and transparent program information.",
    },
    {
      title: "Expert-Led Training",
      body: "Faculty information is published only when officially provided and verified.",
    },
    {
      title: "Practical Development",
      body: "Case-based learning and practical skill modules aligned with learner eligibility and scope.",
    },
  ],
  journey: {
    eyebrow: "Learning journey",
    title: "How professional learning builds, step by step.",
    lede: "Every DERMOLYXA Institute program is designed around structured progression and practical development.",
  },
  programs: {
    eyebrow: "Program categories",
    title: "Explore programs by category.",
    lede: "Proposed institute offerings grouped as certificate, diploma, advanced, fellowship and workshop formats.",
  },
  development: {
    title: "Professional Skill Development",
    body: "DERMOLYXA INSTITUTE™ is developing its professional skill-development ecosystem in accordance with applicable regulatory and affiliation requirements. Course recognition, affiliation and certification status will be displayed transparently once officially approved.",
  },
  notices: [
    "Training provided by DERMOLYXA INSTITUTE™ does not by itself confer a medical licence or authorization to practise any regulated healthcare profession.",
    "Eligibility to perform medical or clinical procedures depends on the learner's existing professional qualification, registration, applicable law and scope of practice.",
  ],
};

export const admissionsSteps = [
  {
    step: "01",
    title: "Choose Your Course",
    body: "Review program information and indicative fees.",
  },
  {
    step: "02",
    title: "Submit Enquiry",
    body: "Share basic contact and course-interest information.",
  },
  {
    step: "03",
    title: "Counselling / Course Discussion",
    body: "Discuss program structure and expectations.",
  },
  {
    step: "04",
    title: "Eligibility Verification",
    body: "Eligibility is checked before admission.",
  },
  {
    step: "05",
    title: "Admission Confirmation",
    body: "Receive confirmed batch and fee information.",
  },
  {
    step: "06",
    title: "Training",
    body: "Participate in scheduled learning activities.",
  },
  {
    step: "07",
    title: "Assessment",
    body: "Complete applicable assessment requirements.",
  },
  {
    step: "08",
    title: "Certificate / Program Completion",
    body: "Completion is subject to program requirements.",
  },
];

export const admissionsPage = {
  eyebrow: "Admissions",
  title: "Admissions Open / Enquiry",
  lede: "A transparent step-by-step admission enquiry process.",
  subLede: "Your path to a program.",
  ctaLabel: "Start Your Enquiry",
  notice:
    "No employment, income, medical practice right or statutory recognition is guaranteed by admission or completion.",
  processEyebrow: "Admission process",
  processTitle: "Eight transparent steps.",
  eligibility: {
    eyebrow: "Eligibility",
    title: "Eligibility is confirmed before admission.",
    body: "Eligibility varies by program and is checked before admission. Requirements are confirmed for each batch during counselling.",
    points: [
      "Program-wise eligibility is confirmed for each batch.",
      "Verification is completed before admission is confirmed.",
      "Conditions of a learner's own qualification and registration always apply.",
    ],
    placeholder: "[TO BE CONFIRMED]",
  },
  faqs: {
    eyebrow: "Admissions FAQ",
    title: "Common admissions questions.",
    lede: "Answers to questions frequently asked during the admission enquiry process.",
    questions: [
      "Who can apply?",
      "How do I enquire?",
      "Are courses government recognized?",
      "What is the course duration?",
      "What is the fee?",
      "Do courses provide a medical licence?",
    ],
  },
};
