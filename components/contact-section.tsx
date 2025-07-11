import { Mail, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-large text-muted-foreground mb-12">
            I&apos;m always interested in discussing new opportunities,
            technical challenges, or potential collaborations. Feel free to
            reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="card-gradient p-6">
              <CardContent className="text-center pt-4">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  Direct communication for project inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient p-6">
              <CardContent className="text-center pt-4">
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">
                  Connect for professional networking
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient p-6">
              <CardContent className="text-center pt-4">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  Book a time for detailed discussions
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary" asChild>
              <a href="mailto:contact@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
