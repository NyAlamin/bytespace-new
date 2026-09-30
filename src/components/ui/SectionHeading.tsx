import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  title: ReactNode;
  description: string;
  titleClassName: string;
  className?: string;
};

export function SectionHeading({
  id,
  title,
  description,
  titleClassName,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex w-[917px] flex-col items-center gap-4 text-center ${className}`}
    >
      <h2
        id={id}
        className={`font-heading font-semibold leading-[1.2] text-vulcan-950 ${titleClassName}`}
      >
        {title}
      </h2>
      <p className="w-[917px] text-[18px] leading-[1.6] text-shuttle-gray-400">
        {description}
      </p>
    </div>
  );
}