# Dagbon Archive

"Preserving Dagbon. Teaching Dagbani. Connecting Generations."

A production-quality Next.js web app for a Dagbon cultural archive and
Dagbani language-learning platform, built from the supplied wireframe.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Lucide React icons
- Mock data layer in `src/data/`, structured to be swapped for
  Firebase (Auth, Firestore, Storage) without rewriting the UI

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/
    page.tsx              Public landing page
    login/, signup/        Auth pages
    about/                 About page
    (app)/                 Logged-in app shell (sidebar + topbar)
      dashboard/
      explore/[category]/
      learn-dagbani/[course]/[lesson]/
      dictionary/[word]/
      quiz/
      progress/
      leaderboard/
      archive/
      map/
      settings/
      saved/
      admin/
  components/
    ui/          Button, Card, Badge, Input, SearchBar, ProgressBar, Avatar, Tabs, Logo
    layout/      PublicHeader, Footer, Sidebar, Topbar
    dashboard/   StatCard, QuickAccessCard
    learning/    CourseCard, AudioButton
    culture/     CategoryCard
    archive/     MediaCard
    auth/        AuthCard
  data/          Mock data: courses, dictionary, culture, archive, places, quiz
```

## Design tokens

Brand colors, fonts and radii live in `src/app/globals.css` under the
`@theme` block, and map directly to Tailwind utilities (e.g. `bg-forest`,
`text-muted`, `border-border`, `font-display`). Fonts (Playfair Display,
Inter) are loaded via a `<link>` tag in `src/app/layout.tsx` so no
network access is required at build time.

## Firebase readiness

The data layer under `src/data/` mirrors the collections this app will
eventually read from Firestore (`courses`, `lessons`, `vocabulary`,
`archiveItems`, `culturalPlaces`, `quizQuestions`, `users`, `progress`,
`bookmarks`). Swap the static imports for Firestore queries when ready —
no page or component needs to change shape.

Audio playback, the map, and authentication are built as UI-complete
placeholders (`AudioButton`, the map pin interface, the login/signup
forms) ready to be wired to real Dagbani audio files, Mapbox/Google
Maps, and Firebase Authentication respectively.

## Notes on images

Photography throughout the app uses stock imagery from Unsplash as
placeholders for real, licensed Dagbon cultural photography. Swap the
URLs in `src/data/images.ts` for local or licensed assets before
launch.
