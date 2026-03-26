import type { HomeHero } from "@/types";
import { PageContainer } from "@/components/layout/page-container";
import { HeroStage } from "@/features/home/components/hero-stage";

type HeroSectionProps = {
  hero: HomeHero;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="home-hero-shell">
      <PageContainer>
        <HeroStage hero={hero} />
      </PageContainer>
    </section>
  );
}
