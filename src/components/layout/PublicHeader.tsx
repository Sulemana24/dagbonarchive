"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Learn Dagbani", href: "/learn-dagbani" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
];

export function PublicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo showTagline size={64} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/login" variant="ghost" size="sm">
            Login
          </Button>
          <Button href="/signup" variant="primary" size="sm">
            Sign Up
          </Button>
        </div>

        <button
          className="lg:hidden rounded-md p-2 hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-4 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-forest/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-3">
            <Button
              href="/login"
              variant="outline"
              size="sm"
              className="flex-1"
            >
              Login
            </Button>
            <Button
              href="/signup"
              variant="primary"
              size="sm"
              className="flex-1"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
