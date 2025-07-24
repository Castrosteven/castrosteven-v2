// "use client";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export function Navigation() {
  // const pathname = usePathname();

  // const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-heading text-lg font-semibold">
          <span className="text-primary">Steven </span>Castro
        </Link>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6">
            {/* <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link> */}
            {/* <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/blog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link> */}
          </div>

          <ThemeToggle />

          <Button asChild size="sm" className="btn-primary">
            <a href="#cta">Let&apos;s Connect</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
