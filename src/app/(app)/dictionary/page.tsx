"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AudioButton } from "@/components/learning/AudioButton";
import { words } from "@/data/dictionary";

export default function DictionaryPage() {
  const [direction, setDirection] = useState<"dagbani-english" | "english-dagbani">(
    "dagbani-english"
  );
  const [query, setQuery] = useState("");

  const filtered = words.filter((w) => {
    const q = query.toLowerCase();
    return w.dagbani.toLowerCase().includes(q) || w.english.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Dagbani Dictionary
        </h1>
        <p className="mt-1 text-sm text-muted">
          Search words in Dagbani or English.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search words in Dagbani or English..."
            className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/15"
          />
        </div>
        <div className="inline-flex rounded-lg border border-border bg-white p-1">
          <button
            onClick={() => setDirection("dagbani-english")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium ${
              direction === "dagbani-english" ? "bg-forest text-white" : "text-muted"
            }`}
          >
            Dagbani &rarr; English
          </button>
          <button
            onClick={() => setDirection("english-dagbani")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium ${
              direction === "english-dagbani" ? "bg-forest text-white" : "text-muted"
            }`}
          >
            English &rarr; Dagbani
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((word) => (
          <Link key={word.slug} href={`/dictionary/${word.slug}`}>
            <Card hover className="flex items-center gap-4 p-4">
              <AudioButton />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-display text-lg font-semibold text-ink">
                    {direction === "dagbani-english" ? word.dagbani : word.english}
                  </p>
                  <Badge tone="outline">{word.partOfSpeech}</Badge>
                </div>
                <p className="text-sm text-muted">
                  {direction === "dagbani-english" ? word.english : word.dagbani}
                </p>
              </div>
            </Card>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-sm text-muted">No words match your search.</p>
        )}
      </div>
    </div>
  );
}
