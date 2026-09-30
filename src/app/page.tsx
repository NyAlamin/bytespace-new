import { Navbar } from "@/components/layout/Navbar";
import { CourseCatalog } from "@/components/sections/CourseCatalog";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <CourseCatalog />
        <LearningPaths />
      </main>
    </div>
  );
}