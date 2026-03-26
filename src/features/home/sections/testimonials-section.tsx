import type { Testimonial } from "@/types";
import { getProductBySlug } from "@/content/catalog/products";
import {
  TestimonialsCarousel,
  type ResolvedTestimonialEntry,
} from "@/features/home/components/testimonials-carousel";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const entries = testimonials
    .map((testimonial) => {
      const product = getProductBySlug(testimonial.productSlug);

      return product
        ? ({
            ...testimonial,
            product,
          } satisfies ResolvedTestimonialEntry)
        : null;
    })
    .filter((testimonial): testimonial is ResolvedTestimonialEntry => testimonial !== null);

  if (!entries.length) {
    return null;
  }

  return <TestimonialsCarousel entries={entries} />;
}
