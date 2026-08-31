export interface TrendingGameResponse {
  data: Game[];
}
export interface TrendingGameInterface {
  id: number;
  name: string;
  background_image: string;
}
export interface Game {
  id: number;
  slug: string;
  name: string;
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
  playtime: number;
  suggestions_count: number;
  updated: string; 
  user_game: unknown | null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformEntry[];
  parent_platforms: ParentPlatformEntry[];
  genres: Genre[];
  stores: StoreEntry[];
  clip: unknown | null;
  tags: Tag[];
  esrb_rating: EsrbRating | null;
  short_screenshots: ShortScreenshot[];
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface PlatformRequirements {
  minimum?: string;
  recommended?: string;
}

export interface PlatformEntry {
  platform: Platform;
  released_at: string | null;
  requirements_en: PlatformRequirements | null;
  requirements_ru: PlatformRequirements | null;
}

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface ParentPlatformEntry {
  platform: ParentPlatform;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface StoreEntry {
  id: number;
  store: Store;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface MonthObject {
  month: number;
  name: string;
}