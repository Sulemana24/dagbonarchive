import Link from "next/link";
import { LucideIcon } from "lucide-react";

export function QuickAccessCard({
  icon: Icon,
  label,
  href,
  tone = "forest",
}: {
  icon: LucideIcon;
  label: string;
  href: string;
  tone?: "forest" | "gold";
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-start gap-3 rounded-xl border border-border bg-white p-4 transition-shadow hover:shadow-md"
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          tone === "gold" ? "bg-gold/15 text-[#8a6d2e]" : "bg-forest/10 text-forest"
        }`}
      >
        <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
      </div>
      <span className="text-sm font-medium text-ink">{label}</span>
    </Link>
  );
}
