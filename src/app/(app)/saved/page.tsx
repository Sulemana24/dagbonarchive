import { Bookmark } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function SavedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Saved</h1>
        <p className="mt-1 text-sm text-muted">Words, lessons and archive items you&apos;ve bookmarked.</p>
      </div>
      <Card className="flex flex-col items-center gap-3 p-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
          <Bookmark className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <p className="text-sm text-muted">
          Nothing saved yet. Tap the bookmark icon on any word or lesson to save it here.
        </p>
      </Card>
    </div>
  );
}
