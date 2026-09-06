import { RecentGameInterface } from "./GameByMonth";
import {
  GameSectionsState,
  LastNextAnticipatedInterface,
  TrendingGameInterface,
} from "./Games";

export interface SearchStateInterface {
  // search: SearchedDataStateInterface;
  platform: PlatformInterface;
  genre: GenraInterface;
  feature: FeatureInterface;
}
export interface SearchedDataStateInterface {
  platform: PlatformInterface;
  genre: GenraInterface;
  feature: FeatureInterface;
}

export interface PlatformInterface {
  playStation: PlatformStateDetail;
  xbox: PlatformStateDetail;
  pc: PlatformStateDetail;
}

export interface PlatformStateDetail {
  isChecked: boolean;
  id: number;
}

export interface GenraInterface {
  action: PlatformStateDetail;
  racing: PlatformStateDetail;
}

export interface FeatureInterface {
  multiPlayer: PlatformStateDetail;
  singlePlayer: PlatformStateDetail;
}
export interface UpdateSearchPayload {
  category: "Platform";
  key: keyof PlatformInterface;
  value: boolean;
}

export interface GenreUpdatePayload {
  category: "Genre";
  key: keyof GenraInterface;
  value: boolean;
}

export interface FeatureUpdatePayload {
  category: "Feature";
  key: keyof FeatureInterface;
  value: boolean;
}

export type SearchUpdatePayload =
  | UpdateSearchPayload
  | GenreUpdatePayload
  | FeatureUpdatePayload;
