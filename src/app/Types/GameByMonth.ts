import type {
  Rating,
  AddedByStatus,
  Tag,
  EsrbRating,
  ShortScreenshot,
} from "./Games";

export interface RecentGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RecentGameInterface[];
}

export interface RecentGameInterface {
  id: number;
  slug: string;
  name: string;
  playtime: number;

  platforms: RecentPlatformEntry[];

  stores: RecentStoreEntry[];

  released: string;
  tba: boolean;
  background_image: string;

  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;

  added: number;
  added_by_status: AddedByStatus;

  metacritic: number | null;
  suggestions_count: number;
  updated: string;

  score: number | null;

  clip: unknown | null;

  tags: Tag[];
  esrb_rating: EsrbRating | null;
  user_game: unknown | null;

  reviews_count: number;
  saturated_color: string;
  dominant_color: string;

  short_screenshots: ShortScreenshot[];

  parent_platforms: RecentParentPlatformEntry[];

  genres: RecentGenre[];
}

export interface RecentPlatformEntry {
  platform: RecentPlatform;
}

export interface RecentPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface RecentStoreEntry {
  store: RecentStore;
}

export interface RecentStore {
  id: number;
  name: string;
  slug: string;
}

export interface RecentParentPlatformEntry {
  platform: RecentParentPlatform;
}

export interface RecentParentPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface RecentGenre {
  id: number;
  name: string;
  slug: string;
}
