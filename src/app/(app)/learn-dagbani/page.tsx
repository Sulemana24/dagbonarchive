import { CourseCard } from "@/components/learning/CourseCard";
import { courses } from "@/data/courses";

export default function LearnDagbaniPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Explore Dagbani Culture
        </h1>
        <p className="mt-1 text-sm text-muted">
          Start your journey with structured courses designed for all learners.
        </p>
      </div>

      <div className="inline-flex rounded-lg border border-border bg-white p-1">
        {["Beginner", "Intermediate", "Advanced"].map((level, i) => (
          <span
            key={level}
            className={`rounded-md px-4 py-1.5 text-sm font-medium ${
              i === 0 ? "bg-forest text-white" : "text-muted"
            }`}
          >
            {level}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
