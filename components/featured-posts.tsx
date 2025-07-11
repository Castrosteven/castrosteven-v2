import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredPosts = [
  {
    id: 1,
    title: "Building Resilient Microservices Architecture",
    excerpt:
      "How we scaled our platform to handle millions of requests while maintaining high availability and fault tolerance.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Architecture", "Microservices", "Scalability"],
  },
  {
    id: 2,
    title: "Engineering Leadership: From Code to Teams",
    excerpt:
      "Lessons learned transitioning from senior engineer to technical leadership and building high-performing teams.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["Leadership", "Management", "Career"],
  },
  {
    id: 3,
    title: "AI-Powered Development: Beyond the Hype",
    excerpt:
      "Practical applications of AI in software development and how it's transforming our engineering workflows.",
    date: "2024-01-02",
    readTime: "10 min read",
    tags: ["AI", "Developer Tools", "Productivity"],
  },
];

export function FeaturedPosts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Insights
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Sharing thoughts on software architecture, engineering leadership,
            and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPosts.map((post) => (
            <a
              key={post.id}
              href={post.id === 1 ? "/blog/microservices-architecture" : "#"}
            >
              <Card className="card-gradient hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
