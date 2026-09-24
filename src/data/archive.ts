import { IMG } from "./images";

export type ArchiveItem = {
  id: string;
  title: string;
  category: "Photos" | "Videos" | "Audio" | "Documents";
  event: string;
  date: string;
  image: string;
};

export const archiveItems: ArchiveItem[] = [
  {
    id: "1",
    title: "Traditional Dance",
    category: "Videos",
    event: "Dagbon Festival",
    date: "Mar 2024",
    image: IMG.mediaDance,
  },
  {
    id: "2",
    title: "Oral History",
    category: "Audio",
    event: "Traditional Event",
    date: "Jan 2024",
    image: IMG.mediaFestival,
  },
  {
    id: "3",
    title: "Dagbani Story",
    category: "Documents",
    event: "Historical Document",
    date: "Nov 2023",
    image: IMG.mediaDoc,
  },
  {
    id: "4",
    title: "Damba Festival",
    category: "Photos",
    event: "Damba Celebration",
    date: "Sep 2023",
    image: IMG.festival,
  },
  {
    id: "5",
    title: "Elders in Council",
    category: "Photos",
    event: "Community Gathering",
    date: "Aug 2023",
    image: IMG.people,
  },
  {
    id: "6",
    title: "Lunsi Drumming",
    category: "Audio",
    event: "Traditional Music",
    date: "Jul 2023",
    image: IMG.music,
  },
];

export const archiveFilters = ["All", "Photos", "Videos", "Audio", "Documents"] as const;
