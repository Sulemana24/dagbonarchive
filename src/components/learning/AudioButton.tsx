"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";

// Placeholder audio interaction: real Dagbani audio files are not wired up yet.
// This gives visual feedback so the component is ready to receive a src later.
export function AudioButton({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const [playing, setPlaying] = useState(false);

  const dims = { sm: "h-8 w-8", md: "h-11 w-11", lg: "h-14 w-14" }[size];
  const iconDims = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" }[size];

  const handleClick = () => {
    setPlaying(true);
    window.setTimeout(() => setPlaying(false), 700);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Play pronunciation"
      className={`flex shrink-0 items-center justify-center rounded-full bg-forest text-white transition-transform ${dims} ${
        playing ? "scale-95 bg-forest-dark" : "hover:bg-forest-dark"
      }`}
    >
      <Volume2 className={iconDims} strokeWidth={1.75} />
    </button>
  );
}
