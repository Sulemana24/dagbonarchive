import Image from "next/image";
import { Play, Volume2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { ArchiveItem } from "@/data/archive";

const iconByCategory = {
  Photos: null,
  Videos: Play,
  Audio: Volume2,
  Documents: FileText,
};

export function MediaCard({ item }: { item: ArchiveItem }) {
  const Icon = iconByCategory[item.category];
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {Icon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-forest">
              <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
            </div>
          </div>
        )}
      </div>
      <div className="p-3.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-medium text-ink">{item.title}</h3>
          <Badge tone="outline">{item.category}</Badge>
        </div>
        <p className="mt-1 text-xs text-muted">
          {item.event} &bull; {item.date}
        </p>
      </div>
    </div>
  );
}
