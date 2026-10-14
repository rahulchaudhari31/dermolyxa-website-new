/**
 * Shared illustrative imagery for education pages (About / Institute /
 * Courses / Admissions).
 *
 * Imagery: high-quality stock placeholders (Pexels) used purely as
 * illustrative dummies for education, training, classroom and laboratory
 * themes. Unsplash hotlinking is blocked for direct embedding, so verified
 * Pexels URLs are used instead — swap freely.
 * None of these depict actual DERMOLYXA students, faculty, facilities,
 * equipment or products.
 */

const pexels = (id, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const educationImages = {
  classroom: {
    src: pexels(5211441, 1200, 800),
    alt: "Illustrative classroom learning session",
  },
  lecture: {
    src: pexels(8618068, 1100, 800),
    alt: "Illustrative lecture and guided training",
  },
  study: {
    src: pexels(9090818, 900, 800),
    alt: "Illustrative focused study",
  },
  teacher: {
    src: pexels(18506736, 1000, 800),
    alt: "Illustrative trainer guiding learners",
  },
  workshop: {
    src: pexels(18999470, 1200, 800),
    alt: "Illustrative professional workshop",
  },
  lab: {
    src: pexels(8533040, 1100, 800),
    alt: "Illustrative laboratory setting",
  },
  research: {
    src: pexels(5726835, 1000, 800),
    alt: "Illustrative research and analysis",
  },
};

export const educationNote =
  "Illustrative stock imagery (education, training, classroom and laboratory themes). Not actual DERMOLYXA students, faculty, facilities or products.";

export const clinicImages = {
  hero: {
    src: pexels(5619453, 1200, 800),
    alt: "Illustrative modern clinic room",
  },
  reception: {
    src: pexels(33812025, 1200, 800),
    alt: "Illustrative clinic reception interior",
  },
  room: {
    src: pexels(7016405, 1100, 800),
    alt: "Illustrative clinical examination room",
  },
  consult: {
    src: pexels(3985333, 1100, 800),
    alt: "Illustrative consultation and skincare",
  },
  hair: {
    src: pexels(3993312, 1000, 800),
    alt: "Illustrative hair care",
  },
  hairRegen: {
    src: pexels(18186520, 1000, 800),
    alt: "Illustrative hair and scalp science",
  },
  skin: {
    src: pexels(4586752, 1000, 800),
    alt: "Illustrative skin treatment",
  },
  aesthetic: {
    src: pexels(7446675, 1000, 800),
    alt: "Illustrative aesthetic care",
  },
  treatment: {
    src: pexels(14438367, 1000, 800),
    alt: "Illustrative aesthetic procedure",
  },
  lab: {
    src: pexels(8533040, 1000, 800),
    alt: "Illustrative laboratory science",
  },
};

export const productImages = {
  skin: {
    src: pexels(6663368, 900, 720),
    alt: "Illustrative skin care research",
  },
  hair: {
    src: pexels(3993312, 900, 720),
    alt: "Illustrative hair care research",
  },
  science: {
    src: pexels(5726835, 900, 720),
    alt: "Illustrative laboratory science",
  },
  lab: {
    src: pexels(8533040, 900, 720),
    alt: "Illustrative product development",
  },
};

export const clinicNote =
  "Illustrative stock imagery (clinic interiors, skin care, hair care and laboratory science themes). Not actual DERMOLYXA patients, facilities, practitioners or products.";
