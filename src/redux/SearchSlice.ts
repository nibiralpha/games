import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  MenuName,
  SearchStateInterface,
} from '@app-types/SearchState';
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
  orderBy: 'asc' | 'desc'
}

const initialState: SearchStateInterface = {
  platform: platform,
  genre: genre,
  feature: feature,
  search: '',
  orderBy: "asc"
};

export const SearchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<SearchText>) => {
      return { ...state, search: action.payload.search };
    },
    setOrderBy: (state, action: PayloadAction<OrderBy>) => {
      return { ...state, orderBy: action.payload.orderBy };
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
        const item = state.genre.find((g) => g.id === childCategory.id);

        if (item) {
          item.isChecked = status;
        }
      }

      if (parentCategory === 'Feature') {
        const item = state.feature.find((f) => f.id === childCategory.id);

        if (item) {
          item.isChecked = status;
        }
      }
    },
  },
});

export const { setCategory, setSearch, setOrderBy } = SearchSlice.actions;
export default SearchSlice.reducer;
