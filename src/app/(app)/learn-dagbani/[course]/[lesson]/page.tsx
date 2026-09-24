import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, ArrowRight, Mic, RotateCcw } from "lucide-react";
import { AudioButton } from "@/components/learning/AudioButton";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getCourse, getLesson } from "@/data/courses";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course: courseSlug, lesson: lessonSlug } = await params;
  const result = getLesson(courseSlug, lessonSlug);
  const course = getCourse(courseSlug);
  if (!result || !course) notFound();
  const { lesson, module } = result;

  const allLessons = course.moduleList.flatMap((m) => m.lessons);
  const idx = allLessons.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? allLessons[idx - 1] : null;
  const next = idx < allLessons.length - 1 ? allLessons[idx + 1] : null;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href="/learn-dagbani" className="hover:text-forest">
          Learn Dagbani
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span>{module.title}</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-ink">{lesson.title}</span>
      </div>

      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image src={lesson.image} alt={lesson.title} fill className="object-cover" />
        </div>

        <div className="space-y-5 p-6">
          <div>
            <h1 className="font-display text-2xl font-semibold text-ink">{lesson.title}</h1>
            <p className="mt-2 font-display text-3xl font-semibold text-forest">
              {lesson.dagbani}
            </p>
            <p className="mt-1 text-muted">({lesson.translation})</p>
          </div>

          <div className="flex items-center gap-4 rounded-lg bg-cream p-4">
            <AudioButton size="lg" />
            <div className="flex-1">
              <div className="flex h-8 items-end gap-1">
                {[6, 12, 18, 10, 22, 14, 8, 16, 11, 20, 9, 15].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-forest-secondary/40"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <p className="mt-1 text-xs text-muted">Pronunciation: {lesson.pronunciation}</p>
            </div>
          </div>

          <div className="rounded-lg border border-border p-5 text-center">
            <p className="text-sm font-medium text-ink">Try it yourself</p>
            <p className="mt-1 text-xs text-muted">Tap the microphone and repeat the word.</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Button variant="outline" size="sm" icon={<RotateCcw className="h-4 w-4" />}>
                Skip
              </Button>
              <button
                className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white hover:bg-forest-dark"
                aria-label="Record pronunciation"
              >
                <Mic className="h-6 w-6" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex items-center justify-between">
        {prev ? (
          <Button
            href={`/learn-dagbani/${courseSlug}/${prev.slug}`}
            variant="outline"
            icon={<ArrowLeft className="h-4 w-4" />}
          >
            Previous
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button href={`/learn-dagbani/${courseSlug}/${next.slug}`} variant="primary">
            Next <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button href="/learn-dagbani" variant="primary">
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}
