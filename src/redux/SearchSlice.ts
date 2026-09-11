import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameStateInterface } from '@app-types/GamesState';
import { GameSectionsState, TrendingGameInterface } from '@app-types/Games';
import {
  MenuName,
  SearchStateInterface,
  // SearchUpdatePayload,
} from '@app-types/SearchState';
import { platform, genre, feature, ChildMenu } from '@Constant/DataTypes';

export interface SearchUpdatePayloadInterface {
  parentCategory: MenuName;
  childCategory: ChildMenu;
  status: boolean;
}

const initialState: SearchStateInterface = {
  platform: platform,
  genre: genre,
  feature: feature,
};

export const SearchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<SearchUpdatePayloadInterface>) => {
      const { parentCategory } = action.payload;

      if (parentCategory === 'Platform') {
        const item = state.platform.find((p) => p.id === action.payload.childCategory.id);
        if (item) {
          item.isChecked = action.payload.status;
        }
      }

      if (parentCategory === 'Genre') {
        const item = state.genre.find((g) => g.id === action.payload.childCategory.id);
        if (item) {
          item.isChecked = action.payload.status;
        }
      }

      if (parentCategory === 'Feature') {
        const item = state.feature.find((f) => f.id === action.payload.childCategory.id);
        if (item) {
          item.isChecked = action.payload.status;
        }
      }
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
