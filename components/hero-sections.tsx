import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import socialLinks from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-5" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl ring-2 ring-primary/10">
                <Image
                  src="/me.png"
                  alt="Steven Castro"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
          <h1 className="text-hero mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Steven Castro <br />
            Lead Full Stack AI Cloud Engineer
          </h1>

          <p className="text-large text-muted-foreground mb-8 leading-relaxed">
            Building scalable systems and leading high-performing engineering
            teams.
            <br className="hidden md:block" />
            10+ years of experience crafting enterprise-grade software
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-primary group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Let&apos;s Connect</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              target="_blank"
              href={socialLinks.github}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              target="_blank"
              href={socialLinks.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href={`mailto:${socialLinks.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
