import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";
import PageTransition from "./PageTransition";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
