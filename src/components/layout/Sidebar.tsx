"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  Languages,
  BookOpen,
  Archive,
  Map,
  BarChart,
  Bookmark,
  Settings,
  LogOut,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Avatar } from "@/components/ui/Avatar";
import { IMG } from "@/data/images";

const primaryNav = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Learn Dagbani", href: "/learn-dagbani", icon: Languages },
  { label: "Dictionary", href: "/dictionary", icon: BookOpen },
  { label: "Archive", href: "/archive", icon: Archive },
  { label: "Map", href: "/map", icon: Map },
];

const secondaryNav = [
  { label: "Progress", href: "/progress", icon: BarChart },
  { label: "Saved", href: "/saved", icon: Bookmark },
  { label: "Settings", href: "/settings", icon: Settings },
];

function NavLink({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}: {
  href: string;
  icon: typeof Home;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "bg-white/10 text-white"
          : "text-white/65 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
      <span className="truncate">{label}</span>
    </Link>
  );
}

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);

  return (
    <div className="flex h-full flex-col bg-forest">
      <div className="px-5 pb-6 pt-6">
        <Logo variant="light" showTagline={false} size="sm" />
      </div>

      <nav className="sidebar-scroll flex-1 space-y-1 overflow-y-auto px-3">
        {primaryNav.map((item) => (
          <NavLink key={item.href} {...item} active={isActive(item.href)} onClick={onNavigate} />
        ))}

        <div className="my-3 border-t border-white/10" />

        {secondaryNav.map((item) => (
          <NavLink key={item.href} {...item} active={isActive(item.href)} onClick={onNavigate} />
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5"
        >
          <Avatar src={IMG.avatar1} name="Abdul Rahman" size={34} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">Abdul Rahman</p>
            <p className="truncate text-xs text-white/50">Learner</p>
          </div>
          <LogOut className="h-4 w-4 text-white/40" />
        </Link>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden lg:block lg:w-64 lg:shrink-0 lg:fixed lg:inset-y-0 lg:left-0">
      <SidebarContent />
    </aside>
  );
}
