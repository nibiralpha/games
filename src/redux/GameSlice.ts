import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { SearchTrack, TrackData } from "@app-types/PopulerSongs";
// import { MusicInterface } from "@app-types/MusicState";

// const initialState: MusicInterface = {
const initialState = {
  trendingGames: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
};

export const GameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    // setTrendingGames: (state, action: PayloadAction<TrackData[]>) => {
    setTrendingGames: (state, action) => {
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
  },
});

export const {
  setTrendingGames,
  setTrendingGamesLoading,
} = GameSlice.actions;
export default GameSlice.reducer;
