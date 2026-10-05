import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '@app-types/Games';
import { GameDetailStateInterface } from '@app-types/DetailState';

const initialState: GameDetailStateInterface = {
  data: {} as Game,
  loading: true,
};

export const DetailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setGameDetails: (state, action: PayloadAction<Game>) => {
      state.data = action.payload;
    },

    setGameDetailsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setGameDetails, setGameDetailsLoading } = DetailSlice.actions;

export default DetailSlice.reducer;
