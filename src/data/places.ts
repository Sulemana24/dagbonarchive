import { IMG } from "./images";

export type Place = {
  slug: string;
  name: string;
  x: number; // percent position on map placeholder
  y: number;
  info: string;
  significance: string;
  image: string;
};

export const places: Place[] = [
  {
    slug: "yendi",
    name: "Yendi",
    x: 62,
    y: 30,
    info: "Yendi is the traditional seat of the Ya-Na, the King of Dagbon, and the historical capital of the Dagbon Kingdom.",
    significance: "Seat of the Ya-Na and center of Dagbon governance.",
    image: IMG.kingdom,
  },
  {
    slug: "savelugu",
    name: "Savelugu",
    x: 45,
    y: 22,
    info: "Savelugu is a major traditional and administrative town within Dagbon, home to the Savelugu-Naa.",
    significance: "Seat of a senior Dagbon divisional chief.",
    image: IMG.places,
  },
  {
    slug: "tamale",
    name: "Tamale",
    x: 40,
    y: 45,
    info: "Tamale is the largest city in Northern Ghana and a major hub connecting Dagbon communities.",
    significance: "Regional capital and commercial center.",
    image: IMG.history,
  },
  {
    slug: "gushegu",
    name: "Gushegu",
    x: 70,
    y: 15,
    info: "Gushegu is a traditional area within Dagbon known for its farming communities and local markets.",
    significance: "Traditional area and market town.",
    image: IMG.traditions,
  },
  {
    slug: "karaga",
    name: "Karaga",
    x: 58,
    y: 12,
    info: "Karaga is the seat of the Karaga-Naa, one of the senior chiefs within the Dagbon traditional hierarchy.",
    significance: "Seat of a senior divisional chief.",
    image: IMG.people,
  },
  {
    slug: "tolon",
    name: "Tolon",
    x: 30,
    y: 40,
    info: "Tolon is the seat of the Tolon-Naa and a key traditional area west of Tamale.",
    significance: "Seat of a Dagbon divisional chief.",
    image: IMG.places,
  },
];

// Note: coordinates are illustrative placeholders for the map mockup,
// not surveyed GPS positions. Replace with real geodata when integrating
// Mapbox/Google Maps.
