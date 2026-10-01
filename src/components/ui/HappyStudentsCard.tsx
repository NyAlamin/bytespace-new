import { Star } from "lucide-react";
import { AvatarStack } from "@/components/ui/AvatarStack";

type HappyStudentsVariant = "compact" | "featured";
type HappyStudentsTone = "light" | "lime";

type HappyStudentsCardProps = {
  rating: string;
  reviewCount: number;
  avatars: readonly string[];
  badgeLabel: string;
  variant?: HappyStudentsVariant;
  tone?: HappyStudentsTone;
  className?: string;
};

const VARIANT_STYLES = {
  compact: {
    card: "h-[121px]",
    title: "leading-[1.2]",
    rating: "h-[19px] text-[12px] leading-[1.6]",
  },
  featured: {
    card: "h-[123px] backdrop-blur-[10px]",
    title: "leading-6",
    rating: "h-4 text-[10px] font-bold leading-[1.5]",
  },
} as const;

const TONE_STYLES = {
  light: {
    card: "bg-white",
    star: "fill-electric-lime-400 stroke-electric-lime-400",
    badge: "bg-electric-lime-400 text-shuttle-gray-950",
  },
  lime: {
    card: "bg-electric-lime-400",
    star: "fill-persian-blue-800 stroke-persian-blue-800",
    badge: "bg-shuttle-gray-950 text-shuttle-gray-50",
  },
} as const;

export function HappyStudentsCard({
  rating,
  reviewCount,
  avatars,
  badgeLabel,
  variant = "compact",
  tone = "light",
  className = "",
}: HappyStudentsCardProps) {
  const styles = VARIANT_STYLES[variant];
  const toneStyles = TONE_STYLES[tone];

  return (
    <div
      className={`flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 ${styles.card} ${toneStyles.card} ${className}`}
    >
      <div>
        <p
          className={`text-[16px] font-medium text-shuttle-gray-950 ${styles.title}`}
        >
          Happy Students
        </p>
        <div
          className={`flex items-center text-shuttle-gray-950 ${styles.rating}`}
        >
          <span>
            {rating} ({reviewCount})
          </span>
          <Star size={16} strokeWidth={1} className={toneStyles.star} />
        </div>
      </div>
      <AvatarStack
        sources={avatars}
        badgeLabel={badgeLabel}
        badgeClassName={toneStyles.badge}
      />
    </div>
  );
}