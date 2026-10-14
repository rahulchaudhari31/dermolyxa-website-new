import { site } from "../data/site";
import { legalPages } from "../data/legal";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageHeader from "../components/sections/PageHeader";
import LegalContent from "../components/sections/LegalContent";

export default function PrivacyPolicy() {
  const page = legalPages["privacy-policy"];
  useDocumentTitle(`${page.title} | ${site.shortName}`);

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        breadcrumb={page.title}
        title={page.title}
        lede={page.lede}
      />
      <LegalContent page={page} />
    </>
  );
}
