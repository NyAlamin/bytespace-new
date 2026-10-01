import { LearningPathCard } from "@/components/ui/LearningPathCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEARNING_PATHS } from "@/data/learningPaths";

export function LearningPaths() {
  return (
    <section
      aria-labelledby="learning-paths-title"
      className="w-full bg-white pb-[120px] pt-[72px]"
    >
      <div className="mx-auto flex w-[1440px] flex-col items-center">
        <SectionHeading
          id="learning-paths-title"
          className="h-[117px]"
          titleClassName="text-[36px]"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-[68px] grid grid-cols-[repeat(6,167px)] gap-x-10">
          {LEARNING_PATHS.map((path) => (
            <li key={path.label}>
              <LearningPathCard path={path} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}