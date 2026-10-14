import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  useDocumentTitle(`Page not found | ${site.shortName}`);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-section text-center">
      <span className="font-heading text-7xl text-accent">404</span>
      <h1 className="mt-6 text-3xl text-primary">Page not found</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The page you are looking for does not exist or may have been moved.
      </p>
      <p className="mt-2 max-w-md text-sm text-muted">
        If you arrived here from a link, you can go back or explore our homepage.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button to="/" variant="primary" size="lg" icon={Home}>
          Back to Home
        </Button>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-pill border border-line px-7 py-3.5 text-base font-medium text-primary transition-colors hover:bg-tint"
        >
          <ArrowLeft className="h-4 w-4" />
          Contact Us
        </Link>
      </div>
    </Container>
  );
}
