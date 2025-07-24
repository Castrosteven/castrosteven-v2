import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import {} from "next/font/google";

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
  title: "Castro Steven",
  description: "Full Stack Cloud Engineer",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
