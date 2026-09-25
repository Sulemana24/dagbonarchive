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

  // For numeric sizes, scale fluidly between a mobile floor and the
  // requested size instead of staying fixed at every viewport width.
  const markHeight = isPreset(size)
    ? `${s.mark}px`
    : `clamp(${Math.round(s.mark * 0.6)}px, ${(s.mark / 16).toFixed(
        2,
      )}vw, ${s.mark}px)`;

  return (
    <div
      className={
        isVertical
          ? "flex flex-col items-center gap-1 text-center"
          : "flex items-center gap-2 sm:gap-3"
      }
    >
      <Image
        src={LogoImg}
        alt="Dagbon Archive"
        width={s.mark * 2}
        height={s.mark * 2}
        priority
        className="object-contain shrink-0"
        style={{ height: markHeight, width: "auto" }}
      />

      <div className="leading-none min-w-0">
        <p
          className={`font-display font-semibold tracking-tight truncate ${s.title} ${titleColor}`}
        >
          Dagbon Archive
        </p>
        {showTagline && (
          <p
            className={`mt-0.5 hidden sm:block ${s.tagline} ${taglineColor} ${
              isVertical
                ? "max-w-xs"
                : "max-w-[220px] md:max-w-none truncate md:whitespace-normal"
            }`}
          >
            Preserving Dagbon. Teaching Dagbani. Connecting Generations.
          </p>
        )}
      </div>
    </div>
  );
}
