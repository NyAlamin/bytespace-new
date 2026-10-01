import Image from "next/image";

type DecorativeShapeProps = {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  className?: string;
};

export function DecorativeShape({
  src,
  x,
  y,
  width,
  height,
  className = "",
}: DecorativeShapeProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute ${className}`}
      style={{ left: x, top: y, width, height }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={`${width}px`}
        className="object-contain"
      />
    </div>
  );
}