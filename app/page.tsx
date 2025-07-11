import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FeaturedPosts } from "@/components/featured-posts";
import { HeroSection } from "@/components/hero-sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FeaturedPosts />
      <ContactSection />
    </div>
  );
}
