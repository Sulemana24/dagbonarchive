import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryCard } from "@/components/culture/CategoryCard";
import { cultureCategories } from "@/data/culture";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <PublicHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Page header */}
        <div className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Explore Dagbon Culture
            </h1>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Discover the rich history, people, traditions and more.
            </p>
          </div>

          <SearchBar
            placeholder="Search articles, videos, etc..."
            className="w-full sm:w-72"
          />
        </div>

        {/* Categories grid */}
        <section className="mt-8">
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="font-display text-lg font-semibold text-ink">
              Categories
            </h2>
            <span className="text-xs text-muted">
              {cultureCategories.length}{" "}
              {cultureCategories.length === 1 ? "category" : "categories"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {cultureCategories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                title={cat.title}
                description={cat.description}
                image={cat.image}
                href={`/explore/${cat.slug}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
