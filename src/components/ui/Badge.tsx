import { ReactNode } from "react";

type Tone = "forest" | "gold" | "muted" | "outline";

const tones: Record<Tone, string> = {
  forest: "bg-forest/10 text-forest",
  gold: "bg-gold/15 text-[#8a6d2e]",
  muted: "bg-black/5 text-muted",
  outline: "border border-border text-muted",
};

export function Badge({
  children,
  tone = "forest",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
