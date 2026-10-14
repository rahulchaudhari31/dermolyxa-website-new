import { Sparkles } from "lucide-react";
import { site } from "../data/site";
import {
  productCategories,
  productRoadmap,
  productTeasers,
  productsPage,
} from "../data/products";
import { productImages } from "../data/images";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import ProductTeaserCard from "../components/products/ProductTeaserCard";
import NotifyForm from "../components/products/NotifyForm";
import DevelopmentRoadmap from "../components/products/DevelopmentRoadmap";

export default function Products() {
  useDocumentTitle(`Products | ${site.shortName}`);

  return (
    <>
      <PageHeader
        eyebrow={productsPage.eyebrow}
        breadcrumb="Products"
        title={productsPage.title}
        lede={productsPage.lede}
        image={productImages.science.src}
        imageAlt={productImages.science.alt}
      />

      {/* Coming soon band */}
      <Section>
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-card border border-line bg-gradient-to-br from-primary to-primary-500 px-8 py-16 text-center text-white shadow-card sm:px-14">
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-accent">
              <Sparkles className="h-8 w-8" />
            </span>

            <h2 className="mt-7 text-3xl text-white">
              {productsPage.sectionTitle}
            </h2>

            <span className="mt-5 inline-flex items-center rounded-pill bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {productsPage.badge}
            </span>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/75">
              {productsPage.body}
            </p>

            <div className="mt-9">
              <Button to="/contact" variant="accent" size="lg">
                {productsPage.ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Product-category teaser grid */}
      <Section alt>
        <SectionHeading
          eyebrow={productTeasers.eyebrow}
          title={productTeasers.title}
          lede={productTeasers.lede}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {productCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.1} className="h-full">
              <ProductTeaserCard
                category={category}
                image={productImages[category.image]}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Notify me */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Product updates"
              title="Follow the development."
              lede="Register your interest and we'll share product updates as they are finalised — no product is available for purchase yet."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <NotifyForm />
          </Reveal>
        </div>
      </Section>

      {/* Development roadmap */}
      <Section alt>
        <SectionHeading
          eyebrow={productRoadmap.eyebrow}
          title={productRoadmap.title}
          lede={productRoadmap.lede}
        />
        <div className="mt-10 max-w-3xl">
          <DevelopmentRoadmap />
        </div>
      </Section>

      <div className="pb-section">
        <Reveal>
          <p className="mx-auto max-w-6xl px-5 text-center text-xs text-muted/80 sm:px-8">
            {productsPage.imageDisclaimer}
          </p>
        </Reveal>
      </div>
    </>
  );
}
