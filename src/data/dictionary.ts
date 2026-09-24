import { IMG } from "./images";

export type WordEntry = {
  slug: string;
  dagbani: string;
  english: string;
  partOfSpeech: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  example: { dagbani: string; english: string };
  image: string;
  related: string[];
};

export const words: WordEntry[] = [
  {
    slug: "yili",
    dagbani: "Yili",
    english: "House",
    partOfSpeech: "Noun",
    level: "Beginner",
    example: { dagbani: "N yili.", english: "This is my house." },
    image: IMG.house,
    related: ["Family", "Home", "Building"],
  },
  {
    slug: "zan",
    dagbani: "Zan",
    english: "Water",
    partOfSpeech: "Noun",
    level: "Beginner",
    example: { dagbani: "Za laa.", english: "This is water." },
    image: IMG.water,
    related: ["River", "Rain", "Drink"],
  },
  {
    slug: "dasiba",
    dagbani: "Dasiba",
    english: "Good morning",
    partOfSpeech: "Greeting",
    level: "Beginner",
    example: { dagbani: "Dasiba, a ni ti?", english: "Good morning, how are you?" },
    image: IMG.people,
    related: ["Antire", "Greeting", "Ni ti"],
  },
  {
    slug: "bindirigu",
    dagbani: "Bindirigu",
    english: "Food",
    partOfSpeech: "Noun",
    level: "Beginner",
    example: { dagbani: "N bɔri bindirigu.", english: "I want food." },
    image: IMG.food,
    related: ["Market", "Eat", "Kitchen"],
  },
];

export function getWord(slug: string) {
  return words.find((w) => w.slug === slug);
}
