import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative h-[488px] w-full overflow-hidden bg-persian-blue-800"
    >
      {/* Grid and 3D shapes exported from the design */}
      <Image
        src="/images/shapes/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto h-full w-[1440px]">
        <div className="absolute left-[238px] top-[85px] flex w-[964px] flex-col items-center gap-10 text-center">
          <h2
            id="cta-title"
            className="w-[710px] whitespace-nowrap font-heading text-[44px] font-semibold leading-[1.2] text-shuttle-gray-50"
          >
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>
          <p className="w-[964px] text-[18px] leading-[1.6] text-shuttle-gray-50">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <ButtonLink href="/signup">Join as Creator</ButtonLink>
        </div>
      </div>
    </section>
  );
}