import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock } from "lucide-react";
import { cultureCategories } from "@/data/culture";
import { articlesForCategory } from "@/data/cultureArticles";
import { Card } from "@/components/ui/Card";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = cultureCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const articles = articlesForCategory(cat.slug);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <PublicHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-muted"
        >
          <Link href="/explore" className="transition-colors hover:text-forest">
            Explore
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="font-medium text-ink" aria-current="page">
            {cat.title}
          </span>
        </nav>

        {/* Hero */}
        <div className="relative mt-4 h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96">
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            priority
            sizes="(min-width: 1024px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {cat.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
              {cat.description}
            </p>
          </div>
        </div>

        {/* Articles */}
        <section className="mt-10">
          <div className="flex items-baseline justify-between border-b border-border pb-4">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Articles
            </h2>
            <span className="text-xs text-muted">
              {articles.length} {articles.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {articles.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-border bg-white/50 p-10 text-center">
              <p className="text-sm font-medium text-ink">No articles yet</p>
              <p className="mt-1 text-sm text-muted">
                This collection is being populated. Check back soon.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/explore/${cat.slug}/${article.slug}`}
                  className="group"
                >
                  <Card hover className="flex h-full flex-col overflow-hidden">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-forest">
                        {article.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-muted">
                        <time dateTime={article.publishedAt}>
                          {new Date(article.publishedAt).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "short", day: "numeric" },
                          )}
                        </time>
                        {article.readingMinutes && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3 w-3" aria-hidden="true" />
                              {article.readingMinutes} min read
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
