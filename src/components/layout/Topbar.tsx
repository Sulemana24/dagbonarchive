"use client";

import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { Avatar } from "@/components/ui/Avatar";
import { IMG } from "@/data/images";
import { SidebarContent } from "@/components/layout/Sidebar";

export function Topbar({ title }: { title?: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-cream/90 px-4 py-3 backdrop-blur sm:px-6">
        <button
          className="rounded-md p-2 hover:bg-black/5 lg:hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-ink" />
        </button>

        {title ? (
          <h1 className="font-display text-lg font-semibold text-ink lg:hidden">{title}</h1>
        ) : null}

        <div className="ml-auto flex flex-1 items-center justify-end gap-3 lg:ml-0 lg:justify-between">
          <SearchBar placeholder="Search..." className="hidden max-w-sm lg:block" />
          <div className="flex items-center gap-3">
            <button
              className="relative rounded-full p-2 hover:bg-black/5"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-ink/70" strokeWidth={1.75} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-gold" />
            </button>
            <div className="hidden items-center gap-2.5 sm:flex">
              <Avatar src={IMG.avatar1} name="Abdul Rahman" size={34} />
              <div className="leading-tight">
                <p className="text-sm font-medium text-ink">Abdul Rahman</p>
                <p className="text-xs text-muted">Learner</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 animate-fade-in"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 animate-fade-in">
            <div className="relative h-full">
              <button
                className="absolute right-3 top-4 z-10 rounded-md p-1.5 text-white/70 hover:bg-white/10"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              <SidebarContent onNavigate={() => setDrawerOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
