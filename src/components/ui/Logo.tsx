import Image from "next/image";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const textColor =
    tone === "light" ? "text-shuttle-gray-50" : "text-shuttle-gray-950";

  return (
    <span className={`relative block h-[37px] w-[171px] ${className}`}>
      <Image
        src="/images/brand/logo-mark.png"
        alt=""
        width={29}
        height={32}
        className="absolute left-0 top-0 h-[31.5px] w-[28.88px]"
      />
      <span
        className={`absolute left-[37px] top-[7px] font-clash text-[24px] font-bold leading-[30px] ${textColor}`}
      >
        ByteSpace
      </span>
    </span>
  );
}