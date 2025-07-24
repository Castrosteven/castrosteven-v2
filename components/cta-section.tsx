"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";
import Script from "next/script";

// TypeScript declarations for Google Calendar
declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Initialize Google Calendar button when component mounts
    const initGoogleCalendar = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        const target = document.getElementById("google-calendar-button");
        if (target) {
          window.calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3903IsgRs6e96TfuFB4fohqo43n1bPigVOA7ZNMeRkq_Hxm2GYKo4P-cb2T5YCTA8EeUOhPdwS?gv=true",
            color: "#039BE5",
            label: "Book an appointment",
            target,
          });
        }
      }
    };

    // Check if calendar script is already loaded
    if (window.calendar) {
      initGoogleCalendar();
    } else {
      // Wait for script to load
      window.addEventListener("calendar-script-loaded", initGoogleCalendar);
    }

    return () => {
      window.removeEventListener("calendar-script-loaded", initGoogleCalendar);
    };
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <>
      {/* Google Calendar Scripts */}
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        onLoad={() => {
          window.dispatchEvent(new Event("calendar-script-loaded"));
        }}
      />
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />

      <section
        id="cta"
        className="py-20 bg-gradient-to-br from-primary/5 to-primary/10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to discuss your next project? Schedule a video call or get
                my detailed resume.
              </p>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video Call CTA */}
              <Card className="card-gradient border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Video className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Schedule a Video Call
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Let&apos;s discuss your project requirements, technical
                    challenges, or explore collaboration opportunities.
                  </p>
                  <div className="space-y-3">
                    <div id="google-calendar-button" className="w-full">
                      {/* Google Calendar button will be inserted here */}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Available for technical consultations, project
                      discussions, or just a chat!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Download CTA */}
              <Card className="card-gradient border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Download className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Get My Resume</h3>
                  <p className="text-muted-foreground mb-6">
                    Receive my detailed resume with full work history, technical
                    skills, and project highlights.
                  </p>

                  {!isSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1"
                          required
                        />
                        <Button
                          type="submit"
                          size="lg"
                          className="btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Mail className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        I&apos;ll send you my resume and keep you updated on new
                        opportunities
                      </p>
                    </form>
                  ) : (
                    <div className="space-y-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <p className="text-green-600 font-medium">
                        Resume sent to your email!
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Check your inbox for the download link
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send to another email
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Available for full-time positions, contract work, and technical
                consulting
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
