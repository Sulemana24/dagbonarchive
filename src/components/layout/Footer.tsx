import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Culture", href: "/explore" },
      { label: "History", href: "/explore/history" },
      { label: "Cities", href: "/cities" },
      { label: "Media Archive", href: "/archive" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Learn Dagbani", href: "/learn-dagbani" },
      { label: "Dictionary", href: "/dictionary" },
      { label: "Quizzes", href: "/quiz" },
      { label: "Leaderboard", href: "/leaderboard" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign Up", href: "/signup" },
      { label: "Log in", href: "/login" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings", href: "/settings" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Contribute", href: "/contact" },
      { label: "Partnerships", href: "/contact" },
      { label: "Press", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-forest-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <Logo variant="light" showTagline={false} size={74} />

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Preserving Dagbon. Teaching Dagbani. Connecting Generations.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            >
              Get in touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Dagbon Archive. One platform. Many
            generations.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/contact"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
