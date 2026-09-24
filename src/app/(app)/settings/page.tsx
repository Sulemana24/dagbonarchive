import { ChevronRight, BookOpen, Bell, Lock, Shield, HelpCircle, LogOut } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { IMG } from "@/data/images";

const sections = [
  { icon: BookOpen, label: "Learning Preferences" },
  { icon: Bell, label: "Notifications" },
  { icon: Lock, label: "Account Settings" },
  { icon: Shield, label: "Privacy & Security" },
  { icon: HelpCircle, label: "Help & Support" },
];

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Profile &amp; Settings
        </h1>
        <p className="mt-1 text-sm text-muted">Manage your account and preferences.</p>
      </div>

      <Card className="flex items-center gap-4 p-5">
        <Avatar src={IMG.avatar1} name="Abdul Rahman" size={56} />
        <div className="min-w-0 flex-1">
          <p className="font-medium text-ink">Abdul Rahman</p>
          <p className="truncate text-sm text-muted">abdul.rahman@email.com</p>
        </div>
        <Button variant="outline" size="sm">
          Edit Profile
        </Button>
      </Card>

      <Card className="divide-y divide-border overflow-hidden">
        {sections.map((s) => (
          <button
            key={s.label}
            className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-forest/5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest/10 text-forest">
              <s.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
            </div>
            <span className="flex-1 text-sm font-medium text-ink">{s.label}</span>
            <ChevronRight className="h-4 w-4 text-muted" />
          </button>
        ))}
      </Card>

      <Button
        variant="outline"
        className="w-full !text-red-600 !border-red-200 hover:!bg-red-50"
        icon={<LogOut className="h-4 w-4" />}
      >
        Log Out
      </Button>
    </div>
  );
}
