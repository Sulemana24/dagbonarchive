import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/learn-dagbani/${course.slug}`}
      className="flex items-center justify-between gap-4 rounded-xl border border-border bg-white p-4 transition-shadow hover:shadow-md"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-forest">{course.level}: {course.title}</p>
        </div>
        <p className="mt-1 truncate text-sm text-muted">{course.description}</p>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xs text-muted">
            {course.modules} modules &bull; {course.lessonCount} lessons
          </span>
          <Badge tone="outline">{course.difficulty}</Badge>
        </div>
        {course.progress > 0 && (
          <div className="mt-3 max-w-xs">
            <ProgressBar value={course.progress} />
            <p className="mt-1 text-xs text-muted">{course.progress}% completed</p>
          </div>
        )}
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted" />
    </Link>
  );
}
