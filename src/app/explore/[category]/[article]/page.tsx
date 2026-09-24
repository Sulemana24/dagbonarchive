import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock } from "lucide-react";
import { cultureCategories } from "@/data/culture";
import { getArticle, articlesForCategory } from "@/data/cultureArticles";
import { Card } from "@/components/ui/Card";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; article: string }>;
}) {
  const { category, article: articleSlug } = await params;

  const cat = cultureCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const article = getArticle(cat.slug, articleSlug);
  if (!article) notFound();

  const related = articlesForCategory(cat.slug)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <PublicHeader />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-sm text-muted"
        >
          <Link href="/explore" className="transition-colors hover:text-forest">
            Explore
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <Link
            href={`/explore/${cat.slug}`}
            className="transition-colors hover:text-forest"
          >
            {cat.title}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span
            className="line-clamp-1 font-medium text-ink"
            aria-current="page"
          >
            {article.title}
          </span>
        </nav>

        {/* Header */}
        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
            {cat.title}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            {article.author && <span>{article.author}</span>}
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {article.readingMinutes && (
              <>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.readingMinutes} min read
                </span>
              </>
            )}
          </div>
        </header>

        {/* Hero image */}
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Body */}
        <article className="mt-10 space-y-5">
          {article.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-ink/90 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              More in {cat.title}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/explore/${cat.slug}/${item.slug}`}
                  className="group"
                >
                  <Card hover className="flex h-full flex-col overflow-hidden">
                    <div className="relative h-36 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-forest">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted">
                        {item.excerpt}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back */}
        <div className="mt-12">
          <Link
            href={`/explore/${cat.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline"
          >
            <ChevronRight className="h-3.5 w-3.5 rotate-180" />
            Back to {cat.title}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
