import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MenuName, SearchStateInterface } from '@app-types/SearchState';
import { platform, genre, feature, ChildMenu } from '@Constant/DataTypes';

export interface SearchUpdatePayloadInterface {
  parentCategory: MenuName;
  childCategory: ChildMenu;
  status: boolean;
}

export interface SearchText {
  search: string;
}

export interface OrderBy {
  orderBy: 'asc' | 'desc';
}

const initialState: SearchStateInterface = {
  platform: platform,
  genres: genre,
  mode: feature,
  search: '',
  orderBy: 'asc',
  page_size: 20,
  page: 1,
};

export const SearchSlice = createSlice({
  name: 'Search',

  initialState,

  reducers: {
    setSearch: (state, action: PayloadAction<SearchText>) => {
      state.search = action.payload.search;
      state.page = 1;
    },

    setOrderBy: (state, action: PayloadAction<OrderBy>) => {
      state.orderBy = action.payload.orderBy;
      state.page = 1;
    },

    setCategory: (state, action: PayloadAction<SearchUpdatePayloadInterface>) => {
      const { parentCategory, childCategory, status } = action.payload;

      if (parentCategory === 'Platform') {
        const item = state.platform.find((p) => p.id === childCategory.id);

        if (item) {
          item.isChecked = status;
        }
      }

      if (parentCategory === 'Genre') {
        const item = state.genres.find((g) => g.id === childCategory.id);

        if (item) {
          item.isChecked = status;
        }
      }

      if (parentCategory === 'Feature') {
        const item = state.mode.find((f) => f.id === childCategory.id);

        if (item) {
          item.isChecked = status;
        }
      }

      // New filter = start from page 1
      state.page = 1;
    },

    hydrateFiltersFromUrl: (
      state,
      action: PayloadAction<{
        platform?: number[];
        genres?: number[];
        mode?: string[];
        name?: string;
        order?: 'asc' | 'desc';
      }>,
    ) => {
      const { platform, genres, mode, name, order } = action.payload;

      if (name !== undefined) {
        state.search = name;
      }

      if (order !== undefined) {
        state.orderBy = order;
      }

      if (platform) {
        state.platform.forEach((item) => {
          item.isChecked = platform.includes(item.id);
        });
      }

      if (genres) {
        state.genres.forEach((item) => {
          item.isChecked = genres.includes(item.id);
        });
      }

      if (mode) {
        state.mode.forEach((item) => {
          item.isChecked = mode.includes(item.alias);
        });
      }

      state.page = 1;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const {
  setCategory,
  setSearch,
  setOrderBy,
  hydrateFiltersFromUrl,
  setPage,
} = SearchSlice.actions;

export default SearchSlice.reducer;