import {
  FeatureInterface,
  GenreInterface,
  PlatformInterface,
} from "@Constant/DataTypes";
import { RecentGameInterface } from "./GameByMonth";
import {
  GameSectionsState,
  LastNextAnticipatedInterface,
  TrendingGameInterface,
} from "./Games";

export interface SearchStateInterface {
  // search: SearchedDataStateInterface;
  platform: PlatformInterface;
  genre: GenreInterface;
  feature: FeatureInterface;
}
// export interface SearchedDataStateInterface {
//   platform: PlatformInterface;
//   genre: GenraInterface;
//   feature: FeatureInterface;
// }

// export interface PlatformInterface {
//   playStation: PlatformStateDetail;
//   xbox: PlatformStateDetail;
//   pc: PlatformStateDetail;
// }

export interface PlatformStateDetail {
  isChecked: boolean;
  id: number;
}

export type FilterCategory = "Platform" | "Genre" | "Feature";
export type FilterParentMenu = "platform" | "genre" | "feature";
// export interface GenraInterface {
//   action: PlatformStateDetail;
//   racing: PlatformStateDetail;
// }

// export interface FeatureInterface {
//   multiPlayer: PlatformStateDetail;
//   singlePlayer: PlatformStateDetail;
// }
// export interface PlatformUpdatePayload {
//   category: "Platform";
//   key: keyof PlatformInterface;
//   value: boolean;
// }

// export interface GenreUpdatePayload {
//   category: "Genre";
//   key: keyof GenreInterface;
//   value: boolean;
// }

// export interface FeatureUpdatePayload {
//   category: "Feature";
//   key: keyof FeatureInterface;
//   value: boolean;
// }

// export type SearchUpdatePayload =
//   | PlatformUpdatePayload
//   | GenreUpdatePayload
//   | FeatureUpdatePayload;

