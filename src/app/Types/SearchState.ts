import { FeatureInterface, GenreInterface, PlatformInterface } from '@Constant/DataTypes';

export interface SearchStateInterface {
  // search: SearchedDataStateInterface;
  platform: PlatformInterface;
  genre: GenreInterface;
  mode: FeatureInterface;
  search: string;
  orderBy: 'asc' | 'desc';
}

export interface PlatformStateDetail {
  isChecked: boolean;
  id: number;
}

export type MenuName = 'Platform' | 'Genre' | 'Feature';
export type FilterParentMenu = 'platform' | 'genre' | 'mode';
export type orderBy = 'asc' | 'desc';
