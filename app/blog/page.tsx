import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const blogPosts = [
  {
    id: 1,
    title: "Building Resilient Microservices Architecture",
    excerpt:
      "How we scaled our platform to handle millions of requests while maintaining high availability and fault tolerance. This deep dive covers circuit breakers, event sourcing, and distributed system patterns.",
    content: "Full blog post content would go here...",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Architecture", "Microservices", "Scalability"],
    featured: true,
  },
  {
    id: 2,
    title: "Engineering Leadership: From Code to Teams",
    excerpt:
      "Lessons learned transitioning from senior engineer to technical leadership and building high-performing teams. Covering 1:1s, technical strategy, and fostering innovation.",
    content: "Full blog post content would go here...",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["Leadership", "Management", "Career"],
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Development: Beyond the Hype",
    excerpt:
      "Practical applications of AI in software development and how it's transforming our engineering workflows. Real examples from code generation to automated testing.",
    content: "Full blog post content would go here...",
    date: "2024-01-02",
    readTime: "10 min read",
    tags: ["AI", "Developer Tools", "Productivity"],
    featured: true,
  },
  {
    id: 4,
    title: "Database Design for High-Performance Applications",
    excerpt:
      "Strategies for designing database schemas that scale. Covering indexing, partitioning, and when to choose SQL vs NoSQL solutions.",
    content: "Full blog post content would go here...",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Database", "Performance", "Architecture"],
    featured: false,
  },
  {
    id: 5,
    title: "The Evolution of Frontend Frameworks",
    excerpt:
      "A technical perspective on the JavaScript ecosystem evolution, from jQuery to React and beyond. What's driving these changes and what's next.",
    content: "Full blog post content would go here...",
    date: "2023-12-10",
    readTime: "7 min read",
    tags: ["Frontend", "JavaScript", "React"],
    featured: false,
  },
  {
    id: 6,
    title: "Implementing Zero-Downtime Deployments",
    excerpt:
      "Blue-green deployments, canary releases, and rolling updates. A practical guide to deploying without service interruption.",
    content: "Full blog post content would go here...",
    date: "2023-11-28",
    readTime: "9 min read",
    tags: ["DevOps", "Deployment", "Infrastructure"],
    featured: false,
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Blog
            </h1>
            <p className="text-large text-muted-foreground">
              Insights on software architecture, engineering leadership, and
              emerging technologies
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.id === 1 ? "/blog/microservices-architecture" : "#"}
              >
                <Card className="card-gradient hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>

                      {post.featured && (
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
