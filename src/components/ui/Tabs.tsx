"use client";

import { useState, ReactNode } from "react";

export function Tabs({
  tabs,
  defaultTab,
  children,
}: {
  tabs: string[];
  defaultTab?: string;
  children: (active: string) => ReactNode;
}) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]);
  return (
    <div>
      <div className="inline-flex rounded-lg border border-border bg-white p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              active === tab ? "bg-forest text-white" : "text-muted hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-5">{children(active)}</div>
    </div>
  );
}
