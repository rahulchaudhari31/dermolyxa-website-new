import { site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import HeroSection from "../components/sections/home/HeroSection";
import ScienceModeSwitcher from "../components/sections/home/ScienceModeSwitcher";
import MarqueeStrip from "../components/sections/home/MarqueeStrip";
import DivisionsSection from "../components/sections/home/DivisionsSection";
import PhilosophySection from "../components/sections/home/PhilosophySection";
import StatsSection from "../components/sections/home/StatsSection";
import CTABanner from "../components/sections/home/CTABanner";

export default function Home() {
  useDocumentTitle(site.metaTitle);

  return (
    <>
      <HeroSection />
      <ScienceModeSwitcher />
      <MarqueeStrip />
      <DivisionsSection />
      <PhilosophySection />
      <StatsSection />
      <CTABanner />
    </>
  );
}
