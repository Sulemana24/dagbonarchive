export function ProgressBar({
  value,
  className = "",
  trackClassName = "",
}: {
  value: number;
  className?: string;
  trackClassName?: string;
}) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-black/8 ${trackClassName}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full bg-forest transition-all duration-500 ${className}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
