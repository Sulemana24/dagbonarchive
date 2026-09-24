"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { places } from "@/data/places";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";

export default function MapPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(places[0].slug);
  const active = places.find((p) => p.slug === activeSlug) ?? null;

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <PublicHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Page header */}
        <div className="border-b border-border pb-8">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Dagbon Cultural Map
          </h1>
          <p className="mt-2 text-sm text-muted sm:text-base">
            Explore important locations in Dagbon.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Map */}
          <Card className="relative h-[420px] overflow-hidden bg-[#eef1ec] p-0 sm:h-[520px]">
            {/* Ambient radial blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, #dfe6de 0, transparent 40%), radial-gradient(circle at 70% 60%, #dfe6de 0, transparent 45%)",
              }}
            />

            {/* Grid overlay */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="grid"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 32 0 L 0 0 0 32"
                    fill="none"
                    stroke="#d7dcd3"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Pins */}
            {places.map((place) => {
              const isActive = activeSlug === place.slug;
              return (
                <button
                  key={place.slug}
                  type="button"
                  onClick={() => setActiveSlug(place.slug)}
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer rounded-md p-1 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 hover:scale-110"
                  aria-label={`View details for ${place.name}`}
                  aria-pressed={isActive}
                >
                  <MapPin
                    className={`h-7 w-7 drop-shadow-md transition-colors ${
                      isActive
                        ? "text-gold"
                        : "text-forest group-hover:text-forest/80"
                    }`}
                    fill={isActive ? "#C7A65A" : "#063B2A"}
                    strokeWidth={1}
                  />
                  <span
                    className={`mt-0.5 block whitespace-nowrap rounded bg-white/95 px-1.5 py-0.5 text-[10px] font-medium shadow-sm transition-colors ${
                      isActive ? "text-[#8a6d2e]" : "text-forest"
                    }`}
                  >
                    {place.name}
                  </span>
                </button>
              );
            })}

            {/* Attribution */}
            {/* <p className="absolute bottom-3 right-3 rounded-md bg-white/85 px-2 py-1 text-[10px] text-muted backdrop-blur-sm">
              Map placeholder — ready for Mapbox / Google Maps integration
            </p> */}
          </Card>

          {/* Detail panel */}
          {active ? (
            <Card className="flex flex-col overflow-hidden">
              <div className="relative h-44 w-full shrink-0 sm:h-48">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <button
                  type="button"
                  onClick={() => setActiveSlug(null)}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur-sm transition-colors hover:bg-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {active.name}
                  </h2>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                    Historical information
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    {active.info}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                    Traditional significance
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    {active.significance}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <Link href={`/map/${active.slug}`} className="block">
                    <Button size="sm" className="w-full cursor-pointer">
                      View details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 p-8 text-center">
              <MapPin className="h-8 w-8 text-forest/40" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-ink">
                  No location selected
                </p>
                <p className="mt-1 text-sm text-muted">
                  Select a pin on the map to see its story.
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
