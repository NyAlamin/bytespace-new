import Image from "next/image";
import { Star } from "lucide-react";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { COURSE_CARD_AVATARS } from "@/data/students";
import type { Course } from "@/data/courses";

type CourseCardVariant = "grid" | "featured";

type CourseCardProps = {
  course: Course;
  variant?: CourseCardVariant;
};

const VARIANT_STYLES = {
  grid: {
    pill: "h-[26px] leading-[1.2]",
    title: "leading-[1.2]",
    byline: "leading-[1.6]",
    priceAmount: "font-semibold leading-[1.2]",
    priceUnit: "leading-[1.6]",
    rating: "font-normal leading-[1.6]",
    star: "fill-shuttle-gray-200",
    starSize: 19,
    badge: "bg-electric-lime-400 text-shuttle-gray-950",
  },
  featured: {
    pill: "h-8 leading-5",
    title: "leading-7",
    byline: "leading-5",
    priceAmount: "font-medium leading-7",
    priceUnit: "leading-5",
    rating: "font-medium leading-7",
    star: "fill-electric-lime-400",
    starSize: 20,
    badge: "bg-black text-white",
  },
} as const;

function LevelIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <rect x="3.75" y="10" width="3" height="6.67" rx="1" />
      <rect x="8.5" y="6.67" width="3" height="10" rx="1" />
      <rect x="13.25" y="3.33" width="3" height="13.34" rx="1" />
    </svg>
  );
}

export function CourseCard({ course, variant = "grid" }: CourseCardProps) {
  const styles = VARIANT_STYLES[variant];
  const stats = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <article className="relative box-border h-[384px] w-[373px] rounded-3xl bg-white shadow-[inset_0_0_0_1px_#ced0d3]">
      <div className="absolute left-4 top-4 h-[195.14px] w-[341px] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="341px"
          className="object-cover"
        />
        <ul className="absolute left-[13px] top-[150px] flex gap-3">
          {stats.map((stat) => (
            <li
              key={stat}
              className={`flex items-center justify-center rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 text-[12px] font-medium text-black-700 backdrop-blur-[4px] ${styles.pill}`}
            >
              {stat}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute left-4 top-[232px] flex w-[237px] flex-col gap-4">
        <div>
          <h3
            className={`w-[280px] truncate font-heading text-[20px] font-semibold text-black-950 ${styles.title}`}
          >
            {course.title}
          </h3>
          <p className={`text-[12px] text-black-700 ${styles.byline}`}>
            by <span className="text-persian-blue-800">{course.author}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 text-[12px] font-medium leading-[1.2] text-shuttle-gray-700">
            <LevelIcon />
            {course.level}
          </span>
          <AvatarStack
            sources={COURSE_CARD_AVATARS}
            badgeLabel="26+"
            size={32}
            step={24}
            badgeClassName={styles.badge}
            badgeTextClassName="text-[12px] font-medium leading-5"
          />
        </div>

        <p className="flex h-6 items-end">
          <span
            className={`font-heading text-[20px] text-persian-blue-800 ${styles.priceAmount}`}
          >
            ${course.price}
          </span>
          <span className={`text-[12px] text-black-700 ${styles.priceUnit}`}>
            /lifetime
          </span>
        </p>
      </div>

      <div className="absolute left-[306px] top-[232px] flex items-center">
        <span className={`text-[18px] text-black-700 ${styles.rating}`}>
          {course.rating}
        </span>
        <span className="flex size-6 items-center justify-center">
          <Star
            size={styles.starSize}
            strokeWidth={0}
            aria-hidden="true"
            className={styles.star}
          />
        </span>
      </div>
    </article>
  );
}