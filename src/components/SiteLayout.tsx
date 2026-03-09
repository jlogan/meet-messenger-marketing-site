import { MessageCircle } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <MessageCircle className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold tracking-tight">
            Meet Messenger
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="/#login"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </a>
          <a
            href="/#login"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-bold">
              Meet Messenger
            </span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <a
              href="mailto:support@brogrammers.agency"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Meet Messenger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
