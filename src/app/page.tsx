import { Navbar } from "@/components/layout/Navbar";
import { CourseCatalog } from "@/components/sections/CourseCatalog";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <CourseCatalog />
        <LearningPaths />
        <GrowthSection />
        <CtaBanner />
        <Testimonials />
      </main>
    </div>
  );
}