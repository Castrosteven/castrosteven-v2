// import { FeaturedPosts } from "@/components/featured-posts";
import { HeroSection } from "@/components/hero-sections";
import { TechStack } from "@/components/tech-stack";
import { CompaniesSection } from "@/components/companies-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TechStack />
      <CompaniesSection />
      <CTASection />
    </div>
  );
}
