export type Glow = {
  x: number;
  y: number;
  size: number;
  color: "blue" | "lime";
  /** Alpha at the 0%, 53% and 75% stops of the radial gradient. */
  alpha: readonly [number, number, number];
};

const RGB = {
  blue: "0, 59, 226",
  lime: "203, 252, 1",
} as const;

function toGradient({ color, alpha }: Glow): string {
  const rgb = RGB[color];
  return `radial-gradient(50% 50% at 50% 50%, rgba(${rgb}, ${alpha[0]}) 0%, rgba(${rgb}, ${alpha[1]}) 53%, rgba(${rgb}, ${alpha[2]}) 75%, rgba(${rgb}, 0) 100%)`;
}

type GlowBackdropProps = {
  glows: readonly Glow[];
};

export function GlowBackdrop({ glows }: GlowBackdropProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {glows.map((glow) => (
        <div
          key={`${glow.color}-${glow.x}-${glow.y}`}
          className="absolute rounded-full"
          style={{
            left: glow.x,
            top: glow.y,
            width: glow.size,
            height: glow.size,
            background: toGradient(glow),
            filter: "blur(20px)",
          }}
        />
      ))}
    </div>
  );
}