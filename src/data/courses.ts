import { IMG } from "./images";

export type Lesson = {
  slug: string;
  title: string;
  dagbani: string;
  translation: string;
  pronunciation: string;
  image: string;
};

export type Module = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  level: string;
  title: string;
  description: string;
  modules: number;
  lessonCount: number;
  progress: number; // 0-100
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  moduleList: Module[];
};

export const courses: Course[] = [
  {
    slug: "level-1-basics",
    level: "Level 1",
    title: "Basics",
    description: "Greetings, numbers, family...",
    modules: 8,
    lessonCount: 40,
    progress: 62,
    difficulty: "Beginner",
    image: IMG.courseGreetings,
    moduleList: [
      {
        title: "Module 1: Greetings",
        lessons: [
          {
            slug: "lesson-1",
            title: "Hello",
            dagbani: "A ni ti?",
            translation: "How are you?",
            pronunciation: "ah-nee-tee",
            image: IMG.courseGreetings,
          },
          {
            slug: "lesson-2",
            title: "Good Morning",
            dagbani: "Dasiba",
            translation: "Good morning",
            pronunciation: "dah-see-bah",
            image: IMG.people,
          },
        ],
      },
      {
        title: "Module 2: Numbers",
        lessons: [
          {
            slug: "lesson-3",
            title: "Counting to Five",
            dagbani: "Yini, Ayi, Atat\u0292, Anahi, Anu",
            translation: "One, two, three, four, five",
            pronunciation: "yee-nee, ah-yee...",
            image: IMG.language,
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-everyday-life",
    level: "Level 2",
    title: "Everyday Life",
    description: "Food, market, home...",
    modules: 8,
    lessonCount: 45,
    progress: 0,
    difficulty: "Intermediate",
    image: IMG.food,
    moduleList: [
      {
        title: "Module 1: At the Market",
        lessons: [
          {
            slug: "lesson-1",
            title: "Buying Food",
            dagbani: "N bɔri bindirigu",
            translation: "I want food",
            pronunciation: "n boh-ree bin-dee-ree-goo",
            image: IMG.food,
          },
        ],
      },
    ],
  },
  {
    slug: "level-3-conversations",
    level: "Level 3",
    title: "Conversations",
    description: "Real-life conversations...",
    modules: 6,
    lessonCount: 35,
    progress: 0,
    difficulty: "Advanced",
    image: IMG.traditions,
    moduleList: [
      {
        title: "Module 1: Meeting Elders",
        lessons: [
          {
            slug: "lesson-1",
            title: "Greeting an Elder",
            dagbani: "Naa saha?",
            translation: "Is the chief well?",
            pronunciation: "nah sah-hah",
            image: IMG.people,
          },
        ],
      },
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  for (const mod of course.moduleList) {
    const lesson = mod.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { lesson, module: mod, course };
  }
  return undefined;
}
