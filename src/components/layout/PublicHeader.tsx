"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Link href="/" className="shrink-0 min-w-0">
          <Logo showTagline size={48} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-ink/80 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="shrink-0 rounded-md p-2 hover:bg-black/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <>
          {/* Click-outside backdrop */}
          <div
            className="fixed inset-0 top-[65px] z-40 bg-black/20 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile menu */}
          <div
            ref={menuRef}
            className="absolute left-0 right-0 top-full z-50 border-t border-border bg-white px-4 py-4 shadow-lg animate-fade-in lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
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
          </div>
        </>
      )}
    </header>
  );
}
