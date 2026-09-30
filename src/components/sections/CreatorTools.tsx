import Image from "next/image";
import { DecorativeShape } from "@/components/ui/DecorativeShape";
import { HappyStudentsCard } from "@/components/ui/HappyStudentsCard";
import { RevenueCard } from "@/components/ui/RevenueCard";
import { YearToDateCard } from "@/components/ui/YearToDateCard";
import { CREATOR_BENEFITS } from "@/data/growth";
import { STUDENT_AVATARS } from "@/data/students";
import { PHOTO_DROP_SHADOW } from "@/lib/styles";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" fill="#003be2" />
      <path
        d="M7.75 12.4 10.6 15.25 16.25 9.35"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CreatorTools() {
  return (
    <>
      <div className="absolute left-[121px] top-[744px] h-[596px] w-[541px]">
        <RevenueCard className="absolute left-0 top-[44px]" />
        <YearToDateCard className="absolute left-0 top-[194px]" />
        <Image
          src="/images/people/creator-woman.png"
          alt="Smiling creator holding a tablet"
          width={435}
          height={596}
          className="absolute left-7 top-0 h-[596px] w-[435px] max-w-none"
          style={{ filter: PHOTO_DROP_SHADOW }}
        />
        <HappyStudentsCard
          className="absolute left-[283px] top-[413px]"
          rating="4.5"
          reviewCount={240}
          avatars={STUDENT_AVATARS}
          badgeLabel="2K+"
          variant="featured"
        />
        <DecorativeShape
          src="/images/shapes/shape-squiggle-lime-b.png"
          x={305}
          y={114}
          width={215}
          height={215}
        />
      </div>

      <div
        id="creators"
        className="absolute left-[741px] top-[848px] flex w-[580px] flex-col gap-10"
      >
        <h2 className="w-[391px] whitespace-nowrap font-heading text-[44px] font-semibold leading-[1.2] text-shuttle-gray-950">
          Create &amp; Manage
          <br />
          Courses Easily.
        </h2>
        <p className="w-[574px] text-[18px] leading-[1.6] text-shuttle-gray-700">
          <strong className="font-bold text-shuttle-gray-950">ByteSpace</strong>{" "}
          supports individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>
        <ul className="flex flex-col gap-4">
          {CREATOR_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-[18px] font-medium leading-[1.2] text-shuttle-gray-950">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}