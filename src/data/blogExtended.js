/**
 * Blog posts (sample content only, non-medical claims).
 * Only generic, educational placeholder posts are provided.
 */
import { blogCategories } from "./blog";

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const samplePosts = [
  {
    id: "intro-dermolyxa-knowledge-hub",
    title: "Welcome to the Knowledge Hub",
    excerpt:
      "A brief introduction to the DERMOLYXA™ Knowledge Hub and its educational approach.",
    category: "professional-education",
    date: "06 Oct 2026",
    readTime: "4 min read",
    tags: ["overview", "education"],
    author: "DERMOLYXA™ Team",
    featured: true,
    body: [
      "The Knowledge Hub is an educational space focused on general information related to skin, hair and aesthetic science.",
      "Content published here is for informational and educational purposes only and does not constitute medical advice, diagnosis or treatment.",
      "Articles will be added as they are prepared and reviewed to keep information clear, general and responsibly presented.",
    ],
  },
  {
    id: "hair-care-basics",
    title: "Hair Care Basics: A General Guide",
    excerpt:
      "General, non-diagnostic tips about everyday hair care routines and common terminology.",
    category: "hair-science",
    date: "06 Oct 2026",
    readTime: "5 min read",
    tags: ["hair", "care", "basics"],
    author: "DERMOLYXA™ Team",
    body: [
      "Healthy hair routines often focus on gentle cleansing, adequate hydration and protection from excessive heat or harsh products.",
      "Terminology like hair shaft, follicle and scalp environment is explained in general terms without prescribing specific treatments.",
      "Individual needs vary, so it is always best to seek advice from a qualified professional for personal concerns.",
    ],
  },
  {
    id: "skin-barrier-fundamentals",
    title: "Understanding the Skin Barrier",
    excerpt: "An educational overview of the skin barrier and general care principles.",
    category: "skin-science",
    date: "06 Oct 2026",
    readTime: "5 min read",
    tags: ["skin", "barrier", "education"],
    author: "DERMOLYXA™ Team",
    body: [
      "The skin barrier helps maintain moisture and provides a protective function against external factors.",
      "General care principles include avoiding over-cleansing, using mild products and protecting skin from harsh environments.",
      "This article covers general concepts only and is not a substitute for personalised dermatological advice.",
    ],
  },
  {
    id: "myth-vs-fact-aesthetics",
    title: "Aesthetic Science: Myth vs Fact",
    excerpt: "Separating common myths from general facts about aesthetic science.",
    category: "myth-vs-fact",
    date: "06 Oct 2026",
    readTime: "3 min read",
    tags: ["myths", "facts", "aesthetics"],
    author: "DERMOLYXA™ Team",
    body: [
      "Not everything seen online about aesthetic procedures reflects accurate, evidence-informed information.",
      "It is important to distinguish between general educational information and individual suitability for any procedure.",
      "Always verify information with qualified professionals and refer to official sources where possible.",
    ],
  },
  {
    id: "trichology-101",
    title: "Trichology 101: Key Concepts",
    excerpt:
      "An introductory overview of trichology terminology and scope of practice considerations.",
    category: "trichology",
    date: "06 Oct 2026",
    readTime: "4 min read",
    tags: ["trichology", "education"],
    author: "DERMOLYXA™ Team",
    body: [
      "Trichology is the study of hair and scalp conditions from a general scientific and educational perspective.",
      "Scope of practice varies by qualification and jurisdiction; this overview does not grant clinical authority.",
      "Educational content like this aims to build foundational knowledge without making diagnostic claims.",
    ],
  },
];

export const blogPostsExtended = samplePosts.map((post) => ({
  ...post,
  slug: post.slug ?? slugify(post.title),
  categoryLabel:
    blogCategories.find((c) => c.id === post.category)?.title ??
    post.category,
  disclaimer:
    "Sample educational content. This article does not provide medical advice, diagnosis or treatment.",
}));

export const blogFeatured = blogPostsExtended.find((p) => p.featured) ?? blogPostsExtended[0];
