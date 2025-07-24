import { Badge } from "@/components/ui/badge";

interface TechCategory {
  name: string;
  technologies: string[];
  color: string;
}

const technologies: TechCategory[] = [
  {
    name: "Frontend",
    technologies: [
      "React",
      "React Native",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "Expo",
    ],
    color:
      "bg-blue-500/10 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-800",
  },
  {
    name: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "Firebase",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "Contentful",
      "GraphQL",
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
];

const skills: TechCategory[] = [
  {
    name: "Development",
    technologies: [
      "API Development",
      "REST APIs",
      "API Documentation",
      "CI/CD",
      "Test-Driven Development",
      "Agile Methodologies",
    ],
    color:
      "bg-indigo-500/10 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-800",
  },
  {
    name: "Security",
    technologies: [
      "Authentication",
      "OAuth",
      "JWT",
      "SOC 2 Compliance",
      "Security Audits",
      "Vanta",
    ],
    color:
      "bg-red-500/10 text-red-700 border-red-200 dark:bg-red-500/20 dark:text-red-300 dark:border-red-800",
  },
  {
    name: "Architecture",
    technologies: [
      "MVC Pattern",
      "Data Modeling",
      "Database Design",
      "Microservices",
      "Serverless",
      "Event-Driven",
      "Performance Optimization",
      "Scalability",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies & Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across technologies, libraries, and
              technical skills
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Technologies & Libraries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technologies.map((category) => (
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
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((category) => (
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

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`${category.color} hover:opacity-80 transition-opacity`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
