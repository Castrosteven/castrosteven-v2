import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import {} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], // Required
  display: "swap", // Optional, improves performance
  variable: "--font-mono", // Optional, useful for Tailwind CSS
});

export const metadata: Metadata = {
  title: "Steven Castro - Lead Full Stack AI Cloud Engineer",
  description:
    "Building scalable systems and leading high-performing engineering teams. 10+ years of experience crafting enterprise-grade software solutions.",
  keywords: [
    "Full Stack Engineer",
    "Cloud Engineer",
    "React",
    "Node.js",
    "AWS",
    "Software Engineer",
    "Tech Lead",
    "AI Engineer",
  ],
  authors: [{ name: "Steven Castro" }],
  creator: "Steven Castro",
  openGraph: {
    title: "Steven Castro - Lead Full Stack AI Cloud Engineer",
    description:
      "Building scalable systems and leading high-performing engineering teams. 10+ years of experience crafting enterprise-grade software solutions.",
    url: "https://castrosteven.com",
    siteName: "Steven Castro Portfolio",
    images: [
      {
        url: "https://castrosteven.com/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Steven Castro - Lead Full Stack AI Cloud Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Castro - Lead Full Stack AI Cloud Engineer",
    description:
      "Building scalable systems and leading high-performing engineering teams. 10+ years of experience crafting enterprise-grade software solutions.",
    images: ["https://castrosteven.com/open-graph.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <footer className="border-t py-8">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>
                &copy; 2025 castrosteven.com. Built with passion for great
                software.
              </p>
            </div>
          </footer>
          <SpeedInsights />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
