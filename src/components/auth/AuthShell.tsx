import type { ReactNode } from "react";
import Link from "next/link";
import { CourseCard } from "@/components/ui/CourseCard";
import { DecorativeShape } from "@/components/ui/DecorativeShape";
import { GridBackground } from "@/components/ui/GridBackground";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { Logo } from "@/components/ui/Logo";
import { COURSES } from "@/data/courses";
import { STUDENT_AVATARS } from "@/data/students";

type AuthShellProps = {
  heading: string;
  description: string;
  children: ReactNode;
};

export function AuthShell({ heading, description, children }: AuthShellProps) {
  return (
    <main className="relative h-[1024px] w-full overflow-hidden bg-persian-blue-800">
      <div className="relative mx-auto h-full w-[1440px]">
        <GridBackground
          width={1440}
          height={1024}
          className="absolute left-0 top-0"
        />

        <Link
          href="/"
          aria-label="ByteSpace home"
          className="absolute left-[122px] top-[35px] z-10"
        >
          <Logo tone="light" />
        </Link>

        <div className="absolute left-[122px] top-[120px] z-10 flex w-[475px] flex-col gap-4">
          <h2 className="font-heading text-[20px] font-semibold leading-[1.2] text-shuttle-gray-50">
            {heading}
          </h2>
          <p className="text-[18px] leading-[1.6] text-shuttle-gray-50">
            {description}
          </p>
        </div>

        {/* Course preview composition */}
        <div className="absolute left-[122px] top-[394px] z-10">
          <CourseCard course={COURSES[1]} variant="featured" />
        </div>
        <div className="absolute left-[233px] top-[305px] z-10">
          <CourseCard course={COURSES[2]} variant="featured" />
        </div>
        <HappyStudentsCard
          className="absolute left-[348px] top-[740px] z-10"
          rating="4.5"
          reviewCount={240}
          avatars={STUDENT_AVATARS}
          badgeLabel="2K+"
          variant="featured"
          tone="lime"
        />

        <DecorativeShape
          src="/images/shapes/shape-torus-lime.png"
          x={172}
          y={346}
          width={102}
          height={93}
          className="z-20"
        />
        <DecorativeShape
          src="/images/shapes/shape-cone-lime.png"
          x={122}
          y={724}
          width={124}
          height={137}
          className="z-20"
        />
        <DecorativeShape
          src="/images/shapes/shape-squiggle-white.png"
          x={502}
          y={655}
          width={116}
          height={122}
          className="z-20"
        />

        {/* Form card */}
        <div className="absolute left-[741px] top-[120px] z-10 h-[784px] w-[579px] rounded-3xl bg-white">
          <div className="absolute left-[63px] top-[61px]">{children}</div>
        </div>
      </div>
    </main>
  );
}