export interface Menus {
  id: number;
  name: name;
  value: value;
  expand: boolean;
  childMenus: FilterItem[]
}

type name = "Platform" | "Genre" | "Feature" | "Release Date";
type value = "platform" | "genre" | "feature" | "release_date";

export interface FilterItem {
  isChecked: boolean;
  id: number;
  name: string;
}
export interface PlatformInterface {
  pc: FilterItem;
  playStation: FilterItem;
  xbox: FilterItem;
  ios: FilterItem;
  mac: FilterItem;
  linux: FilterItem;
  nintendo: FilterItem;
  android: FilterItem;
  atari: FilterItem;
  commodore: FilterItem;
  sega: FilterItem;
  threeDfx: FilterItem;
  neoGeo: FilterItem;
}
export interface GenreInterface {
  action: FilterItem;
  indie: FilterItem;
  adventure: FilterItem;
  rpg: FilterItem;
  strategy: FilterItem;
  shooter: FilterItem;
  casual: FilterItem;
  simulation: FilterItem;
  puzzle: FilterItem;
  arcade: FilterItem;
  platformer: FilterItem;
  racing: FilterItem;
  massivelyMultiplier: FilterItem;
  sports: FilterItem;
  fighting: FilterItem;
  family: FilterItem;
  boardGames: FilterItem;
  educational: FilterItem;
  card: FilterItem;
}
export interface FeatureInterface {
  singlePlayer: FilterItem;
  multiPlayer: FilterItem;
}

export const platform: PlatformInterface = {
  pc: { isChecked: false, id: 1, name: "PC" },
  playStation: { isChecked: false, id: 2, name: "PlayStation" },
  xbox: { isChecked: false, id: 3, name: "Xbox" },
  ios: { isChecked: false, id: 4, name: "iOS" },
  mac: { isChecked: false, id: 5, name: "macOS" },
  linux: { isChecked: false, id: 6, name: "Linux" },
  nintendo: { isChecked: false, id: 7, name: "Nintendo" },
  android: { isChecked: false, id: 8, name: "Android" },
  atari: { isChecked: false, id: 9, name: "Atari" },
  commodore: { isChecked: false, id: 10, name: "Commodore / Amiga" },
  sega: { isChecked: false, id: 11, name: "SEGA" },
  threeDfx: { isChecked: false, id: 12, name: "3dfx" },
  neoGeo: { isChecked: false, id: 13, name: "Neo Geo" },
};

export const genre: GenreInterface = {
  action: { isChecked: false, id: 4, name: "Action" },
  indie: { isChecked: false, id: 51, name: "Indie" },
  adventure: { isChecked: false, id: 3, name: "Adventure" },
  rpg: { isChecked: false, id: 5, name: "RPG" },
  strategy: { isChecked: false, id: 10, name: "Strategy" },
  shooter: { isChecked: false, id: 2, name: "Shooter" },
  casual: { isChecked: false, id: 40, name: "Casual" },
  simulation: { isChecked: false, id: 14, name: "Simulation" },
  puzzle: { isChecked: false, id: 7, name: "Puzzle" },
  arcade: { isChecked: false, id: 11, name: "Arcade" },
  platformer: { isChecked: false, id: 83, name: "Platformer" },
  racing: { isChecked: false, id: 1, name: "Racing" },
  massivelyMultiplier: {
    isChecked: false,
    id: 59,
    name: "Massively Multiplayer",
  },
  sports: { isChecked: false, id: 15, name: "Sports" },
  fighting: { isChecked: false, id: 6, name: "Fighting" },
  family: { isChecked: false, id: 19, name: "Family" },
  boardGames: { isChecked: false, id: 28, name: "Board Games" },
  educational: { isChecked: false, id: 34, name: "Educational" },
  card: { isChecked: false, id: 17, name: "Card" },
};

export const feature: FeatureInterface = {
  singlePlayer: { isChecked: false, id: 31, name: "Single Player" },
  multiPlayer: { isChecked: false, id: 7, name: "MultiPlayer" },
};
