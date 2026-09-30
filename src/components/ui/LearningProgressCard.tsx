type LearningProgressVariant = "compact" | "featured";

type LearningProgressCardProps = {
  percent: number;
  /** Width of the filled bar in px (track is 200px). The design uses 112. */
  barWidth?: number;
  variant?: LearningProgressVariant;
  className?: string;
};

const VARIANT_STYLES = {
  compact: { card: "h-[131px]", title: "leading-[1.2]" },
  featured: { card: "h-[138px] backdrop-blur-[10px]", title: "leading-6" },
} as const;

export function LearningProgressCard({
  percent,
  barWidth = 112,
  variant = "compact",
  className = "",
}: LearningProgressCardProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`flex w-[232px] flex-col items-start gap-2 rounded-2xl bg-white p-4 ${styles.card} ${className}`}
    >
      <p
        className={`text-[14px] font-medium text-shuttle-gray-950 ${styles.title}`}
      >
        Learning Progress
      </p>
      <p className="font-heading text-[48px] font-semibold leading-[1.2] text-shuttle-gray-950">
        {percent}%
      </p>
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-[200px] rounded-3xl bg-[#f6f6f6]"
      >
        <div
          className="h-2 rounded-3xl bg-electric-lime-400"
          style={{ width: barWidth }}
        />
      </div>
    </div>
  );
}