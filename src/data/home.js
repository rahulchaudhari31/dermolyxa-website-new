/**
 * Home page media + interactive content.
 *
 * Imagery: high-quality stock placeholders (Pexels) used purely as
 * illustrative dummies. Unsplash hotlinking is blocked for direct
 * embedding, so verified Pexels URLs are used instead — swap freely.
 * None of these depict actual DERMOLYXA patients, facilities or products.
 */

const pexels = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const homeImages = {
  hero: {
    main: {
      src: pexels(3985329, 620, 760),
      alt: "Illustrative skincare treatment",
    },
    clinic: {
      src: pexels(4586752, 640, 460),
      alt: "Illustrative aesthetic clinic treatment",
    },
    lab: {
      src: pexels(8533040, 640, 460),
      alt: "Illustrative laboratory research",
    },
    hair: {
      src: pexels(3993312, 620, 440),
      alt: "Illustrative hair care",
    },
  },
  science: {
    skin: { src: pexels(6663374, 960, 680), alt: "Illustrative skin science" },
    hair: { src: pexels(18186520, 960, 680), alt: "Illustrative hair science" },
    science: {
      src: pexels(5726835, 960, 680),
      alt: "Illustrative aesthetic science",
    },
  },
  divisions: {
    institute: {
      src: pexels(9243726, 900, 560),
      alt: "Illustrative professional education",
    },
    clinic: {
      src: pexels(7446659, 900, 560),
      alt: "Illustrative clinical care",
    },
    products: {
      src: pexels(7446675, 900, 560),
      alt: "Illustrative skin & hair solutions",
    },
  },
  philosophy: {
    src: pexels(16131214, 820, 940),
    alt: "Illustrative professional care",
  },
};

/**
 * Interactive "Science Modes" — educational, non-diagnostic descriptions.
 */
export const scienceModes = [
  {
    id: "skin",
    label: "Skin Mode",
    icon: "skin",
    title: "Skin Science",
    description:
      "Explore the structure and function of skin and the science behind healthy skin and evidence-informed skin care.",
    points: [
      "Skin structure & function",
      "Barrier and hydration basics",
      "Evidence-informed skin care",
    ],
    image: homeImages.science.skin,
  },
  {
    id: "hair",
    label: "Hair Mode",
    icon: "hair",
    title: "Hair Science",
    description:
      "Learn about hair and scalp biology, the hair growth cycle and the principles behind professional hair care.",
    points: [
      "Hair growth cycle",
      "Scalp & follicle health",
      "Trichology fundamentals",
    ],
    image: homeImages.science.hair,
  },
  {
    id: "science",
    label: "Science Mode",
    icon: "science",
    title: "Aesthetic Science",
    description:
      "Discover the scientific principles that connect skin, hair and aesthetic education with responsible clinical care.",
    points: [
      "Evidence-informed education",
      "Responsible clinical practice",
      "Continuous professional learning",
    ],
    image: homeImages.science.science,
  },
];

export const scienceNote =
  "Educational illustration only. Not a diagnostic tool or medical advice.";
