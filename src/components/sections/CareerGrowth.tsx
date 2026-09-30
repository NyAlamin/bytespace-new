import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { DecorativeShape } from "@/components/ui/DecorativeShape";
import { LearningProgressCard } from "@/components/ui/LearningProgressCard";
import { CAREER_STATS } from "@/data/growth";
import { COURSES } from "@/data/courses";
import { PHOTO_DROP_SHADOW } from "@/lib/styles";

export function CareerGrowth() {
  return (
    <>
      <div className="absolute left-[121px] top-[194px] flex w-[574px] flex-col gap-10">
        <h2 className="w-[577px] whitespace-nowrap font-heading text-[44px] font-semibold leading-[1.2] text-shuttle-gray-950">
          Your Path to Professional
          <br />
          Growth Starts Here!
        </h2>
        <p className="w-[477px] text-[18px] leading-[1.6] text-shuttle-gray-700">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <ul className="flex items-end gap-14">
          {CAREER_STATS.map((stat) => (
            <li key={stat.label}>
              <p className="font-heading text-[36px] font-medium leading-[44px] text-persian-blue-800">
                {stat.value}
              </p>
              <p className="text-[18px] leading-[1.6] text-shuttle-gray-700">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute left-[758px] top-[120px] h-[552px] w-[621px]">
        <div className="absolute left-0 top-0">
          <CourseCard course={COURSES[0]} variant="featured" />
        </div>
        <Image
          src="/images/hero/hero-man.png"
          alt="Smiling student holding a laptop"
          width={577}
          height={540}
          className="absolute left-0 top-3 h-[540px] w-[577px] max-w-none"
          style={{ filter: PHOTO_DROP_SHADOW }}
        />
        <LearningProgressCard
          className="absolute left-[345px] top-[213px]"
          percent={55}
          variant="featured"
        />
        <DecorativeShape
          src="/images/shapes/shape-squiggle-lime-a.png"
          x={406}
          y={67}
          width={215}
          height={215}
        />
      </div>
    </>
  );
}