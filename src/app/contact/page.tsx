"use client";

import { useState } from "react";
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const socialLinks = [
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    href: "https://x.com/dagbonarchive",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com/dagbonarchive",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com/dagbonarchive",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    href: "https://tiktok.com/@dagbonarchive",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/dagbonarchive",
  },
];

const contactChannels = [
  {
    icon: Mail,
    title: "Email",
    value: "dagbonarchive@gmail.com",
    href: "mailto:dagbonarchive@gmail.com",
    description: "General enquiries and contributions",
  },
  {
    icon: MessageSquare,
    title: "Contributions",
    value: "dagbonarchive@gmail.com",
    href: "mailto:dagbonarchive@gmail.com",
    description: "Share photos, stories, or oral histories",
  },
  {
    icon: MapPin,
    title: "Based in",
    value: "Yendi, Northern Region-Ghana",
    href: null,
    description: "Serving Dagbon and the diaspora",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your API / form service
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <PublicHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Page header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
            Contact
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Get in touch
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Whether you have a question, a contribution for the archive, or
            you&apos;d like to partner with us — we&apos;d love to hear from
            you.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          {/* Left column — contact info */}
          <div className="space-y-5">
            {contactChannels.map((c) => {
              const Icon = c.icon;
              const inner = (
                <Card
                  hover={!!c.href}
                  className="flex items-start gap-4 p-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      {c.title}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-ink">
                      {c.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{c.description}</p>
                  </div>
                </Card>
              );

              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 rounded-2xl"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.title}>{inner}</div>
              );
            })}

            {/* Social */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Follow along
              </p>
              <div className="mt-3 flex gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted transition-colors hover:border-forest/30 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <Card className="p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  Thank you for reaching out
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  We&apos;ve received your message and will get back to you as
                  soon as we can — usually within a few working days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 text-sm font-medium text-forest hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    Send us a message
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    Fields marked with an asterisk are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    id="name"
                    label="Full name *"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />
                  <Input
                    id="email"
                    label="Email address *"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>

                <Input
                  id="subject"
                  label="Subject"
                  type="text"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={update("subject")}
                />

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={update("message")}
                    className="w-full resize-y rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full cursor-pointer"
                >
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  Send message
                </Button>

                <p className="text-center text-xs text-muted">
                  We&apos;ll never share your details. See our{" "}
                  <a href="/privacy" className="text-forest hover:underline">
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            )}
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
