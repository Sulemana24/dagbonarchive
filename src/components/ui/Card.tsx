import { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = false,
  ...rest
}: { children: ReactNode; className?: string; hover?: boolean } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-white border border-border rounded-xl ${
        hover ? "transition-shadow hover:shadow-md" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
