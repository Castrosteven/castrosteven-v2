import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    title: "Lead Software Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description:
      "Leading a team of 8 engineers building cloud-native applications. Architected microservices platform handling 50M+ requests daily.",
    technologies: ["React", "Node.js", "AWS", "Kubernetes", "Python"],
  },
  {
    title: "Senior Software Engineer",
    company: "Innovation Labs",
    period: "2020 - 2023",
    description:
      "Developed scalable backend systems and mentored junior developers. Led migration from monolith to microservices architecture.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Redis"],
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2017 - 2020",
    description:
      "Full-stack development of e-commerce platform. Built real-time analytics dashboard and payment processing system.",
    technologies: ["React", "Express.js", "MongoDB", "TypeScript", "GraphQL"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2014 - 2017",
    description:
      "Web application development and API integrations. Gained experience in agile development and client communication.",
    technologies: ["JavaScript", "PHP", "MySQL", "HTML/CSS", "jQuery"],
  },
];

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Django", "FastAPI"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  },
  {
    category: "Leadership",
    items: [
      "Team Management",
      "Technical Strategy",
      "Mentoring",
      "Agile/Scrum",
    ],
  },
];

export default function Page() {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-large text-muted-foreground leading-relaxed">
              I&apos;m a passionate Lead Software Engineer with over 10 years of
              experience building scalable software solutions and leading
              high-performing engineering teams. My journey spans from startup
              environments to enterprise-scale systems, always with a focus on
              technical excellence and team empowerment.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Professional Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="card-gradient">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-primary font-medium">
                          {job.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {job.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="card-gradient">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 text-primary">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Engineering Philosophy</h2>
            </div>

            <Card className="card-gradient">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    I believe great software is built by great teams. My
                    approach to engineering leadership centers on empowering
                    developers, fostering collaboration, and maintaining a
                    culture of continuous learning and innovation.
                  </p>
                  <p className="mb-4">
                    Technical excellence and business impact go hand in hand. I
                    focus on building scalable, maintainable systems that solve
                    real problems while ensuring the development process remains
                    sustainable and enjoyable for the team.
                  </p>
                  <p>
                    Whether architecting complex distributed systems or
                    mentoring junior developers, I&apos;m driven by the
                    challenge of turning ambitious ideas into reliable,
                    impactful software solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
