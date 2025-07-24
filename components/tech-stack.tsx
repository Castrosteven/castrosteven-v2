import { Badge } from "@/components/ui/badge";

interface TechCategory {
  name: string;
  technologies: string[];
  color: string;
}

const techStack: TechCategory[] = [
  {
    name: "Mobile & Frontend",
    technologies: [
      "React Native",
      "Expo",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    color:
      "bg-blue-500/10 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-800",
  },
  {
    name: "Backend & APIs",
    technologies: [
      "Node.js",
      "Express",
      "Firebase",
      "SQL",
      "NoSQL",
      "Contentful",
    ],
    color:
      "bg-green-500/10 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-800",
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Git",
      "GitLab",
    ],
    color:
      "bg-purple-500/10 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-800",
  },
  {
    name: "Security & Compliance",
    technologies: [
      "Vanta",
      "SOC 2",
      "Compliance",
      "Monitoring",
      "Alerting",
      "Security Audits",
    ],
    color:
      "bg-red-500/10 text-red-700 border-red-200 dark:bg-red-500/20 dark:text-red-300 dark:border-red-800",
  },
  {
    name: "Architecture",
    technologies: [
      "Serverless",
      "Microservices",
      "CI/CD",
      "REST APIs",
      "GraphQL",
      "Event-Driven",
    ],
    color:
      "bg-orange-500/10 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-800",
  },
];

export function TechStack() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across mobile, web, cloud, and
              infrastructure technologies
            </p>
          </div>

          {/* Tech Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {techStack.map((category) => (
              <div
                key={category.name}
                className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      category.color.split(" ")[0]
                    } mr-3`}
                  ></div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${category.color} hover:opacity-80 transition-opacity`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Continuously learning and adapting to new technologies and best
              practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
