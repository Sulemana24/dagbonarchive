import { IMG } from "./images";
import YaNaa from "../../public/images/ya-naa.jpg";
import Learning from "../../public/images/classroom.png";
import Music from "../../public/images/lungsi.jpg";
import FireFestival from "../../public/images/fire-festival.jpg";
import Map from "../../public/images/dagbon.png";
import Food from "../../public/images/wasawasa.jpg";
import Traditions from "../../public/images/customs.jpg";
import Gallery from "../../public/images/people.jpg";
import Proverb from "../../public/images/proverb.jpg";
import Lungsi2 from "../../public/images/lungsi2.jpg";

export const cultureCategories = [
  {
    slug: "history",
    title: "History",
    description: "The story of Dagbon",
    image: Lungsi2,
    icon: "BookOpen",
  },
  {
    slug: "people",
    title: "People",
    description: "Notable figures & elders",
    image: YaNaa,
    icon: "Users",
  },
  {
    slug: "traditions",
    title: "Traditions",
    description: "Customs & beliefs",
    image: Traditions,
    icon: "Sparkles",
  },
  {
    slug: "places",
    title: "Places",
    description: "Landmarks & communities",
    image: Map,
    icon: "Map",
  },
  {
    slug: "music-arts",
    title: "Music & Arts",
    description: "Instruments, songs, dance",
    image: Music,
    icon: "Volume2",
  },
  {
    slug: "food",
    title: "Food",
    description: "Traditional cuisine",
    image: Food,
    icon: "UtensilsCrossed",
  },
  {
    slug: "festivals",
    title: "Festivals",
    description: "Celebrations & events",
    image: FireFestival,
    icon: "PartyPopper",
  },
  {
    slug: "gallery",
    title: "Gallery",
    description: "Photos & videos",
    image: Gallery,
    icon: "Image",
  },
  {
    slug: "proverbs",
    title: "Ŋaha(Proverbs)",
    description: "Wisdom & Sayings",
    image: Proverb,
    icon: "BookOpen",
  },
];

export const featured = [
  {
    slug: "dagbon-kingdom",
    title: "The Dagbon Kingdom",
    description: "History & Leadership",
    image: IMG.kingdom,
  },
  {
    slug: "traditional-festivals",
    title: "Traditional Festivals",
    description: "Culture & Celebrations",
    image: FireFestival,
  },
  {
    slug: "dagbani-language",
    title: "Dagbani Language",
    description: "Words, Phrases & More",
    image: Learning,
  },
  {
    slug: "traditional-music",
    title: "Traditional Music",
    description: "Sounds of Dagbon",
    image: Music,
  },
];
