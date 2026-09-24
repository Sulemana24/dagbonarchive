import {
  Plus,
  Upload,
  Users,
  ClipboardCheck,
  BookOpen,
  Layers,
  Languages,
  Image as ImageIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/dashboard/StatCard";

const quickActions = [
  { icon: Plus, label: "Add Course" },
  { icon: Plus, label: "Add Lesson" },
  { icon: Plus, label: "Add Vocabulary" },
  { icon: Upload, label: "Upload Media" },
  { icon: Users, label: "Manage Users" },
  { icon: ClipboardCheck, label: "Review Submissions" },
];

const stats = [
  { icon: Layers, value: "24", label: "Total Courses" },
  { icon: BookOpen, value: "312", label: "Lessons" },
  { icon: Languages, value: "1,204", label: "Vocabulary" },
  { icon: ImageIcon, value: "486", label: "Media" },
  { icon: Users, value: "3,940", label: "Users" },
];

const recentContent = [
  { title: "Level 2: Everyday Life", type: "Course", status: "Published", updated: "2d ago" },
  { title: "Greeting an Elder", type: "Lesson", status: "Draft", updated: "3d ago" },
  { title: "Yili (House)", type: "Vocabulary", status: "Published", updated: "5d ago" },
  { title: "Damba Festival Gallery", type: "Media", status: "In review", updated: "1w ago" },
];

const statusTone = {
  Published: "forest",
  Draft: "muted",
  "In review": "gold",
} as const;

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Content Management
        </h1>
        <p className="mt-1 text-sm text-muted">
          Add and manage all of your learning content.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {quickActions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-start gap-2.5 rounded-xl border border-border bg-white p-4 text-left transition-shadow hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest/10 text-forest">
              <action.icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <span className="text-xs font-medium text-ink">{action.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Recent Content</h2>
        <Card className="overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-cream/60 text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-5 py-3 font-medium">Title</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">Type</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentContent.map((item) => (
                <tr key={item.title}>
                  <td className="px-5 py-3.5 font-medium text-ink">{item.title}</td>
                  <td className="hidden px-5 py-3.5 text-muted sm:table-cell">{item.type}</td>
                  <td className="px-5 py-3.5">
                    <Badge tone={statusTone[item.status as keyof typeof statusTone]}>
                      {item.status}
                    </Badge>
                  </td>
                  <td className="hidden px-5 py-3.5 text-muted sm:table-cell">{item.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
