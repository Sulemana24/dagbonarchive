import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-dark active:bg-forest-dark shadow-sm",
  secondary:
    "bg-forest-secondary/10 text-forest hover:bg-forest-secondary/20",
  outline:
    "border border-border bg-white text-ink hover:border-forest/40 hover:bg-forest/5",
  ghost: "text-ink hover:bg-black/5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-4 py-2.5 rounded-lg gap-2",
  lg: "text-base px-5 py-3 rounded-xl gap-2",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  href?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  href,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {icon}
      {children}
    </button>
  );
}
