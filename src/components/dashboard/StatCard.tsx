import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function StatCard({
  icon: Icon,
  value,
  label,
  tone = "forest",
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  tone?: "forest" | "gold";
}) {
  return (
    <Card className="flex items-center gap-3 p-4">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
          tone === "gold" ? "bg-gold/15 text-[#8a6d2e]" : "bg-forest/10 text-forest"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <p className="font-display text-xl font-semibold leading-tight text-ink">{value}</p>
        <p className="truncate text-xs text-muted">{label}</p>
      </div>
    </Card>
  );
}
