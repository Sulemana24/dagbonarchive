import Image from "next/image";
import LogoImg from "../../../public/images/logo.png";

type LogoSize = "sm" | "md" | "lg";

type LogoProps = {
  variant?: "dark" | "light";
  showTagline?: boolean;
  size?: LogoSize | number;
  orientation?: "horizontal" | "vertical";
};

const presets = {
  sm: { mark: 28, title: "text-base", tagline: "text-xs" },
  md: { mark: 40, title: "text-xl", tagline: "text-xs" },
  lg: { mark: 72, title: "text-2xl", tagline: "text-sm" },
} satisfies Record<LogoSize, { mark: number; title: string; tagline: string }>;

function isPreset(size: LogoSize | number): size is LogoSize {
  return typeof size === "string";
}

export function Logo({
  variant = "dark",
  showTagline = true,
  size = "md",
  orientation = "horizontal",
}: LogoProps) {
  const s = isPreset(size)
    ? presets[size]
    : { mark: size, title: "text-2xl", tagline: "text-xs" };

  const titleColor = variant === "dark" ? "text-ink" : "text-white";
  const taglineColor = variant === "dark" ? "text-muted" : "text-white/70";
  const isVertical = orientation === "vertical";

  return (
    <div
      className={
        isVertical
          ? "flex flex-col items-center gap-1 text-center"
          : "flex items-center gap-3"
      }
    >
      <Image
        src={LogoImg}
        alt="Dagbon Archive"
        width={s.mark * 2}
        height={s.mark * 2}
        priority
        className="object-contain"
        style={{ height: s.mark, width: "auto" }}
      />

      <div className="leading-none">
        <p
          className={`font-display font-semibold tracking-tight ${s.title} ${titleColor}`}
        >
          Dagbon Archive
        </p>
        {showTagline && (
          <p
            className={`mt-0.5 ${s.tagline} ${taglineColor} ${
              isVertical ? "max-w-xs" : ""
            }`}
          >
            Preserving Dagbon. Teaching Dagbani. Connecting Generations.
          </p>
        )}
      </div>
    </div>
  );
}
