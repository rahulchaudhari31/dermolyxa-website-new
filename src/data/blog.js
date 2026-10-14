/**
 * Blog / Knowledge Hub content sourced from https://dermolyxa.com/blog.html
 */

export const blogPage = {
  eyebrow: "Knowledge Hub",
  title: "Science, education & responsible information",
  lede: "Educational content categories prepared for future publication.",
  emptyBody:
    "Evidence-informed educational articles will appear here. Author, published date, updated date and disclaimer will be included with each article.",
};

export const blogCategories = [
  { id: "hair-science", title: "Hair Science" },
  { id: "skin-science", title: "Skin Science" },
  { id: "aesthetic-science", title: "Aesthetic Science" },
  { id: "trichology", title: "Trichology" },
  { id: "cosmetology", title: "Cosmetology" },
  { id: "nutrition-hair-health", title: "Nutrition & Hair Health" },
  { id: "hair-transplant-education", title: "Hair Transplant Education" },
  { id: "skin-care-education", title: "Skin Care Education" },
  { id: "professional-education", title: "Professional Education" },
  { id: "myth-vs-fact", title: "Myth vs Fact" },
].map((category) => ({
  ...category,
  hubTitle: `${category.title}: Knowledge Hub`,
}));

export const blogPosts = [];
