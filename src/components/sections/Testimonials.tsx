import { GlowBackdrop, type Glow } from "@/components/ui/GlowBackdrop";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

const GLOWS: readonly Glow[] = [
  { x: 842, y: -241, size: 1137, color: "lime", alpha: [0.4, 0.092, 0.024] },
  { x: 395, y: -138, size: 672, color: "lime", alpha: [0.6, 0.138, 0.036] },
  { x: -442, y: 149, size: 1137, color: "blue", alpha: [0.24, 0.0552, 0.0144] },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative h-[784px] w-full overflow-hidden bg-[#fafafa]"
    >
      <div className="relative mx-auto h-full w-[1440px]">
        <GlowBackdrop glows={GLOWS} />

        <div className="absolute left-[118px] top-[74px] flex w-[1204px] flex-col items-start gap-[72px]">
          <div className="flex w-[1200px] items-end gap-[43px]">
            <h2
              id="testimonials-title"
              className="w-[577px] whitespace-nowrap font-heading text-[44px] font-semibold leading-[1.2] text-black-950"
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
            <p className="w-[580px] text-[18px] leading-[1.6] text-black-700">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <ul className="flex items-start gap-[41px]">
            {TESTIMONIALS.map((testimonial) => (
              <li key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}