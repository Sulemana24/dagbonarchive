import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Compass, Home, Search } from "lucide-react";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import LogoImg from "../../public/images/logo.png";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <PublicHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex w-full max-w-2xl flex-col items-center text-center">
          {/* Brand mark */}
          <Image
            src={LogoImg}
            alt="Dagbon Archive"
            width={160}
            height={160}
            priority
            className="h-16 w-auto object-contain opacity-90 sm:h-20"
          />

          {/* 404 numeral */}
          <p
            aria-hidden="true"
            className="mt-6 font-display text-[6rem] font-bold leading-none tracking-tighter text-forest/15 sm:text-[8rem] lg:text-[10rem]"
          >
            404
          </p>

          {/* Heading */}
          <h1 className="-mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:-mt-6 sm:text-4xl">
            This page has wandered off the path
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-md text-sm text-muted sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, has been moved,
            or is still being added to the archive. Let&apos;s get you back on
            track.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full cursor-pointer sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Back home
              </Button>
            </Link>
            <Link href="/explore" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full cursor-pointer sm:w-auto"
              >
                <Compass className="mr-2 h-4 w-4" />
                Explore culture
              </Button>
            </Link>
          </div>

          {/* Secondary links */}
          <div className="mt-10 w-full border-t border-border pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Popular destinations
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link
                href="/archive"
                className="text-sm font-medium text-forest transition-colors hover:text-forest/80 hover:underline"
              >
                Media archive
              </Link>
              <Link
                href="/cities"
                className="text-sm font-medium text-forest transition-colors hover:text-forest/80 hover:underline"
              >
                Cities
              </Link>
              <Link
                href="/learn-dagbani"
                className="text-sm font-medium text-forest transition-colors hover:text-forest/80 hover:underline"
              >
                Learn Dagbani
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-forest transition-colors hover:text-forest/80 hover:underline"
              >
                About
              </Link>
            </div>
          </div>

          {/* Search nudge */}
          <div className="mt-8 flex items-center gap-2 text-xs text-muted">
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Looking for something specific? Try the archive search.</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
