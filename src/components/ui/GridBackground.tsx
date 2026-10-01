type GridBackgroundProps = {
  width: number;
  height: number;
  step?: number;
  rows?: number[];
  className?: string;
};

export function GridBackground({
  width,
  height,
  step = 120,
  rows,
  className = "",
}: GridBackgroundProps) {
  const columns = Array.from(
    { length: Math.floor(width / step) + 1 },
    (_, i) => i * step,
  );
  const lines =
    rows ??
    Array.from({ length: Math.floor(height / step) + 1 }, (_, i) => i * step);

  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      <g fill="#ffffff" opacity={0.12}>
        {columns.map((x) => (
          <rect key={`v-${x}`} x={x} y={0} width={2} height={height} />
        ))}
        {lines.map((y) => (
          <rect key={`h-${y}`} x={0} y={y - 2} width={width} height={2} />
        ))}
      </g>
    </svg>
  );
}