import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, Users, Shield, Zap, ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <MessageCircle className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold tracking-tight">
            Meet Messenger
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#login" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Login
          </a>
          <a
            href="#login"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(16_90%_50%/0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Now in Beta
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Connect, communicate,{" "}
            <span className="text-primary">collaborate</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Meet Messenger brings your team together with real-time messaging,
            rich media sharing, and seamless collaboration — all in one
            beautifully crafted app.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#login"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex h-12 items-center rounded-lg border bg-background px-8 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Zap,
    title: "Real-Time Messaging",
    description:
      "Instant delivery with typing indicators, read receipts, and presence — conversations that feel alive.",
  },
  {
    icon: Users,
    title: "Team Channels",
    description:
      "Organize discussions by topic, project, or team. Keep everyone in the loop without the noise.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description:
      "End-to-end encryption, granular permissions, and full control over your data. Your privacy matters.",
  },
  {
    icon: MessageCircle,
    title: "Rich Media",
    description:
      "Share images, files, code snippets, and more — all rendered beautifully inline in your conversations.",
  },
];

function Features() {
  return (
    <section id="features" className="border-t bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to stay connected
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built for teams who value speed, clarity, and thoughtful design.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section id="login" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Sign in to your account
            </h2>
            <p className="mt-2 text-muted-foreground">
              Or{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                create a new account
              </a>
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 space-y-4"
          >
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                  "ring-offset-background placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                  "ring-offset-background placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                )}
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Meet Messenger. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}
