export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does 'Yili' mean?",
    options: ["House", "Water", "Food", "Father"],
    answerIndex: 0,
  },
  {
    id: 2,
    question: "What does 'Zan' mean?",
    options: ["Fire", "Water", "Road", "Chief"],
    answerIndex: 1,
  },
  {
    id: 3,
    question: "How do you say 'Good morning'?",
    options: ["A ni ti", "Naa saha", "Dasiba", "Bindirigu"],
    answerIndex: 2,
  },
  {
    id: 4,
    question: "What does 'Bindirigu' mean?",
    options: ["Food", "Family", "House", "Market"],
    answerIndex: 0,
  },
  {
    id: 5,
    question: "'A ni ti?' is used to ask...",
    options: ["What is your name?", "How are you?", "Where are you going?", "What time is it?"],
    answerIndex: 1,
  },
];

export const users = [
  { id: "u1", name: "Abdul Rahman", level: "Level 1", xp: 2450, avatarSeed: "1" },
  { id: "u2", name: "Aisha Mohammed", level: "Level 2", xp: 2100, avatarSeed: "2" },
  { id: "u3", name: "John Doe", level: "Level 1", xp: 1980, avatarSeed: "3" },
  { id: "u4", name: "Fatima S.", level: "Level 1", xp: 1760, avatarSeed: "4" },
  { id: "u5", name: "Ibrahim", level: "Level 1", xp: 1540, avatarSeed: "5" },
];
