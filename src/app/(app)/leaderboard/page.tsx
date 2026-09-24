"use client";

import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Tabs } from "@/components/ui/Tabs";
import { users } from "@/data/quiz";
import { IMG } from "@/data/images";

const avatarMap: Record<string, string> = {
  "1": IMG.avatar1,
  "2": IMG.avatar2,
  "3": IMG.avatar3,
  "4": IMG.avatar4,
  "5": IMG.avatar5,
};

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Top Learners This Week
        </h1>
        <p className="mt-1 text-sm text-muted">See how you compare with other learners.</p>
      </div>

      <Tabs tabs={["Week", "Month", "All Time"]}>
        {() => (
          <Card className="divide-y divide-border overflow-hidden">
            {users.map((u, i) => (
              <div key={u.id} className="flex items-center gap-4 p-4">
                <div className="flex w-6 shrink-0 items-center justify-center">
                  {i === 0 ? (
                    <Trophy className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  ) : (
                    <span className="text-sm font-medium text-muted">{i + 1}</span>
                  )}
                </div>
                <Avatar src={avatarMap[u.avatarSeed]} name={u.name} size={40} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{u.name}</p>
                  <p className="text-xs text-muted">{u.level}</p>
                </div>
                <span className="text-sm font-semibold text-forest">
                  {u.xp.toLocaleString()} XP
                </span>
              </div>
            ))}
          </Card>
        )}
      </Tabs>
    </div>
  );
}
