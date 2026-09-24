import Image from "next/image";
import Link from "next/link";
import { Compass, Languages, Archive, Map, ArrowRight } from "lucide-react";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card } from "@/components/ui/Card";

import { featured } from "@/data/culture";
import HeroImg from "../../public/images/hero.jpg";

const features = [
  {
    icon: Compass,
    title: "Explore Culture",
    description: "Discover the rich heritage of Dagbon",
    href: "/explore",
  },
  {
    icon: Languages,
    title: "Learn Dagbani",
    description: "Start your language journey",
    href: "/learn-dagbani",
  },
  {
    icon: Archive,
    title: "Explore Archive",
    description: "Photos, videos, documents & stories",
    href: "/archive",
  },
  {
    icon: Map,
    title: "Discover Places",
    description: "Historical places of Dagbon",
    href: "/map",
  },
];

const historyMilestones = [
  {
    year: "11th c.",
    title: "Origins of the Kingdom",
    body: "The Dagomba people trace their lineage to Tohazie, the Red Hunter, whose descendants founded the kingdom in the savannahs of what is now Northern Ghana.",
  },
  {
    year: "15th c.",
    title: "Naa Gbewaa and the Founding Line",
    body: "The royal line established by Naa Gbewaa consolidated Dagbon into a centralized state, with Yendi as its spiritual and political heart.",
  },
  {
    year: "17th c.",
    title: "Yaa Naa and the Paramountcy",
    body: "The Yaa Naa emerged as the paramount chief of Dagbon, presiding over a complex system of chiefs, elders, and skin lands that endure today.",
  },
  {
    year: "Today",
    title: "A Living Heritage",
    body: "Dagbon's language, drumming, festivals, and oral histories continue to be passed down — and are now being preserved digitally for the generations ahead.",
  },
];

export default function LandingPage() {
  return (
    <>
      <PublicHeader />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden">
          <Image
            src={HeroImg}
            alt="Traditional Dagbon architecture and landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/55 to-forest-dark/80" />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Dagbon Archive
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/80 sm:text-lg">
              Preserving Dagbon. Teaching Dagbani. Connecting Generations.
            </p>
            <div className="mt-8 w-full max-w-xl">
              <SearchBar
                large
                placeholder="Search for history, people, places, words..."
              />
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {features.map((f) => (
              <Link key={f.title} href={f.href}>
                <Card hover className="flex h-full flex-col gap-3 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10 text-forest">
                    <f.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted">{f.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured archive */}
        <section className="border-t border-border bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Featured
                </p>
                <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
                  From the Archive
                </h2>
              </div>
              <Link
                href="/explore"
                className="hidden items-center gap-1 text-sm font-medium text-forest transition-all hover:gap-2 sm:flex"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((item) => (
                <Link key={item.slug} href="/explore">
                  <Card hover className="overflow-hidden">
                    <div className="relative h-40 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            HISTORY OF DAGBON  — new section
            ───────────────────────────────────────────── */}
        <section className="border-t border-border bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              {/* Left column — intro */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  History
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  A kingdom older than memory
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  Dagbon is one of the oldest and most enduring kingdoms in West
                  Africa. For nearly a thousand years, its people have shaped a
                  distinct culture — a language, a chieftaincy system, a musical
                  tradition, and a body of oral history carried across
                  generations.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  This archive exists so that story is never lost.
                </p>

                <Link
                  href="/explore/history/origins-of-dagbon"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-all hover:gap-2.5"
                >
                  Explore the full history
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Right column — timeline */}
              <ol className="relative space-y-8 border-l border-border pl-8 sm:space-y-10">
                {historyMilestones.map((m, i) => (
                  <li key={m.title} className="relative">
                    {/* Dot on the timeline */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-forest bg-cream"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                    </span>

                    <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
                      {m.year}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {m.body}
                    </p>

                    {/* Fade the last item's trailing space on desktop */}
                    {i === historyMilestones.length - 1 && (
                      <span className="sr-only">End of timeline</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
