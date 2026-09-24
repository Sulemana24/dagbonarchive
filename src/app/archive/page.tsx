"use client";

import { useState, useMemo } from "react";
import { SearchBar } from "@/components/ui/SearchBar";
import { MediaCard } from "@/components/archive/MediaCard";
import { archiveItems, archiveFilters } from "@/data/archive";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";

export default function ArchivePage() {
  const [filter, setFilter] = useState<(typeof archiveFilters)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return archiveItems.filter((item) => {
      const matchesFilter = filter === "All" || item.category === filter;
      const matchesQuery = !q || item.title.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <PublicHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Page header */}
        <div className="border-b border-border pb-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Media Archive
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Photos, videos, audio and documents.
          </p>
        </div>

        {/* Filters + search */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {archiveFilters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 ${
                    active
                      ? "border-forest bg-forest text-white shadow-sm"
                      : "border-border bg-white text-muted hover:border-forest/40 hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <SearchBar
            placeholder="Search archive..."
            className="w-full sm:w-64"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Result count */}
        <div className="mt-6 flex items-baseline justify-between">
          <span className="text-xs text-muted">
            {filtered.length} {filtered.length === 1 ? "item" : "items"}
            {filter !== "All" && (
              <>
                {" "}
                in <span className="text-ink">{filter}</span>
              </>
            )}
          </span>
        </div>

        {/* Grid */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {filtered.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-4 rounded-xl border border-dashed border-border bg-white/50 p-10 text-center">
            <p className="text-sm font-medium text-ink">No items found</p>
            <p className="mt-1 text-sm text-muted">
              Try a different filter or search term.
            </p>
            {(filter !== "All" || query) && (
              <button
                type="button"
                onClick={() => {
                  setFilter("All");
                  setQuery("");
                }}
                className="mt-4 text-sm font-medium text-forest hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
