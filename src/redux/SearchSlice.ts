import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStateInterface } from "@app-types/GamesState";
import { GameSectionsState, TrendingGameInterface } from "@app-types/Games";
import {
  SearchStateInterface,
  SearchUpdatePayload,
  UpdateSearchPayload,
} from "@app-types/SearchState";
import { platform, genre, feature } from "@Constant/DataTypes";

const initialState: SearchStateInterface = {
  search: {
    platform: platform,
    genre: genre,
    feature: feature,
  },
};

export const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<SearchUpdatePayload>) => {
      const { category, key, value } = action.payload;
      if (category === "platform") {
        state.search.platform[key].isChecked = value;
      }

      if (category === "genre") {
        state.search.genre[key].isChecked = value;
      }

      if (category === "feature") {
        state.search.feature[key].isChecked = value;
      }
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
