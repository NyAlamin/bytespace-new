import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex w-[374px] flex-col items-start gap-6 rounded-3xl bg-white p-6">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <figcaption>
        <p
          className="font-heading text-[20px] font-semibold text-black-950"
          style={{ lineHeight: `${testimonial.nameLineHeight}px` }}
        >
          {testimonial.name}
        </p>
        <p className="text-[18px] leading-[1.6] text-persian-blue-800">
          {testimonial.role}
        </p>
      </figcaption>

      <blockquote className="w-[326px] text-[18px] leading-[1.6] text-black-700">
        {testimonial.quote}
      </blockquote>
    </figure>
  );
}