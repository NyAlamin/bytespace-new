import Image from "next/image";

type AvatarStackProps = {
  sources: readonly string[];
  badgeLabel: string;
  size?: number;
  step?: number;
  badgeClassName?: string;
  className?: string;
};

export function AvatarStack({
  sources,
  badgeLabel,
  size = 43,
  step = 27,
  badgeClassName = "bg-electric-lime-400 text-shuttle-gray-950",
  className = "",
}: AvatarStackProps) {
  const width = sources.length * step + size;

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width, height: size }}
    >
      {sources.map((src, index) => (
        <span
          key={src}
          className="absolute top-0 overflow-hidden rounded-full"
          style={{
            left: index * step,
            width: size,
            height: size,
            zIndex: index + 1,
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes={`${size}px`}
            className="object-cover"
          />
        </span>
      ))}
      <span
        className={`absolute top-0 flex items-center justify-center rounded-full text-[12px] font-bold leading-[1.5] ${badgeClassName}`}
        style={{
          left: sources.length * step,
          width: size,
          height: size,
          zIndex: sources.length + 1,
        }}
      >
        {badgeLabel}
      </span>
    </div>
  );
}