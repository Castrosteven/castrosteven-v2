import { Code, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "10+ years building enterprise software with modern technologies including React, Node.js, Python, and cloud platforms.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading cross-functional engineering teams, mentoring developers, and driving technical strategy and architecture decisions.",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description:
      "Passionate about emerging technologies, AI integration, and building scalable solutions that drive business growth.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turning Ideas Into Reality
            </h2>
            <p className="text-large text-muted-foreground leading-relaxed">
              I&apos;m a Lead Software Engineer with a passion for building
              scalable systems and empowering engineering teams. With over a
              decade of experience, I&apos;ve helped organizations transform
              their technical capabilities and deliver impactful software
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="card-gradient text-center p-6">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
