import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";

// The design has one horizontal line at 606px (not 600px). Kept to match Figma.
const HERO_ROWS = [0, 120, 240, 360, 480, 606, 720, 840, 960];

export function Hero() {
  return (
    <section className="relative h-[1024px] w-full overflow-hidden bg-persian-blue-800">
      <div className="relative mx-auto h-full w-[1440px]">
        <GridBackground
          width={1440}
          height={1024}
          rows={HERO_ROWS}
          className="absolute left-0 top-0"
        />

        {/* Lime ring behind the hero photo */}
        <div className="absolute left-[calc(50%-575px)] top-[582px] box-border h-[1149px] w-[1149px] rounded-full border-[320px] border-solid border-electric-lime-500" />

        <div className="absolute left-[calc(50%-600px)] top-[169px] z-10 flex w-[1200px] flex-col items-center gap-[60px]">
          <div className="flex flex-col items-center gap-8">
            <h1 className="w-[935px] text-center font-heading text-[72px] font-semibold leading-[1.2] text-white">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="w-[819px] text-center text-[18px] leading-[1.6] text-shuttle-gray-100">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          <div role="search" className="flex w-[581px] items-center gap-4">
            <label className="flex h-[52px] w-[461px] items-center gap-2 rounded-3xl bg-white pl-6">
              <Search
                size={24}
                strokeWidth={1.75}
                className="shrink-0 text-shuttle-gray-400"
              />
              <span className="sr-only">Search courses</span>
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[18px] leading-[1.6] text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400"
              />
            </label>
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </section>
  );
}