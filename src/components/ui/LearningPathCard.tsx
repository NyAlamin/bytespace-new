import Image from "next/image";
import type { LearningPath } from "@/data/learningPaths";

type LearningPathCardProps = {
  path: LearningPath;
};

export function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <div className="box-border flex h-[167px] w-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-solid border-shuttle-gray-200">
      <Image
        src={path.icon}
        alt=""
        width={60}
        height={60}
        className="size-[60px]"
      />
      <span className="text-[20px] font-medium leading-[1.2] text-shuttle-gray-950">
        {path.label}
      </span>
    </div>
  );
}