import { Star, Flame, BookOpen, Award } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatCard } from "@/components/dashboard/StatCard";
import { courses } from "@/data/courses";
import { IMG } from "@/data/images";

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">My Progress</h1>
        <p className="mt-1 text-sm text-muted">Track your learning journey.</p>
      </div>

      <Card className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
        <Avatar src={IMG.avatar1} name="Abdul Rahman" size={64} />
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">Abdul Rahman</h2>
          <p className="text-sm text-muted">Level 1 &bull; Gold Learner</p>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Star} value="450" label="XP" />
        <StatCard icon={Flame} value="7" label="Day streak" />
        <StatCard icon={BookOpen} value="12" label="Lessons completed" />
        <StatCard icon={Award} value="Gold" label="Level" tone="gold" />
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Learning Path</h2>
        <div className="space-y-3">
          {courses.map((course) => (
            <Card key={course.slug} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ink">
                    {course.level}: {course.title}
                  </p>
                  <p className="text-xs text-muted">
                    {Math.round((course.progress / 100) * course.lessonCount)}/{course.lessonCount} lessons
                  </p>
                </div>
                <span className="text-sm font-medium text-forest">{course.progress}%</span>
              </div>
              <div className="mt-3">
                <ProgressBar value={course.progress} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
