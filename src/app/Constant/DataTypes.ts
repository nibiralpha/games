export interface Menus {
  id: number;
  name: name;
  value: value;
  expand: boolean;
  childMenus: FilterItem[];
}

type name = "Platform" | "Genre" | "Feature" | "Release Date";
type value = "platform" | "genre" | "feature" | "release_date";

export interface FilterItem {
  isChecked: boolean;
  id: number;
  name: string;
  alias: string;
}

export type PlatformInterface = FilterItem[];
export type GenreInterface = FilterItem[];
export type FeatureInterface = FilterItem[];

export const platform: PlatformInterface = [
  { isChecked: false, id: 1, name: "PC", alias: "pc" },
  { isChecked: false, id: 2, name: "PlayStation", alias: "play_station" },
  { isChecked: false, id: 3, name: "Xbox", alias: "xbox" },
  { isChecked: false, id: 4, name: "iOS", alias: "ios" },
  { isChecked: false, id: 5, name: "macOS", alias: "mac" },
  { isChecked: false, id: 6, name: "Linux", alias: "linux" },
  { isChecked: false, id: 7, name: "Nintendo", alias: "nintendo" },
  { isChecked: false, id: 8, name: "Android", alias: "android" },
  { isChecked: false, id: 9, name: "Atari", alias: "atari" },
  { isChecked: false, id: 10, name: "Commodore / Amiga", alias: "commodore" },
  { isChecked: false, id: 11, name: "SEGA", alias: "sega" },
  { isChecked: false, id: 12, name: "3dfx", alias: "three_dfx" },
  { isChecked: false, id: 13, name: "Neo Geo", alias: "neo_geo" },
];

export const genre: GenreInterface = [
  { isChecked: false, id: 4, name: "Action", alias: "action" },
  { isChecked: false, id: 51, name: "Indie", alias: "indie" },
  { isChecked: false, id: 3, name: "Adventure", alias: "adventure" },
  { isChecked: false, id: 5, name: "RPG", alias: "rpg" },
  { isChecked: false, id: 10, name: "Strategy", alias: "strategy" },
  { isChecked: false, id: 2, name: "Shooter", alias: "shooter" },
  { isChecked: false, id: 40, name: "Casual", alias: "casual" },
  { isChecked: false, id: 14, name: "Simulation", alias: "simulation" },
  { isChecked: false, id: 7, name: "Puzzle", alias: "puzzle" },
  { isChecked: false, id: 11, name: "Arcade", alias: "arcade" },
  { isChecked: false, id: 83, name: "Platformer", alias: "platformer" },
  { isChecked: false, id: 1, name: "Racing", alias: "racing" },
  {
    isChecked: false,
    id: 59,
    name: "Massively Multiplayer",
    alias: "massively_multiplier",
  },
  { isChecked: false, id: 15, name: "Sports", alias: "sports" },
  { isChecked: false, id: 6, name: "Fighting", alias: "fighting" },
  { isChecked: false, id: 19, name: "Family", alias: "family" },
  { isChecked: false, id: 28, name: "Board Games", alias: "board_games" },
  { isChecked: false, id: 34, name: "Educational", alias: "educational" },
  { isChecked: false, id: 17, name: "Card", alias: "card" },
];

export const feature: FeatureInterface = [
  { isChecked: false, id: 31, name: "Single Player", alias: "single_player" },
  { isChecked: false, id: 7, name: "MultiPlayer", alias: "multi_player" },
];
