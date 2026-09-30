import { CareerGrowth } from "@/components/sections/CareerGrowth";
import { CreatorTools } from "@/components/sections/CreatorTools";
import { GlowBackdrop, type Glow } from "@/components/ui/GlowBackdrop";

const GLOWS: readonly Glow[] = [
  { x: 722, y: 788, size: 1137, color: "blue", alpha: [0.24, 0.0552, 0.0144] },
  { x: -152, y: -466, size: 1137, color: "lime", alpha: [0.4, 0.092, 0.024] },
  { x: -508, y: 183, size: 1137, color: "blue", alpha: [0.16, 0.0368, 0.0096] },
  { x: 811, y: -458, size: 1137, color: "blue", alpha: [0.08, 0.0184, 0.0048] },
  { x: -287, y: 946, size: 672, color: "lime", alpha: [0.6, 0.138, 0.036] },
];

export function GrowthSection() {
  return (
    <section className="relative h-[1460px] w-full overflow-hidden bg-[#fafafa]">
      <div className="relative mx-auto h-full w-[1440px]">
        <GlowBackdrop glows={GLOWS} />
        <CareerGrowth />
        <CreatorTools />
      </div>
    </section>
  );
}