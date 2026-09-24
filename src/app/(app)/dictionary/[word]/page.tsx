import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bookmark } from "lucide-react";
import { getWord, words } from "@/data/dictionary";
import { AudioButton } from "@/components/learning/AudioButton";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export default async function WordDetailPage({
  params,
}: {
  params: Promise<{ word: string }>;
}) {
  const { word: slug } = await params;
  const word = getWord(slug);
  if (!word) notFound();

  const related = words.filter((w) => w.slug !== word.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/dictionary"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-forest"
        >
          <ArrowLeft className="h-4 w-4" /> Back to dictionary
        </Link>
        <button
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-forest"
          aria-label="Save word"
        >
          <Bookmark className="h-4 w-4" /> Save
        </button>
      </div>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <AudioButton size="lg" />
          <div>
            <h1 className="font-display text-3xl font-semibold text-ink">{word.dagbani}</h1>
            <p className="mt-1 text-lg text-muted">({word.english})</p>
            <div className="mt-2 flex gap-2">
              <Badge tone="outline">{word.partOfSpeech}</Badge>
              <Badge tone="forest">{word.level}</Badge>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <p className="text-sm font-medium text-ink">Example Sentence</p>
          <p className="mt-2 font-display text-lg text-ink">{word.example.dagbani}</p>
          <p className="text-sm text-muted">({word.example.english})</p>
        </div>

        <div className="relative mt-6 h-48 w-full overflow-hidden rounded-lg">
          <Image src={word.image} alt={word.dagbani} fill className="object-cover" />
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <p className="text-sm font-medium text-ink">Related Words</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {word.related.map((r) => (
              <Badge key={r} tone="muted">
                {r}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {related.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium text-ink">Similar Words</p>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/dictionary/${r.slug}`}>
                <Badge tone="forest">{r.dagbani}</Badge>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
