import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStateInterface } from "@app-types/GamesState";
import { GameSectionsState, TrendingGameInterface } from "@app-types/Games";

const initialState: GameStateInterface = {
  trendingGames: {
    list: [],
    loading: true,
  },
  monthlyGames: {
    list: [],
    loading: true,
  },
  lastRecentAnticipetdGames: {
    data: {
      last60Days: [],
      next60Days: [],
      mostAnticipated: [],
    },
    loading: true,
  },
  serachResults: {
    list: [],
    loading: true,
  },
};

export const GameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setTrendingGames: (
      state,
      action: PayloadAction<TrendingGameInterface[]>,
    ) => {
      return {
        ...state,
        trendingGames: { ...state.trendingGames, list: action.payload },
      };
    },
    setTrendingGamesLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        trendingGames: { ...state.trendingGames, loading: action.payload },
      };
    },
    setMonthlyGames: (
      state,
      action: PayloadAction<TrendingGameInterface[]>,
    ) => {
      return {
        ...state,
        monthlyGames: { ...state.monthlyGames, list: action.payload },
      };
    },
    setMonthlyGamesLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        monthlyGames: { ...state.monthlyGames, loading: action.payload },
      };
    },
    setlastRecentAnticipetdGames: (
      state,
      action: PayloadAction<GameSectionsState>,
    ) => {
      return {
        ...state,
        lastRecentAnticipetdGames: {
          ...state.lastRecentAnticipetdGames,
          data: action.payload,
        },
      };
    },
    setlastRecentAnticipetdGamesLoading: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      return {
        ...state,
        lastRecentAnticipetdGames: {
          ...state.lastRecentAnticipetdGames,
          loading: action.payload,
        },
      };
    },

    setSearchResult: (state, action: PayloadAction<TrendingGameInterface[]>) => {
      return {
        ...state,
        serachResults: { ...state.serachResults, list: action.payload },
      };
    },
    setSearchResultLoadding: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        serachResults: { ...state.serachResults, loading: action.payload },
      };
    },
  },
});

export const {
  setTrendingGames,
  setTrendingGamesLoading,
  setMonthlyGames,
  setMonthlyGamesLoading,
  setlastRecentAnticipetdGames,
  setlastRecentAnticipetdGamesLoading,
  setSearchResult,
  setSearchResultLoadding
} = GameSlice.actions;
export default GameSlice.reducer;
