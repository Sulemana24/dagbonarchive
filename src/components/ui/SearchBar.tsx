"use client";

import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

export function SearchBar({
  placeholder = "Search...",
  className = "",
  large = false,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & { large?: boolean }) {
  return (
    <div className={`relative w-full ${className}`}>
      <Search
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted ${
          large ? "left-4 h-5 w-5" : "left-3 h-4 w-4"
        }`}
      />
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full rounded-lg border border-border bg-white text-ink placeholder:text-muted focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15 ${
          large ? "py-3.5 pl-12 pr-4 text-base rounded-xl" : "py-2 pl-9 pr-3 text-sm"
        }`}
        {...rest}
      />
    </div>
  );
}
