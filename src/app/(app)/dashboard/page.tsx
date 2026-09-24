import Image from "next/image";
import Link from "next/link";
import { BookOpen, Star, Flame, Award, Compass, BarChart, Sparkles } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickAccessCard } from "@/components/dashboard/QuickAccessCard";
import { AudioButton } from "@/components/learning/AudioButton";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { courses } from "@/data/courses";
import { words } from "@/data/dictionary";

export default function DashboardPage() {
  const activeCourse = courses[0];
  const wordOfDay = words[0];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Welcome back, Abdul! 👋
        </h1>
        <p className="mt-1 text-sm text-muted">
          Keep learning, keep exploring, keep our culture alive.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={BookOpen} value="12" label="Lessons completed" />
        <StatCard icon={Star} value="450" label="XP points" />
        <StatCard icon={Flame} value="7" label="Day streak" />
        <StatCard icon={Award} value="Gold" label="Current level" tone="gold" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-hidden p-0">
          <div className="p-5 pb-0">
            <h2 className="font-display text-lg font-semibold text-ink">Continue Learning</h2>
          </div>
          <div className="flex flex-col gap-4 p-5 sm:flex-row">
            <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-auto sm:w-48">
              <Image src={activeCourse.image} alt={activeCourse.title} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-forest">Level 1: Greetings</p>
                <p className="mt-1 text-sm text-muted">5/8 lessons completed</p>
                <div className="mt-3">
                  <ProgressBar value={62} />
                </div>
              </div>
              <div className="mt-4">
                <Button href={`/learn-dagbani/${activeCourse.slug}/lesson-1`} size="md">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="font-display text-lg font-semibold text-ink">Today&apos;s Word</h2>
          <div className="mt-4 flex items-center gap-4">
            <AudioButton size="lg" />
            <div>
              <p className="font-display text-2xl font-semibold text-ink">{wordOfDay.dagbani}</p>
              <p className="text-sm text-muted">{wordOfDay.english}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink">
            {wordOfDay.example.dagbani}{" "}
            <span className="text-muted">({wordOfDay.example.english})</span>
          </p>
          <Link
            href={`/dictionary/${wordOfDay.slug}`}
            className="mt-4 inline-block text-sm font-medium text-forest hover:underline"
          >
            View Details
          </Link>
        </Card>
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Quick Access</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <QuickAccessCard icon={Compass} label="Explore Culture" href="/explore" />
          <QuickAccessCard icon={BookOpen} label="Dictionary" href="/dictionary" />
          <QuickAccessCard icon={BarChart} label="My Progress" href="/progress" />
          <QuickAccessCard icon={Sparkles} label="Word of the Day" href="/dictionary" tone="gold" />
        </div>
      </div>
    </div>
  );
}
