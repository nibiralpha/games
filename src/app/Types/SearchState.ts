import { FeatureInterface, GenreInterface, PlatformInterface } from '@Constant/DataTypes';

export interface SearchStateInterface {
  // search: SearchedDataStateInterface;
  platform: PlatformInterface;
  genres: GenreInterface;
  mode: FeatureInterface;
  search: string;
  orderBy: 'asc' | 'desc';
}

export interface PlatformStateDetail {
  isChecked: boolean;
  id: number;
}

export type MenuName = 'Platform' | 'Genre' | 'Feature';
export type FilterParentMenu = 'platform' | 'genres' | 'mode';
export type orderBy = 'asc' | 'desc';
