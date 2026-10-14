import PageHero from "../ui/PageHero";

/**
 * Thin wrapper so existing pages keep their API while the visual
 * implementation lives in the reusable <PageHero /> UI component.
 */
export default function PageHeader(props) {
  return <PageHero {...props} />;
}
