import { Star } from "lucide-react";
import { AvatarStack } from "@/components/ui/AvatarStack";

type HappyStudentsCardProps = {
  rating: string;
  reviewCount: number;
  avatars: readonly string[];
  badgeLabel: string;
  className?: string;
};

export function HappyStudentsCard({
  rating,
  reviewCount,
  avatars,
  badgeLabel,
  className = "",
}: HappyStudentsCardProps) {
  return (
    <div
      className={`flex h-[121px] w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 ${className}`}
    >
      <div>
        <p className="text-[16px] font-medium leading-[1.2] text-shuttle-gray-950">
          Happy Students
        </p>
        <div className="flex items-center text-[12px] leading-[1.6] text-shuttle-gray-950">
          <span>
            {rating} ({reviewCount})
          </span>
          <Star
            size={16}
            strokeWidth={1}
            className="fill-electric-lime-400 stroke-electric-lime-400"
          />
        </div>
      </div>
      <AvatarStack sources={avatars} badgeLabel={badgeLabel} />
    </div>
  );
}