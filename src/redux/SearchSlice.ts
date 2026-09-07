import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStateInterface } from "@app-types/GamesState";
import { GameSectionsState, TrendingGameInterface } from "@app-types/Games";
import {
  SearchStateInterface,
  SearchUpdatePayload,
} from "@app-types/SearchState";
import { platform, genre, feature } from "@Constant/DataTypes";

export interface SearchUpdatePayloadInterface {
  childMenu: SearchUpdatePayload;
  status: boolean;
  menuName: string
}

const initialState: SearchStateInterface = {
  platform: platform,
  genre: genre,
  feature: feature,
};

export const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<SearchUpdatePayloadInterface>) => {
      const { category, key, value } = action.payload.childMenu;
      console.log("action", action);

      console.log("calling state", "category", category);

      if (category === "Platform") {
        console.log("condition platform", platform, "key", key, "value", value);

        state.platform[key].isChecked = value;
      }

      if (category === "Genre") {
        state.genre[key].isChecked = value;
      }

      if (category === "Feature") {
        state.feature[key].isChecked = value;
      }
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
