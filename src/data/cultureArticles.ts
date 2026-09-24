export type CultureArticle = {
  slug: string;
  categorySlug:
    | "history"
    | "people"
    | "traditions"
    | "places"
    | "music-arts"
    | "food"
    | "festivals"
    | "gallery";
  title: string;
  excerpt: string;
  image: string;
  author?: string;
  publishedAt: string;
  readingMinutes?: number;
  body: string[];
  tags?: string[];
};

export const cultureArticles: CultureArticle[] = [
  /* ───────────────────────── HISTORY ───────────────────────── */
  {
    slug: "origins-of-dagbon",
    categorySlug: "history",
    title: "The Origins of Dagbon",
    excerpt:
      "From Tohazie the Red Hunter to the founding of a kingdom that has endured for nearly a millennium.",
    image: "/images/culture/history/origins.jpg",
    author: "Dagbon Archive",
    publishedAt: "2025-01-12",
    readingMinutes: 8,
    tags: ["origins", "Tohazie", "kingdom"],
    body: [
      "Dagbon is one of the oldest continuously organized kingdoms in West Africa. Its origins are preserved not in written chronicles but in the oral histories carried by generations of griots, elders, and chiefs.",
      "The lineage traces back to Tohazie — 'the Red Hunter' — a figure said to have migrated south from the Sahel in the eleventh century. His descendants would go on to establish the ruling houses that still shape Dagbon today.",
      "What follows is a brief account of that journey: the founding figures, the consolidation of the kingdom, and the emergence of Yendi as its spiritual heart.",
    ],
  },
  {
    slug: "naa-gbewaa-and-the-founding-line",
    categorySlug: "history",
    title: "Naa Gbewaa and the Founding Line",
    excerpt:
      "How a single lineage consolidated Dagbon into a centralized state with Yendi at its center.",
    image: "/images/culture/history/naa-gbewaa.jpg",
    publishedAt: "2025-02-04",
    readingMinutes: 6,
    tags: ["Naa Gbewaa", "Yendi", "royalty"],
    body: [
      "Naa Gbewaa stands at the head of the royal genealogy of Dagbon. Under his line, the scattered settlements of the savannah were drawn into a single political order.",
      "His descendants spread across what is now Northern Ghana, founding the chiefly houses that would later contest — and share — the paramountcy of Dagbon.",
    ],
  },
  {
    slug: "the-yaa-naa-and-the-skin-lands",
    categorySlug: "history",
    title: "The Yaa Naa and the Skin Lands",
    excerpt:
      "The paramountcy of Dagbon and the network of chiefs, elders, and lands that sustain it.",
    image: "/images/culture/history/yaa-naa.jpg",
    publishedAt: "2025-03-18",
    readingMinutes: 7,
    tags: ["Yaa Naa", "chieftaincy", "governance"],
    body: [
      "The Yaa Naa is the paramount chief of Dagbon — a title that carries both political authority and spiritual weight.",
      "Beneath the Yaa Naa sits a layered system of divisional and sub-divisional chiefs, each tied to a 'skin' — the seat of authority in Dagbamba tradition.",
    ],
  },

  /* ───────────────────────── PEOPLE ───────────────────────── */
  {
    slug: "tohazie-the-red-hunter",
    categorySlug: "people",
    title: "Tohazie, the Red Hunter",
    excerpt:
      "The ancestral figure from whom the royal houses of Dagbon trace their lineage.",
    image: "/images/culture/people/tohazie.jpg",
    publishedAt: "2025-01-18",
    readingMinutes: 5,
    tags: ["Tohazie", "ancestor", "lineage"],
    body: [
      "Tohazie — 'the Red Hunter' — is the ancestral figure at the head of Dagbon's royal genealogy. Oral histories describe his migration from the north and the founding of the line that would become the kings of Dagbon.",
    ],
  },
  {
    slug: "the-lunsi-griots-of-dagbon",
    categorySlug: "people",
    title: "The Lunsi: Griots of Dagbon",
    excerpt:
      "Hereditary drummers and praise-singers whose craft preserves Dagbon's history.",
    image: "/images/culture/people/lunsi.jpg",
    publishedAt: "2025-02-22",
    readingMinutes: 6,
    tags: ["Lunsi", "griots", "oral history"],
    body: [
      "The Lunsi are a hereditary class of drummers and praise-singers in Dagbon. Their role is not merely musical — they are the living archive of the kingdom's history.",
    ],
  },
  {
    slug: "elders-as-keepers-of-knowledge",
    categorySlug: "people",
    title: "Elders as Keepers of Knowledge",
    excerpt:
      "Why Dagbamba tradition places its oldest members at the center of community life.",
    image: "/images/culture/people/elders.jpg",
    publishedAt: "2025-03-05",
    readingMinutes: 4,
    tags: ["elders", "community", "wisdom"],
    body: [
      "In Dagbamba culture, age is a form of authority. Elders are consulted on matters of family, land, and tradition — their memory of past events is treated as a public record.",
    ],
  },

  /* ───────────────────────── TRADITIONS ───────────────────────── */
  {
    slug: "the-skin-of-authority",
    categorySlug: "traditions",
    title: "The Skin of Authority",
    excerpt:
      "Why chiefs in Dagbon sit on skins, not thrones — and what that difference means.",
    image: "/images/culture/traditions/skin.jpg",
    publishedAt: "2025-01-20",
    readingMinutes: 4,
    tags: ["chieftaincy", "skins", "tradition"],
    body: [
      "In Dagbamba tradition, a chief does not sit on a throne. The chief sits on a skin — a symbol drawn from the pastoral history of the people.",
      "The 'skin' is also a title: the 'Skin of Yendi' refers to the office itself, not only to the object.",
    ],
  },
  {
    slug: "naming-ceremonies",
    categorySlug: "traditions",
    title: "Naming Ceremonies",
    excerpt:
      "The rituals that welcome a child into the community — and into the lineage.",
    image: "/images/culture/traditions/naming.jpg",
    publishedAt: "2025-02-10",
    readingMinutes: 5,
    tags: ["birth", "ritual", "family"],
    body: [
      "A child's name in Dagbon is not chosen lightly. It reflects the circumstances of birth, the family's history, and the hopes of the community.",
    ],
  },
  {
    slug: "funeral-rites-of-chiefs",
    categorySlug: "traditions",
    title: "Funeral Rites of Chiefs",
    excerpt:
      "The elaborate ceremonies that mark the passing of a chief — and the continuity of the skin.",
    image: "/images/culture/traditions/funeral.jpg",
    publishedAt: "2025-03-12",
    readingMinutes: 6,
    tags: ["funeral", "chieftaincy", "ritual"],
    body: [
      "When a chief dies in Dagbon, the community enters a period of mourning that can last months. The funeral is not only a farewell — it is the transfer of authority to the next holder of the skin.",
    ],
  },

  /* ───────────────────────── PLACES ───────────────────────── */
  {
    slug: "yendi-the-spiritual-capital",
    categorySlug: "places",
    title: "Yendi: The Spiritual Capital",
    excerpt: "The seat of the Yaa Naa and the ceremonial heart of Dagbon.",
    image: "/images/culture/places/yendi.jpg",
    publishedAt: "2025-01-25",
    readingMinutes: 5,
    tags: ["Yendi", "capital", "Gbewaa Palace"],
    body: [
      "Yendi is the traditional capital of Dagbon. It is home to the Gbewaa Palace, the seat of the Yaa Naa, and the focal point of the kingdom's ceremonial calendar.",
    ],
  },
  {
    slug: "the-gbewaa-palace",
    categorySlug: "places",
    title: "The Gbewaa Palace",
    excerpt:
      "A building that is at once a home, a court, and a monument to the founding line.",
    image: "/images/culture/places/gbewaa-palace.jpg",
    publishedAt: "2025-02-01",
    readingMinutes: 5,
    tags: ["palace", "Yendi", "architecture"],
    body: [
      "The Gbewaa Palace in Yendi is the physical center of the Dagbon chieftaincy system. Its walls, courtyards, and gates encode centuries of ceremonial practice.",
    ],
  },
  {
    slug: "tamale-the-modern-hub",
    categorySlug: "places",
    title: "Tamale: The Modern Hub",
    excerpt:
      "The largest city in Northern Ghana and a bridge between tradition and modernity.",
    image: "/images/culture/places/tamale.jpg",
    publishedAt: "2025-03-08",
    readingMinutes: 4,
    tags: ["Tamale", "city", "modern"],
    body: [
      "Tamale is the largest city in Northern Ghana and home to a large Dagbamba population. It serves as a hub for education, trade, and cultural exchange.",
    ],
  },

  /* ───────────────────────── MUSIC & ARTS ───────────────────────── */
  {
    slug: "the-lunsi-hereditary-drummers",
    categorySlug: "music-arts",
    title: "The Lunsi: Hereditary Drummers of Dagbon",
    excerpt:
      "The guardians of Dagbon's oral tradition — drummers whose rhythms encode history itself.",
    image: "/images/culture/music-arts/lunsi.jpg",
    publishedAt: "2025-02-20",
    readingMinutes: 5,
    tags: ["Lunsi", "drums", "griots"],
    body: [
      "In Dagbon, the drum is not merely an instrument. It is a record — a living archive of names, events, and lineages passed from one generation of Lunsi to the next.",
      "The Lunsi are a hereditary class. Their craft is learned in childhood and refined across a lifetime.",
    ],
  },
  {
    slug: "bamaaya-the-dance-of-the-wet-season",
    categorySlug: "music-arts",
    title: "Bamaaya: The Dance of the Wet Season",
    excerpt:
      "A communal performance tied to rain, fertility, and the rhythms of the agricultural year.",
    image: "/images/culture/music-arts/bamaaya.jpg",
    publishedAt: "2025-03-02",
    readingMinutes: 4,
    tags: ["Bamaaya", "dance", "festival"],
    body: [
      "Bamaaya — 'the dance of the wet season' — is one of the oldest and most widely performed dances of Dagbon.",
      "Its rhythms, songs, and movements are bound to the cycles of farming and the hope of a good harvest.",
    ],
  },
  {
    slug: "the-gonje-fiddle",
    categorySlug: "music-arts",
    title: "The Gonje: Dagbon's Fiddle",
    excerpt:
      "A one-stringed instrument central to the praise-singing tradition of the Lunsi.",
    image: "/images/culture/music-arts/gonje.jpg",
    publishedAt: "2025-03-15",
    readingMinutes: 4,
    tags: ["gonje", "instrument", "music"],
    body: [
      "The gonje is a single-stringed fiddle played by the Lunsi. Its sound is unmistakable — high, nasal, and deeply expressive.",
    ],
  },

  /* ───────────────────────── FOOD ───────────────────────── */
  {
    slug: "tuo-zaafi-the-staple",
    categorySlug: "food",
    title: "Tuo Zaafi: The Staple Meal",
    excerpt: "The millet-based dish at the center of Dagbamba cooking.",
    image: "/images/culture/food/tuo-zaafi.jpg",
    publishedAt: "2025-01-15",
    readingMinutes: 3,
    tags: ["Tuo Zaafi", "millet", "staple"],
    body: [
      "Tuo Zaafi — often shortened to 'TZ' — is a staple meal across Northern Ghana. Made from millet or maize flour, it is served with a variety of soups.",
    ],
  },
  {
    slug: "koko-the-morning-porridge",
    categorySlug: "food",
    title: "Koko: The Morning Porridge",
    excerpt:
      "A millet porridge that starts the day in many Dagbamba households.",
    image: "/images/culture/food/koko.jpg",
    publishedAt: "2025-02-12",
    readingMinutes: 3,
    tags: ["koko", "porridge", "breakfast"],
    body: [
      "Koko is a fermented millet porridge, often served warm for breakfast. It can be sweetened with sugar or spiced with ginger and pepper.",
    ],
  },
  {
    slug: "waakye-rice-and-beans",
    categorySlug: "food",
    title: "Waakye: Rice and Beans",
    excerpt:
      "A dish whose name comes from the Hausa word for 'beans' — and a staple of Northern markets.",
    image: "/images/culture/food/waakye.jpg",
    publishedAt: "2025-03-20",
    readingMinutes: 4,
    tags: ["waakye", "rice", "beans"],
    body: [
      "Waakye is rice and beans cooked together with sorghum leaves, which give it a distinctive reddish-brown color.",
    ],
  },

  /* ───────────────────────── FESTIVALS ───────────────────────── */
  {
    slug: "damba-festival",
    categorySlug: "festivals",
    title: "Damba: The Festival of the Prophet",
    excerpt:
      "One of the most important festivals in Dagbon — a season of prayer, procession, and communal feasting.",
    image: "/images/culture/festivals/damba.jpg",
    publishedAt: "2025-03-10",
    readingMinutes: 6,
    tags: ["Damba", "festival", "religion"],
    body: [
      "Damba is celebrated across Dagbon in the month of the Prophet's birth. It brings together chiefs, elders, and families in a shared ritual calendar.",
      "The festival's centerpiece is the procession of the chief on horseback, accompanied by drummers and praise-singers.",
    ],
  },
  {
    slug: "fire-festival",
    categorySlug: "festivals",
    title: "The Fire Festival",
    excerpt:
      "A night of torches, drumming, and renewal that closes the traditional year.",
    image: "/images/culture/festivals/fire-festival.jpg",
    publishedAt: "2025-01-30",
    readingMinutes: 5,
    tags: ["fire", "festival", "new year"],
    body: [
      "The Fire Festival is held at the end of the traditional year. Torches are lit, drums are played, and the community gathers to mark the passage of time.",
    ],
  },
  {
    slug: "kundum-festival",
    categorySlug: "festivals",
    title: "Kundum: The Harvest Festival",
    excerpt:
      "A harvest celebration shared by several peoples of the Western Region.",
    image: "/images/culture/festivals/kundum.jpg",
    publishedAt: "2025-02-28",
    readingMinutes: 5,
    tags: ["Kundum", "harvest", "festival"],
    body: [
      "Kundum is a harvest festival celebrated by the Nzema, Ahanta, and other peoples of Ghana's Western Region. It shares themes of renewal and thanks with festivals across the country.",
    ],
  },

  /* ───────────────────────── GALLERY ───────────────────────── */
  {
    slug: "royal-regalia-in-photographs",
    categorySlug: "gallery",
    title: "Royal Regalia in Photographs",
    excerpt:
      "A curated set of images documenting the ceremonial dress and regalia of Dagbon's chiefs.",
    image: "/images/culture/gallery/regalia.jpg",
    publishedAt: "2025-02-08",
    readingMinutes: 3,
    tags: ["regalia", "royalty", "photography"],
    body: [
      "This collection brings together photographs of royal regalia from across Dagbon, documenting the colors, patterns, and symbols that mark chiefly authority.",
    ],
  },
  {
    slug: "market-day-in-tamale",
    categorySlug: "gallery",
    title: "Market Day in Tamale",
    excerpt: "Scenes from one of the largest markets in West Africa.",
    image: "/images/culture/gallery/tamale-market.jpg",
    publishedAt: "2025-03-22",
    readingMinutes: 3,
    tags: ["Tamale", "market", "photography"],
    body: [
      "Tamale's central market is one of the largest in West Africa. These photographs capture a single day in its cycle.",
    ],
  },
  {
    slug: "faces-of-the-archive",
    categorySlug: "gallery",
    title: "Faces of the Archive",
    excerpt:
      "Portraits of the elders, artisans, and storytellers who keep Dagbon's memory alive.",
    image: "/images/culture/gallery/faces.jpg",
    publishedAt: "2025-03-25",
    readingMinutes: 3,
    tags: ["portraits", "people", "photography"],
    body: [
      "Behind every article in this archive is a person who shared their knowledge. This gallery introduces a few of them.",
    ],
  },
];

/* ───────────────────────── HELPERS ───────────────────────── */

export function articlesForCategory(categorySlug: string) {
  return cultureArticles
    .filter((a) => a.categorySlug === categorySlug)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getArticle(categorySlug: string, articleSlug: string) {
  return cultureArticles.find(
    (a) => a.categorySlug === categorySlug && a.slug === articleSlug,
  );
}

export function previewArticlesForCategory(categorySlug: string, count = 3) {
  return articlesForCategory(categorySlug).slice(0, count);
}
