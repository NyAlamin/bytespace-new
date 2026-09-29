type LearningProgressCardProps = {
  percent: number;
  /** Width of the filled bar in px (track is 200px). The design uses 112. */
  barWidth?: number;
  className?: string;
};

export function LearningProgressCard({
  percent,
  barWidth = 112,
  className = "",
}: LearningProgressCardProps) {
  return (
    <div
      className={`flex h-[131px] w-[232px] flex-col items-start gap-2 rounded-2xl bg-white p-4 ${className}`}
    >
      <p className="text-[14px] font-medium leading-[1.2] text-shuttle-gray-950">
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