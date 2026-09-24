import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

export function CategoryCard({
  title,
  description,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-display text-base font-semibold tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{description}</p>

        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-forest opacity-0 transition-opacity group-hover:opacity-100">
          Explore
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
