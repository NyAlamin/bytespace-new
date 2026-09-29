import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CategoryInfoCard } from "@/components/ui/CategoryInfoCard";
import { GridBackground } from "@/components/ui/GridBackground";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";
import { STUDENT_AVATARS } from "@/data/students";

// The design has one horizontal line at 606px (not 600px). Kept to match Figma.
const HERO_ROWS = [0, 120, 240, 360, 480, 606, 720, 840, 960];

type CenteredShape = {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type EdgeShape = {
  src: string;
  side: "left" | "right";
  offset: number;
  y: number;
  width: number;
  height: number;
};

// Positions are the visible bounds of each shape in the 1440x1024 design.
// These stay with the centered 1440px content.
const CENTERED_SHAPES: readonly CenteredShape[] = [
  { src: "/images/shapes/shape-squiggle-white.png", x: 216, y: 506, width: 114, height: 122 },
  { src: "/images/shapes/shape-cone-white.png", x: 1132, y: 486, width: 124, height: 137 },
  { src: "/images/shapes/shape-squiggle-white.png", x: 1196, y: 710, width: 190, height: 250 },
  { src: "/images/shapes/shape-torus-white.png", x: 68, y: 742, width: 238, height: 218 },
];

// These touch the screen edges in the design, so they stay attached to the
// screen edges on wider viewports.
const EDGE_SHAPES: readonly EdgeShape[] = [
  { src: "/images/shapes/shape-squiggle-lime.png", side: "left", offset: -6, y: 286, width: 196, height: 268 },
  { src: "/images/shapes/shape-cylinder-lime.png", side: "right", offset: 0, y: 256, width: 164, height: 299 },
];

const HERO_MAN_SHADOW = [
  "drop-shadow(51.0381px 72.9116px 72px rgba(0, 0, 0, 0.13))",
  "drop-shadow(37.1223px 53.0318px 56px rgba(0, 0, 0, 0.105219))",
  "drop-shadow(25.8381px 36.9115px 36px rgba(0, 0, 0, 0.1))",
  "drop-shadow(16.9463px 24.2089px 24px rgba(0, 0, 0, 0.09))",
  "drop-shadow(10.2076px 14.5823px 16.0875px rgba(0, 0, 0, 0.08))",
  "drop-shadow(5.38293px 7.6899px 9.57129px rgba(0, 0, 0, 0.07))",
  "drop-shadow(2.23292px 3.18988px 5.72344px rgba(0, 0, 0, 0.06))",
  "drop-shadow(0.518356px 0.740509px 3.03574px rgba(0, 0, 0, 0.04))",
].join(" ");

export function Hero() {
  return (
    <section className="relative h-[1024px] w-full overflow-hidden bg-persian-blue-800">
      {/* Shapes attached to the screen edges */}
      {EDGE_SHAPES.map((shape) => (
        <div
          key={shape.src}
          aria-hidden="true"
          className="absolute z-[5]"
          style={{
            [shape.side]: shape.offset,
            top: shape.y,
            width: shape.width,
            height: shape.height,
          }}
        >
          <Image
            src={shape.src}
            alt=""
            fill
            sizes={`${shape.width}px`}
            className="object-contain"
          />
        </div>
      ))}

      <div className="relative mx-auto h-full w-[1440px]">
        <GridBackground
          width={1440}
          height={1024}
          rows={HERO_ROWS}
          className="absolute left-0 top-0"
        />

        {/* Lime ring behind the hero photo */}
        <div className="absolute left-[calc(50%-575px)] top-[582px] box-border h-[1149px] w-[1149px] rounded-full border-[320px] border-solid border-electric-lime-500" />

        {/* 3D decorative shapes that stay with the content */}
        {CENTERED_SHAPES.map((shape) => (
          <div
            key={`${shape.src}-${shape.x}-${shape.y}`}
            aria-hidden="true"
            className="absolute z-[5]"
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.width,
              height: shape.height,
            }}
          >
            <Image
              src={shape.src}
              alt=""
              fill
              sizes={`${shape.width}px`}
              className="object-contain"
            />
          </div>
        ))}

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

        <Image
          src="/images/hero/hero-man.png"
          alt="Smiling student holding a laptop"
          width={578}
          height={541}
          priority
          className="absolute left-[calc(50%-289px)] top-[512px] z-10 h-[541px] w-[578px] max-w-none object-contain"
          style={{ filter: HERO_MAN_SHADOW }}
        />

        <CategoryInfoCard
          className="absolute left-[404px] top-[639px] z-20"
          title="UI/UX Design"
          courses="200 Courses"
          students="1000+ Students"
        />
        <LearningProgressCard
          className="absolute left-[842px] top-[651px] z-20"
          percent={55}
        />
        <HappyStudentsCard
          className="absolute left-[328px] top-[837px] z-20"
          rating="4.5"
          reviewCount={240}
          avatars={STUDENT_AVATARS}
          badgeLabel="2K+"
        />
      </div>
    </section>
  );
}