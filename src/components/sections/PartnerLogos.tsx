import Image from "next/image";

const PARTNERS = [
  { name: "waves", src: "/images/partners/partner-waves.png" },
  { name: "sunburst", src: "/images/partners/partner-sunburst.png" },
  { name: "bolt", src: "/images/partners/partner-bolt.png" },
  { name: "dots", src: "/images/partners/partner-dots.png" },
  { name: "rings", src: "/images/partners/partner-rings.png" },
] as const;

export function PartnerLogos() {
  return (
    <section
      aria-label="Partner logos"
      className="h-[202px] w-full bg-shuttle-gray-50"
    >
      <div className="relative mx-auto h-full w-[1440px]">
        <ul className="absolute left-[154px] top-20 flex w-[1132px] items-center justify-between">
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="flex h-[42px] items-center gap-2 text-shuttle-gray-400"
            >
              <Image
                src={partner.src}
                alt=""
                width={41}
                height={41}
                className="h-[41px] w-auto"
              />
              <span className="text-[24px] font-bold leading-none tracking-[-0.03em]">
                Logoipsum
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}