import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameStateInterface } from "@app-types/GamesState";
import { TrendingGameInterface } from "@app-types/Games";
import { RecentGameInterface } from "../app/Types/GameByMonth";

const initialState: GameStateInterface = {
  trendingGames: {
    list: [],
    loading: true,
  },
  monthlyGames: {
    list: [],
    loading: true,
  }
};

export const GameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setTrendingGames: (state, action: PayloadAction<TrendingGameInterface[]>) => {
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
    setMonthlyGames: (state, action: PayloadAction<TrendingGameInterface[]>) => {
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
  },
});

export const {
  setTrendingGames,
  setTrendingGamesLoading,
  setMonthlyGames,
  setMonthlyGamesLoading
} = GameSlice.actions;
export default GameSlice.reducer;
